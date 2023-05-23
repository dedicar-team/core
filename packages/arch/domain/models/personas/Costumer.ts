import { ReturnModelType, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { TIME_SCALE } from "../../enums/TIME_SCALE";
import { IRepository, TypegooseRepository } from "../../../infrastructure/repository"
import { PersonModel } from "../../../domain/models/personas/_personas.module";
import { PatientModel } from '../personas/Patient'

export interface CostumerAbstraction {
    Person: unknown
    Patients: unknown;
    favoriteScales: unknown;
}

export interface Costumer extends CostumerAbstraction {
    Person: PersonModel
    Patients: PatientModel[];
    favoriteScales: TIME_SCALE[];
}

@modelOptions({ options: { customName: 'Costumer' }, schemaOptions: { collection: 'Costumer' } })
export class CostumerModel implements Costumer {
    @prop({ _id: false, type: () => PersonModel, required: true })
    public Person!: PersonModel;
    @prop({ type: () => [String], enum: TIME_SCALE, default: [], required: true })
    public favoriteScales!: TIME_SCALE[];
    @prop({ type: () => [PatientModel], default: [], required: true })
    public Patients!: PatientModel[];

    constructor(costumer: Costumer) {
        Object.assign(this, costumer)
    }
}

export class CostumerRepository extends TypegooseRepository<CostumerModel> implements IRepository { }

export const costumerRepository = new CostumerRepository(CostumerModel)