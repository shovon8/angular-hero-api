let express = require('express');
let router = express.Router();
let hero = require('../models/Hero');



router.get('/api/heroes', (req, res) => {
    res.json(hero.getHeroes());
});



router.get('/api/hero/:id', (req, res) => {
    res.json(hero.getHero(req.params.id));
});



router.put('/api/heroes', (req, res) => {
    res.json(hero.create(req.body.name));
});



router.post('/api/heroes', (req, res) => {
    res.json(hero.update(req.body));
});



router.delete('/api/hero/:id', (req, res) => {
    res.json(hero.delete(req.params.id));
});



module.exports = router;