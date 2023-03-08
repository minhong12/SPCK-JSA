
const validata =()=>{
    var _email = document.signup.email.value;
    var _num = document.signup.number.value;
    var _pass = document.signup.password.value;
    var ok = true;

    // Biểu thức chính quy
    var checkpass = /^([a-zA-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
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


let newList = JSON.parse(localStorage.getItem("login"));
console.log(newList);
if(newList == null) {
    localStorage.setItem("login",JSON.stringify(accountdata))
}

let signup = document.querySelector("#signup");
if(signup) {
    signup.addEventListener("submit" , (e)=>{
        e.preventDefault()
        dangki()
    })
}
const dangki=()=>{
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;
    // let dangki = document.querySelector("#signup");

    let newAcc={
        username:username,
        email:email,
        number:number,
        password:password,
    }
    
    newList.push(signup)
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("login",JSON.stringify(newList))
    window.location.href = "login.html";

    // newList.push(signup)
    
    // window.location.href = "login.html";

}
console.log(signup)