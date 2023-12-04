function emailChecker() {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "";
        alert("Email is valid. You can submit the form!");
    } else {
        document.getElementById('emailError').innerHTML = "Please enter a valid email address.";
    }
}