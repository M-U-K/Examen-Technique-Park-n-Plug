console.log(findDupli([1, 2, 3, 2, 4, 5, 3]))

function findDupli(input) {
    var result = [];

    for (var i = 0; i < input.length; i++)
        if (input.indexOf(input[i]) !== i && result.indexOf(input[i]) === -1)
            result.push(input[i]);
    return result;
}