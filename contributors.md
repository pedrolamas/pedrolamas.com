---
layout: page
title: Contributors
---
This is a list of people who have helped me to maintain and improve this blog!

If you want to see your name in this list, just send me a pull request! :)

You can do it by using the `edit` link that you can find on every post, or just use the more [traditional way]({{ site.github.repository_url }})!

<ul>
  {% for contributor in site.github.contributors %}
    <li>
      <a href="{{ contributor.html_url }}">
        <img src="{{ contributor.avatar_url }}" width="32" height="32" />
        {{ contributor.login }}
      </a>
    </li>
  {% endfor %}
</ul>
