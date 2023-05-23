import { RecursiveFormInputOptions } from "../recursion"
import { RecursiveFormInputOptions as RecursiveFormInputOptionsClient } from "../../dynamic"
import { FormDecorator } from "../../types"

export const setConfig = ({ formData, config, object }: SetConfigParams) => {
    isDefaultConfig({ formData, config, object })
    isPathedConfig({ formData, config, object })
    isDefaultTranslatedConfig({ formData, config, object })
    isPathedTranslatedConfig({ formData, config, object })
}
export type SetConfigParams = { formData: RecursiveFormInputOptions, object: any, config: configType }
export const isDefaultConfig = ({ formData, config, object }: SetConfigParams) => {
    if (config == 'default') Object.assign(formData, object['__form_input_decorator_jsx__'])
}
export const isPathedConfig = ({ formData, config, object }: SetConfigParams) => {
    if (config == 'pathed') Object.assign(formData, object['__form_input_decorator_jsx_pathed__'])
}
export const isDefaultTranslatedConfig = ({ formData, config, object }: SetConfigParams) => {
    if (config == 'default-translated') Object.assign(formData, object['__form_input_decorator_jsx_translated__'])
}
export const isPathedTranslatedConfig = ({ formData, config, object }: SetConfigParams) => {
    if (config == 'pathed-translated') Object.assign(formData, object['__form_input_decorator_jsx_pathed_translated__'])
}
export const getConfig = (option: configType, object: FormDecorator): RecursiveFormInputOptionsClient => {
    if (option == "default") return object['__form_input_decorator_jsx__'] as RecursiveFormInputOptionsClient
    if (option == "pathed") return object['__form_input_decorator_jsx_pathed__'] as RecursiveFormInputOptionsClient
    if (option == "default-translated") return object['__form_input_decorator_jsx_translated__'] as RecursiveFormInputOptionsClient
    if (option == "pathed-translated") return object['__form_input_decorator_jsx_pathed_translated__'] as RecursiveFormInputOptionsClient
    return object['__form_input_decorator_jsx__'] as RecursiveFormInputOptionsClient
}
export type configType = "default" | "pathed" | "default-translated" | "pathed-translated"