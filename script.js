function encrypt() {
    const text = document.getElementById('encrypt-input-text').value;
    const key = document.getElementById('encrypt-key').value;

    if (key === "") {
        alert("Please enter a key for encryption.");
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById('encrypt-output-text').innerText = encrypted;
}

function decrypt() {
    const encryptedText = document.getElementById('decrypt-input-text').value;
    const key = document.getElementById('decrypt-key').value;

    if (key === "") {
        alert("Please enter a key for decryption.");
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);
        document.getElementById('decrypt-output-text').innerText = originalText;
    } catch (error) {
        alert("Decryption failed. Please check your key and input text.");
    }
}
