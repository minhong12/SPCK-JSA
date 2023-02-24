
const validata =()=>{
    var _email = document.signup.email.value;
    var _num = document.signup.number.value;
    var _pass = document.signup.password.value;

    // Biểu thức chính quy
    var checkpass = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
    var checkemail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    var checknumber = /^\d+$/;

    


}