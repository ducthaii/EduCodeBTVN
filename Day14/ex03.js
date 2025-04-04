/**
 * 1. Array
 * 2.Object
 */

// const arr1 = [1,2,3]

// const arr2 = [...arr1]

// const arr3 = [].concat(arr1);
// console.log(arr2,arr3);


// flat
// const arr1 = [1,2,3,[4,5,6,[7,8,[9]]]];

// const arrFlat1 = arr1.flat();
// const arrFlat2 = arr1.flat(3);
// const arrFlat3 = arr1.flat(Infinity);

// console.log(arrFlat1);
// console.log(arrFlat2);
// console.log(arrFlat3);

const myArr = [
    [1,2],
    [7,-1],
    [7,9],
    [0,6,[3,4,100]]
]

// Tim giá trị lớn nhất trong mảng myArr
const myArr2 = myArr.flat(Infinity)
console.log(myArr2);
let arr = myArr2[0]
for(let i = 0; i<myArr2.length; i++) {
    if(myArr2[i]> arr) {
        arr = myArr2[i]
    }
}
console.log(arr);


// Viết hàm flat(dee)
function flat(arr,depth = 1) {
    const newArr = [];
    for(let i = 0; i<arr.length; i++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            newArr.push(...flat(arr[i],depth-1));
        } else {
            arr[i] && newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(flat([1,[2,3]],[4,5]));




