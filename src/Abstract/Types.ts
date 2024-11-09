export type TTypeGood = {
    id: number;
    title: string;
    typeField?: {
        id: string;
        title: string;
        type: number;
        current: string;
        params: string;
    }[];
};

export type TTypesGoods = {
    types: TTypeGood[];
};

export type TValueField = [number, number | string | Date];

export type TTypeField = [number, string, number, number, string];

export type TGoodResponse = {
    count: number;
    codeCDB: number;
    id: number;
    title: string;
    orderDB: number;
    valueFields: TValueField[];
    typeField: TTypeField[];
};

export type TGoodsResponse = {
    goods: TGoodResponse[];
};

export type TGood = TGoodResponse & {
    fields: Record<string, string | number | Date>;
};
