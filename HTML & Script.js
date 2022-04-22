<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <h1 id="header">Hello</h1>
    <input type="text" id="inp">
    <button onclick="pressed()">Click</button>

    <script>
    // The ID for the text box is "inp", so this JS code gets the value of the text box in the HTML

    // When button is clicked my function is run to check the value and if the text is equal to red, the header (Hello) changes color to red because the "style.color"
    function pressed(){
        var text = document.getElementById("inp").value;
        if (text ==="red"){
        document.getElementById("header").style.color ="red";
        } 
    
    // else if the text is equal to green, the style.color changes text color to green
    else if(text ==="green") { 
        document.getElementById("header").style.color = "green";
    } 
    // same goes for blue
    else if(text ==="blue") { 
        document.getElementById("header").style.color = "blue";
    } 

    // Else the text does NOT equal "red", the color will switch to black
    else {
        document.getElementById("header").style.color = "black";
    }
    }
    </script>

</body>
</html>
