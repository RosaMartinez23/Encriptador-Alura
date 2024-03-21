function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = encrypt(inputText);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = decrypt(inputText);
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});
