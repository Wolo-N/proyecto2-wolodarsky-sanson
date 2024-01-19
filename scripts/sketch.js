

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];

let pegs = [];
let rows = 11;
let cols = 10;

let bounds = [];


// ===========================
//          Input.js
// ===========================

// const todos = [
//     "Delete all tests",
//     "Delete all code",
//     "Santhosh"
// ];

// document.getElementById("todos").innerHTML = todos.join("");

function setup() {
    console.log("Setup funtion called!!")
    createCanvas(600, 700);
    colorMode(HSB); 
    engine = Engine.create();
    world = engine.world;
    // world.gravity.y = 2;
    newParticle();
    const spacing = width / cols;
    for(let i = 0; i < rows + 1; i++) {
        for(let j = 0; j < cols - 1; j++){
            let x = i * spacing;
            if( j % 2 == 0) {
                x += spacing / 2;
            }
            let y = spacing + j * spacing;
            let peg = new Peg(x, y, 4);
            pegs.push(peg);
        }
    }

    let b = new Boundary(width/2, height + 50, width, 100);
    bounds.push(b);

    for(let i = 0; i < rows + 1; i++){
        let x = i * spacing;
        let w = 10;
        let h = 100;
        let y = height - h/2;
        let bucket = new Boundary(x, y, w, h);
        bounds.push(bucket);
    }
}

function newParticle() {
    const p = new Particle(300, 0, 10);
    particles.push(p);
}

function draw() {
    if(frameCount % 120 == 0) {
        newParticle();
    }
    background(0, 0, 0);
    Engine.update(engine, 1000 / 60);
    for(let i=0;i<particles.length;i++){
        particles[i].show();
        if(particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
            i--;
        }
    }
    for(const element of pegs){
        element.show();
    }
    for(const element of bounds){
        element.show();
    }
    
}