// let clicks = 0;


console.log("file is working!")

let bgbutton = document.getElementById("button");
console.log(bgbutton)
bgbutton.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("active");
}) 

// function clickInstructions(el) {
//     let title = document.getElementById("title");
//     let subtitle = document.getElementById("subtitle")
//     let clickCount = 0;

//     if(el == title) {
//         let img = document.createElement("img");
//         let imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("image");
//         imageWrapper.appendChild(img)
//         img.src = "images/pablo.png";
//         document.body.appendChild(img);
    
        
//     } else if (el == subtitle) {
//         let img = document.createElement("img");
//         let imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("image");
//         imageWrapper.appendChild(img)
//         img.src = "images/peaches2.png";
//         document.body.appendChild(img)
//     }
//     // if(clicks = 3) {
//     //     let img = document.createElement("img");
//     //     let imageWrapper = document.createElement("div");
//     //     imageWrapper.classList.add("image");
//     //     imageWrapper.appendChild(img)
//     //     img.src = "images/giphy.gif";
//     //     document.body.appendChild(img);
//     // }
// }


// document.addEventListener("click", function(event) {
//     clickInstructions(event.target)
//     // fifthclick(event.target)
//     clicks += 1;
//     console.log (clicks)
// });

// console.log("file is working");

// let backgroundButton = document.getElementById("button");

// console.log(backgroundButton)

// backgroundButton.addEventListener("click", function(event) {
//     console.log("clicked");
//     document.body.classList.toggle("button-active");
// });


