// tegsh untsugtiin p s

let aTal = window.prompt("tegsh ontsogtiin a tal");
let bTal = window.prompt("tegsh ontsogtiin b tal");

function p(a, b) {
  if ((a > 0, b > 0)) {
    let perimeter = (a + b) * 2;
    console.log("perimeter of rectangle " + perimeter);
  } else {
    console.log("eyreg utga oruulna uu");
  }
}
p(Number(aTal), Number(bTal));

function s(a, b) {
  debugger;
  if ((a > 0, b > 0)) {
    let area = a * b;
    console.log("area of rectangle " + area);
  } else {
    console.log("eyreg utga oruulna uu");
  }
}
s(Number(aTal), Number(bTal));
