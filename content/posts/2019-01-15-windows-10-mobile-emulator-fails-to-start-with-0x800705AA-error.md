---
layout: post
title: Windows 10 Mobile Emulator fails to start with 0x800705AA error
date: 2019-01-15T16:55:05+00:00
last_modified_at: 2019-03-31T17:29:18+01:00
categories:
  - Windows
tags:
  - Emulator
  - Hyper-V
  - UWP
  - Windows
  - Windows 10
  - Windows Phone
  - WPDev
---

I recently moved to a new machine and while attempting to debug a UWP app in the Windows 10 Mobile emulator, I came across the following error message:

![0x800705AA error message](/wp-content/uploads/2019/01/0x800705AA-error-message.png '0x800705AA error message')

I couldn't find any information on this 0x800705AA error, but I eventually tracked this to be caused by the fact Hyper-V was using the machine GPU with RemoteFX!

The easiest way to fix this I found was to just disable RemoteFX; to do so, follow these steps:

- open Hyper-V Manager (just press <kbd>Win+R</kbd>, type `virtmgmt.msc` and hit Enter)
- on the left pane, right-click the machine name and then click "Hyper-V Settings"
- on the tree, select "Physical GPUs"
- untick "Use this GPU with RemoteFX" and click OK

![Hyper-V Settings updated](/wp-content/uploads/2019/01/Hyper-V-Settings-updated.png 'Hyper-V Settings updated')

After disabling RemoveFX, remove any Windows 10 Mobile emulator from the "Virtual Machines" list (Visual Studio will re-create these) and just deploy from Visual Studio again and you should now be able to launch the emulator!
