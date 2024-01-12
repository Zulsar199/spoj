// perimeter of triangle

let aTal = window.prompt("gurvaljnii a tal");
let bTal = window.prompt("gurvaljnii b tal");
let cTal = window.prompt("gurvaljnii c tal");
function perimeter(a, b, c) {
  if (a + b > c && b + c > a && a + c > b && a > 0 && b > 0 && c > 0) {
    let p = a + b + c;
    console.log("perimeter of triangle " + p);
  }
}
perimeter(Number(aTal), Number(bTal), Number(cTal));
