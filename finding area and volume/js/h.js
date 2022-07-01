// สูตรการหาพื้นที่วงกลม
// RUNFILE: node h.js

const promptsync = require('prompt-sync')()
console.log("การหาพื้นที่วงกลม")
const radius = promptsync("รัศมี = ") // รัศมี
console.log(Math.PI * (radius ** 2))

/*  ไม่เอาทศนิยม

let PI = Math.PI * (radius ** 2)
console.log(Math.round(PI)); 

*/