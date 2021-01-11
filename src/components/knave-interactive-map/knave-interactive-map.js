import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store';
import { style } from './knave-interactive-map.style';

export class KnaveInteractiveMap extends connect(store)(LitElement) {
  constructor() {
    super();
    this.mapPropertis = {
      height: 800,
      width: 800,
    };

    this.gridPropertis = {
      height: 40,
      width: 40,
    }

    this.map = [];
    this.moveMode = false;
    this.moveId = null;
    this.moveSelf = {};
    this.quickAdd = false;
  }

  static get styles() {
    return css`${style}`;
  }

  static get properties() {
    return {
      map: { type: Array },
      moveMode: { type: Boolean },
      moveId: { type: Number },
      moveSelf: { type: Object },
      quickAdd: { type: Boolean },
    }
  }

  firstUpdated() {
    this.resetMap();
  }

  resetMap() {
    const max = (this.mapPropertis.height/this.gridPropertis.height)*(this.mapPropertis.width/this.gridPropertis.width)
    for (let x=0; x<max; x++) {
      this.map[x] = {name: '', color: '', type: 'square' };
    }
    this.requestUpdate();
  }

  movePawn(event, self, index) {  
      if (this.quickAdd) {
        this.quickAddPawn(index);
      } else {
        if (!this.moveMode) {
          if (self.name !== '') {
            this.moveMode = true;
            this.moveId = index;
            this.moveSelf = self;
          }
        } else {
          if (this.moveId === index) {
            this.moveMode = false;
            this.moveMode = null;
            this.moveSelf = {};
          } else {
            const tempSelf = JSON.parse(JSON.stringify(self))
            this.map[index] = JSON.parse(JSON.stringify(this.moveSelf));
            this.map[this.moveId] = tempSelf;
  
            this.moveMode = false;
            this.moveId = null;
            this.moveSelf = {};
          }
        }
      }
  }

  addPawn(event) {
    event.preventDefault();
    const name = this.shadowRoot.querySelector('[name="pawnName"]').value;
    const color = this.shadowRoot.querySelector('[name="pawnColor"]').value;
    const index = this.shadowRoot.querySelector('[name="pawnIndex"]').value;
    const type = this.shadowRoot.querySelector('[name="pawnType"]').value;
    this.map[index].color = color;
    this.map[index].name = name;
    this.map[index].type = type;
    this.requestUpdate();
  }

  quickAddPawn(index) {
    const name = this.shadowRoot.querySelector('[name="pawnName"]').value;
    const color = this.shadowRoot.querySelector('[name="pawnColor"]').value;
    const type = this.shadowRoot.querySelector('[name="pawnType"]').value;
    this.map[index].color = color;
    this.map[index].name = name;
    this.map[index].type = type;
    this.requestUpdate();
  }

  removePawn() {
    if (this.moveMode) {
      this.map[this.moveId] = {name: '', color: '', type: 'square' };
      this.moveSelf = {};
      this.moveId = null;
      this.moveMode = false;
    }
  }

  render() {
    return html`
    <div style="
      height: ${this.mapPropertis.height}px; 
      width: ${this.mapPropertis.width}px; 
      background: whitesmoke;
      display: grid;
      grid-template-columns: repeat(${this.mapPropertis.width/this.gridPropertis.width}, ${this.gridPropertis.width}px);
      grid-template-rows: repeat(${this.mapPropertis.height/this.gridPropertis.height}, ${this.gridPropertis.height}px);">
      ${this.map.map((grid, index) => html`
        <div class="grid" style="outline: 1px solid black; background-color: ${this.moveId === index ? 'yellow' : ''};">
          <div @click="${(e) => this.movePawn(e, grid, index)}" 
          style="
                border-radius: ${grid.type === 'square' ? 'unset' : '100%'};
                background-color: ${grid.color !== '' ? grid.color : 'whitesmoke'}; 
                height: ${this.gridPropertis.height - 8}px;
                width: ${this.gridPropertis.width - 8}px;
                margin: 4px 4px 4px 4px;">
            ${grid.name !== '' ? grid.name : ''}
          </div>
        </div>      
      `)}
    </div>
    <div class="menu">
      <form @submit="${this.addPawn}">
        <input name="pawnName" placeholder="Pawn name" />
        <input name="pawnColor" type="color" />
        <input name="pawnIndex" type="number" />
        <select name="pawnType">
          <option value="square">Square</option>
          <option value="round">Round</option>
        </select>
        <input type="submit" value="Add ">
      </form>
      <button @click="${this.removePawn}">Remove pawn</button>
      <button @click="${this.resetMap}">Reset map</button>
      <button style="background-color: ${this.quickAdd ? 'yellow' : ''}" @click="${() => {this.quickAdd = !this.quickAdd}}">Quick add</button>
    </div>
    `;
  }

}

customElements.define('knave-interactive-map', KnaveInteractiveMap);

