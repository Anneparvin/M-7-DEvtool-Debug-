function getValueFromInputField(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const Value = parseFloat(inputField.value);
  inputField.value = "";
  return Value;
}

function getValueFromTextField(textFieldId) {
  const textField = document.getElementById(textFieldId);
  const Value = parseFloat(textField.innerText);
  return Value;
}

function setInnerText(elementId, Value) {
  const element = document.getElementById(elementId);
  element.innerText = Value;
}
