import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}

  // Store the value
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await this.storage.set(
      storageKey,
      encryptedValue
    );
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await this.storage.get(storageKey);
    if (ret.value) {
      return JSON.parse(unescape(atob(ret.value)));
    } else {
      return false;
    }
  }

  async keys() {
    const keys = await this.storage.keys();
    console.log('Got keys: ', keys);
  }

  async clear() {
    await this.storage.clear();
  }
}
