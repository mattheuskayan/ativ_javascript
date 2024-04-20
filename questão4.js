document.querySelectorAll('#teclas button').forEach(button => {
    button.addEventListener('click', function() {
        let display = document.getElementById('display');
        let valor = this.textContent;

        switch (valor) {
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Erro';
                }
                break;
            case 'C':
                display.value = '';
                break;
            default:
                display.value += valor;
        }
    });
});