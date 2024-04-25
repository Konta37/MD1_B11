let n = parseInt(prompt("Nhập số nguyên n: "));
while(n<2||n>100){
    n = parseInt(prompt("Nhập lại số nguyên n: "));
}
document.write("Dãy số các số chia hết cho 2 là: ");
for (let i = 2; i <= n; i++) {
    if(i%2==0){
        document.write(i+", ");
    }
}