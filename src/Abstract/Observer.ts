type TParems = string | number | boolean | object | null;

type TObserver = {
    name: string;
    callback: (...params: TParems[]) => void;
};

export class Observer {
    private listeners: TObserver[] = [];

    addListener(name: string, callback: (...params: TParems[]) => void): void {
        this.listeners.push({ name, callback });
    }

    dispatch(name: string, ...params: TParems[]): void {
        this.listeners.filter((it) => it.name === name).forEach((it) => it.callback(...params));
    }
}
