'use strict'

var Menu = require('../models/menu');
const { param } = require('../routes/menu');
const menu = require('../models/menu');


var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Test'
        });
    },

    saveMenu: function(req, res){
        var menu = new Menu();

        var params = req.body;
        menu.cafeAmericano = params.cafeAmericano;
        menu.cafeConLeche = params.cafeConLeche;
        menu.sandwich = params.sandwich;
        menu.jugo = params.jugo;
        menu.hamburguesaSimple = params.hamburguesaSimple;
        menu.hamburguesaDoble = params.hamburguesaDoble;
        menu.papasFritas = params.papasFritas;
        menu.onionRings = params.onionRings;
        menu.agua500ml = params.agua500ml;
        menu.agua750ml = params.agua750ml;
        menu.refresco500ml = params.refresco500ml;
        menu.refresco750ml = params.refresco750ml;
        menu.quesoOhuevo = params.quesoOhuevo;
        menu.cliente = params.cliente;
        
        menu.save((err, menuStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar su pedido'});

            if(!menuStored) return res.status(404).send({message: 'No se pudo guardar su pedido'});

            return res.status(200).send({menu: menuStored});
        });

    },

    getMenu: function(req, res){
        var menuId = req.params.id;

        if(menuId == null) return res.status(404).send({message: 'Los datos no existen.'});
        
        Menu.findById(menuId, (err, menu) => {

            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!menu) return res.status(404).send({message: 'Los datos no existen.'});

            return res.status(200).send({
                menu
            });
        });
    },
    
    getMenus: function(req, res){

        Menu.find({}).exec((err, menus) => {
            
            if(err) return res.status(500).send({message: 'Error al devolver los pedidos'});

            if(!menus) return res.status(404).send({message: 'No hay ningún pedido registrado'});
            
            return res.status(200).send({
                menus
            });
        })
    },

    updateMenu: function(req, res){

        var menuId = req.params.id;
        var update = req.body;

        Menu.findByIdAndUpdate(menuId, update, {new:true}, (err, menuUpdated) => {

            if(err) return res.status(500).send({message: 'Error al actualizar.'});

            if(!menuUpdated) return res.status(404).send({message: 'No existe el pedido a actualizar.'});

            return res.status(200).send({
                menu: menuUpdated
            });
        })
    },

    deleteMenu: function(req, res){

        var menuId = req.params.id;

        Menu.findByIdAndRemove(menuId, (err, menuRevoved) => {

            if(err) return res.status(500).send({message: 'No se pudo eliminar el pedido.'});

            if(!menuRevoved) return res.status(404).send({message: 'No existe el pedido que desea eliminar'});

            return res.status(200).send({
                menu: menuRevoved
            });
        });
    }

};

module.exports = controller;
