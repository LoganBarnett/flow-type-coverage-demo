// @flow strict

type Obj1 = {
  type: '1',
  bar: bool,
}
type Obj2 = {
  type: '2',
  baz: number,
}
export type Obj =
  | Obj1
  | Obj2
declare function getObj(): Obj

const obj = getObj()

if(obj.type == '3') {
  // $FlowFixMe this fails as expected.
  obj.baz
}
else {
}

switch(obj.type) {
case '3':
  // Here obj simply loses its type information, since we don't know what '3'
  // is in the scheme of type refinement. Although it breaks properly for 'if'
  // above.
  obj.baz
  break
default:
  obj
}
