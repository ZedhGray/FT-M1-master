//El codigo debe retornar un obj Laberinto resuelto con un "[*]" en cada posicion que paso para resolverse

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
function dfs(lab, init, finish, visited, path = []) {
  if (init.array === finish.array && init.pos === finish.pos) {
    return path
  }
  visited[init.array][init.pos] = true
  if (lab[init.array][init.pos] === '') {
    lab[init.array][init.pos] = '[*]'
  }
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
function generateVisited(lab) {
  const visited = new Array(Object.keys(lab).length)

  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(lab[i].length).fill(false)
  }

  return visited
}

function lab(labels, startlab, finishlab) {
  let visited = generateVisited(labels)
  let route = dfs(labels, startlab, finishlab, visited)
  //Concatenamos el valor inicial al resultado de cb
  route.unshift(startlab)
  //Creamos la copy
  let labelCopy = JSON.parse(JSON.stringify(labels))

  for (let arrayI in labelCopy) {
    for (let posI in labelCopy[arrayI]) {
      if (!route.some((step) => step.array === arrayI && step.pos === posI)) {
        labelCopy[arrayI][posI] = '___'
      }
    }
  }

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

//console.log(lab(labWayZ, initLabZ, finishLabZ))
