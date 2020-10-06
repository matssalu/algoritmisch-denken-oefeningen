// Schrijf hier je code

function five() {
    return 5;
}

function average() {
    x = 135;
    y = 471;

    q = x + y;
    a = q / 2;

    return a;
}

function average2(x, y) {
    a = x + y;
    a2 = a / 2;
    return a2;
}

function average3(x, y, z) {
    a = x + y + z;
    a2 = a / 3;
    return a2;
}

function distance(x, y) {
    a = (x ** 2 + y ** 2) ** 0.5;
    return a;
}

function busesNeeded(people, busCapacity) {
    return Math.ceil(people / busCapacity);
}

function sugar(pies) {
    return Math.ceil(pies * 0.25);
}

function candyPerChild(children, candy) {
    b = candy / children;
    a = Math.floor(b);
    return a;
}

function leftoverCandy(children, candy) {
    a = candy % children;
    return a;
}

function hours(totalMinutes) {
    a = totalMinutes / 60;
    b = Math.floor(a);
    return b;
}

function minutes(totalMinutes) {
    a = totalMinutes % 60;
    return a;
}

function communicationCosts(seconds) {
    a = Math.ceil(seconds / 60) * 0.2;
    return a;
}

function distance2(x1, y1, x2, y2) {
    dx = x2 - x1;
    dy = y2 - y1;
    a = (dx ** 2 + dy ** 2) ** 0.5
    return a;
}

function cake(eggs) {
    a = Math.floor(eggs / 3);
    return a;
}

function cake2(eggs, flour) {
    a = Math.floor(eggs / 4);
    b = Math.floor(flour / 250);
    return Math.min(a, b);
}

function cake3(eggs, flour, sugar, butter) {
    a = Math.floor(eggs / 4);
    b = Math.floor(flour / 250);
    c = Math.floor(sugar / 250);
    d = Math.floor(butter / 250);
    return Math.min(a, b, c, d);
}

function roundToMultiple(n, multipleOf) {
    a = Math.round(n / multipleOf) * multipleOf;
    return a;
}

function middle(a, b, c) {
    return a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
}

function boxArea(width, height, depth) {
    a = width * height * 2;
    b = width * depth * 2;
    c = depth * height * 2;
    return a + b + c;
}

function toPercent(k, n) {
    a = k / n;
    return a * 100;
}

function percentOf(p, n) {
    a = p * n;
    b = a / 100
    return b;
}

function totalMinutes(hours, minutes) {
    a = hours * 60;
    return a + minutes;
}

function timeDifference(h1, m1, h2, m2) {
    uur = h2 - h1;
    min = m2 - m1;
    uur = uur * 60;
    return uur + min;
}

function lastDigit(n) {
    a = n % 10;
    return a;
}

function dropLastDigit(n) {
    a = Math.floor(n / 10);
    return a;
}

function penultimateDigit(n) {
    b = Math.floor(n / 10);
    a = b % 10;
    return a;
}

function celsiusToFahrenheit(celsius) {
    a = (celsius * 1.8) + 32;
    return a;
}

function fahrenheitToCelsius(fahrenheit) {
    a = (fahrenheit - 32) / 1.8;
    return a;
}

function nextPlayer(currentPlayer, playerCount) {
    return (currentPlayer + 1) % playerCount;
}

function previousPlayer(currentPlayer, playerCount) {
    return (currentPlayer + playerCount - 1) % playerCount;
}

function nextPlayer2(currentPlayer, playerCount) {
    a = currentPlayer % playerCount + 1;
    return a;
}

function previousPlayer2(currentPlayer, playerCount) {
    return (currentPlayer + playerCount - 2) % playerCount + 1;
}

function vat(amount) {
    a = amount * 1.21;
    return a;
}

function coins(amount) {
    a = amount % 5;
    ao = Math.floor(amount / 5);

    b = a % 2;
    bo = Math.floor(a / 2);

    c = b % 1;
    co = Math.floor(b / 1);

    return ao + bo + co;
}

function abs(n) {
    b = Math.abs(n);
    return b;
}

function sign(n) {
    return n / abs(n);
}