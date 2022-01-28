let low=1;
let high=10;
for(let n=low;n<=high;n++){
  let count=0;
  for(let div=2;div*div <=n;div++){
    if(n%div ==0){
      count++;
      break;
    }
  }
  if(count ==0){
    console.log(n);
  } 
}