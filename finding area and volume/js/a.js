// สูตรการหาพื้นที่สี่เหลี่ยมจัตุรัส 
// RUNFILE: node a.js

const input = require('prompt-sync')();
const calculate = (side, The_product_of_the_diagonal) => {
    console.log("การหาพื้นที่สี่เหลี่ยมจัตุรัสโปรดเลือกสูตรต่อไปนี้ \n 1.) พิมพ์ตัวเลือกที่ (a) เพื่อใช้สูตร ด้าน x ด้าน\n 2.) พิมพ์ตัวเลือกที่ (b) เพื่อใช้สูตร 1/2 x ผลคูณของเส้นทแยงมุม\n");
    let use = input("  =  ")
    let result = null
    if (use == "a" || use == "A") {
        side = input('ด้าน : '); // ด้าน
        result = side ** 2
        console.log(result)
    } else if (use == "b" || use == "B") {
        The_product_of_the_diagonal = input('ผลคูณของเส้นทแยงมุม : '); // ผลคูณของเส้นทแยงมุม
        result = 1 / 2 * The_product_of_the_diagonal
        console.log(result)
    } else {
        return false
    }
}
calculate()
