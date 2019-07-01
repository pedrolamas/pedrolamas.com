---
title: Creating custom build configurations for the .NET Core project format
date: 2017-04-24T14:58:05+01:00
last_modified_at: 2019-02-12T14:29:00+00:00
layout: post
categories:
  - Windows
tags:
  - MSBuild
  - Build Configurations
  - .NET
  - .NET Core
---

MSBuild based projects have two default build configurations: Debug and Release.

While these two configurations are enough for most projects, some might actually require custom build configurations that will support different environments, alternative build targets, etc..

Until now we could use Visual Studio Configuration Manager to easily create a copy an existing configuration setup, and then change small bits to match our specifications.

But now there's a [new csproj format for .NET Core](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/csproj?wt.mc_id=MVP), and while it includes the expected Debug and Release build configurations, the "copy configuration" process doesn't work anymore!

The problem is that the new project format is based in quite a few implicit defaults, so Visual Studio Configuration Manager can't actually create a copy of the existing build configurations with all the properties set.

## Introducing the MSBuild Configuration Defaults

As I couldn't find a way to "inherit" from the base Debug and Release build configurations, I tried to understand what properties were actually required on each of them, and then create some build scripts that would set them for me!

Those MSBuild scripts are available [here](https://github.com/PedroLamas/MSBuildConfigurationDefaults) and can easily be installed by running `Install-Package MSBuildConfigurationDefaults` on the Package Manager Console, or added with the Visual Studio NuGet Packages Manager.

After adding the NuGet package, I recommend closing and re-opening the solution to ensure that the build scripts are correctly loaded.

## Usage

Once installed, any custom build configuration name starting or ending on "Debug" will have the following build properties set by default:

```xml
<DefineConstants>$(DefineConstants);DEBUG;TRACE</DefineConstants>
<DebugSymbols>true</DebugSymbols>
<DebugType>full</DebugType>
<Optimize>false</Optimize>
```

Similarly, any custom build configuration name starting or ending on "Release" will have the following build properties set by default:

```xml
<DefineConstants>$(DefineConstants);RELEASE;TRACE</DefineConstants>
<DebugSymbols>false</DebugSymbols>
<DebugType>portable</DebugType>
<Optimize>true</Optimize>
```

If any of these properties are set on the project, those values will have override the defaults above.

If you don't want to name your custom build definition according to the rules above, just add a `ConfigurationGroup` property and set the value to `Debug` or `Release` to ensure those build definitions get the appropriate default properties set.

The following is an example of a custom build configuration called "Production", that has the `ConfigurationGroup` set to "Release" (so it gets the default property values set as for the a "Release" build configuration), but also overrides the `DebugSymbols` property default value:

```xml
<PropertyGroup Condition="'$(Configuration)' == 'Production'">
  <ConfigurationGroup>Release</ConfigurationGroup>
  <DebugSymbols>true</DebugSymbols>
</PropertyGroup>
```
