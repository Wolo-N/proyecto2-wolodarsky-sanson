
function Particle(x, y, r) {
    // Array of specific colors in RGB format
    const colors = [
        // No aparecen del color que queremos.
        { r: 254, g: 136, b: 212 }, // Pink: #FE88D4
        { r: 1, g: 207, b: 255 },   // Cyan: #01CFFF
        { r: 255, g: 153, b: 0 }    // Orange: #FF9900
    ];

    // Select a random color from the array
    const colorIndex = floor(random(3)); // Get a random index 0, 1, or 2
    this.color = colors[colorIndex]; // Assign one of the specific colors

    const options = {
        isStatic : false,
        mass : 0,
        density : 1,
        restitution : 1.1,
        friction : 1
}

    x += random(-1, 1);
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    Particle.prototype.isOffScreen = function() {
        let x = this.body.position.x;
        return (x < -50 || x > width + 50 || y > height + 50);
    }

    Particle.prototype.show = function() {

        noStroke();
        fill(this.color.r, this.color.g, this.color.b); // Use the color property
        const pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0,0, this.r * 2); 
        pop();
    }
    Particle.prototype.isMouseOver = function() {
        const distance = dist(mouseX, mouseY, this.body.position.x, this.body.position.y);
        return distance < this.r;
    };
}