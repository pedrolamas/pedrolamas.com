---
id: 208
title: 'Cimbalino Windows Phone Toolkit: MultiApplicationBarBehavior'
date: 2013-03-11T15:39:40+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=208
permalink: /2013/03/11/cimbalino-windows-phone-toolkit-multiapplicationbarbehavior/
dsq_thread_id:
  - '2046329236'
categories:
  - Windows Phone
tags:
  - ApplicationBar
  - ApplicationBarBehavior
  - Cimbalino
  - MultiApplicationBarBehavior
  - Windows Phone
  - WP7
  - WP8
  - WPDev
---

My [previous article](/2013/03/05/cimbalino-windows-phone-toolkit-applicationbarbehavior/) showed how to use the **ApplicationBarBehavior** from the [Cimbalino Windows Phone Toolkit](http://cimbalino.org) to build applications with MVVM pattern and still use the Application Bar control without the need for any code-behind.

More than just controlling the app bar from the ViewModel, the `ApplicationBarBehavior` adds some nice new properties that you can't find in the native app bar control.

Such is the nature of the `IsVisible` property found in the buttons and menu items, allowing to change the app bar contents with some ease!

To demonstrate the `IsVisible` property, I'll use the sample code from the previous article: this will generate an app bar with 3 buttons, the first two will appear when `IsSelectionDisabled = true` and the 3rd one will appear when `IsSelectionEnabled = true` (the opposite state).

This is the recorded animation of what the state changing causes to the application bar buttons visibility:

![ApplicationBarBehavior](/wp-content/uploads/2013/03/ApplicationBarBehavior.gif)

As you can see, it works perfectly! Well, almost perfectly...

If you look really closely, you'll notice that the animation doesn't seem quite that smooth!

By making time go a bit slower, this is what is actually happening:

![ApplicationBarBehavior (Slower)](/wp-content/uploads/2013/03/ApplicationBarBehavior-Slower.gif)

As you can see above, the buttons **move** before the animation starts!

This behavior is due to the nature of the [ApplicationBar.Buttons](http://msdn.microsoft.com/en-us/library/windowsphone/develop/microsoft.phone.shell.applicationbar.buttons%28v=vs.105%29.aspx) and [ApplicationBar.MenuItems](http://msdn.microsoft.com/en-us/library/windowsphone/develop/microsoft.phone.shell.applicationbar.menuitems%28v=vs.105%29.aspx) collections: their type is [IList](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.collections.ilist%28v=vs.105%29.aspx), and as such, all we really have is the [Add](http://msdn.microsoft.com/en-us/library/system.collections.ilist.add.aspx), [Remove](http://msdn.microsoft.com/en-us/library/system.collections.ilist.remove.aspx) and [Clear](http://msdn.microsoft.com/en-us/library/system.collections.ilist.clear.aspx) methods to manipulate the collection items.

And that is exactly what the `ApplicationBarBehavior` does behind the scenes: add or remove items when the `IsVisible` property of each item changes, and that is why we actually see this animation glitch.

## Now presenting the MultiApplicationBarBehavior

Fixing this issue will require changing the whole application bar associated with the page, instead of just adding or removing buttons one by one.

And that is exactly what the **MultiApplicationBarBehavior** does: it allows you to have multiples application bar controls representing different states of the app bar!

Here's the same app bar from the first article, now using the "multi" version:

```xml
<!-- remaining code -->

<Grid x:Name="LayoutRoot" Background="Transparent">
    <i:Interaction.Behaviors>
        <cimbalino:MultiApplicationBarBehavior SelectedIndex="{Binding ApplicationBarSelectedIndex}">
            <cimbalino:ApplicationBar>
                <cimbalino:ApplicationBarIconButton Command="{Binding AddItemCommand, Mode=OneTime}" IconUri="/Images/appbar.add.rest.png" Text="add" />
                <cimbalino:ApplicationBarIconButton Command="{Binding EnableSelectionCommand, Mode=OneTime}" IconUri="/Images/appbar.manage.rest.png" Text="select" />
            </cimbalino:ApplicationBar>
            <cimbalino:ApplicationBar>
                <cimbalino:ApplicationBarIconButton Command="{Binding DeleteItemsCommand, Mode=OneTime}" CommandParameter="{Binding SelectedItems, ElementName=ItemsMultiselectList}" IconUri="/Images/appbar.delete.rest.png" Text="delete" />
            </cimbalino:ApplicationBar>
        </cimbalino:MultiApplicationBarBehavior>
    </i:Interaction.Behaviors>

    <!-- remaining code -->

</Grid>

<!-- remaining code -->
```

Major difference here is the presence of multiple `ApplicationBar` entries, but also the `MultiApplicationBarBehavior.SelectedIndex` property which will allow you to select what app bar you want to show.

Here's the recording of the app bar transition now:

![MultiApplicationBarBehavior](/wp-content/uploads/2013/03/MultiApplicationBarBehavior.gif)

Much nicer, but just to make sure, here is the same animation but about 5 times slower:

![MultiApplicationBarBehavior (Slower)](/wp-content/uploads/2013/03/MultiApplicationBarBehavior-Slower.gif)
