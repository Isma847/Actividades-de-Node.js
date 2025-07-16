const os = require('node:os')
console.log('Memoria libre:' + os.freemem() + ' bytes')
var v = []
for (var i=0; i<1000000; i++) v.push(i);
console.log("Nueva memoria libre: " + os.freemem())