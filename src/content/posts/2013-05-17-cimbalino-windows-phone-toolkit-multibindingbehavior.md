---
id: 951
title: 'Cimbalino Windows Phone Toolkit: MultiBindingBehavior'
date: 2013-05-17T15:29:59+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=951
permalink: /2013/05/17/cimbalino-windows-phone-toolkit-multibindingbehavior/
dsq_thread_id:
  - '2046358152'
image: /wp-content/uploads/2013/03/Cimbalino-Windows-Phone-Toolkit-300x270.png
categories:
  - Windows Phone
tags:
  - Cimbalino
  - MultiBindingBehavior
  - Windows Phone
  - WP7
  - WP8
  - WP8Dev
  - WPDev
---

One of the features I most enjoy in WPF is the [MultiBinding](http://msdn.microsoft.com/en-us/library/system.windows.data.multibinding.aspx) class, which allows you to take several source properties, pass their values to an [IMultiValueConverter](http://msdn.microsoft.com/en-us/library/system.windows.data.imultivalueconverter.aspx) implementation, and bind the result to a single target property!

By now you're probably thinking "why do I need that?", but in certain specific scenarios, having the possibility to take several values and produce a single result directly in the UI can be quite useful!

Take this sample from MSDN:

```xml
<TextBlock DataContext="{StaticResource NameListData}">
  <TextBlock.Text>
    <MultiBinding Converter="{StaticResource myNameConverter}"
                  ConverterParameter="FormatLastFirst">
      <Binding Path="FirstName"/>
      <Binding Path="LastName"/>
    </MultiBinding>
  </TextBlock.Text>
</TextBlock>
```

We can easily infer that the objective here is to set the `TextBlock.Text` property to the result of "LastName, FirstName", given the two properties from the specified `TextBlock.DataContext` and a custom `IMultiValueConverter` instance called myNameConverter.

While useful, the `MultiBinding` is not available for Windows Phone developers - queue the whining...

I've seen a few alternative implementations around the internet, but none seems easy (and light!) enough to me, so I just decided to make my own!

On the latest release of [Cimbalino Windows Phone Toolkit](http://cimbalino.org/) I added the [MultiBindingBehavior](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit%20%28WP71%29/Behaviors/MultiBindingBehavior.cs), a quick and easy approach to solve the missing `MultiBinding` support in Windows Phone!

Here's an example using the same scenario from above:

```xml
<TextBlock DataContext="{StaticResource NameListData}">
    <i:Interaction.Behaviors>
        <cimbalinoBehaviors:MultiBindingBehavior Converter="{StaticResource myNameConverter}" ConverterParameter="FormatLastFirst" PropertyName="Text">
            <cimbalinoBehaviors:MultiBindingItem Value="{Binding FirstName}" />
            <cimbalinoBehaviors:MultiBindingItem Value="{Binding LastName}" />
        </cimbalinoBehaviors:MultiBindingBehavior>
    </i:Interaction.Behaviors>
</TextBlock>
```

The major difference here is the usage of `MultiBindingBehavior.PropertyName`, as we can't bind the target property directly, it will be up to the behavior to get/set the value. All the rest of the code is really quite self explanatory!

Here's another sample using two TextBox controls to input the FirstName and LastName values:

```xml
<TextBox x:Name="FirstNameTextBox" />
<TextBox x:Name="LastNameTextBox" />
<TextBlock Style="{StaticResource PhoneTextLargeStyle}">
    <i:Interaction.Behaviors>
        <cimbalinoBehaviors:MultiBindingBehavior Converter="{StaticResource myNameConverter}" ConverterParameter="FormatLastFirst" PropertyName="Text">
            <cimbalinoBehaviors:MultiBindingItem Value="{Binding Text, ElementName=FirstNameTextBox}" />
            <cimbalinoBehaviors:MultiBindingItem Value="{Binding Text, ElementName=LastNameTextBox}" />
        </cimbalinoBehaviors:MultiBindingBehavior>
    </i:Interaction.Behaviors>
</TextBlock>
```

You can set the `MultiBindingBehavior.Converter` property to any [IValueConverter](http://msdn.microsoft.com/en-us/library/windowsphone/develop/system.windows.data.ivalueconverter%28v=vs.105%29.aspx) instance (knowing that the `value` parameter is always an `object[]` instance) but I've also added an abstract [MultiValueConverterBase](https://github.com/Cimbalino/Cimbalino-Phone-Toolkit/blob/master/src/Cimbalino.Phone.Toolkit%20%28WP71%29/Converters/MultiValueConverterBase.cs) that you can inherit and implement quite easily!
