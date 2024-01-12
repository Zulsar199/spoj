// 16. ugugdsun sariig jil sarruu shiljuul

// let garaas = window.prompt("saraa oruulna uu");

// function sar(garaas) {
//   if (Number(garaas) < 0) {
//     console.log("eyreg utga oruulna uu");
//   } else {
//     let jil = Math.floor(Number(garaas) / 12);
//     let sar = Number(garaas) - jil * 12;
//     console.log(garaas + "sar ni " + jil + "jil " + sar + "sar " + "bolno");
//   }
// }
// sar(Number(garaas));

// 17. ugugdsun jil sariig sard shiljuul

let jil = window.prompt("jil oruulna uu");
let sar = window.prompt("sar oruulna uu");

function transform(jil, sar) {
  let s = Number(jil) * 12;
  let sum = s + Number(sar);
  console.log(jil + "sar " + jil + "sar ni " + sum + "sar bolno");
}
transform(Number(jil), Number(sar));
