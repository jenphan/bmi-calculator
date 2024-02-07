var form = document.getElementById("bmiForm");

form.addEventListener("click", function(event) {
    if (event.target && event.target.matches('button')) {
        main();
    }
})

function main() {
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        return;
    }

    var heightFt = document.getElementById("heightFt").value;
    var heightIn = document.getElementById("heightIn").value;
    var weightLb = document.getElementById("weight").value;
    
    var bmiText = document.getElementById("bmi");
    var bmiMsgText = document.getElementById("bmiMsg");

    var bmi = calculateBMI(heightFt, heightIn, weightLb)
    var bmiMsg = getBMIMessage(bmi);

    bmiText.innerHTML = `BMI: ${bmi.toFixed(2)}`;
    bmiMsgText.innerHTML = `${bmiMsg}`;
}

function calculateBMI(heightFt, heightIn, weightLb) {
    var heightM = ((heightFt * 12) + parseInt(heightIn)) * 0.0254;
    var weightKg = weightLb / 2.205;
    return weightKg / (Math.pow(heightM, 2));
}

function getBMIMessage(bmi) {
    var bmiMsg = "";

    if (bmi < 20) {
        bmiMsg = "Underweight (15 - 19.9)";
    } else  if (bmi < 25) {
        bmiMsg = "Normal (20 - 24.9)";
    } else if (bmi < 30) {
        bmiMsg = "Overweight (25 - 29.9)";
    } else {
        bmiMsg = "Obese (30+)";
    }

    return bmiMsg;
}