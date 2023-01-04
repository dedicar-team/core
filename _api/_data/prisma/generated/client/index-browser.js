
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  personId: 'personId',
  publicPlace: 'publicPlace',
  number: 'number',
  district: 'district',
  city: 'city',
  CEP: 'CEP',
  complement: 'complement',
  reference: 'reference'
});

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  credentialId: 'credentialId',
  administrativeLevel: 'administrativeLevel'
});

exports.Prisma.BankAccountScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  type: 'type',
  agency: 'agency',
  account: 'account',
  digit: 'digit',
  personId: 'personId'
});

exports.Prisma.BodyScalarFieldEnum = makeEnum({
  personId: 'personId',
  weight: 'weight',
  height: 'height',
  mannequinn: 'mannequinn'
});

exports.Prisma.CaregiverPaymentScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  createdAt: 'createdAt',
  proof: 'proof',
  caregiverToContractId: 'caregiverToContractId'
});

exports.Prisma.CaregiverScalarFieldEnum = makeEnum({
  workerId: 'workerId',
  smoker: 'smoker',
  allergyReport: 'allergyReport',
  uniqueTicket: 'uniqueTicket',
  availableTimeScales: 'availableTimeScales',
  diseaseExperiences: 'diseaseExperiences'
});

exports.Prisma.CaregiverToContractScalarFieldEnum = makeEnum({
  id: 'id',
  contractId: 'contractId',
  caregiverId: 'caregiverId'
});

exports.Prisma.ContactScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  data: 'data',
  observation: 'observation',
  personId: 'personId'
});

exports.Prisma.ContractJourneyScalarFieldEnum = makeEnum({
  id: 'id',
  caregiverOrder: 'caregiverOrder',
  createdAt: 'createdAt',
  contractId: 'contractId'
});

exports.Prisma.ContractPaymentScalarFieldEnum = makeEnum({
  id: 'id',
  contractId: 'contractId',
  value: 'value',
  createdAt: 'createdAt',
  proof: 'proof'
});

exports.Prisma.ContractScalarFieldEnum = makeEnum({
  id: 'id',
  costumerId: 'costumerId',
  timeScale: 'timeScale',
  initAt: 'initAt',
  endAt: 'endAt',
  createdAt: 'createdAt',
  acceptedAt: 'acceptedAt',
  canceledAt: 'canceledAt',
  value: 'value',
  salary: 'salary',
  archives: 'archives'
});

exports.Prisma.CostumerScalarFieldEnum = makeEnum({
  credentialId: 'credentialId',
  favoriteScales: 'favoriteScales'
});

exports.Prisma.CredentialScalarFieldEnum = makeEnum({
  personId: 'personId',
  email: 'email',
  CPF: 'CPF',
  RG: 'RG'
});

exports.Prisma.ObservationScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  text: 'text',
  createdAt: 'createdAt',
  personId: 'personId'
});

exports.Prisma.PatientScalarFieldEnum = makeEnum({
  personId: 'personId',
  costumerId: 'costumerId',
  contractId: 'contractId',
  diseases: 'diseases'
});

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  birthDate: 'birthDate',
  sex: 'sex',
  photo: 'photo',
  archive: 'archive',
  deletedAt: 'deletedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.WorkerScalarFieldEnum = makeEnum({
  credentialId: 'credentialId',
  PIS: 'PIS',
  dependents: 'dependents',
  workerStatus: 'workerStatus',
  civilStatus: 'civilStatus'
});
exports.ADMINISTRATIVE_LEVEL = makeEnum({
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
});

exports.BANK_ACCOUNT_TYPE = makeEnum({
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
  SALARY: 'SALARY'
});

exports.CIVIL_STATUS = makeEnum({
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  SEPARETED: 'SEPARETED',
  DIVORCED: 'DIVORCED',
  WIDOW: 'WIDOW'
});

exports.CONTACT_TYPE = makeEnum({
  CELLPHONE: 'CELLPHONE',
  TELEPHONE: 'TELEPHONE'
});

exports.DISEASE = makeEnum({
  ELDERLY: 'ELDERLY',
  WHELLCHAIR: 'WHELLCHAIR',
  BED: 'BED',
  GLUCOSE: 'GLUCOSE',
  HIGH_PRESSURE: 'HIGH_PRESSURE',
  PARKISON: 'PARKISON',
  ALZHEIMER: 'ALZHEIMER',
  DEMENTIA: 'DEMENTIA',
  COLOSTOMY: 'COLOSTOMY',
  AIDS: 'AIDS',
  TRACHEOSTOMY: 'TRACHEOSTOMY',
  GASTROTOMY: 'GASTROTOMY'
});

exports.HEIGHT = makeEnum({
  MIDGET: 'MIDGET',
  SMALL: 'SMALL',
  NORMAL: 'NORMAL',
  TALL: 'TALL',
  GIANT: 'GIANT'
});

exports.MANNEQUINN = makeEnum({
  PP: 'PP',
  P: 'P',
  M: 'M',
  G: 'G',
  GG: 'GG',
  GGG: 'GGG'
});

exports.SEX = makeEnum({
  M: 'M',
  F: 'F'
});

exports.TIME_SCALE = makeEnum({
  HOUR_24: 'HOUR_24',
  HOUR_24X24: 'HOUR_24X24',
  HOUR_24X48: 'HOUR_24X48',
  HOUR_12X36: 'HOUR_12X36',
  HOUR_48X48: 'HOUR_48X48',
  WEEKDAY: 'WEEKDAY',
  WEEKEND: 'WEEKEND',
  WILDCARD: 'WILDCARD'
});

exports.WEIGHT = makeEnum({
  RICKETY: 'RICKETY',
  SKINNY: 'SKINNY',
  NORMAL: 'NORMAL',
  STRONG: 'STRONG',
  OBESE: 'OBESE'
});

exports.WORKER_STATUS = makeEnum({
  WORKING: 'WORKING',
  FREE: 'FREE',
  FIRED: 'FIRED'
});

exports.Prisma.ModelName = makeEnum({
  Person: 'Person',
  Observation: 'Observation',
  Address: 'Address',
  Contact: 'Contact',
  Patient: 'Patient',
  BankAccount: 'BankAccount',
  Body: 'Body',
  Contract: 'Contract',
  ContractPayment: 'ContractPayment',
  ContractJourney: 'ContractJourney',
  CaregiverToContract: 'CaregiverToContract',
  CaregiverPayment: 'CaregiverPayment',
  Caregiver: 'Caregiver',
  Worker: 'Worker',
  Admin: 'Admin',
  Credential: 'Credential',
  Costumer: 'Costumer'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
