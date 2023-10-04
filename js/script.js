let tela = document.getElementById('resultado');

function appendToResult(valor) {
    if (tela.value === '0' && valor !== '.') {
        tela.value = valor;
    } else {
        // Verifica se o último caractere na tela é um operador
        const ultimoCaractere = tela.value.charAt(tela.value.length - 1)
        const operadores = ['+', '-', '*', '/'] // Adicione outros operadores, se necessário

        const operadorExibicao = {
            '+' : '+',
            '-' : '-',
            '*' : 'x',
            '/' : '÷'
        }

        if (operadores.includes(ultimoCaractere) && operadores.includes(valor)) {
            // Substitui o último operador pelo novo operador
            tela.value = tela.value.slice(0, -1) + valor
        } else {
            // Adiciona espaço antes do operador se necessário
            if (operadores.includes(valor)) {
                tela.value += ' ' + operadorExibicao[valor] + ' '
            } else {
                tela.value += valor
            }
        }
    }
}

function limpar() {
    tela.value = '0';
}

function calcular() {
    try {
        // Substitui '÷' por '/' e 'x' por '*' antes de avaliar a expressão
        const expressao = tela.value.replace(/÷/g, '/').replace(/x/g, '*')
        tela.value = eval(expressao);
    } catch (error) {
        tela.value = 'Erro';
    }
}