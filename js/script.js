let resultadoElement = document.getElementById('resultado');
let expressao = '';
let ultimoCaracterOperador = false;

function appendToResult(valor) {
    if (isOperador(valor)) {
        if (!ultimoCaracterOperador) {
            expressao += ` ${substituirOperador(valor)} `;
            ultimoCaracterOperador = true;
        }
    } else {
        expressao += valor;
        ultimoCaracterOperador = false;
    }
    
    resultadoElement.value = expressao;
}

function substituirOperador(operador) {
    const substituicoes = {
        '/': '÷',
        '*': 'x'
    };
    return substituicoes[operador] || operador;
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
        // Substituir de volta para a avaliação correta
        expressao = expressao.replace(/÷/g, '/').replace(/x/g, '*');
        expressao = eval(expressao).toString();
        resultadoElement.value = expressao;
    } catch (error) {
        resultadoElement.value = 'Erro';
    }
}