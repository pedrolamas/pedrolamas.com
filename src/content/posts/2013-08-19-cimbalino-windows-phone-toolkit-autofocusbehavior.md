---
id: 2411
title: 'Cimbalino Windows Phone Toolkit: AutoFocusBehavior'
date: 2013-08-19T12:33:58+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=2411
permalink: /2013/08/19/cimbalino-windows-phone-toolkit-autofocusbehavior/
dsq_thread_id:
  - '2046954399'
image: /wp-content/uploads/2013/08/Keyboard-Tab-Key-300x270.png
categories:
  - Windows Phone
tags:
  - AutoFocusBehavior
  - Cimbalino
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

Most desktop applications use the Tab key to jump focus from one control to the next one, and this is expected behavior and common knowledge to most users.

On Android, the on-screen keyboard normally shows a "Next" key to - yes, you've guessed it! - go to the next field, and that is something really useful when filling long forms!

In truth, some native Windows Phone apps actually do this on some fields, where tapping the Enter key will have the same result, but unfortunately this is not the default behavior.

You could simulate this behavior using the [TextBox.KeyUp](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.textbox.onkeyup%28v=vs.105%29.aspx) or [TextBox.KeyDown](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.textbox.onkeydown%28v=vs.105%29.aspx) events, and then calling [Control.Focus()](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.control.focus(v=vs.105).aspx>) on the next control you want to get focus, but I guess we can all agree that this is quite some work and if you change the fields order, you'd have to change the code accordingly.

## The Cimbalino Windows Phone Toolkit way

Well, as of [Cimbalino Windows Phone Toolkit](http://cimbalino.org) version 3.1.0, all you need to do is add the [**AutoFocusBehavior**](<https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit%20(WP71)/Behaviors/AutoFocusBehavior.cs>) to your Page and... relax! :)

Yes, that's really all it takes, as the behavior contains the everything needed to manage TextBox/PasswordBox control focus changes on Enter key, with some added bonus:

- `TabIndex` property value from controls will be taken into account and the order will be respected
- Any control with `IsEnabled = false`, `Visibility = Collapsed`, or `TabStop = false` will be skipped
- Any `TextBox` control with `AcceptsEnter = true` will just use the default expected behavior (tapping Enter will just add a new line)
- The `AutoFocusBehavior.CycleNavigation` property controls whether focus will jump from last control to first one or just focus the full page
- The `AutoFocusBehavior.SelectAllOnFocus` property controls whether the entire contents of a control will be selected on focus

There is also an `AfterAutoFocus` event and `AfterAutoFocusCommand` so you can easily add some extra behavior of yours to the current one! :)
