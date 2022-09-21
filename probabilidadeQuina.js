const ultimosJogos = [
    [13,42,49,60,71],
    [01,10,27,72,77],
    [26,42,44,74,75],
    [07,21,33,47,68],
    [08,15,16,49,77],
    [06,38,43,48,55],
    [12,23,52,75,76],
    [08,12,26,64,74],
    [07,23,26,54,80],
    [02,22,23,37,58],
    [18,30,31,46,73],
    [08,13,27,29,67],
    [07,14,50,54,61],
    [10,12,48,54,65],
    [20,22,42,55,57],
    [06,32,34,51,60],
    [24,46,47,64,78],
    [30,43,48,52,71],
    [10,13,16,28,47],
    [02,04,32,34,53],
    [34,50,54,58,62],
    [09,33,37,54,68],
    [10,24,30,40,7]

].reverse()
let quantidadeImpar = 0;
let quantidadePar = 0;

let arrayQuantidadePorNumero= []

SomaResultados(juntaResultados,parOuImpar)

function SomaResultados (callbackJuntaResultado,callBackImparOuPar){
    for (let i = 1; i < 81; i++) {
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

// parOuImpar()
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

console.log('números ímpares '+ quantidadeImpar);
console.log('números Pares ' + quantidadePar);
const resultadoFinal = arrayQuantidadePorNumero.map((item,i)=>{
    const resultado = `${item} vezes, saiu o número: ${i+1}`
   return resultado
});
console.log(resultadoFinal.sort().reverse());