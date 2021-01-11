import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store.js';
import { characterService } from '../../services/character'
import { style }  from './knave-main.style';
import { get, translate  } from "lit-translate";
import { Router } from "@vaadin/router";

const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA', 'ZBROJA']

export class KnaveMain extends connect(store)(LitElement) {
  constructor() {
    super();
    this.addEventListener('load-complete', async (e) => {
      console.log(e.detail.message);
      await this.requestUpdate();
    });
    this.randomCharacters = JSON.parse(window.localStorage.getItem('randomCharacters')) || [];
    this.editCharacter = '';
    this.editVisible = false;
    this.editCharacterId = '';
  }

  static get properties() {
    return {
      randomCharacters: { type: Array },
      editCharacter: { type: String },
      editVisible: { type: Boolean },
    };
  }

  static get styles() {
    return css`${style}`;
  }

  saveToLocalStorage() {
    window.localStorage.setItem('randomCharacters', JSON.stringify(this.randomCharacters));
  }

  async generateRandomCharacter() {
    this.randomCharacters.push(await characterService.generateRandomCharacter());
    this.saveToLocalStorage();
    await this.requestUpdate();
  }

  firstToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  deleteCharacter(character) {
    let find = this.randomCharacters.find(ch => ch.info.names === character.info.names && ch.info.surnames === character.info.surnames);
    const index = this.randomCharacters.indexOf(find);
    if (index > -1) {
      this.randomCharacters.splice(index, 1);
      this.saveToLocalStorage();
      this.requestUpdate();
    }
  }

  toggleEditCharacter(character, id) {
    this.editVisible = !this.editVisible;
    this.editCharacterId = id;
    this.editCharacter = JSON.stringify(character);
    
  }

  loadEditCharacter() {
    this.shadowRoot.querySelector('#edit-field').value = this.editCharacter;
  }

  closeEditCharacter() {
    this.shadowRoot.querySelector('#edit-field').value = '';
    this.toggleEditCharacter('');
  }

  putItemInBackpack(place, character, item, x) {
    character.backpack[place] = item;
    this.saveToLocalStorage();
  }

  changeStats(character, stat, type, value) {
    character.stats[stat][type] = value;
    this.saveToLocalStorage();
  }

  saveEditCharacter() {
    this.randomCharacters[this.editCharacterId] = JSON.parse(this.editCharacter);
    this.saveToLocalStorage();
  }

  render() {
    return html`
    ${this.editVisible ? html`
    <div class="edit-window">
      <textarea @change="${e => {this.editCharacter = e.target.value}}" id="edit-field"></textarea>
      <button @click="${this.loadEditCharacter}">Wczytaj</button>
      <button @click="${this.saveEditCharacter}">Zapisz</button>
      <button @click="${this.closeEditCharacter}">Zamknij</button>
    </div>
    ` : html``}
      


    <div>
      <button @click="${this.generateRandomCharacter}">Generate Random Character</button>
      <button @click="${this.generateManualCharacter}" disabled>Generate Manual Character</button>
    </div>

<div class="characters">

${this.randomCharacters.map((character, index) => html`

<div class="character">
  <div class="info">
  

    <h3>${translate('character.info_header')}</h3>
    <ul>
      <li>${translate(`character.names`)}: ${this.firstToUpperCase(character.info.names)}</<li>
      <li>${translate(`character.surnames`)}: ${this.firstToUpperCase(character.info.surnames)}</li>
      <li>${translate(`character.races`)}: ${translate(`character.${character.info.races}`)}</li>
      <li>${translate(`character.sex`)}: ${translate(`character.${character.info.sex}`)}</li>
    </ul>
    <button @click="${() => this.toggleEditCharacter(character, index)}">Edytuj postać</button> 
    <button @click="${() => this.deleteCharacter(character)}">Usuń postać</button>
  </div>

  <div class="stats">
    <h3>Statystyki</h3>

    <div style="
      display: grid; 
      grid-template-columns: 0.5fr 0.5fr 0.5fr; 
      padding: 0 40px 0 40px;
      column-gap: 5px;
    ">
      <b>Obrona</b>
      <b>Umiejętność</b>
      <b>Bonus</b>
      ${Object.keys(character.stats).map(key => html`
      <input
        id="${key}-d"
        value="${character.stats[key].d}"
        @change="${e => { this.changeStats(character, key, 'd', e.target.value)}}"
        style="width: 50px; align-self: end;"/>
      <b style="text-align: center">${key.toLocaleUpperCase()}</b>
      <input
        id="${key}-b"
        value="${character.stats[key].b}"
        @change="${e => { this.changeStats(character, key, 'b', e.target.value)}}"
        style="width: 50px; align-self: start;"/>
      `)}
    </div>

    <div style="
      display: grid; 
      grid-template-columns: 0.5fr 0.5fr 0.5fr; 
      padding: 0 40px 0 40px;
      column-gap: 5px;
    ">
      <b>Max</b>
      <b></b>
      <b>Aktualne</b>
    
      <input 
        id="hp-m"
        style="width: 50px; align-self: end;"
        value="${character.hp.m}"/>
      <b style="text-align: center">HP</b>
      <input 
        id="hp-c"
        style="width: 50px; align-self: start;"
        value="${character.hp.c}"/>
      
    </div>
  </div>
  
  <div class="traits">
    <h3>${translate('character.traits_header')}</h3>
    <ul>
    ${character.traits.map(stats => html`
        <li title="${`${stats.name}: ${stats.value}`}">${translate(`character.${stats.name}`)}: ${translate(`character.${stats.value}`)}</<li>
    `)}
    </ul>
  </div>
  
  <div class="eq">
  <h3>${translate('character.eq_header')}</h3>
  ${character.eq.map(stats => html`
      <li title="${`${stats.name}: ${stats.value}`}">${translate(`character.${stats.name}`)}: ${translate(`character.${stats.value.split(' ').join('_')}`)}</<li>
  `)}
  </div>
  
  <div class="notes">
    <h3>${translate('character.notes_header')}</h3>
    <textarea
      @change=${e => { character.notes = e.target.value; this.saveToLocalStorage(); }}
      style="height: 120px; width: 250px;">${character.notes}</textarea>
  </div>

  <div class="backpack">
    <h3>Plecak</h3>
    <div
    style="display:grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr;">
      ${character.backpack.map((item, index) => html`<textarea @change=${e => this.putItemInBackpack(index, character, e.target.value, item)}>${item}</textarea>`)}
    </div>
  </div>
</div>
`)}

</div>
`;
  }
}

customElements.define('knave-main', KnaveMain);

