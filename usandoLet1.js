var numero = 1// como estão em escopos diferentes, o var e o let, imprimem coisas diferentes
{
    let numero = 2
    console.log('dentro = ', numero) // se procura no escopo menor, que é o caso e não acha, ele procura o escopo maior
}
console.log('fora =', numero)

// var tem escopo global e de função
// let tem escopo global, função e de bloco

