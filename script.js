var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setgradient(){
    body.style.background =
    "linear-gradient(to right,"
    + color1.value
    +","
    +color2.value
    +")"
    console.log("color1.value");
    console.log("color2.value");

    css.textContent = body.style.background + ";";
}

function Numbergenerator(){
    var num = Math.floor(Math.random() * 256);
    return num;
}

function createRandom(){
    
    let r1 = Numbergenerator();
    let r2 = Numbergenerator();
    let g1 = Numbergenerator();
    let g2 = Numbergenerator();
    let b1 = Numbergenerator();
    let b2 = Numbergenerator();
    body.style.background=
    "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))";
    // "linear-gradient(to right, rgb(Numbergenerator(), Numbergenerator(), Numbergenerator()), rgb(Numbergenerator(), Numbergenerator(), Numbergenerator()))";
    // console.log(typeof(r1));
    // console.log(r2);
    // console.log(g1);
    // console.log(g2);
    // color1.value ="linear-gradient(rgb(" 
	// + r1 + ", " + g1 +", " + b1 
	// + "))";
    color1.value = RGBToHex(r1,g1,b1);
    color2.value = RGBToHex(r2,g2,b2);
    css.textContent = body.style.background + ";";

}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
random.addEventListener("click", createRandom);