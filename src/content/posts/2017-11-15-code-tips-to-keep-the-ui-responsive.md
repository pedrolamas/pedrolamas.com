---
layout: post
title: Code tips to keep the UI responsive
date: 2017-11-15T22:26:05+00:00
last_modified_at: 2019-02-12T14:29:00+00:00
categories:
  - Windows
tags:
  - UWP
  - Windows
  - Windows 10
  - WPDev
  - Async
---

I have taken a break from UWP development, and for the last couple of weeks I have been working mostly on WPF projects.

You know, that "old" XAML technology that started back when Windows XP was still a thing!

The interesting bit is that all my previous experience developing for Windows Phone did give me a lot of knowledge on how to write performant non-blocking code - and I am still learning something new every day!

These are some of my personal coding tips to help keep your app as responsive as possible!

## Execute CPU bound code on a separate thread

Consider the following example:

```csharp
private void CalculateButton_OnClick(object sender, RoutedEventArgs e)
{
    var total = MyLongRunningOperation();

    ResulTextBlock.Text = total.ToString();
}
```

The above code sample will run on the UI thread, and as it takes a while to run the `MyLongRunningOperation` method, it will make the app unresponsive until it finishes.

This is a perfect example of what CPU bound code is: code that should execute on a separate thread as to avoid blocking the UI thread while it runs.

There are a few ways to fix this problem and the easiest one is to just use [Task.Run](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.run?view=netcore-2.0&wt.mc_id=MVP).

Now look at this alternative:

```csharp
private async void CalculateButton_OnClick(object sender, RoutedEventArgs e)
{
    var total = await Task.Run(() => MyLongRunningOperation());

    ResulTextBlock.Text = total.ToString();
}
```

On the above code sample, we wrapped the call to `MyLongRunningOperation` method with a `Task.Run` that will force it to execute on a new separate thread, and then awaited for it to complete.

**Note:** Libraries should not lie about what they are doing! The UI thread is the only one that needs the asynchronous API, so it should be up to the end developer to decide when to use this, not 3rd party libraries ones!

## Avoid using task.Result or task.Wait()

If use `task.Result` or call `task.Wait()` you will be blocking the current thread until that task completes, which is not ideal especially if the thread is the main UI thread!

A particular situation I see people doing this is for constructors; here's an example:

```csharp
public class TestClass
{
    private int _initialValue;

    public TestClass()
    {
        _initialValue = GetInitialValueTask().Wait(); // don't do this!
    }

    public int GetInitialValueDoubled()
    {
        return _initialValue * 2;
    }

    // other code...
}
```

The whole point of the .NET asynchronous model is to use the `async` and `await` keywords!

To avoid this issue, one could write the code like this:

```csharp
public class TestClass
{
    private Task<int> _initialValueTask;

    public TestClass()
    {
        _initialValueTask = GetInitialValueTask(); // store the async task
    }

    public async Task<int> GetInitialValueDoubled()
    {
        var value = await _initialValueTask;

        return value * 2;
    }

    // other code...
}
```

Instead of blocking the thread like we did before, we just store the asynchronous task and when we need it, we ensure we access it from an `async` method so we can `await` on it!

## Use task.ConfigureAwait(false) whenever possible

Developers should assume that the `await` keyword will make any call return to calling thread.

Consider the following sample code:

```csharp
private async void CalculateButton_OnClick(object sender, RoutedEventArgs e)
{
    await IoBoundOperation();

    await AnotherIoBoundOperation();

    ResultTextBlock.Text = "Done!";
}
```

Both `IoBoundOperation` and `AnotherIoBoundOperation` have IO bound code, so they will most likely execute on separate threads.

Once these awaited calls finish and return, execution might resume on the calling thread, which in this case is the UI thread.

However, most likely this isn't required, and we could just carry on execution on the same background thread.

Now look at the modified version of the sample code:

```csharp
private async void CalculateButton_OnClick(object sender, RoutedEventArgs e)
{
    await IoBoundOperation()
        .ConfigureAwait(false);

    await AnotherIoBoundOperation()
        .ConfigureAwait(false);

    Dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
    {
        ResulTextBlock.Text = total.ToString();
    });
}
```

We have now added `.ConfigureAwait(false)` to each awaited call as to avoid marshaling back to the calling thread.

Any code that needs to run on the UI thread (normally, to update the UI) can do so by using the [Dispatcher.RunAsync](https://docs.microsoft.com/en-us/uwp/api/windows.ui.core.coredispatcher#Windows_UI_Core_CoreDispatcher_RunAsync_?wt.mc_id=MVP) method as seen above.

## Consider using Deferred Events for your custom events

The rule of thumb on the asynchronous code is to avoid `async void` methods as much as possible, but for event handlers, there is no way to bypass this.

A while back I created the [DeferredEvents](https://www.nuget.org/packages/DeferredEvents/) NuGet package to mitigate this issue; at the time, I wrote an [article](/2017/04/04/await-your-event-handlers-completion-with-deferred-events/) that I now recommend reading to further understand the problem and my proposed solution.
