// 2. จงเขียนโปรแกรมเพื่อทำการสร้างอาร์เรย์ 2มิติขนาด 3 x 4 เพื่อทำการเก็บค่าตัวเลข
// จำนวนเต็ม 12 จำนวน โดยใช้คำสั่ง for และทำการรับค่าตัวเลขทางแป้นพิมพ์

const input = require('prompt-sync')();
let Matrix_3X4 = [
    [, , , , ],
    [, , , , ],
    [, , , , ]
]

for (let i = 0; Matrix_3X4[0].length > i; ++i) {
    let num1_4 = i + 1
    Matrix_3X4[0][i] = Number.parseInt((input(`เลขตัวที่ ${num1_4} = `)));
    if (i == 3) {
        for (let j = 0; Matrix_3X4[1].length > j; ++j) {
            let num5_8 = j + 5
            Matrix_3X4[1][j] = Number.parseInt((input(`เลขตัวที่ ${num5_8} = `)));
            if (j == 3) {
                for (let k = 0; Matrix_3X4[2].length > k; ++k) {
                    let num9_12 = k + 9
                    Matrix_3X4[2][k] = Number.parseInt((input(`เลขตัวที่ ${num9_12} = `)));
                }
            }
        }
    }
}
console.log("\n");
Matrix_3X4.map(i => console.log(i))