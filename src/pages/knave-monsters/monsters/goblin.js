export const goblins = {
    goblin: {
        name: 'goblin',
        hd: '1',
        ac: '6',
        attack: '1d6',
        appering: '',
        movement: '4',
        tresure: 'R',
        drop: [
            {
                name: 'gold_coins',
                count: '1d20',
            },
            {
                name: 'lockpick',
                count: '1d4',
            },
            {
                name: 'arrow',
                count: '1d6'
            },
            {
                name: 'raw_fish',
                count: '1'
            },
            {
                name: 'rotten_apple',
                count: '1'
            }
        ],
        abilities: ['hate_the_sun']
    },
    goblin_bodyguard: {
        name: 'goblin_bodyguard',
        hd: '2',
        ac: '6',
        attack: '1d6 +1',
        appering: '',
        movement: '4',
        tresure: 'R',
        drop: [
            {
                name: 'gold_coins',
                count: '2d20',
            },
            {
                name: 'lockpick',
                count: '1d4',
            },
            {
                name: 'arrow',
                count: '1d6'
            },
        ],
        abilities: ['hate_the_sun']
    },
    goblin_king: {
        name: 'goblin_king',
        hd: '3',
        ac: '6',
        attack: '1d6 +2',
        appering: '',
        movement: '4',
        tresure: 'R',
        drop: [
            {
                name: 'gold_coins',
                count: '3d20',
            },
            {
                name: 'goblin_king_crown',
                count: '1',
            }
        ],
        abilities: []
    },
};

export const goblinList = ['goblin', 'goblin_bodyguard', 'goblin_king'];