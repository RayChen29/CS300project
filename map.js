//preset the locations of Celeron, Xeon, and Ryzen by generating 6 random values

//<!---->
function preset(Tree)
{//Setting random numbers between 0 and 128
	min = Math.ceil(0);
//	max = Math.floor(128);
	
	x = parseInt(document.getElementById("game-size").value.split('x'));
	y = parseInt(document.getElementById("game-size").value.split('y'));
	
	maX = Math.floor(x);
	maxY = Math.floor(y);

	//1st X coord
	num1 = Math.floor(Math.random() * ((maX-min+1) + min));
	//1st Y coord
	num2 = Math.floor(Math.random() * ((maxY-min+1) + min));
	
	//2nd XY coords
	num3 = Math.floor(Math.random() * ((maX-min+1) + min));
	num4 = Math.floor(Math.random() * ((maxY-min+1) + min));
	
	//3rd XY coords
	num5 = Math.floor(Math.random() * ((maX-min+1) + min));
	num6 = Math.floor(Math.random() * ((maxY-min+1) + min));




	
	Tree.addObj(num1,num2,"Celeron");
	Tree.addObj(num3,num4,"Xeon");
	Tree.addObj(num5,num6,"Ryzen");
	//'\r\n' for line breaks
	document.getElementById("map").value += "Celeron found at " + num1 + "," + num2 + '\r\n';
	document.getElementById("map").value += "Xeon found at " + num3 + "," + num4 + '\r\n';
	document.getElementById("map").value += "Ryzen found at " + num5 + "," + num6 + '\r\n';
}

function displayInfo(x,y,id)
{
	document.getElementById("map").value += id + " located at (" + x + "," + y + ")" + '\r\n';
}
