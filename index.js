#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93,
    PKR: 277.80,
    INR: 83.55,
    GDP: 0.80
};
let userCurrency = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "GDP"],
        message: "enter from currency",
    },
    {
        name: "toCurrency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "GDP"],
        message: "enter To currency",
    },
    {
        name: "Ammount",
        type: "input",
        message: "enter Ammount You Wan to Convert:",
    },
]);
let from = currency[userCurrency.fromCurrency];
let to = currency[userCurrency.toCurrency];
let ammount = userCurrency.Ammount;
let conversion = ammount / from;
let convertedammount = conversion * to;
console.log(convertedammount);
