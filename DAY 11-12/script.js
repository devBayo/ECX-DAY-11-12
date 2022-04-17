"use strict";
const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector("input");
let rating_value;
const containers = document.querySelectorAll(".container");

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    // Limits selection to only one
    function clear() {
      let index = 0;
      while (index < ratings.length) {
        ratings[index].classList.remove("selected");
        index++;
      }
    }
    clear();
    rating.classList.toggle("selected");
    rating_value = document.querySelector("#rating-value").textContent =
      document.querySelector(".selected").textContent;
  });
});

submit.addEventListener("click", function () {
  // Rejects empty selection
  if (rating_value) {
    containers.forEach((container) => {
      container.classList.toggle("hidden");
    });
  }
});
