function calculate () {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let oper = document.getElementById('operation').value;
    
    console.log(num1);
    console.log(num2);
    console.log(operation);


// class calculator 
    class calcClass {
        constructor(numberOne, numberTwo, operators) {
            this.numberOne = numberOne;
            this.numberTwo = numberTwo;
            this.operators = operators;
            
        }

        getCalculate () {
            return this.numberOne + this.operators + this.numberTwo;
        }
        
        
    };

// const newNumberSumm = new calcClass(1, 2); // it is working
const newNumberSumm = new calcClass(num1, num2, oper); // != it isnt working

document.getElementById('result').value = newNumberSumm.getCalculate();

console.log(num1);
console.log(num2);
console.log(oper);
console.log(newNumberSumm.getCalculate());

};


btn.addEventListener("click", calculate);





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
