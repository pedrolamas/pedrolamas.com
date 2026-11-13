---
id: 4241
title: CultureInfo changes in UWP
date: 2015-11-02T16:32:32+00:00
last_modified_at: 2017-05-03T14:27:45+01:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4241
permalink: /2015/11/02/cultureinfo-changes-in-uwp/
dsq_thread_id:
  - '4283138515'
categories:
  - Windows
tags:
  - CultureInfo
  - CurrentCulture
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

**Update:** There's now a [part 2](/2017/05/03/cultureinfo-changes-in-uwp-part-2/) for this article!

Since the very first versions of the .NET Framework, developers had the [System.Globalization](<https://msdn.microsoft.com/en-us/library/system.globalization(v=vs.110).aspx>) namespace _"containing classes that define culture-related information, including language, country/region, calendars in use, format patterns for dates, currency, and numbers, and sort order for strings."_

One of the most useful classes in this namespace is the [CultureInfo](<https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo(v=vs.110).aspx>) class!

To demonstrate the usage of this class, take a look at this really simple console app code:

```csharp
using System;
using System.Globalization;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("CurrentCulture: {0}", CultureInfo.CurrentCulture);
        Console.WriteLine("CurrentUICulture: {0}", CultureInfo.CurrentUICulture);
    }
}
```

If you run the above code with different system configurations, this is what it would output:

```text
// Display Language = "English (US)", Location = "United States", Regional Settings = "English (US)"
CurrentCulture: en-US
CurrentUICulture: en-US

// Display Language = "English (US)", Location = "United States", Regional Settings = "Portuguese (Portugal)"
CurrentCulture: pt-PT
CurrentUICulture: en-US

// Display Language = "English (United Kingdom)", Location = "Spain", Regional Settings = "Portuguese (Angola)"
CurrentCulture: pt-AO
CurrentUICulture: en-GB
```

As you can see from the above results, the `CurrentCulture` and `CurrentUICulture` property values are inferred respectively from Regional Settings and Display Language; the Location however, doesn't seem to have any effect over these two properties.

This feature allowed any app to show data using the proper currency, date, and number formats, even if the app itself wasn't localized for those cultures!

But then came WinRT with the [Windows.Globalization](https://msdn.microsoft.com/en-us/library/windows/apps/windows.globalization.aspx) namespace as a replacement, and that apparently affected the way the `CultureInfo` class behaved...

To show the differences, I've created a blank Windows 8 app, and set the following code in the MainView.xaml.cs file:

```csharp
using System;
using System.Globalization;
using Windows.UI.Popups;
using Windows.UI.Xaml.Controls;

public sealed partial class MainPage : Page
{
    public MainPage()
    {
        this.InitializeComponent();

        this.Loaded += MainPage_Loaded;
    }

    private void MainPage_Loaded(object sender, Windows.UI.Xaml.RoutedEventArgs e)
    {
        var messageDialog = new MessageDialog(string.Format("CurrentCulture: {0}" + Environment.NewLine + "CurrentUICulture: {1}",
            CultureInfo.CurrentUICulture,
            CultureInfo.CurrentCulture));

        messageDialog.ShowAsync();
    }
}
```

These are the results of running the above code:

```text
// Display Language = "English (US)", Location = "United States", Regional Settings = "English (US)"
CurrentCulture: en-US
CurrentUICulture: en-US

// Display Language = "English (US)", Location = "United States", Regional Settings = "Portuguese (Portugal)"
CurrentCulture: en-US
CurrentUICulture: en-US

// Display Language = "English (United Kingdom)", Location = "Spain", Regional Settings = "Portuguese (Angola)"
CurrentCulture: en-GB
CurrentUICulture: en-GB
```

As you can see here, both the `CurrentCulture` and `CurrentUICulture` property values are now based on the selected Display Language!

In my personal opinion, this change of behavior is wrong for various reasons, but mostly because it breaks the expected known behavior of the `CultureInfo` class properties.

Right now you might be thinking that the impact of this change is really small, but it might actually be bigger than expect due to a specific feature: **Cortana!**

As of today, Cortana is still only available in a few locations, and as such, most users have "faked" their location in order to get Cortana active on their devices, but maintained the Regional Settings matching their real location!

## Retrieving the "proper" CurrentCulture

One could use the Windows API [GetUserDefaultLocaleName](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318136.aspx) to retrieve the Regional Settings, but this only works on full Windows 10, so it's not a "universal" way of doing it!

However, I've found that if you create a [DateTimeFormatter](https://msdn.microsoft.com/en-us/library/windows/apps/windows.globalization.datetimeformatting.datetimeformatter) instance with "US" as language, you can retrieve the culture name from the `DateTimeFormatter.ResolvedLanguage` property!

And here is a simple code example demonstrating how to do it:

```csharp
using Windows.Globalization.DateTimeFormatting;

public class CultureInfoHelper
{
    public static CultureInfo GetCurrentCulture()
    {
        var cultureName = new DateTimeFormatter("longdate", new[] { "US" }).ResolvedLanguage;

        return new CultureInfo(cultureName);
    }
}
```

I honestly still don't know how or why does this work with that _Magic String™_ (others might also do the trick though), but it does, and at this stage all I care are positive results!

So there you go, this is a nice hack to retrieve a `CultureInfo` instance for the Regional Settings, which you can then use to parse and format values in your UWP (and WinRT) app! :)
