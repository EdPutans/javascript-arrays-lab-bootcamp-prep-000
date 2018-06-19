
kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
 return kittens.push(name)
}

function destructivelyPrependKitten  (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function appendKitten(name){
  var one = kittens.push(name)
  return one
}
function prependKitten(name){
  var two = kittens.unshift(name)
  return two
}

function removeLastKitten (){
  var three = kittens.pop()
  return three
}

function removeFirstKitten(){
  var four=kittens.shift()
  return four
}
