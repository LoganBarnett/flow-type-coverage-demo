// @flow

const x = 'string';

if (x instanceof Array) {
  x.bla(); // No error because x is now any.
}


// Adding the type of the instanceof check to the union of the variable allows
// for type refinement to work as expected.
function getErrorReason(e: mixed | Error) {
  if(e instanceof Error) {
    return e.message
  } else {
    return String(e)
  }
}
