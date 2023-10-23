'use strict'

function BinarioADecimal(num) {
  //Usando metodos
  // return parseInt(num, 2)
  //Usando un ciclo
  let str = num.split('')
  let result = 0
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i] * Math.pow(2, str.length - 1 - i)
  }
  return result
}
// 3 a binario es "111"
/*
7 / 2 resto 1  7 / 2   2x3 el resto es 1
3 / 2 resto 1  3 / 2     2x1 el resto es 1
1 / 2 resto 1  1 / 2     2x0 el resto es 1

12 / 2  2x6 el resto es 0
6 / 2 2x3 el resto es 0
3 / 2 2x1 el resto es 1
1 / 2 2x0 el resto es 1

*/
function DecimalABinario(num) {
  //Usando metodos
  // return num.toString(2)
  //Usando ciclos
  let binario = ''
  while (num !== 0) {
    binario = (num % 2) + binario
    num = Math.floor(num / 2)
  }
  return binario
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
