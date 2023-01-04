import { IObjectUtils, IJson, IObjectAndSelectedKey, IGroupBy } from "./object.interface";

export class ObjectUtils implements IObjectUtils {
    async exclude<T extends any, U extends keyof T>({ model, keys }: { model: T, keys: U[] }): Promise<Omit<T, U>> {
        for (let key of keys) {
            delete model[key]
        }
        return model
    }
    keyToUndefined<T extends IJson>({ object, selectedKey }: IObjectAndSelectedKey<T>) {
        Object.keys(object).forEach((key) => {
            if (key === selectedKey) {
                // @ts-ignore
                obj[key as keyof T] = undefined;
            } else if (typeof object[key] === "object") {
                // @ts-ignore
                fieldToUndefined(obj[key], String(field));
            }
        })
        return object
    }
    deleteKey<T extends IJson>({ object, selectedKey }: IObjectAndSelectedKey<T>) {
        Object.keys(object).forEach((key) => {
            if (key === selectedKey) {
                delete object[key];
            } else if (typeof object[key] === "object") {
                // @ts-ignore
                this.deleteField(object[key], field);
            }
        })
        return object
    }
    deleteUndefinedKey(object: any) {
        Object.keys(object).forEach((key) => {
            if (object[key] == undefined) {
                delete object[key];
            } else if (typeof object[key] === "object") {
                this.deleteUndefinedKey(object[key]);
            }
        })
        return object
    }
    groupBy<T, K extends string | number | symbol>({ array, selectedKey }: IGroupBy<T, K>) {
        return array.reduce((groups, item) => {
            (groups[selectedKey(item)] ||= []).push(item);
            return groups;
        }, {} as Record<K, Omit<T, K>[]>);
    }
}