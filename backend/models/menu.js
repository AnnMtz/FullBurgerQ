'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Schema;

var MenuSquema = Squema({
    cafeAmericano: Number,
    cafeConLeche: Number,
    sandwich: Number,
    jugo: Number,
    hamburguesaSimple: Number,
    hamburguesaDoble: Number,
    papasFritas: Number,
    onionRings: Number,
    agua500ml: Number,
    agua750ml: Number,
    refresco500ml: Number,
    refresco750ml: Number,
    quesoOhuevo: Number,
    cliente: String
});

module.exports = mongoose.model('Menu', MenuSquema);