var count = 0;
let n=12345;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  console.log(count);
