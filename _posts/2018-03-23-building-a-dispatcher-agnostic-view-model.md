---
layout: post
title: Building a dispatcher agnostic view-model
date: 2018-03-23T19:06:43+00:00
categories:
  - Windows
tags:
  - Binding
  - Async
  - Dispatcher
  - CoreDispatcher
  - MVVM
  - UWP
  - Windows
  - Windows 10
  - WPDev
---
If you are writing multithread Windows apps (and if you are not, you should!), you know by now that any code related to the UI **must** run in the main thread (also called UI thread).

Knowing this, please look at the following view-model:

```csharp
// Basic implementation of the INotifyPropertyChanged interface

public abstract class BaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}

// The main view-model

public class MainViewModel : BaseViewModel
{
    private string _result;

    public string Result
    {
        get { return _result; }
        set
        {
            _result = value;
            OnPropertyChanged("Result");
        }
    }

    public async Task RetrieveData()
    {
        var data = await GetDataFromSomeWebsite();

        Result = data;
    }

    // More code will go here...
}
```

The `BaseViewModel` is just a basic implementation of the [INotifyPropertyChanged](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.data.inotifypropertychanged) interface with a helper method that will raise the [PropertyChanged](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.data.inotifypropertychanged.propertychanged) event - all quite standard for any MVVM based application!

Now let us say that in the view we have a TextBox control, and that the `Text` property is binded to the `MainViewModel.Result` property.

Given this, you will probably notice a problem with the `MainViewModel.RetrieveData` method: after awaiting the call to `GetDataFromSomeWebsite` method, most likely we will not be on the UI thread. So, when we set the `Result` property on the next line which in turn will notify the UI that the property value has changed, that will cause an exception!

To fix it, we can use `CoreApplication.MainView.Dispatcher` to retrieve a [CoreDispatcher](https://docs.microsoft.com/en-us/uwp/api/windows.ui.core.coredispatcher) instance that will then allow us to execute code in the UI thread.

With some minor changes, the `MainViewModel.RetrieveData` method now looks something like this:

```csharp
public async Task RetrieveData()
{
    var data = await GetDataFromSomeWebsite();

    CoreApplication.MainView.Dispatcher(CoreDispatcherPriority.Normal, () => 
    {
        Text = data;
    });
}
```

For small view-models this approach is perfectly fine, but for bigger ones where multiple developers are working on, you might end up losing track of which properties you need to update in the UI thread and the ones you do not.

**Wouldn't it be great if you just didn't have to worry about this?**

To make our view-models completely oblivious of what is the current thread, we will need to make some changes to their base view-model!

The easiest way will be to capture the `CoreDispatcher` at start, and on the `OnPropertyChanged` method (or whatever you called your `PropertyChanged` event raising helper method), check if we need to dispatch the call or just raise the property regularly.

Here is our new and improved `BaseViewModel`:

```csharp
public abstract class DispatcherAgnosticBaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    private CoreDispatcher _dispatcher = CoreApplication.MainView.Dispatcher;

    protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        if (_dispatcher.HasThreadAccess)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        else
        {
            _dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
            {
                OnPropertyChanged(propertyName);
            });
        }
    }
}
```

Notice that the first this we do is to check the [CoreDispatcher.HasThreadAccess](https://docs.microsoft.com/en-us/uwp/api/windows.ui.core.coredispatcher.hasthreadaccess) property; this property will return true if we are now on the UI thread, or false if we are not.

If we are, we can then just raise the `PropertyChanged` event, but when we are not, we will recursively call the helper method again, only this time we will do it by dispatching the call through the UI thread.

Now all we now need is to have every single view-model to inherit from this base class and we will never have to worry again about the dispatcher!

Well... not interely accurate, but I'll leave that for another post ;)