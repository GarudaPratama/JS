function buatTeh() {
    console.log("Rebus Air");
    console.log("Masukan teh ke dalam air panas");
    console.log("Aduk dan siap diminum")
}

buatTeh();


//!Variable local

function varLocal(){
    let x = 10;
    console.log(x);
}
varLocal()

//!variabel global

let firstName = "Fuad";

function varGlobal(){
    console.log(firstName);

    firstName = "Abdurrahman";
}

varGlobal()
console.log(firstName);

//!Parameter
//*Parameter adalah input yang dikirimkan ke fungsi

function angka(nilai, nilai2){
    console.log(nilai);
    console.log(nilai2);
}

angka(45, 90);


//! Nilai Default
//* parameter bisa memiliki nilai default jika tidak memiliki input

function number(no = 0){
    console.log(no);
    

}
number(9);

//! alternatif nilai default parameter
function lastName(name) {
    console.log(
        name = name || "Abdurrahman"
    )
}
lastName();

//* case 2 menggunakan ??
function nickName(nick) {
    nick = nick ?? "Supercoder";

    console.log(nick);
}
nickName();

//!mengembalikan nilai (return)
//* fungsi dapat mengembalikan nilai dengan menggunakan kata kunci 'return'
function perkalian(a, b){
    return a * b;
}
let hasilPerkalian = perkalian(2, 3);
console.log(hasilPerkalian);

function cetakTwo(){
    console.log('cetakTwo');
}
cetakTwo();

function add(a, b) {
    return a + b;
    }
    console.log(add(3, 5));

    
