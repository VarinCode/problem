// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 520 ตัวและมะเขือเทศ 333 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง
// RUNFILE: node c.js

var fish = 3
var tomato = 2
var cannedfish = 1

function manufacture() {
    if (fish == 3 && tomato == 2) {
        while (fish < 520 && tomato < 333) {
            fish += 3
            tomato += 2
                ++cannedfish
        }
        console.log(Math.round(cannedfish));
    } else {
        console.log("วัตถุดิบไม่พอ");
    }
}
manufacture()

// output: 167