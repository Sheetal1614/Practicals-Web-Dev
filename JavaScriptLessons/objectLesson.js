//object ->group of key: value pair
//key : value ->property
//key : function -> method
let cap = {
  name: "Steve",
  lastName: "Rogers",
  address: {
    city: "Delhi",
    country: "India"
  },
  age: 35,
  isAvengers:true,
  movies:["First Avengers","winter soldier","civil war"],
  sayHi: function() {
    console.log("hiii");
  }
};
//GET
//console.log(cap.name);
//console.log(cap.age);
//console.log(cap.movies[1]);
//cap.sayHi();

 //SET/UPDATE
 console.log("cap:", cap);
 cap.age=36;
 cap.isAvengers = false;
 cap.friends=["Tony","Bruce","Peter"];
 console.log("''''''''''''''''");
 //DELETE
 delete cap.address;
console.log("cap:", cap);

//another way GET
//for(let key in cap)
//{
  //console.log(key, ":",cap[key]);
//}
console.log(cap.age);
console.log("'''''");
let propKey = "age";
console.log(cap[propKey]); //andar ki chiz ko variable traet krta hai
//tohj pehle variable ki value put krega
//dot vale m seedha as a value treat krta hai
//output is same 

//jab key nahi hai 
console.log(cap.abc);
//since abc naam s koi key nahi thi toh yeh indefined output krdega

