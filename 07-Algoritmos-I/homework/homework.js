'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const array = [] // Creamos un array vacío para almacenar los factores.
  if (num !== 0 || !num) array.push(1) // Agregamos el 1 que es el primer en el que se puede dividir num mientras no sea null o 0
  /**
   La raíz cuadrada se utiliza porque no es necesario comprobar los números mayores que la raíz cuadrada del número, ya que si un número mayor que la raíz cuadrada divide al número, su factor correspondiente será menor que la raíz cuadrada y ya se habrá comprobado en las iteraciones anteriores.
   */

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Iniciamos un bucle for que recorre todos los números desde 2 hasta la raíz cuadrada del número.
    while (num % i === 0) {
      // Mientras el número sea divisible por el factor actual (i).
      array.push(i) // Añadimos el factor al array.
      num /= i // Dividimos el número por el factor.
    }
  }

  if (num > 1) {
    // Si el número restante es mayor que 1.
    array.push(num) // Añadimos el número restante al array.
  }

  return array // Devolvemos el array con los factores.
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  //BS - Compara cada par de elementos adyacentes en una lista y los intercambia si están en el orden incorrecto.
  //Es muy ineficiente, entre mas datos haya mas complejo se vuelve y pesado.
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length
  for (let i = 0; i < len; i++) {
    // Recorremos el array desde el primer elemento hasta el último elemento sin ordenar
    for (let j = 0; j < len - i - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, los intercambiamos
      if (array[j] > array[j + 1]) {
        // Guardamos el elemento actual en una variable temporal
        let follow = array[j]
        // Asignamos el valor del siguiente elemento al elemento actual
        array[j] = array[j + 1]
        // Asignamos el valor de la variable temporal al siguiente elemento
        array[j + 1] = follow
      }
    }
  }
  return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  /*
  El array se divide virtualmente en una parte ordenada y una parte desordenada. Los valores de la parte desordenada se seleccionan y se colocan en la posición correcta en la parte ordenada
  */
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length
  // Recorremos el array desde el segundo elemento hasta el último
  for (let i = 1; i < len; i++) {
    // Guardamos el elemento actual en una variable
    let k = array[i]
    // Inicializamos el índice j en el elemento anterior
    let j = i - 1
    // Mientras j sea mayor o igual a 0 y el elemento en j sea mayor que la clave
    while (j >= 0 && array[j] > k) {
      // Movemos el elemento en j una posición a la derecha
      array[j + 1] = array[j]
      // Decrementamos j
      j = j - 1
    }
    // Insertamos la clave en la posición correcta
    array[j + 1] = k
  }
  return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  /*
  Divide la lista en una parte ordenada y una parte no ordenada. Para cada elemento en la parte no ordenada, encuentra el elemento más pequeño y lo intercambia con el primer elemento de la parte no ordenada
  */
  // Tu código:
  let len = array.length

  // Recorremos el array desde el primer elemento hasta el penúltimo
  for (let i = 0; i < len; i++) {
    // Asumimos que el elemento actual es el más pequeño
    let minI = i
    // Recorremos el array desde el siguiente elemento hasta el último
    for (let j = i + 1; j < len; j++) {
      // Si encontramos un elemento más pequeño, actualizamos minIndex
      if (array[j] < array[minI]) {
        minI = j
      }
    }
    // Si minIndex no es igual a i, significa que hemos encontrado un elemento más pequeño,
    // por lo que intercambiamos el elemento en i con el elemento en minIndex
    if (minI !== i) {
      let k = array[i]
      array[i] = array[minI]
      array[minI] = k
    }
  }
  // Devolvemos el array ordenado
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
}
