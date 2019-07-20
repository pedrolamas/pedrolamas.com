---
id: 132
title: 'Error: Nuget.exe exited with code -1073741819'
date: 2013-02-04T20:06:21+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=132
permalink: /2013/02/04/error-nuget-exe-exited-with-code-1073741819/
dsq_thread_id:
  - '2046765333'
categories:
  - Uncategorized
tags:
  - '-1073741819'
  - MSBuild
  - Nuget
---

Lately I've been getting more and more this type of error from [Nuget](http://nuget.org) Package Restore when building my apps:

[![NuGet -1073741819 error](/wp-content/uploads/2013/02/NuGet-1073741819-error.png)](/wp-content/uploads/2013/02/NuGet-1073741819-error.png)

This seems to be a completely random issue with Nuget, as I see it happening with different projects, and sometimes not even happening at all!

Problem is that I work with some big/complex solutions that have a lot of projects, each one with it's own `packages.config` file that can show this issue, so that sums up to **a lot of failed builds!**

There are actually a [few](http://nuget.codeplex.com/workitem/2593) [open](http://nuget.codeplex.com/workitem/2064) tickets about this in [Codeplex](http://nuget.codeplex.com/), but given that this issue has been reported a while ago and so far it has not been solved, I thought on tackle this myself!

## "If at first you don't succeed, try and try again"

Following that motto, I thought on changing the Nuget Package Restore process so that it will retry a few times before aborting the build!

The easiest way I found to achieve this goal is just to change the `.nuget\NuGet.targets` file on the root of the solution. Inside this file, I found the following:

```xml
<Target Name="RestorePackages" DependsOnTargets="CheckPrerequisites">
    <Exec Command="$(RestoreCommand)"
          Condition="'$(OS)' != 'Windows_NT' And Exists('$(PackagesConfig)')" />

    <Exec Command="$(RestoreCommand)"
          LogStandardErrorAsError="true"
          Condition="'$(OS)' == 'Windows_NT' And Exists('$(PackagesConfig)')" />
</Target>
```

Above you can see the MSBuild target that actually runs `Nuget.exe`, and so this is the one I will change to "fix" the issue.

This is my improved `RestorePackages` target:

```xml
<Target Name="RestorePackages" DependsOnTargets="CheckPrerequisites" Condition="Exists('$(PackagesConfig)')">
    <PropertyGroup>
        <NugetLogStandardErrorAsError Condition="'$(OS)' == 'Windows_NT'">true</NugetLogStandardErrorAsError>
        <NugetLogStandardErrorAsError Condition="'$(OS)' != 'Windows_NT'">false</NugetLogStandardErrorAsError>
    </PropertyGroup>

    <Exec Command="$(RestoreCommand)" LogStandardErrorAsError="$(NugetLogStandardErrorAsError)" IgnoreExitCode="True">
        <Output TaskParameter="ExitCode" PropertyName="ExitCode" />
    </Exec>

    <Message Text="Error occurred, #1 retry..." Importance="High" Condition=" $(ExitCode) != 0 " />

    <Exec Command="$(RestoreCommand)" LogStandardErrorAsError="$(NugetLogStandardErrorAsError)" IgnoreExitCode="True" Condition=" $(ExitCode) != 0 ">
        <Output TaskParameter="ExitCode" PropertyName="ExitCode" />
    </Exec>

    <Message Text="Error occurred, #2 and last retry..." Importance="High" Condition=" $(ExitCode) != 0 " />

    <Exec Command="$(RestoreCommand)" LogStandardErrorAsError="$(NugetLogStandardErrorAsError)" Condition=" $(ExitCode) != 0 " />
</Target>
```

You can see three consecutive `Exec` tasks here, each one will run depending on the previous one exit code, and only the last one will actually abort the build.

What this means is that if Nuget fails, we will retry it two more times before aborting the build!

As you can see, this is not a proper fix for the issue, it just bypasses it... so I'm still waiting for a fix on this - and I'm now looking at you, Nuget dev team! ;)
