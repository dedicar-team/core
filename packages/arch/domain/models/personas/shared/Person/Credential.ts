import { Form, FormDecorator, FormInput } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";

export interface CredentialAbstraction {
    CPF: unknown;
    RG: unknown;
}

export interface Credential extends CredentialAbstraction {
    CPF: string;
    RG: string;
}

@Form
export class CredentialModel extends FormDecorator implements Credential {
    @FormInput({ type: 'text', label: 'CPF*', mask: { mask: '000.000.000-00' }, required: true, minLength: 14, maxLength: 14 })
    @prop({ type: () => String, required: true })
    public CPF!: string;
    @FormInput({ type: 'text', label: 'RG*', required: true })
    @prop({ type: () => String, required: true })
    public RG!: string;

    constructor(credential: Credential) {
        super()
        Object.assign(this, credential)
    }
}

export class CredentialRepository extends TypegooseRepository<CredentialModel> implements IRepository {
    constructor(credentialModel: ReturnModelType<typeof CredentialModel>) {
        super(credentialModel)
    }
}