// ร้านอินเตอร์เน็ตคาเฟเร้านหนึ่งคิดค่าใช้บริการ 15 บาทต่อชั่วโมง จงคำานวณค่าใช้จ่ายของลูกค้าที่ใช้บริการเป็นเวลา
// 100 ชั่วโมง
// RUNFILE: node n.js

var hour = 1
let charge = 15
while (hour < 100) {
    hour++
    charge += 15
}
console.log(charge + " บาท");

// output: 1500