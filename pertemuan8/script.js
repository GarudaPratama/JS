//! operator AND (&&)
let a = true;
let b = false;
let c = true;

console.log(a && b);
console.log(a && c);

if (a && b && c) {
    console.log('Kedua variable bernilai true/benar');
} else {
    console.log('Salah satu variable bernilai false/salah')
}


//! operator or (||)
let d = true;
let e = false;
let f = true;
let g = false;

console.log(d || e);
console.log(d || f);
console.log(e || f);

if (f || e){
    console.log('Salah satu bernilai true/benar')
} else {
    console.log('Semua variable bernilai false/salah atau tidak bernilai true')
}

//! operator NOT ( ! )
let h = true;
let i = false;
let j = true;
let isRaining = true;

console.log(h);
console.log(!h);
console.log(!false);

if(isRaining) {
    console.log('hari ini hujan')
} else {
    console.log('hari ini tidak hujan')
}

//! latihan
let nilaiMatematika = 91;
let nilaiBahasaInggris = 75;
let saklar = false;

if (nilaiMatematika >= 80 && nilaiBahasaInggris <= 85) {
    console.log('Lulus')
} else {
    console.log('Tidak lulus')
}


