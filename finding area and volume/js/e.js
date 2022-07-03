// สูตรการหาพื้นที่สี่เหลี่ยมด้านขนาน
// RUNFILE: node e.js

const input = require('prompt-sync')()
let base = "ฐาน" // ฐาน
let height = "สูง" // สูง
let baseXheight = [base, height]
const calculate = (result , $base , $height) => {
    console.log("การหาพื้นที่สี่เหลี่ยมด้านขนาน")
    $base = input(baseXheight[0] + " = ")
    $height = input(baseXheight[1] + " = ")
    result = use1 * use2
    return result
}
console.log(calculate())
