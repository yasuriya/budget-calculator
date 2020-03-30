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
  savings: true,
  chooseExpenses() {
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
  },
  detectDailyBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Daily budget is " + appData.moneyPerDay);
  },
  detectLevel() {
    if (appData.moneyPerDay < 100) {
      console.log("Minimal budget for life");
    } else if (appData.moneyPerDay > 100 || appData.moneyPerDay < 2000) {
      console.log("Middle budget");
    } else if (appData.moneyPerDay > 2000) {
      console.log("High budget");
    } else {
      console.log("UNKNOWN");
    }
  },
  checkSavings() {
    let save = +prompt("Money amount is:", ""),
      percent = +prompt("Monthly percent is: ", "");
    appData.monthlyIncome = ((save / 100 / 12) * percent).toFixed(2);
    alert("Your monthly income is: " + appData.monthlyIncome);
  },
  chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
      let q1 = prompt("Optional position for buying", "");
      appData.optionalExpenses[i] = q1;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome() {
    for (let i = 0; i < 1; i++) {
      let items = prompt(
        "What would bring you extra money? (Split it with comma)",
        ""
      );
      if (typeof items == "string" && items != null && items != "") {
        appData.income = items.split(", ");
        appData.income.push(prompt("What else?", ""));
        appData.income.sort();
      } else {
        i--;
      }
    }
    appData.income.forEach(function(item, i) {
      alert(`Options for extra earning : ${i + 1} - ${item}`);
    });
  }
};

appData.chooseIncome();

for (key in appData) {
  console.log(`Our program includes this data: ${key}`);
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
