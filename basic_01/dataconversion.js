// for number
const testImage = true ;
// console.log(typeof testImage);
let numberConversion = Number(testImage);
// console.log(typeof numberConversion);
// console.log( numberConversion);

// for boolean
const isLoggedIn = " " ;
let isValueBoolean = Boolean(isLoggedIn);
// console.log(isValueBoolean);

// for string
const stringValue = true ;
let StringConversion = String(stringValue);
// console.log(typeof StringConversion + " ,the value = " + StringConversion );

// comparsion & operators

// operators-  + - * / ** % 
console.log( "1" + 2 +2);
console.log( 1 + 2 + '2');

// this happen because of js rule first priority -- if first is string ll other value treated as string & if first is number so the operation take place upto the value with string datatype
