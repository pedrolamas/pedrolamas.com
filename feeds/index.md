---
layout: page
title: Syndicated Feeds
---
{% assign feed_atom = '/feed.xml' | absolute_url %}
{% assign feed_json = '/feed.json' | absolute_url %}

These are the available feeds:

* RSS: [{{ feed_atom }}]({{ feed_atom }})
* JSON: [{{ feed_json }}]({{ feed_json }})
