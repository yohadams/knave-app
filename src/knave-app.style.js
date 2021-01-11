import { css } from 'lit-element';

export const style = css`
:root {
    --primary-color: #333;
}

* {
    margin: 0;
    padding: 0;
    color: whitesmoke;
}

BODY {
    background-color: var(--primary-color);
}

:host {
    height: 100%;
    width: 100%:
}

#router-outlet {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;

}
`;