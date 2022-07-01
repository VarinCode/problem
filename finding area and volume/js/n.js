// สูตรการหาปริมาตรปริซึม
// RUNFILE: node n.js

const promptsync = require('prompt-sync')()
console.log("การหาปริมาตรปริซึม")
function cal(base_area, high) {
    base_area = promptsync("พื้นที่ฐาน = ") // พื้นที่ฐาน
    high = promptsync("สูง = ") // สุง
    return base_area * high
}
console.log(cal())