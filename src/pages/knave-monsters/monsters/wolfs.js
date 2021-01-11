export const wolfs = {
    wolf: {
        name: 'wolf',
        hd: '2 +2',
        ac: '7',
        attack: '1d6',
        appering: '',
        movement: '6',
        tresure: 'N',
        drop: [
            {
                name: 'wolf_pelt',
                count: '1',
            },
            {
                name: 'wolf_teeth',
                count: '4',
            },
        ],
        abilities: ['strenght_in_number']
    },
    dire_wolf: {
        name: 'dire_wolf',
        hd: '4 +1',
        ac: '6',
        attack: '2d4',
        appering: '',
        movement: '6',
        tresure: 'N',
        drop: [
            {
                name: 'wolf_pelt',
                count: '1',
            },
            {
                name: 'wolf_teeth',
                count: '6',
            },
            {
                name: 'dire_wolf_eye',
                count: '2',
            }
        ],
        abilities: ['wolf_alpha'],
    }
};

export const wolfList = ['wolf', 'dire_wolf'];