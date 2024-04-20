let mensagem = "Esta é a mensagem que vai rolar!";
let indice = 0;
let intervalo;

document.getElementById('iniciar').addEventListener('click', function() {
    if (intervalo) clearInterval(intervalo); // Limpa o intervalo anterior se existir
    intervalo = setInterval(function() {
        let input = document.getElementById('mensagem');
        let novaMensagem = mensagem.substring(1) + mensagem.charAt(0);
        input.value = novaMensagem;
        mensagem = novaMensagem;
    }, 100); // Ajuste o tempo de rolagem aqui (em milissegundos)
});

document.getElementById('parar').addEventListener('click', function() {
    clearInterval(intervalo);
});
