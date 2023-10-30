'use strict'

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null
  this.tail = null
  this._lenth = 0
}
function Node(value) {
  this.value = value
  this.next = null
}
//Metodo que agrega un nuevo elemento al final de la lista.
LinkedList.prototype.add = function (value) {
  // Crea un nuevo nodo con el valor proporcionado
  const newNode = new Node(value)
  //Miramos dentro de la lista
  let current = this.head
  // Si la lista está vacía (head es null)
  if (!current) {
    // El nuevo nodo se convierte en el head y el tail de la lista
    this.head = newNode
    this.tail = newNode
    return value
  }
  // Si la lista no está vacía
  else {
    // me muevo al final de la lista
    while (current.next) {
      current = current.next
    }
    // El nuevo nodo se agrega al final de la lista y se actualiza el tail para apuntar al nuevo nodo
    current.next = newNode
    //Sumamos 1 al contador del tamaño _length
    this._lenth++
    return value
  }
}

//Metodo que remueve el ultimo nodo de la lista y retorna el valor.
LinkedList.prototype.remove = function () {
  // Si la lista está vacía (head es null), devuelve null
  if (!this.head) return null
  // Inicializa current al head de la lista
  let current = this.head // guardamos el nodo
  //Si solo hay un nodo en la lista
  if (!this.head.next) {
    this.head = null
    this._length-- //
    return current.value
  } else {
    // Mientras current tenga un siguiente nodo
    while (current.next.next) {
      // Aqui va a avanzar hasta el pen-Ultimonext.
      current = current.next
    }
    let value = current.next.value
    current.next = null
    this._lenth--
    return value
  }
}

//Busca un nodo, (cb o value)
// Método search en el prototipo de LinkedList
LinkedList.prototype.search = function (callback) {
  // Inicializa current al head de la lista
  let current = this.head
  // Mientras current no sea null
  while (current) {
    // Si callback es una función y la función callback devuelve true para el valor del nodo actual
    if (typeof callback === 'function' && callback(current.value)) {
      // Devuelve el valor del nodo actual
      return current.value
    }
    // Si callback no es una función y el valor del nodo actual es igual a callback
    else if (
      typeof callback !== 'function' &&
      JSON.stringify(current.value) === JSON.stringify(callback)
    ) {
      // Devuelve el valor del nodo actual
      return current.value
    }
    // Pasa al siguiente nodo en la lista
    current = current.next
  }
  // Si no se encontró ningún nodo que cumpla con la condición, devuelve null
  return null
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
class HashTable {
  // El constructor de la clase HashTable recibe un parámetro opcional 'size' que por defecto es 35.
  // Inicializa la propiedad 'size' con el valor de 'size' y también crea un nuevo arreglo de tamaño 'size' llamado 'table'.
  constructor(numBuckets = 35) {
    this.buckets = []
    this.numBuckets = numBuckets
  }

  // El método 'hash' toma una clave como entrada.
  hash(key) {
    //Verifica que la key sea un string
    if (typeof key !== 'string') {
      throw new TypeError('La key debe ser una cadena.')
    }
    // Inicializa una variable 'hash' en 0
    let hash = 0
    // Itera sobre cada carácter en la clave
    for (let i = 0; i < key.length; i++) {
      // Suma el código Unicode del carácter actual a 'hash'
      hash += key.charCodeAt(i)
    }

    // Devuelve el módulo de 'hash' y el tamaño de la tabla
    // Esto asegura que el índice esté dentro del rango de la tabla
    return hash % this.numBuckets
  }

  // El método 'set' toma una clave y un valor como entrada.

  set(key, value) {
    //Verifica que la key sea un string
    if (typeof key !== 'string') {
      throw new TypeError('La key debe ser una cadena.')
    }
    // toma dos argumentos: key y value. Luego, llama a la función hash en la key proporcionada y almacena el resultado en la constante index.  hash generalmente se utiliza para calcular una posición en la tabla hash a partir de la key proporcionada.
    const index = this.hash(key)
    //toma dos argumentos: key y value. Luego, llama a la función hash en la key proporcionada y almacena el resultado en la constante index. La función hash generalmente se utiliza para calcular una posición en la tabla hash a partir de la key proporcionada.
    if (!this.buckets[index]) {
      this.buckets[index] = []
    }
    //La función set agrega el par key y value a la matriz en la posición calculada en la tabla hash. En este punto, la key y el value están almacenados juntos en un array, lo que permite recuperar el value más tarde utilizando la key
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value
        return
      }
    }
    this.buckets[index].push([key, value])
  }

  // El método 'get' toma una clave como entrada.
  get(key) {
    //Verifica que la key sea un string
    if (typeof key !== 'string') {
      throw new TypeError('La key debe ser una cadena.')
    }
    // Calcula el índice donde se almacenó el par clave-valor utilizando el método 'hash'.
    const index = this.hash(key)
    // Si el índice en la tabla no está vacío, busca el par clave-valor en el arreglo en ese índice.
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        // Si encuentra el par clave-valor, devuelve el valor.
        if (this.buckets[index][i][0] === key) {
          return this.buckets[index][i][1]
        }
      }
    }
    // Si no encuentra el par clave-valor, devuelve 'undefined'.
    return undefined
  }

  // El método 'hasKey' toma una clave como entrada.
  hasKey(key) {
    //Verifica que la key sea un string
    if (typeof key !== 'string') {
      throw new TypeError('La key debe ser una cadena.')
    }
    // Calcula el índice donde se almacenó el par clave-valor utilizando el método 'hash'.
    const index = this.hash(key)
    // Si el índice en la tabla no está vacío, busca el par clave-valor en el arreglo en ese índice.
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          // Si encuentra el par clave-valor, devuelve 'true'.
          return true
        }
      }
    }
    // Si no encuentra el par clave-valor, devuelve 'false'.
    return false
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
}
