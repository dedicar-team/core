import { FormInput, Form, FormDecorator } from "ui";
import { modelOptions, prop } from "@typegoose/typegoose";
import { IRepository, TypegooseRepository } from "../../../infrastructure/repository";
import { PersonModel, WorkerModel } from "../../models/personas/shared/_shared.module";
import { TIME_SCALE, DISEASE } from '../../enums/_enums.module';

export interface CaregiverAbstraction {
    Person: unknown
    Worker: unknown
    availableTimeScale: unknown;
    diseaseExperience: unknown;
    documents: unknown;
    faulting: unknown;
    observation?: unknown;
    document_analyzed: unknown
    passed_interview: unknown
}

export interface Caregiver extends CaregiverAbstraction {
    Person: PersonModel
    Worker: WorkerModel
    availableTimeScale: TIME_SCALE[]
    diseaseExperience: DISEASE[]
    documents: string
    faulting: FAULTING[]
    observation?: string
    document_analyzed: 'yes' | 'no'
    passed_interview: 'undefined' | 'approved' | 'disapproved'
}

const translatedTimeScale = ["24 horas", "24x24 horas", "24x48 horas", "12x36 horas", "48x48 horas", "dias da semana", "finais de semana"] as const
export const availableTimeScale = TIME_SCALE.map((value, index) => ({ value, label: translatedTimeScale[index] }))

const translatedDiseaseExperience = ["idoso", "cadeirante", "acamado", "diabético", "pressão alta", "parkison", "alzheimer", "demência", "colostomia", "aids", "traqueostomia", "gastrotomia"] as const
export const diseaseExperience = DISEASE.map((value, index) => ({ value, label: translatedDiseaseExperience[index] }))

const FAULTING = ['RG', 'CPF', 'PIS', 'residency', 'fundamental-course', 'eldery-course', 'stage', 'criminal-antecedent', 'vacine', 'bank-account'] as const
type FAULTING = typeof FAULTING[number]
const translatedFaulting = ['RG', 'CPF', 'PIS', 'Comprovante de residência', 'Ensino fundamental', 'Curso de cuidador', 'Estágio', 'Antecedentes criminais', 'Vacinação', 'Conta bancária'] as const
export const faultingMap = FAULTING.map((value, index) => ({ value, label: translatedFaulting[index] }))

export const document_analyzed = [{ value: 'no', label: 'não' }, { value: 'yes', label: 'sim' }]
export const passed_interview = [{ value: 'undefiend', label: 'não definido' },{ value: 'approved', label: 'aprovada(o)' }, { value: 'disapproved', label: 'reprovada(o)' }]

@Form
@modelOptions({ options: { customName: 'Caregiver' }, schemaOptions: { collection: 'Caregiver' } })
export class CaregiverModel extends FormDecorator implements Caregiver {
    @FormInput({ type: 'object', instance: PersonModel, label: 'dados pessoais' })
    @prop({ _id: false, type: () => PersonModel, required: true })
    public Person!: PersonModel;
    @FormInput({ type: 'object', instance: WorkerModel, label: 'dados trabalhistas' })
    @prop({ _id: false, type: () => WorkerModel, required: true })
    public Worker!: WorkerModel;
    @FormInput({ type: "checkbox", label: "disponibilidade", options: availableTimeScale })
    @prop({ type: String, enum: TIME_SCALE, default: [] })
    public availableTimeScale!: TIME_SCALE[];
    @FormInput({ type: "checkbox", label: "experiência", options: diseaseExperience })
    @prop({ type: String, enum: DISEASE, default: [] })
    public diseaseExperience!: DISEASE[];
    @FormInput({ type: "file", label: "documentos: (cópia: RG, CPF, Comprovante de residência, Comprovante do curso de cuidador(180h) com estágio, Antecedentes criminais, Vacinação(Influenza, ATT, Hepatite B, Febre amarela, Covid 19))", accept: 'application/pdf' })
    @prop({ type: () => String })
    public documents!: string;
    @FormInput({ type: "checkbox", label: "documentos pendentes", options: faultingMap })
    @prop({ type: String, enum: FAULTING, default: [] })
    public faulting!: FAULTING[];
    @FormInput({ type: "select", label: "documentação foi analisada ?*", options: document_analyzed })
    @prop({ type: () => String, enum: ['no', 'yes'] })
    public document_analyzed!: 'yes' | 'no';
    @FormInput({ type: "select", label: "passou na entrevista ?*", options: passed_interview })
    @prop({ type: () => String, enum: ['undefined', 'approved', 'disapproved'] })
    public passed_interview!: 'undefined' | 'approved' | 'disapproved';
    @FormInput({ type: "textarea", label: "observações", })
    @prop({ type: () => String, })
    public observation?: string;

    constructor(caregiver: Caregiver) {
        super()
        Object.assign(this, caregiver);
    }
}

export class CaregiverRepository extends TypegooseRepository<CaregiverModel> implements IRepository { }

export const caregiverRepository = new CaregiverRepository(CaregiverModel)