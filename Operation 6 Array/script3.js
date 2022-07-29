// 3. จงเขียนโปรแกรมทำการรับค่าตัวเลขจำนวนเต็มใดๆทางแป้นพิมพ์
// จากนั้นให้ทำการสลับค่าตัวเลขโดยให้ตัวเลขที่เก็บอยู่ใน
// ใน num[0] ไปไว้ใน num[1] ตัวเลขที่เก็บอยู่ใน num[1] ไปไว้ใน num[2] 
// และตัวเลขที่เก็บอยู่ใน num[2] ไปไว้ใน num[0]

const input = require('prompt-sync')();

const a = Number(input('- '))
const b = Number(input('- '))
const c = Number(input('- '))
let prototype = [a, b, c];
console.log(prototype);

let item = prototype.pop()
prototype.unshift(item)
console.log(prototype);