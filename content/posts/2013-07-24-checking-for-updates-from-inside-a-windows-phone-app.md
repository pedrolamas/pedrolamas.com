---
id: 1551
title: Checking for updates from inside a Windows Phone app
date: 2013-07-24T16:42:14+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=1551
permalink: /2013/07/24/checking-for-updates-from-inside-a-windows-phone-app/
dsq_thread_id:
  - '2048129749'
image: /wp-content/uploads/2013/07/Store-tile-with-1-update.png
categories:
  - Windows Phone
tags:
  - Cimbalino
  - Update
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

A few months ago, I started receiving some crash reports from one of my most successful apps, [Geosense](http://windowsphone.com/s?appid=7ca9cfea-1b92-4ca4-8559-269936d5361e)!

After fixing the issue and publishing an updated version of the app, until today I still get quite a few reports from the very same old version, but none from the updated one!

This has got me to think on the reason to why people don't update their apps! Here are some reasons:

- No constant internet connection
- Removing the Store tile from the Home screen
- Don't care about updating apps!

The first one doesn't make much sense to me, as the Windows Phone ecosystem makes a lot more sense as a "always online" system! Also, Geosense requires internet connection to work and crash reports can't be done without internet connection, so this doesn't seem to be the main reason in my case!

I don't see the point in it, but not caring to check and update the apps in ones phone is just a matter of personal opinion!

That leaves the middle option: having the Store tile in the Home screen will enable users to get visual notification of updates (the number of updated apps appears in the tile); without it, the only other option is that the user actually opens the Store app from the applications menu.

Wouldn't it be nice to just get the app to notify the user that an update is available?

Keeping this in mind, I opened Fiddler on my laptop, set my phone to use it as a proxy server, opened Geosense info from the store, and this is the request I could see going to Microsoft servers:

```text
http://marketplaceedgeservice.windowsphone.com/v8/catalog/apps/7ca9cfea-1b92-4ca4-8559-269936d5361e?os=8.0.9903.0&cc=GB&oc=&lang=en-GB&hw=520170499&dm=RM-821_eu_euro1&oemId=NOKIA&moId=VOD-GB&cf=99-1
```

I can see in the above url the application ProductId (7ca9cfea-1b92-4ca4-8559-269936d5361e) the windows phone version (os=8.0.9903.0), the store territory (cc=GB), the language (lang=en-GB) and a bunch of other stuff related to the device brand, model and version.

The response is even more interesting, as it shows all the Store information about the app, including the latest available version and release date.

Given we are only interested in the version, after manually clearing up the response this is what we get:

```xml
<a:feed xmlns:a="http://www.w3.org/2005/Atom" xmlns:os="http://a9.com/-/spec/opensearch/1.1/" xmlns="http://schemas.zune.net/catalog/apps/2008/02">
  <!-- other stuff -->

  <a:entry>
    <!-- other stuff -->

    <version>1.10.1.8</version>

    <!-- other stuff -->
  </a:entry>

  <!-- other stuff -->
</a:feed>
```

Well, we now know how to get the Store information about a particular app, we know what gets returned and how to read it, so let's put that all together!

We will need the ProductID for the current running app, and for that we can just read it from the WMAppManifest.xml file like I shown in a [previous article](http://code.msdn.microsoft.com/Generating-a-Windows-Phone-9d19f939):

```csharp
public static string GetManifestAttributeValue(string attributeName)
{
    var xmlReaderSettings = new XmlReaderSettings
    {
        XmlResolver = new XmlXapResolver()
    };

    using (var xmlReader = XmlReader.Create("WMAppManifest.xml", xmlReaderSettings))
    {
        xmlReader.ReadToDescendant("App");

        return xmlReader.GetAttribute(attributeName);
    }
}
```

Given that there is no way in the current SDK to retrieve the Store territory, we will fallback to the `CultureInfo.CurrentUICulture` value for it and also for the language.

Here's the complete async method to retrieve the latest version information from the Store:

```csharp
private Task<Version> GetUpdatedVersion()
{
    var cultureInfoName = CultureInfo.CurrentUICulture.Name;

    var url = string.Format("http://marketplaceedgeservice.windowsphone.com/v8/catalog/apps/{0}?os={1}&cc={2}&oc=&lang={3}​",
        GetManifestAttributeValue("ProductID"),
        Environment.OSVersion.Version,
        cultureInfoName.Substring(cultureInfoName.Length - 2).ToUpperInvariant(),
        cultureInfoName);

    var request = WebRequest.Create(url);

    return Task.Factory.FromAsync(request.BeginGetResponse, result =>
    {
        var response = (HttpWebResponse)request.EndGetResponse(result);

        if (response.StatusCode != HttpStatusCode.OK)
        {
            throw new WebException("Http Error: " + response.StatusCode);
        }

        using (var outputStream = response.GetResponseStream())
        {
            using (var reader = XmlReader.Create(outputStream))
            {
                reader.MoveToContent();

                var aNamespace = reader.LookupNamespace("a");

                reader.ReadToFollowing("entry", aNamespace);

                reader.ReadToDescendant("version");

                return new Version(reader.ReadElementContentAsString());
            }
        }
    }, null);
}
```

All you now have to do is compare it to the active app version, like in this sample code:

```csharp
private async void CheckForUpdatedVersion()
{
    var currentVersion = new Version(GetManifestAttributeValue("Version"));
    var updatedVersion = await GetUpdatedVersion();

    if (updatedVersion > currentVersion
        && MessageBox.Show("Do you want to install the new version now?", "Update Available", MessageBoxButton.OKCancel) == MessageBoxResult.OK)
    {
        new MarketplaceDetailTask().Show();
    }
}
```

At startup, just call `CheckForUpdatedVersion()` and it will check if a new version is available, and if so, show a confirmation message box to the user and open the Marketplace details for the updated app.

If you're using [Cimbalino Windows Phone Toolkit](http://cimbalino.org), I've added the [**IMarketplaceInformationService**](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit.Background%20%28WP71%29/Services/IMarketplaceInformationService.cs) that contains all the above logic to retrieve Store information for apps, with added bonus that will work not only for WP8 but also in WP7!

For the time being, this new service is only available in the **3.1.0-rc** version of the toolkit, so make sure to install the pre-release version!
