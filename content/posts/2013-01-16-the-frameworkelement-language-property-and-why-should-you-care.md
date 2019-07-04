---
id: 90
title: The FrameworkElement.Language property and why should you care!
date: 2013-01-16T15:48:43+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=90
permalink: /2013/01/16/the-frameworkelement-language-property-and-why-should-you-care/
dsq_thread_id:
  - '2057310772'
categories:
  - Windows Phone
tags:
  - CultureInfo
  - Globalization
  - Language
  - Windows Phone
  - WP7
  - WP8
  - WPDev
---

The first time I came aware of this issue was when reading a post by Portuguese MVP [Paulo Morgado](http://paulomorgado.net/) on the App Hub Forums:

> If all the emulator settings are set to "Portuguese (Portugal)" (both interface as all regional settings), how come when I use an [IValueConverter](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.data.ivalueconverter(v=vs.105).aspx>) on any Binding expression, the "culture" parameter has a "en-US" [CultureInfo](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.globalization.cultureinfo(v=vs.105).aspx>)?...

To properly research on the subject, I created a small app with two TextBlock controls that show the [Thread.CurrentThread.CurrentCulture](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.thread.currentculture(v=vs.105).aspx>) and [Thread.CurrentThread.CurrentUICulture](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.thread.currentuiculture(v=vs.105).aspx>) current values, and a third TextBlock with an IValueConverter that basically returns the culture.Name he is using, and the result was quite surprising!

Here is the code for my CultureDebugValueConverter class, implementing an IValueConverter:

```csharp
public class CultureDebugValueConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
    {
        return culture.Name;
    }

    public object ConvertBack(object value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
```

Notice that no conversion is actually being made (the value parameter isn't even being used), it just returns the "culture.Name" value from it.

Here's the main ContentPanel on the MainPage.xaml:

```xml
<StackPanel x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0">
    <TextBlock Style="{StaticResource PhoneTextSubtleStyle}">CurrentCulture</TextBlock>
    <TextBlock Text="{Binding CurrentCulture}" Style="{StaticResource PhoneTextTitle2Style}" />
    <TextBlock Style="{StaticResource PhoneTextSubtleStyle}">CurrentUICulture</TextBlock>
    <TextBlock Text="{Binding CurrentUICulture}" Style="{StaticResource PhoneTextTitle2Style}" />
    <TextBlock Style="{StaticResource PhoneTextSubtleStyle}">Converter Culture</TextBlock>
    <TextBlock Text="{Binding Converter={StaticResource CultureDebugValueConverter}}" Style="{StaticResource PhoneTextTitle2Style}" />
</StackPanel>
```

As you can see, the last TextBlock just sets the Binding.Converter to a StaticResource of CultureDebugValueConverter type.

This is the remaining code placed on MainPage.xaml.cs:

```csharp
public partial class MainPage : PhoneApplicationPage
{
    public MainPage()
    {
        InitializeComponent();

        this.DataContext = this;
    }

    public string CurrentCulture
    {
        get
        {
            return Thread.CurrentThread.CurrentCulture.Name;
        }
    }

    public string CurrentUICulture
    {
        get
        {
            return Thread.CurrentThread.CurrentUICulture.Name;
        }
    }
}
```

Finally, I started the emulator, changed all the regional settings to "Portuguese (Portugal), and this is what I got after running the app:

![LanguageTestApp original version](/wp-content/uploads/2013/01/LanguageTestApp-original-version.jpg)

So the real question right now is: If the operating system interface, the CurrentCulture, and the CurrentUICulture are all set to "pt-PT", from where did that "en-US" came from?

There is no trivial reason for this behavior, and to completely understand it, we first need to know how the "culture" parameter on [IValueConverter.Convert](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.data.ivalueconverter.convert(v=vs.105).aspx>) method works; on the documentation, you can read the following: \* The culture is determined in the following order:

- The converter looks for the ConverterCulture property on the Binding object.
- If the ConverterCulture value is null, **the value of the Language property is used.**

Given that I didn't set the Binding.ConverterCulture property, this means it will fallback to the [FrameworkElement.Language](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.frameworkelement.language(v=vs.105).aspx>), which in turn has this in the docs:

The default is an XmlLanguage object that has its IetfLanguageTag value set to the string "en-US"\*\*

**We have finally found the "guilty" one!!!**

Now that we know this, we can fix it just by setting the Page.Language property! The fixed code should look something like this:

```csharp
public MainPage()
{
    Language = System.Windows.Markup.XmlLanguage.GetLanguage(Thread.CurrentThread.CurrentUICulture.Name);

    InitializeComponent();

    this.DataContext = this;
}
```

If you look closely on the 3rd line, you'll see the Language property set to a XmlLanguage instance created with the CurrentUICulture.Name.

Be aware that for this to work, you must set the Language property **before** the InitializeComponent method gets invoked!

And here's the final result:

![LanguageTestApp fixed version](/wp-content/uploads/2013/01/LanguageTestApp-fixed-version.jpg)

I honestly don't know the reason for this strange behavior, but this is a problem to account for if you have localization needs for your Windows Phone app!

The demo project I created and used for this article can be downloaded from [here](/wp-content/uploads/downloads/2013/01/PedroLamas.LanguageTestApp.zip)!
