function numberOne() {
    let getElement = document.getElementById('hasil').innerText;
    let total = getElement + 1;
    document.getElementById('hasil').innerText = total;
}

function numberTwo() {
    let getElement = document.getElementById('hasil').innerText;
    let total = getElement + 2;
    document.getElementById('hasil').innerText = total;
}

function tambah() {
    let getElement = document.getElementById('hasil').innerText;
    let total = getElement + '+';
    document.getElementById('hasil').innerText = total;

}

function total() {
    let getElement = document.getElementById('hasil').innerText;
    let total = getElement + '=';
    document.getElementById('hasil').innerText = total;
}