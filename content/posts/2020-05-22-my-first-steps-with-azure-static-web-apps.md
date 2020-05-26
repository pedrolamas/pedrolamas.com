---
layout: post
title: My first steps with Azure Static Web Apps
date: 2020-05-22T17:01:35+01:00
image: /wp-content/uploads/2020/05/pedrolamas-com-Azure-Static-Web-App.png
categories:
  - Azure
tags:
  - Azure
  - DevOps
  - Static
  - Static Web App
  - Gatsby
  - MSBuild2020
  - MSBuild
---

Let me just start by saying that Build 2020 was awesome!!

There was a lot of great content going around for everyone, but as I was watching the ["From code to scale! Build a static web app in minutes"](https://mybuild.microsoft.com/sessions/898230c4-1350-4fc6-acba-6baf1a58d76a) session showing how easy it is to use [**Azure Static Web Apps**](https://azure.microsoft.com/en-au/services/app-service/static/), I couldn't help but to try that for my own with this website!

My first attempt was to run through the ["Tutorial: Publish a Gatsby site to Azure Static Web Apps Preview"](https://docs.microsoft.com/en-au/azure/static-web-apps/publish-gatsby#deploy-your-web-app), and in the end I was happy to see it created the Azure resources and the a [new Github workflow](https://github.com/PedroLamas/pedrolamas.com/blob/azure-test/.github/workflows/azure-static-web-apps-jolly-ground-016a8c003.yml) showed up on my repository.

On close analysis of the workflow, I can see there's a new `Azure/static-web-apps-deploy` action in use doing all the heavy lifting! Internally, this action is using [Oryx](https://github.com/microsoft/Oryx) build system to identify the type of source code in the repo and compile it.

Once the workflow started and got to the `Azure/static-web-apps-deploy` action, I quickly came to realize that it wasn't happy with the fact that my "package.json" file had `"yarn": ">=1.22"` on the `"engines"` node... the build image only had yarn 1.17 and so the [build failed](https://github.com/PedroLamas/pedrolamas.com/runs/698012520?check_suite_focus=true):

```text
error pedrolamas.com@0.1.0: The engine "yarn" is incompatible with this module. Expected version ">=1.22". Got "1.17.3"
error Found incompatible module.
```

At this point I edited my "package.json" file, lowered the yarn version requirement to "1.17", and moved forward.

As expected, pushing this change caused a new workflow to start, but again, this [failed](https://github.com/PedroLamas/pedrolamas.com/runs/698023365?check_suite_focus=true):

```text
error Processing /bin/staticsites/ss-oryx/app-int/content/assets/logo.jpg failed

Original error:
/bin/staticsites/ss-oryx/app-int/node_modules/cwebp-bin/vendor/cwebp: **error while loading shared libraries: libGL.so.1: cannot open shared object file: No such file or directory**
```

This time, the problem was a lot more complicated to fix: the libGL.so.1 library required by Gatsby to process the images was missing from the Oryx docker image!

At this stage I actually thought giving up and went to Twitter to somehow vent my frustration on what I just experienced:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I tried this yesterday with my own GatsbyJs website and unfortunately it failed... First it was Yarn version (had to lower my requirement), but once I fixed that it failed on some native component when processing the images. <a href="https://t.co/rnYuwtmYyj">https://t.co/rnYuwtmYyj</a></p>&mdash; Pedro Lamas (@pedrolamas) <a href="https://twitter.com/pedrolamas/status/1263505047150899201?ref_src=twsrc%5Etfw">May 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[John Papa](https://twitter.com/John_Papa) quickly replied to that tweet, and asked me to open an [issue](https://github.com/Azure/static-web-apps/issues/17) on the [Azure Static Apps](https://github.com/Azure/static-web-apps) repo.

After some messages exchanged, I followed up on [a tip](https://github.com/Azure/static-web-apps/issues/17#issuecomment-632406729) from [Annaji Sharma Ganti](https://twitter.com/AnnajiGanti) to compile the source code **before** the `Azure/static-web-apps-deploy` action, and make the action point to the compiled static folder (the "public" folder in my case) - this way Orix would just skip the compilation bit and go directly to publishing the artifacts to Azure.

You can see [here](https://github.com/PedroLamas/pedrolamas.com/commit/b82fcbcef206da534f6e661521d2f91b452f24e2#diff-12cef35996238334e1b6c87f186fbda9) my changes to the workflow.

Finally, the workflow worked as expected and I could see my static GatsbyJs site hosted as an Azure Static Web App!

I then made a few more changes (like ensuring that GitHub would checkout the submodule with the website images and fixed some missing environment variables), added a custom domain, waited a few minutes for it to generate a valid SSL certificate, and... we are done!!

[http://azure-test.pedrolamas.com/](http://azure-test.pedrolamas.com/)

I ran a website speed test with [Fast or Slow](https://www.fastorslow.com/) and got [98 of 100 points](https://www.fastorslow.com/app/profile/ca6be8e7-1db8-5e42-b92c-cdb5eff79857), a [2 points improvement](https://www.fastorslow.com/app/profile/f2f146f8-11f5-5526-b14b-eca2d8e9b4ec) over a speed test of this website (which is built and hosted on Netlify with Cloudflare CDN)

![Speed test results from Fast or Slow for this Azure Static Web App](/wp-content/uploads/2020/05/pedrolamas-com-Azure-Static-Web-App-speed-test.png 'Speed test results from Fast or Slow for this Azure Static Web App')

Took a bit more of effort than I initially expected, but I'm very happy and **very impressed** with the result!

The Azure Static Web Apps is currently in "preview" so be aware that changes and improvements will happen before it is ready for production - in the meantime, go and try it out for free!
