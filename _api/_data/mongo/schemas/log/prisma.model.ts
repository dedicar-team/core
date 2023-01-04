import { IGenericLog } from "models";
import { TPrismaMiddleware } from "@data";
import { Prisma as IPrisma } from '@data/prisma/generated/client'
import { prop, getModelForClass, mongoose, modelOptions } from "@typegoose/typegoose";

export class PrismaMiddlewareParamsModel implements IPrisma.MiddlewareParams {
    @prop({ type: () => String })
    model?: IPrisma.ModelName;
    @prop({ required: true, type: () => String })
    action!: IPrisma.PrismaAction;
    @prop({ type: () => mongoose.Schema.Types.Mixed })
    args: any;
    @prop({ required: true, type: () => [String] })
    dataPath!: string[];
    @prop({ required: true })
    runInTransaction!: boolean;
}

export class PrismaMiddlewareModel implements TPrismaMiddleware {
    @prop({ required: true })
    params!: PrismaMiddlewareParamsModel;
    @prop({ type: () => mongoose.Schema.Types.Mixed })
    result: any;
}

@modelOptions({ schemaOptions: { collection: 'log.prisma' } })
export class PrismaModel implements IGenericLog<TPrismaMiddleware> {
    @prop()
    requestId!: string | null;
    @prop()
    emmiterId!: string | null
    @prop({ required: true })
    log!: PrismaMiddlewareModel;
    @prop({ required: true })
    date!: number;
    @prop({ required: true })
    duration!: number;
}

export const prismaMongoose = getModelForClass(PrismaModel);