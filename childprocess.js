let cp = require("child_process");
console.log("Trying to open google 🧡");
//cp.execSync("calc");
cp.execSync("start chrome https://google.com");
console.log("opened google");
let output = cp.execSync("node example.js");
console.log("output"+ output);