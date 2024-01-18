let resultadoElement = document.getElementById('resultado');
let expressao = '';
let ultimoCaracterOperador = false;

function appendToResult(valor) {
    if (isOperador(valor)) {
        if (!ultimoCaracterOperador) {
            expressao += valor;
            ultimoCaracterOperador = true;
        }
    } else {
        expressao += valor;
        ultimoCaracterOperador = false;
    }
    
    resultadoElement.value = expressao;
}

function isOperador(valor) {
    return ['+', '-', '*', '/'].includes(valor);
}

function limpar() {
    expressao = '';
    resultadoElement.value = '0';
    ultimoCaracterOperador = false;
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
        resultadoElement.value = expressao;
    } catch (error) {
        resultadoElement.value = 'Erro';
    }
}