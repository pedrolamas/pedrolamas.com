---
id: 4194
title: Cimbalino Toolkit 2.0.0-beta1
date: 2015-07-31T10:46:21+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4194
permalink: /2015/07/31/cimbalino-toolkit-2-0-0-beta1/
dsq_thread_id:
  - '3989443059'
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

Assuming you don't live in a planet where you don't get internet (and I know that's not the case as you're reading this!), by now you know that **Windows 10 has officially launched**!

So did Visual Studio 2015 and NuGet 3.x, so pretty much everything you need to develop new Windows 10 universal apps, right? Not quite! ;)

Presenting the new and improved version 2.0.0-beta1 of the [**Cimbalino Toolkit**](http://cimbalino.org), and as you already suspect, it is fully compatible with UWP (Universal Windows Platform)!

Proper [kudos](https://en.wikipedia.org/wiki/Kudos) is owed to MVP [Scott Lovegrove](https://twitter.com/scottisafool) as he has done pretty good job for the last couple of weeks to get the toolkit up and running in Windows 10! :)

There is a breaking change on using the toolkit from previous versions: NuGet has removed the functionality of running Powershell scripts when you install a package, and Cimbalino Toolkit required that to add the Behaviors SDK to your projects... that said, please make sure that you manually add the Behaviors SDK to any project using the `Cimbalino.Toolkit` NuGet package!

On a final now, remember that this new version is still a beta as the code and documentation will be reviewed and tested during the next weeks, so do expect to find some issues and bugs! If you find any, please do report them directly on [GitHub](https://github.com/Cimbalino/Cimbalino-Toolkit/issues)!
