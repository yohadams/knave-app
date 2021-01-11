export const snakes = {
    cobra: {
        name: 'cobra',
        hd: '1',
        ac: '7',
        attack: '1d6',
        appering: '',
        movement: '6',
        tresure: 'N',
        drop: [
            {
                name: 'snake_skin',
                count: '1',
            },
            {
                name: 'snake_fang',
                count: '2',
            }
        ],
        abilities: ['weak_poison', 'blindnes_spit']
    },
    pit_viper: {
        name: 'pit_viper',
        hd: '2',
        ac: '6',
        attack: '1d6 +1',
        appering: '',
        movement: '6',
        tresure: 'N',
        drop: [
            {
                name: 'snake_skin',
                count: '1',
            },
            {
                name: 'snake_fang',
                count: '2',
            }
        ],
        abilities: ['posion', 'viper_initiative']
    },
    giant_rattler: {
        name: 'giant_rattler',
        hd: '4',
        ac: '5',
        attack: '2d6',
        appering: '',
        movement: '5',
        tresure: 'U',
        drop: [
            {
                name: 'snake_skin',
                count: '1',
            },
            {
                name: 'snake_fang',
                count: '2',
            }
        ],
        abilities: ['poison', 'attack_to_times']
    }
};

export const snakeList = ['cobra', 'pit_viper', 'giant_rattler'];