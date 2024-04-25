let m = parseInt(prompt("Nhập n: "));
for (let i = 0; i < n; i++) {
    if(i%3==0 && i%5==0){
        document.write("FizzBuzz");
    }
    else if(i%3==0){
        document.write("Fizz");
    }
    else if(i%5==0){
        document.write("Buzz");
    }
    else document.write(i+", ");
}