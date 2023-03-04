// Phuoc Nguyen
// Check the wormhole and energy/supplies for user stories 2,3,4 

// Function to check when the player status is normal and running out of energy and/or supplies
var showingEnergyMessage = true;
var showingSuppliesMessage = true;
function checkPlayerStatus() {
    var status = false;
    if (document.getElementById("player-status").value === "Regular play") {
        status = true;
    }

    var get_energy = document.getElementById("energy").value;
    var get_supplies = document.getElementById("supplies").value;

    if (Number(get_energy) < 1) {
        if (showingEnergyMessage) {
            document.getElementById("message").value = "Running out of energy!";
            showingEnergyMessage = false;
        }
        if (status) {
            setTimeout(function(){ 
                window.alert("GAME OVER\nRUNNING OUT OF ENERGY");
                window.location.reload();
            }, 1000);
        }
    } else {
        showingEnergyMessage = true;
    }

    if (Number(get_supplies) < 1) {
        if (showingSuppliesMessage) {
            document.getElementById("message").value = "Running out of supplies!";
            showingSuppliesMessage = false;
        }
        if (status) {
            setTimeout(function(){ 
                window.alert("GAME OVER\nRUNNING OUT OF SUPPLIES");
                window.location.reload();
            }, 1000);
        }
    } else {
        showingSuppliesMessage = true;
    }
}

// Function to check when player move beyond or out of the map
// ..., it can be relocated to a wormhole location
function checkWormholeLocation() {
    // MAX size
    var max_coords = document.getElementById("game-size").value.split('x');
    var max_x = Number(max_coords[0]);
    var max_y = Number(max_coords[1]);
    
    // Get current location
    var location_point = document.getElementById("location").value;
    var coords = location_point.split(',');
    var x = Number(coords[0]);
    var y = Number(coords[1]);

    // Get location after moving out of wormhole
    var location_point = document.getElementById("wormhole-location").value;
    var point = location_point.split(',');
    var x_worm_location = Number(point[0]);
    var y_worm_location = Number(point[1]);

    // Get list of wormhole locations on map
    var p_id = "list-wormhole-location";
    var list_wormhole_loc = [];
    
    for (var i = 1; i <= 3; i++) {
        var iter_list = [];
        var c_id = p_id.concat(i);

        var e = document.getElementById(c_id).value.split(",");
        iter_list.push(e[0]);
        iter_list.push(e[1]);

        list_wormhole_loc.push(iter_list);
    }

    // Get wormhole behavior
    var behavior = document.getElementById("wormhole-behavior").value;

    if ((x === Number(list_wormhole_loc[0][0]) && y === Number(list_wormhole_loc[0][1])) || 
        (x === Number(list_wormhole_loc[1][0]) && y === Number(list_wormhole_loc[1][1])) || 
        (x === Number(list_wormhole_loc[2][0]) && y === Number(list_wormhole_loc[2][1]))) {
        // Set messages
        document.getElementById("message").value = "Hitting wormhole, wormhole relocated you to a " + behavior.toLowerCase() + " spot";
        // Set new location
        if (behavior === "Fixed") {
            document.getElementById("location").value = x_worm_location.toString() + "," + y_worm_location.toString();
        } else {
            var rx = Math.floor((Math.random() * Number(max_x) + 1));
            var ry = Math.floor((Math.random() * Number(max_y) + 1));
            document.getElementById("wormhole-location").value = rx.toString() + "," + ry.toString();
            document.getElementById("location").value = rx.toString() + "," + ry.toString();
        }
    }
}