        // let getElement = document.getElementById('contohelement');
        // console.log(getElement.innerText);//utk melihat list
        // console.dir(getElement);//utk melihat direktori
        // console.log(getElement.baseURI);//buat cek URL
        // getElement.innerText = 'Sekolah Tahfizh Bogor';//buat update


        //membuat elemen baru
        // let h1Element = document.createElement('h1');
        // //isi elemen baru
        // h1Element.innerText = 'ini elemen baru'
        // //sisipkan elemen baru
        // document.getElementById('container').appendChild(h1Element);



        //value pada input
        // let inputElement = document.getElementById('age');
        // console.dir(inputElement);


        function myFunction() {
            console.log(document.getElementById('age').value);
        }
        
        
        
        let umur = 18;

        //menggunakan if else
        if (umur >= 18) {
            console.log("Anda sudah besar");
        } 
        else {
            console.log("Anda belum besar");
        }


        let nilaiMatematika = 99;
        

        if (nilaiMatematika >= 90) {
            console.log('Grade A')
        }
        else if (nilaiMatematika >= 80) {
            console.log('Grade B')
        }
        else if (nilaiMatematika >= 70) {
            console.log('Grade C')
        }
        else {
            console.log('Grade D')
        }
        


        let cetekan = 0;
        if (cetekan) {
            console.log ('hidup');
        } else {
            console.log ('mati');
        }


        cetekan ? console.log('hidup') : console.log('mati')



        let number2 = 11;
        number2 >= 10 ? console.log('angkanya 10 atau lebih') : console.log ('angkanya kurang dari 10');


        //multiple ternary
        let number3 = 90;
        number3 >= 90 ? console.log('Grade A') :
             number3 >= 80 ? console.log('Grade B') :
                number3 >= 70 ? console.log ('Grade C') :
                    number3 >= 60 ? console.log('Grade D') :
                        console.log('Grade E');



        //penggunaan ? yang non tradisional
        let isLogin = true;
        
        //contoh 1
        isLogin ? console.log('Selamat datang') : console.log('Anda belum LogIn')

        //contoh 2
        let pesan = isLogin ? 'Selamat datang' : 'Anda belum LogIn';
        console.log(pesan)

        //switch statement
        let number4 = 100;
        switch(number4) {
            case 100:
            case 90:
                console.log('Grade A');
                break;
            case 80:
                console.log('Grade B');
                break;
            default:
                console.log('Grade E')
        }