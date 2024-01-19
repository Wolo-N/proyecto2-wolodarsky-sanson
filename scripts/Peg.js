
function Peg(x, y, r) {
    const options = {
        isStatic: true,
        restitution: 0.5,
        friction: 0
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    Peg.prototype.show = function() {
        noStroke();
        fill(127);
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}