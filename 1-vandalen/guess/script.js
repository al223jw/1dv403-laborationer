"use strict";

window.onload = function()
{
	
	var secret = Math.floor((Math.random() * 100) + 1); //Ett slumpat tal
	var guesses = 0;
	
	// I denna funktion har jag skrivit koden för att hantera "spelet"
	var guess = function(number)
	{
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.


		// Returnera exempelvis:
		

		
		// I följande kodstycke skriver jag ut alla mina True och False värden. Vilket kommer berätta om talet är för högt, litet eller rätt!
		if(number == secret) 
		{
			guesses++;
			return [true, "Grattis du vann! Det hemliga talet var " + secret + "och du behövde " +guesses +  " gissningar för att hitta det."];
		}
		
		if(number < 0 || number > 100)
		{
			return [false, "Talet är utanför intervallet 0 - 100"];
		}
		
		if(number < secret)
		{
			guesses++;
			return [false, "Det hemliga talet är högre! Du gissade: " + number];
		}
		
		if(number > secret)
		{
			guesses++;
			return [false, "Det hemliga talet är lägre! Du gissade: " + number];
		}
	}
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e)
	{
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true)
		{				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};