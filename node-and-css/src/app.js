import './assets/css/app.css'

const Math = require('./lib')

const x = 20
const y = 10

console.log(x + ' + ' + y + ' = ' + Math.add(x, y))
console.log(x + ' - ' + y + ' = ' + Math.subtract(x, y))
console.log(x + ' * ' + y + ' = ' + Math.multiply(x, y))
console.log(x + ' / ' + y + ' = ' + Math.divide(x, y))