// สูตรการหาปริมาตรทรงกลม
// RUNFILE: node k.js

const input = require('prompt-sync')()
console.log("การหาปริมาตรทรงกลม")
const calculate = (radius, result, pi) => {
    radius = input("รัศมี = ") // รัศมี
    pi = Math.PI * (radius ** 3) // พาย
    result = 4 / 3 * pi
    return Math.round(result)
}
console.log(calculate())
