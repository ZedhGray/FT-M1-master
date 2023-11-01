//Recursion:
function palindromo(string) {
  let resultStr = string.toLowerCase().split()
  if (resultStr.length === 0 || resultStr.length === 1) {
    return true
  }
  if (resultStr[0] === resultStr[resultStr.length - 1]) {
    resultStr.pop()
    resultStr.shift()
    console.log(resultStr)
    let k = resultStr.join('')
    return palindromo(k)
  }
  return false
  //return palindromo(string + 1)
  //return  trie || false
}
console.log(palindromo('hola'))

//CLOSURE // Molde Plantillas - Receta //Funcion que retorna otra funcion
function codeInstruccion() {
  const lista = []
  const createList = function (obj) {
    let exist = false
    let iObj
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].title === obj.title) {
        exist = true
        iObj = i
      }
    }
    if (exist) {
      lista[iObj].description.push(obj.description)
    } else {
      lista.push({ ...obj, description: [obj.description] })
    }
    return lista
  }
  return createList
}

const cod = codeInstruccion()

//Clases constructoras - estructuas de datos

//STACK

//Lista enlazada

//TREE
