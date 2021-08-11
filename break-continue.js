// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

// for (var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i > 8){
//         break;
//     }
// }

var numbers = [54, 34, 21, 98, 23, 101, 45, 67];
// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if(number > 90){
//         break;
//     }
// }

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 90){
//         continue;
//     }
//     console.log(number);
// }

var loopNumbers = [14, 54, 74, 36, 105, 101, 88, 98, 109];
for(i = 0; i < loopNumbers.length; i++){
    var loopNumber = loopNumbers[i];
    if(loopNumber > 90){
        continue;
    }
    console.log(loopNumber);
}
var loopNumbers = [14, 54, 92, 36, 91, 101, 88, 98, 109];
for(i = 0; i < loopNumbers.length; i++){
    var loopNumber = loopNumbers[i];
    console.log(loopNumber);
    if(loopNumber > 90){
        break;
    }
}