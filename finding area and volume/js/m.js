// สูตรการหาปริมาตรทรงกรวย 
// RUNFILE: node m.js

const input = require('prompt-sync')()
console.log("การหาปริมาตรทรงกรวย ")
let radius // รัศมี
let high // สูง
const calculate = (radius2, result) => {
    radius = input("รัศมี = ")
    high = input("สูง = ")
    radius2 = Math.pow(radius, 2)
    result = 1 / 3 * Math.PI * (radius2 * high)
    return Math.round(result)
}
console.log(calculate())
