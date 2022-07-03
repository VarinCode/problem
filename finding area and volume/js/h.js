// สูตรการหาพื้นที่วงกลม
// RUNFILE: node h.js

const input = require('prompt-sync')()
console.log("การหาพื้นที่วงกลม")
let radius = input("รัศมี = ") // รัศมี
console.log(Math.PI * (radius ** 2))

/*  ไม่เอาทศนิยม

let PI = Math.PI * (radius ** 2)
console.log(Math.round(PI)); 

*/
