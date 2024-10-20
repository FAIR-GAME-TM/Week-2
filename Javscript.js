
function myFunction(){
    document.getElementById("Javascript").innerHTML = "You Loose";
    alert("You did not win, and this is my first time coding, thank you prof battana and levi");
}


function validateform(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmpassword').value;

if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
}
alert("Registration was Succesfull");
document.getElementById('registrationForm').onsubmit();

}