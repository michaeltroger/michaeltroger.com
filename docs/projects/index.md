---
layout: default
title: Projects by Michael Troger
description: Introducing the projects I worked on in the past and also an overview about ongoing ones.
---
# Android Apps Worked on Professionally
I bring experience in writing code used by several millions of users worldwide. During my time at adidas Digital Sports (Runtastic) I worked on:
* [Adidas Running - Sport activity tracker](https://play.google.com/store/apps/details?id=com.runtastic.android) (previously "Runtastic")\
  50M+ downloads\
  My part: feature enhancements
* [Adidas Training - Home workout](https://web.archive.org/web/20231020104742/http://play.google.com/store/apps/details?id=com.runtastic.android.results.lite) (previously "Runtastic Results", discontinued)\
  10M+ downloads\
  My part: feature enhancements
* [Adidas - Shopping](https://play.google.com/store/apps/details?id=com.adidas.app)\
  50M+ downloads\
  My part: feature enhancements
* [Adidas Confirmed - Exclusive shopping](https://play.google.com/store/apps/details?id=com.adidas.confirmed.app)\
  10M+ downloads\
  My part: feature enhancements
* [Runtastic Steps - Steps counter & pedometer](https://web.archive.org/web/20190418173635/https://play.google.com/store/apps/details?id=com.runtastic.android.me.lite) (discontinued)\
  1M+ downloads\
  My part: feature enhancements
* [Runtastic Sleep Better - Sleep tracker](https://web.archive.org/web/20240102165257/https://play.google.com/store/apps/details?id=com.runtastic.android.sleepbetter.lite) (discontinued)\
  5M+ downloads\
  My part: maintainance
* [Runtastic Heart Rate Monitor](https://web.archive.org/web/20171226114912/https://play.google.com/store/apps/details?id=com.runtastic.android.heartrate.lite) (previously "Runtastic Me", discontinued)\
  5M+ downloads\
  My part: maintainance

# Private Projects
Although being a professional software developer, programming stayed a hobby of mine. Therefore I'm working on some projects in my free-time.
Following a selected list of Android projects that I actively maintain, described in more detail:

* [Green Pass PDF Wallet](/greenpass)
* [Cyrillic Transliterator: Latin To Cyrillic](/latintocyrillic)
* [Multiple Computer Vision Apps](/computervision)

Some of them you can also find on my [Google Play Developer page](https://play.google.com/store/apps/developer?id=Michael+Troger).

## Web development and hosting
Besides Android development, I host and maintain this, and a couple of other small websites. 
I also manage the domains and do their domain name system (DNS) configuration.
Currently I'm having only static websites, hosted on GitHub Pages, except one with shared hosting on OVH servers.

# Archived
Over the years I worked on dozens of different projects and technologies which I don't actively maintain anymore.
Since plenty of my life time went into them, I still want to mention them here:

* lerne-kroatisch.de was a website and community based on the Drupal CMS
* autotechnik-troger.at is a website based on WordPress. I host and maintain it still, 
  but since a couple of years it's only in maintainance mode (for software updates)
* freie-schule.at was a website based on the Contao CMS, my focus was on the CMS configuration and the templates, while a colleague worked on the designs
* Shribe was a chat app created during my studies, together with 2 colleagues. It was based on WebSockets. The client was based on vanilla JavaScript. I worked on the backend part with Node.js
* During my studies I developed a restaurant reservation web application, together with 2 colleagues. The backend was using a RESTful API concept. I worked on the frontend web application part with Angular 2 and TypeScript
* For my Master thesis I created an Android app for collecting sensor data like from the accelerometer and the gyroscope
* For my Bachelor thesis I created an augmented virtuality video chat for the browser. It was based on WebRTC and WebGL technology
* During my studies I created an augmented reality endless runner game. It was written with Unity and C#
* My personal website was earlier running on plain PHP/MySQL. Later it was based on Node.js and Express
* I used to run my own virtual server with Ubuntu for webhosting
* ...

# Open-Source
Over the last years I learnt to value open-source software and platforms like Stack Overflow. 
Since they helped me grow as developer, I decided to give something back to the community.
I'm an active member on GitHub and Stack Overflow. Feel free to check out my profiles.

[Michael Troger on StackOverflow](https://stackoverflow.com/users/5155371/michael-troger)

[Michael Troger on GitHub](https://github.com/michaeltroger)

Additionally I created an automatically generated overview of [all my open-source repositories](/repositories). Excerpt:

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
    <li><a href="/repositories">See more</a></li>
</ul>
{% endif %}
