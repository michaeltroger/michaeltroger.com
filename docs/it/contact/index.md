---
layout: default
title: Contatta Michael Troger
noindex: true
---
# Contatti
Signal Messenger: [Dati di contatto](/it/signal/)  
E-mail: <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</a>  
LinkedIn: [linkedin.com/in/michaeltroger](https://www.linkedin.com/in/michaeltroger)

## E-mail crittografata
Se preferisci, puoi usare il modulo qui sotto per inviarmi un’e-mail crittografata:

<noscript><p class="warning">Il modulo non funziona senza JavaScript, necessario per la crittografia con OpenPGP.js.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Il tuo messaggio per me..."></textarea><br>
    <input type="submit" disabled value="Crittografa e apri il client di posta" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="Copiato negli appunti." data-error-message="Errore. Impossibile copiare. Copia manualmente, per favore.">Copia il testo negli appunti.</button>
    <p><b>La tua app di posta dovrebbe essersi aperta. In caso contrario, invia manualmente il messaggio sopra a &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Non conosci ancora PGP?** Pretty Good Privacy rende più sicure le comunicazioni via e-mail. Il pulsante qui sopra crittografa il messaggio con PGP. Inizia con “-----BEGIN PGP MESSAGE-----” e termina con “-----END PGP MESSAGE-----”. Puoi inviarlo così com’è: solo io potrò decifrarlo e leggerlo.

## PGP
Puoi trovare la mia chiave pubblica tramite Web Key Directory (WKD) e sul server [keys.openpgp.org](https://keys.openpgp.org/).

Download: [Chiave pubblica]({% link files/troger_public.asc %})  
Impronta digitale:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>