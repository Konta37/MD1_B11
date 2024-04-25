let Fn=0;
for (let i = 0; i <= 20; i++) {
    Fn=parseInt((1/Math.sqrt(5))*((((1+Math.sqrt(5))/2)**i)-(((1-Math.sqrt(5))/2)**i)));
    document.write("Số Fibonaci của số "+i+" tương đương là: "+Fn +"<br>");
}