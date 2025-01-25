# Node.js HTTP Server Empty Response Bug

This repository demonstrates a common error in Node.js HTTP servers where the response is sent before all the data has been written, resulting in an empty or incomplete response.  The `res.end()` method is called prematurely, before `res.write()` is executed.

## Bug

The `bug.js` file contains the problematic code. The server attempts to send 'Hello World!' but `res.end()` is called before `res.write()`, thus the client receives nothing. 

## Solution

The `bugSolution.js` file provides the corrected code where the `res.end()` call is moved after `res.write()`, ensuring the complete message is sent.