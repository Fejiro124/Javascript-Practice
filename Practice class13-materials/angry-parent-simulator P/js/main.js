// Modified this practice assignemnet with a different event listener: mouseover

// document.querySelector('#yell').addEventListener('mouseover', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMiddle = document.querySelector('#firstMiddle').value
//   const lMiddle = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`
// }


 const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('mouseover', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);


  synth.speak(yellThis);
}

// Later: Work on Changing the Language, pitch, accent and rate
