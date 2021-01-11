import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store.js';
import { style }  from './knave-items.style';
import { get, translate  } from "lit-translate";
import {  } from '../../components/knave-interactive-map/knave-interactive-map';

export class KnaveItems extends connect(store)(LitElement) {
  constructor() {
    super();
    this.addEventListener('load-complete', async (e) => {
      console.log(e.detail.message);
      await this.requestUpdate();
    });

    this.itemsLog = this.randomCharacters = window.localStorage.getItem('itemsLog') || ``;
  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`${style}`;
  }

  saveToLocalStorage(data) {
    window.localStorage.setItem('itemsLog', data);
  }

  render() {

    return html`
    <h3>Knave interactive map</h3>
    <knave-interactive-map></knave-interactive-map>
    `;
    /*
    return html`
      <h3>Knave items</h3>
      <textarea
        style="width: 100vw; height: 80vh;"
        @keyup=${e => this.saveToLocalStorage(e.target.value)}>
        ${this.itemsLog}
      </textarea>
    `;
    */
  }
}

customElements.define('knave-items', KnaveItems);
/*
const miscellaneous = [
  [
    Bowl           
    Brass bell     
    Brooch         
    Carved figurine
    Cup            
    Deck of cards
  ],
  [
    Drawing     
    Foreign coin
    Game piece  
    Glass eye   
    Glass jar   
    Hair comb   
  ],
  [
    Handkerchief 
    Hinged box
    Hourglass
    Human tooth
    Hunting horn
    Loaded dice
  ],
  
]
`
  
  
  
  
  

Long fork Purse Sewing needle
Numbered key Quill pen Shaving razor
Oil lamp Salve Silver button
Old doll Scissors Skull
Paint pot Scroll Tobacco pipe
Pencil Sealed letter Wine bottle 

`
*/