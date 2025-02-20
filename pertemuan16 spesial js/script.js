"use strict";

//! 1. Hoisting
//* 1.1 Hoisting variable
Nama;
console.log(Nama);

var Nama = "Faqih";
console.log(Nama);

//* 1.2 Hoisting function
function sayHelloDek() {
  console.log("Hello Deklarasi");
}
sayHelloDek();

var sayHelloExp = function () {
  console.log("Hello Expression");
};
sayHelloExp();

//! 2. Strict Mode / mode ketat (harus dipaling atas)
//* Fungsi Strict Mode adalah  Mencegah penggunaan variabel tanpa deklarasi Tidak mengizinkan penggunaan kata kunci yang akan digunakan di masa depan Mencegah duplikasi parameter dalam fungsi.

//*Manfaat Strict Mode Membantu menghindari kesalahan coding Membuat debugging lebih mudah Meningkatkan performa karena JavaScript engine bisa mengoptimalkan kode dengan lebih baik


let y = 10;
console.log(y);


//! 3. Dynamic Typing
let data = "Hello Faqih";
console.log(typeof data);

data = 10; //proses update variable
console.log(typeof data);


