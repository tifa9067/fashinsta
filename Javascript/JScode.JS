alert("مرحبا بكم في متجر الازياء العصرية");
 
function changeColor() {
  let colors = ["red", "blue", "green", "purple", "orange", "pink"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("header").style.color = randomColor;
};

var colors = ["#814444ff", "#355373ff", "#4c874cff", "#68442cff", "#664171ff"];
var index = 0;
var intervalId = null;
var isBlinking = false;

function startBlinking() {
  if (!isBlinking) {
    intervalId = setInterval(function () {
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
      }
    }, 1000);
    isBlinking = true;
  }
}

function stopBlinking() {
  clearInterval(intervalId);
  isBlinking = false;
}

document.addEventListener("DOMContentLoaded", function () {
  startBlinking();

  const toggleBtn = document.getElementById("toggleBlink");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (isBlinking) {
        stopBlinking();
        toggleBtn.textContent = "تشغيل";
      } else {
        startBlinking();
        toggleBtn.textContent = "ايقاف";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main.about-container");
  if (!main) return;

  const paragraphs = main.querySelectorAll("p");

  paragraphs.forEach(p => {
    p.addEventListener("mouseenter", () => {
      p.style.color = "#ed8996ff"; 
    });

    p.addEventListener("mouseleave", () => {
      p.style.color = "#555"; 
    });
  });
});
