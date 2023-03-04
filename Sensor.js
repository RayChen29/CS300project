
class Sensor {
    constructor() {
           this.x = 0;
           this.y = 0; 
    }
    updateLocation() {
        var coords = document.getElementById("location").value.split(',');  
        this.x = Number(coords[0]);
        this.y = Number(coords[1]);
    }
    check(x, y) {
        var c = Objs.findObj(x,y);
        if(c) 
            return true;
        return false;
    }
    sense() {
        this.updateLocation();
        document.getElementById("supplies").value -= 2;
        var x = this.x;
        var y = this.y;
        var find = null;
        ////////////////////////////////////////// radius = 1
        if(this.check(this.x,this.y+1)) {
            find = Objs.findObj(this.x,this.y+1);
            displayInfo(this.x,this.y+1,find);
        } 
        if(this.check(this.x+1,this.y+1)) {
            find = Objs.findObj(this.x+1,this.y+1);
            displayInfo(this.x+1,this.y+1,find);
        } 
        if(this.check(this.x+1,this.y)) {
            find = Objs.findObj(this.x+1,this.y);
            displayInfo(this.x+1,this.y,find);
        } 
        if(this.check(this.x+1,this.y-1)) {
            find = Objs.findObj(this.x+1,this.y-1);
            displayInfo(this.x+1,this.y-1,find);
        } 
        if(this.check(this.x,this.y-1)) {
            find = Objs.findObj(this.x,this.y-1);
            displayInfo(this.x,this.y-1,find);
        } 
        if(this.check(this.x-1,this.y-1)) {
            find = Objs.findObj(this.x-1,this.y-1);
            displayInfo(this.x-1,this.y-1,find);
        } 
        if(this.check(this.x-1,this.y)) {
            find = Objs.findObj(this.x-1,this.y);
            displayInfo(this.x-1,this.y,find);
        } 
        if(this.check(this.x-1,this.y+1)) {
            find = Objs.findObj(this.x-1,this.y+1);
            displayInfo(this.x-1,this.y+1,find);
        } 
        ///////////////////////////////////////// radius = 2
        if(this.check(this.x,this.y+2)) {
            find = Objs.findObj(this.x,this.y+2);
            displayInfo(this.x,this.y+2,find);
        } 
        if(this.check(this.x+1,this.y+2)) {
            find = Objs.findObj(this.x+1,this.y+2);
            displayInfo(this.x+1,this.y+2,find);
        } 
        if(this.check(this.x+2,this.y+2)) {
            find = Objs.findObj(this.x+2,this.y+2);
            displayInfo(this.x+2,this.y+2,find);
        } 
        if(this.check(this.x+2,this.y+1)) {
            find = Objs.findObj(this.x+2,this.y+1);
            displayInfo(this.x+2,this.y+1,find);
        } 
        if(this.check(this.x+2,this.y)) {
            find = Objs.findObj(this.x+2,this.y);
            displayInfo(this.x+2,this.y,find);
        } 
        if(this.check(this.x+2,this.y-1)) {
            find = Objs.findObj(this.x+2,this.y-1);
            displayInfo(this.x+2,this.y-1,find);
        } 
        if(this.check(this.x+2,this.y-2)) {
            find = Objs.findObj(this.x+2,this.y-2);
            displayInfo(this.x+2,this.y-2,find);
        } 
        if(this.check(this.x+1,this.y-2)) {
            find = Objs.findObj(this.x+1,this.y-2);
            displayInfo(this.x+1,this.y-2,find);
        } 
        if(this.check(this.x,this.y-2)) {
            find = Objs.findObj(this.x,this.y-2);
            displayInfo(this.x,this.y-2,find);
        } 
        if(this.check(this.x-1,this.y-2)) {
            find = Objs.findObj(this.x-1,this.y-2);
            displayInfo(this.x-1,this.y-2,find);
        } 
        if(this.check(this.x-2,this.y-2)) {
            find = Objs.findObj(this.x-2,this.y-2);
            displayInfo(this.x-2,this.y-2,find);
        } 
        if(this.check(this.x-2,this.y-1)) {
            find = Objs.findObj(this.x-2,this.y-1);
            displayInfo(this.x-2,this.y-1,find);
        } 
        if(this.check(this.x-2,this.y)) {
            find = Objs.findObj(this.x-2,this.y);
            displayInfo(this.x-2,this.y,find);
        } 
        if(this.check(this.x-2,this.y+1)) {
            find = Objs.findObj(this.x-2,this.y+1);
            displayInfo(this.x-2,this.y+1,find);
        } 
        if(this.check(this.x-2,this.y+2)) {
            find = Objs.findObj(this.x-2,this.y+2);
            displayInfo(this.x-2,this.y+2,find);
        } 
        if(this.check(this.x-1,this.y+2)) {
            find = Objs.findObj(this.x-1,this.y+2);
            displayInfo(this.x-1,this.y+2,find);
        } 
        if(!find) 
            document.getElementById("message").value = "There's nothing nearby"; 
    }
}
