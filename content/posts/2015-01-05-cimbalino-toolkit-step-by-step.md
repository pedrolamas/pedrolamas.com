---
id: 4065
title: Cimbalino Toolkit, step by step!
date: 2015-01-05T19:57:58+00:00
author: Pedro Lamas
layout: post
guid: https://www.pedrolamas.com/?p=4065
permalink: /2015/01/05/cimbalino-toolkit-step-by-step/
fb_fan_page_post_id:
  - 150703221746608_416814151802179
dsq_thread_id:
  - '3393109775'
image: /wp-content/uploads/2014/06/Cimbalino.Toolkit@4x-400x270.png
categories:
  - Windows
  - Windows Phone
tags:
  - Cimbalino
  - Windows
  - Windows Phone
  - WPDev
---

One of the biggest complaints I always had about [Cimbalino Toolkit](http://cimbalino.org) is the lack of documentation and samples!

Granted, some awesome developers like [Sara Silva](https://twitter.com/saramgsilva) and [Scott Lovegrove](https://twitter.com/scottisafool) have done **a lot more** than I have to promote the toolkit and write some really good code using it, but I think it's time I take on some of that work!

As such, I'm now making an effort to regularly write articles on Universal Apps development with Cimbalino Toolkit step by step, and here is the first one...

## Adding the Cimbalino Toolkit NuGet to a Universal App

Open Visual Studio 2013, click _File -\> New -\> Project_, on the Templates on the left select _Store Apps -\> Universal Apps_, on the right select _Blank App (Universal Apps)_, pick a name and hit _Ok_ to save the solution!

[![Creating a blank Universal App project](/wp-content/uploads/2015/01/Creating-a-blank-Universal-App-project.png)](/wp-content/uploads/2015/01/Creating-a-blank-Universal-App-project.png)

Click _Tools -\> NuGet Package Manager -\> Manage NuGet Packages for Solution..._.

On the top right of the _Manage NuGet Packages_ window you will see a search box; type "Cimbalino" on it and press _Enter_. You should now be seeing two packages: "Cimbalino Toolkit Core" (compatible with background agents) and "Cimbalino Toolkit" (main component)

[![Installing Cimbalino Toolkit with NuGet Package Manager](/wp-content/uploads/2015/01/Installing-Cimbalino-Toolkit-with-NuGet-Package-Manager.png)](/wp-content/uploads/2015/01/Installing-Cimbalino-Toolkit-with-NuGet-Package-Manager.png)

Select "Cimbalino Toolkit" and click on the _Install_ button. You will now see the _Select Project_ window.

[![Select Projects to install package](/wp-content/uploads/2015/01/Select-Projects-to-install-package.png)](/wp-content/uploads/2015/01/Select-Projects-to-install-package.png)

Leave all projects of the solution selected and click _Ok_. You will now see the _License Acceptance_ window, showing the licenses for all packages that will be installed.

[![License Acceptance](/wp-content/uploads/2015/01/License-Acceptance.png)](/wp-content/uploads/2015/01/License-Acceptance.png)

Please review the data and then click _I accept_ to continue with the installation.

After this step, you should now have returned to the _Manage NuGet Packages_ window, and a green checkmark should now be shown on the side of each of the toolkit components.

[![Packages successfuly installed](/wp-content/uploads/2015/01/Packages-successfuly-installed.png)](/wp-content/uploads/2015/01/Packages-successfuly-installed.png)

Congratulations: you have now successfully installed the Cimbalino Toolkit in your project! :)
