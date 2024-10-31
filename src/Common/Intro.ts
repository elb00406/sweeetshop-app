import { Component } from '../Abstract/Component';

export class Intro extends Component {
    constructor(parrent: HTMLElement) {
        super(parrent, 'section', ['intro']);

        new Component(
            this.node,
            'div',
            ['name'],
            'ОАО “Берестейский пекарь” - с заботой о каждой крошке! ',
        );

        const button = new Component(this.node, 'a', null, null, ['href'], ['/catalog.html']);

        new Component(button.node, 'button', ['button', 'primary'], 'Перейти в каталог');
    }
}
