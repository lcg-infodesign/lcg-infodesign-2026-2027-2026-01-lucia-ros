let xMax = 400;
let yMax = 600;
let xCasa = xMax / 2;
let yCasa = yMax * 0.58;
let xNuvole = -150; 

function setup() {
    createCanvas(xMax, yMax);
}

function draw() { // scurimento
    let distanzaDalCentro = xNuvole - 200;
    if (distanzaDalCentro < 0) {
        distanzaDalCentro = -distanzaDalCentro; 
    }

    let scurimento = 0;
    if (distanzaDalCentro < 250) {
        scurimento = 130 * (1 - distanzaDalCentro / 250);
    }
    
    background(135 - scurimento, 206 - scurimento * 1.4, 235 - scurimento); // cielo

    // sole
    push();
    noStroke();
    let opacitaSole = 255;
    if (distanzaDalCentro < 200) {
        opacitaSole = 255 - (230 * (1 - distanzaDalCentro / 200));
    }
    fill(255, 220, 50, opacitaSole);
    circle(200, 110, 80);
    pop();

    // colline
    push();
    noStroke();
    fill(45 - scurimento * 0.3, 95 - scurimento * 0.5, 45 - scurimento * 0.3);   
    ellipse(80, yMax * 0.68, 320, 160);   // collina sinistra
    
    fill(35 - scurimento * 0.2, 80 - scurimento * 0.4, 35 - scurimento * 0.2);   
    ellipse(320, yMax * 0.66, 350, 190); // collina destra
  
    fill(40 - scurimento * 0.25, 85 - scurimento * 0.45, 40 - scurimento * 0.25);   
    ellipse(160, yMax * 0.65, 260, 130); 
    
    fill(38 - scurimento * 0.22, 82 - scurimento * 0.42, 38 - scurimento * 0.22);   
    ellipse(260, yMax * 0.64, 290, 140);
    pop();

    // prato
    push();
    noStroke();
    fill(30 - scurimento * 0.2, 75 - scurimento * 0.4, 30 - scurimento * 0.2);
    rect(0, yMax * 0.68, xMax, yMax * 0.32);
    pop();

   // sassi
    push();
    noStroke();
    fill(80 - scurimento * 0.3, 80 - scurimento * 0.3, 85 - scurimento * 0.3);
    for (let xSasso = 50; xSasso < xMax; xSasso += 110) {
        ellipse(xSasso, yMax * 0.88, 60, 28);
    }
    pop();

    // casa
    push();
    noStroke();
    fill(240 - scurimento * 0.7, 215 - scurimento * 0.7, 180 - scurimento * 0.7);
    rectMode(CENTER);
    rect(xCasa, yCasa + 25, 130, 110);
    pop();

    // tetto
    push();
    noStroke();
    fill(170 - scurimento * 0.6, 45 - scurimento * 0.3, 45 - scurimento * 0.3);
    triangle(xCasa - 80, yCasa - 30, xCasa, yCasa - 100, xCasa + 80, yCasa - 30);
    pop();

    // porta
    push();
    noStroke();
    fill(120 - scurimento * 0.5, 65 - scurimento * 0.3, 30 - scurimento * 0.2);
    rectMode(CENTER);
    rect(xCasa, yCasa + 52.5, 30, 55);
    pop();

    // finestra
    push();
    noStroke();
    fill(255, 255, 180); // Colore fisso
    circle(xCasa, yCasa, 28);
    pop();

    // movimento nuvola
    push();
    noStroke();
    fill(255, 255, 255, 225);

    let n1 = xNuvole;
    let n2 = xNuvole + 190;

// nuvola
    let coloreNuvola = 255 - scurimento * 0.6;
    fill(coloreNuvola, 250);
    ellipse(n1, 115, 130, 65);       // centro della nuvola
    ellipse(n1 - 45, 125, 90, 45);   // lato sinistro
    ellipse(n1 + 45, 120, 100, 50);  // lato destro
    // tutto in loop
    xNuvole = xNuvole + 1;
    if (xNuvole > xMax + 200) {
        xNuvole = -200; 
    }
}