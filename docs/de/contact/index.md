---
layout: default
title: Michael Troger kontaktieren
noindex: true
---
# Kontakt
Signal Messenger: [Kontaktdaten](/de/signal/)  

E-Mail: &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;  
Über das folgende Formular kannst du mir eine verschlüsselte E-Mail senden:

<noscript><p class="warning">Ohne JavaScript funktioniert das Formular nicht. JavaScript wird für die Verschlüsselung mit OpenPGP.js benötigt.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Deine Nachricht an mich..."></textarea><br>
    <input type="submit" disabled value="Verschlüsseln und E-Mail-Programm öffnen" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="In die Zwischenablage kopiert." data-error-message="Fehler. Kopieren nicht möglich. Bitte manuell kopieren.">Text in die Zwischenablage kopieren.</button>
    <p><b>Dein E-Mail-Programm sollte sich jetzt geöffnet haben. Falls nicht, sende die obige Nachricht bitte manuell an &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Du kennst PGP noch nicht?** Pretty Good Privacy macht E-Mail-Kommunikation sicherer. Die Schaltfläche oben verschlüsselt deine Nachricht mit PGP. Sie beginnt mit „-----BEGIN PGP MESSAGE-----“ und endet mit „-----END PGP MESSAGE-----“. Du kannst sie unverändert senden — nur ich kann sie entschlüsseln und lesen.

## PGP
Meinen öffentlichen Schlüssel findest du über das Web Key Directory (WKD) und auf dem Schlüsselserver [keys.openpgp.org](https://keys.openpgp.org/).

Download: [Öffentlicher Schlüssel]({% link files/troger_public.asc %})  
Fingerabdruck:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>