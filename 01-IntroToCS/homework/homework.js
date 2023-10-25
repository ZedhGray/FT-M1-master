'use strict'

function BinarioADecimal(num) {
  // Separas el string num, con el metodo split
  let str = num.split('')
  // instancias result, que sera donde se almacene el resultado de la suma
  let result = 0
  //Inicias un ciclo for, de manera inversa que inicia en el valor maximo -1 y termina en 0
  //Dentro del ciclo sumamos a result, el resultado de multiplicar el index (1 o 0) por el cuadrado del numero correspondiente al index.
  //Aqui puedes poner la solucion de cualquier manera, puedes ahorrarte el for si poner reverse() para voltear el string y ejecutar el mismo codigo pero de manera mas sencilla
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i] * Math.pow(2, str.length - 1 - i)
  }
  //retornas la suma de los numeros, con un return
  return result

  // parseInt() toma dos argumentos: la cadena de texto a convertir y la base del número. En este caso, binario "2"
  //return parseInt(num, 2)
}
/**
 function BinarioADecimal(num) {
  // Paso 1: Divide la cadena de entrada en un array de caracteres y luego invierte el orden del array
  let str = num.split('').reverse();

  // Paso 2: Inicializa una variable con el valor 0
  let result = 0;

  // Paso 3: Inicia un bucle que recorre cada carácter del array
  for (let i = 0; i < str.length; i++) {
    // Paso 4: Calcula el valor decimal del bit actual y lo suma al resultado total
    result += parseInt(str[i]) * Math.pow(2, str.length-i-1);
  }

  // Paso 5: Retorna el resultado total
  return result;
}
*/

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
  //Instancias binario donde se contendra el strin resultante
  let binario = ''
  // usas el ciclo while
  while (num !== 0) { //se puede usar mayor que 0
    // Dentro del bucle, se calcula el resto de la división de num por 2. Este resto es 0 o 1, que es el bit más significativo del número binario.
    binario = (num % 2) + binario
    //Luego, num se actualiza dividiéndolo por 2 y redondeando hacia abajo al entero más cercano. Esto es equivalente a eliminar el bit más significativo del número decimal.
    num = Math.floor(num / 2)
  }
  //El buble continua hasta que se convierte en 0 y se devuelve el num binario
  return binario
  // toString(2) convierte el número decimal num en una cadena de texto binaria.
  // return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
