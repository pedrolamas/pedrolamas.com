---
id: 53
title: Windows Phone Choosers with async/await
date: 2013-01-08T12:04:04+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=53
permalink: /2013/01/08/windows-phone-choosers-with-asyncawait/
fb_author_post_id:
  - 4744536725243
dsq_thread_id:
  - '2045483759'
categories:
  - Windows Phone
tags:
  - Async
  - Await
  - Windows Phone
  - WPDev
---

Currently, Windows Phone [Choosers](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769542(v=vs.105).aspx#BKMK_Choosers>) work is by invoking the [Show](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff707460(v=vs.105).aspx>) method and then subscribing the [Completed](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff707989(v=vs.105).aspx>) event and waiting for it to be invoked.

Wouldn't it be great to just use `await chooser.ShowAsync()` and get the results immediately?

All choosers extend the [ChooserBase&lt;TTaskEventArgs&gt;](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff707923(v=vs.105).aspx>) class, and it's exactly for this class that we are going to use to create a ShowAsync extension method.

We start by creating the extension method signature:

```csharp
public static class ExtensionMethods
{
    public static Task<TTaskEventArgs> ShowAsync<TTaskEventArgs>(this ChooserBase<TTaskEventArgs> chooser)
        where TTaskEventArgs : TaskEventArgs
    {
    }
}
```

The `async` methods are required to return void, [Task](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.tasks.task(v=vs.105).aspx>), or [Task&lt;TResult&gt;](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/dd321424(v=vs.105).aspx>) in order to be invoked with the `await` keyword. So our method will return a `Task<TTaskEventArgs>` value, where the `TTaskEventArgs` generic type must be a [TaskEventArgs](<http://msdn.microsoft.com/en-US/library/windowsphone/develop/microsoft.phone.tasks.taskeventargs(v=vs.105).aspx>) subtype.

We will need to use a [TaskCompletionSource](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/dd449174(v=vs.105).aspx>) object so we can return a Task and later on set the result of the asynchronous operation.

```csharp
var taskCompletionSource = new TaskCompletionSource<TTaskEventArgs>();
```

Next we will add the code for the normal Chooser handling:

```csharp
EventHandler<TTaskEventArgs> completed = null;

completed = (s, e) => {
    chooser.Completed -= completed;

    taskCompletionSource.SetResult(e);
};

chooser.Completed += completed;
chooser.Show();
```

Notice that we are removing the event handler after it gets invoked as not to have a memory leak! All that is missing now is just returning the Task object:

```csharp
return taskCompletionSource.Task;
```

And that's it!

Here's how the full extension method should look:

```csharp
public static class ExtensionMethods {
    public static Task<TTaskEventArgs> ShowAsync<TTaskEventArgs>(this ChooserBase<TTaskEventArgs> chooser)
        where TTaskEventArgs : TaskEventArgs
    {
        var taskCompletionSource = new TaskCompletionSource<TTaskEventArgs>();

        EventHandler<TTaskEventArgs> completed = null;

        completed = (s, e) => {
            chooser.Completed -= completed;

            taskCompletionSource.SetResult(e);
        };

        chooser.Completed += completed;
        chooser.Show();

        return taskCompletionSource.Task;
    }
}
```

You can download a sample code for this directly from the [Microsoft Code Gallery](https://code.msdn.microsoft.com/Windows-Phone-Choosers-99aeec4b).
