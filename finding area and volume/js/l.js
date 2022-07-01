// สูตรการหาปริมาตรทรงกระบอก
// RUNFILE: node l.js

const promptsync = require('prompt-sync')()
console.log("การหาปริมาตรทรงกระบอก")
let PI = 22 / 7 // พาย
let radius = promptsync("รํศมี = ") ** 2 // รัศมีกำลัง2
let high = promptsync("สูง = ") // สูง
console.log(Math.round(PI * radius * high))