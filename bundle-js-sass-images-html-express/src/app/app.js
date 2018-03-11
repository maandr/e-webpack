import "../assets/sass/main.scss"
import Image from "../assets/images/logo.svg"

const Math = require("../libs/lib")

const x = 20
const y = 10

console.log(x + " + " + y + " = " + Math.add(x, y))
console.log(x + " - " + y + " = " + Math.subtract(x, y))
console.log(x + " * " + y + " = " + Math.multiply(x, y))
console.log(x + " / " + y + " = " + Math.divide(x, y))

console.log("Logo: " + Image)