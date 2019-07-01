---
id: 20
title: 'Cimbalino Windows Phone Toolkit: ApplicationBarBehavior'
date: 2013-03-05T10:05:31+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=20
permalink: /2013/03/05/cimbalino-windows-phone-toolkit-applicationbarbehavior/
dsq_thread_id:
  - '2045483689'
categories:
  - Windows Phone
tags:
  - ApplicationBar
  - ApplicationBarBehavior
  - Cimbalino
  - Windows Phone
  - WP7
  - WP8
  - WPDev
---

[![Cimbalino Windows Phone Toolkit](/wp-content/uploads/2013/03/Cimbalino-Windows-Phone-Toolkit-150x150.png)](http://cimbalino.org)The Windows Phone Application Bar has been a true headache for developers since day one, given that this object is not a [FrameworkElement](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.frameworkelement(v=vs.105).aspx>).

What this means is that we are unable to apply Styles or Templates to an [ApplicationBar](http://msdn.microsoft.com/en-us/library/windowsphone/develop/microsoft.phone.shell.applicationbar%28v=vs.105%29.aspx) object, but most important, we are unable to bind to its properties, something that is a big issue when you what to use MVVM pattern in you apps.

Surely MVVM is not a closed pattern, and as such there are alternatives to overcome this issue (like [this one](http://geekswithblogs.net/lbugnion/archive/2010/04/09/using-commands-with-applicationbarmenuitem-and-applicationbarbutton-in-windows-phone-7.aspx) or [this one](http://geekswithblogs.net/lbugnion/archive/2010/06/08/two-small-issues-with-windows-phone-7-applicationbar-buttons-and.aspx))!

In my case, in order to access the ApplicationBar in my apps in a more "MVVM'ed" way, I created the **ApplicationBarBehavior** that you can find in the [Cimbalino Windows Phone Toolkit](http://cimbalino.org)!

This Behavior, when applied to a PhoneApplicationPage or it's LayoutRoot element, allows to create and maintain a fully bindable Application Bar, and as such applying a more consistent MVVM pattern.

Here's a small sample code for it:

```xml
<!-- remaining code -->

<Grid x:Name="LayoutRoot" Background="Transparent">
    <i:Interaction.Behaviors>
        <cimbalino:ApplicationBarBehavior>
            <cimbalino:ApplicationBarIconButton Command="{Binding AddItemCommand, Mode=OneTime}" IconUri="/Images/appbar.add.rest.png" Text="add" IsVisible="{Binding IsSelectionDisabled}" />
            <cimbalino:ApplicationBarIconButton Command="{Binding EnableSelectionCommand, Mode=OneTime}" IconUri="/Images/appbar.manage.rest.png" Text="select" IsVisible="{Binding IsSelectionDisabled}" />
            <cimbalino:ApplicationBarIconButton Command="{Binding DeleteItemsCommand, Mode=OneTime}" CommandParameter="{Binding SelectedItems, ElementName=ItemsMultiselectList}" IconUri="/Images/appbar.delete.rest.png" Text="delete" IsVisible="{Binding IsSelectionEnabled}" />
        </cimbalino:ApplicationBarBehavior>
    </i:Interaction.Behaviors>

    <!-- remaining code -->

</Grid>

<!-- remaining code -->
```

In this small code sample we can see the ApplicationBarBehavior and in it, some ApplicationBarIconButton (like you would do in the current one), and quickly we notice some new properties like **Command**, **CommandParamenter**, and **IsVisible** (something we can't even find in the base Windows Phone ApplicationBar); obviously, even the properties `Text` and `IconUri` are bindable, allowing for easy localization! ;)
