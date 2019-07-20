---
title: CultureInfo changes in UWP - Part 2
date: 2017-05-03T14:26:33+01:00
layout: post
categories:
  - Windows
tags:
  - CultureInfo
  - CurrentCulture
  - .NET Core
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

A while back I wrote an article about the [CultureInfo changes in UWP](/2015/11/02/cultureinfo-changes-in-uwp/) and how they affected the UWP apps.

Well, things haven't changed much since then, and the information in that article still stands today!

However, Microsoft has since open-sourced the [.NET Core Runtime (CoreRT)](https://github.com/dotnet/corert), and that allowed me to take a peek under the hood to understand what is going on.

While looking at the [CultureInfo.cs](https://github.com/dotnet/corert/blob/master/src/System.Private.CoreLib/src/System/Globalization/CultureInfo.cs#L399) code, I noticed the following comment on the `CurrentCulture` property:

> We use the following order to return CurrentCulture and CurrentUICulture
>
> - Use WinRT to return the current user profile language
> - Use current thread culture if the user already set one using CurrentCulture/CurrentUICulture
> - Use thread culture if the user already set one using DefaultThreadCurrentCulture or DefaultThreadCurrentUICulture
> - Use NLS default user culture
> - Use NLS default system culture
> - Use Invariant culture

This confirms our findings!

Looking on the [CultureInfo.Windows.cs](https://github.com/dotnet/corert/blob/master/src/System.Private.CoreLib/src/System/Globalization/CultureInfo.Windows.cs) partial class, I noticed the `#if ENABLE_WINRT` on the top, which forces the first rule on that comment!

Further down in the same file, we find a `GetUserDefaultCulture` method which uses the [GetLocaleInfoEx](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318103.aspx) Win32 API to retrieve the locale name.

This Win32 API is actually [allowed for apps published to the Windows Store](https://msdn.microsoft.com/en-us/library/windows/apps/mt644399.aspx#_api-ms-win-core-localization-l1-2-1.dll)!

## Retrieving the "proper" CurrentCulture, the proper way!

In my [previous article](/2015/11/02/cultureinfo-changes-in-uwp/) on this subject, I found a hack where one could retrieve the "proper" CurrentCulture using the `DateTimeFormatter` class.

But with all this new information, I have now created a non-hacky way of doing the same:

```csharp
using System.Globalization;
using System.Runtime.InteropServices;
using System.Text;

public class CultureInfoHelper
{
    [DllImport("api-ms-win-core-localization-l1-2-0.dll", CharSet = CharSet.Unicode)]
    private static extern int GetLocaleInfoEx(string lpLocaleName, uint LCType, StringBuilder lpLCData, int cchData);

    private const uint LOCALE_SNAME = 0x0000005c;
    private const string LOCALE_NAME_USER_DEFAULT = null;
    private const string LOCALE_NAME_SYSTEM_DEFAULT = "!x-sys-default-locale";

    private const int BUFFER_SIZE = 530;

    public static CultureInfo GetCurrentCulture()
    {
        var name = InvokeGetLocaleInfoEx(LOCALE_NAME_USER_DEFAULT, LOCALE_SNAME);

        if (name == null)
        {
            name = InvokeGetLocaleInfoEx(LOCALE_NAME_SYSTEM_DEFAULT, LOCALE_SNAME);

            if (name == null)
            {
                // If system default doesn't work, use invariant
                return CultureInfo.InvariantCulture;
            }
        }

        return new CultureInfo(name);
    }

    private static string InvokeGetLocaleInfoEx(string lpLocaleName, uint LCType)
    {
        var buffer = new StringBuilder(BUFFER_SIZE);

        var resultCode = GetLocaleInfoEx(lpLocaleName, LCType, buffer, BUFFER_SIZE);

        if (resultCode > 0)
        {
            return buffer.ToString();
        }

        return null;
    }
}
```

All you need is to copy the above to a file in your UWP project, and then call `CultureInfoHelper.GetCurrentCulture()`.

I strongly advise using this new method instead of the "hack" I used in my previous article, as this is the same one that the .NET Framework relies on to retrieve the CurrentCulture information!
