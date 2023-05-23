import { FormDecorator, FormInputOptions } from "../types";

export function getAllPaths(obj: object, prefix = ''): { [key: string]: string | object } {
    const paths: { [key: string]: string | object } = {};

    for (const key in obj) {
        //@ts-ignore
        const value = obj[key];
        const path = prefix ? `${prefix}[${key}]` : key;
        const processedValue = processValue(value, path);

        if (processedValue !== undefined) {
            paths[key] = processedValue;
        }
    }

    return paths;
}

export function putValuesInObject({ object1, object2 }: PutValuesInObjectParams) {
    for (const key in object2) {
        if (putValuesInObjectCheck({ object1, object2, key })) {
            puttingValueInObject({ object1, object2, key })
        }
    }
    return object1;
}

export function translateObjectLabel({ object1, object2 }: TranslateObjectLabel) {
    for (const key in object2) {
        if (translateObjectLabelCheck({ object: object2, key })) {
            object1[object2[key]['label']] = object1[key]
            delete object1[key]
            translateObjectLabel({ object1: object1[object2[key]['label']], object2: object2[key]['children'] })
        }
    }
    return object1;
}

export type RecursiveFormInputOptions = {
    [key: string]: RecursiveFormInputOptions | FormInputOptions;
};

export function processValue(value: any, path: string) {
    if (isNestedObject(value)) {
        const nestedPaths = getAllPaths(value, path);
        return hasNonEmptyKeys(nestedPaths)
    } else {
        return path;
    }
}

export type PutValuesInObjectParams = { object1: any, object2: any }
export const putValuesInObjectCheck = ({ object1, object2, key }: PutValuesInObjectCheckType) => object1[key] && object2[key] !== undefined ? true : false
export const puttingValueInObject = ({ object1, object2, key }: PutValuesInObjectCheckType) => {
    if (object1[key].hasOwnProperty('label')) {
        object1[key]['name'] = object2[key];
    } else if (typeof object2[key] === 'object') {
        putValuesInObject({ object1: object1[key], object2: object2[key] });
    }
}
export type PutValuesInObjectCheckType = { object1: any, object2: any, key: string }

export function isNestedObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}
export function hasNonEmptyKeys(obj: object) {
    if (Object.keys(obj)?.length > 0) return obj;
}

export type TranslateObjectLabel = { object1: any, object2: any }
export const translateObjectLabelCheck = ({ object, key }: TranslateObjectLabelCheck) => object && object[key] && object[key]['children'] && object[key]['label'] ? true : false
export type TranslateObjectLabelCheck = { object: any, key: string }

export const navigateThroughNonObject = (path: Record<string, any> | FormDataEntryValue | FormDataEntryValue[] | null, jsx: Record<string, any>, body: FormData) => {
    if (typeof path !== 'object' && typeof path != 'function') {
        path = getValueFromForm(jsx, path, body)
    }
}
export function getValueFromForm(jsx: Record<string, any>, path: string, body: FormData): any {
    const value = navigateObjectByPattern(jsx, path)!['type'];
    return value === 'checkbox' ? body.getAll(path) : body.get(path);
}
export function navigateObjectByPattern(obj: Record<string, any>, pattern: string) {
    const keys = extractKeysFromPattern(pattern);
    let result: Record<string, any> | null = obj;
    for (const key of keys!) {
        traverseObject(result, key)
    }
    return result;
}
export function extractKeysFromPattern(pattern: string): string[] | null {
    return pattern.match(/\w+/g);
}
export function traverseObject(result: Record<string, any>, key: string) {
    if (result.hasOwnProperty(key)) {
        return result[key];
    } else {
        return null; // or handle the error condition as desired
    }
}
export const navigateThroughObject = (path: Record<string, any>, jsx: Record<string, any>, body: FormData) => {
    if (typeof path === 'object' && !Array.isArray(path)) {
        executeRecursion(path, jsx, body)
    }
}

export const executeRecursion = (path: Record<string, any>, jsx: Record<string, any>, body: FormData) => {
    for (const key in path) {
        navigateThroughNonObject(path[key], jsx, body)
        navigateThroughObject(path[key], jsx, body)
    }
}

export function processFormFields(context: new (...params: any[]) => FormDecorator, body: FormData) {
    const instance = new context()
    //@ts-ignore
    const path = instance["__form_input_decorator_path__"]
    //@ts-ignore
    const jsx = instance["__form_input_decorator_jsx__"]
    executeRecursion(path, jsx, body)
    return path
}