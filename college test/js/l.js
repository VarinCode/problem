// จากข้อ 7 ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 100 ตัวและมะเขือเทศ 500 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง และจะมีวัตถุดิบแต่ละอย่างคงเหลือเท่าใดบ้าง
// RUNFILE: node l.js

var fish = 3
var tomato = 2
var cannedfish = 1

function manufacture() {
    if (fish == 3 && tomato == 2) {
        while (fish < 100 && tomato < 500) {
            fish += 3
            tomato += 2
                ++cannedfish
        };
        console.log("ผลิดปลากระป๋องได้ทั้งหมด " + cannedfish);
        console.log(`ปลาเหลืออยู่ ${fish}`);
        console.log(`มะเขือเทศเหลืออยู่ ${tomato}`);
    } else {
        console.log("วัตถุดิบไม่พอ");
    }
}
manufacture()

// output1: 34
// output2: 102
// output3: 68