export interface IJson {
    [key: string]: string | number | boolean | undefined | null | IJson | IJson[]
}

export interface IObjectAndSelectedKey<T extends IJson> {
    object: T
    selectedKey: keyof T
}

export interface IGroupBy<T, K> {
    array: T[],
    selectedKey: (i: T) => K
}

export interface IObjectUtils {
    keyToUndefined<T extends IJson>({ object, selectedKey }: IObjectAndSelectedKey<T>): typeof object
    deleteKey<T extends IJson>({ object, selectedKey }: IObjectAndSelectedKey<T>): typeof object
    deleteUndefinedKey<T>(object: T): typeof object
    groupBy<T, K extends string | number | symbol>({ array, selectedKey }: IGroupBy<T, K>): Record<K, Omit<T, K>[]>
}