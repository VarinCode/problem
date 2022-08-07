// ปลากระป๋องยี่ห้อหนึ่งใช้ปลาซูาร์ดีนสามตัวและมะเขือเทศสองผลเพื่อผลิตปลากระป๋องหนึ่งกระป๋อง หากโรงงาน
// ผลิตมีปลาซูาร์ดีนอยู่ 300 ตัวและมะเขือเทศอยู่ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมดกี่กระป๋อง
// RUNFILE: node a.js

manufacture = (fish, tomato) => {
    for (cannedfish = 0; fish <= 300 && tomato <= 200;) {
        fish += 3
        tomato += 2
            ++cannedfish
    }
    console.log(cannedfish);
}
manufacture(3, 2)

// output: 100