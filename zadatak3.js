// -------------------------
// zadatak 3

 var str="12321";

var strReverse = str.split('').reverse().join('');

if (str===strReverse){
  console.log("string jeste palindrom");
} else {
  console.log("string nije palindrom");
}
