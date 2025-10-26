---
layout: default
title: Apps by Michael Troger
description: Introducing Michael Troger's software projects — both personal and professional.
---
# Apps
{:.no_toc}

* Table of Contents
{:toc}

# My Own Apps
* [PDF Wallet]({% link pdfwallet/index.md %})
* [Cyrillic Transliterator: Latin To Cyrillic]({% link latintocyrillic/index.md %})
* [Multiple Computer Vision Apps]({% link computervision/index.md %})

Some of them can also be found on my [Google Play Developer page](https://play.google.com/store/apps/developer?id=Michael+Troger).

# Apps I Worked On
I have experience writing code used by several million users. During my time at adidas Digital Sports (Runtastic), I worked on:
* [Adidas Running - Sport activity tracker](https://play.google.com/store/apps/details?id=com.runtastic.android)\
  50M+ downloads\
  Previously known as "Runtastic"\
  My contribution: feature enhancements
* [Adidas Training - Home workout](https://web.archive.org/web/20231020104742/http://play.google.com/store/apps/details?id=com.runtastic.android.results.lite)\
  10M+ downloads\
  Previously known as "Runtastic Results", (discontinued)\
  My contribution: feature enhancements
* [Adidas - Shopping](https://play.google.com/store/apps/details?id=com.adidas.app)\
  50M+ downloads\
  My contribution: feature enhancements
* [Adidas Confirmed - Exclusive shopping](https://play.google.com/store/apps/details?id=com.adidas.confirmed.app)\
  10M+ downloads\
  My contribution: feature enhancements
* [Runtastic Steps - Steps counter & pedometer](https://web.archive.org/web/20190418173635/https://play.google.com/store/apps/details?id=com.runtastic.android.me.lite)\
  1M+ downloads\
  Previously known as "Runtastic Me", (discontinued)\
  My contribution: feature enhancements
* [Runtastic Sleep Better - Sleep tracker](https://web.archive.org/web/20240102165257/https://play.google.com/store/apps/details?id=com.runtastic.android.sleepbetter.lite)\
  5M+ downloads\
  Discontinued\
  My contribution: maintenance
* [Runtastic Heart Rate Monitor](https://web.archive.org/web/20171226114912/https://play.google.com/store/apps/details?id=com.runtastic.android.heartrate.lite)\
  5M+ downloads\
  Discontinued\
  My contribution: maintenance

# Open Source
Over the years, I’ve learned to value open-source software and platforms like Stack Overflow. Since they helped me grow as a developer, I decided to give something back to the community. I'm an active member on GitHub and Stack Overflow — feel free to follow my profiles.

[Michael Troger on GitHub](https://github.com/michaeltroger)\
[Michael Troger on StackOverflow](https://stackoverflow.com/users/5155371/michael-troger)

Below is an overview of [all my open-source repositories]({% link repositories/index.md %}). Excerpt:

{% assign repos = site.github.public_repositories %}
{% if repos %}
<ul>
  {% assign sortedRepos = repos | sort: 'stargazers_count' | reverse %}
  {% for repo in sortedRepos limit:3 %}
    <li>
       <a href="{{ repo.html_url }}">{{ repo.name }}{% if repo.archived %} (archived){% endif %}</a><br>
        {% if repo.description %}{{ repo.description }}<br>{% endif %}  
        Stars: {{ repo.stargazers_count }} | Forks: {{ repo.forks_count }}
    </li>
  {% endfor %}
    <li><a href="{% link repositories/index.md %}">See more</a></li>
</ul>
{% endif %}
