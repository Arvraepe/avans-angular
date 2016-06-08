var Trainers = require('data/trainers.json');
var PokemonRepository = require('repositories/PokemonRepository');


function getAll () {
    return Trainers;
}

function getById (id) {
    var possible = Trainers.filter(function (trainer) { return trainer.id === id; });

    if (possible.length > 0) {
        var trainer = JSON.parse(JSON.stringify(possible[0]));
        trainer.pokemons = trainer.pokemons.map(function (id) {
            var pokemon = PokemonRepository.getById(id);
                pokemon.id = id;
            return pokemon;
        });
        return trainer;
    }

    else return null;
}

function catchPokemon (id, pokemon) {
    Trainers.filter(function (trainer) {return trainer.id === id; }).forEach(function (trainer) {
        console.log(pokemon);
        trainer.pokemons.push(pokemon.id);
        trainer.pokemons = trainer.pokemons.getUnique();
        console.log(trainer);
    });
}

exports.all = getAll;
exports.getById = getById;
exports.catchPokemon = catchPokemon;