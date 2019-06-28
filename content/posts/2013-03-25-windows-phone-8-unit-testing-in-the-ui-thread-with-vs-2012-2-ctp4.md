---
id: 239
title: Windows Phone 8 Unit Testing in the UI thread with VS 2012.2 CTP4
date: 2013-03-25T12:37:34+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=239
permalink: /2013/03/25/windows-phone-8-unit-testing-in-the-ui-thread-with-vs-2012-2-ctp4/
dsq_thread_id:
  - "2053865941"
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
If you've been following <a href="http://blogs.msdn.com/b/visualstudioalm/archive/2013/01/31/windows-phone-unit-tests-in-visual-studio-2012-update-2.aspx">the news</a> on the upcoming <strong>Visual Studio 2012 Update 2</strong> (currently in <a href="http://go.microsoft.com/fwlink/?LinkId=273878">CTP4</a>), you know that we now have a fully working Unit Tests framework for Windows Phone projects!

Well, this seemed like the perfect opportunity to finally create some unit tests for the <a href="http://cimbalino.org">Cimbalino Windows Phone Toolkit</a> and test this new test framework, all at once!

<img class="alignright size-full wp-image-174 clear" src="https://www.pedrolamas.com/wp-content/uploads/2013/02/Works-on-my-machine.png" alt="Works on my machine" width="200" height="193" />Given that this post will require installing the VS2012.2 CTP 4, a non-final preview version software that has a "go-live" license, I think it's only proper to apply the WOMM certification to it.

So bottom line, install it at your own risk!

So I started by installing the update, launch Visual Studio 2012, and create a new Windows Phone Unit Test App.

Then, I used NuGet to add a reference to the <a href="http://nuget.org/packages/Cimbalino.Phone.Toolkit">Cimbalino Windows Phone Toolkit</a> and then added the following test class:

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

This simple class will test the <code>ColorToBrushConverter.Convert</code> method as to check for the proper creation of a <a href="http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.windows.media.solidcolorbrush%28v=vs.105%29.aspx">SolicColorBrush</a> out of a specific <a href="http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.windows.media.color%28v=vs.105%29.aspx">Color</a>.

When I ran the test, this is what happened:

<a href="https://www.pedrolamas.com/wp-content/uploads/2013/03/Windows-Phone-Unit-Test-results.png"><img class="alignnone size-full wp-image-242" src="https://www.pedrolamas.com/wp-content/uploads/2013/03/Windows-Phone-Unit-Test-results.png" alt="Windows Phone Unit Test results" width="691" height="437" /></a>

As you can see here, we got an "Invalid cross-thread access" error message; this is the result of all tests running on a special "test app" inside the Emulator, but the really bad news is that they all run in a background thread.

Apparently, if this was a Windows Store app we could just change the <code>[TestMethod]</code> attribute with the proper <code>[UITestMethod]</code> one as to mark the requirement of running the test in the UI Thread, but unfortunately, the attribute is currently missing from the Windows Phone test framework!

So I decided to fix that and create my very own <code>UITestMethodAttribute</code>, and here it is:

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

If you don't like using the <a href="http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.threading.autoresetevent%28v=vs.105%29.aspx">AutoResetEvent</a>, then you can use this alternative version with the new <a href="http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.threading.tasks%28v=vs.105%29.aspx">Tasks</a>:

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

For a usage sample, please refer to the <a href="https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/tree/master/src/Cimbalino.Phone.Toolkit.Tests%20%28WP8%29">Cimbalino.Phone.Toolkit.Tests</a> project!

Other approaches to solve this issue can be found in <a href="http://dotnetbyexample.blogspot.nl/2013/03/unit-testing-async-windows-phone-8-code.html">this post</a> by <a href="http://dotnetbyexample.blogspot.nl/">Joost van Schaik</a> or <a href="https://gist.github.com/JakeGinnivan/5219390">this gist</a> from <a href="http://jake.ginnivan.net/">Jake Ginnivan</a>, both relying on just running the necessary code in the UI instead of the full test method as with the above approach.
