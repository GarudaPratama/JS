let firstName;
console.log(firstName);

let hasil = firstName ?? 'Tidak Memiliki Nama';
console.log(hasil)

//case 2
let firstNames = 'fajar';
let lastName = null;
let nickName = null;

let fullName = firstNames ?? lastName ?? nickName ?? "Anonymous";
console.log(fullName);

//! perbandingan dengan||

let namaAwal = null;
let namaAkhir = null;
let namaTengah = 0;
let namaSeluruhnya = namaAwal || namaTengah || namaAkhir || "No Name";
console.log(namaSeluruhnya)

let value = null ?? "default";
console.log(value);  