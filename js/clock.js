const clock = document.querySelector("h2#clock");

function showClock() {
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2, "0")}:` +
                      `${String(date.getMinutes()).padStart(2, "0")}:` +
                      `${String(date.getSeconds()).padStart(2, "0")}`;
}
showClock();
setInterval(showClock, 1000);
/*
setTimeout(sayHello, 5000);
setInterval(sayHello, 2000);
function sayHello() {
    console.log("hello");
}
*/