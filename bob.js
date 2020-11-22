class Bob {
    constructor(x, y) {
    var options = {
        restitution : 0.8,
        friction : 0.3,
        density : 0.8,
    };
    this.bob = Bodies.circle(x, y, 25, options);
    World.add(world, this.bob);
    }

    display() {
      fill("pink"); 
      ellipse(this.bob.position.x, this.bob.position.y, 50, 50);
    }
}