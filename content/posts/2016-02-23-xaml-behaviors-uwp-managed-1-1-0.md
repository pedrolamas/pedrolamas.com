---
id: 4446
title: XAML Behaviors UWP Managed 1.1.0
date: 2016-02-23T10:32:23+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4446
permalink: /2016/02/23/xaml-behaviors-uwp-managed-1-1-0/
dsq_thread_id:
  - '4603841161'
categories:
  - Windows
tags:
  - Behaviors
  - UWP
  - Windows
  - Windows 10
  - XAML Behaviors
---

The [**XAML Behaviors for UWP**](https://github.com/Microsoft/XamlBehaviors) has just been updated to version 1.1.0.

Among other changes, this version contains two fixes that I personally contributed for issues found in the `EventTriggerBehavior`:

- [Ensured EventTriggerBehavior unregisters the event handler](https://github.com/Microsoft/XamlBehaviors/commit/2ad49665200730a25ea61e1bd950ea5887989468)
- [Properly check for Windows Runtime events in EventTriggerBehavior](https://github.com/Microsoft/XamlBehaviors/commit/71bf9ba628d562f56418b122d9b08bd0a6ff7c55)

The [NuGet package](https://www.nuget.org/packages/Microsoft.Xaml.Behaviors.Uwp.Managed/) has been updated so if you're using the Xaml Behaviors in your app, all you need is to let NuGet take the latest version of the package!

In the next days I'll be releasing a new version of the [**Cimbalino Toolkit**](http://cimbalino.org) to take this updated Xaml Behaviors package.

**Update 24/02/2016:**

I forgot to mention a massive difference on the new version of the XAML Behaviors:

If you use PowerShell to output the Assembly Full Name from the current and previous versions of the XAML Behaviors, this is what you will get:

[![Microsoft.Xaml.Interactivity assembly full name](/wp-content/uploads/2016/02/Microsoft.Xaml_.Interactivity-assembly-full-name.png)](/wp-content/uploads/2016/02/Microsoft.Xaml_.Interactivity-assembly-full-name.png)

Notice the different `PublicKey` value?

Well, after a [long discussion](https://github.com/Microsoft/XamlBehaviors/pull/29#issuecomment-162572491) about it, seems Microsoft has finally decided in [removing the StrongName signing](https://github.com/Microsoft/XamlBehaviors/commit/ceb2f68109c032ab997e9c5bb43aebadf81cfbcf)!

Though this might not sound as an important change, it is fundamentally a sign of ditching the "old" legacy .NET Framework stuff.

But I'll leave that for a next post... ;)
