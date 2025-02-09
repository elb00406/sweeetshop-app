import { Component } from '../Abstract/Component';
import { TGood } from '../Abstract/Types';
import { ButtonTypeGood } from './ButtonTypeGood';
import { GoodItem } from './GoodItems';
import { LogicService } from '../Services/logicService';

export class Catalog extends Component {
	private divButtons: Component | null = null;
	private divGoods: Component | null = null;
	private carouselContainer: Component | null = null;
	private scrollAmount = 300;

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['catalog_section']);

		new Component(this.root, 'h2', ['catalog-title'], 'Каталог');

		this.divButtons = new Component(this.root, 'div', ['button_container']);

		this.carouselContainer = new Component(this.root, 'div', [
			'carousel-container',
		]);

		service.addListener('updateGoodsOnPage', (goods) => {
			if (goods) this.updateGoodsOnPage(goods as TGood[]);
		});

		this.update();
	}

	private update(): void {
		this.service.getTypesGoods().then((typesGoods) => {
			typesGoods.forEach((typeGood) => {
				if (this.divButtons) {
					new ButtonTypeGood(this.divButtons.root, this.service, typeGood);
				}
			});

			this.service.updateGoodsByType('');
		});
	}

	updateGoodsOnPage(goods: TGood[]): void {
		const divGoods = this.divGoods;
		const carouselContainer = this.carouselContainer;
		if (divGoods) {
			divGoods.root.innerHTML = '';

			if (!goods || goods.length === 0) {
				new Component(divGoods.root, 'p', ['no-goods-message'], 'Нет товаров');
				return;
			}

			if (goods.length >= 4 && carouselContainer) {
				const leftArrow = new Component(
					carouselContainer.root,
					'button',
					['carousel-arrow', 'left-arrow'],
					'◀'
				);
				leftArrow.root.addEventListener('click', () => this.scrollLeft());

				const rightArrow = new Component(
					carouselContainer.root,
					'button',
					['carousel-arrow', 'right-arrow'],
					'▶'
				);
				rightArrow.root.addEventListener('click', () => this.scrollRight());
				this.divGoods = new Component(carouselContainer.root, 'div', [
					'goods_container',
				]);
			}

			goods.forEach((good) => {
				new GoodItem(divGoods.root, this.service, good);
			});
		}
	}

	private scrollLeft(): void {
		if (this.divGoods) {
			this.divGoods.root.scrollBy({
				left: -this.scrollAmount,
				behavior: 'smooth',
			});
		}
	}

	private scrollRight(): void {
		if (this.divGoods) {
			this.divGoods.root.scrollBy({
				left: this.scrollAmount,
				behavior: 'smooth',
			});
		}
	}
}
