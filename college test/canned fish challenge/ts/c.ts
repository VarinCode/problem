// จากข้อหนึ่ง ถ้าหากโรงงานมีปลาซูาร์ดีนอยู่ 520 ตัวและมะเขือเทศ 333 ผล โรงงานจะผลิดปลากระป๋องได้ทั้งหมด
// กี่กระป๋อง
// RUNFILE: ts-node c.ts

class cal {
    private fish:number = 3
    private tomato:number = 2
    private cannedfish:number = 0
        manufacture = ()=>{
            while(this.fish < 520 && this.tomato < 333){
                this.fish +=3
                this.tomato +=2
                this.cannedfish++
            }
            console.log(this.cannedfish)
        }
}
const s = new cal()
s.manufacture()

// output: 166
