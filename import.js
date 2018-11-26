// @flow strict

// If you import from a file missing the flow annotation, the result is typed as
// any.
import fn from './non-flow.js'
import { a, b, c } from './non-flow.js'

// fn is actually a string.
fn()

// These don't even exist.
a()
b()
c()
