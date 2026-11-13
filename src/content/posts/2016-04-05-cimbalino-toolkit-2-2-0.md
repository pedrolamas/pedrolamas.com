---
id: 4565
title: Cimbalino Toolkit 2.2.0
date: 2016-04-05T16:12:33+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4565
permalink: /2016/04/05/cimbalino-toolkit-2-2-0/
dsq_thread_id:
  - '4722246581'
image: /wp-content/uploads/2014/06/Cimbalino.Toolkit@4x-400x270.png
categories:
  - Windows
  - Windows Phone
tags:
  - Cimbalino
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
---

**Update: there was a packaging error in 2.2.0 which I already fixed and so the most current version is now 2.2.1!**

[**Cimbalino Toolkit**](http://cimbalino.org/) version 2.2.0 is now available!

This new version includes improved support for Windows Phone Silverlight 8.1 (WP81) so that developers can take advantage of its specific API's (such as the [FileOpenPicker](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx))

This brings the total number of supported platforms to 5:

- Windows Phone Silverlight 8.0 apps (WP8)
- Windows Phone Silverlight 8.1 apps (WP81)
- Windows Phone 8.1 apps (WPA81)
- Windows Store 8.1 apps (Win81)
- Windows 10 UWP apps (UAP)

Here's the full change log for version 2.0.0:

- Improved compatibility with Windows Phone Silverlight 8.1 (WP81)
- New [Cimbalino.Toolkit.Controls](https://www.nuget.org/packages/Cimbalino.Toolkit.Controls) library (includes the [HamburgerFrame for Windows 10](/2016/03/07/cimbalino-toolkit-hamburger-controls-for-uwp/))
- New IFilePickerService to handle the file picker (when available)
- Improvements over the INavigationService implementation
- Other fixes and improvements
