// สูตรการหาพื้นที่สี่เหลี่ยมรูปว่าว
// RUNFILE: node f.js

const input = require('prompt-sync')()
const kite_figure = {
    log: console.log("การหาพื้นที่สี่เหลี่ยมรูปว่าว"),
    cal: function(The_product_of_the_diagonals, value) {
        value = input(The_product_of_the_diagonals + " = ") // ผลคูณของเส้นทแยงมุม
        return 1 / 2 * value
    }
}
console.log(kite_figure.cal("ผลคูณของเส้นทแยงมุม"))
