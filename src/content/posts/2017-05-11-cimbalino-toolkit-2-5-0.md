---
layout: post
title: Cimbalino Toolkit 2.5.0
date: 2017-05-11T12:00:40+01:00
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

Yesterday I released [**Cimbalino Toolkit**](http://cimbalino.org/) version 2.5.0!

Here's what's changed on this version:

- Cimbalino.Toolkit.Core now targets the .NET Standard 1.0
- Cimbalino.Toolkit.Core will now behave as the rest of the toolkit in regards to throwing `NotImplementedExceptions` only on specific cases
- Exposed overrideable async methods in `ExtendedPageBase`
- Other fixes and improvements

From the above, I'd like to emphasise the huge advantage of supporting .NET Standard 1.0: this means **you can now use Cimbalino.Tookit.Core in all .NET platforms: .NET Framework, .NET Core, and Mono!**
