
//initializeState initializes various state variables upon start-up.
//In production mode, most of these should be populated from a configuration
//file or a random generator.
//Creating class objects that allow game objects to exist in game.
	var Objs = new Tree();
	var sensor = new Sensor();
/*(Current game object types are 
Asteroid
Celeron
Xeon
Ryzen
Space Station
*/
function initializeState()
{
    window.alert("Starting game");
    var values_from_gameConfig = JSON.parse(window.localStorage.getItem("gameConfig"));
    document.getElementById("game-size").value = (values_from_gameConfig === null) ? ("128x128") : (values_from_gameConfig["gameSize"][0] + "x" + values_from_gameConfig["gameSize"][1]);
    document.getElementById("location").value = (values_from_gameConfig === null) ? ("0,0") : (values_from_gameConfig["initialLocation"][0] + "," + values_from_gameConfig["initialLocation"][1]);
    document.getElementById("energy").value = (values_from_gameConfig === null) ? ("1000") : (values_from_gameConfig["energy"]);
    document.getElementById("supplies").value = (values_from_gameConfig === null) ? ("100") : (values_from_gameConfig["supplies"]);
    document.getElementById("credits").value = (values_from_gameConfig === null) ? ("1000") : (values_from_gameConfig["credits"]);

    // Wormhole behavior
    if (values_from_gameConfig === null) {
        document.getElementById("wormhole-behavior").value = "Fixed";
        document.getElementById("wormhole-location").value = "0,0";
    } else {
        document.getElementById("wormhole-behavior").value = (values_from_gameConfig["wormholeBehavior"] === "1") ? ("Random") : ("Fixed");
        document.getElementById("wormhole-location").value = values_from_gameConfig["wormholeLocation"][0] + "," + values_from_gameConfig["wormholeLocation"][1];
    }

    // Player Status
    if (values_from_gameConfig === null) {
        document.getElementById("player-status").value = "Regular play";
    } else {
        document.getElementById("player-status").value = (values_from_gameConfig["playerStatus"] === "1") ? ("Never dies") : ("Regular play");
    }

    // Messages
    document.getElementById("message").value = "Game start!";
    document.getElementById("ship-condition").value = "Good";


    // Get the max game size
    var x_gz = Number(values_from_gameConfig["gameSize"][0]);
    var y_gz = Number(values_from_gameConfig["gameSize"][1]);

    // List of wormhole locations on the map
    var parent_id = "list-wormhole-location";

    for (var i = 1; i <= 3; i++) {
        var child_id = parent_id.concat(i);

        var r_wormhole_x = random(x_gz-1);
        var r_wormhole_y = random(y_gz-1);
        var wh = r_wormhole_x.toString() + "," + r_wormhole_y.toString();

        document.getElementById(child_id).value = wh;
    }

    // Distance
    document.forms[0].distance.value = 1;
	
	// Adding the three planets
	preset(Objs);
	//can remove this when you want
	Objs.addObj(5,5,"Asteroid");
	Objs.addObj(100,101,"Space Station");
	Objs.addObj(21, 21, "Freighter");
	Objs.addObj(38, 40, "Meteor Storm");
    Objs.addObj(50, 55, "Bad Max");
}


//makeMove passes the player move and various state values to the game engine,
//then receives the response and updates the various fields on the web page


function makeMove(direction, distance)
{
    var a = parseInt(distance);
    var coords = document.getElementById("location").value.split(',');
    
    var x = Number(coords[0]);
    var y = Number(coords[1]);

    // MAX size
    var max_coords = document.getElementById("game-size").value.split('x');
    var max_x = Number(max_coords[0]);
    var max_y = Number(max_coords[1]);

    // Get location after moving out of wormhole
    var location_point = document.getElementById("wormhole-location").value;
    var point = location_point.split(',');
    var x_worm_location = Number(point[0]);
    var y_worm_location = Number(point[1]);

    // Get wormhole behavior
    var w_behavior = document.getElementById("wormhole-behavior").value;
    var rx = Math.floor((Math.random() * Number(max_x) + 1));
    var ry = Math.floor((Math.random() * Number(max_y) + 1));

	//Asteroid Collision variables
	var x1 = x;
	var y1 = y;

    switch(direction)
    {
		//collisionChecks  just check for asteroids we may have collided into.
		//Need to prevent damage from LEAVING the asteroid
        case '0':
            if(x < max_x - a) { 
                x += a; 
				if(collisionCheck(0,x1,y1,distance,Objs) == true){
					alert("ASTEROID CRASH!");
					document.getElementById("map").value += "Hit by asteroid. Lost resources." + '\r\n';
					//document.getElementById("energy").value -= (10*distance);
					document.getElementById("supplies").value -= (2*distance);
				}
                document.getElementById("message").value = "Movement Detected";
                document.getElementById("location").value = x.toString() + "," + y.toString();
            }
            else {
                if (w_behavior === "Fixed") {
                    document.getElementById("location").value = x_worm_location.toString() + "," + y_worm_location.toString();
                } else {
                    document.getElementById("wormhole-location").value = rx.toString() + "," + ry.toString();
                    document.getElementById("location").value = rx.toString() + "," + ry.toString();
                }
                document.getElementById("message").value = "Moved off map, wormhole relocated you to a " + w_behavior.toLowerCase() + " spot";
            }
        break;
        case '90':
            if(y < max_y - a) {
                y += a;
				if(collisionCheck(90,x1,y1,distance,Objs) == true){
					alert("ASTEROID CRASH!");
					document.getElementById("map").value += "Hit by asteroid. Lost resources." + '\r\n';
					//document.getElementById("energy").value -= (10*distance);
					document.getElementById("supplies").value -= (2*distance);
				}
                document.getElementById("message").value = "Movement Detected";
                document.getElementById("location").value = x.toString() + "," + y.toString();
            }
            else {
                if (w_behavior === "Fixed") {
                    document.getElementById("location").value = x_worm_location.toString() + "," + y_worm_location.toString();
                } else {
                    document.getElementById("wormhole-location").value = rx.toString() + "," + ry.toString();
                    document.getElementById("location").value = rx.toString() + "," + ry.toString();
                }
                document.getElementById("message").value = "Moved off map, wormhole relocated you to a " + w_behavior.toLowerCase() + " spot";
            }
        break;
        case '180':
            if(x >= a) {
                x -= a;
				if(collisionCheck(180,x1,y1,distance,Objs) == true){
					alert("ASTEROID CRASH!");
					document.getElementById("map").value += "Hit by asteroid. Lost resources." + '\r\n';
					//document.getElementById("energy").value -= (10*distance);
					document.getElementById("supplies").value -= (2*distance);
				}
                document.getElementById("message").value = "Movement Detected";
                document.getElementById("location").value = x.toString() + "," + y.toString();
            }
            else {
                if (w_behavior === "Fixed") {
                    document.getElementById("location").value = x_worm_location.toString() + "," + y_worm_location.toString();
                } else {
                    document.getElementById("wormhole-location").value = rx.toString() + "," + ry.toString();
                    document.getElementById("location").value = rx.toString() + "," + ry.toString();
                }
                document.getElementById("message").value = "Moved off map, wormhole relocated you to a " + w_behavior.toLowerCase() + " spot";
            }
        break;
        case '270':
            if(y >= a) {
                y -= a;
				if(collisionCheck(270,x1,y1,distance,Objs) == true){
					alert("ASTEROID CRASH!");
					document.getElementById("map").value += "Hit by asteroid. Lost resources." + '\r\n';
					//document.getElementById("energy").value -= (10*distance);
					document.getElementById("supplies").value -= (2*distance);
				}					
                document.getElementById("message").value = "Movement Detected";
                document.getElementById("location").value = x.toString() + "," + y.toString();
            }
            else {
                if (w_behavior === "Fixed") {
                    document.getElementById("location").value = x_worm_location.toString() + "," + y_worm_location.toString();
                } else {
                    document.getElementById("wormhole-location").value = rx.toString() + "," + ry.toString();
                    document.getElementById("location").value = rx.toString() + "," + ry.toString();
                }
                document.getElementById("message").value = "Moved off map, wormhole relocated you to a " + w_behavior.toLowerCase() + " spot";
            }
        break;
    }

     //Check ship condition
     if(document.getElementById("ship-condition").value == "Damaged"){
        document.getElementById("energy").value -= (50*distance);
    }
    else{
        document.getElementById("energy").value -= 10*a;
    }
    //document.getElementById("location").value = x.toString() + "," + y.toString();
    //document.getElementById("energy").value -= 10*a;
    //document.getElementById("supplies").value -= 2*a;
    document.getElementById("supplies").value -= 2;

    // All functions
    checkPlayerStatus();
    checkWormholeLocation();
    checkLocation(x,y,Objs);
}

function sensor_button() {
    var sensor = new Sensor();
    sensor.sense();
}
