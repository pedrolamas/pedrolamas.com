---
layout: post
title: Making the case for XAML Markup Extensions
date: 2019-03-31T17:23:05+01:00
last_modified_at: 2019-04-01T15:51:13+01:00
categories:
  - Windows
tags:
  - MarkupExtension
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

Consider the following code:

```xml
<AppBarButton Content="Send" Icon="Send" />
```

In the above example, the `AppBarButton.Icon` property above is set to "Send" which is actually a value of the [Symbol](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.symbol?wt.mc_id=MVP) enumeration.

The `Symbol` enumeration is quite useful to quickly access glyphs from the Segoe MDL2 Assets font file, but this is a limited subset; a more complete list of the available glyphs can be found [here](https://docs.microsoft.com/en-us/windows/uwp/design/style/segoe-ui-symbol-font?wt.mc_id=MVP).

If you want to use one of the symbols from that list that is not part of the `Symbol` enumeration, you need to escape the unicode point by prefixing it with "&amp;#x" and suffixing with ";".

For example, the unicode point for the "WindowsInsider" (Ninja Cat) glyph is "F1AD", so the complete escaped code is "&amp;#xF1AD;"

In an ideal world, one would just use it like this:

```xml
<!-- this doesn't work! -->
<AppBarButton Content="Ninja Cat" Icon="&#xF1AD;" />
```

However, you will quickly realize that this doesn't work!

The correct way is by using the `FontIcon` class and specifying both the font family name and the escaped glyph unicode point:

```xml
<!-- this works! -->
<AppBarButton Content="Ninja Cat">
  <AppBarButton.Icon>
    <FontIcon FontFamily="Segoe MDL2 Assets" Glyph="&#xF1AD;" />
  </AppBarButton.Icon>
</AppBarButton>
```

## MarkupExtension to the rescue!

Introduced in Windows 10 Fall Creators Update (v10.0.16299.0), the [MarkupExtension](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.markup.markupextension?wt.mc_id=MVP) class allows developers to write markup shortcodes just like the native `{Binding}`, `{StaticResource}`, or `{x:Bind}`.

To create a XAML markup extension, create a new class and ensure that it:

- inherits from `MarkupExtension`
- overrides the `MarkupExtension.ProvideValue` to provide the implementation
- is marked with the [MarkupExtensionReturnTypeAttribute](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.markup.markupextensionreturntypeattribute?wt.mc_id=MVP) and specifies the return type
- has a name ending in "Extension".

Following on our example, we can easily create a `MarkupExtension` that would return a `FontIcon` instance for a given glyph unicode point:

```csharp
[MarkupExtensionReturnType(ReturnType = typeof(FontIcon))]
public class FontIconExtension : MarkupExtension
{
    public string Glyph { get; set; }

    protected override object ProvideValue()
    {
        return new FontIcon()
        {
            Glyph = Glyph,
            FontFamily = new FontFamily("Segoe MDL2 Assets")
        };
    }
}
```

Having this on our code, we can then use it in XAML just like this:

```xml
<!-- this works just fine! -->
<AppBarButton Icon="{local:FontIcon Glyph='&#xF1AD;'}" />
```

In the end, we went from 5 lines of XAML code to just 1!
