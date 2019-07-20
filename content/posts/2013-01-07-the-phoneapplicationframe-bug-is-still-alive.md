---
id: 22
title: The PhoneApplicationFrame bug is still alive!
date: 2013-01-07T11:25:41+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=22
permalink: /2013/01/07/the-phoneapplicationframe-bug-is-still-alive/
dsq_thread_id:
  - '2045483701'
categories:
  - Windows Phone
tags:
  - Bug
  - CanGoBack
  - NavigationService
  - PhoneApplicationFrame
  - RemoveBackEntry
  - Windows Phone
  - WPDev
---

This is an issue that I stomped about 6 months ago, [blogged](http://www.pedrolamas.pt/2012/06/21/phoneapplicationframe-cangoback-navigationservice-cangoback/) about it, [reported](http://social.msdn.microsoft.com/forums/en-us/wpdevelop/thread/fbe3e38a-37ee-4d78-9eec-46ac7826d594) and got it confirmed by Microsoft, and just found out that after all this time, they didn't fix it on Windows Phone 8!!

When the Windows Phone SDK started to allow developers to remove entries from the navigation back stack, they (inadvertly?) introduced a bug in [PhoneApplicationFrame](<http://msdn.microsoft.com/en-us/library/microsoft.phone.controls.phoneapplicationframe(v=vs.92).aspx>), more specifically in the [CanGoBack](<http://msdn.microsoft.com/en-us/library/system.windows.controls.frame.cangoback(v=vs.92).aspx>) property!

Here's how to simulate the issue:

- Start by creating two separate pages
- On the application start page, add a Button that when clicked will just navigate to the second page (thus adding an item to the navigation stack)
- On the second page Loaded event, call the [NavigationService.RemoveBackEntry](<http://msdn.microsoft.com/en-us/library/system.windows.navigation.navigationservice.removebackentry(v=vs.92).aspx>) (removing the previously added item from the navigation stack)
- Get the current PhoneApplicationFrame instance with `(PhoneApplicationFrame)App.Current.RootVisual`
- Compare the [NavigationService.CanGoBack](<http://msdn.microsoft.com/en-us/library/system.windows.navigation.navigationservice.cangoback(v=vs.92)>) and [PhoneApplicationFrame.CanGoBack](<http://msdn.microsoft.com/en-us/library/system.windows.controls.frame.cangoback(v=vs.92).aspx>) property values: the first indicates `false`, the correct and expected value, while the second indicates `true`, something that should not happen because we just cleared the navigation back stack when we removed the only entry that was there!!

By using a Reflection tool to look at the PhoneApplicationFrame implementation, one could easily realize that while the methods Navigate, GoBack, RemoveBackEntry and others are just proxies to the same ones on NavigationService, this is not true for the CanGoBack and CanGoForward properties, which have local values and only get updated after a navigation event!

And this is where lies the whole problem: the values ​​of these properties should be obtained directly from NavigationService like the methods are, or at least they should also be updated when RemoveBackEntry method gets called!

You can test and confirm this bug by downloading [this sample application](/wp-content/uploads/downloads/2013/01/FrameBugSample.zip).

All you need to do is run the app, click on "Navigate to self", check that the stack count is now 1, click on one of the two buttons for the "RemoveBackEntry" and realize that the CanGoBack properties now have different values!

This situation has been fixed in the implementation of the [INavigationService](<https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit%20(WP71)/Services/NavigationService.cs>) on [Cimbalino Windows Phone Toolkit](http://cimbalino.org), but be aware that there are still a lot of similar services implementations from other toolkits and frameworks that have this bug...

**Updated on 20/01/2013:** After a few tweets with [Joost van Schaik](http://dotnetbyexample.blogspot.com/), he updated the INavigationService implementation on [Wp7nl utilities](http://wp7nl.codeplex.com/) to match the Cimbalino Windows Phone Toolkit.
