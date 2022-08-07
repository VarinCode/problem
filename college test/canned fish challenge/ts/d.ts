// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 700 ตัวและมะเขือเทศ 500 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง
// RUNFILE: ts-node d.ts

class cal {
    private fish:number = 3
    private tomato:number = 2
    private cannedfish:number = 0
    manufacture = ()=>{
        while(this.fish < 700 && this.tomato < 500){
            this.fish +=3
            this.tomato +=2
            this.cannedfish++
        }
        console.log(this.cannedfish)
    }  
}
const s = new cal()
s.manufacture()

// output: 233