// จากข้อหนึ่ง จงคำานวณค่าใช้จ่ายทั้งหมดต่อเดือนระหว่างผู้ใช้บริการ C และ D โดยที่ทั้ง C และ D ต่างก็ใช้บริการ 
// 100 ชั่วโมงต่อเดือนที่ร้านทั้งคู่ โดยที่ C ไม่เป็นสมาชิก และ D เป็นสมาชิก (ค่าใช้จ่ายทั้งหมดของ D ต้องรวมค่า
// สมาชิกด้วย) และสรุปว่าใครเสียค่าใช้จ่ายมากกว่ากัน
// RUNFILE: node p.js

let membership = 100 % 10
let hour = 1
let charge_c = 15
let charge_d = 15

// c , d
let c = 100
let d = 100

while (hour < c && hour < d) {
    hour++
    charge_c += 15
    charge_d += 15
}
console.log(charge_c);
console.log(charge_d + membership);

// output1: 1500
// output2: 1500