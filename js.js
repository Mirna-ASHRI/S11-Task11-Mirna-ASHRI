// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let i=0 ; i < myAdmins.length ; i++;
document.write(`<div>We Have ${myAdmins} Admins</div>`); 

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.reverse())
console.log(my.slice(2,6))

let slicedMy = my.slice(3,4) // ["Osama", "Elham", "Mazero", "Ahmed"]
slicedMy[1]= "Mayada"
console.log(slicedMy); // ["Elham", "Mayada"]

console.log(slicedMy[0][0] + slicedMy[0][1] + "yada"); // "Elyada"
console.log(my[0][4] + zero); // "rO"


// /*
//   Function Arrow Challenges
// */

let names = (...args) => args.join(", ");

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

  
//   /* ================================= */

let myNumbers = [20, 50, 10, 60];
  
let calc = (one, two, ...nums) => one + two + nums[0];
  
console.log(calc(10, myNumbers[3], myNumbers[2])); // 80

