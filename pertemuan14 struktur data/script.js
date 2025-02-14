//! Object
//*Struktur data adalah cara menyimpan dan mengatur data agar dapat digunakan secara efisien. JavaScript memiliki beberapa struktur data bawaan yang umum digunakan


let person = {
    firstName: "John",
    lastName: "Doe",
    'age': 30,
    'nickName': 'wakwaw'
}

console.log(person);
//*1.1 membuat objek
person.country = 'Indonesia';
console.log(person);
//*1.2 mengakses objek
console.log(person.firstName);
//*1.2.1 mengakses key
console.log(person.firstName)

//*1.2.2 mengakses property
console.log(person['firstName'])

//*1.2.3 mengakses destructuring
let { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

//!2.1 array
//*2.1 membuat array metode 1 (literals)
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(typeof fruits);

//* membuat array metode 2
let colors = new Array('red', 'green', 'blue');
console.log(colors);

//* 2.3 membuat array metode 3 dengan from
const pondok = Array.from('abudzar');
console.log(pondok);

//*2.4 mengakses array
let animal = ['cat', 'dog', 'fish'];
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);

//*2.5 mengubah array
animal[0] = 'monkey';
console.log(animal);

//* 2.6 menambah/menyisipkan array
animal.push('bird');
console.log(animal);

//*2.7 menghapus array
//*2.7.1 menghapus array syntax delete tidak disarankan
delete animal[1];//meninggalkan undefined di index 1
console.log(animal);

animal[1] = 'dog';
console.log(animal);

//*2.7.2 menghapus array syntax splice (disarankan)
animal.splice(0, 1);//menghapus array dari index 0, dan jumlah element 1
console.log(animal);

//*2.7.3 menghapus array syntax pop
animal.pop();//menghapus array diakhir
console.log(animal);

//*2.7.4 menghapus array syntax shift
animal.shift();//menghapus array pertama
console.log(animal);


//!3 Map
//*3.1 membuat map
let myMap = new Map([
         ["Name", "Bejo"],
         ["Age", 22] ,
         ["City", "Jakarta"],
        ]);
console.log(myMap);

//*3.2 menambahkan /menyisipkan map
myMap.set("Country", "Indonesia");
console.log(myMap);

myMap.set(42, "Nomor Sepatu");
console.log(myMap);

//*3.3 mengakses map
let getMap = myMap.get("City");
console.log(getMap);

//*3.4 menghapus map
myMap.delete("Age");
console.log(myMap);

//!4 Set
//*4.1 membuat set
let mySet = new Set([1, 2, 3, 4]);
console.log(mySet);

//*4.2 menambahkan /menyisipkan set
mySet.add(5);
console.log(mySet);

//*4.3 menghapus set
mySet.delete(5);
console.log(mySet);
