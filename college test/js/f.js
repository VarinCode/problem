// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 100 ตัวและมะเขือเทศ 500 ผล โรงงานจะผลิดปลากระป๋องไดทั้งหมด
// กี่กระป๋อง
// RUNFILE: node f.js

var fish = 3
var tomato = 2
var cannedfish = 0

function manufacture() {
    if (fish == 3 && tomato == 2) {
        while (fish <= 100 && tomato <= 500) {
            fish += 3
            tomato += 2
                ++cannedfish
        }
        console.log(cannedfish);
    } else {
        console.log("วัตถุดิบไม่พอ");
    }
}
manufacture()

// output: 33