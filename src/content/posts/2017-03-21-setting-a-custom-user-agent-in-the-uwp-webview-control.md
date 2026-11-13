---
title: Setting a custom User-Agent in the UWP WebView control
date: 2017-03-21T12:10:45+00:00
last_modified_at: 2019-02-12T14:29:00+00:00
layout: post
categories:
  - Windows
tags:
  - User-Agent
  - WebView
  - HttpClient
  - UrlMkSetSessionOption
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

I recently came into a UWP project requiring all HTTP requests to use a specific User-Agent string.

That's quite easy to do if you only use [Windows.Web.Http.HttpClient](https://docs.microsoft.com/en-us/uwp/api/windows.web.http.httpclient?wt.mc_id=MVP) as there's a managed property for that purpose: [HttpClient.DefaultRequestHeaders.UserAgent](https://docs.microsoft.com/en-us/uwp/api/windows.web.http.headers.httprequestheadercollection#Windows_Web_Http_Headers_HttpRequestHeaderCollection_UserAgent?wt.mc_id=MVP).

Similarly, the same applies for [System.Net.Http.HttpClient](https://docs.microsoft.com/en-us/dotnet/core/api/system.net.http.httpclient?wt.mc_id=MVP) and the [HttpClient.DefaultHeader.UserAgent](https://docs.microsoft.com/en-us/dotnet/core/api/system.net.http.headers.httprequestheaders#System_Net_Http_Headers_HttpRequestHeaders_UserAgent?wt.mc_id=MVP) property.

The real problem is if you need to use the [WebView](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.webview?wt.mc_id=MVP) control to present web content, as there's no managed property to change the user-agent!

It is possible to create a [HttpRequestMessage](https://docs.microsoft.com/en-us/uwp/api/windows.web.http.httprequestmessage?wt.mc_id=MVP) instance, set a custom user-agent string in it, and then call the [WebView.NavigateWithHttpRequestMessage](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.webview#Windows_UI_Xaml_Controls_WebView_NavigateWithHttpRequestMessage_Windows_Web_Http_HttpRequestMessage_?wt.mc_id=MVP) method, but that will only work for that specific navigation request.

Any requests invoked from inside the webview (like a form post) will use the system default user-agent string.

## So what's the solution?

The solution comes in the form of a Win32 API called [UrlMkSetSessionOption](<https://msdn.microsoft.com/en-us/library/ms775125(v=vs.85).aspx>).

Amongst other things, this API allows you to set the default user-agent string for the current internet session!

Here's an example of how to use it; first, add the following class to your app:

```csharp
public class UserAgentHelper
{
    [DllImport("urlmon.dll", CharSet = CharSet.Ansi, ExactSpelling = true)]
    private static extern int UrlMkSetSessionOption(int dwOption, string pBuffer, int dwBufferLength, int dwReserved);

    private const int URLMON_OPTION_USERAGENT = 0x10000001;

    public static void SetDefaultUserAgent(string userAgent)
    {
        UrlMkSetSessionOption(URLMON_OPTION_USERAGENT, userAgent, userAgent.Length, 0);
    }
}
```

Now load your App.xaml.cs file and ensure you call the `UserAgentHelper.SetDefaultUserAgent()` method inside the `App` class constructor:

```csharp
public App()
{
    // remaining code

    UserAgentHelper.SetDefaultUserAgent("MyApp/1.0");
}
```

From that point on, any webview inside your app will use the specified user-agent string ("MyApp/1.0" in our example above)!

One final note: only a few Win32 API's are actually allowed in apps published to the Windows Store (you can check the complete list [here](https://msdn.microsoft.com/en-us/library/windows/apps/mt644399.aspx))!

The Windows Store recently allowed for apps to use the `UrlMkSetSessionOption` API, but if you look at the list above you will notice that it's [not yet listed](https://msdn.microsoft.com/en-us/library/windows/apps/mt644399.aspx#_urlmon.dll); that should change once Microsoft updates the list on that page.

Kudos to [Hermit Dave](https://twitter.com/hermitdave) for pointing me in the right direction for a solution for this problem!
