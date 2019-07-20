---
id: 4292
title: Paying the tab for .NET Native
date: 2015-12-08T09:41:10+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4292
permalink: /2015/12/08/paying-the-tab-for-dotnet-native/
dsq_thread_id:
  - '4385658860'
image: /wp-content/uploads/2015/12/yoursign-459x510.jpg
categories:
  - Windows
tags:
  - .NET Native
  - UWP
  - Windows
  - Windows 10
---

> .NET Native behaves just like that expensive restaurant you love to got to: you have to wait until you finish the meal to see how much it will cost you - and it will definitely cost you!

Last weekend I was confronted with a bug in [Cimbalino Toolkit](http://cimbalino.org) [MultiBindingBehavior](<https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit%20(WP8)/Behaviors/MultiBindingBehavior.cs>), which caused apps using it to crash when they were built in Release mode!

I built a small test app and after a couple of minutes debugging it I noticed a [MissingMetadataException](<https://msdn.microsoft.com/en-us/library/dn600633(v=vs.110).aspx>) getting raised; the culprit was found: .NET Native!

> If you're working with Universal Windows Apps (UWP) and don't know what .NET Native is, I strongly advise you to start by reading the following excellent articles written by Morgan Brown, "a Software Development Engineer on the .NET Native team":
>
> - [.NET Native Deep Dive: Dynamic Features in Static Code](http://blogs.msdn.com/b/dotnet/archive/2014/05/20/net-native-deep-dive-dynamic-features-in-static-code.aspx)
> - [.NET Native Deep Dive: Help! I Hit a MissingMetadataException!](http://blogs.msdn.com/b/dotnet/archive/2014/05/21/net-native-deep-dive-help-i-hit-a-missingmetadataexception.aspx)
> - [.NET Native Deep Dive: Help! I Didn't Hit a MissingMetadataException!](http://blogs.msdn.com/b/dotnet/archive/2014/05/22/net-native-deep-dive-help-i-didn-t-hit-a-missingmetadataexception.aspx)
> - [.NET Native Deep Dive: Making Your Library Great](http://blogs.msdn.com/b/dotnet/archive/2014/05/23/net-native-deep-dive-making-your-library-great.aspx)
> - [.NET Native Deep Dive: Optimizing with Runtime Directives](http://blogs.msdn.com/b/dotnet/archive/2014/05/24/net-native-deep-dive-optimizing-with-runtime-directives.aspx)

Here's the situation right now: when you build a UWP app, the compiler will do some "smart stuff" with your code (let's skip the technicals here!), squeezing every little bit it can to make sure the compiled result will perform better and faster!

But there is a catch: if your code uses any type of dynamic coding features such as reflection or serialization, you might need to instruct the compiler that certain types in your application will be used as such, in order to avoid the exceptions like the `MissingMetadataException` you see above.

To avoid such problems, you can add specially built `rd.xml` files to your project - once again, check the articles above for more information on this subject!

The `MultiBindingBehavior` works by using the `AssociateObject` property value to reflect and dynamically create a binding expression, so what I needed was to ensure that it would be able to reflect any object passed to this property.

With this requirement in mind, I created a new `Cimbalino.Toolkit.rd.xml` file, set its Build Action to Embedded Resource, and set the content to the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Directives xmlns="http://schemas.microsoft.com/netfx/2013/01/metadata">
  <Library Name="Cimbalino.Toolkit">
    <Type Name="Cimbalino.Toolkit.Behaviors.MultiBindingBehavior">
      <Property Name="AssociatedObject" Serialize="Included" />
    </Type>
  </Library>
</Directives>
```

Aaand... this didn't work! I started getting a build error message stating that it couldn't find any `AssociatedObject` property in the `Cimbalino.Toolkit.Behaviors.MultiBindingBehavior`.

Granted, the property does not exist directly in this class, but rather in the `Behavior<T>` base class, so I guess one say that .NET Native compilation completely forgot a completely basic feature of .NET and most object oriented languages: [Class Inheritance](https://en.wikipedia.org/wiki/Object-oriented_programming#Composition.2C_inheritance.2C_and_delegation)!

Taking this into account, I made a couple of changes in the file and here's what in the end made it work:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Directives xmlns="http://schemas.microsoft.com/netfx/2013/01/metadata">
  <Library Name="Cimbalino.Toolkit" />
  <Library Name="Microsoft.Xaml.Interactions">
    <Type Name="Microsoft.Xaml.Interactivity.Behavior{T}">
      <Property Name="AssociatedObject" Serialize="Included" />
    </Type>
  </Library>
</Directives>
```

So here's what I learned in the past weekend:

- When working with Universal Windows Apps, **make sure to build the app in Release mode and test it thoroughly!**
- Keep an eye out on the build warnings for any problems with your `rd.xml` files.
- If you're working with MVVM or have Model representation classes, it might make sense to put these in a separate assembly, or at least in a separate namespace from the rest of the code - this will allow you to easily target these files in a `rd.xml` for .NET Native optimization exclusion.
