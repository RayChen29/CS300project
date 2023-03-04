function collisionCheck(direction,x,y,distance,Tree)
{
	let dir = parseInt(direction);
	let dis = parseInt(distance);
	let X = parseInt(x);
	let Y = parseInt(y);
	if(dir == 0){
	for(let i = 1; i <= dis; i++)
	{
		if(Tree.findObj((X+i),Y) == "Asteroid")
		return true;
	}
	}
	
	if(dir == 90){
	for(let i = 1; i <= dis; i++)
	{
		if(Tree.findObj(X,(Y+i)) == "Asteroid")
		return true;
	}
	}
	
	if(dir == 180){
	for(let i = 1; i <= dis; i++)
	{
		if(Tree.findObj((X-i),Y) == "Asteroid")
		return true;
	}
	}
	
	if(dir == 270){
	for(let i = 1; i <= dis; i++)
	{
		if(Tree.findObj(X,(Y-i)) == "Asteroid")
		return true;
	}
	}
	return false;
}