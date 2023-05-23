import { Form, FormInput, FormDecorator } from "ui";
import { ReturnModelType, prop } from "@typegoose/typegoose";
import { CIVIL_STATUS, WORKER_STATUS } from "../../../enums/_enums.module";
import { TypegooseRepository, IRepository } from "../../../../infrastructure/repository";

export interface WorkerAbstraction {
    pis?: unknown;
    smoker: unknown;
    allergic?: unknown;
    dependents: unknown;
    occupationStatus: unknown;
    civilStatus: unknown;
    uniqueTicket?: unknown;
}

export interface Worker extends WorkerAbstraction {
    pis?: string;
    smoker: boolean;
    allergic?: string;
    dependents: number;
    occupationStatus: WORKER_STATUS;
    civilStatus: CIVIL_STATUS;
    uniqueTicket?: string;
}

const translatedOccupationStatus = ["trabalhando", "desempregada(o)", "despedida(o)"] as const
export const occupationStatus = WORKER_STATUS.map((value, index) => ({ value, label: translatedOccupationStatus[index] }))

const translatedCivilStatus = ['solteira(o)', 'casada(o)', 'separada(o)', 'divorciada(o)', 'viúva(o)'] as const
export const civilStatus = CIVIL_STATUS.map((value, index) => ({ value, label: translatedCivilStatus[index] }))

@Form
export class WorkerModel extends FormDecorator implements Worker {
    @FormInput({ type: 'text', label: 'PIS', mask: { mask: '000.00000.00-0' }, minLength: 14, maxLength: 14 })
    @prop({ type: () => String })
    public pis?: string;
    @FormInput({ type: 'select', label: 'fumante*', options: [{ value: "false", label: 'não' }, { value: "true", label: 'sim' }], defaultValue: "false" })
    @prop({ type: () => Boolean, required: true })
    public smoker!: boolean;
    @FormInput({ type: 'text', label: 'alergias' })
    @prop({ type: () => String })
    public allergic?: string;
    @FormInput({ type: 'number', label: 'dependentes menores de 14 anos ?*', defaultValue: '0', mask: { mask: '00' }, required: true })
    @prop({ type: () => Number, required: true })
    public dependents!: number;
    @FormInput({ type: 'select', label: 'status trabalhista*', options: occupationStatus })
    @prop({ type: () => String, enum: WORKER_STATUS, required: true })
    public occupationStatus!: WORKER_STATUS;
    @FormInput({ type: 'select', label: 'status civil*', options: civilStatus })
    @prop({ type: () => String, enum: CIVIL_STATUS, required: true })
    public civilStatus!: CIVIL_STATUS
    @FormInput({ type: 'text', label: 'bilhete único' })
    @prop({ type: () => String })
    public uniqueTicket?: string

    constructor(worker: Worker) {
        super()
        Object.assign(this, worker)
    }
}

export class WorkerRepository extends TypegooseRepository<WorkerModel> implements IRepository {
    constructor(workerModel: ReturnModelType<typeof WorkerModel>) {
        super(workerModel)
    }
}