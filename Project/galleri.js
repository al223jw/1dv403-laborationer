"use strict";

function Galleri(w)
{
    w.setTitle("Galleri");
    w.Status("Loading");
    
    var box = w.box;   
    
    var XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function()
    {
      if(XHR.readyState == 4 && XHR.status === 200)
      {
            var array = JSON.parse(XHR.responseText);
            console.log(array);
            
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
}