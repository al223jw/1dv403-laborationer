"use strict";

var quiz = 
{
    Tries: 0,
    arrayTry: [],
    jsoncopy: null,
    restart: 0,
    
    init:function()
    {
        var input = document.getElementById("textarea");
        quiz.restart = document.getElementById("restart");
        quiz.restart.onclick = quiz.restartclick;
        quiz.renderQuestion("http://vhost3.lnu.se:20080/question/1");
        
        quiz.arrayTry.length = 0;
        
        document.getElementById("submit").onclick = function(e)
        {
            if (input.value !== "")
            {
                quiz.answerQuestion(input.value, quiz.jsoncopy.nextURL);
            }
            else
            {
                e.preventDefault();
            }
        };
                
        input.onkeydown = function(e)
        {
            if (e.keyCode === 13)
                {
                    if (input.value !== "")
                    {
                        quiz.answerQuestion(input.value, quiz.jsoncopy.nextURL);
                    }
                    else
                    {
                        e.preventDefault();
                    }
                }
        };
    },    
        
    renderQuestion: function(url)
    {
        quiz.Tries = 0;
        var Question = document.getElementById("section1");
        var XHR = new XMLHttpRequest();
        var input = document.getElementById("textarea");
        input.value = "";
        
        XHR.onreadystatechange = function()
        { 
            if (XHR.readyState === 4 && XHR.status === 200)
            {
                quiz.jsoncopy = JSON.parse(XHR.responseText);
                Question.innerHTML = quiz.jsoncopy.question;
            }
        };
        XHR.open("GET",url , true);
        XHR.send(null);
    },
    
    answerQuestion: function(answer, url)
    {
        var i;
        
        var XHR1 = new XMLHttpRequest();
        
        var status = document.getElementById("section2");
        
        XHR1.onreadystatechange = function()
        {
             if (XHR1.readyState === 4)
             {
                var response = JSON.parse(XHR1.responseText);
                if (response.message === "Correct answer!")
                {
                    
                    if (response.nextURL !== undefined)
                    {
                        quiz.arrayTry.push(quiz.Tries);
                        quiz.renderQuestion(response.nextURL);
                        status.innerHTML = "Rätt svar!";
                        console.log(quiz.arrayTry);
                    }
                    else
                    {
                        quiz.arrayTry.push(quiz.Tries);
                        status.innerHTML = "Du klara dig! Resultat:";
                        
                        document.getElementById("submit").disabled = true;
                        document.getElementById("textarea").value = "";
                        for (i = 1; i < quiz.arrayTry.length + 1; i +=1)
                        {
                            var pTag = document.createElement("p");
                            pTag.innerHTML = "Fråga "+i+": "+quiz.arrayTry[i-1]+" försök";
                            status.appendChild(pTag);
                        }
                    }
                }
                else
                {
                    quiz.Tries += 1;
                    document.getElementById("textarea").value = "";
                    console.log(quiz.arrayTry);
                    status.innerHTML = "Fel svar!";
                }
            }
        };
        var sendAnswer = JSON.stringify({answer: answer});
        XHR1.open("POST",url , true);
        XHR1.setRequestHeader("Content-type", "application/json");
        XHR1.send(sendAnswer);
        
    },
    
    restartclick: function()
    {
        var status = document.getElementById("section2");
        
        quiz.Tries = 0;
        quiz.arrayTry = [];
        quiz.jsoncopy = null;
        quiz.restart = 0;
        status.innerHTML = "Det blir kul..";
        quiz.init();
    }
};
window.onload = quiz.init;