---
id: 331
title: Cimbalino Windows Phone Toolkit updated to v2.3.0
date: 2013-05-08T19:41:19+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=331
permalink: /2013/05/08/cimbalino-windows-phone-toolkit-updated-to-v2-3-0/
dsq_thread_id:
  - '2045608160'
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

I just released a new [**Cimbalino Windows Phone Toolkit**](http://cimbalino.org) version!

Here's a short list of all the goodies you'll find in the **2.3.0** version:

- Breaking change: Location component now uses the [new Windows Phone 8 Location API](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff431800%28v=vs.105%29.aspx) (Geolocator) on WP8 (WP7 version will mimic behavior with GeoCoordinateWatcher)
- Breaking change: In WP8, the `UserExtendedPropertiesService.AnonymousUserID` now returns the "ANID2" value (WP7 version will still return "ANID")
- New **MultiBindingBehavior**
- New **OptimizedObservableCollection** class
- Several improvements and bug fixes!

I didn't actually release a change log for the previous **2.2.0** version, so here it is now:

- New **MutexLock** and **NamescopeBinding** helper classes
- New **BooleanToBrushConverter** and **BooleanToIntConverter**
- New **UriExtensions** class
- The `ApplicationBarBehavior` and `MultiApplicationBarBehavior` can now be attached to the `PhoneApplicationPage`
- The `SystemTrayService` implementation now allows for a global system tray across all pages
- Removed the `cimbalino = http://cimbalino.org` XML namespace prefix (incompatible with WP8)
- Several improvements and bug fixes

A big "thank you" is due to [Scott Lovegrove](http://metronuggets.com/) for his continuous code contributions and articles about the toolkit!

Now to write some posts about the new features... ;)
