// @flow strict

declare function dissoc<C: Object,K: string,T: Object>(K, T):  $Rest<T, $Exact<C>>

const dissocd1 = dissoc<{'b': any},_,_>("b", { a: 1, b: 2 });

dissocd1.a // works
// $FlowFixMe breaks as it should
dissocd1.b

const dissocd2 = dissoc("b", { a: 1, b: 2 });
dissocd2.a // Works.
dissocd2.b // Also works because dissocd2 is any.
dissocd2.fooBarBazz // Flow just lets anything happen. Seriously?
const thing = dissocd2('foo') // Once it's any, anything goes. Get it?
thing()()()()()()() // This is why we can't have nice things.
