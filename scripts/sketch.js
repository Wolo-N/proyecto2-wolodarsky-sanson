import { persons } from 'persons.js';


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];

let pegs = [];
let rows = 11;
let cols = 10;
let particleSize = 10;
let bounds = [];

let currentPersonIndex = 0;  // Initialize it at the top of your script

let plinkoSize = 7;



function setup() {
    console.log("Setup funtion called!!")
    console.log(persons); // For testing, to see if data is loaded correctly

    createCanvas(600, 700);
    colorMode(HSB); 
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 2;

    const spacing = width / cols;
    for(let i = 0; i < rows + 1; i++) {
        for(let j = 0; j < cols - 1; j++){
            let x = i * spacing;
            if( j % 2 == 0) {
                x += spacing / 2;
            }
            let y = spacing + j * spacing;
            let peg = new Peg(x, y, plinkoSize);
            pegs.push(peg);
        }
    document.getElementById('dropButton').addEventListener('click', function() {
        newParticle();
    });
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
    if (currentPersonIndex < persons.length) {
        const person = persons[currentPersonIndex];
        const p = new Particle(random(100, 600), 0, particleSize, person);
        particles.push(p);
        currentPersonIndex++;  // Move to the next person
    } else {
        console.log("No more persons to drop as particles");
    }
}

function draw() {
    // Color del Fondo
    background(30);
    Engine.update(engine, 1000 / 60);


    for(let i=0; i<particles.length; i++){
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

    let particleInfoDiv = document.getElementById('particleInfo');
    particleInfoDiv.textContent = ''; // Clear the div
  
    for (let i = 0; i < particles.length; i++) {
        particles[i].show();
  
        if (particles[i].isMouseOver()) {
        let particle = particles[i];
        // Update the text content of the particleInfo div with the current particle info
        particleInfoDiv.textContent = `Particle at x: ${particle.body.position.x.toFixed(2)}, y: ${particle.body.position.y.toFixed(2)}`;
        }
    }
}

function displayInfo(particle) {
    // Here you define what information to show and style your text
    const info = `Particle at x: ${particle.body.position.x.toFixed(2)}, y: ${particle.body.position.y.toFixed(2)}`;
    
    fill(255); // White text color
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);
    text(info, particle.body.position.x, particle.body.position.y - particle.r * 2);
  }