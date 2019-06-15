//Binding elements to variables
const thumbbar = document.querySelector("ul");
let figCaption = document.querySelector("figcaption");
let full = document.querySelector("#fullSize");
const blur = document.querySelector("#blur");
const hue = document.querySelector("#hue");
const contrast = document.querySelector("#contrast");
const invert = document.querySelector("#invert");
const brightness = document.querySelector("#brightness");
const greyscale = document.querySelector("#greyscale");
const opacity = document.querySelector("#opacity");
const saturate = document.querySelector("#saturate");
const sepia = document.querySelector("#sepia");
const reset = document.querySelector("#reset");

//Making an array of objects for images
const images = [
  {
    thumb: ".\\images\\flowers-pink-small.jpg",
    fullSize: ".\\images\\flowers-pink-large.jpg",
    description:
      "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich"
  },
  {
    thumb: ".\\images\\flowers-purple-small.jpg",
    fullSize: ".\\images\\flowers-purple-large.jpg",
    description:
      "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich"
  },
  {
    thumb: ".\\images\\flowers-red-small.jpg",
    fullSize: ".\\images\\flowers-red-large.jpg",
    description:
      "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany By Dietmar Rabich"
  },
  {
    thumb: ".\\images\\flowers-white-small.jpg",
    fullSize: ".\\images\\flowers-white-large.jpg",
    description:
      "Sentmaring Park, Münster, North Rhine-Westphalia, Germany By Dietmar Rabich "
  },
  {
    thumb: ".\\images\\flowers-yellow-small.jpg",
    fullSize: ".\\images\\flowers-yellow-large.jpg",
    description:
      "Market in Münster, North Rhine-Westphalia, Germany By Dietmar Rabich"
  }
];

//Functions
//Looping through images to set thumb and adding eventlister to the generated list
for (const image of images) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = image.thumb;
  li.appendChild(img);
  thumbbar.appendChild(li);
  img.className += " active";

  //Event Listener to change the full size image based on the thumbnail clicked
  li.addEventListener("click", function(e) {
    fullSize.src = image.fullSize;
    fullSize.alt = image.description;
    figCaption.textContent = image.description;

    // Greyscale Effect on all thumbnails except clicked one.
    var images = document.querySelectorAll(".active");
    [].forEach.call(images, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  });
}

//Function to make all images greyscale on page load
window.onload = function() {
  document.querySelector("li").click();
};

//Adding event listeners for CSS filter Styles

//Blur Effect
blur.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "blur(2px)";
});

//Hue Effect
hue.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "hue-rotate(90deg)";
});

//Contrast
contrast.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "contrast(200%)";
});

//Invert
invert.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "invert(75%)";
});

//Brightness
brightness.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "brightness(0.6)";
});

//Greyscale
greyscale.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "grayscale(75%)";
});

//Opacity
opacity.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "opacity(75%)";
});

//Saturate
saturate.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "saturate(130%)";
});

//Sepai
sepia.addEventListener("click", function() {
  full.style.webkitFilter = "";
  full.style.webkitFilter = "sepia(80%)";
});

//Reset
reset.addEventListener("click", function() {
  full.style.webkitFilter = "";
});
