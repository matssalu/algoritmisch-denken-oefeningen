// Schrijf hier je code
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function sum(ns) {
    if (ns.length === 0) {
        return 0;
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        return first + sum(rest);
    }
}

function minimum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        const minimumOfRest = minimum(rest);
        if (first < minimumOfRest) {
            return first;
        } else {
            return minimumOfRest;
        }
    }
}

function maximum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        const minimumOfRest = maximum(rest);
        if (first > minimumOfRest) {
            return first;
        } else {
            return minimumOfRest;
        }
    }
}

function isIncreasing(ns) {
    if (ns.length < 2) { // als lengte van ns kleiner is dan 2, return true
        return true;
    } else { 
        const [first, second, ...rest] = ns; //first = ns[0], second = ns[1] en rest is alle andere getallen
        return first <= second && isIncreasing([second, ...rest]); // return true als first kleiner is dan second EN doe de functie opnieuw voor lijtst second,rest
    }
}

function contains(xs, x) {
    if (xs.length === 0) { // als lengte van xs gelijk is aan 0 print false
        return false;
    } else {
        const [first, ...rest] = xs; //first = xs[0] en rest = de rest
        return first === x || contains(rest, x); // return true als xs[0] gelijk is aan x OF doe functie opnieuw
    }
}

function count(xs, x) {
    if (xs.length === 0) {
        return 0;
    } else {
        const [first, ...rest] = xs; 
        const countInRest = count(rest, x); // tel hoeveel keer x in rest zit
        if (x === first) {
            return countInRest + 1; // als first ook gelijk aan x is, tel + 1
        } else {
            return countInRest; // return count
        }
    }
}