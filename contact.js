"use strict";
window.addEventListener("DOMContentLoaded", show);
function show() {
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector("#navbar").classList.add("display");
  });
  document.querySelector(".closeburger").addEventListener("click", function () {
    document.querySelector("#navbar").classList.remove("display");
  });
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
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  console.log("submit works");
  e.preventDefault();
  document.querySelector("button[type=submit]").setAttribute("disabled", true);
  const payload = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  //   console.log(form.elements.addopted.value);
  console.log(payload);
  fetch("https://kea21-6414.restdb.io/rest/portfolio", {
    method: "POST",
    headers: {
      "x-apikey": "602e3d315ad3610fb5bb62d2",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("button[type=submit]").disabled = false;
      console.log(data);
      form.elements.name.value = "";
      form.elements.email.value = "";
      form.elements.message.value = "";
      document.querySelector(".pop-up1").classList.remove("hidden");
    });
}
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".pop-up1").classList.add("hidden");
});
