// cube v, s

let aTal = window.prompt("cubiin irmegiin urt");

function cubiinIrmegiinUrt(a) {
  if (a > 0) {
    let s = a * a * 6;
    console.log("guitset gadarguugiin talbai " + s);
    let v = a * a * a;
    console.log("cubiin ezlehuun " + v);
  } else {
    console.log("eyreg utga oruulna uu");
  }
}
cubiinIrmegiinUrt(Number(aTal));
