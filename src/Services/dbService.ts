import { TGoodsResponse, TTypeGood, TTypesGoods } from '../Abstract/Types';

// src/Services/dbService.ts
export default class DBService {
	private domain: string = 'https://polyteh.cis.by/cgi-bin/';

	async getTypesGoods(): Promise<TTypesGoods> {
		const res = await fetch(
			this.domain +
				'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=100&sgr_r=0&stst_=0&shead_=0&sadd_=5,126,' +
				'85'
		);
		const data = (await res.json()) as TTypesGoods;
		return data;
	}

	async getGoodsByType(idGood: number): Promise<TGoodsResponse> {
		const res = await fetch(
			this.domain +
				'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=110&sgr_r=0&stst_=0&shead_=0&sadd_=5,126,' +
				'85,' +
				idGood
		);
		const data = (await res.json()) as TGoodsResponse;
		return data;
	}

	async getAllGoods(): Promise<TGoodsResponse> {
		const res = await fetch(
			this.domain +
				'is10_09?sSd_=0&sfil_n=2&svid_=3&sgr_l=160&sit_l=110&sgr_r=0&stst_=0&shead_=0&sadd_=5,126,' +
				'85'
		);
		const data = (await res.json()) as TGoodsResponse;
		return data;
	}
}
