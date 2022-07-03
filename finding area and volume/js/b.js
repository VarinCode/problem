// สูตรการหาพื้นที่สี่เหลี่ยมผืนผ้า
// RUNFILE: node b.js

const input = require('prompt-sync')()
console.log("การหาพื้นที่สี่เหลี่ยมผืนผ้า")
let wide = input("กว้าง : ") // กว้าง
let long = input("ยาว : ") // ยาว
let result = wide * long
console.log(result)
