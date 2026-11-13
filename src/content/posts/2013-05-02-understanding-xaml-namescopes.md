---
id: 481
title: Understanding XAML Namescopes
date: 2013-05-02T13:31:31+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=481
permalink: /2013/05/02/understanding-xaml-namescopes/
dsq_thread_id:
  - '2046860376'
categories:
  - Windows
  - Windows Phone
tags:
  - Win8Dev
  - Windows 8
  - Windows Phone
  - WP8Dev
  - WPDev
  - XAML
  - XAML Namescope
---

I've been getting some inquires about the [BindableApplicationBar sample](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/tree/master/samples/BindableApplicationBar) from the [Cimbalino Windows Phone Toolkit](http://cimbalino.org), specifically about what is the `NamescopeBinding` resource appearing on the top of the [MainPage.xaml](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/samples/BindableApplicationBar/BindableApplicationBar/View/MainPage.xaml) file.

Here is the specific bit:

```xml
<phone:PhoneApplicationPage.Resources>
    <cimbalinoHelpers:NamescopeBinding x:Key="ItemsMultiselectList" Source="{Binding ElementName=ItemsMultiselectList}" />
</phone:PhoneApplicationPage.Resources>
```

This special class has a single property called `Source` that can be set to any object; in this sample, it's pointing to a named control inside the pages LayoutRoot (hence the single `Binding.ElementName` property set)

If you look a bit down the code, you'll find the `ApplicationBarIconButton.CommandParameter` where this resource is getting referenced:

```xml
<cimbalinoBehaviors:ApplicationBarIconButton
    Command="{Binding DeleteItemsCommand, Mode=OneTime}"
    CommandParameter="{Binding Source.SelectedItems, Source={StaticResource ItemsMultiselectList}}"
    IconUri="/Images/appbar.delete.rest.png"
    Text="delete" />
```

If we just put the two parts together, we can see that the whole objective is to bind the `ApplicationBarIconButton.CommandParameter` property to `ItemsMultiselectList.SelectedItems` property.

Obviously you'd expect to just do it directly, like this:

```xml
<cimbalinoBehaviors:ApplicationBarIconButton
    Command="{Binding DeleteItemsCommand, Mode=OneTime}"
    CommandParameter="{Binding SelectedItems, ElementName=ItemsMultiselectList}"
    IconUri="/Images/appbar.delete.rest.png"
    Text="delete" />
```

In reality, this approach doesn't work from the `PhoneApplicationPage` point of view, due to the different **XAML Namescope**.

## XAML Namescope??

Here is the XAML Namescope definition found in [this](http://msdn.microsoft.com/en-us/library/windowsphone/develop/cc189026%28v=vs.105%29.aspx) MSDN article:

> ...a XAML namescope stores relationships between the XAML-defined names of objects and their instance equivalents. This is similar to the wider meaning of the term "namescope" in other programming languages and technologies.

So think of the XAML Namescope as a hash-table with each control name and it's instance (something like `IDictionary<string, FrameworkElement>`).

The problem is that the page's LayoutRoot control gets a different XAML Namescope from the page itself, so searching for a child control from inside the page just won't work!

The following image illustrates the Namescope boundaries for a default new page:

[![XAML Namescope boundaries thumb](/wp-content/uploads/2013/04/XAML-Namescope-boundaries-thumb.png)](/wp-content/uploads/2013/04/XAML-Namescope-boundaries.png)

This is where the `NamescopeBinding` helper class makes its entry: just register an instance of this class as a page resource and bind the `NamescopeBinding.Source` property to the control you require outside the LayoutRoot XAML Namescope as shown in the sample code, and that's it!

In the BindableApplicationBar sample, if you actually attach the `MultiApplicationBarBehavior` to the LayoutRoot instead of the page, it will work perfectly without the need for the `NamescopeBinding` helper class.

But my advice is to always bind the `ApplicationBarBehavior` and `MultiApplicationBarBehavior` to the page as it will provide better integration and more fluid animation, and use the `NamescopeBinding` helper class if needed.

I've created a small sample app that demonstrates the XAML Namescope behavior and how it affects your applications, which you can download from [here](/wp-content/uploads/downloads/2013/05/XamlNamescopeDemo.zip).
