import { Form, FormDecorator, FormInput } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { TypegooseRepository, IRepository } from "../../../../../infrastructure/repository";
import { BANK_ACCOUNT } from "../../../../enums/BANK_ACCOUNT";

export interface BankAbstraction {
    name: unknown;
    type: unknown;
    agency: unknown;
    account: unknown;
    digit: unknown;
}

export interface Bank extends BankAbstraction {
    name: string;
    type: BANK_ACCOUNT;
    agency: string;
    account: string;
    digit: string;
}

const translatedBank = ['não possui', 'corrente', 'poupança', 'salário']
const bankAccount = BANK_ACCOUNT.map((value, index) => ({ value, label: translatedBank[index] }))

@Form
export class BankModel extends FormDecorator implements Bank {
    @FormInput({ type: 'select', label: 'tipo*', options: bankAccount })
    @prop({ type: () => String, enum: BANK_ACCOUNT, required: true })
    public type!: BANK_ACCOUNT;
    @FormInput({ type: 'text', label: 'banco' })
    @prop({ type: () => String, required: true })
    public name!: string;
    @FormInput({ type: 'text', label: 'agência' })
    @prop({ type: () => String, required: true })
    public agency!: string;
    @FormInput({ type: 'text', label: 'conta' })
    @prop({ type: () => String, required: true })
    public account!: string;
    @FormInput({ type: 'text', label: 'digíto' })
    @prop({ type: () => String, required: true })
    public digit!: string;

    constructor(bank: Bank) {
        super()
        Object.assign(this, bank)
    }
}

export class BankRepository extends TypegooseRepository<BankModel> implements IRepository {
    constructor(bankModel: ReturnModelType<typeof BankModel>) {
        super(bankModel)
    }
}