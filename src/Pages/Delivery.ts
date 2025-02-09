import { Component } from '../Abstarct/Component';
import {
	TIdentificationResponse,
	TRegistrationResponse,
} from '../Abstarct/Types';
import { LogicService } from '../Services/LogicService';

export class DeliveryPage extends Component {
	stateUpdate: boolean = false;

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['delivery-page']);

		// Заголовок и подзаголовки
		new Component(
			this.root,
			'h1',
			['delivery-page__title'],
			'Оплата и доставка'
		);

		const subtitleBlock = new Component(this.root, 'div', [
			'delivery-page__subtitle',
		]);
		new Component(
			subtitleBlock.root,
			'p',
			null,
			'Заказы через сайт принимаются круглосуточно'
		);
		new Component(subtitleBlock.root, 'p', null, 'Обработка с 9:00 до 18:00');
		new Component(
			subtitleBlock.root,
			'p',
			null,
			'Бесплатная доставка от 40 руб.'
		);

		// Блок с информацией о доставке
		const infoBlock = new Component(this.root, 'div', ['delivery-page__info']);

		// Минимальный заказ
		const minOrderBlock = new Component(infoBlock.root, 'div', [
			'delivery-info',
		]);
		new Component(
			minOrderBlock.root,
			'h3',
			['delivery-info__title'],
			'Минимальный заказ'
		);
		new Component(
			minOrderBlock.root,
			'p',
			['delivery-info__text'],
			'15 рублей'
		);
		new Component(
			minOrderBlock.root,
			'img',
			['delivery-info__icon'],
			null,
			['src', 'alt'],
			['../assets/png/money.png', 'Минимальный заказ']
		);

		// Стоимость доставки
		const deliveryCostBlock = new Component(infoBlock.root, 'div', [
			'delivery-info',
		]);
		new Component(
			deliveryCostBlock.root,
			'h3',
			['delivery-info__title'],
			'Стоимость доставки 10 рублей'
		);
		new Component(
			deliveryCostBlock.root,
			'p',
			['delivery-info__text'],
			'ДОСТАВКА с 10:30—19:30'
		);
		new Component(
			deliveryCostBlock.root,
			'p',
			['delivery-info__text'],
			'ПРИ ДОСТАВКЕ'
		);
		new Component(
			deliveryCostBlock.root,
			'p',
			['delivery-info__text'],
			'КУРЬЕРОМ - ОПЛАТА'
		);
		new Component(
			deliveryCostBlock.root,
			'p',
			['delivery-info__text'],
			'ТОЛЬКО'
		);
		new Component(
			deliveryCostBlock.root,
			'p',
			['delivery-info__text'],
			'НАЛИЧНЫМИ!!'
		);
		new Component(
			deliveryCostBlock.root,
			'img',
			['delivery-info__icon'],
			null,
			['src', 'alt'],
			['../assets/png/dost.png', 'Доставка']
		);

		// Самовывоз
		const pickupBlock = new Component(infoBlock.root, 'div', ['delivery-info']);
		new Component(
			pickupBlock.root,
			'h3',
			['delivery-info__title'],
			'Самовывоз из точек продаж'
		);
		new Component(
			pickupBlock.root,
			'p',
			['delivery-info__text'],
			'Заказ, Вы можете забрать:'
		);
		new Component(
			pickupBlock.root,
			'p',
			['delivery-info__text'],
			'— в тот же день после 11:00'
		);
		new Component(
			pickupBlock.root,
			'p',
			['delivery-info__text'],
			'— по предзаказу с 10:00'
		);
		new Component(pickupBlock.root, 'p', ['delivery-info__text'], 'до 20:00');
		new Component(
			pickupBlock.root,
			'img',
			['delivery-info__icon'],
			null,
			['src', 'alt'],
			['../assets/png/dost1.png', 'Самовывоз']
		);
	}

	renderWithUpdate(): void {
		if (!this.stateUpdate) {
			this.update();
			this.stateUpdate = true;
		}
		this.render();
	}

	update(): void {}
}
