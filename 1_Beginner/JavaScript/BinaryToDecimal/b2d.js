"use strict"

let converter = () => {
    let binario = document.querySelector(`input#campo--bin`).value,
        resultado = document.getElementById(`result`),
        binarioValido = true,
        decimal = 0

    if(binario.length == 0){
        window.alert(`Por favor, preencha o campo de texto abaixo!`)
    
    }else{

        for(let index = 0; index < binario.length; index++){

            if(Number(binario[index]) != 0 && Number(binario[index]) != 1){
                resultado.innerHTML = `Não é um número binário!`
                binarioValido = false
                break;

            }

            if(Number(binario[index]))
                decimal += 2 ** (binario.length - index - 1)

        }

        if(binarioValido)
            resultado.innerHTML = `Decimal correspondente: ${decimal}`

    }

}

document.getElementById(`botao--converter`).addEventListener(`click`, converter)
document.querySelector(`body`).addEventListener(`keydown`, (event) => {

    if(event.key == `Enter`)
        converter()

})