let quantidadeImpar = 0;
let quantidadePar = 0;
let arrayQuantidadePorNumero= []

// resultados recentes na parte de cima
const ultimosJogos = [
    [01,02,03,04,05,06,07,09,11,16,17,18,19,20,25],
    [01,03,05,06,07,08,10,11,12,13,17,18,22,24,25],
    [01,02,03,04,06,07,09,10,12,14,16,18,21,22,25],
    [02,03,05,06,08,09,10,14,15,17,19,20,21,22,25],
    [01,02,03,04,06,10,13,16,17,19,20,21,23,24,25],
    [01,02,03,05,06,08,11,14,15,16,18,19,20,21,25],
    [01,03,06,09,10,11,13,16,17,18,19,20,21,23,25],
    [02,03,04,05,06,07,08,13,14,15,17,19,21,22,25],
    [01,03,05,07,08,09,10,11,12,15,16,17,20,22,24],
    [03,05,06,07,09,11,12,15,17,18,19,20,21,24,25],
    [01,02,04,08,09,11,12,14,15,17,18,19,23,24,25],
    [01,03,05,07,08,09,10,14,16,17,18,22,23,24,25],
    [03,06,07,08,09,10,11,14,16,18,19,20,21,23,24],
    [01,02,05,07,09,11,12,15,16,19,21,22,23,24,25],
    [04,05,06,07,09,12,13,14,15,16,18,19,20,22,23],
    [02,03,05,07,09,10,11,13,15,17,19,20,21,24,25],
    [01,02,03,04,05,06,08,10,11,12,16,18,19,20,23],
    [01,03,04,05,06,07,13,15,16,17,20,21,22,23,24],
    [02,05,07,09,10,11,12,14,15,16,18,22,23,24,25]
].reverse()


SomaResultados(juntaResultados,parOuImpar)

function SomaResultados (callbackJuntaResultado,callBackImparOuPar){
    for (let i = 1; i < 26; i++) {
        let number= ultimosJogos.reduce((acc,item)=>{
            if(item.includes(i)){
                acc++
            }
            return acc
        },0)
        callBackImparOuPar(number)
        callbackJuntaResultado(number)
    }
}


function parOuImpar(number){
    if(number % 2 === 0){
        quantidadePar+= number
    }else{
        quantidadeImpar+= number
    }
}

function juntaResultados(number){
    arrayQuantidadePorNumero.push(number)
}

const resultadoF = arrayQuantidadePorNumero.map((item,i)=>{
    if(item < 10){
        item= '0'+item
      return  item +` vezes, saiu o número: ${i+1}`
    }
    const resultado = item +` vezes, saiu o número: ${i+1}`
   return resultado
});

const resultadoFinal = resultadoF.sort().reverse()
console.log('números ímpares '+ quantidadeImpar);
console.log('números Pares ' + quantidadePar);
console.log(resultadoFinal);

