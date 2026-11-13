---
id: 2931
title: Windows Phone URI association deep links and the ampersand
date: 2013-09-11T18:02:08+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=2931
permalink: /2013/09/11/windows-phone-uri-association-deep-links-and-the-ampersand/
dsq_thread_id:
  - '2045937682'
image: /wp-content/uploads/2013/09/hyperlink_hand.png
categories:
  - Windows Phone
tags:
  - Deep Link
  - URI Association
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

A few weeks ago I stumbled on an issue while using ampersand (`&`) in a URI association deep link with query string parameters!

Let's start by assuming I have a [Windows Phone app capable of handling deep links](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj206987%28v=vs.105%29.aspx#BKMK_URIassociations) with "my-app:" moniker. Now take a look at the following sample link:

```text
my-app://do/stuff/?param1=a%26b&param2=c
```

We can easily see a query string with two parameters, and after decoding their values, we get `param1 = "a&b"` and `param2 = "c"`.

If we use the [Launcher.LaunchUriAsync(uri)](http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh701480.aspx) method to open the link, this is what will arrive in the internal UriMapper:

```text
/Protocol?encodedLaunchUri=my-app%3A%2F%2Fdo%2Fstuff%2F%3Fparam1%3Da%2526b%26param2%3Dc
```

By retrieving and decoding the `encodedLaunchUri` from the previous link, the result will be `"my-app://do/stuff/?param1=a%26b&param2=c"`, matching the original uri, as we would expect!

If we now use a web page with that link on it instead, open the page inside Internet Explorer on the phone and tap on the link, this is what will get to the app UriMapper:

```text
/Protocol?encodedLaunchUri=my-app%3A%2F%2Fdo%2Fstuff%2F%3Fparam1%3Da%26b%26param2%3Dc
```

If we do as before and retrieve and decode the `encodedLaunchUri`, we will get `"my-app://do/stuff/?param1=a&b&param2=c"`, which in this case, **doesn't match the original deep link!**

This behavior is due to Internet Explorer in Windows Phone, as it seems to decode all links before trying to navigate to them, and when it can't perform the navigation (e.g. when the link isn't a http:// or https:// link) it just sends it to the platform to handle it, but by that time **the link has already been wrongly re-encoded**!

So far I haven't been able to find any way of bypassing this issue, apart of simply not using the `&` in my apps deep links... and my advice to you is to proceed just like this!
