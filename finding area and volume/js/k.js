// สูตรการหาปริมาตรทรงกลม
// RUNFILE: node k.js

const promptsync = require('prompt-sync')()
console.log("การหาปริมาตรทรงกลม")
cal = (radius, result, pi) => {
    radius = promptsync("รัศมี = ") // รัศมี
    pi = Math.PI * (radius ** 3) // พาย
    result = 4 / 3 * pi
    return Math.round(result)
}
console.log(cal())