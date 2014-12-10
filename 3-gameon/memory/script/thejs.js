"use strict";

window.onload = function()
{
    var memory = [];
    var header1 = document.querySelector("#startgame1");
    var header2 = document.querySelector("#startgame2");
    var board1 = document.querySelector("#section1");
    var board2 = document.querySelector("#section2");
    var text = document.querySelector("#text");
    var table = document.createElement('table');
    var tries = 0;
    var firstTry = null;
    var secondTry = null;
    var status = true;
    var turnedCard = 0;
    var pairs = 0;

    header1.addEventListener("click", function(e)
    {  
       e.preventDefault();
       memory = new RandomGenerator.getPictureArray(2, 4);
       console.log(memory);
       
       createboard(2, 4, board1);
       
       header1.removeEventListener("click", header1);
    });
    
    header2.addEventListener("click", function(e)
    {  
       e.preventDefault();    
       memory = new RandomGenerator.getPictureArray(4, 4);
       console.log(memory);
       
       createboard(4, 4, board2);        
    });

    var createboard = function(Row, Cell, board)
    {
        var count = 0;
        clear();
        text.innerHTML = "You Have Found: 0";
        table = document.createElement('table');
            for (var i = 0; i < Row; i++)
            {
                var tableRow = document.createElement('tableRow');
                
                for (var j = 0; j < Cell; j++)
                {
                    var tableCell = document.createElement('tableCell');
                    var img = document.createElement('img');
                    var link = document.createElement('a');
                    link.href = "#";
                    
                    img.src = "pics/0.png";
                    img.className = "pics/"+memory[count]+".png";
                    link.img = img;
                    
                    link.addEventListener("click", clickPic);
                    
                    link.appendChild(img);
                    tableCell.appendChild(link);
                    tableRow.appendChild(tableCell);
                    
                    count++;
                }
                
                table.appendChild(tableRow);
            }
            
            board.appendChild(table);
    };

    var clickPic = function()
    {
        
        if(status === true)
        {
            turnedCard += 1;
            this.img.src = this.img.className;
            
            
            if(turnedCard === 1)
            {
                firstTry = this;
                firstTry.removeEventListener("click", clickPic);
            }
            
            if(turnedCard === 2)
            {
                tries +=1;
                status = false;
                secondTry = this;
                turnedCard = 0;
                firstTry.addEventListener("click", clickPic);
                    if(firstTry.img.className === secondTry.img.className)
                    {
                        status = true;
                        pairs += 1;
                        firstTry.removeEventListener("click", clickPic);
                        secondTry.removeEventListener("click", clickPic);
                           
                        if(pairs === memory.length/2)
                        {
                            text.innerHTML = "YOU WON! Tries: "+tries;
                        }
                    }
                    else
                    {
                        setTimeout(function()
                        {
                            firstTry.img.src = "pics/0.png";
                            secondTry.img.src = "pics/0.png";
                            firstTry.addEventListener("click", clickPic);
                            secondTry.addEventListener("clcik", clickPic);
                            status = true;

                            
                        }, 500);
                    }
                if(pairs < memory.length/2)
                {
                    text.innerHTML = "You Have Found: "+pairs;
                }
            }       
            
        }
    };
    
    var clear = function()
    {
        table.innerHTML = "";
        
    };
};