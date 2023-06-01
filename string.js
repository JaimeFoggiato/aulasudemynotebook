// cadeia de caracteres

const escola = "Cod3r"
console.log(escola.charAt(4)) // vai me dar letra no indice 4, resulta na letra R
console.log(escola.charAt(5)) // não retorna nada
console.log(escola.charCodeAt(3)) // relacionado a tabela uniCode
console.log(escola.indexOf('3')) // relacionado ao indice 3 na frase

console.log(escola.substring(1)) // esconde o primeiro caracter
console.log(escola.substring(0, 3)) // indice 0, incluindo o 0 indo até o 3 e não incluindo o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, "e")) // substitui o 3 pelo "e"

console.log('Ana,Maria,Pedro'.split(',')) //separa por virgula