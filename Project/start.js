"use strict";
function Start(desk)
{
    var start = document.querySelector("#start");
    
    var img = document.createElement("img");
    
    var img2 = document.createElement("img");
    
    img.src = "pics/galleri.png"; 
    img2.src = "pics/Memory.png";
    
    start.appendChild(img);
    
    start.appendChild(img2);
    
    img.onclick = function()
    {
        var w = new Window(desk);
        var galleri = new Galleri(w);
    };
    
    img2.onclick = function()
    {
        var w = new Window(desk);
        var memory = new Memory(w);
    };
}

