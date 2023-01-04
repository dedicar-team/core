
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "_data/prisma/generated/client",
    "prisma/generated/client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"SEX\",\"values\":[{\"name\":\"M\",\"dbName\":null},{\"name\":\"F\",\"dbName\":null}],\"dbName\":\"sex\"},{\"name\":\"CONTACT_TYPE\",\"values\":[{\"name\":\"CELLPHONE\",\"dbName\":\"cellphone\"},{\"name\":\"TELEPHONE\",\"dbName\":\"telephone\"}],\"dbName\":null},{\"name\":\"BANK_ACCOUNT_TYPE\",\"values\":[{\"name\":\"CHECKING\",\"dbName\":\"checking\"},{\"name\":\"SAVINGS\",\"dbName\":\"savings\"},{\"name\":\"SALARY\",\"dbName\":\"salary\"}],\"dbName\":\"bank_account_type\"},{\"name\":\"MANNEQUINN\",\"values\":[{\"name\":\"PP\",\"dbName\":null},{\"name\":\"P\",\"dbName\":null},{\"name\":\"M\",\"dbName\":null},{\"name\":\"G\",\"dbName\":null},{\"name\":\"GG\",\"dbName\":null},{\"name\":\"GGG\",\"dbName\":null}],\"dbName\":\"mannequinn_enum\"},{\"name\":\"WEIGHT\",\"values\":[{\"name\":\"RICKETY\",\"dbName\":\"rickety\"},{\"name\":\"SKINNY\",\"dbName\":\"skinny\"},{\"name\":\"NORMAL\",\"dbName\":\"normal\"},{\"name\":\"STRONG\",\"dbName\":\"strong\"},{\"name\":\"OBESE\",\"dbName\":\"obese\"}],\"dbName\":\"weight_enum\"},{\"name\":\"HEIGHT\",\"values\":[{\"name\":\"MIDGET\",\"dbName\":\"midget\"},{\"name\":\"SMALL\",\"dbName\":\"small\"},{\"name\":\"NORMAL\",\"dbName\":\"normal\"},{\"name\":\"TALL\",\"dbName\":\"tall\"},{\"name\":\"GIANT\",\"dbName\":\"giant\"}],\"dbName\":\"height_enum\"},{\"name\":\"TIME_SCALE\",\"values\":[{\"name\":\"HOUR_24\",\"dbName\":\"24\"},{\"name\":\"HOUR_24X24\",\"dbName\":\"24x24\"},{\"name\":\"HOUR_24X48\",\"dbName\":\"24x48\"},{\"name\":\"HOUR_12X36\",\"dbName\":\"12x36\"},{\"name\":\"HOUR_48X48\",\"dbName\":\"48x48\"},{\"name\":\"WEEKDAY\",\"dbName\":\"weekday\"},{\"name\":\"WEEKEND\",\"dbName\":\"weekend\"},{\"name\":\"WILDCARD\",\"dbName\":\"wildcard\"}],\"dbName\":\"time_scale\"},{\"name\":\"DISEASE\",\"values\":[{\"name\":\"ELDERLY\",\"dbName\":\"elderly\"},{\"name\":\"WHELLCHAIR\",\"dbName\":\"wheelchair\"},{\"name\":\"BED\",\"dbName\":\"bed\"},{\"name\":\"GLUCOSE\",\"dbName\":\"glucose\"},{\"name\":\"HIGH_PRESSURE\",\"dbName\":\"high_pressure\"},{\"name\":\"PARKISON\",\"dbName\":\"parkison\"},{\"name\":\"ALZHEIMER\",\"dbName\":\"alzheimer\"},{\"name\":\"DEMENTIA\",\"dbName\":\"dementia\"},{\"name\":\"COLOSTOMY\",\"dbName\":\"colostomy\"},{\"name\":\"AIDS\",\"dbName\":\"aids\"},{\"name\":\"TRACHEOSTOMY\",\"dbName\":\"tracheostomy\"},{\"name\":\"GASTROTOMY\",\"dbName\":\"gastrostomy\"}],\"dbName\":\"experience\"},{\"name\":\"WORKER_STATUS\",\"values\":[{\"name\":\"WORKING\",\"dbName\":\"working\"},{\"name\":\"FREE\",\"dbName\":\"free\"},{\"name\":\"FIRED\",\"dbName\":\"fired\"}],\"dbName\":\"worker_status\"},{\"name\":\"CIVIL_STATUS\",\"values\":[{\"name\":\"SINGLE\",\"dbName\":\"single\"},{\"name\":\"MARRIED\",\"dbName\":\"married\"},{\"name\":\"SEPARETED\",\"dbName\":\"separated\"},{\"name\":\"DIVORCED\",\"dbName\":\"divorced\"},{\"name\":\"WIDOW\",\"dbName\":\"widow\"}],\"dbName\":\"civil_status\"},{\"name\":\"ADMINISTRATIVE_LEVEL\",\"values\":[{\"name\":\"READ\",\"dbName\":\"read\"},{\"name\":\"UPDATE\",\"dbName\":\"update\"},{\"name\":\"DELETE\",\"dbName\":\"delete\"}],\"dbName\":\"administrative_level\"}],\"models\":[{\"name\":\"Person\",\"dbName\":\"person\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SEX\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Credential\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Credential\",\"relationName\":\"CredentialToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Address\",\"relationName\":\"AddressToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Patient\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Patient\",\"relationName\":\"PatientToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Body\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Body\",\"relationName\":\"BodyToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contact\",\"relationName\":\"ContactToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Observations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Observation\",\"relationName\":\"ObservationToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BankAccounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BankAccount\",\"relationName\":\"BankAccountToPerson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Observation\",\"dbName\":\"observation\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"ObservationToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Address\",\"dbName\":\"address\",\"fields\":[{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicPlace\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"district\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"AddressToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Contact\",\"dbName\":\"contact\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CONTACT_TYPE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"ContactToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Patient\",\"dbName\":\"patient\",\"fields\":[{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costumerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"PatientToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Costumer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Costumer\",\"relationName\":\"CostumerToPatient\",\"relationFromFields\":[\"costumerId\"],\"relationToFields\":[\"credentialId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contract\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToPatient\",\"relationFromFields\":[\"contractId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diseases\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DISEASE\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BankAccount\",\"dbName\":\"bank_account\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BANK_ACCOUNT_TYPE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"digit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"BankAccountToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Body\",\"dbName\":\"body\",\"fields\":[{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weight\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WEIGHT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HEIGHT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mannequinn\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MANNEQUINN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"BodyToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Contract\",\"dbName\":\"contract\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costumerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeScale\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TIME_SCALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"initAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canceledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archives\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContractPayment\",\"relationName\":\"ContractToContractPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Patients\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Patient\",\"relationName\":\"ContractToPatient\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Costumer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Costumer\",\"relationName\":\"ContractToCostumer\",\"relationFromFields\":[\"costumerId\"],\"relationToFields\":[\"credentialId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContractJourney\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContractJourney\",\"relationName\":\"ContractToContractJourney\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CaregiverToContract\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaregiverToContract\",\"relationName\":\"CaregiverToContractToContract\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ContractPayment\",\"dbName\":\"contract_payment\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proof\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contract\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToContractPayment\",\"relationFromFields\":[\"contractId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ContractJourney\",\"dbName\":\"contract_journey\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiverOrder\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contract\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToContractJourney\",\"relationFromFields\":[\"contractId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CaregiverToContract\",\"dbName\":\"caregiver_to_contract\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contract\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"CaregiverToContractToContract\",\"relationFromFields\":[\"contractId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Caregiver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Caregiver\",\"relationName\":\"CaregiverToCaregiverToContract\",\"relationFromFields\":[\"caregiverId\"],\"relationToFields\":[\"workerId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CaregiverPayment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaregiverPayment\",\"relationName\":\"CaregiverPaymentToCaregiverToContract\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CaregiverPayment\",\"dbName\":\"caregiver_payment\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proof\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiverToContractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CaregiverToContract\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaregiverToContract\",\"relationName\":\"CaregiverPaymentToCaregiverToContract\",\"relationFromFields\":[\"caregiverToContractId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Caregiver\",\"dbName\":\"caregiver\",\"fields\":[{\"name\":\"workerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smoker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergyReport\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uniqueTicket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availableTimeScales\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TIME_SCALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diseaseExperiences\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DISEASE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Worker\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Worker\",\"relationName\":\"CaregiverToWorker\",\"relationFromFields\":[\"workerId\"],\"relationToFields\":[\"credentialId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CaregiverToContract\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaregiverToContract\",\"relationName\":\"CaregiverToCaregiverToContract\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Worker\",\"dbName\":\"worker\",\"fields\":[{\"name\":\"credentialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PIS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependents\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workerStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WORKER_STATUS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"civilStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CIVIL_STATUS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Credential\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Credential\",\"relationName\":\"CredentialToWorker\",\"relationFromFields\":[\"credentialId\"],\"relationToFields\":[\"personId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Caregiver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Caregiver\",\"relationName\":\"CaregiverToWorker\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Admin\",\"dbName\":\"admin\",\"fields\":[{\"name\":\"credentialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administrativeLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ADMINISTRATIVE_LEVEL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Credential\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Credential\",\"relationName\":\"AdminToCredential\",\"relationFromFields\":[\"credentialId\"],\"relationToFields\":[\"personId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Credential\",\"dbName\":\"credential\",\"fields\":[{\"name\":\"personId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CPF\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"CredentialToPerson\",\"relationFromFields\":[\"personId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Worker\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Worker\",\"relationName\":\"CredentialToWorker\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToCredential\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Costumer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Costumer\",\"relationName\":\"CostumerToCredential\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Costumer\",\"dbName\":\"costumer\",\"fields\":[{\"name\":\"credentialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoriteScales\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TIME_SCALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Credential\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Credential\",\"relationName\":\"CostumerToCredential\",\"relationFromFields\":[\"credentialId\"],\"relationToFields\":[\"personId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Patients\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Patient\",\"relationName\":\"CostumerToPatient\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contract\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ContractToCostumer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Person\",\"plural\":\"people\",\"findUnique\":\"findUniquePerson\",\"findUniqueOrThrow\":\"findUniquePersonOrThrow\",\"findFirst\":\"findFirstPerson\",\"findFirstOrThrow\":\"findFirstPersonOrThrow\",\"findMany\":\"findManyPerson\",\"create\":\"createOnePerson\",\"createMany\":\"createManyPerson\",\"delete\":\"deleteOnePerson\",\"update\":\"updateOnePerson\",\"deleteMany\":\"deleteManyPerson\",\"updateMany\":\"updateManyPerson\",\"upsert\":\"upsertOnePerson\",\"aggregate\":\"aggregatePerson\",\"groupBy\":\"groupByPerson\"},{\"model\":\"Observation\",\"plural\":\"observations\",\"findUnique\":\"findUniqueObservation\",\"findUniqueOrThrow\":\"findUniqueObservationOrThrow\",\"findFirst\":\"findFirstObservation\",\"findFirstOrThrow\":\"findFirstObservationOrThrow\",\"findMany\":\"findManyObservation\",\"create\":\"createOneObservation\",\"createMany\":\"createManyObservation\",\"delete\":\"deleteOneObservation\",\"update\":\"updateOneObservation\",\"deleteMany\":\"deleteManyObservation\",\"updateMany\":\"updateManyObservation\",\"upsert\":\"upsertOneObservation\",\"aggregate\":\"aggregateObservation\",\"groupBy\":\"groupByObservation\"},{\"model\":\"Address\",\"plural\":\"addresses\",\"findUnique\":\"findUniqueAddress\",\"findUniqueOrThrow\":\"findUniqueAddressOrThrow\",\"findFirst\":\"findFirstAddress\",\"findFirstOrThrow\":\"findFirstAddressOrThrow\",\"findMany\":\"findManyAddress\",\"create\":\"createOneAddress\",\"createMany\":\"createManyAddress\",\"delete\":\"deleteOneAddress\",\"update\":\"updateOneAddress\",\"deleteMany\":\"deleteManyAddress\",\"updateMany\":\"updateManyAddress\",\"upsert\":\"upsertOneAddress\",\"aggregate\":\"aggregateAddress\",\"groupBy\":\"groupByAddress\"},{\"model\":\"Contact\",\"plural\":\"contacts\",\"findUnique\":\"findUniqueContact\",\"findUniqueOrThrow\":\"findUniqueContactOrThrow\",\"findFirst\":\"findFirstContact\",\"findFirstOrThrow\":\"findFirstContactOrThrow\",\"findMany\":\"findManyContact\",\"create\":\"createOneContact\",\"createMany\":\"createManyContact\",\"delete\":\"deleteOneContact\",\"update\":\"updateOneContact\",\"deleteMany\":\"deleteManyContact\",\"updateMany\":\"updateManyContact\",\"upsert\":\"upsertOneContact\",\"aggregate\":\"aggregateContact\",\"groupBy\":\"groupByContact\"},{\"model\":\"Patient\",\"plural\":\"patients\",\"findUnique\":\"findUniquePatient\",\"findUniqueOrThrow\":\"findUniquePatientOrThrow\",\"findFirst\":\"findFirstPatient\",\"findFirstOrThrow\":\"findFirstPatientOrThrow\",\"findMany\":\"findManyPatient\",\"create\":\"createOnePatient\",\"createMany\":\"createManyPatient\",\"delete\":\"deleteOnePatient\",\"update\":\"updateOnePatient\",\"deleteMany\":\"deleteManyPatient\",\"updateMany\":\"updateManyPatient\",\"upsert\":\"upsertOnePatient\",\"aggregate\":\"aggregatePatient\",\"groupBy\":\"groupByPatient\"},{\"model\":\"BankAccount\",\"plural\":\"bankAccounts\",\"findUnique\":\"findUniqueBankAccount\",\"findUniqueOrThrow\":\"findUniqueBankAccountOrThrow\",\"findFirst\":\"findFirstBankAccount\",\"findFirstOrThrow\":\"findFirstBankAccountOrThrow\",\"findMany\":\"findManyBankAccount\",\"create\":\"createOneBankAccount\",\"createMany\":\"createManyBankAccount\",\"delete\":\"deleteOneBankAccount\",\"update\":\"updateOneBankAccount\",\"deleteMany\":\"deleteManyBankAccount\",\"updateMany\":\"updateManyBankAccount\",\"upsert\":\"upsertOneBankAccount\",\"aggregate\":\"aggregateBankAccount\",\"groupBy\":\"groupByBankAccount\"},{\"model\":\"Body\",\"plural\":\"bodies\",\"findUnique\":\"findUniqueBody\",\"findUniqueOrThrow\":\"findUniqueBodyOrThrow\",\"findFirst\":\"findFirstBody\",\"findFirstOrThrow\":\"findFirstBodyOrThrow\",\"findMany\":\"findManyBody\",\"create\":\"createOneBody\",\"createMany\":\"createManyBody\",\"delete\":\"deleteOneBody\",\"update\":\"updateOneBody\",\"deleteMany\":\"deleteManyBody\",\"updateMany\":\"updateManyBody\",\"upsert\":\"upsertOneBody\",\"aggregate\":\"aggregateBody\",\"groupBy\":\"groupByBody\"},{\"model\":\"Contract\",\"plural\":\"contracts\",\"findUnique\":\"findUniqueContract\",\"findUniqueOrThrow\":\"findUniqueContractOrThrow\",\"findFirst\":\"findFirstContract\",\"findFirstOrThrow\":\"findFirstContractOrThrow\",\"findMany\":\"findManyContract\",\"create\":\"createOneContract\",\"createMany\":\"createManyContract\",\"delete\":\"deleteOneContract\",\"update\":\"updateOneContract\",\"deleteMany\":\"deleteManyContract\",\"updateMany\":\"updateManyContract\",\"upsert\":\"upsertOneContract\",\"aggregate\":\"aggregateContract\",\"groupBy\":\"groupByContract\"},{\"model\":\"ContractPayment\",\"plural\":\"contractPayments\",\"findUnique\":\"findUniqueContractPayment\",\"findUniqueOrThrow\":\"findUniqueContractPaymentOrThrow\",\"findFirst\":\"findFirstContractPayment\",\"findFirstOrThrow\":\"findFirstContractPaymentOrThrow\",\"findMany\":\"findManyContractPayment\",\"create\":\"createOneContractPayment\",\"createMany\":\"createManyContractPayment\",\"delete\":\"deleteOneContractPayment\",\"update\":\"updateOneContractPayment\",\"deleteMany\":\"deleteManyContractPayment\",\"updateMany\":\"updateManyContractPayment\",\"upsert\":\"upsertOneContractPayment\",\"aggregate\":\"aggregateContractPayment\",\"groupBy\":\"groupByContractPayment\"},{\"model\":\"ContractJourney\",\"plural\":\"contractJourneys\",\"findUnique\":\"findUniqueContractJourney\",\"findUniqueOrThrow\":\"findUniqueContractJourneyOrThrow\",\"findFirst\":\"findFirstContractJourney\",\"findFirstOrThrow\":\"findFirstContractJourneyOrThrow\",\"findMany\":\"findManyContractJourney\",\"create\":\"createOneContractJourney\",\"createMany\":\"createManyContractJourney\",\"delete\":\"deleteOneContractJourney\",\"update\":\"updateOneContractJourney\",\"deleteMany\":\"deleteManyContractJourney\",\"updateMany\":\"updateManyContractJourney\",\"upsert\":\"upsertOneContractJourney\",\"aggregate\":\"aggregateContractJourney\",\"groupBy\":\"groupByContractJourney\"},{\"model\":\"CaregiverToContract\",\"plural\":\"caregiverToContracts\",\"findUnique\":\"findUniqueCaregiverToContract\",\"findUniqueOrThrow\":\"findUniqueCaregiverToContractOrThrow\",\"findFirst\":\"findFirstCaregiverToContract\",\"findFirstOrThrow\":\"findFirstCaregiverToContractOrThrow\",\"findMany\":\"findManyCaregiverToContract\",\"create\":\"createOneCaregiverToContract\",\"createMany\":\"createManyCaregiverToContract\",\"delete\":\"deleteOneCaregiverToContract\",\"update\":\"updateOneCaregiverToContract\",\"deleteMany\":\"deleteManyCaregiverToContract\",\"updateMany\":\"updateManyCaregiverToContract\",\"upsert\":\"upsertOneCaregiverToContract\",\"aggregate\":\"aggregateCaregiverToContract\",\"groupBy\":\"groupByCaregiverToContract\"},{\"model\":\"CaregiverPayment\",\"plural\":\"caregiverPayments\",\"findUnique\":\"findUniqueCaregiverPayment\",\"findUniqueOrThrow\":\"findUniqueCaregiverPaymentOrThrow\",\"findFirst\":\"findFirstCaregiverPayment\",\"findFirstOrThrow\":\"findFirstCaregiverPaymentOrThrow\",\"findMany\":\"findManyCaregiverPayment\",\"create\":\"createOneCaregiverPayment\",\"createMany\":\"createManyCaregiverPayment\",\"delete\":\"deleteOneCaregiverPayment\",\"update\":\"updateOneCaregiverPayment\",\"deleteMany\":\"deleteManyCaregiverPayment\",\"updateMany\":\"updateManyCaregiverPayment\",\"upsert\":\"upsertOneCaregiverPayment\",\"aggregate\":\"aggregateCaregiverPayment\",\"groupBy\":\"groupByCaregiverPayment\"},{\"model\":\"Caregiver\",\"plural\":\"caregivers\",\"findUnique\":\"findUniqueCaregiver\",\"findUniqueOrThrow\":\"findUniqueCaregiverOrThrow\",\"findFirst\":\"findFirstCaregiver\",\"findFirstOrThrow\":\"findFirstCaregiverOrThrow\",\"findMany\":\"findManyCaregiver\",\"create\":\"createOneCaregiver\",\"createMany\":\"createManyCaregiver\",\"delete\":\"deleteOneCaregiver\",\"update\":\"updateOneCaregiver\",\"deleteMany\":\"deleteManyCaregiver\",\"updateMany\":\"updateManyCaregiver\",\"upsert\":\"upsertOneCaregiver\",\"aggregate\":\"aggregateCaregiver\",\"groupBy\":\"groupByCaregiver\"},{\"model\":\"Worker\",\"plural\":\"workers\",\"findUnique\":\"findUniqueWorker\",\"findUniqueOrThrow\":\"findUniqueWorkerOrThrow\",\"findFirst\":\"findFirstWorker\",\"findFirstOrThrow\":\"findFirstWorkerOrThrow\",\"findMany\":\"findManyWorker\",\"create\":\"createOneWorker\",\"createMany\":\"createManyWorker\",\"delete\":\"deleteOneWorker\",\"update\":\"updateOneWorker\",\"deleteMany\":\"deleteManyWorker\",\"updateMany\":\"updateManyWorker\",\"upsert\":\"upsertOneWorker\",\"aggregate\":\"aggregateWorker\",\"groupBy\":\"groupByWorker\"},{\"model\":\"Admin\",\"plural\":\"admins\",\"findUnique\":\"findUniqueAdmin\",\"findUniqueOrThrow\":\"findUniqueAdminOrThrow\",\"findFirst\":\"findFirstAdmin\",\"findFirstOrThrow\":\"findFirstAdminOrThrow\",\"findMany\":\"findManyAdmin\",\"create\":\"createOneAdmin\",\"createMany\":\"createManyAdmin\",\"delete\":\"deleteOneAdmin\",\"update\":\"updateOneAdmin\",\"deleteMany\":\"deleteManyAdmin\",\"updateMany\":\"updateManyAdmin\",\"upsert\":\"upsertOneAdmin\",\"aggregate\":\"aggregateAdmin\",\"groupBy\":\"groupByAdmin\"},{\"model\":\"Credential\",\"plural\":\"credentials\",\"findUnique\":\"findUniqueCredential\",\"findUniqueOrThrow\":\"findUniqueCredentialOrThrow\",\"findFirst\":\"findFirstCredential\",\"findFirstOrThrow\":\"findFirstCredentialOrThrow\",\"findMany\":\"findManyCredential\",\"create\":\"createOneCredential\",\"createMany\":\"createManyCredential\",\"delete\":\"deleteOneCredential\",\"update\":\"updateOneCredential\",\"deleteMany\":\"deleteManyCredential\",\"updateMany\":\"updateManyCredential\",\"upsert\":\"upsertOneCredential\",\"aggregate\":\"aggregateCredential\",\"groupBy\":\"groupByCredential\"},{\"model\":\"Costumer\",\"plural\":\"costumers\",\"findUnique\":\"findUniqueCostumer\",\"findUniqueOrThrow\":\"findUniqueCostumerOrThrow\",\"findFirst\":\"findFirstCostumer\",\"findFirstOrThrow\":\"findFirstCostumerOrThrow\",\"findMany\":\"findManyCostumer\",\"create\":\"createOneCostumer\",\"createMany\":\"createManyCostumer\",\"delete\":\"deleteOneCostumer\",\"update\":\"updateOneCostumer\",\"deleteMany\":\"deleteManyCostumer\",\"updateMany\":\"updateManyCostumer\",\"upsert\":\"upsertOneCostumer\",\"aggregate\":\"aggregateCostumer\",\"groupBy\":\"groupByCostumer\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/cjfswd/monorepo/_api/_data/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin"
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../schema",
  "clientVersion": "4.8.0",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "_data/prisma/generated/client/libquery_engine-darwin.dylib.node")

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "_data/prisma/generated/client/query_engine-windows.dll.node")

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "_data/prisma/generated/client/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "_data/prisma/generated/client/schema.prisma")
