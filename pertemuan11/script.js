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

function angka(nilai){
    console.log(nilai);
}


//! Nilai Default
//* parameter bisa memiliki nilai default jika tidak memiliki input

function number(no = 0){
    console.log(no);
    

}
number();