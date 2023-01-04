function isLoginValid() {

    let email = document.loginForm.email.value;
    let password = document.loginForm.password.value;

    if(email == "") {
        alert("Email cannot be blank");
        return false;
    }
    if(password == "") {
        alert("password cannot be blank");
        return false;
    }else if(password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    
    alert("Login Successfull")
    return window.location.replace("/bookClubMain.html");
    
}