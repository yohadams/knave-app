import { css } from 'lit-element';
import 'material-design-icons/iconfont/material-icons.css';

export const style = css`
  :host {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 40px 1fr ;
    grid-template-columns: 1fr ;
    grid-gap: 3px;
  }

  .edit-window {
    position: absolute;
    background: #666;
    border: 4px solid whitesmoke;
    height: 70vh;
    width: 70vw;
    top: 15vh;
    right: 15vw;
    padding: 5px;

  }

  #edit-field {
    height: 90%;
    width: calc(100% - 5px);
  }

  ul, li {
    list-style-type: none;
  }

  .characters {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;

  }

  .character {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    border: 1px solid whitesmoke;
    padding: 3px;
  }

`;