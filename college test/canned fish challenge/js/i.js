// จากข้อ 7 ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 520 ตัวและมะเขือเทศ 333 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมดกี่
// กระป๋อง และจะมีวัตถุดิบแต่ละอย่างคงเหลือเท่าใดบ้าง
// RUNFILE: node i.js

function manufacture(fish, tomato, cannedfish = 0) { // 1
    if (fish == 3 && tomato == 2 || !cannedfish == null) {
        while (fish <= 520 && tomato <= 333) { // < && <
            fish += 3
            tomato += 2
                ++cannedfish
        }
        console.log("ผลิดปลากระป๋องได้ทั้งหมด " + cannedfish);
        console.log(`ปลาเหลืออยู่ ${fish-3} ตัว`); // (166 * 3),(498 / 3)
        console.log(`มะเขือเทศเหลืออยู่ ${tomato-2} ตัว`); // (166 * 2),(498 / 2)
    } else {
        console.log("วัตถุดิบไม่พอ");
    }
}
manufacture(3, 2)

// output1: 166
// output2: 498
// output3: 332