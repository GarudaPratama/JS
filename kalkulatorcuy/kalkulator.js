function numberOne() {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + 1;
    document.getElementById('hasil').innerHTML = total;
}

function numberTwo() {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + 2;
    document.getElementById('hasil').innerHTML = total;
}

function numberThree(numberThree) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberThree;
    document.getElementById('hasil').innerHTML = total;
}

function numberFour(numberFour) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberFour;
    document.getElementById('hasil').innerHTML = total;
}

function numberFive(numberFive) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberFive;
    document.getElementById('hasil').innerHTML = total;
}

function numberSix(numberSix) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberSix;
    document.getElementById('hasil').innerHTML = total;
}

function numberSeven(numberSeven) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberSeven;
    document.getElementById('hasil').innerHTML = total;
}

function numberEight(numberEight) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberEight;
    document.getElementById('hasil').innerHTML = total;
}

function numberNine(numberNine) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberNine;
    document.getElementById('hasil').innerHTML = total;
}

function numberNil(numberNil) {
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + numberNil;
    document.getElementById('hasil').innerHTML = total;
}

function c(){
    // let num1 = document.getElementById('hasil').innerHTML;
    numbers = 0;
    document.getElementById('hasil').innerHTML = numbers;
}



function tambah(tambah) {
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + '+';
    document.getElementById('hasil').innerHTML = total;

}

function kurang(kurang) {
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + '-';
    document.getElementById('hasil').innerHTML = total;
}

function total() {
    let getElement = document.getElementById('hasil').innerHTML;
    console.log(getElement);

    if (getElement.includes("+")) {
        let parts = getElement.trim().split("+");
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);

        let total = operand1 + operand2;
        console.log(total);
        document.getElementById('hasil').innerHTML = total;
    } else if (getElement.includes("-")) {
        let parts = getElement.trim().split("-");
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);

        let total = operand1 - operand2;
        console.log(total);
        document.getElementById('hasil').innerHTML = total;
    }

    
}

