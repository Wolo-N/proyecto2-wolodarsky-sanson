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
let particleCounter = 0;

// Caudal, cuanto mas bajo mas bolitas.
let caudal = 30;

let plinkoSize = 7;



function setup() {
    console.log(persons[1])
    createCanvas(600, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 2;

    const spacing = width / cols;
    for (let i = 0; i < rows + 1; i++) {
        for (let j = 0; j < cols - 1; j++) {
            let x = i * spacing;
            if (j % 2 == 0) {
                x += spacing / 2;
            }
            let y = spacing + j * spacing;
            let peg = new Peg(x, y, plinkoSize);
            pegs.push(peg);
        }
    }

    let b = new Boundary(width / 2, height + 50, width, 100);
    bounds.push(b);

    let leftBoundary = new Boundary(0-1, height / 2, 1, height);
    bounds.push(leftBoundary);

    // Right boundary
    let rightBoundary = new Boundary(width+1, height / 2, 1, height);
    bounds.push(rightBoundary);

    for (let i = 0; i < rows + 1; i++) {
        let x = i * spacing;
        let w = 10;
        let h = 100;
        let y = height - h / 2;
        let bucket = new Boundary(x, y, w, h);
        bounds.push(bucket);
    }
    // Button setup
    const dropButton = document.getElementById('dropButton');
    let i = 0;
    dropButton.addEventListener('click', function () {
        // Filter to get only static particles
        const staticParticles = particles.filter(p => p.body.isStatic);

        if (staticParticles.length > 0) {
            // Generate a random index from the static particles array
            const index = Math.floor(Math.random() * staticParticles.length);

            // Select the particle at the random index and set it to dynamic
            Matter.Body.setStatic(staticParticles[index].body, false);

            // Optional: Log the action or update the UI as necessary
            console.log("Dropped particle:", staticParticles[index]);

        } else {
            console.log("No more static particles to drop.");
        }
    });

    let randomValues = [];
    for (let o = 1; o < 37; o++) {
        let randomIntDrop;
        let y = kmAy(persons[particleCounter]["Distancia a UTDT"]);
        let attempts = 0;
        let maxAttempts = 100;

        do {
            randomIntDrop = Math.floor(Math.random() * 601);
            attempts++;
        } while (randomValues.includes(randomIntDrop) && attempts < maxAttempts);

        if (attempts < maxAttempts) {
            randomValues.push(randomIntDrop);
            newParticle(randomIntDrop, y);
            particleCounter++;
        } else {
            console.log('Max attempts reached, unable to place particle without overlap.');
            break;
        }
    }
}


function newParticle(x, y) {
    // Ensure default values if none are provided
    let xPos = x || random(100, 600); // Use given x or random if not specified
    let yPos = y || 0; // Use given y or default to 0 if not specified

    const p = new Particle(xPos, yPos, 10);
    particles.push(p);
}



function draw() {
    // Color del Fondo
    background('#1f2229');
    Engine.update(engine, 1000 / 60);


    for (let i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
            i--;
        }
    }
    for (const element of pegs) {
        element.show();
    }
    for (const element of bounds) {
        element.show();
    }

    let particleInfoDiv = document.getElementById('particleInfo');
    particleInfoDiv.textContent = ''; // Clear the div

    for (let i = 0; i < particles.length; i++) {
        particles[i].show();

        if (particles[i].isMouseOver()) {
            let particle = particles[i];
            // Update the text content of the particleInfo div with the current particle info
            particleInfoDiv.textContent = `${persons[particle.id]["Nombre Completo"]} de ${persons[particle.id]["Lugar de nacimiento"]}`;
        }
    }
}

function displayInfo(particle) {
    // Here you define what information to show and style your text
    const info = `Nombre: ${particle.person['Nombre Completo']}, Particle at x: ${particle.body.position.x.toFixed(2)}, y: ${particle.body.position.y.toFixed(2)}`;

    fill(255); // White text color
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);
    text(info, particle.body.position.x, particle.body.position.y - particle.r * 2);
}