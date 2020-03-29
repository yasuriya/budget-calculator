let money = prompt("Your budget per month is? ", "");
let time = prompt("Type date YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let q1 = prompt("Necessary position for buying", ""),
  q2 = prompt("How much does it cost?", ""),
  q3 = prompt("Necessary position for buying", ""),
  q4 = prompt("How much does it cost?", "");

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert(appData.budget / 30);
