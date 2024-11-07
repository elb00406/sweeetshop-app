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

        const url = window.location.hash || "#"; // Use default route if no hash
        const page = this.links[url] || this.links["#"];
        if (page) {
            page.renderWithUpdate(); // Or other initialization
        } else {
            console.error(`No page found for URL: ${url}`);
        }
    }
}
