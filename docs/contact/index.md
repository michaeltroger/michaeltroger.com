---
layout: default
title: Contact Michael Troger
description: Infos on how to contact me.
---
# Contact

Michael Troger, MSc.  
Puchenau, Austria

Email: &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;  
Signal: [contact details](/signal)

As an IT enthusiast I care about IT privacy and security. 
The message below will be encrypted and opened in your email client, from where you can send it over to me.

<noscript><p class="warning">The form doesn't work without JavaScript, it's needed for encryption (using OpenPGP.js).</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Your message for me..."></textarea><br>
    <input type="submit" disabled value="Encrypt & open mail client" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard">Copy text to clipboard.</button>
    <p><b>Your email app should now have been opened. If it was not, then please manually send the message from above to &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note}
**Not familiar with PGP yet?**  
Pretty Good Privacy (PGP) makes email communication much safer.
If you press the above button, your message will be encrypted with PGP.
It will start with "-----BEGIN PGP MESSAGE-----" and end with "-----END PGP MESSAGE-----".
You can send it as it is. I (and only I) will be able to decrypt and read your message.


Download: [PGP Public Key](/files/troger_public.asc)  
Fingerprint:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

You can find my public key also via the Web Key Directory (WKD) and on the [keys.openpgp.org](https://keys.openpgp.org/) key server.

<script src="/js/openpgp.min.js"></script>
<script src="/js/contact.js"></script>
