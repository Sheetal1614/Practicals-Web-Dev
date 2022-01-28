let SingleQuote ='Single vali string';
let doubleQuote = "yeh double vali";
//console.log(SingleQuote);
//console.log(doubleQuote);
/*
let char = SingleQuote.charAt(4);
let ascii = SingleQuote.charCodeAt(4);
let substr= SingleQuote.substring(2,8);

//let arrStr = SingleQuote.split("i");
//console.log(arrStr);

//join
*/
let arrStr = SingleQuote.split(" ");
console.log(arrStr);
let str = arrStr.join("$");
console.log(str);
