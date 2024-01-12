// 12. ugugdsun minut secondiig second bolgo

// let minute = window.prompt("minute oruulna uu");
// let second = window.prompt("second oruulna uu");

// function transform(minute, second) {
//   let m = Number(minute) * 60;
//   let sum = m + Number(second);
//   console.log(
//     minute + "minute " + second + "second ni " + sum + "second bolno"
//   );
// }
// transform(Number(minute), Number(second));

// 13. ugugdsun tsag minute secondiig second ruu shiljuul;
let tsag = window.prompt("tsagaa oruulna uu");
let minute = window.prompt("minute oruulna uu");
let second = window.prompt("second oruulna uu");

function transform(tsag, minute, second) {
  let ts = Number(tsag * 60 * 60);
  let m = Number(minute) * 60;
  let sum = ts + m + Number(second);
  console.log(
    tsag +
      "tsag " +
      minute +
      "minute " +
      second +
      "second ni " +
      sum +
      "second bolno"
  );
}
transform(Number(tsag), Number(minute), Number(second));
