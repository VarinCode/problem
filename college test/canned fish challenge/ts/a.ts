// ปลากระป๋องยี่ห้อหนึ่งใช้ปลาซูาร์ดีนสามตัวและมะเขือเทศสองผลเพื่อผลิตปลากระป๋องหนึ่งกระป๋อง หากโรงงาน
// ผลิตมีปลาซูาร์ดีนอยู่ 300 ตัวและมะเขือเทศอยู่ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมดกี่กระป๋อง
// RUNFILE: ts-node a.ts

class Manufacture {
    public cannedfish:number = 1
    public fish:number = 300
    public tomato:number = 300
}
const manufacture  = new Manufacture()
    while(manufacture.fish > 3 && manufacture.tomato > 3) {
    manufacture.fish -=3
    manufacture.tomato -=3
            manufacture.cannedfish++
    }
console.log(manufacture.cannedfish)

// output: 100

