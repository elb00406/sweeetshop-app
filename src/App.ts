import { Component } from './Abstract/Component';
import { Footer } from './Common/Footer';
import { Header } from './Common/Header';
import { Router } from './Common/Router';

export class App {
    constructor(parrent: HTMLElement) {
        const wrap = new Component(parrent, 'div', ['wrapper']);

        new Header(wrap.node);

        const main = new Component(wrap.node, 'main');
        new Router(main.node);

        new Footer(wrap.node);
    }
}
