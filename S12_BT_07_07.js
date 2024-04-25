let n = parseInt(prompt("Nhập n:"));
let giaithua=1;
for (let i = 1; i <= n; i++) {
    giaithua=giaithua*i;
}
document.write("Giai thừa của số "+n+" là: "+giaithua);