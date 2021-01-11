import { LitElement, html, css } from 'lit-element';
import { style }  from './knave-app.style';
import { registerTranslateConfig } from "lit-translate";
import { use } from "lit-translate";
import { Router } from '@vaadin/router';
import './pages';

registerTranslateConfig({
    loader: lang => fetch(`/translate/${lang}.json`).then(res => res.json())
});

class KnaveApp extends LitElement {
    constructor(){
        super();
    }

    connectedCallback () {
        use("pl");
        super.connectedCallback();
      }

    static get styles() {
        return css`${style}`;
    }    

    firstUpdated() {
        const router = new Router(this.shadowRoot.querySelector('#router-outlet'));

        router.setRoutes([
            { path: '/characters', component: 'knave-main' },
            { path: '/npc', component: 'knave-npc' },
            { path: '/items', component: 'knave-items' },
            { path: '/monsters', component: 'knave-monsters' },
            { path: '/atmosphere', component: 'knave-atmosphere' },
            { path: '(.*)', redirect: '/characters' }
        ]);

        
    }

    render() {
        return html`
        <a href="/characters">Characters</a>
        <a href="/npc">Npc</a>
        <a href="/items">Items</a>
        <a href="/monsters">Monsters</a>
        <a href="/atmosphere">Atmosphere</a>
        
        <div id="router-outlet"></div>
        `;
    }
}

customElements.define('knave-app', KnaveApp);
