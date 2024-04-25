let n = parseInt(prompt("Nhập n để check xem có phải số hoàn hảo không: "));
let tong=0;
for (let i = 0; i < n; i++) {
    if(n%i==0)
    tong=tong+i;
}
if (tong==n) {
    document.write("Số "+ n + " là số hoàn hảo.");
}
else{
    document.write("Số "+ n + " không là số hoàn hảo.");
}