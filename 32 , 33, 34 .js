// 32. Дэлгэцэнд IOI гэж 1 удаа хэвлэ.

// for(let i = 1; i <= 3; i++){
//      console.log("IOI");
// }

// 33. Дэлгэцэнд IOI гэж 3 удаа хэвлэ.

// let counter = 0;

// while (counter < 3) {
//   console.log("IOI");

//   counter++;
// }

// 34. IOI үгийг өгөгдсөн тоон удаа хэвлэ. eyreg buhel too ugugsdunu

let n = Number(window.prompt("eyreg buhel too oruulna uu"));

if(n%1 != 0 || n <= 0 ){
    console.log("eyreg buhel too oruulna uu")
}else{
    let counter = 0;
    while(counter < n){
        console.log("IOI");
        counter++;
    }
}