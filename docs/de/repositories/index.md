---
layout: default
title: Repositories von Michael Troger
description: Übersicht der Git-Repositories von Michael Troger auf GitHub.
---
# Meine Repositories
Zuletzt aktualisiert: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Erhaltene Sterne insgesamt: {{ totalStars }}  
Forks insgesamt: {{ totalForks }}

[@michaeltroger auf GitHub folgen](https://github.com/michaeltroger)

{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archiviert){% endif %}</a><br>{% if repo.description %}{{ repo.description }}<br>{% endif %}Sterne: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}</li>
  {% endfor %}
</ul>
{% endif %}