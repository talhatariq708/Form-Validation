function validateForm(){
    let username = document.getElementById ("username1");
    let password = document.getElementById ("password1");
    let flag = 1;

    if (username.value == ""){
        document.getElementById ("userError").innerHTML = "Username is required!";
        flag = 0;
    } else if (username.value.length < 3){
        document.getElementById ("userError").innerHTML = "Username required 3 characters!";
        flag = 0;
    } else {
        document.getElementById ("userError").innerHTML = "";
        flag = 1;
    }
    if (password.value == ""){
        document.getElementById ("passError").innerHTML = "Password is required!";
        flag = 0;
    } else if (password.value.length < 3){
        document.getElementById ("passError").innerHTML = "Password required 3 characters!";
        flag = 0;
    } else {
        document.getElementById ("passError").innerHTML = "";
        flag = 1;
    }
    if (flag){
        return true;
    } else {
        return false;
    }
};