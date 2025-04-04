// const arr = ["Apple", "Orange", "Banana", "Kiwi"] ;

// console.log(arr.includes("Kiwi",2));

/**
 * Tạo mảng đảo ngược của mảng arr(không dùng reverse)
 */
// let arrReversed =[]
// const arr = [1,2,3,4];
// for(let i = 0; i<arr.length; i++) {
//     arrNew.unshift(arr[i])
    
// }
// console.log(arrNew);


// for(let i = 0; i<arr.length / 2; i++){
// // Cách 1
// let b = arr[i];
// arr[i] = arr[arr.length-1-i];
// arr[arr.length-1-i] = b;

// // Cách 2:
// arrReversed[i] = arr[arr.length-1-i];
// arrReversed[arr.length-1-i] = arr[i]
// }
// console.log(arrReversed);
// console.log(arr);

/**
 * concat, join, toString
 */

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr = arr1.concat(arr2);

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

const arr = [1,2,3];

console.log(arr.join());
console.log(arr.join("-"));
console.log(arr.join("true"));
console.log(arr.join("[]"));




