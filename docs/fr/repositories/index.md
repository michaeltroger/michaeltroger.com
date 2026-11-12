---
layout: default
title: Dépôts de Michael Troger
description: Présentation des dépôts Git de Michael Troger hébergés sur GitHub.
---
# Mes dépôts
Dernière mise à jour : {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Nombre total d’étoiles reçues : {{ totalStars }}  
Nombre total de forks : {{ totalForks }}

[Suivre @michaeltroger sur GitHub](https://github.com/michaeltroger)

{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archivé){% endif %}</a><br>{% if repo.description %}{{ repo.description }}<br>{% endif %}Étoiles : {{ repo.stargazers_count }} | Forks : {{ repo.forks_count }}</li>
  {% endfor %}
</ul>
{% endif %}