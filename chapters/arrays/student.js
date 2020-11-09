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
        if (xs[i] === value) {
            return true;
        }
    }
    return false;
}

function all(bs) {
    for (i = 0; i <= bs.length - 1; ++i) {
        if (bs[i] == false) {
            return false;
        }
    }
    return true;
}

function any(bs) {
    for (i = 0; i <= bs.length - 1; ++i) {
        if (bs[i] == true) {
            return true;
        }
    }
    return false;
}

function repeat(n, x) {
    resultaat = new Array(n);
    for (i = 0; i <= n - 1; ++i) {
        resultaat[i] = x;
    }

    return resultaat;
}

function range(from, to) {
    resultaten = [];
    for (i = from; i <= to; ++i) {
        resultaten.push(i);
    }
    return resultaten;
}

function incrementEach(ns) {
    for (i = 0; i <= ns.length - 1; ++i) {
        b = ns[i];
        c = b + 1;
        ns[i] = c;
    }
}

function clamp(ns, min, max) {
    for (i = 0; i <= ns.length - 1; ++i) {
        b = ns[i];
        if (b < min) {
            ns[i] = min;
        } else if (b > max) {
            ns[i] = max;
        }
    }
}

function trimZeros(ns) {
    while (ns.length > 0 && ns[0] === 0) { //zolang lengte van ns groter is dan 0 && eerste item van ns gelijk is aan 0
        ns.shift();                        //doe 1ste item weg
    }
    while (ns.length > 0 && last(ns) === 0) {
        ns.pop();
    }
}

function cut(xs, size) {
    while (xs.length > size) {
        xs.pop();
    }
}

function repeat2(n, xs) {
    let result = [];
    for (let i = 0; i !== n; i++) {
        result = [...result, ...xs];
    }
    return result;
}

function count(value, xs) {
    aantal = 0;
    for (i = 0; i !== xs.length; ++i) {
        if (xs[i] === value) {
            aantal++
        }
    }
    return aantal;
}

function minimum(ns) {
    let result = Number.POSITIVE_INFINITY;
    for (let n of ns) {
        if (result > n) {
            result = n;
        }
    }
    return result;
}

function allEqual(xs){
    for(i = 1; i < xs.length; ++i){
        if(xs[i] !== xs[0]){
            return false;
        }
    }
    return true;
}   

function allDifferent(xs) {
    for (let i = 0; i !== xs.length; ++i) {
        for (let j = i + 1; j < xs.length; ++j) {
            if (xs[i] === xs[j]) {
                return false;
            }
        }
    }
    return true;
}