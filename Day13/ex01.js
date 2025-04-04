const myInfor = {
    name: "Thái",
    age: 18,
};

/**
 * Phương thức tĩnh của Object
 */

console.log(Object.values(myInfor));
console.log(Object.keys(myInfor));
console.log(Object.entries(myInfor));
console.log(Object.fromEntries(Object.entries(myInfor)));

