// จากข้อ 7 ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 700 ตัวและมะเขือเทศ 500 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง และจะมีวัตถุดิบแต่ละอย่างคงเหลือเท่าใดบ้าง
// RUNFILE: node j.js

class manufacture1 {
    constructor(fish, tomato, cannedfish) {
        this.fish = fish
        this.tomato = tomato
        this.cannedfish = cannedfish
    }
}
const manufacture = new manufacture1(3, 2, 1)

function s() {
    while (manufacture.fish < 700 && manufacture.tomato < 500) {
        manufacture.fish += 3
        manufacture.tomato += 2
        manufacture.cannedfish++
    }
}
s()
console.log(`ผลิดปลากระป๋องได้ทั้งหมด ${manufacture.cannedfish}`);
console.log(`ปลาเหลืออยู่ ${manufacture.fish} `);
console.log(`มะเขือเทศเหลืออยู่ ${manufacture.tomato}`);

// output1: 234
// output2: 762
// output3: 468