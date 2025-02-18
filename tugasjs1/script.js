//! Soal 1
let dataPenduduk = {
    firstName : "Slamet",
    lastName : "Santoso",
    umur : 45,
    pekerjaan : "Petani",
}

//* 1.1 Menambah Properti
dataPenduduk.kota = "Yogyakarta";

//* 1.2 Mengambil dengan Teknik Destructuring
const { lastName } = dataPenduduk;
console.log(lastName)

//* 1.3 ambil dengan dot notation
console.log(dataPenduduk.pekerjaan)


//! Soal 2
let buahFavorit = ["Mangga", "Jeruk", "Apel"];

//* 2.1 Menambahkan element baru ke array
buahFavorit.push("Pisang");
console.log(buahFavorit);

//* 2.2 mengganti elemen di array
buahFavorit[1] = "Anggur";
console.log(buahFavorit);

//* 2.3 menghapus elemen di akhir array
buahFavorit.pop();
console.log(buahFavorit)


//! Soal 3
let menuRestoran = ([
    ["Nasi Goreng", 15000],
    ["Mie Ayam", 13000],
    ["Es Teh Manis", 5000],
]);
console.log(menuRestoran);

//* 3.1 menambah menu baru
menuRestoran.push(["Ayam Bakar", 20000]);
console.log(menuRestoran);

//* 3.2 menampilkan value
console.log(menuRestoran[1][1]);

//* 3.3 menghapus salah satu map
menuRestoran.splice(2, 1);
console.log(menuRestoran);


//! Soal 4
let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);
console.log(koleksiBuku)

//* 4.1 menambahkan buku baru
koleksiBuku.add("Filosofi Teras");
console.log(koleksiBuku);

//* 4.2 adakah duplikasi jika menambah set yang sama
koleksiBuku.add("Bumi");
console.log(koleksiBuku); //* tidak ada duplikasi

//* 4.3 menghapus set
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);


//! Soal 5
let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardigan"];
console.log(pakaianPria);
console.log(pakaianWanita);

//* 5.1 Menggabungkan kedua Array
let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);

//* 5.2 menambahkan array
pakaianToko = [...pakaianToko, "Kaos"]
console.log(pakaianToko);

//! Soal 6
function pesanMakanan(...makanan){
    console.log(makanan);
}
pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh");















