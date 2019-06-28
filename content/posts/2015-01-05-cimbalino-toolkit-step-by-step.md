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
  - "3393109775"
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

Open Visual Studio 2013, click *File -\> New -\> Project*, on the Templates on the left select *Store Apps -\> Universal Apps*, on the right select *Blank App (Universal Apps)*, pick a name and hit *Ok* to save the solution!

[![Creating a blank Universal App project](https://www.pedrolamas.com/wp-content/uploads/2015/01/Creating-a-blank-Universal-App-project.png)](https://www.pedrolamas.com/wp-content/uploads/2015/01/Creating-a-blank-Universal-App-project.png)

Click *Tools -\> NuGet Package Manager -\> Manage NuGet Packages for Solution...*.

On the top right of the *Manage NuGet Packages* window you will see a search box; type "Cimbalino" on it and press *Enter*. You should now be seeing two packages: "Cimbalino Toolkit Core" (compatible with background agents) and "Cimbalino Toolkit" (main component)

[![Installing Cimbalino Toolkit with NuGet Package Manager](https://www.pedrolamas.com/wp-content/uploads/2015/01/Installing-Cimbalino-Toolkit-with-NuGet-Package-Manager.png)](https://www.pedrolamas.com/wp-content/uploads/2015/01/Installing-Cimbalino-Toolkit-with-NuGet-Package-Manager.png)

Select "Cimbalino Toolkit" and click on the *Install* button. You will now see the *Select Project* window.

[![Select Projects to install package](https://www.pedrolamas.com/wp-content/uploads/2015/01/Select-Projects-to-install-package.png)](https://www.pedrolamas.com/wp-content/uploads/2015/01/Select-Projects-to-install-package.png)

Leave all projects of the solution selected and click *Ok*. You will now see the *License Acceptance* window, showing the licenses for all packages that will be installed.

[![License Acceptance](https://www.pedrolamas.com/wp-content/uploads/2015/01/License-Acceptance.png)](https://www.pedrolamas.com/wp-content/uploads/2015/01/License-Acceptance.png)

Please review the data and then click *I accept* to continue with the installation.

After this step, you should now have returned to the *Manage NuGet Packages* window, and a green checkmark should now be shown on the side of each of the toolkit components.

[![Packages successfuly installed](https://www.pedrolamas.com/wp-content/uploads/2015/01/Packages-successfuly-installed.png)](https://www.pedrolamas.com/wp-content/uploads/2015/01/Packages-successfuly-installed.png)

Congratulations: you have now successfully installed the Cimbalino Toolkit in your project! :)
