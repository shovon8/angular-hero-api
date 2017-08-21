let heroes = require('../data/heroes');
let Hero = module.exports;



Hero.getHeroes = () => {
    return heroes;
};



Hero.getHero = (id) => {
    let hero = heroes.filter(h => h.id === parseInt(id));

    return hero.length === 0 ? {msg: 'hero not found'} : hero[0];
};



Hero.findIndexById = (id) => {
    let heroIndex = -1;
    let heroId = parseInt(id);

    heroes.filter((h, i) => {
        if(h.id === heroId) {
            heroIndex = i;
            return true;
        }

        return false;
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



Hero.update = (id, name) => {
    let heroId = parseInt(id);
    let heroIndex = Hero.findIndexById(heroId);

    if(heroIndex !== -1) {
        heroes[heroIndex].name = name;

        return heroes[heroIndex];
    } else {
        return {msg: 'hero not found'};
    }
}



Hero.delete = (id) => {
    let heroIndex = Hero.findHeroById(id);

    if(heroIndex > -1) {
        heroes.splice(heroIndex, 1);
        return {msg: 'success'};
    } else {
        return {msg: 'hero not found'};        
    }
};