import { RecursiveForm } from "./build"

export const renderFields = (formObj: RecursiveForm) => (fieldMap(formObj, renderInputFieldset))
export const fieldMap = (formObj: RecursiveForm, action: FormToJsx) => Object.entries(formObj)
    .map(([key, value], index) => action({ key, value, index }))
export type FormToJsx = ({ key, index, value }: { key: string, index: number, value: RecursiveForm | (() => JSX.Element) }) => JSX.Element
export const renderInputFieldset = ({ key, index, value }: Parameters<FormToJsx>['0']) => {
    if (isFunction(value)) return <div key={index + key}>{value()}</div>
    // If the value is an object, wrap the fields with a fieldset and use the key as the legend
    return FieldsetWrapper({ value, key })
}
export const isFunction = (value: RecursiveForm | (() => JSX.Element)): value is (() => JSX.Element) => typeof value == 'function' ? true : false
export const FieldsetWrapper = ({ value, key }: { value: RecursiveForm, key: string }) => (
    <fieldset className="border rounded p-4 mb-4">
        <legend className="font-bold mb-2">{key}</legend>
        {renderFields(value).map((item, index) => (
            <div key={index + 'nested' + key}>{item}</div>
        ))}
    </fieldset>
)