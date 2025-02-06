function penambahan(a, b) {
    return a + b;
}
 
function perkalian(a, b) {
    return a * b;
}
 
// Fungsi utama yang menerima callback
function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log("Hasil:", result);
}
 
// pemanggilan fungsi
calculate(5, 3, penambahan); 
calculate(4, 2, perkalian); 
