let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn1 = document.getElementsByTagName("button")[0],
  optExpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncome = document.querySelector(".choose-income"),
  savingsCheckbox = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener("click", function() {
  time = prompt("Type date YYYY-MM-DD", "");
  money = +prompt("Your budget per month is? ", "");

  while (time == "" || time == null) {
    time = prompt("Type date YYYY-MM-DD", "");
  }

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Your budget per month is? ", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn1.addEventListener("click", function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesValue[i].value,
      b = expensesValue[++i].value;

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
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ", ";
  }
});

countBudgetBtn.addEventListener("click", function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Minimal budget for life";
    } else if (appData.moneyPerDay > 100 || appData.moneyPerDay < 2000) {
      levelValue.textContent = "Middle budget";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "High budget";
    } else {
      levelValue.textContent = "UNKNOWN";
    }
  } else {
    dayBudgetValue.textContent = " ";
    alert("Count your budget at first!");
  }
});

chooseIncome.addEventListener("input", function() {
  let items = chooseIncome.value;
  appData.income = items.split(",");
  incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener("click", function() {
  if (appData.savings) {
    appData.savings = false;
    console.log(appData.savings);
  } else {
    appData.savings = true;
    console.log(appData.savings);
  }
});

chooseSum.addEventListener("input", function() {
  if (appData.savings) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function() {
  if (appData.savings) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  } else {
    monthSavingValue.textContent = "Savings is unchecked";
    monthSavingValue.style = "color : red";
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
