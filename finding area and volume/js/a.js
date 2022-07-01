// สูตรการหาพื้นที่สี่เหลี่ยมจัตุรัส 
// RUNFILE: node a.js

const promptsync = require('prompt-sync')();
cal = (side, The_product_of_the_diagonal) => {
    console.log("การหาพื้นที่สี่เหลี่ยมจัตุรัสโปรดเลือกสูตรต่อไปนี้ \n 1.) พิมพ์ตัวเลือกที่ (a) เพื่อใช้สูตร ด้าน x ด้าน\n 2.) พิมพ์ตัวเลือกที่ (b) เพื่อใช้สูตร 1/2 x ผลคูณของเส้นทแยงมุม\n");
    var use = promptsync("  =  ")
    var result = null
    if (use == "a") {
        side = promptsync('ด้าน : '); // ด้าน
        result = side ** 2
        console.log(result)

    } else if (use == "b") {
        The_product_of_the_diagonal = promptsync('ผลคูณของเส้นทแยงมุม : '); // ผลคูณของเส้นทแยงมุม
        result = 1 / 2 * The_product_of_the_diagonal
        console.log(result)

    } else {
        console.error("ใส่ข้อมูลให้ถูกต้อง !!!")
    }
}
cal()