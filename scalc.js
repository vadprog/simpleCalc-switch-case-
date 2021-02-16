
    
function calculate () {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let oper = document.getElementById('operation').value;
    let result

    switch (oper) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1*100/num2;
            break;

        default:
            break;
    };



        if (result !== undefined) {    //  if (result) {}
            document.getElementById('result').value= result;
        } else { 
            //result = 'Введите оператор';
            document.getElementById('result').value = 'Введите оператор';
        }

};

//btn.onclick = calculate; // old school
//btn.onclick = printResult;

btn.addEventListener("click", calculate);
