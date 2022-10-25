let num: number[] = [3, 2, 1, 10, 2, 8, 3, 2, 1, 1, 8, 5, 10, 11, 7, 6, 10];
let key: number = 6 
    try {
        console.log(`ลำดับรองสุดท้ายใน array นี้คือเลข ${key}\n`,
        `ค้นหาตำแหน่งสมาชิกลำดับรองสุดท้ายใน array คือลำดับที่  ${num.indexOf(key)} `);
    } catch (err) {
        console.error(err);
    }