---
layout: default
title: Repositorios de Michael Troger
description: Resumen de los repositorios Git de Michael Troger alojados en GitHub.
---
# Mis repositorios
Última actualización: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Estrellas recibidas en total: {{ totalStars }}  
Forks totales: {{ totalForks }}

[Sigue a @michaeltroger en GitHub](https://github.com/michaeltroger)

{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archivado){% endif %}</a><br>{% if repo.description %}{{ repo.description }}<br>{% endif %}Estrellas: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}</li>
  {% endfor %}
</ul>
{% endif %}