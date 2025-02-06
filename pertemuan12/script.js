//!Deklarasi FUnction
function sayHello(){
    console.log("Abudzar sekarang sudah SMA bukan pondok");
}
sayHello();

//! Expression FUnction
let pondok = function(){
    console.log("Rumpin di Bogor")
}
pondok();

//! penjabaran Expression Function agar mudah dimengerti
function pondok2(){
    console.log("Cisauk stasiun di Tangerang");
}

let pondok3 = pondok2;
pondok3();

//* Callback function
// alert("Alert Seperti ini");
// let isBoss = confirm("Apakah kamu adalah Boss?");
// alert(isBoss);

function pertanyaan(penanya, ya, tidak){
    if (confirm(penanya)){
        ya();
    } else {
        tidak();
    }
}

function ya(){
    alert("Ya, saya santri");
}

function tidak(){
    alert("Tidak, saya bukan santri");
}

pertanyaan("Apakah kamu adalah Santri?", ya, tidak);

//! Expression Function VS Deklarasi Function
//Syntak Deklarasi Function
function nilai(){
    return 100;
}

//Syntax Expression Function
let nilai2 = function(){
    return 100;
}

//* 2. Javascript Engine
//? Deklarasi Function

function sayHello(){
    alert("Hello, World!");
}
sayHello();

//? Expression Function
let sayHello2 = function(){
    alert("Hello, World! 2");
}
sayHello2();


    function penambahan(a, b) {
    
    }
     
    function perkalian(a, b) {
    
    }
     
    // Fungsi utama yang menerima callback
    function calculate(num1, num2, operation) {
        let result = operation(num1, num2);
        console.log("Hasil:", result);
    }
     
    // pemanggilan fungsi
    calculate(5, 3, penambahan); // Output: Hasil: 8
    calculate(4, 2, perkalian); // Output: Hasil: 8
