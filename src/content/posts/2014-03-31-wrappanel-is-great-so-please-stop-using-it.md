---
id: 3936
title: WrapPanel is great, so please, stop using it!
date: 2014-03-31T11:38:46+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=3936
permalink: /2014/03/31/wrappanel-is-great-so-please-stop-using-it/
dsq_thread_id:
  - '2562203881'
image: /wp-content/uploads/2014/03/WrapPanel-layout-420x270.png
categories:
  - Windows Phone
tags:
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
  - WrapPanel
---

The **WrapPanel** control (part of the [Windows Phone Toolkit](http://phone.codeplex.com)) is a really useful control container.

Having said that, **you should definitely avoid using it** in your apps if you are planing to use in [ListBox.ItemsPanel](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.itemscontrol.itemspanel%28v=vs.105%29.aspx) for large lists items presented with fixed size!!

To demonstrate my point, let's say we have a list of 10 items:

```text
{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```

Now say we want to list 3 items per row and them wrap to the next row, we can use a `WrapPanel` container control, like so:

```xml
<ListBox x:Name="ItemsListBox"
            ItemTemplate="{StaticResource ItemDataTemplate}">
    <ListBox.ItemsPanel>
        <ItemsPanelTemplate>
            <toolkit:WrapPanel />
        </ItemsPanelTemplate>
    </ListBox.ItemsPanel>
</ListBox>
```

The resulting items layout will look something like the following picture:

[![WrapPanel layout](/wp-content/uploads/2014/03/WrapPanel-layout-252x300.png)](/wp-content/uploads/2014/03/WrapPanel-layout.png)

This will work fine with 10 items, but what about 100? Or 1.000? Or even 10.000?

Using a `WrapPanel` with a large number of items will cause the control loading time and memory usage to increase, and if you make it large enough, you'll probably start seeing your app crash with "out of memory" errors...

Now lets say we first group the items in groups of 3, making the source list look like this:

```text
{ {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {9} }
```

All we now need is another `ItemsControl` inside our main `ListBox` to iterate the each group, something like this:

```xml
<ListBox x:Name="ItemsListBox">
    <ListBox.ItemTemplate>
        <DataTemplate>
            <ItemsControl ItemTemplate="{StaticResource ItemDataTemplate}" ItemsSource="{Binding}">
                <ItemsControl.ItemsPanel>
                    <ItemsPanelTemplate>
                        <VirtualizingStackPanel Orientation="Horizontal" />
                    </ItemsPanelTemplate>
                </ItemsControl.ItemsPanel>
            </ItemsControl>
        </DataTemplate>
    </ListBox.ItemTemplate>
</ListBox>
```

Here's the resulting layout schematic:

[![Smart Wrapping layout](/wp-content/uploads/2014/03/Smart-Wrapping-layout-252x300.png)](/wp-content/uploads/2014/03/Smart-Wrapping-layout.png)

Major advantages with this approach is the obvious performance improvement and memory consumption reduction. Why? Because we maintained the `VirtualizingStackPanel` in our main `ListBox.ItemsPanel`!

To prove my point, I've created a [small demonstration app](/wp-content/uploads/downloads/2014/03/PedroLamas.SmartWrapListDemo.zip) showing the result of using these two approaches with a list of 400 items.

Download the code, deploy it on a phone or emulator, then run each approach separately and exit the app after each run in order to check the peak memory usage.

You'll notice a huge difference in loading times, but I can tell you that memory wise, it's the difference between using 120MB or just 20MB! :)
