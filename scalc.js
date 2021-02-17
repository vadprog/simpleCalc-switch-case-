
let num1 = document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;

// class calculator 
class calcClass {
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    getSumm () {
        return this.numberOne + this.numberTwo;
    }
    getMinus (){
        return this.numberOne - this.numberTwo;
    }
    getDivide (){
        return this.numberOne / this.numberTwo;
    }
    getMultiply(){
        return this.numberOne * this.numberTwo;
    }
    
}

const newNumberSumm = new calcClass(1, 2); // it is working

//const newNumberSumm = new calcClass(num1, num2); // != it isnt working
console.log(newNumberSumm.numberOne);
console.log(newNumberSumm.numberTwo);
console.log(newNumberSumm.getSumm());
console.log(newNumberSumm.getMinus());
console.log(newNumberSumm.getDivide());
console.log(newNumberSumm.getMultiply());


//btn.addEventListener("click", newNumberSumm.getSumm()); // != it isnt working
btn.onclick = newNumberSumm.getMultiply();
console.log(btn.onclick)



//============================================================================
// function calculate () {

//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let oper = document.getElementById('operation').value;
//     let result

//     switch (oper) {
//         case '+':
//             result = parseInt(num1) + parseInt(num2);
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         case '%':
//             result = num1*100/num2;
//             break;

//         default:
//             break;
//     };



//         if (result !== undefined) {    //  if (result) {}
//             document.getElementById('result').value= result;
//         } else { 
//             //result = 'Введите оператор';
//             document.getElementById('result').value = 'Введите оператор';
//         }

// };

// //btn.onclick = calculate; // old school
// //btn.onclick = printResult; // second function

// btn.addEventListener("click", calculate);

// //Создай класс с методами. 

// class calculated {
    
// }


//Каждый метод, это действие с операндами. 
//В зависимости от того, какой операнд, вызываешь тот или иной метод
