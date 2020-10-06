// Schrijf hier je code

function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward5(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward10(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}

function ellShape(bike) {
    forward5(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);

}

function uTurn(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);

}

function crookedUTurn(bike) {
    forward5(bike);
    twiceForward(bike);
    turnRight(bike);
    forward5(bike);
    forward4(bike);
    turnRight(bike);
    thriceForward(bike);
}

function forwardUntilWall(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
}

function smartEllShape(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}

function spiral(car) {
    nummer = 18;

    while (nummer > 0) {
        forwardUntilWall(car);
        turnRight(car);
        nummer = nummer - 1;
    }
}

function turnleft(car) {
    turnRight(car);
    turnRight(car);
    turnRight(car);
}

function left(car) {
    turnleft(car);
    forward(car);
}




function slalom(car) {
    forwardUntilWall(car);
    left(car);
    forwardUntilWall(car);
    right(car);
    forwardUntilWall(car);
    right(car);
    forwardUntilWall(car);
    left(car);
    forwardUntilWall(car);
    left(car);
    forwardUntilWall(car);
    right(car);
    forwardUntilWall(car);
    right(car);
    forwardUntilWall(car);
}

function leftOrRight(car) {
    turnleft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnleft(car);
    forwardUntilWall(car);
}

function incompleteU(car) {
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnleft(car);
    forwardUntilWall(car);
    turnRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }

    forwardUntilWall(car);
}

function firstRight(car) {
    while (sensor(car)) {
        forward(car);
    }

    turnRight(car);
}