console.log(power(3, 2))

function power(base, exponent) {
    var result = 1;

    for (var i = 0; i < exponent; i++)
        result = multi(result, base);
    return result;
}

function multi(x, y) {
    var result = 0;

    for (var i = 0; i < y; i++)
        result = add(result, x);
    return result;
}

function add(x, y) {
    if (y === 0)
        return x;
    else
        return add(x + 1, y - 1);
}