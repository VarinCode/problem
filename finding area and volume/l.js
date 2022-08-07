// สูตรการหาปริมาตรทรงกระบอก
// RUNFILE: node l.js

const input = require('prompt-sync')()
console.log("การหาปริมาตรทรงกระบอก")
let PI = 22 / 7 // พาย
let radius = input("รํศมี = ") ** 2 // รัศมีกำลัง2
let high = input("สูง = ") // สูง
console.log(Math.round(PI * radius * high))
