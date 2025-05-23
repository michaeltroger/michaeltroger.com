---
layout: default
title: Contact Michael Troger
noindex: true
---
# Contact

Michael Troger, MSc.  
Puchenau, Austria

Signal: [QR code]({% link signal/index.md %}) \| [Send message](https://signal.me/#eu/0n3ZV4EEhwiOCWnMJ1OmuOOtIMTUect5TdKwtyV7s6wJyydA8yBBN6qKHKymlVeF)

Email: &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;  
You can use the below form to send me an encrypted email:

<noscript><p class="warning">The form doesn't work without JavaScript, it's needed for encryption (using OpenPGP.js).</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Your message for me..."></textarea><br>
    <input type="submit" disabled value="Encrypt & open mail client" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard">Copy text to clipboard.</button>
    <p><b>Your email app should now have been opened. If it was not, then please manually send the message from above to &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Not familiar with PGP yet?**  
Pretty Good Privacy (PGP) makes email communication much safer.
If you press the above button, your message will be encrypted with PGP.
It will start with "-----BEGIN PGP MESSAGE-----" and end with "-----END PGP MESSAGE-----".
You can send it as it is. I (and only I) will be able to decrypt and read your message.

## PGP

You can find my public key via the Web Key Directory (WKD) and on the [keys.openpgp.org](https://keys.openpgp.org/) key server.

Download:  
[Public Key]({% link files/troger_public.asc %})  

Fingerprint:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>
