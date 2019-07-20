---
id: 188
title: 'Updated: Reduce the size of your XAP/APPX package!'
date: 2013-02-20T17:09:25+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=188
permalink: /2013/02/20/updated-reduce-the-size-of-your-xapappx-package/
dsq_thread_id:
  - '2046772091'
categories:
  - Windows
  - Windows Phone
tags:
  - Appx
  - MSBuild
  - Win8Dev
  - Windows 8
  - Windows Phone
  - WPDev
  - XAP
---

In my [previous post](/2013/02/15/reduce-the-size-of-your-xapappx-package-time-to-take-out-the-trash/) I wrote about an issue with the current build process for Windows 8 and Windows Phone 8 apps, where the Xml Documentation would get bundled in the output packages (APPX and XAP).

A few days later, I started to get some comments over the internet regarding the need to add my fix to all projects in a solution in order to make it fully work, something that turned out to be a bit tedious...

I have now updated the original post with a new solution that will only require you to change the projects that actually have a package output! :)

Please check the [original post](/2013/02/15/reduce-the-size-of-your-xapappx-package-time-to-take-out-the-trash/) and update your projects to match the new change!
