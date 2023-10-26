'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}
/*
//Manera iterativa
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

function nFibonacci(n) {
  let result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result[n]
}
/*
//Manera iterativa
function nFibonacci(n) {
  let a = 0, b = 1;
  //Comprobamos si n es 0
  if (n === 0) {
    return a;
  }
  //Calculamos el siguiente término de la secuencia de Fibonacci como la suma de a y b, y luego actualizamos a y b para que sean los dos últimos términos de la secuencia.
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

*/
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
