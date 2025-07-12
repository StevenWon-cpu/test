const colors = ["red", "orange", "yellow", "green", "blue"];
let currentColorIndex = 0;

function magic() {
  const button = document.getElementById("colorButton");
  button.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // 색상 순환
}