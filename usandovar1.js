{{{{ var sera = 'Será' }}}}
console.log(sera) // escopo é um local onde a variável é visível, até onde é visível???

// var é identificável dentro e fora do bloco

function teste() {
    var local = 123
    console.log(local) // só funciona dentro deste escopo
}

teste()
console.log(local) // exemplo escopo global var ou é global ou no escopo de função