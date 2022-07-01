// สูตรการหาพื้นที่สี่เหลี่ยมผืนผ้า
// RUNFILE: node b.js

const promptsync = require('prompt-sync')()
console.log("การหาพื้นที่สี่เหลี่ยมผืนผ้า")
let wide = promptsync("กว้าง : ") // กว้าง
let long = promptsync("ยาว : ") // ยาว
let result = wide * long
console.log(result)