"use strict";
//! Soal 1
//* Sebelum diperbaiki
    // console.log(umur);
    // let umur = 25; 
    // console.log(umur);  

//* Sesudah diperbaiki

let umur = 25;  
console.log(umur);

//* atau bisa juga
umur2;
console.log(umur2);
var umur2 = 25; 
console.log(umur2);  

//! Soal 2
let x = 10;
console.log(x); //Error saat di console ini sudah ana benerin kodenya

//! Soal 3
let data = "Halo";
console.log(typeof data); //String

data = 10;
console.log(typeof data); //Number

data = true;
console.log(typeof data); //Boolean


//!Soal 4
let nama = prompt("Siapa namamu?");
alert("Hello, " + nama + " Selamat datang di Ponpes Abu Dzar");

//!Soal 5
let result = confirm("Apakah kamu ingin melanjutkan ke halaman selanjutnya?");
console.log(result);

if (result) {
    alert("Selamat datang di halaman selanjutnya!");
} else {
    alert("Terima kasih telah berkunjung!");
}

