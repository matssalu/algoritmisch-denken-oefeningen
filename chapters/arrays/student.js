// Schrijf hier je code
function first(xs) {
    return xs[0];
}

function last(xs) {
    return xs[xs.length - 1];
}

function sum(ns) {
    counter = 0;
    for (i = 0; i <= ns.length - 1; ++i) {
        counter = counter + ns[i];
    }
    return counter;
}

function contains(value, xs) {
    for (i = 0; i <= xs.length - 1; ++i) {
        if (xs[i] == value) {
            return true;
        } else {
            return false;
        }
    }
}