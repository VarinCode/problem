// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 600 ตัวและมะเขือเทศ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง
// RUNFILE: ts-node b.ts

class Manufacture{
    fish:any
    tomato:any
    cannedfish:any
        public constructor(fish:number = 600 , tomato:number = 200, cannedfish:number = 1 ){
            this.fish = fish
            this.tomato = tomato
            this.cannedfish = cannedfish
        while(this.fish > 3 && this.tomato >2){
            this.fish -= 3
            this.tomato -=2
            this.cannedfish ++
        }
        console.log(this.cannedfish)
    }
}
const manufacture1 = new Manufacture()

// output: 100