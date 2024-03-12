function meuScopo() {
    const select = document.querySelector('.select');
    const resultado = document.querySelector('.resultado2');
    const limpar = document.querySelector('.limpar');

    // Função para calcular e exibir o resultado
    function calcularResultado() {
        
        const valor1 = parseFloat(document.querySelector('.valor1').value);
        const valor2 = parseFloat(document.querySelector('.valor2').value);
        const operacao = select.value; //foi criada para selecionar a opção dos usuários a partir das condições a seguir:

        let resultadoCalculado;

        switch (operacao) {
            case 'soma':
                resultadoCalculado = valor1 + valor2;
                break;
            case 'subtracao':
                resultadoCalculado = valor1 - valor2;
                break;
            case 'multiplicacao':
                resultadoCalculado = valor1 * valor2;
                break;
            case 'divisao':
                resultadoCalculado = valor1 / valor2;
                break;
            default:
                resultadoCalculado = '';
        }

        if (isNaN(resultadoCalculado)) {
            if (!isNaN(valor1)) {
                resultadoCalculado = valor1;
            } else if (!isNaN(valor2)) {
                resultadoCalculado = valor2;
            } else {
                resultadoCalculado = 'Por favor, insira pelo menos um número';
            }
        }
        
        resultado.value = resultadoCalculado !== undefined ? resultadoCalculado : '';
    }
    function limparCampos() {
        document.querySelector('.valor1').value = '';
        document.querySelector('.valor2').value = '';
        select.selectedIndex = 0;
        resultado.value = '';
    }

    // Adiciona um ouvinte de evento de mudança ao select
    select.addEventListener('change', calcularResultado);

    limpar.addEventListener('click', limparCampos);
    

    // Chamamos a função uma vez para calcular o resultado inicial
};
meuScopo();
