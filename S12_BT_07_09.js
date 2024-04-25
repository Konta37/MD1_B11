document.write("A. <br>");
for (let i = 10; i >0; i--) {
    for (let j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("B. <br>");
for (let i = 1; i <10; i++) {
    for (let j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("C. <br>");
for (let i = 10; i >0; i--) {
    for (let j = i-1; j > 0; j--) {
        document.write("&ensp;");
    }
    for (let f = i; f <= 10; f++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("D. <br>");
for (let i = 1; i <10; i++) {
    for (let j = i; j > 0; j--) {
        document.write("&ensp;");
    }
    for (let f = 10; f > i; f--) {
        document.write("*");
    }
    document.write("<br>");
}