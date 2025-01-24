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

function tambah() {
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + '+';
    document.getElementById('hasil').innerHTML = total;

}

function kurang() {
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

