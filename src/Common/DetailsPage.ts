import { Component } from '../Abstarct/Component';
import { TGood } from '../Abstarct/Types';
import { LogicService } from '../Services/LogicService';
import { Slider } from './Slider';

export class DetailsPage extends Component {
	stateUpdate: boolean = false;
	private good: TGood | null = null;

	imgItem: Component;
	itemPrice: Component;
	h2Name: Component;
	divProp: Component;
	slider: Slider;
	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['details__pages', 'abel']);

		const btnBack = new Component(
			this.root,
			'button',
			['details__pages-back'],
			null
		);
		new Component(
			btnBack.root,
			'img',
			['img--back'],
			null,
			['src'],
			['../assets/svg/left-arrow.svg']
		);
		const leftItem = new Component(this.root, 'div', ['left-item']);
		const rightItem = new Component(this.root, 'div', ['right-item']);
		this.slider = new Slider(leftItem.root, service);
		this.imgItem = new Component(leftItem.root, 'img');
		this.h2Name = new Component(rightItem.root, 'h2');
		this.divProp = new Component(rightItem.root, 'div');
		const priceItem = new Component(rightItem.root, 'div', ['price-item']);
		new Component(priceItem.root, 'p', ['details__pages-price'], 'Цена: ');
		this.itemPrice = new Component(priceItem.root, 'p', [
			'details__pages_price',
		]);

		new Component(rightItem.root, 'button', ['details__button'], 'Добавить');

		service.addListener('updatePageDetails', (good) => {
			this.good = good as TGood;
			this.update();
		});

		btnBack.root.onclick = () => {
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
		if (!this.good) return;

		this.slider.setPhoto(this.good);
		this.itemPrice.root.textContent =
			Math.floor(this.good.price / 100).toString() + ' BYN';
		this.h2Name.root.textContent = this.good.title;
		this.divProp.root.innerHTML = '';
		this.good.typeFields.forEach((type, num) => {
			const divElem = new Component(this.divProp.root, 'div');
			new Component(divElem.root, 'p', null, type[1]);

			if (type[1] === 'Размер') {
				const sizeContainer = new Component(divElem.root, 'div', [
					'size-container',
				]);
				if (typeof this.good?.valueFields[num][1] === 'string') {
					this.good.valueFields[num][1].split(',').forEach((size) => {
						const sizeButton = new Component(
							sizeContainer.root,
							'button',
							['size-button'],
							size.trim()
						);
						sizeButton.root.addEventListener('click', () => {
							const buttons =
								sizeContainer.root.querySelectorAll('.size-button');
							buttons.forEach((btn) => btn.classList.remove('selected'));
							sizeButton.root.classList.add('selected');
						});
					});
				}
			} else {
				new Component(
					divElem.root,
					'span',
					null,
					'' + this.good?.valueFields[num][1]
				);
			}
		});
	}

	isGoodInDetailsPage(): boolean {
		return this.good ? true : false;
	}
}
