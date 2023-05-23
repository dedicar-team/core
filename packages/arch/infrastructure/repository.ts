import { ReturnModelType, getModelForClass } from "@typegoose/typegoose";
import { AnyParamConstructor, BeAnObject, IModelOptions, IObjectWithTypegooseFunction, ModelType } from "@typegoose/typegoose/lib/types";
import { IfAny, Require_id, Document, model } from "mongoose";

export interface IRepository {
    save(model: unknown): Promise<unknown>;
    findAll(): Promise<unknown[]>;
    findById(id: unknown): Promise<unknown | null>;
    updateById(id: unknown, model: unknown): Promise<unknown | null>;
    deleteById(id: unknown): Promise<boolean>;
}

export interface IGenericRepository<input, id, output = input> extends IRepository {
    save(model: input): Promise<output>;
    findAll(): Promise<output[]>;
    findById(id: id): Promise<output | null>;
    updateById(id: id, model: input): Promise<output | null>;
    deleteById(id: id): Promise<boolean>;
}

export type TypegooseReturn<T> = IfAny<T, any, Document<unknown, BeAnObject, T> & Omit<Require_id<T>, "typegooseName"> & IObjectWithTypegooseFunction>

export class TypegooseRepository<T = unknown> implements IRepository {
    public model: ModelType<T, BeAnObject> & AnyParamConstructor<T>;

    constructor(cl: AnyParamConstructor<T>, options?: IModelOptions) {
        this.model = getModelForClass(cl, options);
    }

    async save(model: T) {
        const document = new this.model(model);
        return await document.save();
    }

    async findAll() {
        return await this.model.find().exec();
    }

    async findById(id: string) {
        return await this.model.findById(id).exec();
    }

    async updateById(id: string, model: T) {
        return await this.model.findByIdAndUpdate(id, () => model, { new: true }).exec();
    }

    async deleteById(id: string) {
        const result = await this.model.findByIdAndDelete(id).exec();
        return result ? true : false;
    }
}