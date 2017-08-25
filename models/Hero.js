let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let heroSchema = new Schema({
    name: String
});

let Hero = module.exports = mongoose.model('Hero', heroSchema);

Hero.errorHandler = (err) => {
    return {
        msg: 'An error occured'
    };
};

Hero.getHeroes = () => {
    return Hero.find({}).exec();
};

Hero.getHero = (id) => {
    return Hero.findById(id).exec();
};

Hero.createHero = (name) => {
    return Hero.create({name: name});
};

Hero.deleteHero = (id) => {
    return Hero.findByIdAndRemove(id);
}

Hero.updateHero = (id, name) => {
    return Hero.findByIdAndUpdate(id, {name: name});
};

