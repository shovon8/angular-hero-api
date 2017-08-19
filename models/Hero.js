let heroes = require('../data/heroes');
let Hero = module.exports;



Hero.getHeroes = () => {
    return heroes;
};



Hero.getHero = (id) => {
    let hero = heroes.filter(h => h.id === parseInt(id));

    return hero.length === 0 ? {msg: 'not found'} : hero[0];
};



Hero.findById = (id) => {
    let heroIndex = -1;
    let heroId = parseInt(id);

    heroes.filter((h, i) => {
        if(h.id === heroId) {
            heroIndex = i;
            return true;
        }
    });

    return heroIndex;
}



Hero.create = (name) => {
    let hero = {
        id: heroes[heroes.length - 1].id + 1,
        name: name
    };

    heroes.push(hero);

    return hero;
}



Hero.update = (body) => {
    let heroId = parseInt(body.id);
    let heroIndex = Hero.findById(heroId);

    if(heroIndex !== -1) {
        heroes[heroIndex] = {
            id: heroId,
            name: body.name
        };

        return heroes[heroIndex];
    } else {
        return {msg: 'not found'};
    }
}



Hero.delete = (id) => {
    let heroIndex = Hero.findById(id);

    if(heroIndex > -1) {
        heroes.splice(heroIndex, 1);
        return {msg: 'success'};
    } else {
        return {msg: 'not found'};        
    }
};