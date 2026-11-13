---
layout: default
title: Contactar con Michael Troger
noindex: true
---
# Contacto
Signal Messenger: [Datos de contacto](/es/signal/)  
Correo electrónico: <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</a>  
LinkedIn: [linkedin.com/in/michaeltroger](https://www.linkedin.com/in/michaeltroger)

## Correo cifrado
Si lo prefieres, puedes usar el siguiente formulario para enviarme un correo cifrado:

<noscript><p class="warning">El formulario no funciona sin JavaScript, necesario para cifrar con OpenPGP.js.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Tu mensaje para mí..."></textarea><br>
    <input type="submit" disabled value="Cifrar y abrir el cliente de correo" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="Copiado al portapapeles." data-error-message="Error. No se pudo copiar. Copia el texto manualmente, por favor.">Copiar texto al portapapeles.</button>
    <p><b>Tu aplicación de correo debería haberse abierto. Si no es así, envía manualmente el mensaje anterior a &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**¿Aún no conoces PGP?** Pretty Good Privacy hace que el correo electrónico sea más seguro. El botón cifrará tu mensaje con PGP. Empezará con “-----BEGIN PGP MESSAGE-----” y terminará con “-----END PGP MESSAGE-----”. Puedes enviarlo tal cual: solo yo podré descifrarlo y leerlo.

## PGP
Puedes encontrar mi clave pública mediante el Web Key Directory (WKD) y en el servidor de claves [keys.openpgp.org](https://keys.openpgp.org/).

Descarga: [Clave pública]({% link files/troger_public.asc %})  
Huella digital:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>