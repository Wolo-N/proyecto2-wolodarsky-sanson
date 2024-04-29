
function Peg(x, y, r) {
    const options = {
        isStatic : true,
        density : 1,
        restitution : 1,
        friction : 0
    }
    this.color = random(40, 100);
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    Peg.prototype.show = function() {
        noStroke();
        fill(this.color);
        const {x, y } = this.body.position;
        push();
        translate(x, y);
        // radio de los pegs
        ellipse(0,0, this.r * 3);
        pop();
    }
}