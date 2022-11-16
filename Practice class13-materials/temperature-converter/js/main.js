//Write your pseduo code first! 
// 0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
// I need the value in Celsius

  let temp = document.querySelector('#Cel').value
// Convert from Celcius to Fahrenheit
  temp = temp * 9/5 + 32

// Show It 
document.querySelector('#placeToYell').innerText = temp;

}
