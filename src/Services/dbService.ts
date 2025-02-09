import {
	TGoodsResponse,
	TIdentificationResponse,
	TRegistrationResponse,
	TTypesGoods,
} from '../Abstarct/Types';

export class DBService {
	private domain = 'https://polyteh.cis.by/cgi-bin/';
	private pinCode = '';
	private keyShop = '792513588';

	async getTypesGoods(): Promise<TTypesGoods> {
		const response = await fetch(
			this.domain +
				'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=100&sgr_r=0&stst_=0&shead_=0&sadd_=5,126' +
				',85'
		);
		const data = (await response.json()) as TTypesGoods;
		return data;
	}

	async getGoodsByType(idGood: string): Promise<TGoodsResponse> {
		const response = await fetch(
			this.domain +
				'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=110&sgr_r=0&stst_=0&shead_=0&sadd_=5,126' +
				',85' +
				',' +
				idGood
		);
		const data = (await response.json()) as TGoodsResponse;
		return data;
	}

	async registationCustomer(
		name: string,
		email: string,
		mobile: string,
		operatorType: string,
		adress: string
	): Promise<TRegistrationResponse> {
		const link =
			this.domain +
			'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=180&sgr_r=0&stst_=0&shead_=0&sadd_=5,85,' +
			`${mobile},${name},${operatorType},${email},${adress},1,${this.keyShop}`;
		const response = await fetch(link);
		const data = (await response.json()) as TRegistrationResponse;
		return data;
	}
	async confirmRegistrationCustomer(
		customerId: string,
		code: string
	): Promise<TRegistrationResponse> {
		const link =
			this.domain +
			'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=181&sgr_r=0&stst_=0&shead_=0&sadd_=5,85,' +
			`${customerId},${code}`;
		const response = await fetch(link);
		const data = (await response.json()) as TRegistrationResponse;
		return data;
	}

	async identificationCustomer(
		customerId: string
	): Promise<TRegistrationResponse> {
		const link =
			this.domain +
			'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=170&sgr_r=0&stst_=0&shead_=0&sadd_=5,85,' +
			`${customerId},${this.keyShop}`;
		const response = await fetch(link);
		const data = (await response.json()) as TRegistrationResponse;
		return data;
	}
	async confirmIdentificationCustomer(
		customerId: string,
		code: string
	): Promise<TIdentificationResponse> {
		this.pinCode = code;
		const link =
			this.domain +
			'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=176&sgr_r=0&stst_=0&shead_=0&sadd_=5,85,' +
			`${customerId},${code}`;

		const response = await fetch(link);
		const data = (await response.json()) as TIdentificationResponse;
		return data;
	}
}
