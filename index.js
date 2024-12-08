// Execrise 1
alert("Execrise 1");
alert("Welcome to my site");
let yourName = prompt("Enter your name:");
document.write("welcome " + yourName + "<br>");

// Execrise 2
alert("Execrise 2");
let temperature = prompt("Enter The Temperature :");
const checkTemperature = (temp) =>
  temp >= 30 ? "HOT" + "<br>" : "Cold" + "<br>";
console.log(checkTemperature(temperature));
document.write(checkTemperature(temperature));

// Execrise 3
alert("Execrise 3");
const getName = () => {
  let yourName;
  while (true) {
    yourName = prompt("Enter your name:");
    if (isValidName(yourName)) break;
  }
  return yourName;
};
const isValidName = (yourName) => {
  if (yourName === "") return false;

  for (let i = 0; i < yourName.length; i++) {
    const char = yourName[i];
    if (
      !(char >= "A" && char <= "Z") &&
      !(char >= "a" && char <= "z") &&
      !(char === " ")
    ) {
      return false;
    }
  }
  return true;
};
const getBirthYear = () => {
  let birthYear;
  while (true) {
    birthYear = prompt("Enter your birth year:");
    if (birthYear && birthYear == Number(birthYear) && birthYear < 2010) {
      return Number(birthYear);
    }
  }
};
const calculateAge = (birthYear) => {
  const currentYear = 2024;
  let age = currentYear - birthYear;
  return age;
};
const contactPage = () => {
  let yourName = getName();
  let birthYear = getBirthYear();
  let age = calculateAge(birthYear);
  document.write(
    `<span style="border-bottom: 1px solid black; font-weight: bold;">Name:</span> ${yourName}<br>`
  );
  document.write(
    `<span style="border-bottom: 1px solid black; font-weight: bold;">Birth year:</span> ${birthYear}<br>`
  );
  document.write(
    `<span style="border-bottom: 1px solid black; font-weight: bold;">Age:</span> ${age}<br>`
  );
};
contactPage();

// Execrise 4
alert("Execrise 4");
document.write("<h2>Heading<h2>" + "<hr>");
for (let i = 1; i <= 6; i++)
  document.write(`<h${i}>Welcome to my page</h${i}>`);
