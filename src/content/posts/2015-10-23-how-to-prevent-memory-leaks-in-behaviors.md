---
id: 4211
title: How to prevent memory leaks in Behaviors
date: 2015-10-23T18:01:33+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4211
permalink: /2015/10/23/how-to-prevent-memory-leaks-in-behaviors/
dsq_thread_id:
  - '4252702255'
categories:
  - Windows
  - Windows Phone
tags:
  - Behaviors
  - Cimbalino
  - MonitoredInteraction
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
---

Attached Behaviors have been around for quite a while, and though I personally always liked them, they have a fundamental flaw: they can lead to huge memory leaks!

I've seen quite a few fixes for them (like [this one](http://dotnetbyexample.blogspot.co.uk/2011/04/safe-event-detachment-pattern-for.html) from MVP Joost Van Schaik), though none proved to be truly "universal" and final!

To demonstrate the problem, let's take a practical example:

- create an app with two pages
- page 1 will have a button to navigate to page 2
- page 2 will have a button that when clicked, will navigate back to page 1 after a pause of 2 seconds

Here's the view model for page 2, `Page2ViewModel`:

```csharp
public class Page2ViewModel
{
    public event EventHandler GoBack;

    public ICommand DelayedGoBackCommand { get; private set; }

    public MainViewModel()
    {
        DelayedGoBackCommand = new CustomCommand(OnDelayedGoBackCommand);
    }

    private async void OnDelayedGoBackCommand()
    {
        await Task.Delay(2000);

        GoBack?.Invoke(this, EventArgs.Empty);
    }
}
```

The code is really simple: when the `DelayedGoBackCommand` gets invoked, we will make a 2 seconds pause, and then raise the `GoBack` event.

Now lets say that all view models have been registered as singletons in the `App` class, something like this:

```csharp
sealed partial class App : Application
{
    public static Page2ViewModel Page2ViewModel { get; } = new Page2ViewModel();

    // remaining code
}
```

This is the code behind for page 2, where we will set the page view model:

```csharp
public class Page2
{
    public Page2()
    {
        InitializeComponent();

        DataContext = App.Page2ViewModel;
    }
}
```

And this is the view we will be using for page 2:

```xml
<Page x:Class="MyApp.Page2"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:core="using:Microsoft.Xaml.Interactions.Core"
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
      xmlns:i="using:Microsoft.Xaml.Interactivity"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
      x:Name="PageRoot"
      mc:Ignorable="d">

    <StackPanel Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <i:Interaction.Behaviors>
            <core:EventTriggerBehavior EventName="GoBack"
                                       SourceObject="{Binding}">
                <core:CallMethodAction MethodName="GoBack"
                                       TargetObject="{Binding Frame,
                                                              ElementName=PageRoot}" />
            </core:EventTriggerBehavior>
        </i:Interaction.Behaviors>

        <Button Command="{Binding DelayedGoBackCommand,
                                  Mode=OneTime}"
                Content="Go Back" />
    </StackPanel>
</Page>
```

As you can see above, the button is binded to the `Page2ViewModel.DelayedGoBackCommand`. Also, we will be using an `EventTriggerBehavior` to monitor the `Page2ViewModel.GoBack` event, and when it gets raised, we will use the `CallMethodAction` to invoke the `Page2.Frame.GoBack` method.

Now here's the catch: **while behaviors have a way of being notified when they are to be detached, that never happens!!** Not when you leave the page, not when the page gets unloaded, and not even when garbage collection runs.

As such, when we navigate back from page 2, `Page2ViewModel.GoBack` event will still hold a reference to the `EventTriggerBehavior`, leading to a memory leak!

But things get even worse in this example: everytime we navigate to page 2, we will subscribe over and over again the `GoBack` event, so multiple invocations will eventually occur - definitely not what we wanted!

## Introducing the MonitoredInteraction class

The [Cimbalino Toolkit](http://cimbalino.org) now has the [**MonitoredInteraction**](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit%20(WP8)/Behaviors/MonitoredInteraction.cs>) class to solve this issue!

The `MonitoredInteraction` was built as a direct replacement of the `Microsoft.Xaml.Interactivity.Interaction`, and will monitor the attached object `Loaded` and `Unloaded` events and call for the attachment and detachment of all behaviors it contains!

Here's how page 2 view would look if put it to use:

```xml
<Page x:Class="MyApp.Page2"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:core="using:Microsoft.Xaml.Interactions.Core"
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
      xmlns:behaviors="using:Cimbalino.Toolkit.Behaviors"
      x:Name="PageRoot"
      mc:Ignorable="d">

    <StackPanel Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <behaviors:MonitoredInteraction.Behaviors>
            <core:EventTriggerBehavior EventName="GoBack"
                                       SourceObject="{Binding}">
                <core:CallMethodAction MethodName="GoBack"
                                       TargetObject="{Binding Frame,
                                                              ElementName=PageRoot}" />
            </core:EventTriggerBehavior>
        </behaviors:MonitoredInteraction.Behaviors>

        <Button Command="{Binding DelayedGoBackCommand,
                                  Mode=OneTime}"
                Content="Go Back" />
    </StackPanel>
</Page>
```

Really, really simple, yet it will finally ensure that behaviors do get detached when one navigates away of a page, and re-attached when navigating in!

Hopefully someone from the Behaviors SDK team will read this, and take some of the suggestions here to fix this well known issue that's been around for quite a while! ;)
