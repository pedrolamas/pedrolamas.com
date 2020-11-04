---
layout: post
title: Exposing the client IPs to Docker containers in Synology NAS
date: 2020-11-04T11:28:11+00:00
categories:
  - Docker
tags:
  - Docker
  - Synology
  - AdGuard Home
  - Pi-hole
---

I have a DS412+ Synology NAS that's been running continuously for a few years now!

It's a great NAS, but it's the extra features like being able to easily run Docker containers that makes me like it even more!

I recently tried running an [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) Docker container and with no surprise, it worked perfectly; after setting the NAS IP as the DNS server in my router, all my local DNS requests were sent to AdGuard Home and I could see it doing its job of blocking any known advertisement or tracking hosts.

There was however a small issue: the IP of the client machine was not showing up!

![AdGuard Home Docker container not showing the client IPs](/wp-content/uploads/2020/11/AdGuard-Home-no-client-IPs.png 'AdGuard Home Docker container not showing the client IPs')

I found a [similar issue](https://github.com/pi-hole/docker-pi-hole/issues/135) had previously been open on Pi-hole GitHub repository, but no solution provided.

As I couldn't find any fix for this problem, I posted the issue to the [Synology Community](https://community.synology.com/enu/forum/1/post/134465) forums, but that didn't provide a solution either...

At this stage, I tried comparing the Docker iptables on my Synology NAS with the ones in a Raspberry Pi, and that's when I noticed that the Docker pre-routing rules were missing.

I then SSH'ed to the Synology NAS and manually added the missing rules:

```sh
sudo iptables -t nat -A PREROUTING -m addrtype --dst-type LOCAL -j DOCKER
sudo iptables -t nat -A PREROUTING -m addrtype --dst-type LOCAL ! --dst 127.0.0.0/8 -j DOCKER
```

**Success!!**

I could now see the client IPs and hostnames on AdGuard Home:

![AdGuard Home Docker container now showing the client IPs or hostnames](/wp-content/uploads/2020/11/AdGuard-Home-client-IPs-and-hostnames.png 'AdGuard Home Docker container now showing the client IPs or hostnames')

I was aware that this change to the Synology iptables was not a permanent one and would have to be done on every reboot, so the next step was to get a more permanent solution!

The simplest solution I found was to use the Synology Task Scheduler to run a user-defined script on every reboot

You can check the script and instructions on how to use it [here](https://gist.github.com/pedrolamas/db809a2b9112166da4a2dbf8e3a72ae9).

Please be aware that **these changes to the iptables will probably mess with the Synology Firewall**, so just be careful with that if you do use the Firewall!

Also be aware that this goes with WOMM certification, so it works on my machine but there are no guarantees it will work on yours!
