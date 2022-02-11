// console.log("hello");
// selectors
let updateBudgetButton=document.querySelector('#update_budget_button');
console.log(updateBudgetButton);
let addExpenseButton = document.querySelector('#add_expense_button');
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expenses');
let nameInput = document.querySelector('#name_input');

//events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

//Variables
let monthlyIncome = 0;
let expenses =[];
let expenseTotal= 0;
let balance = 0;

//functions
function updateBudget(events) {
    events.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = '$' + monthlyIncome;
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = '$' + balance;
    if (balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.add('green');
        remainingBalance.classList.remove('red');
    }
}

function addExpense(events) {
    events.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    }

    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ': $' + expense.amount;
    expenseList.appendChild(newExpense);
    let expenseAmount = parseInt(amountInput.value);
    expenses.push(expenseAmount);
    updateExpenseTotal();
}

function updateExpenseTotal() {
    expenseTotal = 0;
    //loop
    for(let i = 0; i < expenses.length; i++) {
        expenseTotal = expenseTotal + expenses[i];
    }

    totalExpenses.innerText = '$' + expenseTotal;
    updateBalance();
}