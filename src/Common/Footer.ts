import { Component } from '../Abstarct/Component';

export class Footer extends Component {
	constructor(parent: HTMLElement) {
		super(parent, 'footer', ['footer']);

		const footerContainer = new Component(this.root, 'div', [
			'footer-container',
		]);

		const footerLeftRight = new Component(this.root, 'div', [
			'footerLeftRight',
		]);
		// Центральная часть с логотипом
		const footerCenter = new Component(footerContainer.root, 'div', [
			'footer-center',
		]);

		new Component(
			footerCenter.root,
			'img',
			['footer-logo'],
			'',
			['src', 'alt'],
			['../assets/svg/logo.svg', 'Брестенский Пекарь']
		);

		const footerLeft = new Component(footerLeftRight.root, 'div', [
			'footer-left',
		]);

		// Email с иконкой
		const emailWrapper = new Component(footerLeft.root, 'div', [
			'contact-item',
		]);
		new Component(
			emailWrapper.root,
			'img',
			['contact-icon'],
			'',
			['src', 'alt'],
			['../assets/png/mail.png', 'Email']
		);
		new Component(
			emailWrapper.root,
			'a',
			['footer-text'],
			'info@bhp.by',
			['href'],
			['mailto:info@bhp.by']
		);

		// Телефон с иконкой
		const phoneWrapper = new Component(footerLeft.root, 'div', [
			'contact-item',
		]);
		new Component(
			phoneWrapper.root,
			'img',
			['contact-icon'],
			'',
			['src', 'alt'],
			['../assets/png/tel.png', 'Phone']
		);
		new Component(
			phoneWrapper.root,
			'a',
			['footer-text'],
			'+375(29)526-37-56',
			['href'],
			['tel:+375295263756']
		);

		// Адрес с иконкой
		const addressWrapper = new Component(footerLeft.root, 'div', [
			'contact-item',
		]);
		new Component(
			addressWrapper.root,
			'img',
			['contact-icon'],
			'',
			['src', 'alt'],
			['../assets/png/map.png', 'Location']
		);
		new Component(
			addressWrapper.root,
			'p',
			['footer-text'],
			'Республика Беларусь, 224014 г. Брест, ул. Писателя Смирнова, 100'
		);

		new Component(footerLeft.root, 'p', ['footer-text'], 'Дорошук П.В, ЭЛЬ-4');

		// Правая часть с соц. сетями
		const footerRight = new Component(footerLeftRight.root, 'div', [
			'footer-right',
		]);

		new Component(
			footerRight.root,
			'p',
			['footer-text'],
			'Мы в социальных сетях:'
		);

		const socialLinks = new Component(footerRight.root, 'div', [
			'social-links',
		]);

		new Component(
			socialLinks.root,
			'img',
			null,
			null,
			['src', 'alt'],
			['../assets/png/inst.png', 'Inst']
		);
		new Component(
			socialLinks.root,
			'img',
			null,
			null,
			['src', 'alt'],
			['../assets/png/tg.png', 'Tg']
		);
		new Component(
			socialLinks.root,
			'img',
			null,
			null,
			['src', 'alt'],
			['../assets/png/tt.png', 'TT']
		);

		const footerRightBg = new Component(footerLeftRight.root, 'div', [
			'footer-rightBg',
		]);

		new Component(
			footerRightBg.root,
			'img',
			null,
			null,
			['src', 'alt'],
			['../assets/png/bg-footer.png', 'bg']
		);
	}
}
