---
id: 4320
title: Compiled Bindings considerations II
date: 2016-01-08T16:02:34+00:00
last_modified_at: 2018-01-31T23:45:00+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4320
permalink: /2016/01/08/compiled-bindings-considerations-ii/
dsq_thread_id:
  - '4473571193'
categories:
  - Windows
  - Windows Phone
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

**Update:** Microsoft has finally provided a fix for this bug, covered in the [Compiled Bindings considerations III](/2018/01/31/compiled-bindings-considerations-iii/) article!

A few months ago I wrote my first [Compiled Bindings considerations](/2015/10/19/compiled-bindings-considerations/) article, and seems that time has come to write some more, only this time I'm bearer of some bad news...

## TL;DR

Compiled Bindings have a bug, noticeable in some scenarios, specifically when a binding has a fallback value of null (which is the default)!

Make sure to thoroughly test your app if you use compiled bindings!

## So what is the big deal?

To illustrate the problem, I've written a small demo app!

Let's start by checking the view models code:

```csharp
public abstract class ViewModelBase : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}

public class MainViewModel : ViewModelBase
{
    private CurrentTimeViewModel _currentTime;

    public CurrentTimeViewModel CurrentTime
    {
        get { return _currentTime; }
        set
        {
            _currentTime = value;
            OnPropertyChanged();
        }
    }
}

public class CurrentTimeViewModel : ViewModelBase
{
    private string _currentTimeTicks;

    public string CurrentTimeTicks
    {
        get { return _currentTimeTicks; }
        set
        {
            _currentTimeTicks = value;
            OnPropertyChanged();
        }
    }

    public CurrentTimeViewModel()
    {
        Update();
    }

    public void Update()
    {
        CurrentTimeTicks = DateTime.Now.Ticks.ToString();
    }
}
```

Our view model is composed of 3 classes:

- **ViewModelBase** is just a standard implementation for the `INotifyPropertyChanged` interface, providing an `OnPropertyChanged` helper method to its inheritors.
- **MainViewModel** will be used as the main view model for our sample and has a single property, `CurrentTime`.
- **CurrentTimeViewModel** has a single `CurrentTimeTicks` property which will contain a string representing the current time in ticks; an `Update` helper method has also been added to this view model.

Now let's take a look at the MainPage view:

```xml
<Page x:Class="CompiledBindings2.MainPage"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
      xmlns:local="using:CompiledBindings2"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
      mc:Ignorable="d">

    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Grid.RowDefinitions>
            <RowDefinition />
            <RowDefinition Height="Auto" />
        </Grid.RowDefinitions>

        <StackPanel Margin="12">
            <TextBlock Style="{StaticResource CaptionTextBlockStyle}" Text="Current Time Ticks (Binding)" />
            <TextBlock Style="{StaticResource BodyTextBlockStyle}" Text="{Binding CurrentTime.CurrentTimeTicks}" />

            <TextBlock Style="{StaticResource CaptionTextBlockStyle}" Text="Current Time Ticks (x:Bind)" />
            <TextBlock Style="{StaticResource BodyTextBlockStyle}" Text="{x:Bind ViewModel.CurrentTime.CurrentTimeTicks, Mode=OneWay}" />
        </StackPanel>

        <StackPanel Grid.Row="1">
            <Button HorizontalAlignment="Stretch"
                    Click="CreateChildViewModelButton_OnClick"
                    Content="Create CurrentTimeViewModel" />
            <Button HorizontalAlignment="Stretch"
                    Click="UpdateCurrentTimeViewModelButton_OnClick"
                    Content="Update CurrentTimeViewModel" />
            <Button HorizontalAlignment="Stretch"
                    Click="DestroyCurrentTimeViewModelButton_OnClick"
                    Content="Destroy CurrentTimeViewModel" />
        </StackPanel>
    </Grid>
</Page>
```

The MainPage view is composed of the following:

- a TextBlock with its `Text` property binded to `CurrentTimeViewModel.CurrentTimeTicks`, using "classic" bindings
- a TextBlock with its `Text` property binded to `CurrentTimeViewModel.CurrentTimeTicks`, using compiled bindings
- a Button to create a new CurrentTimeViewModel instance
- a Button to update the current CurrentTimeViewModel instance
- a Button to destroy the current CurrentTimeViewModel instance

Finally, here's the code behind for the MainPage view:

```csharp
public sealed partial class MainPage : Page
{
    private readonly MainViewModel _viewModel;

    public MainPage()
    {
        this.InitializeComponent();

        _viewModel = new MainViewModel();

        this.DataContext = _viewModel;
    }

    public MainViewModel ViewModel
    {
        get { return _viewModel; }
    }

    private void CreateChildViewModelButton_OnClick(object sender, RoutedEventArgs e)
    {
        _viewModel.CurrentTime = new CurrentTimeViewModel();
    }

    private void UpdateCurrentTimeViewModelButton_OnClick(object sender, RoutedEventArgs e)
    {
        if (_viewModel.CurrentTime != null)
        {
            _viewModel.CurrentTime.Update();
        }
    }

    private void DestroyCurrentTimeViewModelButton_OnClick(object sender, RoutedEventArgs e)
    {
        _viewModel.CurrentTime = null;
    }
}
```

As you can see above, we create a new MainViewModel instance, set it as the page `DataContext` property, and then we have the three click event handlers, one for each of the buttons on the view.

We've also added a `MainPage.ViewModel` property to expose the current MainViewModel instance to the compiled bindings (we can't use the `DataContext` property as its type is `object` and compiled bindings require strong-typed properties to work).

This is what you'll get if you run the app and tap the buttons in succession:

![Compiled Bindings FallbackValue bug](/wp-content/uploads/2016/01/Compiled-Bindings-FallbackValue-bug.gif)

As you can see, the 2nd TextBlock (the one using compiled bindings) never gets the text cleared when we tap the "Destroy CurrentTimeViewModel" button!

The expected behavior is the one shown in the 1st TextBlock: if the binding value is `null` or unavailable, the `TextBlock.Text` property will set to the [Binding.FallbackValue](https://msdn.microsoft.com/en-US/library/windows/apps/xaml/windows.ui.xaml.data.binding.fallbackvalue) (which is `null` by default).

So after checking the documentation for compiled bindings, one can say without that compiled bindings are ignoring the fallback value when its value is `null`, and that is quite **a nasty bug in the compiled bindings!**

This bug has already been reported to Microsoft but as we don't know when it will get fixed, all we can do right now is be aware of the whole issue and make sure to test our apps thoroughly to ensure we don't end up with these problems after migrating to compiled bindings!
