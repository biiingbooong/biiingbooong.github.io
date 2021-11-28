const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingUsername = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);

    localStorage.setItem(USERNAME_KEY, loginInput.value);
    greetingUser(loginInput.value);
}

function greetingUser(username) {
    greetingUsername.classList.remove(HIDDEN_CLASS);
    greetingUsername.innerText = `Let's go!, ${username},`;
    document.querySelector(".third-row").remove();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greetingUser(savedUsername);
}



/*
const link = document.querySelector("a");
function handleClickUrl(event) {
    alert("url clicked!!");
}
link.addEventListener("click", handleClickUrl);
*/

//const title = document.getElementById("title");
//const title = document.querySelector("
//  .hello => class name,   #hello => id,   h1 => tag name, .hello h1");
//  section ul => 하위 선택자, section>ul => 자식 선택자, h1+ul => 인접 선택자
//  h1~ul => 일반 형제 선택자, 속성선택자, 

/*
const title = document.querySelector(".hello h1");
console.dir(title)

function handleTitleClick() {
    title.innerText = "Got u!"
    title.style.color = "blue"
    console.log("title was clicked!");
}

function handleMouseEnter() {
    console.log("title on mouse!");
}
function handleMouseLeave() {
    console.log("title leave mouse!");

}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/
/*
const days = [1,2,3]
days[3] = 4
days.push(10)
console.log(days);
parseInt
*/

/*
const player = {
    name: "hg",
    points: 10,
    fat: true,
    itemarray: ["gun", "knife"]
};

console.log(player);
player.lastName = "potato"
player.points = 15;
console.log(player);
*/