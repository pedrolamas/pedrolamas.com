---
id: 1251
title: The AbandonedMutexException hoax!
date: 2013-06-14T17:28:27+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=1251
permalink: /2013/06/14/the-abandonedmutexexception-hoax/
dsq_thread_id:
  - '2048698355'
categories:
  - Windows Phone
tags:
  - AbandonedMutexException
  - Mutex
  - Windows Phone
  - WP8
  - WP8Dev
  - WPDev
---

When working with multi-process applications, there comes a time where you'll definitely need some sort of synchronization, and for that specific purpose we have the [**Mutex**](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.mutex(v=vs.105).aspx>) class.

MSDN states the following for the Mutex class:

> When two or more threads need to access a shared resource at the same time, the system needs a synchronization mechanism to ensure that only one thread at a time uses the resource. Mutex is a synchronization primitive that grants exclusive access to the shared resource to only one thread. If a thread acquires a mutex, the second thread that wants to acquire that mutex is suspended until the first thread releases the mutex.

Bottom line is that the mutex is a system wide `lock`, not just contained to the current process!

When it comes to usage, there is a major difference between them: the `lock` keyword is used to contain a thread-safe block of code, and when code is executed outside of that block, the locked object is released; the mutex on the other hand, doesn't use the same approach, and as such has to manually be released.

One situation that you can get into is when a thread terminates while owning a mutex, the mutex is said to be abandoned, and this is a really bad thing, normally indicating a serious programming error.

Unfortunately, due to the volatile nature of the Windows Phone background agents, abandoned mutexes will eventually happen without any thing a developer can actually do, but to catch and treat the [**AbandonedMutexException**](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.abandonedmutexexception(v=vs.105).aspx>) that will get raised on the other awaiting thread (if one exists)!

The following code sample simulates how to raise and handle the `AbandonedMutexException`:

```csharp
public static void MutextTest()
{
    var mutex = new Mutex(false, "MyMutex");

    new Thread(() =>
    {
        mutex.WaitOne();

        Thread.Sleep(1000);
    }).Start();

    Thread.Sleep(2000);

    try
    {
        mutex.WaitOne();
    }
    catch (AbandonedMutexException e)
    {
        Debug.WriteLine(e);
    }
    catch (Exception e)
    {
        Debug.WriteLine(e);
    }
}
```

When running the above in a Console application, this is the output we get from it:

> System.Threading.AbandonedMutexException: The wait completed due to an abandoned mutex.

For the same code in a Windows Phone 8 app, this will be the output:

> System.Exception: The wait completed due to an abandoned mutex.

The two platforms show an inconsistent result for the same behavior, as an `AbandonedMutexException` get thrown for the full .NET Framework, and a generic `Exception` for the WP8 one.

Seems that the only thing in common is actually the message!...

One interesting fact is that the `Mutex` documentation for WP8 does **not** mention the `AbandonedMutexException` class, though it does exist in the WP8 class library, but doesn't seem to be in use anywhere on the platform. This may be the result of having similar behavior as the WP7 platform, where we would actually get the same behaviour due to the lack of the more specific `AbandonedMutexException` class.
