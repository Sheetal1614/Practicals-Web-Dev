// file/folder  sath kuch deal krna hai
//eg read update del  etc
//kaam number 1 - use kaise kare fs ko?
//OPEN -w mode
const { hasSubscribers } = require("diagnostics_channel");
const { defaultMaxListeners } = require("events");
let fs = require("fs");
//READ ->readfilesync
let buffer = fs.readFileSync("example.js"); //will give in binary buffer
//console.log("bin data" + buffer);

//file -> create , read, update, delete
//CREATE  ->openSync  
//fs.openSync("ab.txt", "w");//yani ek ab.txt file create hogi in write mode

//WRITE
//agar koi file exist nahi krti -> create and put content
//agar file exist krti-> to content replace 
//fs.writeFileSync("ab.txt","Aur fhir Sheetal kiddan!");

//UPDATE ->appendFileSync
fs.appendFileSync("ab.txt", "Sab vadiyaa !!");//yeh ussi content m append krdega 

//FOLDER /DIRECTORY(prefer directory word)
//CREATE
//fs.mkdirSync("Meridirectory");

//ADD CONTENT
//fs.writeFileSync("Meridirectory/merifile.txt", "Sadda content");
/*

//READ->readdirSync
let dirKaContent = fs.readdirSync("Meridirectory");
console.log(dirKaContent);
for(let i=0;i<dirKaContent.length;i++)
{
  console.log("file ",dirKaContent[i], "is removed");
  //DELETE FILE ->unlinksync
  fs.unlinkSync("Meridirectory/" + dirKaContent[i]);
}

//REMOVE/DELETE DIRECTORY ->rmdirSync
fs.rmdirSync("Meridirectory");
//TWO MORE FUNCTIONS -> existSync   lstatSync

//fs.existSync ->if a file exists at a path ->gives true/false
let doesPathExist = fs.existsSync("abcd.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("abcd.txt");
console.log(doesPathExist);
//fs.lstatSync -> yeh btata yeh path file ka hai ya folder ka
let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans);

*/





