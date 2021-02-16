
function myfunction () {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let oper = document.getElementById('operation').value;
    let result

    switch (oper) {
        case '+':
            result = parsint(num1) + parsint (num2);
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
    document.getElementById('result').value="Результат " + result;

};