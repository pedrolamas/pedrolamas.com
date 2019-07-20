---
id: 4011
title: Upgrading from the IsolatedStorageSettings to ApplicationData.LocalSettings
date: 2014-08-14T14:11:26+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4011
permalink: /2014/08/14/upgrading-from-the-isolatedstoragesettings-to-applicationdata-localsettings/
fb_fan_page_post_id:
  - 150703221746608_346592042157724
dsq_thread_id:
  - '2926409441'
categories:
  - Windows
  - Windows Phone
tags:
  - ApplicationData
  - Cimbalino
  - IsolatedStorageSettings
  - Windows
  - Windows 8
  - Windows Phone
  - Windows Phone 8
  - WPDev
---

When Windows Phone 7 came out, the SDK provided a really easy class to maintain the app settings: the [**IsolatedStorageSettings**](http://msdn.microsoft.com/en-us/library/windows/apps/system.io.isolatedstorage.isolatedstoragesettings%28v=vs.105%29.aspx).

Basically, the class is an `IDictionary<string, object>` with a `Save()` method that will take the instance and serialize it to a file called "\_\_ApplicationSettings" in the root of the app's isolated storage.

Now if you upgraded your app from Windows Phone Silverlight 8.0 to the Windows Runtime model, you'll probably want to migrate the settings from the old format to the new one, right?

Problem is that though the class exists in Windows Phone Silverlight apps, it does not in the new Windows Runtime apps, being replaced with [**ApplicationData.LocalSettings**](http://msdn.microsoft.com/library/windows/apps/windows.storage.applicationdata.localsettings.aspx) and [**ApplicationData.RoamingSettings**](http://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.applicationdata.roamingsettings.aspx) instead.

So the only solution will be doing it ourselves, by reading and deserializing the "old" settings file!

Here's a sample of the content of an "\_\_ApplicationSettings" file from one of my tests:

```text
PhoneApp1.Address, PhoneApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
<ArrayOfKeyValueOfstringanyType xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><KeyValueOfstringanyType><Key>Name</Key><Value xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:string">John Doe</Value></KeyValueOfstringanyType><KeyValueOfstringanyType><Key>Age</Key><Value xmlns:d3p1="http://www.w3.org/2001/XMLSchema" i:type="d3p1:int">20</Value></KeyValueOfstringanyType><KeyValueOfstringanyType><Key>Country</Key><Value xmlns:d3p1="http://schemas.datacontract.org/2004/07/PhoneApp1" i:type="d3p1:Address"><d3p1:Code>UK</d3p1:Code><d3p1:Name>United Kingdom</d3p1:Name></Value></KeyValueOfstringanyType></ArrayOfKeyValueOfstringanyType>
```

By looking at the contents of some samples of settings file like the one above, here's what we can learn:

- the file has always two lines (second line in the above sample is auto-wrapped to fit the post!)
- the first line has the known types full names that should be loaded and passed on to the [DataContractSerializer](http://msdn.microsoft.com/en-us/library/windows/apps/system.runtime.serialization.datacontractserializer%28v=vs.105%29.aspx) constructor, each properly separated by a null char
- if only basic types are used, the first line will be empty
- the second line is the serialized xml data

So I wrote the following code snippet to read and deserialize the values from "\_\_ApplicationSetting" to an `IEnumerable<KeyValuePair<string, object>>`:

```csharp
public async Task<IEnumerable<KeyValuePair<string, object>>> GetValuesAsync()
{
    try
    {
        using (var fileStream = await ApplicationData.Current.LocalFolder.OpenStreamForReadAsync("__ApplicationSettings"))
        {
            using (var streamReader = new StreamReader(fileStream))
            {
                var line = streamReader.ReadLine() ?? string.Empty;

                var knownTypes = line.Split('')
                    .Where(x => !string.IsNullOrEmpty(x))
                    .Select(Type.GetType)
                    .ToArray();

                fileStream.Position = line.Length + Environment.NewLine.Length;

                var serializer = new DataContractSerializer(typeof(Dictionary<string, object>), knownTypes);

                return (Dictionary<string, object>)serializer.ReadObject(fileStream);
            }
        }
    }
    catch
    {
        return new Dictionary<string, object>();
    }
}
```

So all you now have to do is call the `GetValuesAsync()` method above and load those values to one of the new Settings repositories!

## The Cimbalino Toolkit way

Starting in [Cimbalino Toolkit](http://cimbalino.org) 1.2.0, you'll be able to use the new [**IApplicationSettingsService**](https://github.com/Cimbalino/Cimbalino-Toolkit/blob/master/src/Cimbalino.Toolkit.Core%20%28Portable%29/Services/IApplicationSettingsService.cs) to access `Local`, `Roaming`, and `Legacy` app settings.

In case that wasn't clear from the names, the `Legacy` settings will allow you to get the values on the "\_\_ApplicationSettings" file (do note that only the Values property is implemented, so it's read-only).

Here are the platform rules for the `ISettingsService`:

- **Local**
  - Supported in all platforms
- **Roaming**
  - Supported in all platforms except Windows Phone Silverlight 8.0
- **Legacy**
  - Only supported in Windows Phone

One last suggestion: after migrating the legacy settings remember to delete the "\_\_ApplicationSettings" file as it won't be needed again! ;)
