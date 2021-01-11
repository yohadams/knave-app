export const undead = {
    skeleton: {
        name: 'skeleton',
        hd: '1',
        ac: '7',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'skeleton_bone',
                count: '1',
            }
        ],
        abilities: ['undead']
    },
    skeleton_knight: {
        name: 'skeleton_knight',
        hd: '2',
        ac: '7',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'skeleton_bone',
                count: '1',
            }
        ],
        abilities: ['undead']
    },
    skeleton_mage: {
        name: 'skeleton_mage',
        hd: '2',
        ac: '7',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'skeleton_bone',
                count: '1',
            },
            {
                name: 'magic_rune',
                count: '1',
            }
        ],
        abilities: ['undead', 'magician']
    },
    zombie: {
        name: 'zombie',
        hd: '2 +1',
        ac: '9',
        attack: '1d8',
        appering: '',
        movement: '4',
        tresure: 'N',
        drop: [
            {
                name: 'gold_coins',
                count: '1d20',
            },
        ],
        abilities: ['undead', 'slow_to_react']
    },
    
};

export const undeadList = ['skeleton', 'skeleton_knight', 'skeleton_mage', 'zombie'];