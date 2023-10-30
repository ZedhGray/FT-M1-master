'use strict'

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}
//Metodo dinamico insertar
BinarySearchTree.prototype.insert = function (value) {
  if (value >= this.value) {
    if (!this.right) {
      // si la derecha esta vacia (null) inserta el nodo
      this.right = new BinarySearchTree(value)
    } else {
      //Inicia la recursividad
      this.right.insert(value)
    }
  } else {
    //Izquierda
    if (!this.left) {
      // si la izquierda esta vacia (null) inserta el nodo
      this.left = new BinarySearchTree(value)
    } else {
      //Inicia la recursividad
      this.left.insert(value)
    }
  }
}
//Metodo size
BinarySearchTree.prototype.size = function () {
  // Si ambas son distintas de null
  if (!this.left && !this.right) {
    return 1
  }
  //Si la izquierda no es null
  if (!this.left) return 1 + this.right.size()
  //si la derecha no es null
  if (!this.right) return 1 + this.left.size()
  // si ambos son null
  if (this.right && this.left) return 1 + this.left.size() + this.right.size()
}

//Metodo contains
BinarySearchTree.prototype.contains = function (value) {
  //Comprueba si el valor es igual que el dato del nodo actual
  if (value === this.value) return true
  if (value > this.value) {
    //Si no hay nada
    if (!this.right) {
      return false
    } else {
      //Si hay algo a la derecha entramos en recursividad
      return this.right.contains(value)
    }
  } else {
    //Si no hay nada
    if (!this.left) {
      return false
    } else {
      //Si hay algo a la izquierda entramos en recursividad
      return this.left.contains(value)
    }
  }
}
//Metodo DFS
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // Si no se proporciona un orden o el orden es 'in-order'
  if (!order || order === 'in-order') {
    // Realiza una búsqueda en profundidad en orden
    this.left && this.left.depthFirstForEach(cb, order)
    // Llama a la función de callback con el valor del nodo actual
    cb(this.value)
    // Realiza una búsqueda en profundidad en el subárbol derecho
    this.right && this.right.depthFirstForEach(cb, order)
  } 
  // Si el orden es 'post-order'
  else if (order === 'post-order') {
    // Realiza una búsqueda en profundidad en el subárbol izquierdo
    this.left && this.left.depthFirstForEach(cb, order)
    // Realiza una búsqueda en profundidad en el subárbol derecho
    this.right && this.right.depthFirstForEach(cb, order)
    // Llama a la función de callback con el valor del nodo actual
    cb(this.value)
  } 
  // Si el orden es 'pre-order'
  else {
    // Llama a la función de callback con el valor del nodo actual
    cb(this.value)
    // Realiza una búsqueda en profundidad en el subárbol izquierdo
    this.left && this.left.depthFirstForEach(cb, order)
    // Realiza una búsqueda en profundidad en el subárbol derecho
    this.right && this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  //Si tienes algo a la izquierda, pushealo
  if (this.left) {
    array.push(this.left)
  }
  //Si tienes algo a la derecha, pushealo
  if (this.right) {
    array.push(this.right)
  }
  cb(this.value)
  //Aplicamos la recursion si el array es mayor a cero
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
}
