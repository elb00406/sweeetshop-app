import { Observer } from '../Abstarct/Observer';
import { DBService } from './DBService';
import {
	TGood,
	TTypeField,
	TTypeGood,
	TValueField,
	TGoodResponse,
	TCustomer,
} from '../Abstarct/Types';

export class LogicService extends Observer {
	private originalGoods: TGoodResponse[] | null = null;
	private filteredGoods: TGoodResponse[] | null = null;
	private currentFilter: string | null = null;
	private currentSortAsc: boolean | null = null;
	userCustomer: TCustomer | null = null;
	constructor(private dbService: DBService) {
		super();
	}

	async getTypesGoods(): Promise<TTypeGood[]> {
		const data = await this.dbService.getTypesGoods();
		return data.types;
	}

	async updateGoodsByType(idGood: string): Promise<void> {
		const data = await this.dbService.getGoodsByType(idGood);
		const goods = data.goods;
		goods.forEach((good) => {
			(good as TGood)['fields'] = this.joinTypesWithValues(
				good.typeFields,
				good.valueFields
			);
		});

		this.originalGoods = goods;

		if (this.currentFilter) {
			this.filteredGoods = goods.filter(
				(good) => good.valueFields[0][1] === this.currentFilter
			);

			if (this.currentSortAsc !== null) {
				this.filteredGoods = [...this.filteredGoods].sort((a, b) =>
					this.currentSortAsc ? a.price - b.price : b.price - a.price
				);
			}
		} else {
			this.filteredGoods = goods;
		}

		this.disptach('updateGoodseOnPage', this.filteredGoods);
	}

	private joinTypesWithValues(
		arrTypes: TTypeField[],
		arrValues: TValueField[]
	): Record<string, string | number | Date> {
		const lenArr = arrTypes.length;
		const goodJson = {} as Record<string, string | number | Date>;
		for (let i = 0; i < lenArr; i++) {
			goodJson[arrTypes[i][1]] = arrValues[i][1];
		}
		return goodJson;
	}
	sortGoodsByPrice(bool: boolean): void {
		if (!this.filteredGoods) return;

		this.currentSortAsc = bool;
		this.filteredGoods = [...this.filteredGoods].sort((a, b) =>
			bool ? a.price - b.price : b.price - a.price
		);

		this.disptach('updateGoodseOnPage', this.filteredGoods);
	}

	filterItemByTypeSneakers(type: string): void {
		if (!this.originalGoods) return;

		if (type === 'all') {
			this.currentFilter = null;
			this.filteredGoods = [...this.originalGoods];
		} else {
			this.currentFilter = type;
			this.filteredGoods = this.originalGoods.filter(
				(good) => good.valueFields[0][1] === type
			);
		}

		if (this.currentSortAsc !== null) {
			this.sortGoodsByPrice(this.currentSortAsc);
		}

		this.disptach('updateGoodseOnPage', this.filteredGoods);
	}

	openPageDetails(good: TGood): void {
		this.disptach('updatePageDetails', good);
		window.location.hash = '#details';
	}
	openPageCatalog(): void {
		this.disptach('updateGoodseOnPage');
		window.location.hash = '#catalog';
	}

	registationCustomer(
		name: string,
		email: string,
		mobile: string,
		operatorType: string,
		adress: string
	): void {
		this.dbService
			.registationCustomer(name, email, mobile, operatorType, adress)
			.then((response) => {
				if (response) {
					this.disptach('confirm_registration', response);
				} else {
					alert('Сбой регистрации');
				}
			});
	}
	confirmRegistrationCustomer(customerId: string, code: string): void {
		this.dbService
			.confirmRegistrationCustomer(customerId, code)
			.then((response) => {
				if (response) {
					this.disptach('end_registration', response);
				} else {
					alert('Сбой регистрации');
				}
			});
	}
	identificationCustomer(customerId: string): void {
		this.dbService.identificationCustomer(customerId).then((response) => {
			if (response) {
				this.disptach('confirm_identification', response);
			} else {
				alert('Сбой авторизации');
			}
		});
	}
	confirmIdentificationCustomer(customerId: string, code: string): void {
		this.dbService
			.confirmIdentificationCustomer(customerId, code)
			.then((response) => {
				if (response) {
					if (response.error.code == 0) this.userCustomer = response.customer;
					this.disptach('end_identification', response);
				} else {
					alert('Сбой авторизации');
				}
			});
	}
	getUserCustomer(): TCustomer | null {
		return this.userCustomer;
	}
}
