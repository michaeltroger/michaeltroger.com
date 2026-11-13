---
layout: default
title: Contacter Michael Troger
noindex: true
---
# Contact
Signal Messenger : [Coordonnées](/fr/signal/)  
E-mail : <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</a>  
LinkedIn : [linkedin.com/in/michaeltroger](https://www.linkedin.com/in/michaeltroger)

## E-mail chiffré
Si vous préférez, vous pouvez utiliser le formulaire ci-dessous pour m’envoyer un e-mail chiffré :

<noscript><p class="warning">Le formulaire ne fonctionne pas sans JavaScript, nécessaire au chiffrement avec OpenPGP.js.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Votre message..."></textarea><br>
    <input type="submit" disabled value="Chiffrer et ouvrir le client de messagerie" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="Copié dans le presse-papiers." data-error-message="Erreur. Impossible de copier. Veuillez copier le texte manuellement.">Copier le texte dans le presse-papiers.</button>
    <p><b>Votre application de messagerie devrait être ouverte. Sinon, envoyez manuellement le message ci-dessus à &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Vous ne connaissez pas encore PGP ?** Pretty Good Privacy renforce la sécurité des e-mails. Le bouton ci-dessus chiffre votre message avec PGP. Il commence par « -----BEGIN PGP MESSAGE----- » et se termine par « -----END PGP MESSAGE----- ». Vous pouvez l’envoyer tel quel : je serai le seul à pouvoir le déchiffrer et le lire.

## PGP
Ma clé publique est disponible via le Web Key Directory (WKD) et sur le serveur de clés [keys.openpgp.org](https://keys.openpgp.org/).

Téléchargement : [Clé publique]({% link files/troger_public.asc %})  
Empreinte :  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>