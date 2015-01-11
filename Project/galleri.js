"use strict";

function Galleri(w)
{
    w.setTitle("Galleri");
    w.Status("Loading");
    w.Imgtoptitle("pics/galleri.png");
    
    var box = w.box;   
    
    var XHR = new XMLHttpRequest();
    
    w.underline.appendChild(w.titelelement3);
  
    XHR.onreadystatechange = function()
    {
      if(XHR.readyState == 4 && XHR.status === 200)
      {
            w.titelelement3.parentNode.removeChild(w.titelelement3);
            w.Status("Click to view picture!");
            
            var array = JSON.parse(XHR.responseText);
            
            for(var i=0; i<array.length; i++)
            {
                var img = document.createElement("img");
                img.classList.add("smallimg");
                var aTag = document.createElement("a");
                aTag.href = "#";
                aTag.url = array[i].URL;
                
                img.src = array[i].thumbURL;
                
                aTag.onclick = function()
                {
                    
                    var wind = new Window(w.desktop);
                    var showpic = new Viewpic(wind, this.url);
                };
                
                aTag.appendChild(img);
                box.appendChild(aTag);
            }
                
      }
    };
    XHR.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",true);
    XHR.send(null);
}

function Viewpic(w, URL)
{
    var img = document.createElement("img");
    img.classList.add("bigimg");
    img.src = URL;
    w.box.appendChild(img);
    w.setTitle("Image Viewer");
    w.Status("Picture");
    w.Imgtoptitle("pics/galleri.png");
}