export const bandits = {
    bandit: {
        name: 'bandit',
        hd: '1',
        ac: '6',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'U',
        drop: [
            {
                name: 'gold_coins',
                count: '1d20',
            },
            {
                name: 'moonshine',
                count: '1',
            },
            {
                name: 'dried_meat',
                count: '1d4'
            },
            {
                name: 'bandage',
                count: '1',
            }
        ],
        abilities: ['bandit_trickery']
    },
    bandit_chieftan: {
        name: 'bandit_chieftan',
        hd: '2',
        ac: '6',
        attack: '1d8 +1',
        appering: '',
        movement: '4',
        tresure: 'U',
        drop: [
            {
                name: 'gold_coins',
                count: '2d20',
            },
            {
                name: 'dried_meat',
                count: '1d4'
            },
            {
                name: 'bandage',
                count: '1',
            },
            {
                name: 'weak_healing_potion',
                count: '1'
            }
        ],
        abilities: ['bandit_trickery', 'everybody_get_in_here']
    }
};

export const banditList = ['bandit', 'bandit_chieftan'];