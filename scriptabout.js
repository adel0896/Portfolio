"use strict";
window.addEventListener("DOMContentLoaded", show);
function show() {
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

  //   ScrollTrigger.create({
  //     trigger: "#panel2",
  //     start: "top top",
  //     end: "+=300px",
  //     pinSpacing: false,
  //     pin: true,
  //   });
}
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".panel").forEach((panel) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     markers: true,
//     pin: true,
//     pinSpacing: false,
//     //   scrub: 1,
//   });
// });
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

ScrollTrigger.create({
  snap: 1 / 4, // snap whole page to the closest section!
});

let shape = document.getElementById("pathsvg");
let length = shape.getTotalLength();

shape.style.strokeDasharray = length;
shape.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);
function myFunction() {
  //   let section = document.querySelector("#panel1");
  let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  let draw = length * scrollpercent;
  shape.style.strokeDashoffset = length - draw;
}
// document.querySelector(".picmusic").addEventListener("mouseout", function () {
//   document.querySelector(".picmusic").style.filter = "greyscale";
// });
// if (document.querySelector(".picmusic").style.filter === "greyscale") {
//   document.querySelector(".picmusic").addEventListener("mouseover", function () {
//     document.querySelector(".picmusic").style.filter = "none";
//   });
// }
