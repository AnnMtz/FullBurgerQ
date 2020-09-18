'use strict'

var express = require('express');
var MenuController = require('../controllers/menu');

var router = express.Router();

router.get('/home', MenuController.home);
router.post('/test', MenuController.test);
router.post('/save-menu', MenuController.saveMenu);
router.get('/menu/:id?', MenuController.getMenu);
router.get('/menus', MenuController.getMenus);
router.put('/menu/:id', MenuController.updateMenu);
router.delete('/menu/:id', MenuController.deleteMenu);

module.exports = router;