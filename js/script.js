let money, time;

function start() {
  money = +prompt("Your budget per month is? ", "");
  time = +prompt("Type date YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Your budget per month is? ", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
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
      console.log("checked");
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}

chooseExpenses();

function detectDailyBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Daily budget is " + appData.moneyPerDay);
}

detectDailyBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Minimal budget for life");
  } else if (appData.moneyPerDay > 100 || appData.moneyPerDay < 2000) {
    console.log("Middle budget");
  } else if (appData.moneyPerDay > 2000) {
    console.log("High budget");
  } else {
    console.log("UNKNOWN");
  }
}

detectLevel();

let save, percent;

function checkSavings() {
  if (appData.savings == true) {
    save = +prompt("Money amount is:", "");
    percent = +prompt("Monthly percent is: ", "");
    appData.monthlyIncome = ((save / 100 / 12) * percent).toFixed(2);
    alert("Your monthly income is: " + appData.monthlyIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let q1 = prompt("Optional position for buying", "");
    appData.optionalExpenses[i] = q1;
    console.log(appData.optionalExpenses);
  }
}
chooseOptExpenses();

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
