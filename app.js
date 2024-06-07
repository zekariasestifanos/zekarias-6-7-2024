console.log('Welcome to Node Tutorial')
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]  
const newitems = _.flattenDeep(items) 
console.log(newitems) 

console.log('hello leb') 
// npx creat-react-app my app  