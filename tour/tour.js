const backgrounds = [
    'url("proimg/IMG_0623.GIF")',
];

const button = document.getElementById("change-button");
const body = document.body;

function changeBackground() {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    body.style.backgroundImage = randomImage;
    body.style.backgroundPosition = "center"
}

// button.addEventListener("click", changeBackground);

//hamburger
// let hamburgerOpen = false;
// let navigation = document.getElementById("navigation")
// let hamburgermenu = document.getElementById("hamburger-icon");

// hamburgermenu.addEventListener("click", function(event)) {
//     if(hamburgerOpen) {
//         navigation.style.display = "none"
//         hamburgerOpen = false;
//         hamburgermenu.classList.toggle("active")
//     }
// }

// //scroll

let first = document.getElementById('first-layer');
let second = document.getElementById('second-layer');
let third = document.getElementById('third-layer');
let fourth = document.getElementById('fourth-layer');
let fifth = document.getElementById('fifth-layer');
let sixth = document.getElementById('sixth-layer');
let seventh = document.getElementById('seventh-layer');
let eighth = document.getElementById('eighth-layer');

document.addEventListener("scroll", function(event) {
    let topScroll = window.scrollY;
    console.log(topScroll)
    first.style.top = 0.4 * topScroll + 'px';
    second.style.top = 0.2 * topScroll + 'px';
    third.style.top = 0.1 * topScroll + 'px';
    fourth.style.top = 0.3 * topScroll + 'px';
    fifth.style.top = 0.2 * topScroll + 'px';
    sixth.style.top = 0.1 * topScroll + 'px';
    seventh.style.top = 0.4 * topScroll + 'px';
    eighth.style.top = 0.3 * topScroll + 'px';

});
