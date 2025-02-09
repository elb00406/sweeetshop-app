type TParams = string | number | boolean | object | null;

type TObserver = {
	name: string;
	callback: (...params: TParams[]) => void;
};

export class Observer {
	private listeners: TObserver[] = [];

	addListener(name: string, callback: (...params: TParams[]) => void): void {
		this.listeners.push({ name, callback });
	}

	disptach(name: string, ...params: TParams[]): void {
		this.listeners
			.filter((listener) => listener.name === name)
			.forEach((listener) => listener.callback(...params));
	}
}
