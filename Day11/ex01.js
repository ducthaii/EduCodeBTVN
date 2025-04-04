// Mảng
// const arr1 = ["Quynh Anh","Han","Thai"];

// console.log(typeof arr1);

// console.log(arr1);

// console.log(arr1.length);

// Các phương thức tác động đến độ dài của mảng
/**
 * push, pop, shift, unshift
 * includes, indexOf, reverse, flat
 * slice, splice
 */

// const arr1 = ["Quynh Anh","Han","Thai"];
// const newArr = arr1.pop()
// console.log(newArr);
// console.log(arr1);


/**
 * pop()
 * -Xóa 1 phần tử ở cuối mảng
 * Thay đổi mảng gốc
 * - Trả về phần tử bị xóa
 */

/**
 * push()
 * Thêm một hoặc nhều phần tử ở cuối mảng
 * THay đổi mảng gốc
 * 
 */

/**
 * shift()
 * 
 */

/**
 * unshift()
 * 
 * 
 */

// const newArr2 = arr1.push('Jack')
// console.log(newArr2);
// console.log(arr1);

// const newArr3 = arr1.shift()
// console.log(arr1);


const arr = [1,2,5,7,9,66,88,99];
// Lọc mảng ban đầu ra thành 2 mảng, 1 mảng số chẵn, 1 mảng số lẻ
let soLe = [];
let soChan = [];
for(let i = 0; i<arr.length; i++) {
    if(arr[i] % 2 == 0) {
        soChan.push(arr[i])
        console.log("Mảng số chẵn",soChan);
    } else {
        soLe.push(arr[i])
        console.log("Mảng số lẻ",soLe);
        
    }
}

// Làm sạch các giá trị falsy ở mảng arr2 và đưa vào mảng mới newArr2
// const arr2 = ["Hoang","Donal Trumb","",null,undefined,"Dong","Huy",NaN,0,10,true]
// let newArr2 = [];
// for(let i = 0; i<arr2.length; i++) {
//     if(arr2[i]) {
//         newArr2.push(arr2[i])
        
//     }
// }
// console.log(newArr2);





