---
id: 154
title: 'Reduce the size of your XAP/APPX package: time to take out the trash!'
date: 2013-02-15T15:55:49+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=154
permalink: /2013/02/15/reduce-the-size-of-your-xapappx-package-time-to-take-out-the-trash/
dsq_thread_id:
  - '2046727518'
categories:
  - Windows
  - Windows Phone
tags:
  - Appx
  - MSBuild
  - Win8Dev
  - Windows 8
  - Windows Phone
  - WPDev
  - XAP
---

**Updated on 20/02/2013**

Before you even continue reading this article, I must just address a small warning: the following information has passed the WOMM certification, and as such, this works on my machine...

![Works on my machine](/wp-content/uploads/2013/02/Works-on-my-machine.png)

Recently, while browsing [StackOverflow](http://stackoverflow.com/) as I normally do, I found a [question](http://stackoverflow.com/questions/14849374/visual-studio-packs-into-wp8-xap-unnecessary-xml-doc-files) that really caught my attention:

> **Visual Studio packs into WP8 XAP unnecessary XML doc files**
>
> If you create Windows Phone 8 App in Visual Studio and reference any libs with XML documentation files supplied from nuget or manually, Visual Studio will automatically pack those XML files into output XAP as well.
>
> In our case this weird behavior of Visual Studio increases XAP size almost twice. (We have 8Mb of xml docs in total.)
>
> There is no such problem for WP7 app projects.

After reading this, I had to confirm this behavior myself! Here's what I did:

- Created a blank solution
- Added two Windows Phone projects, one with the 7.1 SDK and the other with the 8.0.
- Used NuGet to add [Json.net](http://nuget.org/packages/Newtonsoft.Json/) package to both projects
- Build the solution

These are the XAP files resulting from building each project:

![Windows Phone XAP files from both projects](/wp-content/uploads/2013/02/Windows-Phone-XAP-files-from-both-projects.png)

As you can see here, the WP8 version is about 60Kb larger than the WP7 version. **That's 42% larger!!!**

Here is the content of the WP7 XAP file:

![Windows Phone 7 XAP contents](/wp-content/uploads/2013/02/Windows-Phone-7-XAP-contents.png)

And this is the content of the WP8 XAP file:

![Windows Phone 8 XAP contents](/wp-content/uploads/2013/02/Windows-Phone-8-XAP-contents.png)

If you look closely on the WP8 version above, you'll see a `Newtonsoft.Json.xml` file - that's the Json.net Xml Documentation!

What is it doing there? Nothing. Can we safely remove it? Most definitely, yes!

My research on why this only happens in Windows Phone 8 lead to the MSBuild process, specifically the `ResolveAssemblyReferences` task on `Microsoft.Common.targets` file: this particular task returns a variable called `ReferenceCopyLocalPaths`, referring to "Paths to files that should be copied to the local directory." which upon inspection, proved to have our "garbage files"!

To fix this, edit the \*.csproj files for your projects that have package outputs (XAP or APPX), and add this to the end of the file, just before the `</Project>` closing tag:

```xml
<PropertyGroup>
  <FilesToXapDependsOn>$(FilesToXapDependsOn);BeforeFilesToXap</FilesToXapDependsOn>
</PropertyGroup>
<Target Name="BeforeFilesToXap">
  <ItemGroup>
    <FilteredPackagingOutputs Remove="@(FilteredPackagingOutputs)" Condition="'%(FilteredPackagingOutputs.OutputGroup)' == 'CopyLocalFilesOutputGroup' AND '%(FilteredPackagingOutputs.Extension)' == '.xml'"/>
  </ItemGroup>
</Target>
```

This custom target will run just before the `FilesToXap` target, telling MSBuild to remove all XML Documentation files from the list of files to copy.

So far this has proven to work perfectly for my applications, and when I applied it to my WP8 test project, I managed to get a much more reasonable 174KB XAP file!

One final note: although this article focus on Windows Phone, I actually found out that **Windows Store Apps are also affected by this issue**, and that the same solution can be used to fix the problem!
