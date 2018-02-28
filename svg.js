var svg = document.getElementById("svg");
var clearbutton = document.getElementById("clear");
var oldX = -1;
var oldY = -1;
var started = 0;


var clear = function(e){
    svg.innerHTML = "";
    oldX = -1;
    oldY = -1;
};


var draw = function(e){
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("r","10");
    dot.setAttribute("cx",e.offsetX);
    dot.setAttribute("cy",e.offsetY);
    dot.setAttribute("fill","#FF0000");
    dot.setAttribute("stroke","#000000");
    svg.appendChild(dot);

    if(oldX != -1){
	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	line.setAttribute("x1",oldX);
	line.setAttribute("y1",oldY);
	line.setAttribute("x2",e.offsetX);
	line.setAttribute("y2",e.offsetY);
	line.setAttribute("stroke","#000000");
	svg.appendChild(line);

    }
    oldX = e.offsetX;
    oldY = e.offsetY;


};


clearbutton.addEventListener("click",clear);
svg.addEventListener("click",draw);
