---
id: 3611
title: Creating PNG image files in Windows Phone
date: 2013-12-05T13:04:46+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=3611
permalink: /2013/12/05/creating-png-image-files-in-windows-phone/
dsq_thread_id:
  - '2045472277'
image: /wp-content/uploads/2013/12/PNG-image-files-in-Windows-Phone.png
categories:
  - Windows Phone
tags:
  - Cimbalino
  - PNG
  - Windows Phone
  - Windows Phone 8
  - WP7
  - WP8
  - WP8Dev
  - WPDev
---

Windows Phone image processing and format support has always been lacking a bit, especially when compared with all the GDI+ capabilities one has available in the full .NET Framework.

For instance, you can read JPEG and PNG files, but you can only save to JPEG, as there is no support to save to PNG directly on the platform.

Saving to PNG has been quite easy since the beginning of Windows Phone 7 by using 3rd party libraries, and on this chapter, [.NET Image Tools](http://imagetools.codeplex.com/) is the most used one!

But personally, using Image Tools always presented two major problems:

- it requires [SharpZipLib](http://www.icsharpcode.net/opensource/sharpziplib/) (a GPL licensed library) to handle Zlib compression
- it's quite slow and uses a lot of memory

The first problem is a definitive "no-no" for usage in closed code commercial apps, as [GPL](http://en.wikipedia.org/wiki/GNU_General_Public_License) is "[viral license](http://en.wikipedia.org/wiki/Viral_license)"

The second problem is more related to the way Image Tools was developed, not considering usage in mobile devices that have lower specifications as to processor capacity or memory.

## The Cimbalino Windows Phone Toolkit way

[Cimbalino Windows Phone Toolkit](http://cimbalino.org/) version 3.2.0 presents a new [**WriteableBitmapExtensions**](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit.Background%20%28WP71%29/Extensions/WriteableBitmapExtensions.cs) containing a `SavePng()` method to create PNG files from [WriteableBitmap](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.media.imaging.writeablebitmap%28v=vs.105%29.aspx) instances!

Internally it uses DotNetZip (Ms-Pl license) to handle the required ZLib compression and it's quite optimized for speed and low memory consumption.

To illustrate the speed improvement, [Ertay Shashko](https://twitter.com/ErtaySh) was kind enough to test it with his [Tile Me](http://www.windowsphone.com/s?appid=4b113087-6abc-40fb-8e49-d02adeba1393) app, and here are the results of his personal usage:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/pedrolamas?ref_src=twsrc%5Etfw">@pedrolamas</a> Imagetools (~2.5 seconds to generate): <a href="http://t.co/LS5Lj1ZSCq">http://t.co/LS5Lj1ZSCq</a> Cimbalino (Default, ~0.7 secs to gener.): <a href="http://t.co/Hv0CAOK8K6">http://t.co/Hv0CAOK8K6</a></p>&mdash; Ertay Shashko (@ErtaySh) <a href="https://twitter.com/ErtaySh/status/398103937360089089?ref_src=twsrc%5Etfw">November 6, 2013</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I guess the numbers speak for themselves! :)
