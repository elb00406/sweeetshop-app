import { CartPage } from '../Pages/CartPage';
import { CatalogPage } from '../Pages/CatalogPage';
import { DeliveryPage } from '../Pages/DeliveryPage';
import { MainPage } from '../Pages/MainPage';
import { PersonalAccountPage } from '../Pages/PersonalAccountPage';

export class Router {
    links: { [key: string]: any }; // Содержит ссылки на страницы приложения

    constructor(private parent: HTMLElement) {
        this.links = {
            '': MainPage,
            '#account': PersonalAccountPage,
            '#catalog': CatalogPage,
            '#delivery': DeliveryPage,
            '#cart': CartPage,
        };

        this.openPage(); // Открыть текущую страницу при загрузке

        window.onhashchange = () => {
            this.openPage(); // Обновить страницу при изменении хэша
        };
    }

    openPage() {
        const hash = window.location.hash || ''; // Получить хэш или использовать главную страницу
        const PageClass = this.links[hash] || MainPage; // Найти класс страницы по хэшу
        this.parent.innerHTML = ''; // Очистить родительский элемент
        new PageClass(this.parent); // Создать страницу
    }
}
