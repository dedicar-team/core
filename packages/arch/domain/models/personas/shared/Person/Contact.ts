import { Form, FormDecorator, FormInput } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";

export interface ContactAbstraction {
    cellphone: unknown;
    telephone: unknown;
    email: unknown;
}

export interface Contact extends ContactAbstraction {
    cellphone: string;
    telephone: string;
    email: string;
}

@Form
export class ContactModel extends FormDecorator implements Contact {
    @FormInput({ type: 'text', label: 'celular*', mask:{mask:"(00) 0 0000-0000"}, required: true })
    @prop({ type: () => String, required: true })
    public cellphone!: string;
    @FormInput({ type: 'text', label: 'telefone', mask:{mask:"(00) 0 0000-0000"}, minLength:16, maxLength:16 })
    @prop({ type: () => String })
    public telephone!: string;
    @FormInput({ type: 'email', label: 'email' })
    @prop({ type: () => String })
    public email!: string;

    constructor(contact: Contact) {
        super()
        Object.assign(this, contact)
    }
}

export class ContactRepository extends TypegooseRepository<ContactModel> implements IRepository {
    constructor(contactModel: ReturnModelType<typeof ContactModel>) {
        super(contactModel)
    }
}