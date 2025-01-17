        let getElement = document .getElementById('contohelement');
        console.log(getElement.innerText);//utk melihat list
        console.dir(getElement);//utk melihat direktori
        console.log(getElement.baseURI);//buat cek URL
        getElement.innerText = 'Sekolah Tahfizh Bogor';//buat update


        //membuat elemen baru
        let h1Element = document.createElement('h1');
        //isi elemen baru
        h1Element.innerText = 'ini elemen baru'
        //sisipkan elemen baru
        document.getElementById('container').appendChild(h1Element);



        //value pada input
        let inputElement = document.getElementById('age');
        console.dir(inputElement);


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


        let nilaiMatematika = 80;
        

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
        