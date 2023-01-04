import { IGenericLog } from "models";
import { TTrpcMiddleware } from "@server";
import { ProcedureType } from "@trpc/server";
import { prop, getModelForClass, mongoose, modelOptions } from "@typegoose/typegoose";

export class TrpcMiddlewareModel implements TTrpcMiddleware {
    @prop({ required: true, type: () => String })
    type!: ProcedureType;
    @prop({ required: true })
    path!: string;
    @prop({ type: mongoose.Schema.Types.Mixed })
    rawInput: unknown;
    @prop({ type: mongoose.Schema.Types.Mixed })
    meta?: {} | undefined;
}

@modelOptions({ schemaOptions: { collection: 'log.trpc' } })
export class TrpcModel implements IGenericLog<TTrpcMiddleware> {
    @prop()
    requestId!: string | null;
    @prop()
    emmiterId!: string | null;
    @prop({ required: true })
    log!: TrpcMiddlewareModel;
    @prop({ required: true })
    date!: number;
    @prop({ required: true })
    duration!: number;
}

export const trpcMongoose = getModelForClass(TrpcModel);