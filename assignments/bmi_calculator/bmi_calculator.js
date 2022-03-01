// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    let BMI = (mass)/(height*height)
    if (mass<=0 || height<=0){
        return "INVALID INPUT"
    }
    return BMI
}

module.exports = BMICalculator;
