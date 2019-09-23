---
id: 239
title: Windows Phone 8 Unit Testing in the UI thread with VS 2012.2 CTP4
date: 2013-03-25T12:37:34+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=239
permalink: /2013/03/25/windows-phone-8-unit-testing-in-the-ui-thread-with-vs-2012-2-ctp4/
dsq_thread_id:
  - '2053865941'
categories:
  - Windows Phone
tags:
  - CTP4
  - Unit Testing
  - Visual Studio
  - VS2012
  - VS2012.2
  - Windows Phone
  - WP8
  - WP8Dev
  - WPDev
---

If you've been following [the news](http://blogs.msdn.com/b/visualstudioalm/archive/2013/01/31/windows-phone-unit-tests-in-visual-studio-2012-update-2.aspx) on the upcoming **Visual Studio 2012 Update 2** (currently in [CTP4](http://go.microsoft.com/fwlink/?LinkId=273878)), you know that we now have a fully working Unit Tests framework for Windows Phone projects!

Well, this seemed like the perfect opportunity to finally create some unit tests for the [Cimbalino Windows Phone Toolkit](http://cimbalino.org) and test this new test framework, all at once!

![Works on my machine](/wp-content/uploads/2013/02/Works-on-my-machine.png)

Given that this post will require installing the VS2012.2 CTP 4, a non-final preview version software that has a "go-live" license, I think it's only proper to apply the WOMM certification to it.

So bottom line, install it at your own risk!

So I started by installing the update, launch Visual Studio 2012, and create a new Windows Phone Unit Test App.

Then, I used NuGet to add a reference to the [Cimbalino Windows Phone Toolkit](http://nuget.org/packages/Cimbalino.Phone.Toolkit) and then added the following test class:

```csharp
namespace Cimbalino.Phone.Toolkit.Tests.Converters
{
    [TestClass]
    public class ColorToBrushConverterTests
    {
        [TestMethod]
        public void ConvertWithColorReturnsBrush()
        {
            var converter = new ColorToBrushConverter();

            var expected = Colors.Blue;

            var actual = converter.Convert(Colors.Blue, typeof(string), null, CultureInfo.CurrentCulture);

            Assert.IsInstanceOfType(actual, typeof(SolidColorBrush));
            Assert.AreEqual(((SolidColorBrush)actual).Color, expected);
        }
    }
}
```

This simple class will test the `ColorToBrushConverter.Convert` method as to check for the proper creation of a [SolicColorBrush](http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.windows.media.solidcolorbrush%28v=vs.105%29.aspx) out of a specific [Color](http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.windows.media.color%28v=vs.105%29.aspx).

When I ran the test, this is what happened:

[![Windows Phone Unit Test results](/wp-content/uploads/2013/03/Windows-Phone-Unit-Test-results.png 'Windows Phone Unit Test results')](/wp-content/uploads/2013/03/Windows-Phone-Unit-Test-results.png)

As you can see here, we got an "Invalid cross-thread access" error message; this is the result of all tests running on a special "test app" inside the Emulator, but the really bad news is that they all run in a background thread.

Apparently, if this was a Windows Store app we could just change the `[TestMethod]` attribute with the proper `[UITestMethod]` one as to mark the requirement of running the test in the UI Thread, but unfortunately, the attribute is currently missing from the Windows Phone test framework!

So I decided to fix that and create my very own `UITestMethodAttribute`, and here it is:

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class UITestMethodAttribute : TestMethodAttribute
{
    public override TestResult[] Execute(ITestMethod testMethod)
    {
        TestResult[] result = null;

        var ar = new AutoResetEvent(false);

        Deployment.Current.Dispatcher.BeginInvoke(() =>
        {
            try
            {
                result = base.Execute(testMethod);
            }
            finally
            {
                ar.Set();
            }
        });

        ar.WaitOne();

        return result;
    }
}
```

If you don't like using the [AutoResetEvent](http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.threading.autoresetevent%28v=vs.105%29.aspx), then you can use this alternative version with the new [Tasks](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.tasks%28v=vs.105%29.aspx):

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class UITestMethodAttribute : TestMethodAttribute
{
    public override TestResult[] Execute(ITestMethod testMethod)
    {
        var task = ExecuteOnUi(testMethod);

        task.Wait();

        return task.Result;
    }

    private Task<TestResult[]> ExecuteOnUi(ITestMethod testMethod)
    {
        var tsc = new TaskCompletionSource<TestResult[]>();

        Deployment.Current.Dispatcher.BeginInvoke(() =>
        {
            tsc.SetResult(base.Execute(testMethod));
        });

        return tsc.Task;
    }
}
```

For a usage sample, please refer to the [Cimbalino.Phone.Toolkit.Tests](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/tree/master/src/Cimbalino.Phone.Toolkit.Tests%20%28WP8%29) project!

Other approaches to solve this issue can be found in [this post](http://dotnetbyexample.blogspot.nl/2013/03/unit-testing-async-windows-phone-8-code.html) by [Joost van Schaik](http://dotnetbyexample.blogspot.nl/) or [this gist](https://gist.github.com/JakeGinnivan/5219390) from [Jake Ginnivan](http://jake.ginnivan.net/), both relying on just running the necessary code in the UI instead of the full test method as with the above approach.
