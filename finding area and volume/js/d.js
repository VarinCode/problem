// สูตรการหาพื้นที่สี่เหลี่ยมขนมเปียกปูน
// RUNFILE: node d.js

const promptsync = require('prompt-sync')();
var use = promptsync("การหาพื้นที่สี่เหลี่ยมขนมเปียกปูน \n 1.) พิมพ์ตัวเลือกที่ (1) เพื่อใช้สูตร ฐาน x สูง\n 2.) พิมพ์ตัวเลือกที่ (2) เพื่อใช้สูตร 1/2 x ผลคูณของเส้นทแยงมุม\n")
var error = "ผิดพลาด"

switch (use) {
    case "1":
        base = promptsync("ฐาน : ") // ฐาน
        height = promptsync("สูง : ") // สูง
        result = base * height
        console.log(result)
        break
    case "2":
        The_product_of_the_diagonal = promptsync("ผลคูณของเส้นทแยงมุม : ")
        console.log(1 / 2 * The_product_of_the_diagonal)
        break
    default:
        console.log(error)
}