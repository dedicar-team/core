import { types, FormInputOptions } from "../../types";
import { ChooseFormInput } from "../config/input";
import { RecursiveFormInputOptions } from "../recursion";
import { renderFields } from "./render";

export function formBuilder(formData: RecursiveFormInputOptions) {
    let myForm: RecursiveForm = {}
    for (const key in formData) {
        buildFormInput(key, formData, myForm)
    }
    return myForm
}

export const RenderForm = ({ form }: { form: RecursiveForm }) => {
    return <div>{renderFields(form).map((item, index) => (
        <div key={index + 'nestedfinal'}>{item}</div>
    ))}</div>;
};
export type RecursiveForm = {
    [key: string]: RecursiveForm | (() => JSX.Element)
}
export function buildFormInput(key: string, formData: RecursiveFormInputOptions, myForm: RecursiveForm) {
    if (typeof formData[key].type === 'string' && types.some((type) => type === formData[key].type) && formData[key].type !== 'object') {
        myForm[key] = ChooseFormInput(formData[key] as FormInputOptions);
    } else {
        myForm[key] = formBuilder(formData[key] as RecursiveFormInputOptions);
    }
}