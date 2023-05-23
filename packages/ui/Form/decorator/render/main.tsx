import { RecursiveFormInputOptions } from "../recursion"
import { formBuilder, RenderForm } from "./build"
import { setConfig } from "./set"

export function rendering(config: 'default' | 'pathed' | 'default-translated' | 'pathed-translated', object: Record<string, any>) {
    let formData: RecursiveFormInputOptions = {}
    setConfig({ formData, object, config })
    const formObject = formBuilder(formData)
    return RenderForm({ form: formObject })
};