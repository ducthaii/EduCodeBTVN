const arr = ["Apple", "Orange", "Banana", "Kiwi"] ;

/** 
 * Tìm và in ra trái cây có tên dài nhất, tên ngắn nhất
*/

let short = arr[0];
let long = arr[0];

for(i= 0; i<arr.length; i++) {
    if(long.length<arr[i].length) {
        short = arr[i]
    }
    if(short.length>arr[i].length) {
        long = arr[i]
    }
}

console.log(short);
console.log(long);

