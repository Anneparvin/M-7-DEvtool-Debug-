/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdraw = getValueFromInputField("withdraw-field");
  const preWithdraw = getValueFromTextField("withdraw-total");
  const currentWithdraw = newWithdraw + preWithdraw;
  const preBalance = getValueFromTextField("balance-total");
  const currentBalance = preBalance- newWithdraw ;
  setInnerText("withdraw-total",currentWithdraw);
 setInnerText("balance-total",currentBalance);
});