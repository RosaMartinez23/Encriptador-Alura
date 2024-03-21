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

document.getElementById('encriptar').addEventListener('click', function() {
    const inputText = document.getElementById('valorTexto').value;
    document.getElementById('resultadoTexto').value = encrypt(inputText);
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const inputText = document.getElementById('valorTexto').value;
    document.getElementById('resultadoTexto').value = decrypt(inputText);
});

document.getElementById('copiar').addEventListener('click', function() {
    const outputText = document.getElementById('resultadoTexto');
    outputText.select();
    document.execCommand('copy');
});
