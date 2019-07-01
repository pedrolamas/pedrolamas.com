---
id: 3371
title: Handle 1080p in Windows Phone like a Pro!
date: 2013-11-06T11:06:53+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=3371
permalink: /2013/11/06/handle-1080p-in-windows-phone-like-a-pro/
dsq_thread_id:
  - '2047083646'
image: /wp-content/uploads/2013/11/WP8-device-running-at-1080p-300x270.png
categories:
  - Windows Phone
tags:
  - 1080p
  - Cimbalino
  - GDR3
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

The change log for [Windows Phone 8 update 3](http://blogs.windows.com/windows_phone/b/windowsphone/archive/2013/10/14/announcing-our-third-windows-phone-8-update-plus-a-new-developer-preview-program.aspx) (also known as GDR3) has been known for a few weeks and one of the new features is the added

> support for bigger, higher-resolution screens

This is obviously only for new devices, with 5" or 6" screens using 1080p resolution, like the amazing [Nokia Lumia 1520](http://www.nokia.com/global/products/phone/lumia1520/)!

Here's the complete list of Windows Phone supported resolutions, divided by aspect ratio:

- _15:9_
  - **WVGA** _(480x800, 1.0x scale factor)_ - this is the only resolution available in WP7
  - **WXGA** _(768x1280, 1.6x scale factor)_
- _16:9_
  - **720p** _(720x1280, 1.5x scale factor)_
  - **1080p** _(1080x1920, 2.25x scale factor)_ - only supported in the new large screen devices with WP8 update 3

As a Windows Phone developer/designer, **you don't need to know this!**

All you need to do is design the interface in XAML for the 480x800 resolution, and it will automatically scale up using a fixed scale factor! How cool is that? :)

Now if you really want to know what is the device scale factor (maybe to create different app resolution-aware layouts), you can read the [Application.Current.Host.Content.ScaleFactor](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.interop.content.scalefactor%28v=vs.105%29.aspx) (note: this property will return the scale factor \* 100).

But there's a catch: for the new 1080p devices, the scale factor is returned as 1.5x, just as the 720p devices, instead of the correct 2.25x...

To get the real scale factor, you can use the following code snippet:

```csharp
public int ScaleFactor
{
    get
    {
        object physicalScreenResolutionObject;

        if (DeviceExtendedProperties.TryGetValue("PhysicalScreenResolution", out physicalScreenResolutionObject))
        {
            var physicalScreenResolution = (Size)physicalScreenResolutionObject;

            return (int)(physicalScreenResolution.Width / 4.8);
        }

        return Application.Current.Host.Content.ScaleFactor;
    }
}
```

In WP8 update 3 you can use `DeviceExtendedProperties.TryGetValue("PhysicalScreenResolution", out physicalScreenResolutionObject)` to retrieve the screen [Size](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.size%28v=vs.105%29.aspx) resolution in pixels, take the `Width` of it and divide it by 4.8 to know the correct scale factor.

If the call to `DeviceExtendedProperties.TryGetValue` fails it just means you don't have a WP8 GDR3 device, and as such the device is not a 1080p device and you can just fallback to use the `Application.Current.Host.Content.ScaleFactor` approach!

## The Cimbalino Windows Phone Toolkit way

Previous versions of [Cimbalino Windows Phone Toolkit](http://cimbalino.org) already had the [**IScreenInfoService**](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit.Background%20%28WP71%29/Services/IScreenInfoService.cs) to help handling this, and since version 3.2.0, you can also count on the **added 1080p support!** :)
