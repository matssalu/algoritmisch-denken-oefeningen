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

function gcd(x, y) {
    start = Math.min(x, y); // x - y

    for (i = start; i > 1; --i) { // loop i = x - y, als i groter is dan 1, trek 1 van i af.
        if (isDivisorOf(i, x) && isDivisorOf(i, y)) { // als ke x en y kan delen door i, return true
            return i; // schrijf dat getal neer
        }
    }

    return 1; //als if false zei dan return 1 omdat dat een statement is in de forloop (i is groter dan 1)

    function isDivisorOf(x, y) {
        return y % x === 0; // return true als y % x geen comma getal is
    }
}

function lcm(x, y) { //7 en 5
    i = Math.max(x, y); // i = 7

    while (!isDivisorOf(x, i) || !isDivisorOf(y, i)) { // als 7 / 7 = false of 7 / 5 = false
        ++i;
    }

    return i;

    function isDivisorOf(x, y) {
        return y % x === 0; //als y / x niet comma is return TRUE
    }
}

function dice2(targetSum) {
    count = 0;
    for (i = 1; i <= 6; ++i) { // i = 1, moet kleiner of gelijk aan 6 zijn, + 1
        for (j = 1; j <= 6; ++j) { // j = 1, moet kleiner of gelijk aan 6 zijn, + 1
            if (i + j === targetSum) { // als i + j = som= true
                count++;
            }
        }
    }

    return count;
}

function dice3(targetSum) {
    count = 0;
    for (i = 1; i <= 6; ++i) { // i = 1, moet kleiner of gelijk aan 6 zijn, + 1
        for (j = 1; j <= 6; ++j) { // j = 1, moet kleiner of gelijk aan 6 zijn, + 1
            for (z = 1; z <= 6; ++z) {
                if (i + j + z === targetSum) { // als i + j = som= true
                    count++;
                }
            }
        }
    }

    return count;

}

function isPrime(n) {
    for (b = 2; b < + n; ++b) {
        if (n % b === 0) {
            return false;
        }
    }

    return n > 1;

}

function countPrimes(n) {
    result = 0;
    for (i = 0; i <= n; ++i) {
        if (isPrime(i)) {
            result++;
        }
    }
    return result;
}

function power2(a, b) {
    resultaat = 1;
    for (z = 0; z < b; ++z) {
        resultaat = resultaat * a;
    }

    return resultaat;
}

function sumRange2(from, to) {
    teller = 0;
    for (i = from; i <= to; ++i) {
        teller = teller + i;
    }

    return teller;
}

function invest(years) {
    teller = 1000;
    for (i = 0; i !== years; ++i) {
        teller = teller * 1.05;
        teller = teller + 100;
    }

    return teller;
}

function invest2(goal) {
    current = 1000;
    for (i = 0; current < goal; ++i) {
        current = current * 1.05;
        current = current + 100;

    }
    return i;
}

function dice4(targetSum) {
    count = 0;
    for (i = 1; i <= 6; ++i) { // i = 1, moet kleiner of gelijk aan 6 zijn, + 1
        for (j = 1; j <= 6; ++j) { // j = 1, moet kleiner of gelijk aan 6 zijn, + 1
            for (z = 1; z <= 6; ++z) {
                for (y = 1; y <= 6; ++y) {
                    if (i + j + z + y === targetSum) { // als i + j = som= true
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

function pythagoreanTriples(n) {
    let count = 0;
    for (let a = 1; a <= n; ++a) {
        for (let b = 1; b <= n; ++b) {
            const c = (a ** 2 + b ** 2) ** 0.5;
            if (Number.isInteger(c) && c <= n) {
                ++count;
            }
        }
    }
    return count;
}

function pythagoreanTriples2(n){
    let count = 0;
    for (let a = 1; a <= n; ++a) {
        for (let b = a; b <= n; ++b) {
            const c = (a ** 2 + b ** 2) ** 0.5;
            if (Number.isInteger(c) && c <= n) {
                ++count;
            }
        }
    }
    return count;
}