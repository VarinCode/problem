// สูตรการหาพื้นที่สามเหลี่ยม
// RUNFILE: node c.js

const input = require('prompt-sync')()
console.log("การหาพื้นที่สามเหลี่ยม")
let base = input("ฐาน :") // ฐาน 
let height = input("สูง : ") // สูง
let result = 1 / 2 * base * height
console.log(result)
