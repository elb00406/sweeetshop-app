import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';

export class Profile extends Component {
	stateUpdate: boolean = false;

	private spanName: Component;
	private spanEmail: Component;
	private spanPhone: Component;
	private spanMobileOperator: Component;
	private spanAdress: Component;

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['person-page']);

		new Component(this.root, 'h1', ['person-page__title'], 'Мой профиль');

		const divPersonal = new Component(this.root, 'div', [
			'person-page__personal',
		]);

		const divLeft = new Component(divPersonal.root, 'div', [
			'person-page__left',
		]);

		const divRight = new Component(divPersonal.root, 'div', [
			'person-page__right',
		]);

		const divRightNumber = new Component(divRight.root, 'div', ['number']);

		this.spanName = new Component(divLeft.root, 'span', ['spanName'], '');
		this.spanEmail = new Component(divRight.root, 'span', [], '');
		this.spanPhone = new Component(divRightNumber.root, 'span', [], '');
		this.spanMobileOperator = new Component(
			divRightNumber.root,
			'span',
			[],
			''
		);
		this.spanAdress = new Component(divRight.root, 'span', [], '');

		const divCenter = new Component(this.root, 'div', ['person-page__center']);

		new Component(
			divCenter.root,
			'img',
			['person-page__smile'],
			null,
			['src', 'alt'],
			['./assets/svg/sad-smile.svg', 'smile']
		);

		new Component(
			divCenter.root,
			'h2',
			['person-page__center-title'],
			'У вас нет заказов'
		);

		new Component(
			divCenter.root,
			'span',
			['person-page__center-podspan'],
			'Вы нищеброд? Оформите хотя бы один заказ.'
		);
		const BtnReturn = new Component(
			divCenter.root,
			'button',
			['person-page__center-button'],
			'Вернуться назад'
		);

		BtnReturn.root.onclick = () => {
			service.openPageCatalog();
		};
	}

	renderWithUpdate(): void {
		if (!this.stateUpdate) {
			this.update();
			this.stateUpdate = true;
		}
		this.render();
	}

	update(): void {
		const userCustomer = this.service.getUserCustomer();
		if (userCustomer) {
			this.spanName.root.innerHTML = userCustomer.name;
			this.spanEmail.root.innerHTML = userCustomer.email;
			this.spanPhone.root.innerHTML = userCustomer.mobile;
			this.spanMobileOperator.root.innerHTML = `(${userCustomer.operatorType})`;
			this.spanAdress.root.innerHTML = userCustomer.adress;
		}
	}
}
