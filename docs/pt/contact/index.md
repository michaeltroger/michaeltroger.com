---
layout: default
title: Contactar Michael Troger
noindex: true
---
# Contacto
Signal Messenger: [Dados de contacto](/pt/signal/)  
E-mail: <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</a>  
LinkedIn: [linkedin.com/in/michaeltroger](https://www.linkedin.com/in/michaeltroger)

## E-mail cifrado
Se preferires, podes utilizar o formulário abaixo para me enviar um e-mail cifrado:

<noscript><p class="warning">O formulário não funciona sem JavaScript, necessário para a cifragem com OpenPGP.js.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="A tua mensagem para mim..."></textarea><br>
    <input type="submit" disabled value="Cifrar e abrir o programa de e-mail" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="Copiado para a área de transferência." data-error-message="Erro. Não foi possível copiar. Copia o texto manualmente, por favor.">Copiar texto para a área de transferência.</button>
    <p><b>O teu programa de e-mail deverá ter aberto. Caso contrário, envia manualmente a mensagem acima para &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Ainda não conheces o PGP?** O Pretty Good Privacy torna as comunicações por e-mail mais seguras. O botão acima cifra a tua mensagem com PGP. Começa com “-----BEGIN PGP MESSAGE-----” e termina com “-----END PGP MESSAGE-----”. Podes enviá-la tal como está — só eu a poderei decifrar e ler.

## PGP
Podes encontrar a minha chave pública através do Web Key Directory (WKD) e no servidor [keys.openpgp.org](https://keys.openpgp.org/).

Transferência: [Chave pública]({% link files/troger_public.asc %})  
Impressão digital:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>