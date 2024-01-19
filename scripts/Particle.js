
function Particle(x, y, r) {
    this.hue = random(360);
    const options = {
        restitution: 0.5,
        friction: 0, 
        density: 1
    }
    x += random(-1, 1);
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    Particle.prototype.isOffScreen = function() {
        let x = this.body.position.x;
        return (x < -50 || x > width + 50);
    }

    Particle.prototype.show = function() {
        fill(this.hue, 255, 255);
        stroke(255);
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}