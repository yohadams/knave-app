export const spiders = {
    big_spider: {
        name: 'big_spider',
        hd: '2',
        ac: '7',
        attack: '1d8',
        appering: '',
        movement: '5',
        tresure: 'U',
        drop: [
            {
                name: 'spider_fang',
                count: '2',
            }
        ],
        abilities: ['wall_climber', 'weak_poison'],
    },
    black_widow: {
        name: 'black_widow',
        hd: '3',
        ac: '6',
        attack: '1d8 +2',
        appering: '',
        movement: '2',
        tresure: 'U',
        drop: [
            {
                name: 'spider_fang',
                count: '4',
            }
        ],
        abilities: ['poison',"web_attack"]
    },
    tarantella: {
        name: 'tarantella',
        hd: '4',
        ac: '5',
        attack: '1d8 +3',
        appering: '',
        movement: '2',
        tresure: 'U',
        drop: [
            {
                name: 'spider_fang',
                count: '4',
            }
        ],
        abilities: ['tarantella_poision']
    }
};

export const spiderList = ['big_spider', 'black_widow', 'tarantella'];