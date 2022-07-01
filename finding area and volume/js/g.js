// สูตรการหาพื้นที่สี่เหลี่ยมด้านไม่เท่า
// RUNFILE: node g.js

const promptsync = require('prompt-sync')()
const cal = function(diagonal, The_sum_of_the_branches, radius, radius2) {
    console.log("การหาพื้นที่สี่เหลี่ยมด้านไม่เท่า")
    radius = promptsync("รัศมี = ") // รัศมี
    radius2 = Math.pow(radius, 2) // รัศมีกำลัง2
    The_sum_of_the_branches = Math.PI * (radius2) // ผลบวกของเส้นกิ่ง
    diagonal = promptsync("เส้นทแยงมุม = ") // เส้นทแยงมุม 
    let result = 1 / 2 * diagonal * The_sum_of_the_branches // ปัดค่าขึ้น / ลง
    console.log(Math.round(result))
}

cal()