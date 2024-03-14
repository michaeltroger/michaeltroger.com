const submit = document.getElementById('submit');
const form = document.getElementById('form');
const input = document.getElementById('input');
const afterSent = document.getElementById('after-sent');
const copyToClipboard = document.getElementById('copy-to-clipboard');

input.disabled = false;
submit.disabled = false;

copyToClipboard.onclick = () => {
    navigator.clipboard
        .writeText(input.value)
        .then(() => {
            alert("Copied to clipboard.");
        })
        .catch(() => {
            alert("Error. Couldn't copy to clipboard. Please copy manually.");
        });
};

form.onsubmit = (e) =>{
    e.preventDefault();
    
    input.disabled = true;
    submit.classList.add('hidden');

    (async () => {
        const response = await fetch('https://troger.app/troger_public.asc');
        const key = await response.text();

        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: input.value }), 
            encryptionKeys: await openpgp.readKey({ armoredKey: key })
        });

        input.value = encrypted;

        afterSent.classList.remove('hidden');

        const body = encodeURIComponent(encrypted);
        window.location.href = `mailto:m@troger.app?subject=Encrypted%20message&body=${body}`;
    })();
};

if (input.value.startsWith('-----BEGIN PGP MESSAGE-----')) { // if the user has already encrypted the message (page reload)
    input.disabled = true;
    submit.classList.add('hidden');
    afterSent.classList.remove('hidden');
}