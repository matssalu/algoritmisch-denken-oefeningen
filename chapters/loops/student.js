// Schrijf hier je code

function sum(n) {
    b = 0;
    i = 1;
    while (i <= n) {
        b += i;
        i++;
    }
    return b;
}

function sumRange(from, to) {
    t = 0;
    g = 1;

    while (from <= to) {
        t = from + t;
        from = from + 1;
    }

    return t;
}

function factorial(n) {
    t = 1;
    g = 1;
    while (t <= n) {
        g = g * t;
        t = t + 1;
    }

    return g;
}

function multiply(a, b) {
    g = 0
    t = 0
    while (t < b) {
        g = g + a;
        t = t + 1;
    }
    return g;
}

function power(a, b) {
    g = 1
    t = 0
    while (t < b) {
        g = g * a;
        t = t + 1;
    }
    return g;
}

function thanos(population, target) {
    g = 0;
    while (population > target) {
        population = Math.ceil(population / 2);
        g = g + 1
    }
    return g;
}

function amazon(n) {
    let a = 50;
    let b = 50;
    while (n > 0) {
        const nextA = b * 0.95;
        const nextB = a * 1.1;
        a = nextA;
        b = nextB;
        n--;
    }
    return b;
}

function digitSum(n) {

    c = 0;
    while (n > 0) {
        c = c + laatstegetal(n);
        n = weglaatste(n);
    }

    return c;

    function laatstegetal(n) {
        return n % 10;
    }

    function weglaatste(n) {
        return Math.floor(n / 10);
    }
}

function divisibleBy3(n) {

    while (n >= 10) {
        n = digitSum(n);
    }
    return n === 0 || n === 3 || n === 6 || n === 9;
}

function sum2(n) {
    total = 0;
    for (i = 1; i <= n; ++i) {
        total += i;
    }
    return total;
}

function factorial2(n) {

    g = 1;

    for (t = 1; t <= n; ++t) {
        g = g * t
    }

    return g;
}

function fibonacci(n) {
    a = 0;
    b = 1;
    for (i = 1; i < n; ++i) {
        next = a + b;
        a = b;
        b = next;
    }
    return a;
}

function countDivisors(n) {
    counter = 0;
    mult = 1;
    while (mult <= n) {
        if (delen(mult, n)) {
            counter = counter + 1;
        }
        mult = mult + 1;
    }

    return counter;

    function delen(x, y) {
        return y % x === 0;
    }
}

function gcd(x, y){
    
}