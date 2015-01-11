"use strict";

function Window(desktop)
{
    var template = document.querySelector("#template");
    var windowTemplate = template.content.querySelector(".window");
    this.w = windowTemplate.cloneNode(true);
    this.underline = this.w.querySelector(".underline");
    this.titelelement = this.w.querySelector(".title");
    
    this.titelelement2 = this.w.querySelector(".title2");
    
    this.titelelement3 = document.createElement('img');
    this.titelelement3.classList.add("load1");
    this.titelelement3.src = "pics/Loader.gif"; 
    
    this.box = this.w.querySelector(".box");
    
    this.img = this.w.querySelector(".img");
    
    this.desktop = desktop;
     
    
    var close = this.w.querySelector(".exit");
    
    var self = this;
    
    close.onclick = function()
    {
        self.close();
    };
    
    desktop.element.appendChild(this.w);
}


Window.prototype.close = function()
{
    this.w.parentNode.removeChild(this.w);
};

Window.prototype.setTitle = function(title)
{
    
    this.titelelement.innerHTML = title;
    
};
Window.prototype.Status = function(title2)
{
    this.titelelement2.innerHTML = title2;    
};
Window.prototype.Imgtoptitle = function (img)
{
    this.img.src = img;
};

