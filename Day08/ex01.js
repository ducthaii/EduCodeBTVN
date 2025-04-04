var a = 10;

var a = 'Thái'

console.log(a);

/**
 * Khai báo với Var:
 * - Có thể khai báo lại biến
 * - Có thể gán lại giá trị cho biến
 * - var có phạm vi là global
 */

/**
 * ECMAScript 6 (ES6) - 2015
 * Khai báo voi Let:
 * - không thể khai báo lại biến
 * - let có phạm vi là block
 * 
 * * Khai báo với const
 * -Không thể khai báo lại biến
 * - Const không thể gán lại giá trị cho biến (nếu kh có phương thức)
 */

// block code
{
    {
        {
            a = 20;
            console.log(a);
            
        }
    }
}

console.log(a);

let b = 20;
b = b+10;

const pi = 3.14;
console.log(pi);


