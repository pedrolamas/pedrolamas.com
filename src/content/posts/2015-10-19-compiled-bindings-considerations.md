---
id: 4223
title: Compiled Bindings considerations
date: 2015-10-19T11:45:09+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4223
permalink: /2015/10/19/compiled-bindings-considerations/
dsq_thread_id:
  - '4238868670'
categories:
  - Windows
  - Windows Phone
tags:
  - Binding
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
  - x:Bind
---

As you're probably aware, Windows 10 introduced a new type of Bindings called [**Compiled Bindings**](https://msdn.microsoft.com/en-us/library/windows/apps/mt204783.aspx).

And as the name might suggest, compiled bindings are a way the compiler uses to generate static code for a binding instead of using a reflection based solution, as regular bindings do.

The main advantage is quite obvious: there will be a performance gain for using static compiled code instead of using reflection!

Let's take a look at a simple regular binding example:

```xml
<TextBlock Text="{Binding Name}" />
```

This binding will set the `TextBlock.Text` property to the value of the `Name` and will update it every time the `Name` property changes (assuming that the data context implements and raises the necessary `INotifyPropertyChanged.PropertyChanged` event)

To take advantage of the compiled bindings, one would rewrite it like this:

```xml
<TextBlock Text="{x:Bind Name, Mode=OneWay}" />
```

Notice that I added the `Mode=OneWay` on the expression above?

Well, that is actually required due to a fundamental difference between regular bindings and compiled bindings: while the regular bindings default mode is `OneWay`, **compiled bindings default mode is `OneTime`!**

This is a really important piece of information that I've seen a lot of developers not taking notice, so make sure to fix those binding expressions correctly when you migrate to compiled bindings!
