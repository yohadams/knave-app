import { GENERATOR_ENDPOINT, INFO_ENDPOINT } from '../helpers/endpoints';
import { 
  getNRandomNumber, randomNumber, coinToss, rollNDices, 
} from '../helpers/helpers';

export const characterService = {
  generateRandomCharacter,
};


async function getGeneratorInfo() {
  const info = {
    names: '',
    surnames: '',
    races: '',
    sex: '',
  };

  const randomInfo = {
    "names": randomNumber(100001),
    "surnames": randomNumber(98343),
    "races": randomNumber(4),
    "sex": coinToss(),
  };

  for (let key of Object.keys(randomInfo)) {
    let id = randomInfo[key];
    let response = await fetch(`${INFO_ENDPOINT}${key}/${id}`);
    let data = await response.json();
    info[key] = (await data.data.value);
  }
  
  return info;
}

async function generateRandomTraits() {
    let character = [];
    const randomCharacter = getNRandomNumber(0, 20, 11);
    for (let trait of randomCharacter) {
        let response = await fetch(`${GENERATOR_ENDPOINT}${trait.type+1}/${trait.value-1}`);
        let data = await response.json()
        character.push(await data.data);
    }
    return character;
}

async function generateRandomEquipment() {
    let equipment = [];
    const randomEquipment = [...getNRandomNumber(11, 20, 5), ...getNRandomNumber(13, 20, 3)];
    for (let eq of randomEquipment) {
        let response = await fetch(`${GENERATOR_ENDPOINT}${eq.type+1}/${eq.value-1}`);
        let data = await response.json()
        equipment.push(await data.data);
    }

    return equipment;
}

async function generateRandomStatistic() {
  const stats = {
    str: {d: '', b: ''},
    dex: {d: '', b: ''},
    con: {d: '', b: ''},
    int: {d: '', b: ''},
    wis: {d: '', b: ''},
    cha: {d: '', b: ''},
  }

  for (let key of Object.keys(stats)) {
    let diceRoll = Math.min(...rollNDices(6, 3));
    stats[key].b = diceRoll;
    stats[key].d = diceRoll + 10;
  }

  return stats;
}

async function generateRandomHealth(constitution) {
  const hp = randomNumber(8) + constitution;
  return {m: hp, c: hp };
}

async function createBackpack(constitution) {
  let backpack = [];
  for (let i=0; i < constitution; i++) {
    backpack.push('');
  }
  return  backpack;
}

async function generateRandomCharacter() {
    const character = {
        info: [],
        traits: [],
        eq: [],
        stats: {},
        hp: {m: '', c: ''},
        backpack: [],
        notes: ``,
    };
    character.traits = await generateRandomTraits();
    character.eq = await generateRandomEquipment();
    character.info = await getGeneratorInfo();
    character.stats = {...await generateRandomStatistic(), armor: {d: '', b: ''}};
    character.hp = await generateRandomHealth(character.stats.con.d);
    character.backpack = await createBackpack(character.stats.con.d);

    console.log('character', await character)
    return character;
}