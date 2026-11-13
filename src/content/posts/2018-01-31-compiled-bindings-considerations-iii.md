---
layout: post
title: Compiled Bindings considerations III
date: 2018-01-31T23:32:14+00:00
categories:
  - Windows
tags:
  - Binding
  - FallbackValue
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
  - x:Bind
---

Two years since my [Compiled Bindings considerations II](/2016/01/08/compiled-bindings-considerations-ii/) article, I can finally write a part III that actually comes with some good news!

The earlier article focused on a really nasty bug with the compiled bindings ignoring the FallbackValue when the binding path didn't resolve.

It now seems that Microsoft finally fixed this bug on the [Windows 10 SDK Preview Build 17069](https://blogs.windows.com/buildingapps/2018/01/17/windows-10-sdk-preview-build-17069-now-available), and this fix will eventually make it's way to the next stable release of the Windows 10 SDK!

There is, however, a small requirement to make this work: the compiled binding expression **must** have the `FallbackValue` set.

To better understand it, please check this line of code taken from the example in the part II article:

```xml
<TextBlock Style="{StaticResource BodyTextBlockStyle}" Text="{x:Bind ViewModel.CurrentTime.CurrentTimeTicks, Mode=OneWay}" />
```

On the above, we will now add `FallbackValue={x:Null}` to the binding expression:

```xml
<TextBlock Style="{StaticResource BodyTextBlockStyle}" Text="{x:Bind ViewModel.CurrentTime.CurrentTimeTicks, Mode=OneWay, FallbackValue={x:Null}}" />
```

This will ensure that this TextBlock gets the text cleared when the binding can't resolve the path or source!

A classic binding does this by default (when `FallbackValue` isn't set, it will just use `null`), but for compiled bindings, we need to specify a value.

More "hard work", but a solution to the problem, nevertheless!
