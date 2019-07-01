---
id: 4625
title: Cimbalino Toolkit 2.4.0
date: 2016-12-06T12:17:02+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4625
permalink: /2016/12/06/cimbalino-toolkit-2-4-0/
instant_articles_force_submit:
  - '1'
instant_articles_submission_id:
  - '1246760062066363'
dsq_thread_id:
  - '5359337793'
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

I know the blog as been quite a bit quiet for the last couple of months, but I just wanted to let you know that [**Cimbalino Toolkit**](http://cimbalino.org/) version 2.4.0 is now available!

As I didn't put a blog post for the previous version, here's the complete change log for everything since 2.2.0 till the current 2.4.0:

- Now targeting SDK 14393 (Windows 10 Anniversary edition)
- New [MasterDetailView](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Controls%20(UWP)/Controls/MasterDetailView.cs>) control (UWP only)
- New [ExtendedPageBase](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit%20(WP8)/Controls/ExtendedPageBase.cs>) class, [IHandleNavigatingFrom](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Core%20(Portable)/Handlers/IHandleNavigatingFrom.cs>), [IHandleNavigatedFrom](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Core%20(Portable)/Handlers/IHandleNavigatedFrom.cs>) and [IHandleNavigatedTo](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Core%20(Portable)/Handlers/IHandleNavigatedTo.cs>) interfaces (allows handling of `Page.OnNavigatingFrom()`, `Page.OnNavigatedFrom()` and `Page.OnNavigatedTo()` methods from inside view models)
- New `BooleanToObjectConverter`, `CollectionCountToObjectConverter`, `ComparableToObjectConverter`, `EmptyCollectionToObjectConverter`, and `EmptyStringToObjectConverter`
- Added `CancellationToken` support to `IMessageBoxService` and `ILocationService`
- `HamburgerMenuButton` will now allow parameter check for button highlighting
- Improvements over the `INavigationService` interface and implementation
- Other fixes and improvements
