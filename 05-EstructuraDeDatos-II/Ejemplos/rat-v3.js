//Algoritmo de búsqueda en amplitud
//Verificar donde me puedo mover:
function isValidMove(lab, arrayI, posI) {
  return (
    arrayI >= 0 &&
    arrayI < Object.keys(lab).length &&
    posI >= 0 &&
    posI < lab[arrayI].length &&
    lab[arrayI][posI] !== ''
  )
}

// La función bfs implementa la búsqueda en anchura para encontrar el camino más corto entre el nodo de inicio y el nodo objetivo en un grafo representado por una matriz bidimensional.
function bfs(lab, start, finish) {
  // Genera una matriz de la misma forma que lab, pero llena de false. Esta matriz se utiliza para rastrear los nodos que ya han sido visitados.
  let visited = generateVisited(lab)

  // Inicializa una cola con el nodo de inicio.
  let queue = [start]

  // Inicializa un array vacío que se utilizará para almacenar el camino desde el nodo de inicio hasta el nodo objetivo.
  let path = []

  // Se ejecuta mientras haya nodos en la cola que aún no han sido visitados.
  while (queue.length > 0) {
    // Extrae el primer nodo de la cola.
    let current = queue.shift()

    // Verifica si el nodo actual es el nodo objetivo. Si es así, añade el nodo al camino y devuelve el camino.
    if (current.array === finish.array && current.pos === finish.pos) {
      path.push(current)
      return path
    }

    // Marca el nodo actual como visitado.
    visited[current.array][current.pos] = true

    // Verifica si el nodo actual está vacío. Si es así, lo marca como visitado en la matriz lab.
    if (lab[current.array][current.pos] === '') {
      lab[current.array][current.pos] = '[*]'
    }

    // Define las cuatro direcciones posibles (derecha, abajo, izquierda, arriba) que se pueden tomar desde el nodo actual.
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]

    // Itera sobre cada dirección.
    for (let [d1, d2] of directions) {
      // Calcula las coordenadas del nuevo nodo en la dirección actual.
      const newArrayIndex = current.array + d1
      const newPosIndex = current.pos + d2

      // Verifica si el movimiento al nuevo nodo es válido y si el nuevo nodo no ha sido visitado. Si ambas condiciones son verdaderas, añade el nuevo nodo a la cola y al camino.
      if (
        isValidMove(lab, newArrayIndex, newPosIndex) &&
        !visited[newArrayIndex][newPosIndex]
      ) {
        queue.push({ array: newArrayIndex, pos: newPosIndex })
        path.push({ array: newArrayIndex, pos: newPosIndex })
      }
    }
  }

  // Si después de recorrer todos los nodos en la cola no se ha encontrado el nodo objetivo, la función devuelve null, indicando que no existe un camino desde el nodo de inicio hasta el nodo objetivo.
  return null
}

//Pasar los lab a visited // Lo iba a hacer para mas laberintos pero tenia que poner atencion en clase
function generateVisited(lab) {
  const visited = new Array(Object.keys(lab).length)

  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(lab[i].length).fill(false)
  }

  return visited
}

function lab(labels, startlab, finishlab) {
  let visited = generateVisited(labels)
  let route = bfs(labels, startlab, finishlab, visited)
  //Creamos la copy
  let labelCopy = JSON.parse(JSON.stringify(labels))
  // Marcar todos los demás nodos como '___'
  for (let arrayI in labelCopy) {
    for (let posI in labelCopy[arrayI]) {
      if (!route.some((step) => step.array === arrayI && step.pos === posI)) {
        labelCopy[arrayI][posI] = '___'
      }
    }
  }
  // Marcar solo el camino más corto
  for (let step of route) {
    labelCopy[step.array][step.pos] = '[*]'
  }

  return labelCopy
}

const initLabA = { array: 0, pos: 0 }
const finishLabA = { array: 3, pos: 0 }
const labA = {
  0: [[], [], '', []],
  1: ['', [], [], []],
  2: [[], [], '', []],
  3: [[], '', '', ''],
}
const labWayA = {
  0: [[], [], '', ''],
  1: ['', [], '', ''],
  2: [[], [], '', ''],
  3: [[], '', '', ''],
}
//* Lab Pro
const initLabB = { array: 0, pos: 0 }
const finishLabB = { array: 7, pos: 3 }
const labB = {
  0: [[], [], '', '', '', '', '', ''],
  1: ['', [], [], [], '', [], [], ''],
  2: ['', '', '', [], '', [], '', ''],
  3: ['', '', [], [], [], [], '', ''],
  4: [[], '', [], '', '', [], '', ''],
  5: [[], [], [], [], '', [], [], ''],
  6: [[], '', '', [], '', '', [], []],
  7: ['', '', '', [], '', '', '', ''],
}
const labWayB = {
  0: [[], [], '', '', '', '', '', ''],
  1: ['', [], [], [], '', '', '', ''],
  2: ['', '', '', [], '', '', '', ''],
  3: ['', '', [], [], '', '', '', ''],
  4: ['', '', [], '', '', '', '', ''],
  5: ['', '', [], [], '', '', '', ''],
  6: ['', '', '', [], '', '', '', ''],
  7: ['', '', '', [], '', '', '', ''],
}

const initLabZ = { array: 0, pos: 0 }
const finishLabZ = { array: 7, pos: 3 }
const labWayZ = {
  0: [[], [], [], [], [], [], [], ''],
  1: ['', [], [], [], [], '', [], []],
  2: ['', '', '', '', '', '', [], ''],
  3: [[], [], [], [], [], [], [], []],
  4: [[], '', [], '', '', '', '', []],
  5: [[], [], [], [], '', '', '', []],
  6: ['', '', [], [], [], [], [], []],
  7: ['', '', [], '', '', '', '', ''],
}
const labWayZsolution = {
  0: [[], [], [], [], [], [], [], ''],
  1: ['', '', '', '', '', '', [], ''],
  2: ['', '', '', '', '', '', [], ''],
  3: ['', '', [], [], [], [], [], ''],
  4: ['', '', [], '', '', '', '', ''],
  5: ['', '', [], '', '', '', '', ''],
  6: ['', '', [], '', '', '', '', ''],
  7: ['', '', [], '', '', '', '', ''],
}

console.log(lab(labA, initLabA, finishLabA))
console.log(lab(labWayA, initLabA, finishLabA))
console.log(lab(labB, initLabB, finishLabB))
console.log(lab(labWayB, initLabB, finishLabB))

console.log(lab(labWayZ, initLabZ, finishLabZ))
