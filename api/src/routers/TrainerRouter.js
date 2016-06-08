
var TrainerRepository = require('repositories/TrainerRepository');

exports.init = function (App) {

    App.get('/trainer', function (req, res) {
        res.status(200).send(TrainerRepository.all());
    });

    App.get('/trainer/:id', function (req, res) {
        var trainer = TrainerRepository.getById(req.params.id);
        if (trainer) res.status(200).send(trainer);
        else res.status(404).send({ error: 'Trainer not found' });
    });

    App.post('/trainer/:id/catch', function (req, res) {
        var pokemon = req.body;
        TrainerRepository.catchPokemon(req.params.id, pokemon);
        res.status(200).send(TrainerRepository.getById(req.params.id));
    });
};