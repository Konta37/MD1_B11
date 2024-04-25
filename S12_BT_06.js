// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Nhập số nguyên: "));
let isPrime = true;
// debugger;
for (let i = 1; i <= number; i++) {
  // check if number is equal to 1
  if (i === 1) {
    document.write("");
  }
  // check if i is greater than 1
  else if (i > 1) {
    // looping through 2 to i-1
    for (let j = 2; j < i; j++) {
        isPrime = true;
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      document.write(i +", ");
    } else {
        document.write("");
    }
    if(i==number){
        if (isPrime) {
            document.write("<br>"+i +" là số nguyên tố");
          } else {
              document.write("<br>"+i +" không là số nguyên tố");
          }
    }
  }

  // check if number is less than 1
  else {
    document.write(i +", ");
  }
  

}
