
// function divisible(n) {
//     for(let i = 1; i<=n; i++) {
//         if(i % 5 == 0){
//             console.log(i);
            
//         } 
//     }
// }
// let n = parseInt(prompt('Nhập số'));
// divisible(n)



// function prinIsoscelesTriangle(n,character) {
//     for(let i =1; i<=n; i++){
//         let line = "";
//         // * for vẽ dấu cách
//         for (let k=0; k<n-i; k++) {
//             line+= "_";
//         }

//         //for vẽ dấu *
//         for (let j = 0;j < 2 * i -1;j++) {
//             line += character;
//             console.log(line);
            
//         }
//     }
// }

// prinIsoscelesTriangle(5,'*')




// viết hàm cửu chương
// function printMultiplicationTable() {
//     for(let i = 1; i<=10; i++) {
//         for(let j = 1; j<=10; j++){
//             console.log({i,j});
//             console.log(`${i}*${j}=${i*j}`);
//         }
//         console.log("_____");
        
//     }
// }
// printMultiplicationTable()

let i = 100;
do {
    console.log(i);
    i++
} while(i<10)