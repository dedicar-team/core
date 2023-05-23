import { ReturnModelType, modelOptions, prop } from "@typegoose/typegoose";
import { DISEASE } from "../../enums/DISEASE";
import { PersonModel } from "../../../domain/models/personas/shared/Person/_Person.module";
import { TypegooseRepository, IRepository } from "../../../infrastructure/repository";


export interface PatientAbstraction {
    Person: unknown
    diseases: unknown;
}

export interface Patient extends PatientAbstraction {
    Person: PersonModel
    diseases: DISEASE[];
}

@modelOptions({ options: { customName: 'Patient' }, schemaOptions: { collection: 'Patient' } })
export class PatientModel implements Patient {
    @prop({ _id: false, type: () => PersonModel, required: true })
    public Person!: PersonModel;
    @prop({ type: () => [String], enum: DISEASE, default: [], required: true })
    public diseases!: DISEASE[];

    constructor(patient: Patient) {
        Object.assign(this, patient)
    }
}

export class PatientRepository extends TypegooseRepository<PatientModel> implements IRepository { }

export const patientRepository = new PatientRepository(PatientModel)