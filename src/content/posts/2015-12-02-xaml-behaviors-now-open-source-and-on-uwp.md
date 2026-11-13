---
id: 4279
title: XAML Behaviors now open source and on UWP
date: 2015-12-02T09:49:35+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4279
permalink: /2015/12/02/xaml-behaviors-now-open-source-and-on-uwp/
dsq_thread_id:
  - '4368351746'
categories:
  - Windows
  - Windows Phone
tags:
  - Behaviors
  - Cimbalino
  - MonitoredInteraction
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - XAML Behaviors
---

In case you missed the [big news](https://blogs.windows.com/buildingapps/2015/11/30/xaml-behaviors-open-source-and-on-uwp/), the XAML Behaviors are now [open source in GitHub](https://github.com/Microsoft/XamlBehaviors/) and available to use in UWP, both in [managed](https://www.nuget.org/packages/Microsoft.Xaml.Behaviors.Uwp.Managed/) and [native](https://www.nuget.org/packages/Microsoft.Xaml.Behaviors.Uwp.Native/) apps, mostly due to the work of some [awesome MVPs](https://github.com/Microsoft/XamlBehaviors/wiki/About-the-Team#our-team-of-mvp-leaders-includes)!

They were kind enough to keep me in the loop and that allowed me to prepare for the incoming changes! ;)

## Cimbalino Toolkit 2.1.0

**Version 2.1.0** of the [Cimbalino Toolkit](http://cimbalino.org/) is a basic update of the toolkit with a few improvements and bug fixes, but takes into account the new XAML Behaviors:

- UWP apps it now will pull the XAML Behaviors Managed NuGet package to the projects
- non-UWP apps will still use the NuGet PowerShell scripts to add the Behaviors SDK

A few weeks ago I introduced the `MonitoredInteraction` class from Cimbalino Toolkit 2.0.0 to ["prevent memory leaks in behaviors"](/2015/10/23/how-to-prevent-memory-leaks-in-behaviors/), and I'm happy to say that those changes [made it's way to the XAML Behaviors code](https://github.com/Microsoft/XamlBehaviors/commit/c23f4a4156318042eaf651faea8f2fafd9467d59)! :)

Do notice that while the `Interaction` class in the XAML Behaviors now performs the proper attach/detach pattern, the same can't be said for the Behaviors SDK Extension for non-UWP apps, so I strongly advise you to keep using the `MonitoredInteraction` class for those projects!

One final note: if you actually want to **use** the XAML Behaviours, you will have to actually manually add the NuGet package to your project... this is due to the new Transitive Dependencies feature of NuGet 3.x, and as far as I know, there is no way of going around this extra step!
