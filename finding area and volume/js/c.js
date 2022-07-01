// สูตรการหาพื้นที่สามเหลี่ยม
// RUNFILE: node c.js

const promptsync = require('prompt-sync')()
console.log("การหาพื้นที่สามเหลี่ยม")
let base = promptsync("ฐาน :") // ฐาน 
let height = promptsync("สูง : ") // สูง
let result = 1 / 2 * base * height
console.log(result)