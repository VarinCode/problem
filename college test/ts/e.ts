// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 900 ตัวและมะเขือเทศ 100 ผล โรงงานจะผลิดปลากระป๋องไดทั้งหมด
// กี่กระป๋อง
// RUNFILE: ts-node e.ts

class cal {
    private fish:number = 3
    private tomato:number = 2
    private cannedfish:number = 0
    manufacture = ()=>{
        while(this.fish < 900 && this.tomato <= 100){
            this.fish +=3
            this.tomato +=2
            this.cannedfish++
        }
        console.log(this.cannedfish)
    } 
}
const s = new cal()
s.manufacture()

// output: 50