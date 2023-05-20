let username = document.getElementById("username");
let password = document.getElementById("password");
let p_error = document.querySelector(".p-error");
let forgot_password = document.querySelector(".for");
let google = document.querySelector(".google");
let facebook = document.querySelector(".facebook");

google.addEventListener('click', ()=> alert("Currently not available."));
facebook.addEventListener('click', ()=> alert("Currently not available."));

forgot_password.addEventListener('click', ()=>{
    alert("Just calm down and remember your password!");
})

function login() {
    // if (username.value == "") {
    //     alert("Username is empty.")
    // }if (password.value == "") {
    //     alert("Password is important.")
    // }
    if(password.value.length<8) {
        p_error.style.display = "block";
    } else {
        p_error.style.display = "none";
    }
    console.log("sss");
}