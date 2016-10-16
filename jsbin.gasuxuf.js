// -------------------------
// Nedelja 1: Zadatak 1:

// -------------------------
// primer 1

var N = 4;
var K = 11;
var zbir=0;
var i = 0;

if (N < K) {
  for (i=N; i <= K; i++){
  zbir += i;
  }
  } else{
    console.log("Unet je pogresan opseg")
  }

console.log ("suma je " + zbir);

// -------------------------
// primer 2

var N = -3;
var K = 2;
var zbir=0;
var i = 0;

if (N < K) {
  for (i=N; i <= K; i++){
  zbir += i;
  }
  } else{
    console.log("Unet je pogresan opseg")
  }

console.log ("suma je " + zbir);