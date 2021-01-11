import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store.js';
import { style }  from './knave-atmosphere.style';
import { get, translate  } from "lit-translate";


export class KnaveAtmosphere extends connect(store)(LitElement) {
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
      <h3>Knave Atmosphere</h3>
      <div class="music">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uIbAzScUwec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DIi-pBpXIbE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M_hrNDhLwvE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tB_c1R_ir9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    `;
  }
}

customElements.define('knave-atmosphere', KnaveAtmosphere);
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