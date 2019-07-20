---
id: 4334
title: Awaiting the CoreDispatcher
date: 2016-01-20T10:29:19+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4334
permalink: /2016/01/20/awaiting-the-coredispatcher/
dsq_thread_id:
  - '4507148543'
categories:
  - Windows
  - Windows Phone
tags:
  - CoreDispatcher
  - Dispatcher
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
---

Most programming language allow you to take advantage of multi-threaded execution, and .NET is no exception!

Asynchronous code is a modern abstraction of multi-threading execution, and as you hopefully are aware, in .NET land, this is achieved with the `async` and `await` keywords.

For the Universal Windows Platform, we can also count on the [CoreDispatcher](https://msdn.microsoft.com/library/windows/apps/windows.ui.core.coredispatcher.aspx) class to marshal execution back to the main thread, from which we can update the UI of our apps.

Here's a simple example of how to use it:

```csharp
public async void DoStuff()
{
    var dispatcher = CoreApplication.MainView.CoreWindow.Dispatcher;

    await dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
    {
        UpdateUI();
    });

    DoOtherStuff();
}
```

Assuming we are on a background thread when the `DoStuff()` method is invoked, we will retrieve a `CoreDispatcher` instance from the `CoreWindow.CoreDispatcher` property, call and await for the execution of `dispatcher.RunAsync()` method, which in turn will invoke the `UpdateUI()` method on the main thread, and then code execution will continue in the background thread by invoking the `DoOtherStuff()` method.

As it is right now, we know that `DoOtherStuff` will only execute **after** the `UpdateUI()` method finishes, but now let's assume that we replace the `UpdateUI()` synchronous method with an asynchronous version of it, called `UpdateUIAsync()`:

```csharp
public async void DoStuff()
{
    var dispatcher = CoreApplication.MainView.CoreWindow.Dispatcher;

    await dispatcher.RunAsync(CoreDispatcherPriority.Normal, async () =>
    {
        await UpdateUIAsync();
    });

    DoOtherStuff();
}
```

In this new version of the code, you'll notice that the `DoOtherStuff()` method will eventually run before the `UpdateUIAsync()` has finished, which might not be what you intended to in the first place when you await'ed for the `dispatcher.RunAsync()` method!

This is due to the fact that the [CoreDispatcher.RunAsync](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.core.coredispatcher.runasync.aspx) method has a [DispatchedHandler](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.core.dispatchedhandler.aspx) callback which is not asynchronous:

```csharp
public delegate void DispatchedHandler()
```

The fact that we've added the `async/await` keywords to the callback doesn't ensure that the caller will await for it to execute!

There are a few ways suspend the background thread execution until the foreground thread signals for it to continue, and using a [TaskCompletionSource&lt;T&gt;](<https://msdn.microsoft.com/en-us/library/dd449174(v=vs.110).aspx>) is one of the easiest:

```csharp
public async void DoStuff()
{
    var dispatcher = CoreApplication.MainView.CoreWindow.Dispatcher;
    var taskCompletionSource = new TaskCompletionSource<bool>();

    await dispatcher.RunAsync(CoreDispatcherPriority.Normal, async () =>
    {
        await UpdateUIAsync();

        taskCompletionSource.SetResult(true);
    });

    await taskCompletionSource.Task;

    DoOtherStuff();
}
```

In this version of the code, once the execution returns from await'ing the `dispatcher.RunAsync()` call, the background thread will carry on execution, but will then await for the `taskCompletionSource.Task` to finish, which will only happen after the `taskCompletionSource.SetResult(true)` call that we make in the main thread!

I've written a few [CoreDispatcher extension methods](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Core%20(WP8)/Extensions/CoreDispatcherExtensions.cs>) to help around this issue, and added them to the next version of the [Cimbalino Toolkit](http://cimbalino.org), but you can access them right now if you wish so! ;)
