//array declare
//let arr=[];
let array= [1,2,3,4];
//console.log(array);
//console.log(array.length);
//let i=0;
//while(i<array.length){
  //console.log("element at index", i, "is", array[i]);
  //i++;
//}

//standard functtions of array 
//push -> inserting @end
//unshift -> inserting @start
//array.push("last value");
//array.unshift("first value");
//console.log("After insertions");
//console.log(array);

//shift ->deleting @end
//poop ->del @start
//array.shift();
//array.pop();
//console.log("After deletions");
//console.log(array);

//index of-> index bta dega
//contains -> element hai ya nahi
//slice -> returns part of an array ;;;parameters ->start ,end-1

//let partOfArray = array.slice(2);
//console.log(partOfArray);
//console.log(array); //actyual array ni change krta 

//splice ->del ka better version
//splice actual array change krdeta hai yani copy nahi bnata
array.splice(2,3);
console.log(array);

