
var PokemonRepository = require('repositories/PokemonRepository');

exports.init = function (App) {

    App.get('/pokemon', function (req, res) {
        res.status(200).send(PokemonRepository.all());
    });

    App.get('/pokemon/types', function (req, res) {
        res.status(200).send(PokemonRepository.getTypes());
    });

    App.get('/pokemon/:id', function (req, res) {
        var pokemon = PokemonRepository.getById(req.params.id);
        if (pokemon) res.status(200).send(pokemon);
        else res.status(404).send({ error: 'Pokemon not found' });
    });

    App.get('/pokemon/by/type/:type', function (req, res) {
        res.status(200).send(PokemonRepository.getByType(req.params.type));
    });
};