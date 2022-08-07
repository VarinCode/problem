// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 900 ตัวและมะเขือเทศ 100 ผล โรงงานจะผลิดปลากระป๋องไดทั้งหมด
// กี่กระป๋อง
// RUNFILE: node e.js

var fish = 3
var tomato = 2
var cannedfish = 0

function manufacture() {
    if (fish === 3 && tomato === 2 || !cannedfish == null) {
        while (fish <= 900 && tomato <= 100) {
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

// output: 50