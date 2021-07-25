class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    showGround() {
        push  ();
        rectMode(CENTER);
        fill ("Blue"); 
        noStroke();
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop ();
    }
}