
//! Deklarasi
function calculateArea(length, width) {
    const luas = length * width;
    return console.log(luas);
   }
calculateArea(5, 10);


//! Ekspresi
let calculateArea2 = function (length, width) {
    const luas2 = length * width;
    return console.log(luas2);
}
calculateArea2(7, 11);

//! Arrow Function
let calculateArea3 = (length, width) => {
    const luas3 = length * width;
    return console.log(luas3);
}
calculateArea3(3, 7);