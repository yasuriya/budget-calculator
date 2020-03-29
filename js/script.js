let money = +prompt("Your budget per month is? ", "");
let time = +prompt("Type date YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Necessary position for buying", ""),
    b = +prompt("How much does it cost?", "");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    i--;
  }
}

// let i = 0;
// while (i < 2) {
//   let a = prompt("Necessary position for buying", ""),
//     b = +prompt("How much does it cost?", "");
//   i++;
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     i--;
//   }
// }

// let i = 0;
// do {
//   let a = prompt("Necessary position for buying", ""),
//     b = +prompt("How much does it cost?", "");
//   i++;
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     i--;
//   }
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget is " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
  console.log("Minimal budget for life");
} else if (appData.moneyPerDay > 100 || appData.moneyPerDay < 2000) {
  console.log("Middle budget");
} else if (appData.moneyPerDay > 2000) {
  console.log("High budget");
} else {
  console.log("UNKNOWN");
}
