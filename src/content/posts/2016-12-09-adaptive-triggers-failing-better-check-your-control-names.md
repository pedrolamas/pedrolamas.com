---
id: 4633
title: Adaptive Triggers failing? Better check your control names!
date: 2016-12-09T12:06:06+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4633
permalink: /2016/12/09/adaptive-triggers-failing-better-check-your-control-names/
dsq_thread_id:
  - '5367375429'
categories:
  - Windows
tags:
  - Adaptive
  - AdaptiveTrigger
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

## TL;DR

Adaptive triggers will not work if you are trying to change a control whose instance name is the same as one of the VisualStates of **any** control on the page, so make sure you name your controls accordingly!

## The long run...

I recently came to discover what I believe to be a UWP platform bug related to how one names the instance controls and how these may collided with the VisualState names!

Let's take the following sample code for a simple [AdaptiveTrigger](https://msdn.microsoft.com/library/windows/apps/windows.ui.xaml.adaptivetrigger.aspx) usage example:

```xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <Button x:Name="MyButton" Content="I don't do anything!" />

    <VisualStateManager.VisualStateGroups>
        <VisualStateGroup x:Name="VisualStateGroup">
            <VisualState x:Name="VisualStateNarrow">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="0" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="MyButton.Background" Value="Red" />
                </VisualState.Setters>
            </VisualState>

            <VisualState x:Name="VisualStateNormal">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="600" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="MyButton.Background" Value="Green" />
                </VisualState.Setters>
            </VisualState>
        </VisualStateGroup>
    </VisualStateManager.VisualStateGroups>
</Grid>
```

Here we can see we have a `Button` called "MyButton", who's background color will change accordingly to the window size: if the window width is above 600, the button will be green, and if it is below 600, it will be red.

Now here's how it looks when we run the sample code:

![Simple AdaptiveTrigger working](/wp-content/uploads/2016/12/Simple-AdaptiveTrigger-working.gif)

Works exactly as expected! :)

If you take a look at the [Button styles and templates](https://msdn.microsoft.com/en-us/library/windows/apps/mt299109.aspx), you will find out that the `Button` control contains the following named VisualStates: "Normal", "PointerOver", "Pressed", "Disabled".

Given this information, let's rename our button from "MyButton" to "Pressed":

```xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <Button x:Name="Pressed" Content="I don't do anything!" />

    <VisualStateManager.VisualStateGroups>
        <VisualStateGroup x:Name="VisualStateGroup">
            <VisualState x:Name="VisualStateNarrow">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="0" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="Pressed.Background" Value="Red" />
                </VisualState.Setters>
            </VisualState>

            <VisualState x:Name="VisualStateNormal">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="600" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="Pressed.Background" Value="Green" />
                </VisualState.Setters>
            </VisualState>
        </VisualStateGroup>
    </VisualStateManager.VisualStateGroups>
</Grid>
```

This is the result if you run the code again:

![AdaptiveTrigger now failing](/wp-content/uploads/2016/12/AdaptiveTrigger-now-failing.gif)

What you see here is that the initial state was in fact applied, but it failed to change once we started to change the window size as it was supposed to!

Further testing made me aware that this is not only influenced by the visual states of the control we are manipulating, but by **all** controls on the page!

As an example of this, on the following code we have now added a `ComboBox` control, which will also fail the adaptive changes as I named our button `Focused` which matches one of the `ComboBox` visual states:

```xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <Button x:Name="Focused" Content="I don't do anything!" />
    <ComboBox />

    <VisualStateManager.VisualStateGroups>
        <VisualStateGroup x:Name="VisualStateGroup">
            <VisualState x:Name="VisualStateNarrow">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="0" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="Focused.Background" Value="Red" />
                </VisualState.Setters>
            </VisualState>

            <VisualState x:Name="VisualStateNormal">
                <VisualState.StateTriggers>
                    <AdaptiveTrigger MinWindowWidth="600" />
                </VisualState.StateTriggers>
                <VisualState.Setters>
                    <Setter Target="Focused.Background" Value="Green" />
                </VisualState.Setters>
            </VisualState>
        </VisualStateGroup>
    </VisualStateManager.VisualStateGroups>
</Grid>
```

I've reported this issue to Microsoft, so for now all we can do is to be aware of it and make sure we name our controls so not to use the same names as any of their visual states!
