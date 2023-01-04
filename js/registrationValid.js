function isRegistraionValid() {
    let firstName = document.registrationForm.firstName.value;
    let lastName = document.registrationForm.lastName.value;
    let email = document.registrationForm.email.value;
    let password = document.registrationForm.password.value;

    if(firstName == "") {
        alert("Need to fill out your First Name");
        return false;
    }
    if(lastName == "") {
        alert("Need to fill out your Last Name");
        return false;
    }
    if(email == "") {
        alert("Need to fill out your email")
        return false;
    }
    if(password == ""){
        alert("Need to fill out password with at least 8 characters")
        return false;
    }else if(password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    alert("Registration Successfull");
    event.preventDefault();
    return document.getElementById("show").innerHTML = firstName + " " + lastName + "<br>" + email;

}