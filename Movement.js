
//checkLocation checks to see if the player is still within the gameplay space
//Student's choice on what to do if they left the galaxy - but something should happen


function checkLocation(x,y,Tree)
{
	/*if(x < 0 || x > 127) {
		x = random();
		y = random();
		document.getElementById("location").value = x.toString() + "," + y.toString();
		document.getElementById("message").value=item="Moved off map, wormhole relocated you to random spot";
	}
	else if (y < 0 || y > 127) {
		x = random();
		y = random();
		document.getElementById("location").value = x.toString() + "," + y.toString();
		document.getElementById("message").value=item="Moved off map, wormhole relocated you to random spot";
	}
	else
	{
		document.getElementById("location").value = x.toString() + "," + y.toString();
		document.getElementById("message").value=item="Movement Detected";
	}*/
	//Finding Space Station
	if(Tree.findObj(x,y) == "Space Station"){
			let credit = parseInt(document.getElementById("credits").value);
			var gamble = parseInt(prompt("Casinian: 'Hello. Would you like to GAMBLE your credits? We just roll two dice each and higher roll wins. Hit Cancel to back out.'"));
			if(gamble > credit){var gamble = parseInt(prompt("Hello. Would you like to GAMBLE your credits? We just roll two dice each and higher roll wins. Hit Cancel to back out."));}
			else if(Number.isNaN(gamble)){var gamble = parseInt(prompt("Hello. Would you like to GAMBLE your credits? We just roll two dice each and higher roll wins. Hit Cancel to back out."));}
			//how to handle non-numbers.
			else{
			min = Math.ceil(1);
			max = Math.floor(6);//player rolls
			p1 = Math.floor(Math.random() * (max-min+1) + min)
			p2 = Math.floor(Math.random() * (max-min+1) + min)
			o1 = Math.floor(Math.random() * (max-min+1) + min)//opponent rolls
			o2 = Math.floor(Math.random() * (max-min+1) + min)
			alert("You rolled " + p1 + " and " + p2);
			alert("Casinian rolled " + o1 + " and " + o2);
			if((p1+p2) == (o1+o2)){
				alert("We both rolled " + (o1+o2) + ", but consider this your win. You seem to be on an important mission anyways");
			credit += gamble;}
			if((p1+p2) > (o1+o2)){
				alert("Your " + (p1+p2) + " is higher than the Casinian's " + (o1+o2) + ". You win your credits!");
				credit += gamble;}
			if((p1+p2) < (o1+o2)){
				alert("My " + (o1+o2) + "is higher than your " + (p1+p2) + ". Sorry bud, but thanks for playing!");
			credit -= gamble;}
			document.getElementById("credits").value = credit;
			}
		}
	//Finding a Freighter
	if(Tree.findObj(x,y) == "Freighter"){
		current_supplies = parseInt(document.getElementById("supplies").value);
		current_energy = parseInt(document.getElementById("energy").value)
		//new_supplies = random(100);
		//new_energy = random(100);
		document.getElementById("message").value=item="You have encountered an abandoned freighter";
		var answer = parseInt(prompt("You have encountered an abandoned freighter, would you like to take on its additional supplies and energy? Enter '1' for YES or '2' for NO"));
		if(answer == 1){
			if(current_supplies != 100){
				current_supplies = 100;
				document.getElementById("supplies").value = current_supplies;
			}
			else{
				alert("You are already at max supplies and cannot take on anymore");
			}
			if(current_energy != 1000){
				current_energy = 1000;
				document.getElementById("energy").value = current_energy;
			}
			else{
				alert("You are already at max energy and cannot take on anymore");
			}
		}
	}
	
	//Running into a Hail storm
	if(Tree.findObj(x,y) == "Meteor Storm"){
		alert("You just encountered a Meteor Storm! Your ship has been damaged and should be repaired ASAP. Until then every movement will consumed 5x the amount of energy.");
		document.getElementById("ship-condition").value = "Damaged";
	}

	//Running into Bad Max
	if(Tree.findObj(x,y) == "Bad Max"){
		alert("You've stumbled across Bad Max! He steals some of your supplies as payment for safe passage.");
		document.getElementById("supplies").value -= 10;
	}
}


//returns a random number to be used as an x or a y coordinate. 
function random(number)
{
	min = Math.ceil(0);
	//max = Math.floor(128);
	max = Math.floor(number);
	return Math.floor(Math.random() * (max-min + 1) + min);
}
	
