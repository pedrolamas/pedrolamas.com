---
id: 3895
title: Disabling screenshot functionality in a Windows Phone app
date: 2014-01-20T09:58:31+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=3895
permalink: /2014/01/20/disabling-screenshot-functionality-in-a-windows-phone-app/
dsq_thread_id:
  - '2148030133'
image: /wp-content/uploads/2014/01/Disabling-screenshot-functionality-in-a-Windows-Phone-8-app-300x270.png
categories:
  - Windows Phone
tags:
  - GDR2
  - GDR3
  - Screenshot
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

**Update:** Kudos to Murat and Rudy Huyn for pointing me out on a missing `return;` that would cause the `NotSupportedException` to be raised all the time... I've fixed the code by inverting the `if` condition.

**Update 2:** Just noticed that **GDR2 is also supported**, as the code below will also work in devices with it! :)

Windows Phone 8 made it possible to [take a screenshot](http://www.windowsphone.com/en-gb/how-to/wp8/photos/take-a-screenshot) of your screen at any time, just by pressing the Windows and Power button at the same time.

Sure, this is a really cool feature and can be quite handy from time to time, but it can become a security concern for some specific scenarios, not to mention a way to copy someone else's graphical designs!

Since Windows Phone 8 update 3 (GDR2) there is now a hidden feature that allows you to disable the Screenshot functionality on a page by page basis: the `PhoneApplicationPage.IsScreenCaptureEnabled`!

This is a hidden property that requires Reflection in order to access and modify it's state. The following extension methods will help you with that:

```csharp
public static class PhoneApplicationPageExtensionMethods
{
    public static bool CanSetScreenCaptureEnabled(this PhoneApplicationPage page)
    {
        return Environment.OSVersion.Version >= new Version(8, 0, 10322);
    }

    public static void SetScreenCaptureEnabled(this PhoneApplicationPage page, bool enabled)
    {
        var propertyInfo = typeof(PhoneApplicationPage).GetProperty("IsScreenCaptureEnabled");

        if (propertyInfo == null)
        {
            throw new NotSupportedException("Not supported in this Windows Phone version!");
        }

        propertyInfo.SetValue(page, enabled);
    }

    public static bool GetScreenCaptureEnabled(this PhoneApplicationPage page)
    {
        var propertyInfo = typeof(PhoneApplicationPage).GetProperty("IsScreenCaptureEnabled");

        if (propertyInfo == null)
        {
            throw new NotSupportedException("Not supported in this Windows Phone version!");
        }

        return (bool)propertyInfo.GetValue(page);
    }
}
```

The first step is to call `CanSetScreenCaptureEnabled()` from inside your `PhoneApplicationPage` to check if the Windows Phone version is at least Windows Phone 8 update 3 (version 8.0.10322) as that is the minimum required version for this to work!

If it is, we can then use the `GetScreenCaptureEnabled()` and `SetScreenCaptureEnabled()` extension methods to change the property value!

Here is a sample usage code to disable screenshot functionality:

```csharp
public partial class MainPage : PhoneApplicationPage
{
    public MainPage()
    {
        InitializeComponent();

        if (this.CanSetScreenCaptureEnabled())
        {
            this.SetScreenCaptureEnabled(false);
        }
    }
}
```

If you do try to take a screenshot after that code, this is what will happen:

[![Application screenshot functionality disabled](/wp-content/uploads/2014/01/Application-screenshot-functionality-disabled-180x300.png)](/wp-content/uploads/2014/01/Application-screenshot-functionality-disabled.png)

The same result will happen from the application switcher screen:

[![Task switcher screenshot functionality disabled](/wp-content/uploads/2014/01/Task-switcher-screenshot-functionality-disabled-180x300.png)](/wp-content/uploads/2014/01/Task-switcher-screenshot-functionality-disabled.png)

Nowadays, privacy has become the #1 concern in everything we do, and I'm sure this is a really useful information for a bunch of apps out there (looking at you 6snap and all other Snapchat apps ;) )
