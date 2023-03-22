const userInfo = require('./userInformation.js');
console.log(cowsay + `Hi, my name is ${userInfo.name} and I'm ${userInfo.age} years old`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm   " + userInfo.name + "   and my campus isss  " + userInfo.age,
    e: "oO",
    T: "U "
}));