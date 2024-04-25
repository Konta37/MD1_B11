// check if number is equal to 1
let i = parseInt(prompt("Nhập số n: "));
let isPrime = true;
if (i === 1) {
    document.write(" Số 1 không là số nguyên tố.");
  }
  // check if i is greater than 1
  else if (i > 1) {
    // looping through 2 to i-1
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      document.write("<br>"+i +" là số nguyên tố");
    } else {
        document.write("<br>"+i +" không là số nguyên tố");
    }
  }
  // check if number is less than 1
  else {
    document.write("Số này không là số nguyên tố.");
  }