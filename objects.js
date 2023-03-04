class Obj//nodes
{
	constructor(x,y,id)
	{
		this.x = x;
		this.y = y;
		this.id = id;
		this.left = null;
		this.right = null;
		this.flag=0;//0 for not yet triggered, 1 for triggered.
	}
}
//<!--button type="button" onClick="sense--> need a button for sensor?


class Tree
{
	constructor()
	{this.root = null;}
	addObj(x,y,id)//add objects.
	{
		const obj = new Obj(x,y,id);//the data to insert

		if(this.root == null){
			this.root = obj;
			return;
		}
		let curr = this.root;
		while(true){
			if(x < curr.x){
				if(curr.left == null){
					curr.left = obj;

					return;
				}
				curr = curr.left;
			}else{
				if(curr.right == null){
					curr.right = obj;

					return;
				}
				curr = curr.right;
			}
		}
	}
			
	findObj(x,y)//find objects; if found, declare its ID(temporarily)
	{
		let curr = this.root;
		if(curr == null){
			alert("NULL Tree");
			return null;}
		
		while(curr != null){

			if(x == curr.x && y == curr.y)//if found
			{
				return curr.id;}
			
			else{//not found
				if(x < curr.x){ //(if arg x less than current x)
				{curr = curr.left;}//Go left
				}					
				else{
				{curr = curr.right;}//or go right
				}
			}
		}
		return null;
	}
	//need to implement pre,in,post order
}
