---
layout: post
title: Building multi-window dispatcher agnostic view-model
date: 2018-04-19T21:19:43+01:00
last_modified_at: 2019-02-12T14:29:00+00:00
categories:
  - Windows
tags:
  - Binding
  - MVVM
  - UWP
  - Windows
  - Windows 10
  - WPDev
---

On my earlier post I wrote about ["Building a dispatcher agnostic view-model"](/2018/03/23/building-a-dispatcher-agnostic-view-model/); that was just laying the ground for this follow up post, where I am going to show how we can extend that knowledge to use view-models shared between separate windows on different UI threads!

In truth, I started thinking in writing this after seeing my fellow MVP [Rudy Huyn](http://www.rudyhuyn.com/) [CrossUIBinding](https://github.com/rudyhuyn/xUIBinding) library.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Nice, but wouldn&#39;t it be easier just to override the add &amp; remove of the PropertyChanged event and capture the Dispatcher there? That way all you need is a base viewmodel, no other changes on the view or properties of the viewmodel!</p>&mdash; Pedro Lamas (@pedrolamas) <a href="https://twitter.com/pedrolamas/status/974710901776535558?ref_src=twsrc%5Etfw">March 16, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Rudy's solution to this problem requires a wrapper around the properties of the view-models, where as I intend to fix the way view-models notify their event handlers.

## But why do I need this?

Well, you will only need this if your application uses multiple windows **and** you want to share the same view-model instance between them!

if that is the case, then you must ensure you raise the [INotifyPropertyChanged.PropertyChanged](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.data.inotifypropertychanged.propertychanged?wt.mc_id=MVP) event on the correct thread as **each window as its own separate UI thread!**

I strongly recommend a look at the great document that Rudy has written around the [CrossUIBinding](https://github.com/rudyhuyn/xUIBinding/blob/master/README.md) as it has a lot of valuable information with some great visualizations!

## So how do we solve this?

We can ensure we raise the `PropertyChanged` event in the correct UI thread by capturing the dispatcher instance when an event handler is added!

That can easily be achieved by defining custom `add` and `remove` event accessors that will get invoked when client code subscribes and unsubscribes respectively to the event:

```csharp
public abstract class MultiWindowBaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;
    {
        add
        {
            // add code goes here
        }
        remove
        {
            // remove code goes here
        }
    }
}
```

All we now need is to ensure we capture the `CoreDispatcher` when the `add` method runs, and store that with the handler reference.

After my first post, Daniel Vistisen correctly pointed out that we can use SynchronizationContext instead of CoreDispatcher thus making the whole thing .NET Standard compliant:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Why not just use SynchronizationContext? Works with .netstandard</p>&mdash; Daniel Vistisen (@DanielVistisen) <a href="https://twitter.com/DanielVistisen/status/979140409518641152?ref_src=twsrc%5Etfw">March 28, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

He is absolutely right, so that is what we will now do!

We will use a `Dictionary<SynchronizationContext, PropertyChangedEventHandler>` to keep a collection of event handlers for each `SynchronizationContext`.

In the end, this is what I got to:

```csharp
public class MultiWindowViewModelBase : INotifyPropertyChanged
{
    private readonly object _lock = new object();
    private readonly Dictionary<SynchronizationContext, PropertyChangedEventHandler> _handlersWithContext = new Dictionary<SynchronizationContext, PropertyChangedEventHandler>();

    public event PropertyChangedEventHandler PropertyChanged
    {
        add
        {
            if (value == null)
            {
                return;
            }

            var synchronizationContext = SynchronizationContext.Current;

            lock (_lock)
            {
                if (_handlersWithContext.TryGetValue(synchronizationContext, out PropertyChangedEventHandler eventHandler))
                {
                    eventHandler += value;

                    _handlersWithContext[synchronizationContext] = eventHandler;
                }
                else
                {
                    _handlersWithContext.Add(synchronizationContext, value);
                }
            }
        }
        remove
        {
            if (value == null)
            {
                return;
            }

            var synchronizationContext = SynchronizationContext.Current;

            lock (_lock)
            {
                if (_handlersWithContext.TryGetValue(synchronizationContext, out PropertyChangedEventHandler eventHandler))
                {
                    eventHandler -= value;

                    if (eventHandler != null)
                    {
                        _handlersWithContext[synchronizationContext] = eventHandler;
                    }
                    else
                    {
                        _handlersWithContext.Remove(synchronizationContext);
                    }
                }
            }
        }
    }

    protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        KeyValuePair<SynchronizationContext, PropertyChangedEventHandler>[] handlersWithContext;

        lock (_lock)
        {
            handlersWithContext = _handlersWithContext.ToArray();
        }

        var eventArgs = new PropertyChangedEventArgs(propertyName);

        foreach (var handlerWithContext in handlersWithContext)
        {
            var synchronizationContext = handlerWithContext.Key;
            var eventHandler = handlerWithContext.Value;

            synchronizationContext.Post(o => eventHandler(this, eventArgs), null);
        }
    }
}
```

Now all we need is to ensure that any view-model used on multiple windows, inherits from this base class.

Here's a really simple example:

```csharp
public class MainViewModel : MultiWindowViewModelBase
{
    private string _text;

    public string Text
    {
        get { return _text; }
        set
        {
            if (_text == value) return;

            _text = value;
            OnPropertyChanged();
        }
    }
}
```

## Final thoughts

The [ApplicationView.Consolidated](https://docs.microsoft.com/en-us/uwp/api/windows.ui.viewmanagement.applicationview.consolidated?wt.mc_id=MVP) event should be monitored to allow for proper cleaning, so that no memory leaks occur.

Here's an example of how this can be achieved:

```csharp
public sealed partial class MainPage : Page
{
    public MainViewModel ViewModel => App.MainViewModel;

    public MainPage()
    {
        DataContext = ViewModel;

        this.InitializeComponent();

        ApplicationView.GetForCurrentView().Consolidated += ApplicationView_OnConsolidated;
    }

    private void ApplicationView_OnConsolidated(ApplicationView s, ApplicationViewConsolidatedEventArgs e)
    {
        if (e.IsAppInitiated || e.IsUserInitiated)
        {
            s.Consolidated -= ApplicationView_OnConsolidated;

            DataContext = null;

            // this is only required if you are using compiled bindings (x:Bind)
            Bindings.StopTracking();
        }
    }
}
```

I've also made available a [full sample on GitHub](https://github.com/PedroLamas/MultiWindowViewModelSample) so you can see and test the whole solution! :)
