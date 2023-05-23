import { Form, FormDecorator, FormInput } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";
import { brazilianState } from '../../../../../utils/constants';

export interface AddressAbstraction {
    street: unknown;
    neighbourhood: unknown;
    complement?: unknown;
    city: unknown
    state: unknown
    zipCode: unknown
}

export interface Address extends AddressAbstraction {
    street: string;
    neighbourhood: string;
    complement?: string;
    city: string
    state: string
    zipCode: string
}

@Form
export class AddressModel extends FormDecorator implements Address {
    @FormInput({ type: 'text', label: 'rua' })
    @prop({ type: () => String })
    public street!: string;
    @FormInput({ type: 'text', label: 'bairro' })
    @prop({ type: () => String })
    public neighbourhood!: string;
    @FormInput({ type: 'text', label: 'complemento' })
    @prop({ type: () => String })
    public complement?: string;
    @FormInput({ type: 'text', label: 'cidade' })
    @prop({ type: () => String })
    public city!: string
    @FormInput({ type: 'select', label: 'estado*', options: brazilianState.map(value => ({ value, label: value })), defaultValue: "RJ" })
    @prop({ type: () => String, required: true })
    public state!: string
    @FormInput({ type: 'text', label: 'CEP', mask: { mask: '00000-000' }, minLength: 9, maxLength: 9 })
    @prop({ type: () => String })
    public zipCode!: string

    constructor(address: Address) {
        super()
        Object.assign(this, address)
    }
}

export class AddressRepository extends TypegooseRepository<AddressModel> implements IRepository {
    constructor(addressModel: ReturnModelType<typeof AddressModel>) {
        super(addressModel)
    }
}