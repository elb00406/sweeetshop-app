import { Component } from '../Abstarct/Component';
import { LogicService } from '../Services/LogicService';
import { TGood, TTypeGood } from '../Abstarct/Types';
import { ButtonTypeGood } from '../Common/ButtonTypeGood';
import { Cart } from '../Common/Cart';
import { SelectTypeSort } from '../Common/SelectTypeSort';
import { SelectTypeFilter } from '../Common/SelectTypeFilter';

export class Catalog extends Component {
	stateUpdate: boolean = false;
	divButtons: null | Component = null;
	divGoods: null | Component = null;
	divSort: null | Component = null;
	divFilter: null | Component = null;
	currentIndex: number = 0;
	goods: TGood[] = [];

	constructor(parent: HTMLElement, private service: LogicService) {
		super(parent, 'div', ['catalog']);
		new Component(this.root, 'h3', ['catalog__title-h3'], 'Каталог');
		const divData = new Component(this.root, 'div', ['catalog__wrapperDesc']);
		this.divButtons = new Component(divData.root, 'div', ['catalog__buttons']);
		const divLine = new Component(divData.root, 'div', ['catalog__line']);
		this.divSort = new Component(divLine.root, 'div', ['catalog__sort']);
		this.divFilter = new Component(divLine.root, 'div', ['catalog__filter']);
		this.divGoods = new Component(divData.root, 'div', ['catalog__goods']);

		service.addListener('updateGoodseOnPage', (goods) => {
			if (goods) this.updateGoodseOnPage(goods as TGood[]);
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
			if (this.divButtons && this.divSort && this.divFilter) {
				const allGoodsButton: TTypeGood = {
					id: 0,
					title: 'Все товары',
					typeFields: [],
				};
				new ButtonTypeGood(this.divButtons.root, this.service, allGoodsButton);
				typesGoods.forEach((typeGood) => {
					if (this.divButtons)
						new ButtonTypeGood(this.divButtons.root, this.service, typeGood);
				});
				new SelectTypeSort(this.divSort.root, this.service, typesGoods);
			}

			this.service.updateGoodsByType('');
		});
	}
	updateGoodseOnPage(goods: TGood[]) {
		const divGoods = this.divGoods;
		if (divGoods) {
			divGoods.root.innerHTML = '';
			goods.forEach((good) => {
				const cart = new Cart(divGoods.root, this.service, good);
			});
		}
	}
}
