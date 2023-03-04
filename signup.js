
const validata =()=>{
    var _email = document.signup.email.value;
    var _num = document.signup.number.value;
    var _pass = document.signup.password.value;
    var ok = true;

    // Biểu thức chính quy
    var checkpass = /^([a-z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
    var checkemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var checknumber =/^0[0-9]{9,11}$/;

    if (!_email.match(checkemail)){
        document.getElementById("email").style.display = "block";
        ok =false;
    } else {
        document.getElementById("email").style.display = "none";
    }

    if (!_num.match(checknumber)){
        document.getElementById("number").style.display = "block";
        ok =false;
    } else {
        document.getElementById("number").style.display = "none";
    }

    if (!_pass.match(checkpass)){
        document.getElementById("password").style.display = "block";
        ok =false;
    } else {
        document.getElementById("password").style.display = "none";
    }

    if (ok) {
        return ok;
    } else {return ok};
}