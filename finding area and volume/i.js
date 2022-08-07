// สูตรการหาปริมาตรทรงลูกบาศก์
// RUNFILE: node i.js

const promptsync = require('prompt-sync')()
console.log("การหาปริมาตรทรงลูกบาศก์")
var side = promptsync("ด้าน = ") // ด้าน
function a() {
    console.log(Math.pow(side, 3))
}
setTimeout(a, 3200)