---
id: 4455
title: "Still Strong-Naming your Assemblies? You do know it's 2016, right?"
date: 2016-03-01T15:56:14+00:00
last_modified_at: 2018-09-17T23:53:14+01:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4455
permalink: /2016/03/01/still-strong-naming-your-assemblies-you-do-know-its-2016-right/
dsq_thread_id:
  - '4624998501'
image: /wp-content/uploads/2016/03/We-Want-You-To-Stop-Strong-Naming-Assemblies.png
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
---

**Update:** Though the information and concerns in this blog post are still very true, I've actually had a change of heart and I'm now advocating to [Start Strong-Naming your Assemblies!](/2018/09/11/start-strong-naming-your-assemblies/)!

---

For far to long, Strong-Named Assemblies have been a huge rock in the shoe of 3rd party library developers, but people: it's 2016, so why are you still using it?

## How it all started...

The year was 2002 (or so I believe!), Microsoft had just released the .NET Framework, and one of the main enterprise focused features was the ability to sign an assembly with a strong-name.

Back then, Strong-Named Assemblies had some great advantages, as indicated in [this](<https://msdn.microsoft.com/en-us/library/wd40t7ad(v=vs.110).aspx>) MSDN article:

> - You want to enable your assemblies to be referenced by strong-named assemblies, or you want to give friend access to your assemblies from other strong-named assemblies.
> - An app needs access to different versions of the same assembly. This means you need different versions of an assembly to load side by side in the same app domain without conflict. For example, if different extensions of an API exist in assemblies that have the same simple name, strong-naming provides a unique identity for each version of the assembly.
> - You do not want to negatively affect performance of apps using your assembly, so you want the assembly to be domain neutral. This requires strong-naming because a domain-neutral assembly must be installed in the global assembly cache.
> - When you want to centralize servicing for your app by applying publisher policy, which means the assembly must be installed in the global assembly cache.

So strong-named assemblies are uniquely identified, which is a good thing, until it starts to work against you...

Let's look at a real example: a few years back, [JSON.net](http://json.net/) was actually a strongly-signed assembly. Now let's assume we have a project that depends on "LibraryA" and "LibraryB", and each of these require a different version of JSON.net.

[![Before Assembly Binding Redirection](/wp-content/uploads/2016/03/Before-Assembly-Binding-Redirection-thumb.png 'Before Assembly Binding Redirection')](/wp-content/uploads/2016/03/Before-Assembly-Binding-Redirection.png)

If you build the project as it currently is, there will be a conflict as you can only have a single version of JSON.net on the output folder, but the libraries require different versions...

To fix this issue, .NET provided a mechanism called [Assembly Binding Redirection](<https://msdn.microsoft.com/en-us/library/7wd6ex19(v=vs.110).aspx>) to ensure that only one specific assembly would be used, regardless of the required version.

[![After Assembly Binding Redirection](/wp-content/uploads/2016/03/After-Assembly-Binding-Redirection-thumb.png 'After Assembly Binding Redirection')](/wp-content/uploads/2016/03/After-Assembly-Binding-Redirection.png)

## In comes Silverlight and Windows Phone

Unfortunately, neither Silverlight nor Windows Phone support Assembly Binding Redirection... and that is where the true problems started.

There are [quite](https://github.com/octokit/octokit.net/issues/405) [a](https://github.com/libgit2/libgit2sharp/issues/212) [few](http://jeremydmiller.com/2014/04/28/fubumvc-lessons-learned-strong-naming-woes-and-workarounds/) threads around this issue over the internet, and in the end, a lot of 3rd party library developers just [decided to stop strong-naming their assemblies!](http://james.newtonking.com/archive/2012/02/11/json-net-4-0-release-8-bug-fixes)

Others, followed the advice of the MSDN article I pointed above:

> If you are an open-source developer and you want the identity benefits of a strong-named assembly, consider checking in the private key associated with an assembly into your source control system.

Obviously, for this to work you would have to build your own versions of your project dependencies... and let's be honest here: that will eventually be more of a problem that a solution.

A few years ago, I personally felt this pain while developing a Windows Phone app, and so I went to the [Windows Phone Developers UserVoice website](https://wpdev.uservoice.com) and [requested](https://wpdev.uservoice.com/forums/110705-universal-windows-platform/suggestions/2511980-assembly-binding-redirection-support) the support for Assembly Binding Redirection on Windows Phone... almost a year after the request, I got an update indicating it was "on the backlog", and seems it has stayed like that till now...

## If it is such a bad thing, why are people still doing it?

Developers seem to have the wrong notion that they should strong-name their assemblies as a security feature, but this could not be further away from the truth!

Granted, that does provide a basic insurance that an assembly hasn't been tampered/altered, but in any case one can always use binding redirection (when available) to bypass the whole thing, so that is just a lame excuse to not buy a proper Code Signing Certificate and apply Authenticode to the assembly (which will prevent tampering AND impersonation, the right way!).

## What about the Universal Windows Platform?

Unfortunately, as far as I know there is no support for Assembly Binding Redirection in UWP...

A couple of weeks ago, Microsoft open-sourced the [XAML Behaviors](https://github.com/Microsoft/XamlBehaviors) and guess what? Yes you guessed correctly: [they strongly-signed it!](https://github.com/Microsoft/XamlBehaviors/pull/29)

Fortunately, after a long debate on that same thread, they realized that it made no sense to do that, and [removed the strong-name signing on the latest version!](/2016/02/23/xaml-behaviors-uwp-managed-1-1-0/)

## Bottom line

With this article I tried to make the point that Strong-Named Assemblies are just legacy of the "old" .NET Framework days, and have no place in the modern Universal Windows Platform.

Hopefully, 3rd party developers will continuously provide non-strongly-named assemblies which will make a lot of developers happy.
