// NOTE: initiate all button
let buttonSQA = document.querySelector("#btn-sqa");
let buttonSP = document.querySelector("#btn-sp");
let buttonCA = document.querySelector("#btn-ca");
let buttonCC = document.querySelector("#btn-cc");
let buttonCUA = document.querySelector('#btn-cua');
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

  document.getElementById('result').innerHTML = r * r * Math.PI;
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

  // var x = null;
  console.log(t, r);
  try {
    var r = parseFloat(document.getElementById('input-one').value);
    var t = parseFloat(document.getElementById('input-two').value);
    console.log("r:", r);
    if (isNaN(r) || isNaN(t)) {
      throw Error("r or t is NaN");
    }
    console.log(t, r);
    document.getElementById('result').innerHTML = Math.PI * (r * r) * t;
  } catch (e) {
    var error = document.getElementById('result');
    error.innerHTML = "warning " + e;
  }
}


// NOTE: calculateTubeArea
function calculateTubeArea() {
  try {
    var r = parseFloat(document.getElementById('input-one').value);
    var t = parseFloat(document.getElementById('input-two').value);
    console.log("r:", r);
    if (isNaN(r) || isNaN(t)) {
      throw Error("r or t is NaN");
    }
    console.log(t, r);
    document.getElementById('result').innerHTML = Math.PI * 2 * r * t;
  } catch (e) {
    var error = document.getElementById('result');
    error.innerHTML = "warning " + e;
  }
}

buttonSQA.addEventListener('click', calculateSquareArea);
buttonSP.addEventListener('click', calculateSquarePerimeter);
buttonCA.addEventListener('click', calculateCircleArea);
buttonCC.addEventListener('click', calculateCircleCircumference);
buttonCUA.addEventListener('click', calculateCubeArea);
buttonCV.addEventListener('click', calculateCubeVolume);
buttonTV.addEventListener('click', calculateTubeVolume);
buttonTA.addEventListener('click', calculateTubeArea);