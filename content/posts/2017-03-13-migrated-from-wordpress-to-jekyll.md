---
title: Migrated from WordPress to Jekyll
date: 2017-03-13T09:02:01+00:00
layout: post
categories:
  - Uncategorized
tags:
  - WordPress
  - Jekyll
  - GoDaddy
  - Github Pages
---

For a long time now, my blog has been powered by [WordPress](http://wordpress.org) and hosted on [GoDaddy](http://www.godaddy.com) shared hosting.

Last week I noticed that the blog was down, and when I opened GoDaddy's shared hosting administration area, I got a database connection error message.

I then did what anyone in this situation would do: get help!

However, contacting GoDaddy support proved completely useless, as all I got was something along the lines of _"yes, there's a problem and we're working on to fix it; no, we don't know when it's gonna be fixed, so please try later"_...

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Just had a chat with <a href="https://twitter.com/GoDaddy">@GoDaddy</a> support, their server is down and all I got was &quot;we know it&#39;s down, just try later...&quot; <a href="https://twitter.com/hashtag/fail?src=hash">#fail</a> <a href="https://twitter.com/GoDaddyHelp">@GoDaddyHelp</a></p>&mdash; Pedro Lamas (@pedrolamas) <a href="https://twitter.com/pedrolamas/status/839089470880247813">March 7, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

After some 5 hours, the blog was back up and running... but there was a big problem: **some content had disappeared!**

I'm guessing they had some problem with the database server, and their "fix" involved recovering the databases from an old backup.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Seems <a href="https://twitter.com/GoDaddy">@GoDaddy</a> hosting admins &quot;fix&quot; was to RECOVER AN OLD DATABASE BACKUP, so all my latest changes have been lost... <a href="https://twitter.com/GoDaddyHelp">@GoDaddyHelp</a> <a href="https://t.co/ROROWqxfQP">https://t.co/ROROWqxfQP</a></p>&mdash; Pedro Lamas (@pedrolamas) <a href="https://twitter.com/pedrolamas/status/840237008551333888">March 10, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

That was the final reason I needed to completely ditch WordPress and GoDaddy, and migrate to something faster and more recent: this blog is now fully powered by [Jekyll](https://jekyllrb.com) and hosted in [GitHub Pages](https://pages.github.com)!

Major advantages of this approach are:

- No more MySQL or any other database server involved
- full control over rendered content
- everything is statically generated on every commit of the git repo, so **it's blazing fast!**
- I can **host it for free in GitHub Pages** and add some nice features like allowing other people to send me Pull Requests with fixes and improvements (or just to correct my recurrent typos!)

This right now is actually the first post I write in the new platform! :)

There are still a few quirks to fix, so if you find any problem please report it by [creating a new issue](https://github.com/pedrolamas/pedrolamas.com/issues/new) and I'll take care of it as soon as possible!
