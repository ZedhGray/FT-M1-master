'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
//Recursiva
function nFactorial(n) {
  // comprobamos si n es igual a 0. Si es así, devolvemos 1 porque el factorial de 0 es 1.
  if (n === 0) {
    return 1
    //Si n no es 0, entonces calculamos el factorial de n multiplicando n por el factorial de n - 1. Esto se hace llamando a la función nFactorial(n - 1).
    //La función nFactorial(n - 1) a su vez llamará a nFactorial(n - 2), y así sucesivamente, hasta que n sea 0.
  } else {
    return n * nFactorial(n - 1)
  }
}
/*
//Manera iterativa
function nFactorial(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}
*/
/*
//En stack
function nFactorial(n) {
  // Creamos una pila vacía stack y un resultado inicial result de 1.
  let stack = [];
  let result = 1;
  // Agregamos cada número desde 1 hasta n en la pila.
  for (let i = 1; i <= n; i++) {
    stack.push(i);
  }
  //Extraemos cada número de la pila (usando stack.pop()) y lo multiplicamos con el resultado actual.
  while (stack.length > 0) {
    result *= stack.pop();
  }

  return result;
}
*/
/*------------------------------------------------------------------------------------------------------- */
//Manera recursiva
function nFibonacci(n) {
  //Primero, comprobamos si n es menor o igual a 1. Si es así, devolvemos n porque los dos primeros términos de la secuencia de Fibonacci son 0 y 1
  if (n <= 1) {
      return n;
  }
  // Si n es mayor que 1, entonces calculamos el n-ésimo término de la secuencia de Fibonacci como la suma del (n-1)-ésimo y (n-2)-ésimo términos. Esto se hace llamando a la función nFibonacci(n - 1) y nFibonacci(n - 2)
  // La función nFibonacci(n - 1) y nFibonacci(n - 2) a su vez llamarán a nFibonacci(n - 2), nFibonacci(n - 3), y así sucesivamente, hasta que n sea 0 o 1.
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

/*
//Manera iterativa
function nFibonacci(n) {
  let result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result[n]
}
*/
/*

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.items = []
}
Queue.prototype.enqueue = function (element) {
  // Agrega un elemento al final de la cola
  this.items.push(element)
}

Queue.prototype.dequeue = function () {
  // Remueve el primer elemento de la cola
  if (this.isEmpty()) return undefined
  return this.items.shift()
}

Queue.prototype.isEmpty = function () {
  // Verifica si la cola está vacía
  return this.items.length == 0
}

Queue.prototype.size = function () {
  // Retorna el tamaño de la cola
  return this.items.length
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
}
