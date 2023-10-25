'use strict'

var sayHello = 'Hello'

function person() {
  var first = 'David'
  var last = 'Shariff'

  function firstName() {
    return first
  }
  function lastName() {
    return last
  }
  alert(sayHello + ' ' + firstName() + ' ' + lastName())
}

function saluda() {
  return 'hi hi hi'
}

function sum(a, b) {
  return a + b
}

saluda()
sum(7, 6)