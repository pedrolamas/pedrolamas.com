---
id: 1141
title: Cimbalino Windows Phone Toolkit Updated to v3.0.0
date: 2013-06-06T17:17:15+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=1141
permalink: /2013/06/06/cimbalino-windows-phone-toolkit-updated-to-v3-0-0/
dsq_thread_id:
  - '2045483871'
image: /wp-content/uploads/2013/03/Cimbalino-Windows-Phone-Toolkit-300x270.png
categories:
  - Windows Phone
tags:
  - Cimbalino
  - Windows Phone
  - WP7
  - WP8
  - WP8Dev
  - WPDev
---

I'm proud to present the latest version of [**Cimbalino Windows Phone Toolkit**](http://cimbalino.org)!

This new version comes with a major breaking change: Visual Studio 2012 is now required, as the toolkit has taken the "async/await" path! :D

If you still use Visual Studio 2010 for your Windows Phone development, you can still use the previous version of the toolkit (but then again, seems like a really nice time to upgrade ;) )

And without further ado, here's the change-log:

- **async/await** support added for WP7
- New **Cimbalino.Phone.Toolkit.Background** component, fully compatible with Background Agents.
- New **ShellTileService**
- New **VoiceCommandService**
- New **LauncherService**
- New **NetworkInformationService**
- **AsyncStorageService** is now compatible with WP7
- `BingMapsService` has been removed and the functionality moved to `MapsService`
- Several improvements and bug fixes!
