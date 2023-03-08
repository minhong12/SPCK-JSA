const accountdata =[

];


// let newList = JSON.parse(localStorage.getItem("form"));
// if(newList == null) {
//     localStorage.setItem("login",JSON.stringify(accountdata));
// };


let form = document.querySelector("#login");
form.addEventListener("submit", function(e){
    e.preventDefault();
    login()
});



const login=()=>{
    let tk = document.querySelector("#username").value;
    let mk = document.querySelector("#password").value;
    for (let item of form){
        if((item.tk==tk.value) && (item.mk==mk.value)){
            window.location.href="index.html";
        }
    };
};
console.log(login);