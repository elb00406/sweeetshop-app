import { Page } from "../Abstract/interfeces";

export class Router {
    constructor(public links: Record<string, Page>) {
        window.onhashchange = () => {
            this.openPage();
        };
        this.openPage();
    }

    openPage(): void {
        Object.values(this.links).forEach((el) => el.Remove());

        const url = window.location.hash.slice(1); // Use default route if no hash
        // const page = this.links[url.slice(1)];
        if (url === "account") {
            this.links["#account"].renderWithUpdate();
        } else {
            this.links["#"].renderWithUpdate();
        }
    }

    // constructor(public links: Record<string, Page>, private parent: HTMLElement) {
    //     this.openPage();
    //     window.onhashchange = () => {
    //         this.openPage();
    //     };
    // }

    // openPage() {
    //     const hash = window.location.hash || ''; // Получить хэш или использовать главную страницу
    //     const PageClass = this.links[hash] || MainPage; // Найти класс страницы по хэшу
    //     this.parent.innerHTML = ''; // Очистить родительский элемент
    //     new PageClass(this.parent); // Создать страницу
    // }
}
