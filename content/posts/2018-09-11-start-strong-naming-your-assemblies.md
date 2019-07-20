---
layout: post
title: Start Strong-Naming your Assemblies!
date: 2018-09-11T16:25:01+01:00
image: /wp-content/uploads/2018/09/Keep-Calm-And-Strong-Name-Assemblies.png
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

## TL;DR

My opinion on this subject has evolved to the point I'm now recommending that you should strong-name your assemblies.

## Why the change of heart?

2 years ago, I wrote my thoughts about strong-naming assemblies in a post I called ["Still Strong-Naming your Assemblies? You do know it's 2016, right?"](/2016/03/01/still-strong-naming-your-assemblies-you-do-know-its-2016-right/).

Coming from all the development related pains in Silverlight and Windows Phone platforms, I knew how strong-named assemblies were a real problem, hence why I wrote that post and said that developers should stop strong-naming their assemblies.

With time, that post somehow became the "canonical answer" for questions in the line of "should I strong-name my assemblies?".

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This would make a good blog post title. There is a lot of confusion in the community on why or why not assemblies should have strong names in 2018! This is still very often cited as the canonical answer all over the place: <a href="https://t.co/RblHqL4h48">https://t.co/RblHqL4h48</a></p>&mdash; bit bonk (@bitbonk) <a href="https://twitter.com/bitbonk/status/1037077132810366976?ref_src=twsrc%5Etfw">September 4, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Coming to more recent times, I had the chance to revisit this topic while discussing what to do over a strong-naming related [issue](https://github.com/Microsoft/WindowsCommunityToolkit/issues/2198) on the [Windows Community Toolkit](https://github.com/Microsoft/WindowsCommunityToolkit).

After the discussion and a few quick checks to confirm the information passed, the consensus was to go ahead and strong-name the toolkit assemblies.

Since that moment, I must admit that I changed my mind and I'm now advocating that **you should strong-name your assemblies!**

## Silverlight and Windows Phone are dead

For much that hurts me to say this(!), Silverlight and Windows Phone are dead platforms and thus, the reasoning to not strong-name an assembly as they could become unusable in these platforms, is no longer valid.

## Modern frameworks can ignore strong-name information

While Windows 10 UWP and Xamarin completely ignore any strong-name information in the referenced assemblies, .NET Core has mechanisms to automatically redirect all references.

In fact, .NET Core enforces all their assemblies to be strong-named (they even have a [document](https://github.com/dotnet/corefx/blob/master/Documentation/project-docs/strong-name-signing.md) describing this requirement).

NuGet does help by automatically creating binding redirections when you add packages to your project!

## The GAC is still very well alive

Yes, against what I thought to be true, Windows 10 still has a GAC that supports side-by-side assemblies for the full .NET Framework!

The GAC requires strong-named assemblies, so there is still a real use case for those in modern days.

## Final thoughts

I'm taking a leap of faith that all currently supported frameworks and all future ones will provide mechanisms to ignore strong-name info in assemblies, or just allow to use redirections.

If that proves true, then yes: you should strong-name your assemblies as that will allow more people to use them.

To those still skeptical of strong-naming their assemblies, I propose a compromise solution: do strong-name your assemblies, but only increment the assembly version for major releases! [Json.NET](https://www.newtonsoft.com/json) has been using this approach to avoid binding redirects since 2014, and as far as I can tell, with relative success!

As a final note to open-source library developers, _I strongly recommend that the strong-name key file gets check-in to the project repository_ so that anyone can easily clone the project and compile a version of the library that works with anyone else's binaries!
