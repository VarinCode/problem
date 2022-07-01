// สูตรการหาปริมาตรทรงกรวย 
// RUNFILE: node m.js

const promptsync = require('prompt-sync')()
console.log("การหาปริมาตรทรงกรวย ")
var radius // รัศมี
var high // สูง
cal = (radius2, result) => {
    radius = promptsync("รัศมี = ")
    high = promptsync("สูง = ")
    radius2 = Math.pow(radius, 2)
    result = 1 / 3 * Math.PI * (radius2 * high)
    return Math.round(result)
}
console.log(cal())