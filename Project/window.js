"use strict";

function Window(desktop)
{
    var template = document.querySelector("#template");
    var windowTemplate = template.content.querySelector(".window");
    this.w = windowTemplate.cloneNode(true);
    
     this.titelelement = this.w.querySelector(".title");
    
     this.titelelement2 = this.w.querySelector(".title2");
     
     this.titelelement3 = this.w.querySelector(".load1");
     
     this.box = this.w.querySelector(".box");
     
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
Window.prototype.Load1 = function(load1)
{
    this.titelelement3.innerHTML = load1; 
};
