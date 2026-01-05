const due = document.getElementById('amount-due');
const received = document.getElementById('amount-received');
const button = document.getElementById('calculate-change');

const dollarsOut = document.getElementById('dollars-output');
const quartersOut = document.getElementById('quarters-output');
const dimesOut = document.getElementById('dimes-output');
const nickelsOut = document.getElementById('nickels-output');
const penniesOut = document.getElementById('pennies-output');

function calculateChange(due, received) {
    if (isNaN(due) || isNaN(received)) return null;
    const diff = received - due;
    if (diff < 0) return null;
    return diff;
}

function breakdownChange(amount) {
    let cents = Math.round(amount * 100);

    const dollars = Math.floor(cents / 100);
    cents = cents % 100;

    const quarters = Math.floor(cents / 25);
    cents = cents % 25;

    const dimes = Math.floor(cents / 10);
    cents = cents % 10;

    const nickels = Math.floor(cents / 5);
    const pennies = cents % 5;

    return {dollars, quarters, dimes, nickels, pennies};
}

function updateOutputs(values) {
    dollarsOut.textContent = String(values.dollars);
    quartersOut.textContent = String(values.quarters);
    dimesOut.textContent = String(values.dimes);
    nickelsOut.textContent = String(values.nickels);
    penniesOut.textContent = String(values.pennies);
}

button.addEventListener('click', function() {
    const dueValue = parseFloat(due.value);
    const receivedValue = parseFloat(received.value);
    
    const result = calculateChange(dueValue, receivedValue);
    if (result === null) {
        updateOutputs({dollars: '', quarters: '', dimes: '', nickels: '', pennies: ''});
        return;
    }

    const breakdown = breakdownChange(result);
    updateOutputs(breakdown);
    
        
});