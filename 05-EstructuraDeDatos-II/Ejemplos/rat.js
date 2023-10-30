//Respuesta:
//Por donde me puedo mover fn()
//Verificar si puedo llegar al final fn() boolean (DSF algoritmo de búsqueda en profundidad)
//

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

//Busqueda DSF
//Esta función debe tomar el laberinto, la posición inicial, la posición final y una matriz para marcar las posiciones ya visitadas. Si la posición final es alcanzable, Debe devolver un array con el resultado.
function dfs(lab, init, finish, visited, path) {
  if (init.array === finish.array && init.pos === finish.pos) {
    return path
  }
  visited[init.array][init.pos] = true
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ] // derecha, abajo, izquierda, arriba

  for (let [d1, d2] of directions) {
    const newArrayIndex = init.array + d1
    const newPosIndex = init.pos + d2
    if (
      isValidMove(lab, newArrayIndex, newPosIndex) &&
      !visited[newArrayIndex][newPosIndex]
    ) {
      path.push({ array: newArrayIndex, pos: newPosIndex })
      const result = dfs(
        lab,
        { array: newArrayIndex, pos: newPosIndex },
        finish,
        visited,
        path
      )
      if (result) {
        return result
      }
      path.pop()
    }
  }

  return null
}

//Pasar los lab a visited // Lo iba a hacer para mas laberintos pero tenia que poner atencion en clase

const visitedA = {
  0: [false, false, false, false],
  1: [false, false, false, false],
  2: [false, false, false, false],
  3: [false, false, false, false],
}
const visitedWA = {
  0: [false, false, false, false],
  1: [false, false, false, false],
  2: [false, false, false, false],
  3: [false, false, false, false],
}
const visitedB = {
  0: [false, false, false, false, false, false, false, false],
  1: [false, false, false, false, false, false, false, false],
  2: [false, false, false, false, false, false, false, false],
  3: [false, false, false, false, false, false, false, false],
  4: [false, false, false, false, false, false, false, false],
  5: [false, false, false, false, false, false, false, false],
  6: [false, false, false, false, false, false, false, false],
  7: [false, false, false, false, false, false, false, false],
}
const visitedWB = {
  0: [false, false, false, false, false, false, false, false],
  1: [false, false, false, false, false, false, false, false],
  2: [false, false, false, false, false, false, false, false],
  3: [false, false, false, false, false, false, false, false],
  4: [false, false, false, false, false, false, false, false],
  5: [false, false, false, false, false, false, false, false],
  6: [false, false, false, false, false, false, false, false],
  7: [false, false, false, false, false, false, false, false],
}
//* Lab simple
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

console.log(dfs(labA, initLabA, finishLabA, visitedA, (path = []))) // Array del
console.log(dfs(labWayA, initLabA, finishLabA, visitedWA, (path = []))) // Array del resultado
console.log(dfs(labB, initLabB, finishLabB, visitedB, (path = []))) // Array del resultado
console.log(dfs(labB, initLabB, finishLabB, visitedWB, (path = []))) // Array del resultado
