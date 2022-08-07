// จากข้อ 7 ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 600 ตัวและมะเขือเทศ 200 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมดกี่
// กระป๋อง และจะมีวัตถุดิบแต่ละอย่างคงเหลือเท่าใดบ้าง
// RUNFILE: node h.js

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
        console.log("ผลิดปลากระป๋องได้ทั้งหมด " + cannedfish);
        console.log(`ปลาเหลืออยู่ ${fish} ตัว`); // (100 * 3),(300 / 3)
        // มะเขือเทศใช้หมด
    } else {
        console.log("วัตถุดิบไม่พอ");
    }
}
manufacture()

// output1: 100
// output2: 300