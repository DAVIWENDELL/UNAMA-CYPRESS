document.addEventListener('DOMContentLoaded', function() {
    const botaoEnviar = document.getElementById('botao-enviar');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (botaoEnviar && mensagemSucesso) {
        botaoEnviar.addEventListener('click', function(event) {
            event.preventDefault();
            mensagemSucesso.style.display = 'block';
            mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';
        });
    }
});
