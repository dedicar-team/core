import { Form, FormDecorator, FormInput } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";
import { MANNEQUINN } from "../../../../../domain/enums/MANNEQUINN";

export interface BodyAbstraction {
    weight: unknown;
    height: unknown;
    mannequinn: unknown;
}

export interface Body extends BodyAbstraction {
    weight: number;
    height: number;
    mannequinn: MANNEQUINN;
}

@Form
export class BodyModel extends FormDecorator implements Body {
    @FormInput({ type: 'text', label: 'peso', mask: { mask: [{ mask: '00.00' }, { mask: '000.00' }] }, minLength: 2, maxLength: 6 })
    @prop({ type: () => Number })
    public weight!: number;
    @FormInput({ type: 'text', label: 'altura', mask: { mask: '0.00' }, minLength: 3, maxLength: 4 })
    @prop({ type: () => Number })
    public height!: number;
    @FormInput({ type: 'select', label: 'mannequinn*', options: MANNEQUINN.map(value => ({ value, label: value })) })
    @prop({ type: () => String, enum: MANNEQUINN, required: true })
    public mannequinn!: MANNEQUINN;

    constructor(body: Body) {
        super()
        Object.assign(this, body)
    }
}

export class BodyRepository extends TypegooseRepository<BodyModel> implements IRepository {
    constructor(bodyModel: ReturnModelType<typeof BodyModel>) {
        super(bodyModel)
    }
}