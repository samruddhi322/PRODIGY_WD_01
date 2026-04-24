const input = document.getElementById("tempInput");
const unit = document.getElementById("unit");

input.addEventListener("input", convertTemp);
unit.addEventListener("change", convertTemp);

function convertTemp() {
  let temp = parseFloat(input.value);
  let selectedUnit = unit.value;
  let error = document.getElementById("errorMsg");

  // Reset error
  error.innerText = "";

  if (isNaN(temp)) {
    error.innerText = "Please enter a valid number";
    clearOutput();
    return;
  }

  if (selectedUnit === "k" && temp < 0) {
    error.innerText = "Kelvin cannot be negative";
    clearOutput();
    return;
  }

  let c, f, k;

  if (selectedUnit === "c") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  } else if (selectedUnit === "f") {
    f = temp;
    c = (temp - 32) * 5/9;
    k = c + 273.15;
  } else {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  document.getElementById("celsius").innerText = "Celsius: " + c.toFixed(2);
  document.getElementById("fahrenheit").innerText = "Fahrenheit: " + f.toFixed(2);
  document.getElementById("kelvin").innerText = "Kelvin: " + k.toFixed(2);
}

function clearOutput() {
  document.getElementById("celsius").innerText = "";
  document.getElementById("fahrenheit").innerText = "";
  document.getElementById("kelvin").innerText = "";
}