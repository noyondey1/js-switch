//1. variable
var favoriteBook = '4 hour work week';
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];

// 2. array
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('small giants');
bookList.pop();

// 3. conditionals
if (bookList[1] == 'hooked'){
    console.log('i am hooked');
}
else{
    console.log('book is not found');
}
// 4.loop
// while loop
var i = 0;
while(i < 15){
    console.log('looping looping looping');
    i++
}

// for loop

for( var i = 0; i < 15; i++){
    console.log(i);
}