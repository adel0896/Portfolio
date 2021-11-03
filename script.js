"use strict";
window.addEventListener("DOMContentLoaded", show);
// var w = document.documentElement.clientWidth || window.innerWidth;
// if (w <= 350) {
//   console.log("mobileview");
//   document.querySelector("#navbar").classList.add("hidden");
// } else if (w >= 351) {
//   document.querySelector("#navbar").classList.remove("hidden");
//   console.log("desktop");
// }
function show() {
  // nav
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector("#navbar").classList.add("display");
  });
  document.querySelector(".closeburger").addEventListener("click", function () {
    document.querySelector("#navbar").classList.remove("display");
  });
  // document.querySelector(".hamburger").addEventListener("click", function () {
  //   document.querySelector("#navbar").classList.add(".movebar");
  // });
  // document.querySelector(".closeburger").addEventListener("click", function () {
  //   document.querySelector("#navbar").classList.add(".moveback");
  // });
  // About Page
  ////
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
  $(document).ready(function () {
    var $magic = $(".magic"),
      $scene = $(".scene"),
      magicWHalf = $magic.width() / 2;
    $scene.on("mousemove", function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      $magic.animate({ left: x - magicWHalf, top: y - magicWHalf }, 1);
    });
  });

  document.querySelector("#projects").addEventListener("mouseover", changeimg);
  document.querySelector("#projects").addEventListener("click", function () {
    location.href = "projects.html";
  });

  document.querySelector("#about").addEventListener("mouseover", changeimgabout);
  document.querySelector("#about").addEventListener("click", function () {
    location.href = "about.html";
  });

  function changeimgabout() {
    document.querySelector("#about").classList.remove("about");
    document.querySelector("#about").classList.add("about2");
  }
  document.querySelector("#about").addEventListener("mouseout", changeimgabout2);

  function changeimgabout2() {
    document.querySelector("#about").classList.remove("about2");
    document.querySelector("#about").classList.add("about");
  }
  function changeimg() {
    document.querySelector("#projects").classList.remove("projects");
    document.querySelector("#projects").classList.add("projects2");
  }
  document.querySelector("#projects").addEventListener("mouseout", changeimg2);
  function changeimg2() {
    document.querySelector("#projects").classList.remove("projects2");
    document.querySelector("#projects").classList.add("projects");
  }
  //animation scrolling
}
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".image");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".panel2",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  },
});
document.querySelector(".explore").addEventListener("click", function () {
  location.href = "projects.html";
});
// gsap.to(".panel2", {
//   yPercent: -50,
//   scrollTrigger: {
//     trigger: ".panel2",
//     start: "-500px",
//     // toggleAction: "start none none none",
//     // endTrigger: ".panel3",
//     end: "+=00px",
//     scrub: true,
//     pin: true,
//     pinSpacing: false,

//     markers: true,
//   },
// });

// gsap.to(".panel2", {
//   yPercent: -200,
//   scrollTrigger: {
//     trigger: ".panel2",
//     start: "-500px",
//     // toggleAction: "start none none none",
//     endTrigger: ".panel3",
//     end: "-500px",
//     scrub: true,
//     pin: true,
//     pinSpacing: false,
//     markers: true,
//   },
// });
// gsap.to(".panel3", {
//   y: -700,
//   scrollTrigger: {
//     trigger: ".panel2",
//     start: "top top ",
//     pin: true,
//     pinSpacing: false,
//     scrub: true,
//   },
// });
// gsap.utils.toArray(".panel").forEach((panel) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top -10%",
//     markers: true,
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//   });
// });
//   gsap.to(".second", {
//     yPercent: -500,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".second",
//       start: " top",
//       // end: "bottom 50%+=100px",
//       pin: "true",
//       markers: "true",
//       // toggleActions: "restart none none none",
//       scrub: true,
//       pinSpacing: false,
//     },
//   });
// }
//   const bubble = document.querySelector(".bubble");
//   const bubbleprop = bubble.getBoundingClientRect();
//   console.log(bubbleprop);
//   const bubbleWHalf = bubbleprop.width / 2;
//   console.log(bubbleWHalf);

//   document.addEventListener("mousemove", function (e) {
//     var x = e.pageX - this.offsetLeft;
//     var y = e.pageY - this.offsetTop;
//     const elem = document.getElementById("bubble");

//     elem.style({ left: x - bubbleWHalf, top: y - bubbleWHalf });
// bubbleprop.left = `${x} - ${bubbleWHalf}`;
// bubbleprop.top = `${y} - ${bubbleWHalf}`;

// console.log(bubble.style.left);
// {
//   left: ,
//   top: e.pageY - bubbleWHalf,
// };
//   });
// }
