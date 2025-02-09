import { Component } from '../Abstract/Component';
import { TGood, TTypeGood } from '../Abstract/Types';
import { ButtonTypeGood } from '../Common/ButtonTypeGood';
import { GoodItem } from '../Common/GoodItems';
import { LogicService } from '../Services/logicService';

export class CatalogPage extends Component {
	stateUpdate: boolean = false;

	private divButtons: Component | null = null;
	private divGoods: Component | null = null;
	private carouselContainer: Component | null = null;

	private leftArrow: Component | null = null;
	private rightArrow: Component | null = null;

	private scrollAmount = 300;

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['catalog_page']);

		new Component(this.root, 'h2', ['catalog-title'], 'Каталог');

		this.divButtons = new Component(this.root, 'div', ['button_container']);

		this.carouselContainer = new Component(this.root, 'div', [
			'carousel-container',
		]);
		this.divGoods = new Component(this.carouselContainer.root, 'div', [
			'goods_container',
		]);

		service.addListener('updateGoodsOnPage', (goods) => {
			if (goods) this.updateGoodsOnPage(goods as TGood[]);
		});
	}

	renderWithUpdate(): void {
		if (!this.stateUpdate) {
			this.update();
			this.stateUpdate = true;
		}
		this.render();
	}

	update(): void {
		this.service.getTypesGoods().then((typesGoods) => {
			if (this.divButtons) {
				const allGoodsButton: TTypeGood = {
					id: 0,
					title: 'Все товары',
					typeFields: [],
				};
				new ButtonTypeGood(this.divButtons.root, this.service, allGoodsButton);
			}
			typesGoods.forEach((typeGood) => {
				if (this.divButtons) {
					new ButtonTypeGood(this.divButtons.root, this.service, typeGood);
				}
			});
			this.service.updateGoodsByType('');
		});
	}

	updateGoodsOnPage(goods: any[]): void {
		const divGoods = this.divGoods;
		let leftArrow = this.leftArrow;
		let rightArrow = this.rightArrow;
		const carouselContainer = this.carouselContainer;

		if (divGoods) {
			divGoods.root.innerHTML = '';

			if (!goods || goods.length === 0) {
				new Component(divGoods.root, 'p', ['no-goods-message'], 'Нет товаров');
				return;
			}

			if (goods.length >= 4 && carouselContainer) {
				console.log(goods.length + 'dqwddqw');
				leftArrow = new Component(
					carouselContainer.root,
					'button',
					['carousel-arrow', 'left-arrow'],
					'◀'
				);
				leftArrow.root.addEventListener('click', () => this.scrollLeft());

				rightArrow = new Component(
					carouselContainer.root,
					'button',
					['carousel-arrow', 'right-arrow'],
					'▶'
				);
				rightArrow.root.addEventListener('click', () => this.scrollRight());
			} else {
				leftArrow = null;
				rightArrow = null;
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
