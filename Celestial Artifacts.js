//Celestial Artifact management, Stuart Rodenbeck
var admin_username = "username";
var admin_pass = "password";
//var gameObjects = [" ", " "];
var mapBoot = false;


function check_Credentials(){
  username = prompt("Enter your admin username.");
  password = prompt("Enter your admin password.");
  if(username==admin_username && admin_pass==password){
    return true;
  }
  alert("Invalid login.");
  return false;
}

//Initializes the map to all empty coordinates.
/*
function bootMap(){
  var gamesize = document.getElementById("game-size").value;
  var sizelist = gamesize.split("x");
  var x = Number(sizelist[0]);
  var y = Number(sizelist[1]);
  for(i=0;i<x;i++){
    var inner = [""];
    for(j=0;j<y;j++){
      inner[j] = 0;
    }
    gameObjects[i]=inner;
  }
  mapBoot = true;
}*/

function add_object(){
  if(check_Credentials()==false){
    return;
  }
  /*if(mapBoot == false){
    bootMap();
  }*/
  var object_type = parseInt(prompt("Enter the type of object to add: 1=Planet, 2=Asteroid, 3=Space Station"));
  if(object_type > 3 || object_type < 0){
    alert("Invalid object type.");
    return;
  }
  var xval = prompt("Enter the x coordinate.");
  var yval = prompt("Enter the y coordinate.");
  //gameObjects[xval][yval] = object_type;
  if(object_type==1){
    Objs.addObj(parseInt(xval), parseInt(yval), "Planet");
    alert("Placed a Planet at ("+xval+", "+yval+").");
  }
  if(object_type==2){
    Objs.addObj(parseInt(xval), parseInt(yval), "Asteroid");
    alert("Placed a Planet at ("+xval+", "+yval+").");
  }
  if(object_type==3){
    Objs.addObj(parseInt(xval), parseInt(yval), "Space Station");
    alert("Placed a Planet at ("+xval+", "+yval+").");
  }
  //alert("if you're seeing this shit works mostly.")
  alert("Hey");
  return;
}

/*function handle_collision(){
  //Call this when moving to a square with a CA.


}*/
