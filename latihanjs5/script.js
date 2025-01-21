let belanja = 100;

    if (belanja >= 100) {
        console.log('Anda mendapatkan diskon 20%')
    } else if (belanja >= 50) {
        console.log('Anda mendapatkan diskon 10%')
    } else if(belanja < 50) {
        console.log('Maaf, anda belum dapat diskon')
    }






let harga = 100;
diskon = harga >= 100 ? 'Anda mendapatkan diskon 20%' :
     harga >= 50 ? 'Anda mendapatkan diskon 10%' :
            harga < 50 ? 'Anda tidak mendapatkan diskon' : 'Anda tidak mendapat diskon';


console.log(diskon)




let nilaiUjian = 81;

    if (nilaiUjian >= 91) {
        console.log('Grade A');
    } else if (nilaiUjian >= 81) {
        console.log('Grade B');
    } else if (nilaiUjian >= 71) {
        console.log('Grade C');
    } else {
        console.log('Grade D');
    }

let nilaiSusulan = 81;
    grade = nilaiSusulan >= 91 ? 'Grade A' :
                nilaiSusulan >= 81 ? 'Grade B' :
                    nilaiSusulan >= 71 ? 'Grade C' : 'Grade D' ;

console.log(grade);

let buah = 'Salak dan Nangka';
switch (buah) {
    case 'Chery':
        'Nurudin membeli Chery'
    break;
    
    case 'Nangka':
        'Nurudin membeli Nangka'
    break;
    
    case 'Salak':
        'Nurudin membeli Salak'
    break;

    case 'Salak dan Nangka':
        'Nurudin membeli Salak dan Nangka'
    break;

    default:
        'Nurudin tidak membeli buah apapun'

}

    console.log(buah);
    // console.log(buah);

let saklar = undefined;
if (saklar) {
    console.log('Saklarnya Menyala');
} else {
    console.log('Saklarnya Mati');
}