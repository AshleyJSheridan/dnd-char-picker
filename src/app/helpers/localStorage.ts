import { IStorage } from "../interfaces/iStorage";

export class LocalStorage implements IStorage {
    saveItem(key: string, value: Object): boolean {
        try {
			if(this.hasItem(key)) {
				window.localStorage.removeItem(key);
			}

            const data = JSON.stringify(value);
			window.localStorage.setItem(key, data);

			return true;
		} catch(e) {
			return false;
		}
    }

    loadItem(key: string): any {
        try {
			const json = window.localStorage.getItem(key);

            if(json)
                return JSON.parse(json);

            return undefined;
		} catch(e) {
            return undefined;
        }
    }

    hasItem(key: string): boolean {
		try {
			let data = this.loadItem(key);

			return data.length > 0;
		} catch(e) {
			return false;
		}
	}

    removeItem(key: string): boolean {
        try {
            if(this.hasItem(key)) {
				window.localStorage.removeItem(key);
			}

            return true;
        } catch(e) {
            return false;
        }
    }
};