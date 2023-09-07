const  Netinp = document.getElementById('Net')
const  amountinp = document.getElementById('amount')
const  containerinp = document.getElementById('container')
const  displayinp = document.getElementById('display')
const  display1inp = document.getElementById('display1')
const   geninp = document.getElementById('gen')
// Define a function to generate a random number between 0 and 999999999
function getRandomNumber() {
   return Math.floor(Math.random() * 100000000000);
} 

// Declare a variable to store the generated random number
let value;

// Call the getRandomNumber function and store the result in the 'value' variable
value = getRandomNumber();
// const Netinp = document.querySelector('#Net')
// const amountinp = document.querySelector('#amount')
function Generate() {
   if (Netinp.value === 'Select Network' || amountinp.value === 'Select Amount') {
       alert('pls pick a network and a price')
   } else {
       var input = document.getElementById("display");
       var randomNumber = getRandomNumber();
   }
   // console.log(randomNumber)
   input.value = randomNumber;
}
// Recharge card
document.addEventListener('blur',
   inpvalidate)
   function inpvalidate() {
       if (display1inp.value === '' || displayinp.value === '') {
           alert('No Pin')
       }
       
   }
       function Recharge() {
           if (display1inp.value === displayinp.value) {
               function inpvalidate() {
                   if (display1inp.value === '' || displayinp.value === '') {
                       alert('No Pin')
                   }
                   
               }
               alert('Recharge Successful')
           } else {
               alert('Pin invalid')
           }
       }
       