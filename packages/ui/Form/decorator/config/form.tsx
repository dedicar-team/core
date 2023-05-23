import { FormDecorator } from "../../types";
import { getAllPaths, putValuesInObject, translateObjectLabel } from "../recursion";
import { rendering } from "../render/main";

export function Form<T extends { new(...args: any[]): {} & FormDecorator }>(target: T) {
    return class extends target {
        constructor(...a: any[]) {
            super(...a);
            this.__form_input_decorator_path__ = getAllPaths(this['__form_input_decorator_path__'])
            this.__form_input_decorator_jsx_pathed__ = putValuesInObject({ object1: JSON.parse(JSON.stringify(this["__form_input_decorator_jsx__"])), object2: this["__form_input_decorator_path__"] })
            this.__form_input_decorator_jsx_translated__ = translateObjectLabel({ object1: JSON.parse(JSON.stringify(this['__form_input_decorator_jsx__'])), object2: this['__form_input_decorator_label_translation__'] })
            this.__form_input_decorator_jsx_pathed_translated__ = translateObjectLabel({ object1: JSON.parse(JSON.stringify(this['__form_input_decorator_jsx_pathed__'])), object2: this['__form_input_decorator_label_translation__'] })
            this.render = (config: Parameters<typeof rendering>[0]) => rendering(config, this)
        }
    };
}

