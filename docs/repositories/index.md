---
layout: default
title: Michael Troger's Repositories
description: An overview over Michael Troger's Git repositories, hosted on GitHub.
---
# My Repositories
Last updated at: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Total stars received: {{ totalStars }}  
Total forks: {{ totalForks }}

[Follow @michaeltroger on GitHub](https://github.com/michaeltroger)

{% assign repos = site.github.public_repositories %}
{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li>
      <a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archived){% endif %}</a><br>
      {% if repo.description %}{{ repo.description }}<br>{% endif %}
      Stars: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}
    </li>
  {% endfor %}
<ul>
{% endif %}
