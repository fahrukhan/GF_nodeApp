
/* uncoment below for export literal */
var literalExport = require('./literal/calculator.js');
console.log("\n============ this result from module exported by literal ============");
console.log(literalExport);

/* uncoment below for export object */
console.log("\n============  this result from module exported by object  ============");
var objectExport = require('./object/calculator.js');
console.log(objectExport.value
    +objectExport.add
    +objectExport.substract
    +objectExport.multiply
    +objectExport.div);

/* uncoment below for export function */
console.log("\n=========== this result from module exported by function ============");
var funcExport = require('./funct/calculator.js');
funcExport(4,2);

/* uncoment below for export class*/
console.log("\n============= this result from module exported by class =============");
var classExport = require('./class/calculator.js');
var calculator = new classExport(4,2);

console.log(calculator.getValue());
console.log(calculator.add());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.div());
