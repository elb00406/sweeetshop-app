import { Component } from '../Abstract/Component';

export class DeliveryInfo extends Component {
	constructor(parent: HTMLElement) {
		super(parent, 'section', ['delivery-info']);

		new Component(this.root, 'h2', ['delivery-title'], 'Оплата и доставка');

		const details = new Component(
			this.root,
			'div',
			['delivery-details'],
			'Заказы через сайт принимаются круглосуточно. Обработка с 9:00 до 18:00. Бесплатная доставка от 40 руб.'
		);

		const deliveryOptions = new Component(this.root, 'div', [
			'delivery-options',
		]);

		const infoBlocks = [
			{ text: 'Минимальный заказ 15 рублей', icon: '/assets/delivery1.png' },
			{
				text: 'Стоимость доставки 10 рублей, ДОСТАВКА 10:30—19:30, при доставке курьером - оплата только наличными',
				icon: '/assets/delivery2.png',
			},
			{
				text: 'Самовывоз из точек продаж: заказ можно забрать в тот же день после 11:00',
				icon: '/assets/delivery3.png',
			},
		];

		infoBlocks.forEach((info) => {
			const block = new Component(deliveryOptions.root, 'div', ['info-block']);
			new Component(block.root, 'div', [info.icon]);
			new Component(block.root, 'p', ['info-text'], info.text);
			new Component(
				block.root,
				'img',
				['product-image'],
				info.icon,
				['src', 'alt'],
				[info.icon, 'лого']
			);
		});
	}
}
