---
layout: default
title: Michael Troger's Repositories
description: My repositories on GitHub.
---
# {{ page.title }}
Last updated at: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Total received stars for repos: {{ totalStars }}  
Total forks from repos: {{ totalForks }}

[Follow @michaeltroger on GitHub](https://github.com/michaeltroger)

{% assign repos = site.github.public_repositories %}
{% if repos %}
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
* [{{ repo.name }}]({{ repo.html_url }})
  {% if repo.description %}{{ repo.description }}{% endif %}
  Stars: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}{% endfor %}
{% endif %}
