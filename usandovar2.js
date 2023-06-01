var number = 1
{
    var numero = 2
    console.log('dentro =', numero) // quando coloca no global, engloba tudo. então fuja do escopo global.
}
console.log('fora =', numero)