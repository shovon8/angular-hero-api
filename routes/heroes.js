let express = require('express');
let router = express.Router();
let Hero = require('../models/Hero');



router.get('/api/heroes', (req, res) => {
    Hero.getHeroes().then((heroes) => {
        res.json(heroes);
    }).catch(Hero.errorHandler);
});



router.get('/api/hero/:id', (req, res) => {
    Hero.getHero(req.params.id).then((hero) => {
        if(hero !== null) {
            res.json(hero);
        } else {
            res.json({msg: 'hero not found'});
        }
    }).catch(Hero.errorHandler);
});



router.put('/api/heroes', (req, res) => {
    Hero.createHero(req.body.name).then((hero) => {
        res.json(hero);
    }).catch(Hero.errorHandler);
});



router.post('/api/hero/:id', (req, res) => {
    Hero.updateHero(req.params.id, req.body.name).then((hero) => {
        if(hero !== null) {
            res.json(hero);
        } else {
            res.json({msg: 'hero not found'});
        } 
    }).catch(Hero.errorHandler);
});



router.delete('/api/hero/:id', (req, res) => {
    Hero.deleteHero(req.params.id).then((hero) => {
        if(hero !== null) {
            res.json(hero);
        } else {
            res.json({msg: 'hero not found'});
        }
    }).catch(Hero.errorHandler);
});



module.exports = router;