let lastName = prompt("Введите вашу фамилию:");
let firstName = prompt("Введите ваше имя:");
let patronymic = prompt("Введите ваше отчество:");

let age = prompt("Введите ваш возраст в годах:");

let isMale = confirm("Ваш пол - мужской?");

let fullName = lastName + " " + firstName + " " + patronymic;
let ageInDays = age * 365;
let futureAge = parseInt(age) + 5; // if without parseInt will be string + number

let gender = isMale ? "мужской" : "женский";

let retirementAge = isMale ? 65 : 55;
let isRetired = age >= retirementAge ? "да" : "нет";

//The same we can write
// let retirementAge;
// let isRetired;

// if (isMale) {
//   retirementAge = 65;
// } else {
//   retirementAge = 55;
// }

// if (age >= retirementAge) {
//   isRetired = "да";
// } else {
//   isRetired = "нет";
// }

alert(
  "Ваше ФИО: " +
    fullName +
    "\nВаш возраст в годах: " +
    age +
    "\nВаш возраст в днях: " +
    ageInDays +
    "\nЧерез 5 лет вам будет: " +
    futureAge +
    "\nВаш пол: " +
    gender +
    "\nВы на пенсии: " +
    isRetired
);
