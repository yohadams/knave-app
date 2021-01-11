import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store.js';
import { style }  from './knave-monsters.style';
import { get, translate  } from "lit-translate";
import { randomNumber } from '../../helpers/helpers';
import { monsterList, monsterTypes } from './monsters/index';
import { banditList } from './monsters/bandits.js';
import { goblins, goblinList } from './monsters/goblin';
import { rats, ratsList } from './monsters/rats';
import { snakes, snakeList } from './monsters/snakes';
import { special, specialList } from './monsters/special';
import { spiders, spiderList } from './monsters/spiders';
import { undead, undeadList } from './monsters/undead';
import { wolfs, wolfList } from './monsters/wolfs';
import { worms, wormsList } from './monsters/worms';

const dupa = [
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

export class KnaveMonsters extends connect(store)(LitElement) {
  constructor() {
    super();
    this.addEventListener('load-complete', async (e) => {
      console.log(e.detail.message);
      await this.requestUpdate();
    });
    this.currentActiveMonsters =  JSON.parse(window.localStorage.getItem('monsters')) || [];
    this.form = {
      type: 'bandits',
      monster: 'bandit',
    };
    
    this.monsterList = JSON.parse(JSON.stringify(monsterList));
    this.monsterTypes = JSON.parse(JSON.stringify(monsterTypes));
    this.itemsLog = this.randomCharacters = window.localStorage.getItem('itemsLog') || ``;
  }

  static get properties() {
    return {
      currentActiveMonsters: { type: Array },
      monsterList: { type:  Object },
      monsterTypes: { type: Array }
    };
  }

  static get styles() {
    return css`${style}`;
  }

  saveToLocalStorage(data) {
    window.localStorage.setItem('itemsLog', data);
  }

  addMonster() {
    const type = JSON.parse(JSON.stringify(this.form.type));
    const monsterName = JSON.parse(JSON.stringify(this.form.monster));
    let monster = this.monsterList[type][monsterName];
    //monster.hd = this.calculateHD(JSON.parse(JSON.stringify(monster.hd)));
    this.currentActiveMonsters.push(monster);
    console.log(this.currentActiveMonsters);
    this.saveToLocalStorage();
    this.requestUpdate();
  }  

  calculateHD(hd) {
    console.log('hd', hd)
      let [factor, bonus] = hd.split(' ');
      let d8Sum = 0;
      for (let i=0; i<factor; i++) {
        d8Sum += randomNumber(8) * 3;
      }
      if (bonus) {
        this.shadowRoot.querySelector('#NHD').value = eval(`${d8Sum} ${bonus}`);
      } else {
        this.shadowRoot.querySelector('#NHD').value = d8Sum;
      }
      this.requestUpdate();
  }


  saveToLocalStorage() {
    window.localStorage.setItem('monsters', JSON.stringify(this.currentActiveMonsters));
  }


  clearBoard() {
      this.currentActiveMonsters = [];
      this.saveToLocalStorage();
      this.requestUpdate();
  }

  render() {
    console.log('this.currentActiveMonsters', this.currentActiveMonsters)
    return html`
    
      <h3>Knave monsters</h3>
      <div class="monster-form">
          <label target="type">Typ potwora: </label>
          <select name="type" @change="${even => this.form.type = even.target.value}">
            ${Object.keys(this.monsterList).map(types => html`
            <option value="${types}">${types}</option>
            `)}
          </select>
          <div class="monster-buttons">
          ${dupa.map(monster => html`
            <button style="background: ${this.form.monster === monster ? 'red' : ''}" @click="${() => { this.form.monster = JSON.parse(JSON.stringify(monster)); this.requestUpdate(); }}">${monster}</button>
          `)}
          </div>
          <input id='HD'></input>
          <button @click="${() => { let hd = this.shadowRoot.querySelector('#HD').value; this.calculateHD(hd) }}">Calculate HD</button>
          <input id='NHD'></input>
        <button @click="${() => this.addMonster()}">Dodaj potwora</button>
        <button @click="${() => this.clearBoard()}">Wyczyść planszę</button>
      </div>

      <div class="active-monsters">
        ${this.currentActiveMonsters.map((monster, index) => html`
          <div>
            <p>${translate(`monsters.${monster.name}`)} pozycja ${index+1}</p>
            <p title="${monster.hd}">HD(${monster.hd}): <input/> </p>
            <p title="">AC: ${monster.ac}</p>
            <p title="">Attack: ${monster.attack}</p>
            <p title="">Movment: ${monster.movement}</p>
            <p title="">Drop: ${monster.drop.map(drop => html`\n${translate(`monsters.${drop.name}`)}: ${drop.count};`)}</p>
            ${monster.abilities.map(abi => html`
            <p title="${translate(`monsters.${abi}_desc`)}">${translate(`monsters.${abi}`)}</p>
            `)}
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('knave-monsters', KnaveMonsters);