// NOTE: initiate all button
let buttonSA = document.querySelector("#btn-sa");
let buttonSP = document.querySelector("#btn-sp");
let buttonCA = document.querySelector("#btn-ca");
let buttonCC = document.querySelector("#btn-cc");
let buttonCA = document.querySelector('#btn-ca');
let buttonCV = document.querySelector('#btn-cv');
let buttonTV = document.querySelector("#btn-tv");
let buttonTA = document.querySelector('#btn-ta');

//NOTE: calculateSquareArea
function calculateSquareArea() {
  var sisi = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = sisi * sisi;
}

// NOTE: calculateSquarePerimeter
function calculateSquarePerimeter() {
  var sisi = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = sisi * 4;
  // return numbA - numbB;
}

// NOTE: calculateCircleArea
function calculateCircleArea() {
  var r = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = (r * r) * Math.PI;
}

// NOTE: calculateCircleCircumference
function calculateCircleCircumference() {
  var radius = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = radius * Math.PI * 2;
}

// NOTE: calculateCubeArea
function calculateCubeArea() {
  var a = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = 6 * (a * a);
}

// NOTE: calculateCubeVolume
function calculateCubeVolume() {
  var a = parseFloat(document.getElementById('input-one').value);

  document.getElementById('result').innerHTML = a * a * a;
}

// NOTE: calculateTubeVolume
function calculateTubeVolume() {
  var r = parseFloat(document.getElementById('input-one').value);
  var t = parseFloat(document.getElementById('input-two').value);


  document.getElementById('result').innerHTML = Math.PI * (r * r) * t;
}

// NOTE: calculateTubeArea
function calculateTubeArea() {
  var r = parseFloat(document.getElementById('input-one').value);
  var t = parseFloat(document.getElementById('input-two').value);


  document.getElementById('result').innerHTML = Math.PI * 2 * r * t;
}

buttonSA.addEventListener('click', calculateSquareArea);
buttonSP.addEventListener('click', calculateSquarePerimeter);
buttonCA.addEventListener('click', calculateCircleArea);
buttonCC.addEventListener('click', calculateCircleCircumference);
buttonCA.addEventListener('click', calculateCubeArea);
buttonCV.addEventListener('click', calculateCubeVolume);
buttonTV.addEventListener('click', calculateTubeVolume);
buttonTA.addEventListener('click', calculateTubeArea);