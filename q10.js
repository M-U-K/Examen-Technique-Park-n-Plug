console.log(getAgeOver18([{nom: "George", age: 14}, {nom: "Jean", age: 20}, {nom: "Anne", age: 19}, {nom: "Clara", age: 15}]))

function getAgeOver18(input) {
    const result = [];

    for (let i = 0; i < input.length; i++)
        if (input[i].age > 18)
            result.push(input[i].nom);
    return result;
}
