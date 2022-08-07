// สูตรการหาปริมาตรทรงสี่เหลี่ยมมุมฉาก
// RUNFILE: node j.js

const promptsync = require('prompt-sync')()
cal()
function cal(result) {
    console.log("การหาปริมาตรทรงสี่เหลี่ยมมุมฉาก")
    let wide = promptsync("กว้าง   =  ") // กว้าง
    let long = promptsync("ยาว     =  ") // ยาว
    let high = promptsync("สูง     =  ") // สูง
    let value = [wide * long * high]
    value.map((total) => {
        result = total
        return result
    })
    a = () => {
        console.log(result)
    }
}
setTimeout(a, 3000)