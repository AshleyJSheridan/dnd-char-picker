export interface IStorage {
    saveItem(key: string, value: Object): boolean;

    loadItem(key: string): any;

    removeItem(key: string): boolean;

    hasItem(key: string): boolean;
};