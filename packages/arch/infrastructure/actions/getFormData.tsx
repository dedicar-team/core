import { FormDecorator, processFormFields } from 'ui';

export async function getFormData(context: new (...params: any[]) => FormDecorator, formData: FormData) {
    "use server"
    function assignValueByKeyValue(obj, searchValue, newValue) {
        for (let key in obj) {
            if (obj[key] === searchValue) {
                obj[key] = newValue;
                return;
            } else if (typeof obj[key] === 'object') {
                assignValueByKeyValue(obj[key], searchValue, newValue);
            }
        }
    }
    function findParentObject(obj, key, value) {
        if (typeof obj !== 'object' || obj === null) {
            return null; // Base case: obj is not an object or is null
        }

        if (obj[key] === value) {
            return obj; // Found the parent object
        }

        for (const prop in obj) {
            const childObj = obj[prop];
            const parentObj = findParentObject(childObj, key, value);

            if (parentObj !== null) {
                return parentObj; // Found the parent object in the nested structure
            }
        }

        return null; // Parent object not found
    }
    function findParentObjects(obj, key, value) {
        if (typeof obj !== 'object' || obj === null) {
            return []; // Base case: obj is not an object or is null, return an empty array
        }

        const results = [];

        if (obj[key] === value) {
            results.push(obj); // Found a matching parent object, add it to the results array
        }

        for (const prop in obj) {
            const childObj = obj[prop];
            const parentObjs = findParentObjects(childObj, key, value);

            if (parentObjs?.length > 0) {
                results.push(...parentObjs); // Found matching parent objects in the nested structure, add them to the results array
            }
        }

        return results;
    }
    async function organizeFormData(context: new (...params: any[]) => FormDecorator, body: FormData) {
        const obj = new context()
        const a = processFormFields(context, body)
        for (const [key, value] of body.entries()) {
            const checkboxParents = findParentObjects(obj['__form_input_decorator_jsx_pathed_translated__'], 'type', 'checkbox')
            const parent = findParentObject(obj['__form_input_decorator_jsx_pathed_translated__'], 'name', key)
            checkboxParents.map(item => {
                let getAll = body.getAll(item['name'])
                if (!Array.isArray(getAll) && getAll != undefined) getAll = [getAll]
                if (getAll == undefined) getAll = []
                assignValueByKeyValue(a, item['name'], getAll)
            })
            if (parent !== null) assignValueByKeyValue(a, key, value)
        }
        return a
    }
    return organizeFormData(context, formData)
}
