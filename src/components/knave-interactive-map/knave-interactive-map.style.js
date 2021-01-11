import { css } from 'lit-element';
import 'material-design-icons/iconfont/material-icons.css';

export const style = css`
    .grid {
        cursor: pointer;
    }

    .grid:hover {
        background-color: #999;
    }

    .grid > div {
        display: grid;
        align-items: center;
        justify-content: center;
    }
`;