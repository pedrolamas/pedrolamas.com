---
id: 3987
title: Cimbalino Toolkit 1.0.0
date: 2014-07-24T11:25:36+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=3987
permalink: /2014/07/24/cimbalino-toolkit-1-0-0/
fb_fan_page_post_id:
  - 150703221746608_339703969513198
dsq_thread_id:
  - '2869257645'
image: /wp-content/uploads/2014/06/Cimbalino.Toolkit@4x-400x270.png
categories:
  - Windows
  - Windows Phone
tags:
  - Cimbalino
  - Windows
  - Windows 8
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WPDev
---

In case you missed it, **there is a new and improved [Cimbalino Toolkit](http://cimbalino.org) now available**, supporting the following platforms:

- Windows Phone Silverlight 8.0 and 8.1 apps (WP8)
- Windows Phone 8.1 apps (WPA81)
- Windows Store 8.1 apps (Win81)

## The long story

About 3 years ago, the first version of Cimbalino Windows Phone Toolkit was released as a [NuGet package](https://www.nuget.org/packages/Cimbalino.Phone.Toolkit/) with [full source code hosted in GitHub](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit) to help every on the development of Windows Phone apps!

Back then, Windows Phone 7.0 was the only version available, and that meant that some technical decisions had to be made that influenced the toolkit architecture!

The main one was that WP7 apps Marketplace ingestion would automatically detect every component used in a particular app, and add the required Capabilities for them; so if the toolkit was a single assembly, you'd get your app with the full Capabilities list in the requirements, even if your app didn't actually use them...

There was also some limitations on the available API's for Background Agents and once again, the Marketplace ingestion of an app would basically fail if it detected one of those forbidden API's.

So the toolkit ended up divided like so:

[![Cimbalino Windows Phone Toolkit](/wp-content/uploads/2014/07/Cimbalino-Windows-Phone-Toolkit-thumb.png)](/wp-content/uploads/2014/07/Cimbalino-Windows-Phone-Toolkit.png)

In light blue are the components that may be used with Background Agents. The rest of the components are divided by Capabilities or 3rd party components requirements.

Then came Windows 8.0 and Windows Phone 8.0, and Microsoft removed the Marketplace Capabilities auto-detection feature (the developer has to declare them manually in the app manifest), so we can now have drop that specific component division requirement! :)

This small change allowed to reduce the create a **new Cimbalino Toolkit with just 2 NuGet packages!**

There is still a lot of work to be done to port everything from the old toolkit to the new one, but here's some of the things already working:

- ApplicationBarBehavior, MultiApplicationBarBehavior, MultiBindingBehavior
- StorageService, EmailComposeService, MessageBoxService, NavigationService, and others...
- Most of the extension methods have already been ported, including the PNG support ones
- Most of the value converters

Also, there is the need to write some new samples and documentation, so if you can I could surely use the help!!! ;)

## TL;DR

Here are the new **Cimbalino Toolkit** NuGet packages:

- [Cimbalino.Toolkit.Core](https://www.nuget.org/packages/Cimbalino.Toolkit.Core) - The core portion of the toolkit (compatible with background agents)
- [Cimbalino.Toolkit](https://www.nuget.org/packages/Cimbalino.Toolkit) - The main component of the toolkit

Please check back soon to read about what's new and what changed! :)
