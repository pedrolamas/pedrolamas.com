---
layout: post
title: Monitoring changes in webpages with Home Assistant
date: 2021-07-08T11:05:12+01:00
categories:
  - Home Assistant
tags:
  - Home Assistant
  - Automation
---

I'm a huge fan of [Home Assistant](https://www.home-assistant.io/) and use it to automate most of my devices at my home, and for that matter, I follow a few people on Twitter and YouTube that share valuable information on it!

One of those is [BeardedTinker](https://www.youtube.com/c/BeardedTinker) channel on YouTube, as he provides particularly good step-by-step explanations in his videos - if you are interested on the topic, I do recommend following his YouTube channel!

A few weeks ago he published a video on [Smart Home Service monitoring with Home Assistant](https://www.youtube.com/watch?v=7KexZUKqEqA), where he showed how we can check that a website is working correctly by using curl on the webpage address and then checking for the 200 OK status return code.

I wanted to improve on that by checking a webpage for changes and then creating automations on that!

There are a few ways to achieve this, I will be discussing two of them!

## Using the ETag header

First, here is a quick explanation on what the ETag header is (more [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)):

> The ETag HTTP response header is an identifier for a specific version of a resource. It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.

As all we want is the webpage headers, we can use a HEAD request instead of the GET, so here is how the whole thing will work:

```yaml
sensor:
  - platform: command_line
    name: webpage_monitor
    command: >-
      python3 -c "import requests; response = requests.head('https://www.zigbee2mqtt.io/information/supported_devices.html'); print(response.headers.get('ETag'))"
    scan_interval: 10800
```

On the above example, we have a sensor called `webpage_monitor` that will execute a python command to perform a HEAD request on the [Zigbee2MQTT Devices](https://www.zigbee2mqtt.io/information/supported_devices.html) webpage, and return the `ETag` header value.

Now all we need is an automation that will trigger when the state (value) of this sensor changes:

```yaml
automation:
  - alias: Show notification when webpage_monitor changes
    trigger:
      - platform: state
        entity_id: sensor.webpage_monitor
    action:
      - service: persistent_notification.create
        data:
          message: 'Page changed!'
```

## Using the page content

Not all webpages have an `ETag` header, and for those cases (or when the `ETag` somehow changes without the content actually changing), we can instead create a hash of the page content and use that in our automation!

Here is an example with the [Home Assistant](https://www.home-assistant.io/) homepage:

```yaml
sensor:
  - platform: command_line
    name: webpage_monitor
    command: >-
      python3 -c "import hashlib, requests; response = requests.get('https://www.home-assistant.io/'); print(hashlib.sha256(response.content).hexdigest())"
    scan_interval: 10800
```

The above will calculate a unique hash of the content of the page and store that in the sensor.

As before, all we need then is to create an automation that will run when the sensor state changes!
