import { LocalStorage } from "./localStorage";

export class PersistState {
    static storage: LocalStorage = new LocalStorage();

    static save(stateName: string, state: Object): boolean {
        return this.storage.saveItem(stateName, state);
    }

    static read(stateName: string): any {
        return this.storage.loadItem(stateName);
    }
};