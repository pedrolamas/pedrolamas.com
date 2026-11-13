---
id: 75
title: How to force a focused Textbox binding to update when I tap an app bar item
date: 2013-01-11T17:11:24+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=75
permalink: /2013/01/11/how-to-force-a-focused-textbox-binding-to-update-when-i-tap-an-app-bar-item/
dsq_thread_id:
  - '2045483827'
categories:
  - Windows Phone
tags:
  - ApplicationBar
  - Binding
  - MVVM
  - PasswordBox
  - TextBox
  - WP7
  - WP8
  - WPDev
---

If you have [TextBox](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.textbox(v=vs.105).aspx>) controls in your app and you're binding to the [Text](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.controls.textbox.text(v=vs.105).aspx>) property (two-way mode), you should by now have noticed that the binding source isn't updated when you tap an icon or menu item in the app bar!

The first thing you need to know in order to understand why this is happening, is that the TextBox control only updates the Text binding source when the control looses focus.

Second reason is that the [ApplicationBar](<http://msdn.microsoft.com/en-US/library/windowsphone/develop/microsoft.phone.shell.applicationbar(v=vs.105).aspx>) control can't get focus, nor can it's [ApplicationBarIconButton](<http://msdn.microsoft.com/en-US/library/windowsphone/develop/microsoft.phone.shell.applicationbariconbutton(v=vs.105).aspx>) or [ApplicationBarMenuItem](<http://msdn.microsoft.com/en-US/library/windowsphone/develop/microsoft.phone.shell.applicationbarmenuitem(v=vs.105).aspx>) controls, so when you tap on them, the click event will be invoked without the TextBox control ever loosing focus!

To fix this behavior we need to force an update on the binding source when the click event get's invoked, and here's some code on how to achieve this:

```csharp
var focusedElement = FocusManager.GetFocusedElement();
var focusedTextBox = focusedElement as TextBox;

if (focusedTextBox != null)
{
    var binding = focusedTextBox.GetBindingExpression(TextBox.TextProperty);

    if (binding != null)
    {
        binding.UpdateSource();
    }
}
```

We start by using [FocusManager.GetFocusedElement](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/cc190472(v=vs.105).aspx>) method to get the current focused element. Then we check if that is a TextBox control, and if so, force it to update the Text property binding source!

The same problem will happen with [PasswordBox](<http://msdn.microsoft.com/en-US/library/windowsphone/develop/system.windows.controls.passwordbox(v=vs.105).aspx>), so it's best just to handle both situations and encapsulate this in a reusable method:

```csharp
public static void FocusedTextBoxUpdateSource()
{
    var focusedElement = FocusManager.GetFocusedElement();
    var focusedTextBox = focusedElement as TextBox;

    if (focusedTextBox != null)
    {
        var binding = focusedTextBox.GetBindingExpression(TextBox.TextProperty);

        if (binding != null)
        {
            binding.UpdateSource();
        }
    }
    else
    {
        var focusedPasswordBox = focusedElement as PasswordBox;

        if (focusedPasswordBox != null)
        {
            var binding = focusedPasswordBox.GetBindingExpression(PasswordBox.PasswordProperty);

            if (binding != null)
            {
                binding.UpdateSource();
            }
        }
    }
}
```

All you now need is to call the `FocusedTextBoxUpdateSource` method in the start of the app bar item control click event handler so that it will update the binding source before the rest of the code runs!

You can find this problem fixed on some toolkits and frameworks, like [Caliburn.Micro](http://caliburnmicro.codeplex.com) and my own [Cimbalino Windows Phone Toolkit](http://cimbalino.org) [ApplicationBarBehavior](<https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit%20(WP71)/Behaviors/ApplicationBarItemBase.cs>).

Another way to fix this would be by updating the binding source on text changed rather than when it looses focus, and for that you can use the [TextBinding](http://coding4fun.codeplex.com/SourceControl/changeset/view/78171#1210643) helper from [Coding4Fun Toolkit for Windows Phone](http://coding4fun.codeplex.com/).
