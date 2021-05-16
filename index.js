// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
let milesPerKm = 0.621; 


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleMph);
console.log(typeof distanceMarsKm);
console.log(typeof distanceMoonKm);
console.log(typeof milesPerKm);


// Code your solution to exercises 3 and 4 here:
let distanceMarsMi = distanceMarsKm * milesPerKm;
let hoursToMars = distanceMarsMi / shuttleMph;
let daysToMars = hoursToMars / 24;

console.log(shuttleName + " " + "will take" + " " + daysToMars + " " + "days to reach Mars.");




// Code your solution to exercise 5 here:

let distanceMoonMi = distanceMoonKm * milesPerKm;
let hoursToMoon = distanceMoonMi / shuttleMph;
let daysToMoon = hoursToMoon / 24;

console.log (shuttleName + " " + "will take" + " " + daysToMoon + " " + "days to reach the Moon.")