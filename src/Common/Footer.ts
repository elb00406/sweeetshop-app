import { Component } from '../Abstract/Component';

export class Footer extends Component {
	constructor(parent: HTMLElement) {
		super(parent, 'footer', ['footer']);

		new Component(
			this.root,
			'img',
			['logo'],
			null,
			['src', 'alt'],
			['/assets/png/logo.png', 'лого']
		);

		new Component(this.root, 'p', ['polina'], 'Дорошук П.В, ЭЛБ-4');

		const footerContent = new Component(this.root, 'div', ['footerContent']);

		const contact = new Component(footerContent.root, 'div', ['footerContact']);
		const social = new Component(footerContent.root, 'div', ['footerSocial']);

		const email = new Component(contact.root, 'div', ['contactElem']);
		const number = new Component(contact.root, 'div', ['contactElem']);
		const location = new Component(contact.root, 'div', ['contactElem']);

		new Component(
			email.root,
			'img',
			['footerContactImg'],
			null,
			['src', 'alt'],
			['/assets/svg/email.svg', 'email']
		);

		new Component(email.root, 'p', null, 'info@bhp.by');

		new Component(
			number.root,
			'img',
			['footerContactImg'],
			null,
			['src', 'alt'],
			['/assets/svg/number.svg', 'number']
		);

		new Component(number.root, 'p', null, '+375(29)526-37-56');

		new Component(
			location.root,
			'img',
			['footerContactImg'],
			null,
			['src', 'alt'],
			['/assets/svg/location.svg', 'location']
		);

		new Component(
			location.root,
			'p',
			null,
			'Республика Беларусь, 224014 г. Брест, ул. Писателя Смирнова, 100'
		);

		new Component(
			footerContent.root,
			'img',
			['footerImg'],
			null,
			['src', 'alt'],
			['/assets/png/biscuiеSet.png', 'biscuiеSet']
		);

		// social

		new Component(social.root, 'p', null, 'Мы в социальных сетях:');

		const socials = new Component(social.root, 'div', ['socialElem']);

		new Component(
			socials.root,
			'img',
			['footerSocial'],
			null,
			['src', 'alt'],
			['/assets/png/instagram.png', 'instagram']
		);
		new Component(
			socials.root,
			'img',
			['footerSocial'],
			null,
			['src', 'alt'],
			['/assets/png/tg.png', 'tg']
		);
		new Component(
			socials.root,
			'img',
			['footerSocial'],
			null,
			['src', 'alt'],
			['/assets/png/tiktok.png', 'tiktok']
		);
	}
}
