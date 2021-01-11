export const rats = {
    rat: {
        name: 'rat',
        hd: '1',
        ac: '9',
        attack: '1d6 x number',
        appering: '1d6 + 1d6 ile w grupie',
        movement: '6',
        tresure: 'L',
        drop: [
            {
                name: 'rat_tail',
                count: '1',
            }
        ],
        abilities: ['disease','affraid_of_fire']
    },
    giant_rat: {
        name: 'giant_rat',
        hd: '2',
        ac: '7',
        attack: '1d6 x number',
        appering: '1d6',
        movement: '3',
        treasure: 'C',
        drop: [
            {
                name: 'rat_tail',
                count: '2',
            }
        ],
        abilities: ['disease','affraid_of_fire']
    },
};

export const ratsList = ['rat', 'giant_rats'];