---
layout: post
title: How to connect to a WireGuard VPN server from a Docker container
date: 2020-11-20T14:15:12+00:00
last_modified_at: 2023-08-03T23:50:42+01:00
image: /wp-content/uploads/2020/11/How-to-connect-to-a-WireGuard-VPN-server-from-a-Docker-container.png
categories:
  - Docker
tags:
  - Docker
  - Container
  - Network
  - WireGuard
  - VPN
  - TorGuard
---

I like to use Docker containers for pretty much everything I do, so I wanted to see if I could have a Docker container connect to a WireGuard VPN Server, and then have other containers share that same connection.

Surprisingly, this is not only possible, but it is also amazingly easy to achieve!

## Preparation

We will be using the [linuxserver/wireguard](https://hub.docker.com/r/linuxserver/wireguard) Docker image. This image works in either WireGuard server or client mode, but we will be using it just as a client.

For this post, I will focus on having the VPN connection isolated from the host system by using a custom bridge network.

We will also be using [docker-compose](https://docs.docker.com/compose/) to maintain the full Docker stack.

We will create a folder called "wireguard" that will store all the data from the container. Inside this folder we will place a file called "wg0.conf" that will hold the WireGuard connection settings.

Our final folder structure looks like this:

```text
.\docker-compose.yaml
.\wireguard\wg0.conf
```

## Getting a WireGuard VPN server

There are quite a few VPN Server providers out there that already provide WireGuard servers for you to connect, so if you already have a VPN service subscription, you should probably check there first for WireGuard support!

I've been a happy customer of [TorGuard](https://torguard.net/aff.php?aff=6755) for a few years now, and I was quite pleased to see them adding WireGuard support recently.

If you are considering registering for a TorGuard subscription plan, you can use [this link](https://torguard.net/aff.php?aff=6755) and the promo code **PL50P** to get a lifetime discount of 50% off!

> _Disclaimer: neither TorGuard nor anyone else sponsored this post, but as I said I've been paying and using their products for quite a few years to the point I do recommend them. The link above is an affiliate link and does pay a small commission to me for anyone who does use it with the discount code._

Here is how you can generate the WireGuard connection settings in TorGuard:

1. Login and open the [Config Generator](https://torguard.net/tgconf.php?action=vpn-openvpnconfig)
2. Change the "VPN Tunnel type" to "WireGuard"
3. Select one of the available servers on the "VPN Server Hostname/IP"
4. Enter your "VPN Username" and "VPN Password"
5. Click on "Generate Config"

The last step is to copy the "Config Output" contents to the "wg0.conf" file.

## Running WireGuard from Docker

Here is the basic "docker-compose.yaml" file to get the container running:

```yaml
version: '3.7'

services:
  wireguard:
    image: linuxserver/wireguard
    container_name: wireguard
    restart: unless-stopped
    networks:
      - backbone
    volumes:
      - './wireguard:/config'
      - '/lib/modules:/lib/modules:ro'
    environment:
      - PUID=1000
      - PGID=1000
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1

networks:
  backbone:
    driver: bridge
```

If you read the [Docker image documentation](https://hub.docker.com/r/linuxserver/wireguard), you will see it requires some special capabilities that need to be enabled for it to work. You can see those on the `cap_add` and `sysctls` yaml nodes above.

We are now ready to start, so just enter `docker-compose up -d` to create the "backbone" bridge network, and create and start the "wireguard" container.

## Testing and Validating

Run the following commands now:

```bash
curl -w "\n" ifconfig.me

docker exec -it wireguard curl -w "\n" ifconfig.me
```

The first command will retrieve your real Public IP, matching the one your ISP has provided you with.

The second command will do the same but from inside the Wireguard Docker container, and it should match the connected WireGuard VPN Server IP.

## Sharing the connection with other containers

Under the `services` node of our "docker-compose.yaml" file, add the following service:

```yaml
# under the existing "services:" node, add the following content
ubuntu:
  depends_on:
    - wireguard
  image: ubuntu
  container-name: ubuntu
  network_mode: service:wireguard
  command: >-
    sleep 10 && curl -w "\n" ifconfig.me
```

After saving the changes to the file, run `docker-compose up -d` to start this new container.

The above service will start a new Ubuntu Docker container after the WireGuard one, pause for 10 seconds, and then retrieve the Public IP address; if all goes well, this should match the WireGuard VPN Server IP.

The trick here is to use the `network_mode: service:<service-name>` to make the new container reuse another container's network stack!
