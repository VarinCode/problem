// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 600 ตัวและมะเขือเทศ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง
// RUNFILE: node b.js

var fish = 3
var tomato = 2
var cannedfish = 1

function manufacture() {
    if (fish == 3 && tomato == 2) {
        while (fish < 600 && tomato < 200) {
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

// output: 100