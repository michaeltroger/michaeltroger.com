---
layout: default
title: Latin to Cyrillic Online Converter by Michael Troger
description: Introducing the Latin to Cyrillic Android app, created by Michael Troger.
---
# Cyrillic Transliterator: Latin To Cyrillic
A Latin-to-Cyrillic and Cyrillic-to-Latin converter (transliterator).

A simple web (online) version using the Serbian alphabet:

<noscript><p class="warning">This converter does not work without JavaScript.</p></noscript>
<table class="fullwidth">
    <tr>
        <td>
            <textarea placeholder="Latin Script" id="latin" class="latin-cyrillic-textarea"></textarea>
        </td>
        <td>
            <textarea placeholder="Cyrillic Script" id="cyrillic" class="latin-cyrillic-textarea"></textarea>
        </td>
    </tr>
    <tr>
        <td>
            <button id="latin-button">Latin To Cyrillic →</button>
        </td>
        <td>
            <button id="cyrillic-button">← Cyrillic To Latin</button>
        </td>
    </tr>
</table>

More alphabets and features are available in the [Android](https://play.google.com/store/apps/details?id=at.mikenet.serbianlatintocyrillic) and [iOS](https://apps.apple.com/app/cyrillic-to-latin/id6758277969) versions. 
With around 50,000 downloads, the Android version is one of the most successful apps of its kind — and it’s fully [open source](https://github.com/michaeltroger/latintocyrillic-android)!
The core business logic is available as separate [KMP (Kotlin Multiplatform)](https://github.com/michaeltroger/latin-to-cyrillic-kmp) library on [Maven Central](https://central.sonatype.com/search?namespace=com.michaeltroger). 

Included alphabets in the Android / iOS version:

* Serbian Azbuka
* Belarusian (ISO 9:1995)
* Bulgarian (ISO 9:1995)
* Macedonian (ALA-LC)
* Macedonian (ISO 9:1995)
* Russian (ISO 9:1995)
* Ukrainian (ISO 9:1995)


<div class="store-badges">
<a href="https://apps.apple.com/app/cyrillic-to-latin/id6758277969">
<img class="apple" src="{% link images/appstore.svg %}" alt="Download on the App Store">
</a>
<a href='https://play.google.com/store/apps/details?id=at.mikenet.serbianlatintocyrillic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
<img alt='Get it on Google Play' src='{% link images/googleplay.png %}'/>
</a>
<a href="https://f-droid.org/packages/at.mikenet.serbianlatintocyrillic">
<img src="{% link images/fdroid.png %}" alt="Get it on F-Droid">
</a>
</div>

[Privacy Policy]({% link latintocyrillic/privacy/index.md %})  

[Source Code: Android App on GitHub](https://github.com/michaeltroger/latintocyrillic-android)  
[Source Code: KMP (Kotlin Multiplatform) Library on GitHub](https://github.com/michaeltroger/latin-to-cyrillic-kmp)

<script src="{% link js/serbian_latin_cyrillic.js %}"></script>
