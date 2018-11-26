// @flow strict

try {
  throw 5
}
// Caught exceptions are of "any" type
catch(e) {
  console.log(e.toUpperCase())
  e.doWhateverIWant()
}
