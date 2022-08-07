// 1. จงเขียน โปรแกรมทำการรับค่าตัวเลขจำนวนเต็มทางแป้นพิมพ์ 10 จำนวนไปเก็บในอาร์เรย์จากนั้นให้
// โปรแกรมคำนวณหาค่าผลรวมและค่าเฉลี่ยของตัวเลขทั้งหมดคำสั่ง

let detail = ['\tโปรแกรมคำนวณหาค่าผลรวม',
    ' พิมพ์ (a) - หาผลรวมจำนวนเต็ม 10 จำนวน',
    ' พิมพ์ (b) - หาค่าเฉลี่ยตัวเลขทั้งหมด',
    ' พิมพ์ (c) - หาทั้งสองอย่าง'
].forEach(msg => console.log(msg))

const input = require('prompt-sync')();
const ask = input(">>> ")
if (true) {
    class summation {
        static process = (empty = [], num, arrange, result = 0) => {
            for (let i = 1; i <= 10; ++i) {
                arrange = `${i}.)   `
                num = input(arrange + "")
                empty.push(num)
                const repository = empty.map(Number)
                result += repository[i - 1]
            }
            let case_a = `ผลรวมทั้งหมดคือ = ${Number.parseInt(result)}`
            let case_b = `ค่าเฉลี่ยของผลรวมทั้งหมดคือ = ${result / 10} `
            let case_c = `\n ${case_a}\n ${case_b}`

            if (ask === "a".toUpperCase() || ask === "a".toLowerCase()) {
                return case_a
            } else if (ask === "b".toUpperCase() || ask === "b".toLowerCase()) {
                return case_b
            } else if (ask === "c".toUpperCase() || ask === "c".toLowerCase()) {
                return case_c
            } else {
                return Error
            }
        }
    }
    console.log(summation.process());
}