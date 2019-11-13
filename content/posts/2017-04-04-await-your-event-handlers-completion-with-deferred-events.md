---
title: Await your event handlers completion with Deferred Events
date: 2017-04-04T14:55:59+01:00
last_modified_at: 2019-11-13T19:06:45+00:00
layout: post
categories:
  - Windows
tags:
  - Async
  - Events
  - Deferred Events
  - .NET
  - .NET Standard
---

Developers should avoid `async void` methods, but there are some situations where this is a "necessary evil", and event handlers are one of those cases.

If one needs to use the `await` keyword inside an event handler code, the method itself must be `async void`

The following is an example of this:

```csharp
public sealed partial class MainPage : Page
{
    public MainPage()
    {
        InitializeComponent();

        Loaded += MainPage_Loaded;
    }

    private async void MainPage_Loaded(object sender, Windows.UI.Xaml.RoutedEventArgs e)
    {
        await DoSomethingAsync();

        await DoSomethingMoreAsync();
    }
}
```

On the above example, the `MainPage_Loaded` is an `async void` method that will as it needs to await for the completion of some of its calls, but sometimes we also need to allow the event invoker to wait for all handlers to complete.

Inspired on how the background tasks use a deferral approach to solving this problem (as they too are `void` methods), I came up with a similar approach!

## Introducing the Deferred Events

A "deferred event" is basically an event that allows the invoker to wait for the completion of all event handlers.

My personal implementation is available on the [DeferredEvents NuGet package](https://www.nuget.org/packages/DeferredEvents/) that you can install by running `Install-Package DeferredEvents` on the [Package Manager Console](https://docs.nuget.org/docs/start-here/using-the-package-manager-console), or add with Visual Studio NuGet Packages Manager.

This is a .NET Standard 1.0 package, so you should be able to use it on any .NET project!

If you want to take a look at what's inside, the full source code is available [here](https://github.com/PedroLamas/DeferredEvents).

## Usage

Here is an example of a deferred event:

```csharp
public event EventHandler<DeferredEventArgs> MyEvent;
```

The only difference here to a regular event is that the event arguments have to be of type [DeferredEventArgs](https://github.com/PedroLamas/DeferredEvents/blob/master/DeferredEvents/DeferredEventArgs.cs) (or a custom class inheriting from them), and that's what allows the whole thing to work!

Now take a look at how we raise this event:

```csharp
await MyEvent.InvokeAsync(sender, new DeferredEventArgs());
```

The `InvokeAsync()` is an extension method that will wait for all event handlers to finish their work before we proceed.

And finally, here's how our event handler looks like:

```csharp
public async void OnMyEvent(object sender, DeferredEventArgs e)
{
    var deferral = e.GetDeferral();

    await DoSomethingAsync();

    deferral.Complete();
}
```

The trick here is to call `e.GetDeferral()` to retrieve a deferral object, and just before we exit the method, we do `deferral.Complete()` to notify the invoker that we have completed our work!

There are a few rules that you have to be aware of:

- You only need to call `e.GetDeferral()` if you actually want to the event caller to wait for the completion of the event handler; if you don't call it, it will just behave as a regular event handler.
- You **must** call `e.GetDeferral()` to get an `EventDeferral` instance before any `await` call in your code to ensure that the event caller knows that it should wait for `deferral.Complete()`; ideally, it should be the first thing you do in the event handler code.
- If you have indeed called `e.GetDeferral()`, then you **must** call `deferral.Complete()` to signal that the event handler has finished.

To ensure the correct usage of the deferred events, use the following as a template for your event handlers:

```csharp
public async void OnMyEvent(object sender, DeferredEventArgs e)
{
    var deferral = e.GetDeferral();

    try
    {
        // awaiteable code
    }
    finally
    {
        deferral.Complete();
    }
}
```

Alternatively, you can also use the `using` pattern like this:

```csharp
public async void OnMyEvent(object sender, DeferredEventArgs e)
{
    using (e.GetDeferral())
    {
        // awaiteable code
    }
}
```
