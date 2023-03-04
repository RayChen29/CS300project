// Phuoc Nguyen

// Get Input by Id
function getInputValueById(id) { return document.getElementById(id).value; }

// ============================================================================================= //
// SWITCH TOGGLE
// ============================================================================================= //
document.getElementById("wormhole_behavior").addEventListener("change", function (e) {
    var child = 
        `<div class="row">
            <div class="col-33-label"><label for=fixed-worm-loc><b>Fixed Wormhole Location (X, Y): </b></label></div>
            <div class="col-33-input"><i>X = </i><input type="text" name="x_fixed_worm_loc" id="x_fixed_worm_loc" style="width: 64%;" value="50" placeholder="X-coordinate"></div>
            <div class="col-33-input"><i>Y = </i><input type="text" name="y_fixed_worm_loc" id="y_fixed_worm_loc" style="width: 64%;" value="50" placeholder="Y-coordinate"></div>
        </div>`; 
    if(document.getElementById("wormhole_behavior").checked) {
        document.getElementById("fixed_worm_loc").innerHTML = ``;
    } else  {
        document.getElementById("fixed_worm_loc").innerHTML = child;
    }
});


// ============================================================================================= //
// SAVE GAME CONFIGURATION DATA
// ============================================================================================= //
// Function to handle errors and save game size to object
function saveGameSize() {
    // Get value from game size
    var max_sizeX = getInputValueById("x_game_size");
    var max_sizeY = getInputValueById("y_game_size");

    if (isNaN(max_sizeX) || isNaN(max_sizeY)) {
        max_sizeX = "128";
        max_sizeY = "128";
    } 
    if (Number(max_sizeX) > 128 || Number(max_sizeX) < 0) {
        max_sizeX = "128";
    }
    if (Number(max_sizeY) > 128 || Number(max_sizeY) < 0) {
        max_sizeY = "128";
    }
    return {"gameSize" : [max_sizeX, max_sizeY]};
}


// Function to handle errors and save player status to object
function savePlayerStatus() {
    var player_status;
    if (document.getElementById("player-status").checked) {
        player_status = "1";  // Immortal
    } else {
        player_status = "0";  // Mortal
    }
    return {"playerStatus" : player_status};
}


// Function to handle errors and save wormhole behavior to object
function saveWormholeBehavior(max_sizeX, max_sizeY) {
    // Initialize variables
    var wormhole_behavior;
    var x_location;
    var y_location;

    if (document.getElementById("wormhole_behavior").checked) {
        wormhole_behavior = "1";  // Random
        x_location = Math.floor((Math.random() * Number(max_sizeX) + 1));
        y_location = Math.floor((Math.random() * Number(max_sizeY) + 1));
    } else {
        wormhole_behavior = "0";  // Fixed;
        x_location = Number(getInputValueById("x_fixed_worm_loc"));
        y_location = Number(getInputValueById("y_fixed_worm_loc"));

        if (isNaN(x_location) || isNaN(y_location)) {
            x_location = Math.floor((Math.random() * Number(max_sizeX) + 1));
            y_location = Math.floor((Math.random() * Number(max_sizeY) + 1));
        }
        if (Number(max_sizeX) < x_location || x_location < 0) {
            x_location = Math.floor((Math.random() * Number(max_sizeX) + 1));
        }
        if (Number(max_sizeY) < y_location || y_location < 0) {
            y_location = Math.floor((Math.random() * Number(max_sizeY) + 1));
        }
    }
    return {"wormholeBehavior" : wormhole_behavior, "wormholeLocation" : [x_location.toString(), y_location.toString()]};
}


// Function to handle errors and save initial points to object
function saveInitialLocation(max_sizeX, max_sizeY) {
    // Initialize variables
    var x_location = Number(getInputValueById("LocationX"));
    var y_location = Number(getInputValueById("LocationY"));

    if (isNaN(x_location) || isNaN(y_location)) {
        x_location = Math.floor((Math.random() * Number(max_sizeX) + 1));
        y_location = Math.floor((Math.random() * Number(max_sizeY) + 1));
    }
    if (Number(max_sizeX) < x_location || x_location < 0) {
        x_location = Math.floor((Math.random() * Number(max_sizeX) + 1));
    }
    if (Number(max_sizeY) < y_location || y_location < 0) {
        y_location = Math.floor((Math.random() * Number(max_sizeY) + 1));
    }
    return {"initialLocation" : [x_location.toString(), y_location.toString()]};
}


// Function to handle errors and save the initial energy value
function saveEnergy() {
    // Get value
    var energy_val = getInputValueById("Energy");
    if (isNaN(energy_val)) {
        energy_val = "1000"
    }
    return {"energy" : energy_val};
}


// Function to handle errors and save the initial supplies value
function saveSupplies() {
    // Get value
    var supplies_val = getInputValueById("Supplies");
    if (isNaN(supplies_val)) {
        supplies_val = "100"
    }
    return {"supplies" : supplies_val};
}


// Function to handle errors and save the initial supplies value
function saveCredits() {
    // Get value
    var credits_val = getInputValueById("Credits");
    if (isNaN(credits_val)) {
        credits_val = "1000"
    }
    return {"credits" : credits_val};
}


// Function to handle errors and save all elements of game config to object
function saveGameConfig() {
    // Call game size
    var game_size = saveGameSize();
    // Call initial location
    var initial_location = saveInitialLocation(game_size["gameSize"][0], game_size["gameSize"][1]);
    // Call wormhole behavior
    var wormhole_behavior = saveWormholeBehavior(game_size["gameSize"][0], game_size["gameSize"][0]);
    // Call player status
    var player_status = savePlayerStatus();
    // Save energy, supplies and credits
    var energy_val = saveEnergy();
    var supplies_val = saveSupplies();
    var credits_val = saveCredits();

    // Save everything to object
    var obj = Object.assign(game_size, initial_location, wormhole_behavior, player_status, energy_val, supplies_val, credits_val);
    console.log(obj);
    console.log(wormhole_behavior);

    // Store JSON object to localStorage
    window.localStorage.setItem('gameConfig', JSON.stringify(obj));
    console.log("Successfully store in localStorage!");
}

// Submit game config
document.getElementById("game-config-sub-btn").addEventListener("click", function(e) {saveGameConfig();});