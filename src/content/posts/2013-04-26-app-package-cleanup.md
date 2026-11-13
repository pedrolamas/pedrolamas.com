---
id: 381
title: App Package Cleanup
date: 2013-04-26T22:10:58+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=381
permalink: /2013/04/26/app-package-cleanup/
dsq_thread_id:
  - '2046772154'
categories:
  - Windows
  - Windows Phone
tags:
  - Appx
  - Nuget
  - Win8Dev
  - Windows 8
  - Windows Phone
  - WP8Dev
  - WPDev
  - XAP
---

The [NuGet](http://nuget.org) team released the 2.5 version yesterday, and along with a bunch of really cool [new features](http://docs.nuget.org/docs/release-notes/nuget-2.5), there was one I was particularly interested: the ability to import MSBuild targets and props files!

This means we can now have NuGet packages without any type of assembly, targeting only the project build process.

And if you've read [this article](/2013/02/15/reduce-the-size-of-your-xapappx-package-time-to-take-out-the-trash/) about the issue with the current build process for Windows 8 and Windows Phone 8 apps, where the Xml Documentation gets bundled in the output packages (APPX and XAP), I have some great news: no more need to change the project file manually, as I just published a [NuGet package](https://nuget.org/packages/AppPackageCleanup) that does those changes for you!!

All you have to do is run the following command from the Package Manager console window:

[![InstallPackage AppPackageCleanup](/wp-content/uploads/2013/04/AppPackageCleanup.png)](https://nuget.org/packages/AppPackageCleanup)

If you have NuGet Package Manager extension installed on Visual Studio, just search for `AppPackageCleanup` to install the Package.

**Note:** this package requires NuGet 2.5 as it won't show up in the search results with previous versions of NuGet!
