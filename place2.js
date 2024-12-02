console.log("file working")

console.log("file is working!")

let changeactive = document.getElementById("button");

let active="off";

    console.log(changeactive)
changeactive.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("active");

    // active = "on"
    let image1 = document.getElementById("image1")
    let image2 = document.getElementById("image2")

    if(active == "off") {
        
        image1.src = "images/armadillo.png"
    
        image2.src = "images/possum.png"
        active = "on"

    } else {
        active = "off"

        image1.src = "images/pablo.png"

        image2.src = "images/peaches2.png"

    }

    console.log(active)

}) 


