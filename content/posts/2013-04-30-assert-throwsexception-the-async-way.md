---
id: 601
title: Assert.ThrowsException the async way
date: 2013-04-30T17:19:37+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=601
permalink: /2013/04/30/assert-throwsexception-the-async-way/
dsq_thread_id:
  - '2069756678'
categories:
  - Windows Phone
tags:
  - ThrowsException
  - Unit Testing
  - Visual Studio
  - VS2012
  - VS2012.2
  - Windows Phone
  - WP8
  - WP8Dev
  - WPDev
---

The new Windows Phone Test Framework on Visual Studio 2012 Update 2 is a major step in the right direction for testing WP apps.

I particularly like the fact that all tests run on the emulator where they can get the full runtime environment of a real Windows Phone device.

Yet, the test framework still has some pitfalls where we realize it is just not enough!

A few weeks ago I wrote an [article](/2013/03/25/windows-phone-8-unit-testing-in-the-ui-thread-with-vs-2012-2-ctp4/) about one of these pitfalls, on how to run code in the UI Thread.

Now I've stumbled in yet another pitfall, this time on how to run the `Assert.ThrowsException` with `async` code!

Microsoft solved this issue on the Windows 8 version of the Test Framework, by adding some `Task<Exception> Assert.ThrowsException(Func<Task>)` methods, but there is no equivalent in Windows Phone.

This is my personal implementation of these methods for the Windows Phone Test Framework:

```csharp
public static class AssertExtensions
{
    public static Task<T> ThrowsExceptionAsync<T>(Func<Task> action)
        where T : Exception
    {
        return ThrowsExceptionAsync<T>(action, string.Empty, null);
    }

    public static Task<T> ThrowsExceptionAsync<T>(Func<Task> action, string message)
        where T : Exception
    {
        return ThrowsExceptionAsync<T>(action, message, null);
    }

    public async static Task<T> ThrowsExceptionAsync<T>(Func<Task> action, string message, object[] parameters)
        where T : Exception
    {
        try
        {
            await action();
        }
        catch (Exception ex)
        {
            if (ex.GetType() == typeof(T))
            {
                return ex as T;
            }

            var objArray = new object[] {
                "AssertExtensions.ThrowsExceptionAsync",
                string.Format(CultureInfo.CurrentCulture, FrameworkMessages.WrongExceptionThrown, message, typeof(T).Name, ex.GetType().Name, ex.Message, ex.StackTrace)
            };

            throw new AssertFailedException(string.Format(CultureInfo.CurrentCulture, FrameworkMessages.AssertionFailed, objArray));
        }

        var objArray2 = new object[] {
            "AssertExtensions.ThrowsExceptionAsync",
            string.Format(CultureInfo.CurrentCulture, FrameworkMessages.NoExceptionThrown, message, typeof(T).Name)
        };

        throw new AssertFailedException(string.Format(CultureInfo.CurrentCulture, FrameworkMessages.AssertionFailed, objArray2));
    }
}
```

Just copy the above code to your test project and then use it like in this sample:

```csharp
[TestMethod]
public async Task MyTestMethod()
{
    await AssertExtensions.ThrowsExceptionAsync<ArgumentException>(async () =>
    {
        await Windows.Storage.StorageFolder.GetFolderFromPathAsync("");
    });
}
```
