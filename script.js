"use strict";

const btn = document.querySelector(".btn");
const data = document.querySelector(".afterdata");
const weight = document.querySelector(".weight").value;
const height = document.querySelector(".height").value;
const fullName = document.querySelector(".name").value;
const suggest = document.querySelector(".suggest");

const checking = function () {
  const weight = document.querySelector(".weight").value;
  const height = document.querySelector(".height").value;
  const fullName = document.querySelector(".name").value;

  let BMI = (weight / (height * height)).toFixed(2);

  data.style.display = "block";
  suggest.style.display = "block";
  if (
    height === "0" ||
    weight === "0" ||
    height === "" ||
    weight === "" ||
    fullName === ""
  ) {
    btn.textContent = "Please enter the correct details";
    data.style.display = "none";
    suggest.style.display = "none";
    btn.addEventListener("click", function () {
      btn.textContent = "Calculate";
    });
  } else if (height && weight && fullName === "") {
    data.style.display = "none";
    suggest.style.display = "none";
  } else if (BMI <= 18.4) {
    data.textContent = `Underweight: ${fullName}, your BMI is ${BMI}`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    data.textContent = `Normal:${fullName}, your BMI is ${BMI}`;
  } else if (BMI >= 25.0 && BMI <= 39.9) {
    data.textContent = `Overweight:${fullName}, your BMI is ${BMI}`;
  } else {
    data.textContent = `Obese:${fullName}, your BMI is ${BMI}`;
  }
};
btn.addEventListener("click", checking);
