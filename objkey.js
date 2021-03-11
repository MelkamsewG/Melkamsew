"use strict";
// let car = { make: "Toyota", model: "Camry", trim: "LXE" };
// for (let key in car) {
//     //console.log(key); //make model trim
//     console.log(car[key]);// Toyota Camry LXE
// }

let car = { make: "Toyota", model: "Camry", trim: "LXE" };
for (let prop in car) {
    console.log(car[prop]); // Toyota Camry LXE
}