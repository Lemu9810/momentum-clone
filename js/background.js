const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);
