let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    background("black")
    fill("pink");
    // Task: Align the text to the center using textAlign
    textAlign(CENTER, CENTER);
    // Task: set font size to 20 using textSize
    textSize(20)
    yPos = 100;
    for (let count = 0; count < 5; count++) {
        text(pokemons[count], width/2, yPos)
        yPos = yPos + 30
    } 

}

