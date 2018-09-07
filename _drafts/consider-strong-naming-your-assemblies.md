---
layout: post
title: Consider Strong-Naming your Assemblies!
date: 2018-09-07T15:00:17+01:00
categories:
  - Windows
tags:
  - .NET Framework
  - Assembly
  - GAC
  - Global Assembly Cache
  - SNK
  - Strong-Name
  - UWP
  - Windows
  - Windows 10
  - Xamarin
  - .NET
  - .NET Core
---
2 years ago, I wrote my thoughts about strong-naming assemblies in a post I called ["Still Strong-Naming your Assemblies? You do know it's 2016, right?"](https://www.pedrolamas.com/2016/03/01/still-strong-naming-your-assemblies-you-do-know-its-2016-right/).

Coming from all the pains in developing for Silverlight and Windows Phone platforms, I knew how strong-named assemblies were a real problem, hence why I wrote that post and said that developers should stop strong-naming their assemblies.

With time, that post somehow became the "canonical answer" for questions in the line of "should I strong-name my assemblies?".

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This would make a good blog post title. There is a lot of confusion in the community on why or why not assemblies should have strong names in 2018! This is still very often cited as the canonical answer all over the place: <a href="https://t.co/RblHqL4h48">https://t.co/RblHqL4h48</a></p>&mdash; bit bonk (@bitbonk) <a href="https://twitter.com/bitbonk/status/1037077132810366976?ref_src=twsrc%5Etfw">September 4, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Well, I have to admit that today, I'm actually advocating for the oposite: **you should strong-name your assemblies!**

Before everyone throws the ax at me, please allow me to explain my thinking...

## Silverlight and Windows Phone are dead

For much that hurts me to say this(!), Silverlight and Windows Phone are dead platforms and thus, the reasoning to not strong-name an assembly as they could become unusable in these platforms, is no longer valid.

## Modern frameworks can ignore strong-name information

While Windows 10 UWP and Xamarin completely ignore any strong-name information in the referenced assemblies, .NET Core has mechanisms to automatically redirect all references.

NuGet will also ensure that binding redirections are automatically created when you add packages to your project!

## The GAC is still very well alive

Yes, against what I thought to be true, Windows 10 still has a GAC that supports side-by-side assemblies for the full .NET Framework!

The GAC requires strong-named assemblies, so there is still a real use case for those in modern days.

## Final thoughts

I'm taking a leap of faith that all currently supported frameworks and all future ones will provide mechanisms to ignore strong-name info in assemblies or just allow to redirections.

If that proves true, then yes: you should strong-name your assemblies as that will allow more people to use them.

As a final note to open-source library developers, I strongly recommend that the strong-name key file gets check-in to the project repository so that anyone can easily clone the project and compile a version of the library that works with anyone else's binaries!