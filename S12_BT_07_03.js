function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  
  for (let i = 0; i < 10; i++) {
    console.log('%cRandom Color Line', `color: ${randomColor()};`);
  }