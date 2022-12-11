function measureBMI () {
  let unit = document.getElementById("metric").checked,
      weight = document.getElementById("weight"),
      weightu = document.getElementById("weight-unit"),
      height = document.getElementById("height"),
      heightu = document.getElementById("height-unit");

  if (unit) {
    weightu.innerHTML = "KG";
    weight.min = 1; weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54; height.max = 272;
  } else {
    weightu.innerHTML = "LBS";
    weight.min = 2; weight.max = 1400;
    heightu.innerHTML = "IN";
    height.min = 21; height.max = 107;
  }
}

function calcBMI () {
  let bmi = null,
      unit = document.getElementById("metric").checked,
      weight = parseInt(document.getElementById("weight").value),
      height = parseInt(document.getElementById("height").value),
      results = document.getElementById("results");

  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  }
  else {
    bmi = 703 * (weight / (height * height));
  }
  bmi = Math.round(bmi * 100) / 100; 

  if (bmi < 18.5) {
    results.innerHTML = bmi + " - Underweight";
  } else if (bmi < 25) {
    results.innerHTML = bmi + " - Normal weight";
  } else if (bmi < 30) {
    results.innerHTML = bmi + " - Pre-obesity";
  } else if (bmi < 35) {
    results.innerHTML = bmi + " - Obesity class I";
  } else if (bmi < 40) {
    results.innerHTML = bmi + " - Obesity class II";
  } else {
    results.innerHTML = bmi + " - Obesity class III";
  }
  return false;
}
