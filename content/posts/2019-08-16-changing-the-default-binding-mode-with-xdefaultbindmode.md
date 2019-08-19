---
layout: post
title: Changing the default binding mode with x:DefaultBindMode
date: 2019-08-16T09:16:12+01:00
categories:
  - Windows
tags:
  - Binding
  - x:DefaultBindMode
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
  - x:Bind
---

On my [Compiled Bindings considerations](/2015/10/19/compiled-bindings-considerations/) article, I wrote about the differences between regular bindings ([Binding](https://docs.microsoft.com/en-us/windows/uwp/xaml-platform/binding-markup-extension)) and the UWP compiled bindings ([x:Bind](https://docs.microsoft.com/en-us/windows/uwp/xaml-platform/x-bind-markup-extension)).

The most important bit to keep from that article is the fact that the default binding `Mode` for regular bindings is `OneWay`, while for the compiled ones is `OneTime`.

Best way to understand this is with some sample code:

```xml
<StackPanel>
    <!-- the implicit binding mode here is "OneWay" -->
    <TextBlock Text={Binding Name} />

    <!-- the implicit binding mode here is "OneTime" -->
    <TextBlock Text={x:Bind Name} />
</StackPanel>
```

Starting Windows 10 version 1607 (Anniversary Update, SDK version 14393), developers can change the default binding `Mode` by setting the [x:DefaultBindMode](https://docs.microsoft.com/en-us/windows/uwp/xaml-platform/x-defaultbindmode-attribute) attribute.

Applying the attribute to an element will make it and all child elements use the same value for binding mode.

Here's the same sample code again, now with the `x:DefaultBindMode` attribute added to the root element:

```xml
<StackPanel x:DefaultBindMode="OneWay">
    <!-- the implicit binding mode here is "OneWay" -->
    <TextBlock Text={Binding Name} />

    <!-- the implicit binding mode here is "OneWay", as set on the x:DefaultBindMode in the parent element -->
    <TextBlock Text={x:Bind Name} />
</StackPanel>
```
