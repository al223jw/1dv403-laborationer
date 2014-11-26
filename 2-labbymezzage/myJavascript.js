"use strict";

var count = 0;
var submit = document.querySelector("#submit");
var countMessage = document.getElementById("counter");
var textMessage = document.getElementByID("textarea");
var myObject = {};
var allMessages;
var enter = document.getElementByID("textarea");
var messageholder = document.getElementById("area");

textMessage.value ="";
countMessage.innerHTML = "Antal medelande: " + count;

submit.addEventListener("click", function(e)
{
    if(textMessage.value === "")
    {
        e.preventDefault();
    }
    else
    {
        myObject = new Message(textMessage.value, new Date());
        allMessages.push(myObject);
        
        createMessage(allMessages.length-1);
        
        textMessage.value = "";
    }
});

enter.addEventListener("keydown", function(e)
{

    if(e.keyCode === 13 && !e.shiftKey)
    {
        e.preventDefault();
        if(textMessage.value !== "")
        {
            myObject= new Message(textMessage.value, new Date());
            allMessages.push(myObject);

            createMessage(allMessages.length-1);

            textMessage.value = "";
        }

    }
        else
        {
            console.log('ny rad');
        }
});

var createMessage = function(messageID)
{
    var text = document.createElement('p');
        text.className = "text";
        text.setAttribute('id', messageID);
       
    var image = document.createElement('img');
        image.src = "exit.png";
        image.className = "deletePic"+messageID;
        image.alt = "Delete";
    
    image.onclick = function()
    {
        var question = confirm("vill du verkligen radera meddelandet?");
               
        if(question === true)
        {
                   
            messageRemove(messageID);
            text.parentNode.removeChild(text);
            createMessage(allMessages);
        }
        else
        {
            return false;
        }
    
    };

    var clock = document.createElement('img');
        clock.src = "clock.png";
        clock.className = "clockPic";
        clock.alt = "Time of message";
   
    clock.onclick = function()
    {
       alert("Inlägget skapades "+ allMessages[messageID].getDate().toUTCString());
    };
    
    var theClock = document.createElement('div');
        theClock.className = "theClock";
        theClock.innerHTML = allMessages[messageID].getDateText();
    
        text.innerHTML = allMessages[messageID].getHTMLText();
        messageholder.appendChild(text);     
        text.appendChild(image);
        text.appendChild(clock);
        text.appendChild(theClock);
    
        count++;
        countMessage.innerHTML = "Antal meddelande: " + allMessages.length;
    
    var messageRemove = function(id)
    {
        allMessages.splice(id,1);
    };
    
    var fixMessage = function()
    {
        messageholder.innerHTML = "";
        
        for(var i = 0; i < allMessages.length; i++)
        {
            fixMessage(i);
        }
    };
    
};
