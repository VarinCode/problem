// สูตรการหาปริมาตรปริซึม
// RUNFILE: node n.js

const input = require('prompt-sync')()
console.log("การหาปริมาตรปริซึม")
function calculate(base_area, high) {
    base_area = input("พื้นที่ฐาน = ") // พื้นที่ฐาน
    high = input("สูง = ") // สุง
    return base_area * high
}
console.log(calculate())
