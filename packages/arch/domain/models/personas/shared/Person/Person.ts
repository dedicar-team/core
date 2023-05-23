import { FormInput, FormDecorator, Form } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";
import { SEX } from '../../../../../domain/enums/SEX';
import { createEnum } from "../../../../../utils/typings";
import { CredentialModel } from './Credential';
import { AddressModel } from './Address';
import { ContactModel } from './Contact';
import { BodyModel } from "./Body";
import { BankModel } from "./Bank";

export interface PersonAbstraction {
    name: unknown;
    photo?: unknown;
    birthDate: unknown;
    sex: unknown;

    Body?: unknown
    Address?: unknown;
    Credential?: unknown;
    Contact?: unknown;
    Bank?: unknown;
}

export interface Person extends PersonAbstraction {
    name: string;
    photo?: string;
    birthDate: string;
    sex: SEX;

    Body?: BodyModel
    Address?: AddressModel;
    Credential?: CredentialModel;
    Contact?: ContactModel[];
    Bank?: BankModel[];
}

const translatedSex = ['mulher', 'homem'] as const
const sex = SEX.map((value, index) => ({ value, label: translatedSex[index] }))

@Form
export class PersonModel extends FormDecorator implements Person {
    @FormInput({ type: "text", label: "nome*", required: true })
    @prop({ type: () => String, required: true })
    public name!: string;
    @FormInput({ type: "file", label: "foto", accept: 'image/*' })
    @prop({ type: () => String })
    public photo?: string;
    @FormInput({ type: "date", label: "data de nascimento*", required: true })
    @prop({ type: () => String, required: true })
    public birthDate!: string;
    @FormInput({ type: "select", label: "sexo*", options: sex })
    @prop({ type: () => String, enum: createEnum(SEX), required: true })
    public sex!: SEX;
    @FormInput({ type: "object", instance: BodyModel, label: "corpo" })
    @prop({ _id: false, type: () => BodyModel })
    public Body?: BodyModel;
    @FormInput({ type: "object", instance: AddressModel, label: "endereço" })
    @prop({ _id: false, type: () => AddressModel })
    public Address?: AddressModel;
    @FormInput({ type: "object", instance: CredentialModel, label: "credenciais" })
    @prop({ _id: false, type: () => CredentialModel })
    public Credential?: CredentialModel;
    @FormInput({ type: "object", instance: ContactModel, label: "contato" })
    @prop({ _id: false, type: () => [ContactModel], default: [] })
    public Contact?: ContactModel[];
    @FormInput({ type: "object", instance: BankModel, label: "conta bancária" })
    @prop({ _id: false, type: () => [BankModel], default: [] })
    public Bank?: BankModel[];

    constructor(person: Person) {
        super()
        Object.assign(this, person)
    }
}

export class PersonRepository extends TypegooseRepository<PersonModel> implements IRepository {
    constructor(personModel: ReturnModelType<typeof PersonModel>) {
        super(personModel)
    }
}