// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (products of dairy) {
        console.log(products);
    }
}

logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (my_var01 of Object.keys(bird)){
        console.log(`${my_var01}: ${bird[my_var01]}`)
    }
}

birdCan();

// Task 3
function animalCan() {
    for (my_var01 in bird) {
        console.log(`${my_var01}: ${bird[my_var01]}`);
    } 
}

animalCan();
