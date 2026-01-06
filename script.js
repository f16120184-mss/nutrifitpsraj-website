// Toggle Login/Signup Modals
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}
// BMI Calculation Logic
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // convert to meters
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Healthy Weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";
        document.getElementById('bmi-result').innerHTML =
            `Your BMI is <strong>${bmi}</strong> (${category})`;
    } else {
        alert("Please enter valid numbers");
    }
}