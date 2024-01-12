// 10. ugugdsun secondiig minute second bolgo

// let garaas = window.prompt("secondoo oruulna uu");

// function second(garaas) {
//   if (Number(garaas) < 0) {
//     console.log("eyreg utga oruulna uu");
//   } else {
//     let minute = Math.floor(Number(garaas) / 60);
//     let second = Number(garaas) - minute * 60;
//     console.log(
//       garaas + "ni " + minute + "minute " + second + "second " + "bolno"
//     );
//   }
// }
// second(Number(garaas));

// 11. ugugdsun secondiig tsag minutesecond bolgo

let garaas = window.prompt("secondoo oruulna uu");
function second(garaas) {
  if (Number(garaas) < 0) {
    console.log("eyreg utga oruulna uu");
  } else {
    let minut = Math.floor(Number(garaas) / 60);
    let tsag = Math.floor(minut / 60);
    let minute = minut - tsag * 60;
    let second = Number(garaas) - minute * 60 - tsag * 60 * 60;
    console.log(
      garaas +
        "ni " +
        tsag +
        "tsag " +
        minute +
        "minute " +
        second +
        "second " +
        "bolno"
    );
  }
}
second(Number(garaas));
