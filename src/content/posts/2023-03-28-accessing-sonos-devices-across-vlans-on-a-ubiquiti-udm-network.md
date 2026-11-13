---
layout: post
title: Accessing Sonos devices across VLANs on a Ubiquiti UDM network
date: 2023-03-28T15:00:23+01:00
categories:
  - Network
tags:
  - Network
  - Ubiquiti
  - UniFi
  - UDM
  - VLANs
  - Sonos
---

My network has been (over)powered by a Ubiquiti UniFi Dream Machine (UDM) for a few years now.

Using the excellent UniFi web interface, I created a few VLANs so I could easily segregate my IoT devices from the rest of the network.

That was all working fine until last Christmas I got myself a Sonos Arc soundbar, and realized that I couldn't have it on VLAN 20 and access on my Android phone in VLAN 40...

After a lot of googling on this problem, I came to realize that Sonos uses multicasting to "announce" their devices to the network; so as long as I could replay those multicast packages across the VLANs, I should be able to access it on my phone without issues!

I found the [multicast-relay](https://github.com/alsmith/multicast-relay) from Al Smith on GitHub, which it said to it could be used to "relay broadcast and multicast packets between interfaces"... so just what I needed!

My solution was to SSH into the UDM (this is disabled by default, but you can enable it on the web interface) and execute the following commands to download and run the `multicast-relay.py` python script:

```sh
cd /tmp
wget https://github.com/alsmith/multicast-relay/raw/master/multicast-relay.py
python3 multicast-relay.py --foreground --verbose --noMDNS --interfaces br20 br40
```

On the final part of the above commands you will notice "br20 br40", those are my VLANs 20 and 40, so you will have to change those to match your own VLANs.

Once the script started, I could see it relaying the Sonos multicast data across VLANs just as I wanted, and when I opened up the Sonos Android app, it quickly found the device and allowed me to add it to the app!

Now the interesting bit is that after adding the Sonos device to the app, I could just stop the script (hit <kbd>Ctrl+C</kbd>) and then delete it, as the app will still work just fine even without seeing those multicast packets ever.
