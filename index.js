let buttonAdd = document.querySelector("#btn-tambah");
let buttonSub = document.querySelector("#button-subs");
let buttonMulti = document.querySelector("#button-multi");
let buttonDiv = document.querySelector("#button-div");
let buttonMod = document.querySelector('#button-mod');
let buttonAddSub = document.querySelector('#button-addsubs');

//NOTE: addition
function addition() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA + numbB;
}
// NOTE: substract
function min() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA - numbB;

  // return numbA - numbB;
}

// NOTE: multiplication
function multiplication() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA * numbB;
}
// NOTE: division
function division() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA / numbB;
}
// NOTE: modulus
function mod() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA % numbB;
}

buttonAdd.addEventListener('click', addition);
buttonSub.addEventListener('click', min);
buttonMulti.addEventListener('click', multiplication);
buttonDiv.addEventListener('click', division);
buttonMod.addEventListener('click', mod);