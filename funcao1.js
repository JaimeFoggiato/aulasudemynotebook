// funçao é um "verbo" executa algo. Trecho de código que voce pode reusar ao longo do código

// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5) // só vai pegar o a e b e o restante irá ignorar

// Funcao com retorno

function soma(a, b = 1) { // o b com um valor padrão
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))