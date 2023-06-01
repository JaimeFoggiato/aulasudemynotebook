let isAtivo = false // pode mudar a variável
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! = não !! = não não. Quando é !! ele volta a origem, se é !true, significa false, se for !! true é verdadeiro, pois voltou a origem

console.log('os verdadeiros...')
console.log(!!3) // forçando verdadeiro e falso
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
