/**
* Viết một hàm khởi tạo giỏ hàng `Cart` có đầu vào là userID, product(array)
có các tính năng sau:

* Viết phương trình tĩnh `calc()` cho Cart giúp trả về tổng giá trị đơn hàng

* Viết phương trình tĩnh `checkout` cho Cart để xóa toàn bộ sản phẩm
 **/
// const products = [
//     {id:1,name:"tao", price:10, quantity:1},
//     {id:2,name:"bia dau", price:5, quantity:4}
// ]

// function Cart (userID,products) {
//     this.userID = userID;
//     this.products = products;

//     this.calc = function () {
//         // ! for
//         let total = 0
//         for(let i = 0;i<this.products.length; i++) {
//             total += this.products.price * this.products.quantity;
//         }
//         return total;
//     }
// }

// const cartOfHoang = new Cart("123",products);
// console.log(cartOfHoang.calc());

const arr1 = [1,2,6,8,11,5,3,9,7];

/**
 * ! Sắp xếp mảng tăng dần không dùng phương thức sort()
 * QuickSort
 * MergeSort
 * BubbleSort
 */

/**while board */
function quickSort(arr) {
    if(arr.length<=1) {
        return arr;
    }
    let pivot = arr[arr.length-1];
    const left = [];
    const right = [];
    for(let i = 0; i<arr.length-1;i++) {
        // chia de tri
        /**
         *1. So sanh pivot voi arr[i]
         *2. arr[i] < pivot -> left.push(arr[i])
         *3. arr[i] > pivot -> right.push(arr[i]) 
         */
        if(pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
        // Đệ quy
        // quickSort(left)
        // quickSort(right)
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr1));


