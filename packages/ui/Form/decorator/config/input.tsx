import InputClient from "../../client/input"
import CheckboxServer from "../../server/checkbox"
import RadioServer from "../../server/radio"
import SelectServer from "../../server/select"
import ServerWrapper from "../../server/serverWrapper"
import Dynamic from "../../dynamic"
import { CheckboxInputOption, FormInputOptions, GroupInputOption, SimpleInputOption, ListInputOption, FileInputOption } from '../../types';
import { getConfig } from "../render/set"
import FileUpload from '../../client/file';

export function FormInput(options: FormInputOptions) {
    return formInputDecoration(options)
}
export const formInputDecoration = (options: FormInputOptions) => (target: any, key: string) => {
    addJsx(target, key, options)
    addLabelTranslation(target, key, options)
    addPath(target, key, options)
};
export const addJsx = (target: any, key: string, options: FormInputOptions) => Object.assign(target, {
    __form_input_decorator_jsx__: {
        ...target["__form_input_decorator_jsx__"],
        [key]: options.type === 'object' ? new options.instance()['__form_input_decorator_jsx__'] : options
    },
})
export const addLabelTranslation = (target: any, key: string, options: FormInputOptions) => Object.assign(target, {
    __form_input_decorator_label_translation__: {
        ...target["__form_input_decorator_label_translation__"],
        [key]: options.type === 'object' && options.label ? { label: options.label, children: new options.instance()['__form_input_decorator_label_translation__'] } : options.label
    },
});
export const addPath = (target: any, key: string, options: FormInputOptions) => Object.assign(target, {
    __form_input_decorator_path__: {
        ...target["__form_input_decorator_path__"],
        [key]: options.type === 'object' ? new options.instance()['__form_input_decorator_path__'] : ''
    }
})

export const I = ({ inputData }: { inputData: ListInputOption }) => {
    const a = getConfig(inputData.option, inputData.instance)
    return (<ServerWrapper>
        <Dynamic formData={a} name={inputData.name} label={inputData.label || ""} />
    </ServerWrapper>)
}

export const ChooseFormInput = (inputData: FormInputOptions) => {
    let Jsx: () => JSX.Element = () => <></>
    if (isSimpleInputOption(inputData)) Jsx = () => InputClientWrappedInServer({ inputData });
    if (isFile(inputData)) Jsx = () => FileUploadClientWrappedInServer({ inputData })
    if (isSelect(inputData)) Jsx = () => SelectServer({ inputData })
    if (isRadio(inputData)) Jsx = () => RadioServer({ inputData })
    if (isCheckbox(inputData)) Jsx = () => CheckboxServer({ inputData })
    if (isList(inputData)) Jsx = () => I({ inputData })
    return Jsx;
}
export const isSimpleInputOption = (value: FormInputOptions): value is SimpleInputOption => {
    const array: SimpleInputOption['type'][] = ['text', 'textarea', 'password', 'number', 'date', 'email']
    return array.some(element => value.type == element) ? true : false
}
export const isFile = (value: FormInputOptions): value is FileInputOption => {
    return value.type == 'file' ? true : false
}
export const isSelect = (value: FormInputOptions): value is GroupInputOption => {
    return value.type == 'select' ? true : false
}
export const isRadio = (value: FormInputOptions): value is GroupInputOption => {
    return value.type == 'radio' ? true : false
}
export const isCheckbox = (value: FormInputOptions): value is CheckboxInputOption => {
    return value.type == 'checkbox' ? true : false
}
export const isList = (value: FormInputOptions): value is ListInputOption => {
    return value.type == 'list' ? true : false
}
export const InputClientWrappedInServer = ({ inputData }: { inputData: SimpleInputOption }) => {
    return (<ServerWrapper>
        <InputClient inputData={inputData} key={inputData.name || ""} />
    </ServerWrapper>)
}
export const FileUploadClientWrappedInServer = ({ inputData }: { inputData: FileInputOption }) => {
    return (<ServerWrapper>
        <FileUpload key={inputData.name || ""} value={inputData.defaultValue || ""} label={inputData.label} name={inputData.name} required={inputData.required || false} accept={inputData.accept || '*'} />
    </ServerWrapper>)
}
