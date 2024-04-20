document.getElementById('inverter').addEventListener('click', function() {
    let textoOriginal = document.getElementById('textoOriginal').value;
    let palavras = textoOriginal.split(' ');
    let textoInvertido = palavras.reverse().join(' ');
    document.getElementById('textoInvertido').value = textoInvertido;
});