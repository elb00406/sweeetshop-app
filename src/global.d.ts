import { App } from './App';

declare global {
    interface Window {
        app: App;
    }
}
