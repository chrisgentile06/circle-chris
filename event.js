let clicks = 0;


function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")
    let clickCount = 0;

    if(el == title) {
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "images/neogif.gif";
        document.body.appendChild(img);
    
        
    } else if (el == subtitle) {
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "images/bunny.gif";
        document.body.appendChild(img)
    }
    if(clicks = 5) {
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "images/giphy.gif";
        document.body.appendChild(img);
    }
}

// let clickCount = 0;

// document.getElementById("myImage").addEventListener("click", function() {
// clickCount++;

//     if (clickCount === 5) {
//     this.src = "images/giphy.gif"; 
//     }
// });

// function fifthclick () {
//     if (clicks> 5) {
//     let img = document.createElement("img");
//     let imageWrapper = document.createElement("div");
//     imageWrapper.classList.add("image");
//     imageWrapper.appendChild(img)
//     img.src = "images/giphy.gif";
//     document.body.appendChild(img)
//     console.log('title clicked five times')
// } } 

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
    // fifthclick(event.target)
    clicks += 1;
    console.log (clicks)
});

