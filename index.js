const singupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const singup = document.querySelector(".singup");
const login = document.querySelector(".login");
const forgot = document.querySelector("a");
const forgotpage = document.querySelector(".forgot")
loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    singup.classList.remove("singupForm");
    forgotpage.classList.remove("forgotlogin");
    moveBtn.innerHTML = "Login";
})

singupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    singup.classList.add("singupForm");
    forgotpage.classList.remove("forgotlogin");
    moveBtn.innerHTML = "Singup";
})

forgot.addEventListener("click", ()=>{
    login.classList.remove("loginForm");
    singup.classList.remove("singupForm");
    forgotpage.classList.add("forgotlogin");
    moveBtn.innerHTML = "Forgot Password";
})