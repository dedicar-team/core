import { FormInput, Form, FormDecorator } from "ui";
import { ReturnModelType, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IRepository, TypegooseRepository } from "../../../infrastructure/repository";
import { connectToDatabase } from "../../../infrastructure/mongoose";

export interface SignAbstraction {
    login: unknown
    password: unknown
}

export interface Sign extends SignAbstraction {
    login: string
    password: string
}

@Form
@modelOptions({ options: { customName: 'Sign' }, schemaOptions: { collection: 'Sign' } })
export class SignModel extends FormDecorator implements SignAbstraction {
    @FormInput({ type: 'text', label: 'login', required: true })
    @prop({ type: () => String, required: true, unique: true })
    public login!: string;
    @FormInput({ type: 'password', label: 'senha', required: true })
    @prop({ type: () => String, required: true })
    public password!: string;

    constructor(sign: SignModel) {
        super()
        Object.assign(this, sign);
    }
}

export class SignRepository extends TypegooseRepository<SignModel> { }

export const signRepository = new SignRepository(SignModel)