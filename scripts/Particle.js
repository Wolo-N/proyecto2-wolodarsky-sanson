function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function Particle(x, y, r, isStatic= true) {
    this.id = particleCounter;
    // Array of specific colors in RGB format
    const pink = { r: 254, g: 136, b: 212 }; // Pink: #FE88D4
    const cyan =    { r: 1, g: 207, b: 255 };   // Cyan: #01CFFF
    const orange =    { r: 255, g: 153, b: 0 };    // Orange: #FF9900
    const pinkHex = rgbToHex(pink.r, pink.g, pink.b);
    const cyanHex = rgbToHex(cyan.r, cyan.g, cyan.b);
    const orangeHex = rgbToHex(orange.r, orange.g, orange.b);

    this.stroke = 1000000;
    if (persons[particleCounter]["Genero"] == 'Masculino'){
        this.color = cyanHex; 
    } else if (persons[particleCounter]["Genero"] == 'Femenino'){
        this.color = pinkHex;
    } else{
        this.color = orangeHex;
    }
    if (persons[particleCounter]['Distancia a UTDT']>600){
        this.stroke = rgbToHex(242, 78, 30);
    }else if (persons[particleCounter]['Distancia a UTDT']<600 && persons[particleCounter]['Distancia a UTDT']>100){
        this.stroke = rgbToHex(226, 186, 45)
    }else{
        this.stroke = rgbToHex(142, 207, 59)
    }

    particleCounter++; // Assign and increment the particle counter
    this.s
    const options = {
        isStatic : isStatic,
        mass : 0,
        density : 1,
        restitution : 0.5,
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

        stroke(this.stroke);
        strokeWeight(2);
        fill(this.color); // Use the color property
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