
function handleChange(val,element) {
    // console.log(val);
    var x = element.name + "-error";
    // console.log(element);
    // console.log(x);
    if(isNaN(val)) {
        document.getElementById(x).classList.remove("hidden");
    }
}

var resultDisplay = function() {
    var element = document.getElementById("result");
    element.classList.remove("hidden");
}
var closeDisplay = function() {
    var element = document.getElementById("result");
    element.classList.add("hidden");
}
var calculateTax = function() {

    var annual = parseFloat(document.getElementById("annual").value);
    var extra = parseFloat(document.getElementById("extra").value);
    var deduction = parseFloat(document.getElementById("deduction").value);
    var age = parseFloat(document.getElementById("age").value);
    // document.getElementById("tax").value
    var amount = calcTaxes(annual + extra - deduction, age);
    console.log(amount);
    var result = document.getElementById("result-amount");
    result.innerHTML = amount;
    resultDisplay();
    function calcTaxes(amount, age){
    var calculate = 0;
    if(amount <= 800000) {
        return "No tax";
    }
    else {
        if(age === 1) {
            var percent = 0.3;
        }
        else if(age === 2) {
            var percent = 0.4;
        }
        else if(age === 3) {
            var percent = 0.1;
        }
        calculate = (amount-800000) * percent;
    }
    return calculate;
  }}
  
  window.onload = function () {
    document.getElementById("calculate").onclick = calculateTax;
    // document.getElementById("calculate").onclick = resultDisplay;
    document.getElementById("close").onclick = closeDisplay;
  }