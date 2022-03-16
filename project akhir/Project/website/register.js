function submitFunc(e){
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confpassword = document.getElementById("confpassword").value;
    let agree = document.getElementById("agree").checked;
    let error = document.getElementById("errorMSG");
    if(!email.endsWith("@gmail.com") ){
        error.innerHTML = "email must ends with @gmail.com";
    }

    else if(username.length < 3){
    // alert("Minumum name length 3 characters");
        error.innerHTML = "Minimum username length is 3 characters";
    }

    else if(password.length < 8 ){
        error.innerHTML = "Minimum password length is 3 characters";
    }

    else if(confpassword != password){
        error.innerHTML = "Confirm password does not match the password";
    }

    else if(agree === false){
        error.innerHTML = "Checkbox must be checked";
    }
    else{
        error.innerHTML = "";
    }
    e.preventDefault();

}
