// src/Services/logicService.ts
import DBService from "./dbService";
import { Observer } from "../Abstract/Observer";
import { TGood, TTypeField, TTypeGood, TValueField } from "../Abstract/Types";

export default class LogicService extends Observer {
    constructor(private dbService: DBService) {
        super();
    }

    async getTypesGoods(): Promise<TTypeGood[]> {
        const data = await this.dbService.getTypesGoods();
        return data.types;
    }

    async updateGoodsByType(idGood: number): Promise<void> {
        const data = await this.dbService.getGoodsByType(idGood);

        console.log(idGood);
        const goods = data.goods;
        goods.forEach((good) => {
            (good as TGood)["fields"] = this.joinTypesValues(good.typeField, good.valueFields);
        });
        this.dispatch("updateGoodsOnPage", goods);
    }

    async updateAllGoods(): Promise<void> {
        const data = await this.dbService.getAllGoods();
        this.dispatch("updateGoodsOnPage", data.goods);

        console.log("All goods updated successfully");
    }

    private joinTypesValues(
        arrTypes: TTypeField[],
        arrValues: TValueField[],
    ): Record<string, string | number | Date> {
        if (!arrTypes || !arrValues || arrTypes.length !== arrValues.length) {
            return {};
        }

        const goodJson = {} as Record<string, string | number | Date>;
        for (let index = 0; index < arrTypes.length; index++) {
            goodJson[arrTypes[index][1]] = arrValues[index][1];
        }
        return goodJson;
    }
}
