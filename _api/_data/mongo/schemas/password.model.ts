import { prop, getModelForClass, modelOptions, post } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'prisma.password' } })
export class PasswordModel {
    @prop({ required: true, type: () => String })
    public _id!: string;

    @prop({ required: true, type: () => String })
    public password!: string;
}

export const passwordMongoose = getModelForClass(PasswordModel);