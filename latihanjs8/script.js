//Soal 1
function greet(){
    console.log("Hello, World");
}
greet();

//Soal 2
function showMessage(){
    let message = "Ini adalah pesan Lokal";
    console.log(message);
}
showMessage();

//Soal 3
let userName = "Guest";
function updateUsername(){
    userName = "Admin";
}
updateUsername();
console.log(userName);

//Soal 4
function greets(name) {
     console.log(
        name = name || 'User'
     ); 

} 
greets();

//Soal 5
function setUser(userNames){
    console.log("Welcome ," + (userNames || "Guest"));
}
setUser();

//Soal 6
function add(param1 , param2){
    return param1 + param2;
}
console.log(add(10, 7));