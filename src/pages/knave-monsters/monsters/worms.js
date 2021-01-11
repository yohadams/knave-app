export const worms = {
    cave_worm: {
        name: 'cave_worm',
        hd: '1',
        ac: '8',
        attack: '1d6',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'iron_ore',
                count: '1',
            }
        ],
        abilities: ["bleed"]
    },
    fanged_cave_worm: {
        name: 'fanged_cave_worm',
        hd: '1',
        ac: '8',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'iron_ore',
                count: '1',
            },
            {
                name: 'cave_worm_fang',
                count: '2'
            }
        ],
        abilities: ["bleed", "dig_the_hole"]
    }
};

export const wormsList = ['cave_worm', 'fanged_cave_worm'];