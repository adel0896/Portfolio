"use strict";
window.addEventListener("DOMContentLoaded", start);
const projectshops = {
  name: "Web shops",
  description: "I worked with different subjects.",
  skills: "Adobe XD,  HTML, CSS, Javascript, Illustrator, Photoshop",
};
function start() {
  document.querySelector(".aboutbtn").addEventListener("click", function () {
    location.href = "about.html";
  });
  document.querySelector(".homebtn").addEventListener("click", function () {
    location.href = "index.html";
  });
  document.querySelector(".projectbtn").addEventListener("click", function () {
    location.href = "projects.html";
  });
  document.querySelector(".contactbtn").addEventListener("click", function () {
    location.href = "contact.html";
  });
  updateProgressBar(60, 60);
  updateProgressBar1(80, 80);
  updateProgressBar2(75, 75);
  updateProgressBar3(70, 70);
  updateProgressBar4(60, 60);
}
function updateProgressBar(progressBar, value) {
  //   progressBar = 50;

  progressBar = document.querySelector(".progress_fill").style.width = `${value}%`;
  value = document.querySelector(".progress_text").textContent = `${value}%`;
  // progressBar = 20;
  // updateProgressBar(20, 20);
}
function updateProgressBar1(progressBar, value) {
  progressBar = document.querySelector(".progress_fill1").style.width = `${value}%`;
  value = document.querySelector(".progress_text1").textContent = `${value}%`;
}
function updateProgressBar2(progressBar, value) {
  progressBar = document.querySelector(".progress_fill2").style.width = `${value}%`;
  value = document.querySelector(".progress_text2").textContent = `${value}%`;
}
function updateProgressBar3(progressBar, value) {
  progressBar = document.querySelector(".progress_fill3").style.width = `${value}%`;
  value = document.querySelector(".progress_text3").textContent = `${value}%`;
}
function updateProgressBar4(progressBar, value) {
  progressBar = document.querySelector(".progress_fill4").style.width = `${value}%`;
  value = document.querySelector(".progress_text4").textContent = `${value}%`;
}
document.querySelector(".shopcontainer").addEventListener("mouseover", function () {
  document.querySelector(".descshop").classList.remove("hidden");
});
document.querySelector(".shopcontainer").addEventListener("mouseout", function () {
  document.querySelector(".descshop").classList.add("hidden");
});
document.querySelector(".shopcontainer").addEventListener("click", function () {
  document.querySelector(".pop-up1").classList.remove("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".pop-up1").classList.add("hidden");
});

document.querySelector(".contentcontainer").addEventListener("mouseover", function () {
  document.querySelector(".desccontent").classList.remove("hidden");
});
document.querySelector(".contentcontainer").addEventListener("mouseout", function () {
  document.querySelector(".desccontent").classList.add("hidden");
});
document.querySelector(".contentcontainer").addEventListener("click", function () {
  document.querySelector(".pop-up2").classList.remove("hidden");
});
document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".pop-up2").classList.add("hidden");
});

document.querySelector(".gamecontainer").addEventListener("mouseover", function () {
  document.querySelector(".descgame").classList.remove("hidden");
});
document.querySelector(".gamecontainer").addEventListener("mouseout", function () {
  document.querySelector(".descgame").classList.add("hidden");
});
document.querySelector(".gamecontainer").addEventListener("click", function () {
  document.querySelector(".pop-up3").classList.remove("hidden");
});
document.querySelector(".close3").addEventListener("click", function () {
  document.querySelector(".pop-up3").classList.add("hidden");
});
