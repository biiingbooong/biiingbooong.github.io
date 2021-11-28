const images = ["여름_산.jpeg",
                "겨울_산.jpeg",
                "mountain.jpeg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = "url('img/" + `${todaysImage}'` + ")";