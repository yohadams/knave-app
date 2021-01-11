import { css } from 'lit-element';
import 'material-design-icons/iconfont/material-icons.css';

export const style = css`
  :host {
    height: 100vh;
    width: 100vw;
  }



  .monster-form {
    height: 150px;
  }

  .monster-buttons {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 20px;
    row-gap: 2px;
  }

  .active-monsters {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

  }
`;