// สูตรการหาพื้นที่สี่เหลี่ยมด้านขนาน
// RUNFILE: node e.js

const promptsync = require('prompt-sync')()
var base = "ฐาน" // ฐาน
var height = "สูง" // สูง
var baseXheight = [base, height]
cal = () => {
    console.log("การหาพื้นที่สี่เหลี่ยมด้านขนาน")
    let use1 = promptsync(baseXheight[0] + " = ")
    let use2 = promptsync(baseXheight[1] + " = ")
    return use1 * use2
}

console.log(cal())