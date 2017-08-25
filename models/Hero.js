let mongoose = require('mongoose');
let Promise = require('bluebird');

let Schema = mongoose.Schema;

let heroSchema = new Schema({
    name: String
});

let Hero = module.exports = mongoose.model('Hero', heroSchema);

Hero.errMsg = {
    msg: 'invalid operation'
};

Hero.verifyId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

Hero.getHeroes = () => {
    return Hero.find({}).exec();
};

Hero.getHero = (id) => {
    if(Hero.verifyId(id)) {
        return Hero.findById(id).exec();        
    }

    return Promise.reject();
};

Hero.createHero = (name) => {
    return Hero.create({name: name});
};

Hero.deleteHero = (id) => {
    if(Hero.verifyId(id)) {
        return Hero.findByIdAndRemove(id);        
    }

    return Promise.reject();
}

Hero.updateHero = (id, name) => {
    if(Hero.verifyId(id)) {
        return Hero.findByIdAndUpdate(id, {name: name});        
    }
    
    return Promise.reject();
};
