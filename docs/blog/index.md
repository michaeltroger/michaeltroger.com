---
layout: default
title: Michael Troger's Blog
description: Overview of my blog posts.
---
# {{ page.title }}

In my blog I'm writing about hobby projects related to software engineering, IT and Linux.

Also available as [RSS-Feed](/blog/atom.xml)!

{:.posts}
{% for post in site.posts %}
  * {{ post.date | date_to_string }} » [{{ post.title }}]({{ post.url }}){% endfor %}
