// const sumOf = function(list) {
//     // Base case
//     if (list.length === 1) {
//         return list[0];
//     }
//     // General case
//     return list[0] + sumOf(list.slice(1));

// }

let lst = [2,4,6,8,10];
console.log(sumOf(lst));

//Drill 1. Counting Sheep
function countSheep(numOfSheep) {
    for (let i= numOfSheep; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log('All sheep jumped over the fence')
}
countSheep(3);
