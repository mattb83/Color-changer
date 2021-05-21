alert('Click the button for a random color everytime!');

//Create a function for the random color.
//Create variables and assign values for each red, green, blue.
//Create a variable that combines all of said values.
//Log it, write it to the page and call the function.

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(randomColor);

    document.body.style.background = randomColor;
}


//The code above is almost complete. What this code does is 
//when you refresh the page, a new color appears as the 
//background. 

btn.addEventListener("click", randomColor);

randomColor();

//Way easier than I thought! All I had to do was declare
//the button, add event listener (the click) and declare
//what said event listener function to perform!