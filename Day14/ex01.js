/**
 * Objetc
 * Enhandced Object
 * Computed Property
 * 
 * Object, Array
 * Destructuring
 * Rest
 * Spread
 */

// const name = "fullname"
// let age = 19;
// let address = "HN";
// const obj1 = {
//     [name]: "Đức Thái",
//     age,
//     address,
//     sayHello() {
//         console.log("hello");
        
//     }
// };
// console.log(obj1);


// Spread
// Spread rải các giá trị có sẵn vào một objetc, array mới, nếu như trùng key thì đc ghi đè
// Có thể dùng ở đầu, cuối, hoặc bất kuf vị trí nào trong khai báo Objetc, array
const obj1 = {name:"Thái",age:19};

const obj2 = {email:'thai@gmail.com'};

const arr = [1,2,3]

const fullInfor = {...obj1, ...obj2, address:"HN"}
console.log(fullInfor);

const obj3 = {
    fullname: "Neymar",
    email: "neymarjunior.com",
    password: "123456",
    bios: "Tiểu Neymar",
}
const {email,password:matKhau, ...other} = obj3
console.log(email);
console.log(matKhau);
console.log(other); // other lấy đc do áp dụng rest để gom phần còn lại thành object/array

function sum(...rest) {
    console.log(rest);
    let total = 0;
    for(let i = 0; i<rest.lenght; i++) {
        total += rest[i]
    }
    return total;
    
}
sum(1,2,3,4)



