"use strict";

// BMI VARIABLES

const bmiInputSection = document.querySelector("#bmi-input");
const bmiOutputSection = document.querySelector("#bmi-output");
let bmi;
let bmiWeight;
let bmiHeight;
const bmiNumber = document.querySelector(".bmi-number");
const bmiDetails = document.querySelector(".bmi-detail");
const bmiGoButton = document.querySelector(".bmi-input-button");
const bmiBackButton = document.querySelector(".bmi-back-button");



// STRENGTH VARIABLES

const strengthInputSection = document.querySelector("#strength-input");
const strengthOutputSection = document.querySelector("#strength-output");
let totalWeight;
let squatPercentage;
let deadliftPercentage;
let rowPercentage;
let pulldownPercentage;
let benchPercentage;
let overheadPercentage;
let squatNumber;
let deadliftNumber;
let rowNumber;
let pulldownNumber;
let benchNumber;
let overheadNumber;
const squatResult = document.querySelector(".squat-result");
const deadliftResult = document.querySelector(".deadlift-result");
const rowResult = document.querySelector(".row-result");
const pulldownResult = document.querySelector(".pulldown-result");
const benchResult = document.querySelector(".bench-result");
const overheadResult = document.querySelector(".overhead-result");
const strengthResultsTitle = document.querySelector(".strength-results-title");
const strengthError = document.querySelector(".strength-error");
const strengthGoButton = document.querySelector(".strength-input-button");
const strengthBackButton = document.querySelector(".strength-back-button");


// MACROS VARIABLES

const macrosInputSection = document.querySelector("#macros-input");
const macrosOutputSection = document.querySelector("#macros-output");
let macrosWeight;
let macrosHeight;
let calories;
let protein;
let carbohydrates;
let fat;
const macrosGoButton = document.querySelector(".macros-input-button");
const macrosBackButton = document.querySelector(".macros-back-button");
const error = document.querySelector(".macros-error");
const caloriesResult = document.querySelector(".macros-calories");
const proteinResult = document.querySelector(".macros-protein");
const carbohydratesResult = document.querySelector(".macros-carbohydrates");
const fatResult = document.querySelector(".macros-fat");
const dailyTargetTitle = document.querySelector(".daily-target");



// STATES

const original = function() {
  bmiInputSection.classList.remove("hide");
  strengthInputSection.classList.remove("hide");
  macrosInputSection.classList.remove("hide");
  bmiOutputSection.classList.add("hide");
  strengthOutputSection.classList.add("hide");
  macrosOutputSection.classList.add("hide");
}

original();



// BMI BUTTONS

bmiGoButton.addEventListener("click", function() {
  bmiWeight = Number(document.querySelector("#bmi-weight").value.replace("kg", ""));
  bmiHeight = Number(document.querySelector("#bmi-height").value.replace("cm", ""));
  bmi = bmiWeight/((bmiHeight/100)*(bmiHeight/100));

  if (bmiWeight < 200 && bmiWeight > 20 && bmiHeight > 50 && bmiHeight < 250) {
    bmiNumber.textContent = `Your BMI is ${bmi.toFixed(1)}.`;
    bmiNumber.classList.remove("hide");

    if (bmi > 30) {
      bmiDetails.textContent = "You are classified as obese, as your score is above 30.";
      bmiDetails.style.backgroundColor = "#f95350";
      bmiNumber.style.backgroundColor = "#f95350";
    } else if (bmi > 25) {
      bmiDetails.textContent = "You are classified as overweight, as your score is above 25.";
      bmiDetails.style.backgroundColor = "#ffb638";
      bmiNumber.style.backgroundColor = "#ffb638";
    } else if (bmi < 18.5) {
      bmiDetails.textContent = "You are classified as underweight, as your score is below 18.5";
      bmiDetails.style.backgroundColor = "#ffb638";
      bmiNumber.style.backgroundColor = "#ffb638";
    } else if (bmi >= 18.5 && bmi <= 25) {
      bmiDetails.textContent = "Your bodyweight is classified as healthy, as your score is between 18.5 and 25";
      bmiDetails.style.backgroundColor = "#99d44f";
      bmiNumber.style.backgroundColor = "#99d44f";
    }
  } else {
    bmiNumber.classList.add("hide");
    bmiDetails.textContent = "You must enter a weight, in kilograms, between 20 and 200, and a height, in centimetres, between 50 and 250.";
    bmiDetails.style.backgroundColor = "#fff64a";
  }
  bmiInputSection.classList.add("hide");
  bmiOutputSection.classList.remove("hide");
});

bmiBackButton.addEventListener("click", function() {
  bmiOutputSection.classList.add("hide");
  bmiInputSection.classList.remove("hide");
});



// STRENGTH BUTTONS

strengthGoButton.addEventListener("click", function() {

  squatNumber = Number(document.querySelector(".squat").value.replace("kg", ""));
  deadliftNumber = Number(document.querySelector(".deadlift").value.replace("kg", ""));
  rowNumber = Number(document.querySelector(".row").value.replace("kg", ""));
  pulldownNumber = Number(document.querySelector(".pulldown").value.replace("kg", ""));
  benchNumber = Number(document.querySelector(".bench").value.replace("kg", ""));
  overheadNumber = Number(document.querySelector(".overhead").value.replace("kg", ""));

  if (squatNumber && deadliftNumber && rowNumber && pulldownNumber && benchNumber && overheadNumber) {
    totalWeight = squatNumber + deadliftNumber + rowNumber + pulldownNumber + benchNumber + overheadNumber;

    strengthResultsTitle.textContent = "Strength levels:"

    squatPercentage = Math.round(squatNumber/totalWeight*100);
    deadliftPercentage = Math.round(deadliftNumber/totalWeight*100);
    rowPercentage = Math.round(rowNumber/totalWeight*100);
    pulldownPercentage = Math.round(pulldownNumber/totalWeight*100);
    benchPercentage = Math.round(benchNumber/totalWeight*100);
    overheadPercentage = Math.round(overheadNumber/totalWeight*100);

    strengthResultsTitle.classList.remove("hide");
    squatResult.classList.remove("hide");
    deadliftResult.classList.remove("hide");
    rowResult.classList.remove("hide");
    pulldownResult.classList.remove("hide");
    benchResult.classList.remove("hide");
    overheadResult.classList.remove("hide");

    if (squatPercentage < 19) {
      squatResult.textContent = `Squat: ${Math.round(100/20*squatPercentage)-100}%`;
      squatResult.style.backgroundColor = "#f95350";
    } else if (squatPercentage > 21) {
      squatResult.textContent = `Squat: +${Math.round(100/20*squatPercentage)-100}%`;
      squatResult.style.backgroundColor = "#99d44f";
    } else {
      squatResult.textContent = `Squat: ideal`;
      squatResult.style.backgroundColor = "#ffb638";
    }

    if (deadliftPercentage < 21) {
      deadliftResult.textContent = `Deadlift: ${Math.round(100/22*deadliftPercentage)-100}%`;
      deadliftResult.style.backgroundColor = "#f95350";
    } else if (deadliftPercentage > 23) {
      deadliftResult.textContent = `Deadlift: +${Math.round(100/22*deadliftPercentage)-100}%`;
      deadliftResult.style.backgroundColor = "#99d44f";
    } else {
      deadliftResult.textContent = `Deadlift: ideal`;
      deadliftResult.style.backgroundColor = "#ffb638";
    }

    if (rowPercentage < 15) {
      rowResult.textContent = `Barbell Row: ${Math.round(100/16*rowPercentage)-100}%`;
      rowResult.style.backgroundColor = "#f95350";
    } else if (rowPercentage > 17) {
      rowResult.textContent = `Barbell Row: +${Math.round(100/16*rowPercentage)-100}%`;
      rowResult.style.backgroundColor = "#99d44f";
    } else {
      rowResult.textContent = `Barbell Row: ideal`;
      rowResult.style.backgroundColor = "#ffb638";
    }

    if (pulldownPercentage < 15) {
      pulldownResult.textContent = `Lat Pulldown: ${Math.round(100/16*pulldownPercentage)-100}%`;
      pulldownResult.style.backgroundColor = "#f95350";
    } else if (pulldownPercentage > 17) {
      pulldownResult.textContent = `Lat Pulldown: +${Math.round(100/16*pulldownPercentage)-100}%`;
      pulldownResult.style.backgroundColor = "#99d44f";
    } else {
      pulldownResult.textContent = `Lat Pulldown: ideal`;
      pulldownResult.style.backgroundColor = "#ffb638";
    }

    if (benchPercentage < 15) {
      benchResult.textContent = `Bench Press: ${Math.round(100/16*benchPercentage)-100}%`;
      benchResult.style.backgroundColor = "#f95350";
    } else if (benchPercentage > 17) {
      benchResult.textContent = `Bench Press: +${Math.round(100/16*benchPercentage)-100}%`;
      benchResult.style.backgroundColor = "#99d44f";
    } else {
      benchResult.textContent = `Bench Press: ideal`;
      benchResult.style.backgroundColor = "#ffb638";
    }

    if (overheadPercentage < 9) {
      overheadResult.textContent = `Overhead Press: ${Math.round(100/10*overheadPercentage)-100}%`;
      overheadResult.style.backgroundColor = "#f95350";
    } else if (overheadPercentage > 11) {
      overheadResult.textContent = `Overhead Press: +${Math.round(100/10*overheadPercentage)-100}%`;
      overheadResult.style.backgroundColor = "#99d44f";
    } else {
      overheadResult.textContent = `Overhead Press: ideal`;
      overheadResult.style.backgroundColor = "#ffb638";
    }

    strengthError.classList.add("hide");


  } else {
    strengthError.textContent = "You must enter numerical values for each exercise."
    strengthError.style.backgroundColor = "#fff64a";
    strengthError.classList.remove("hide");

    strengthResultsTitle.classList.add("hide");
    squatResult.classList.add("hide");
    deadliftResult.classList.add("hide");
    rowResult.classList.add("hide");
    pulldownResult.classList.add("hide");
    benchResult.classList.add("hide");
    overheadResult.classList.add("hide");
  }
  strengthInputSection.classList.add("hide");
  strengthOutputSection.classList.remove("hide");
});

strengthBackButton.addEventListener("click", function() {
  strengthInputSection.classList.remove("hide");
  strengthOutputSection.classList.add("hide");
});



// MACROS BUTTONS

macrosGoButton.addEventListener("click", function() {
  macrosWeight = Number(document.querySelector(".macros-weight").value.replace("kg", ""));
  macrosHeight = Number(document.querySelector(".macros-height").value.replace("cm", ""));

  calories = 0;
  protein = 0;
  carbohydrates = 0;
  fat = 0;

  if (macrosWeight <= 180 && macrosWeight >= 30 && macrosHeight >= 120 && macrosHeight <= 210) {

    calories = macrosWeight*35;

    if (macrosHeight < 200) {
      calories = calories-(10*(200-macrosHeight));
    }

    if (document.querySelector(".macros-female").checked) {
      calories = calories*0.9;
    }

    if (document.querySelector(".macros-activity").value == "high") {
      calories = calories+600;
    } else if (document.querySelector(".macros-activity").value == "medium") {
      calories = calories+300;
    }

    if (document.querySelector(".macros-goal").value == "fast-loss") {
      calories = 0.8*calories;
    } else if (document.querySelector(".macros-goal").value == "slow-loss") {
      calories = 0.9*calories;
    } else if (document.querySelector(".macros-goal").value == "slow-gain") {
      calories = 250+calories;
    } else if (document.querySelector(".macros-goal").value == "fast-gain") {
      calories = 500+calories;
    }

    if (document.querySelector(".macros-muscle-yes").checked) {
      protein = macrosWeight*2;
    } else {
      protein = macrosWeight;
    }

    fat = calories*0.3/9;
    carbohydrates = 0.25*(calories - 9*fat - 4*protein);

    calories = (Math.round(calories/50))*50
    protein = Math.round(protein);
    carbohydrates = Math.round(carbohydrates);
    fat = Math.round(fat);

    dailyTargetTitle.textContent = `Daily Target:`;

    caloriesResult.textContent = `Calories: ${calories}`;
    caloriesResult.style.backgroundColor = "#00aff6";

    proteinResult.textContent = `Protein: ${protein}g`;
    proteinResult.style.backgroundColor = "#99d44f";

    carbohydratesResult.textContent = `Carbohydrates: ${carbohydrates}g`;
    carbohydratesResult.style.backgroundColor = "#ffb638";

    fatResult.textContent = `Fat: ${fat}g`;
    fatResult.style.backgroundColor = "#f95350";

    dailyTargetTitle.classList.remove("hide");
    caloriesResult.classList.remove("hide");
    proteinResult.classList.remove("hide");
    carbohydratesResult.classList.remove("hide");
    fatResult.classList.remove("hide");

    error.classList.add("hide");

  } else {
    dailyTargetTitle.classList.add("hide");
    caloriesResult.classList.add("hide");
    proteinResult.classList.add("hide");
    carbohydratesResult.classList.add("hide");
    fatResult.classList.add("hide");

    error.classList.remove("hide");
    error.textContent = "You must enter a weight, in kilograms, between 30 and 180, and a height, in centimetres, between 120 and 210";
    error.style.backgroundColor = "#fff64a";
  }
  macrosInputSection.classList.add("hide");
  macrosOutputSection.classList.remove("hide");
});

macrosBackButton.addEventListener("click", function() {
  macrosInputSection.classList.remove("hide");
  macrosOutputSection.classList.add("hide");
});
