:root{
    --main
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

h1 {
    text-align: center;
    font-size: 50px;

    font-weight: 700;
    font-style: oblique;
    background-color: #242e47;

}

body {
    background-image:url(erasbackground.jpg);
}

header{
    margin: 0;
}

h1 {
    padding-top: 22px;
}

header > nav {
    width: 100%;
    padding: 0;
    height: 100%;
    margin: 0;
    background-color: #C7A8cb;
    margin-bottom: 16px;
    font-weight: bold; 
}

ol,
ul {
    list-style: none;
    font-weight: bold; 
    }

    a:visited, 
a{
    color:#242e47;
    text-decoration-color:rgb(198, 128, 210);
}

header > nav > ul {
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding: 0.7%;
}

    h2,
    h3, ul {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image:"/assets/background.jpg";
    font-style: italic;
    
    }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Berkshire Swash', cursive;
    height: 100vh;
    transition: background-image 0.5s ease-in-out;
}



button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #cdc9c1;
    border: 3px solid#242e47;
    border-radius: 5px;
    color: #242e47;
    cursor: pointer;
    margin: 0 auto;
    padding: 10px 20px;
    display: block;
    font-weight: bold; 
    margin: 10px auto; 

}

button:hover {
    background-color: #a5c9a5;
    border: 3px solid black;
    color: black;
}

text-container {
    text-align: center;
    color: #fafafa;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 10%;
    padding-bottom: 2%;
    font-weight: 900;
}

#text-container h2 {
    margin: 0;
    font-family:  "DM Serif Text", serif;
    font-weight: 900;
    font-size: 80px;
}

#text-container p {
    margin: 10px 0 0;
    font-size: 35px;
    font-weight: 10px;
    ;

}

#overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(65, 73, 145, 0.505);
    z-index: 1;
}

header, #text-container, button {
    position: relative; 
    z-index: 2;
}