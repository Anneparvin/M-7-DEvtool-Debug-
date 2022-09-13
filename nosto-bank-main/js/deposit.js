// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
 const newDeposit = getValueFromInputField("deposit-field");
 const preDeposit = getValueFromTextField("deposit-total");
 const currentDeposit = newDeposit + preDeposit;
 const preBalance = getValueFromTextField("balance-total");
 const currentBalance = newDeposit + preBalance;
 setInnerText("deposit-total",currentDeposit);
 setInnerText("balance-total",currentBalance);
});