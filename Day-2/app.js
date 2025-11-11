const math = require('./mathUtils')
const _ = require('lodash');

console.log("Addition: ", math.add(18, 45));
console.log("Subtraction: ", math.sub(18, 6));
console.log("Multiplication: ", math.multiply(18, 2));
console.log("Division: ", math.divide(18, 6));

const arr = [1,1,2,2,3,3,4,4,5,5];

console.log("Uniq with lodash: ", _.uniq(arr));
console.log("Groupby with lodash: ", _.groupBy(
    [
        {id: 1, city: 'Rajkot'},{id: 2, city: 'Bhuj'}, {id: 3, city: 'Surat'}
    ], 'city'
));

