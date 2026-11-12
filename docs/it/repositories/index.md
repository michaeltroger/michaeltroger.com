---
layout: default
title: Repository di Michael Troger
description: Panoramica dei repository Git di Michael Troger ospitati su GitHub.
---
# I miei repository
Ultimo aggiornamento: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Stelle totali ricevute: {{ totalStars }}  
Fork totali: {{ totalForks }}

[Segui @michaeltroger su GitHub](https://github.com/michaeltroger)

{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archiviato){% endif %}</a><br>{% if repo.description %}{{ repo.description }}<br>{% endif %}Stelle: {{ repo.stargazers_count }} | Fork: {{ repo.forks_count }}</li>
  {% endfor %}
</ul>
{% endif %}