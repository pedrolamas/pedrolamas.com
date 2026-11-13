---
id: 4577
title: Changing the Raspberry Pi Touch Display Rotation in Windows 10 IoT
date: 2016-04-29T12:48:03+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4577
permalink: /2016/04/29/changing-the-raspberry-pi-touch-display-rotation-in-windows-10-iot/
dsq_thread_id:
  - '4786619755'
image: /wp-content/uploads/2016/04/Windows-10-IoT-on-Raspberry-Pi.png
categories:
  - Windows
tags:
  - IoT
  - Raspberry Pi
  - RPi
  - Windows 10
---

If you have a [Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) running [Windows 10 Core IoT](https://developer.microsoft.com/en-us/windows/iot) and the [7" touch display](https://www.raspberrypi.org/products/raspberry-pi-touch-display/), then this post is for you!

Assuming you already installed the Windows 10 IoT in your Pi 3 and that it is currently up and connected to the network, you can open the Windows 10 IoT Core Dashboard, go to the "My Devices" tab and find your device listed there.

If you now click the "Open in Device Portal" option, the browser will launch, ask you to login with your credentials, and then show you the "Home" page of the Device Portal.

On the bottom you will find the "Display Orientation" option:

![Display Orientation setting in the Device Portal](/wp-content/uploads/2016/04/Display-Orientation.png 'Display Orientation setting in the Device Portal')

Given my touch screen is placed upside down, I changed this setting to "Landscape (Flipped)", and after rebooting the device I noticed that it flipped the touch screen display as requested, but it didn't also flip the touch targets (so you'll need to mentally rotate every point you touch on the screen to make it do what it is supposed to do)!

Under the hood, what this setting is doing is adding `display_rotation=2` to the Raspberry Pi "config.txt" file, but that's not the proper way of doing this for the touch screen!

After reading the [Raspberry Pi Display troubleshooting](https://www.raspberrypi.org/documentation/hardware/display/troubleshooting.md), I realized that one should use `lcd_rotate=2` instead, which will rotate the lcd display and touch targets!

So the fix is quite easy: just open the `\\<your-pi-ip-address>\c$` network share, go to the "EFIESP" folder and inside of it, find and edit the "config.txt" file!

Remove any `display_rodate` entry and add `lcd_rotate=2` to the end of the file, save, reboot the Pi, and that should fix the problem completely! :)
