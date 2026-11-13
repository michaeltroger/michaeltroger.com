---
layout: default
title: Contact Michael Troger
noindex: true
---
# Contact
Signal Messenger: [Contact details](/en/signal/)  
Email: <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</a>  
LinkedIn: [linkedin.com/in/michaeltroger](https://www.linkedin.com/in/michaeltroger)

## Encrypted email
If you prefer, use the form below to send me an encrypted email:

<noscript><p class="warning">The form doesn't work without JavaScript. JavaScript is required for encryption with OpenPGP.js.</p></noscript>
<form id="form">
    <textarea id="input" disabled name="body" rows="5" placeholder="Your message for me..."></textarea><br>
    <input type="submit" disabled value="Encrypt & open mail client" id="submit" title="mailto:&#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;">
</form>
<div id="after-sent" class="hidden">
    <button id="copy-to-clipboard" data-success-message="Copied to clipboard." data-error-message="Error. Couldn't copy to clipboard. Please copy manually.">Copy text to clipboard.</button>
    <p><b>Your email app should now have opened. If it did not, manually send the message above to &#109;&#64;&#116;&#114;&#111;&#103;&#101;&#114;&#46;&#97;&#112;&#112;</b></p>
</div>

{:.note .small-font}
**Not familiar with PGP yet?** Pretty Good Privacy makes email communication safer. The button above encrypts your message with PGP. It starts with “-----BEGIN PGP MESSAGE-----“ and ends with “-----END PGP MESSAGE-----“. You can send it as is — only I can decrypt and read it.

## PGP
Find my public key via the Web Key Directory (WKD) and on the [keys.openpgp.org](https://keys.openpgp.org/) key server.

Download: [Public Key]({% link files/troger_public.asc %})  
Fingerprint:  
CD61 A00F 7652 8C73 67D4  
2E12 9D3B 8646 DE92 27FD

<script src="{% link js/openpgp.min.js %}"></script>
<script src="{% link js/contact.js %}"></script>