let a = parseInt(
  prompt(
    "Hãy nhập số để dự đoán liệu bạn có nhập trúng dãy số trúng thưởng không"
  )
);
let b = 0;
while (b < 2) {
  if (a < 0 || a > 10) {
    a = parseInt(
        prompt(
          "Hãy nhập số để dự đoán liệu bạn có nhập trúng dãy số trúng thưởng không"
        )
      );
      b++;
      if(b==2){
        alert("Chúc mừng bạn nhập trượt rùi hihi.");
      }
  } else {
    alert("Chúc mừng bạn trúng thưởng.");
    break;
  }
}
