require('app-module-path').addPath(__dirname + '/src');

Array.prototype.getUnique = function () {
    var u = {}, a = [];
    for(var i = 0, l = this.length; i < l; ++i){
        if(u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
};

var Express = require('express');
var App = Express();
var BodyParser = require('body-parser');
var Cors = require('cors');

App.use(BodyParser.json());
App.use(Cors());

require('routers/PokemonRouter').init(App);
require('routers/TrainerRouter').init(App);

App.listen(9090, function () {
    console.log('Started pokemon API');
});



