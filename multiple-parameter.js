function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value: ', result);

// Multiply numbers
function multiplyTwoNumbers(num1, num2){
    console.log(num1, num2);
    var totalMark = num1 * num2;
    return totalMark;
}

var firstNum = 45;
var secondNum = 65;
var resultMark = multiplyTwoNumbers(firstNum, secondNum);
console.log('Mutiply result value: ', resultMark);


// biyog koro

function subtractTwoNumbers(biyogNum1, biyogNum2){
    var biyogFol = biyogNum1 - biyogNum2;
    return biyogFol;
}

var biyogNumber1 = 54;
var biyogNumber2 = 44;
var biyogFolValue = subtractTwoNumbers(biyogNumber1, biyogNumber2);
console.log('biyogfol: ', biyogFolValue);