// จงเขียนโปรแกรมคำนวณค่าเรียนพิเศษของ ติวเตอร์คณิตศาสตร์ แห่งหนึ่ง โดย ติวเตอร์แห่งนี้ คิดค่าเรียนเป็นรายชั่วโมง ชั่วโมงละ 350 บาท 
// จ่ายเป็นแบบครั้งต่อครั้ง ให้โปรแกรมมีการรับค่าจำนวนชั่งโมงที่สอนและจำนวนเงินที่จ่าย 
// (มีข้อกำหนดว่า จำนวนเงินที่จ่ายที่กรอกนั้นมากกว่าหรือเท่ากับจำนวนที่จ่ายเสมอ) รูปแบบการทำงานและแสดงผลตามตัวอย่างต่อไปนี้

// ตัวอย่างการทำงาน ครั้งที่ 1

// RUN : ทดสอบด้วยการป้อนจำนวนชั่วโมงที่เรียนเป็น 5 ชั่วโมง และ ชำระเงิน 2000 บาท

// Enter Hour : 5
// Total : 1750
// Pay : 2000
// Change : 250

// ตัวอย่างการทำงาน ครั้งที่ 2

// RUN : ทดสอบด้วยการป้อนจำนวนชั่วโมงที่เรียนเป็น 1 ชั่วโมง และ ชำระเงิน 500 บาท

// Enter Hour : 1
// Total : 350
// Pay : 500
// Change : 150
// RUNFILE: node r.js

const input = require('prompt-sync')()
class tutor {
    hour = input("Enter Hour : ")
    total = 0
    process = (money = 350, repeat) => {
        for (repeat = 0; this.hour > repeat;) {
            repeat++
            this.total += money
        }
    }
    constructor(pay) {
        this.process()
        console.log("Total : " + this.total);
        this.pay = pay = input("Pay : ")
        this.change = this.pay - this.total
        console.log("Change : " + Number(this.change));
    }
}
new tutor()