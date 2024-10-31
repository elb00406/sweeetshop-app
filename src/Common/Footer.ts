import { Component } from '../Abstract/Component';

export class Footer extends Component {
    constructor(parent: HTMLElement) {
        super(parent, 'footer', ['footer']);

        new Component(
            this.node,
            'img',
            ['logo'],
            null,
            ['src', 'alt'],
            ['/assets/logo.png', 'лого'],
        );

        new Component(this.node, 'p', ['polina'], 'Дорошук П.В, ЭЛБ-4');

        const footerContent = new Component(this.node, 'div', ['footerContent']);

        const contact = new Component(footerContent.node, 'div', ['footerContact']);
        const social = new Component(footerContent.node, 'div', ['footerSocial']);

        const email = new Component(contact.node, 'div', ['contactElem']);
        const number = new Component(contact.node, 'div', ['contactElem']);
        const location = new Component(contact.node, 'div', ['contactElem']);

        new Component(
            email.node,
            'img',
            ['footerContactImg'],
            null,
            ['src', 'alt'],
            ['/assets/email.svg', 'email'],
        );

        new Component(email.node, 'p', null, 'info@bhp.by');

        new Component(
            number.node,
            'img',
            ['footerContactImg'],
            null,
            ['src', 'alt'],
            ['/assets/number.svg', 'number'],
        );

        new Component(number.node, 'p', null, '+375(29)526-37-56');

        new Component(
            location.node,
            'img',
            ['footerContactImg'],
            null,
            ['src', 'alt'],
            ['/assets/location.svg', 'location'],
        );

        new Component(
            location.node,
            'p',
            null,
            'Республика Беларусь, 224014 г. Брест, ул. Писателя Смирнова, 100',
        );

        new Component(
            footerContent.node,
            'img',
            ['footerImg'],
            null,
            ['src', 'alt'],
            ['/assets/biscuiеSet.png', 'biscuiеSet'],
        );

        // social

        new Component(social.node, 'p', null, 'Мы в социальных сетях:');

        const socials = new Component(social.node, 'div', ['socialElem']);

        new Component(
            socials.node,
            'img',
            ['footerSocial'],
            null,
            ['src', 'alt'],
            ['/assets/instagram.png', 'instagram'],
        );
        new Component(
            socials.node,
            'img',
            ['footerSocial'],
            null,
            ['src', 'alt'],
            ['/assets/tg.png', 'tg'],
        );
        new Component(
            socials.node,
            'img',
            ['footerSocial'],
            null,
            ['src', 'alt'],
            ['/assets/tiktok.png', 'tiktok'],
        );
    }
}
