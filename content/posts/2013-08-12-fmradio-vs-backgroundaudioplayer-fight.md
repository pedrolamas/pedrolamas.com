---
id: 2241
title: 'FMRadio vs. BackgroundAudioPlayer... fight!!'
date: 2013-08-12T10:00:47+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=2241
permalink: /2013/08/12/fmradio-vs-backgroundaudioplayer-fight/
dsq_thread_id:
  - '2056177511'
image: /wp-content/uploads/2013/08/Windows-Phone-8-FM-Radio-604x270.png
categories:
  - Windows Phone
tags:
  - BackgroundAudioPlayer
  - FMRadio
  - GDR2
  - Windows Phone
  - Windows Phone 8
  - WP8
  - WP8Dev
  - WPDev
---

## "The cat is out of the bag"...

...as [Microsoft has confirmed](http://www.windowsphone.com/en-gb/how-to/wp8/basics/windows-phone-8-update-history) that **FM Radio is making a return in the next update to Windows Phone 8** (commonly known as GDR2)!

Obviously, updating your phone to GDR2 may not suffice, as the phone itself must have FM Radio tuning capability from factory!

Back when Windows Phone 7.x was king we could use the [FMRadio](http://msdn.microsoft.com/en-US/library/windowsphone/develop/microsoft.devices.radio.fmradio%28v=vs.105%29.aspx) class to control the device FM Radio, but given that no support for it was added to Windows Phone 8, accessing it in a WP8 device would just throw an exception... but that was _before_ GDR2!

[Mark Monster](http://mark.mymonster.nl), Silverlight MVP, has written a really good [article](http://mark.mymonster.nl/2013/08/09/fmradio-will-be-back-in-windows-phone-8-gdr2-use-it-with-care) on how to safely use the `FMRadio` class across all versions of Windows Phone.

## So what's the problem?

Here's the whole problem and how you can check it, step by step:

- **Preconditions**
  - Use a real phone with Windows Phone updated to GDR2
  - Plug in your headphones to the phone (the phone uses them as an FM Radio antenna)
- **Steps to reproduce**
  - Open Music+Videos hub
  - Tap the "radio" item to start the FM Radio tuner
  - Tune in a radio station and check that you can hear audio on the headphones
  - Open any app that uses the `BackgroundAudioPlayer` and start playback
- **Actual Results**
  - You hear the FM Radio audio and the audio from the app... at the same time!!
- **Expected Results**
  - FM Radio should stop and you should now be hearing the audio from the app

Basically, there seems to be some sort of issue where the FM Radio does not stop once the `BackgroundAudioPlayer` starts!

You can however easily bypass this issue: just ensure you stop the FM Radio playback **before** starting the `BackgroundAudioPlayer` or any other playback for that matter!

To make things easier, you can use the following code snippet:

```csharp
using Microsoft.Devices.Radio;

public class FMRadioSafe
{
    private static bool? _isAvailable;

    public static bool IsAvailable
    {
        get
        {
            if (!_isAvailable.HasValue)
            {
                try
                {
                    _isAvailable = FMRadio.Instance != null;
                }
                catch
                {
                    _isAvailable = false;
                }
            }

            return _isAvailable.Value;
        }
    }

    public static void Stop()
    {
        if (IsAvailable)
        {
            FMRadio.Instance.PowerMode = RadioPowerMode.Off;
        }
    }
}
```

Just copy and past this to your app and call `FMRadioSafe.Stop()` before any audio output instruction and you're done! :)

**Update 20/08/2013:** You can now use the [**FMRadioService**](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit.MediaLibrary%20%28WP71%29/Services/FMRadioService.cs) from [Cimbalino Windows Phone Toolkit](http://cimbalino.org) version 3.0.0!
