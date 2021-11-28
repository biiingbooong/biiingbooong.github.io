const quotes = [
{
    quote: "좋은 충고를 받아들이는 것은 자신의 능력을 키우는 것이다.",
    author: "요한 볼프강 폰 괴테",
},
{
    quote: "모든 사람들이 세상을 바꾸겠다고 생각하지만 어느 누구도 자기 자신을 바꿀 생각은 하지 않는다.",
    author: "레오 톨스토이",
},
{
    quote: "인생은 우리가 하루종일 생각하는 것으로 이루어져 있다.",
    author: "랄프 월도 에머슨",
},
{
    quote: "인간의 행동은 인간의 사고를 가장 잘 보여준다.",
    author: "존 로크",
},
{
    quote: "자신이 할 수 없다고 말한 것을 누군가가 하는 것을 보는 것만큼 당혹스러운 일은 없다.",
    author: "샘 유잉",
},
{
    quote: "나를 죽이지 못하는 고통은 나를 더욱 강하게 만든다.",
    author: "니체"
},
]

const quote = document.querySelector(".quote-quotes");
const author = document.querySelector(".quote-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = '- ' + todaysQuote.author;