// @flow strict

window.fooBarBazz()()()()() // window is typed as "any"...
global.fooBarBazz()()()     // Same for global.
