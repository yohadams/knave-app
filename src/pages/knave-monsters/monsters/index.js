import { bandits, banditList } from './bandits';
import { goblins, goblinList } from './goblin';
import { rats, ratsList } from './rats';
import { snakes, snakeList } from './snakes';
import { special, specialList } from './special';
import { spiders, spiderList } from './spiders';
import { undead, undeadList } from './undead';
import { wolfs, wolfList } from './wolfs';
import { worms, wormsList } from './worms';

export const monsterList = {
    bandits,
    goblins,
    rats,
    snakes,
    special,
    spiders,
    undead,
    wolfs,
    worms,
};

export const monsterTypes = [
    ...banditList,
    ...goblinList,
    ...ratsList,
    ...snakeList,
    ...specialList,
    ...spiderList,
    ...undeadList,
    ...wolfList,
    ...wormsList
]