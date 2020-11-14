// This is for the message
alert("Hey there! Thanks for clicking on this link!");
alert("I made a little something for you, I hope you like it <3")
let name = prompt("Please enter your name to continue :)");
document.getElementById("message").innerHTML = "Dear " + name + ",";

// This is for changing the color of the card
// Function to get color you typed in and changing background color the color
function getColor() {
    // Get the variable color name that was typed in
    let colorName = document.getElementById('my_color').value;
    // Check what color was inputted and change background color
    if (colorName == 'red') {
      document.body.style.backgroundColor = "#fa7e6e";
    } else if (colorName == 'orange') {
      document.body.style.backgroundColor = "#fab854";
    } else if (colorName == 'yellow') {
      document.body.style.backgroundColor = "#fad857";  
    } else if (colorName == 'green') {
      document.body.style.backgroundColor = "#93fab9";  
    } else if (colorName == 'blue') {
      document.body.style.backgroundColor = "#69b8fa";  
    } else if (colorName == 'purple') {
      document.body.style.backgroundColor = "#aa84fa";    
    } else if (colorName == 'pink') {
      document.body.style.backgroundColor = "#fa9bdf";
    }  else if (colorName == 'default') {
      document.body.style.backgroundColor = "#B5CCE6";
    } else {
      alert('Pick a color that is available! Colors: red, orange, yellow, green, blue, purple, pink, or default')
    }
  }
  