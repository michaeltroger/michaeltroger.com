---
layout: default
title: Repositórios de Michael Troger
description: Visão geral dos repositórios Git de Michael Troger alojados no GitHub.
---
# Os meus repositórios
Última atualização: {{ site.time }}

{% assign totalStars = 0 %}
{% assign totalForks = 0 %}
{% assign repos = site.github.public_repositories %}
{% for repo in repos %}
  {% assign totalStars = totalStars | plus: repo.stargazers_count %}
  {% assign totalForks = totalForks | plus: repo.forks_count %}
{% endfor %}

Total de estrelas recebidas: {{ totalStars }}  
Total de forks: {{ totalForks }}

[Segue @michaeltroger no GitHub](https://github.com/michaeltroger)

{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (arquivado){% endif %}</a><br>{% if repo.description %}{{ repo.description }}<br>{% endif %}Estrelas: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}</li>
  {% endfor %}
</ul>
{% endif %}