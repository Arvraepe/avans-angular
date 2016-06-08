
var Pokemons = require('data/pokemons.json');

function getAllPokemonsAsArray () {
    return Object.keys(Pokemons).map(function (id) {
        var pokemon = Pokemons[id];
        pokemon.id = id;

        return pokemon;
    });
}

function getPokemonById (id) {
    return Pokemons[id];
}

function getPokemonByType (type) {
    return Object.keys(Pokemons).reduce(function (list, id) {

        var pokemon = Pokemons[id];
            pokemon.id = id;
        if (pokemon.type === type) list.push(pokemon);

        return list;
    }, []);
}

function getTypes () {
    return getAllPokemonsAsArray().map(function (pokemon) { return pokemon.type; }).getUnique();
}

exports.all = getAllPokemonsAsArray;
exports.getById = getPokemonById;
exports.getByType = getPokemonByType;
exports.getTypes = getTypes;

