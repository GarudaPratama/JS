//! deklarasi function
function deklarasi(params){
    console.log('deklarasi');
}


//! expresi function
let expresi = function(params2){
    console.log('expresi');
}

//! arrow function
let arrowName = (params) => {
    console.log('arrow function');
}

//* eksekusi
arrowName();
expresi();
deklarasi();



//! Contoh arrow function

let sum = (a, b) => {
    return a + b;
}

console.log(sum(1, 2))

//! refactor
let total = (c, d) => c + d;
console.log(total (2, 3))

// hanya 1 parameter
let tampil = (username) => `Hello ${username}`;
console.log(tampil('Andi'));

//! fungsi arrow multi baris
let perkalian = (e, f) => {
    let hasil = e * f;
    hasil += 1;
    return hasil;
}

console.log(perkalian(2, 3))

//! fungsi arrow satu parameter
let sayHelloTwo = Lastname => `Hello ${Lastname}`;

console.log(sayHelloTwo('arman'));







