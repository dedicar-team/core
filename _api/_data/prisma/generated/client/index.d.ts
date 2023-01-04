
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Person
 * 
 */
export type Person = {
  id: string
  name: string
  birthDate: Date
  sex: SEX
  photo: string | null
  archive: string | null
  deletedAt: Date | null
}

/**
 * Model Observation
 * 
 */
export type Observation = {
  id: string
  title: string
  text: string
  createdAt: Date | null
  personId: string
}

/**
 * Model Address
 * 
 */
export type Address = {
  personId: string
  publicPlace: string
  number: string
  district: string
  city: string
  CEP: string
  complement: string | null
  reference: string | null
}

/**
 * Model Contact
 * 
 */
export type Contact = {
  id: string
  type: CONTACT_TYPE
  data: string
  observation: string | null
  personId: string
}

/**
 * Model Patient
 * 
 */
export type Patient = {
  personId: string
  costumerId: string | null
  contractId: string | null
  diseases: DISEASE[]
}

/**
 * Model BankAccount
 * 
 */
export type BankAccount = {
  id: string
  name: string
  type: BANK_ACCOUNT_TYPE
  agency: string
  account: string
  digit: string
  personId: string
}

/**
 * Model Body
 * 
 */
export type Body = {
  personId: string
  weight: WEIGHT
  height: HEIGHT
  mannequinn: MANNEQUINN
}

/**
 * Model Contract
 * 
 */
export type Contract = {
  id: string
  costumerId: string
  timeScale: TIME_SCALE
  initAt: Date
  endAt: Date
  createdAt: Date | null
  acceptedAt: Date | null
  canceledAt: Date | null
  value: string
  salary: string
  archives: string[]
}

/**
 * Model ContractPayment
 * 
 */
export type ContractPayment = {
  id: string
  contractId: string
  value: string
  createdAt: Date | null
  proof: string
}

/**
 * Model ContractJourney
 * 
 */
export type ContractJourney = {
  id: string
  caregiverOrder: string[]
  createdAt: Date | null
  contractId: string
}

/**
 * Model CaregiverToContract
 * 
 */
export type CaregiverToContract = {
  id: string
  contractId: string
  caregiverId: string
}

/**
 * Model CaregiverPayment
 * 
 */
export type CaregiverPayment = {
  id: string
  value: string
  createdAt: Date | null
  proof: string
  caregiverToContractId: string
}

/**
 * Model Caregiver
 * 
 */
export type Caregiver = {
  workerId: string
  smoker: boolean
  allergyReport: string
  uniqueTicket: string
  availableTimeScales: TIME_SCALE[]
  diseaseExperiences: DISEASE[]
}

/**
 * Model Worker
 * 
 */
export type Worker = {
  credentialId: string
  PIS: string
  dependents: number
  workerStatus: WORKER_STATUS
  civilStatus: CIVIL_STATUS
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  credentialId: string
  administrativeLevel: ADMINISTRATIVE_LEVEL
}

/**
 * Model Credential
 * 
 */
export type Credential = {
  personId: string
  email: string
  CPF: string
  RG: string
}

/**
 * Model Costumer
 * 
 */
export type Costumer = {
  credentialId: string
  favoriteScales: TIME_SCALE[]
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ADMINISTRATIVE_LEVEL: {
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type ADMINISTRATIVE_LEVEL = (typeof ADMINISTRATIVE_LEVEL)[keyof typeof ADMINISTRATIVE_LEVEL]


export const BANK_ACCOUNT_TYPE: {
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
  SALARY: 'SALARY'
};

export type BANK_ACCOUNT_TYPE = (typeof BANK_ACCOUNT_TYPE)[keyof typeof BANK_ACCOUNT_TYPE]


export const CIVIL_STATUS: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  SEPARETED: 'SEPARETED',
  DIVORCED: 'DIVORCED',
  WIDOW: 'WIDOW'
};

export type CIVIL_STATUS = (typeof CIVIL_STATUS)[keyof typeof CIVIL_STATUS]


export const CONTACT_TYPE: {
  CELLPHONE: 'CELLPHONE',
  TELEPHONE: 'TELEPHONE'
};

export type CONTACT_TYPE = (typeof CONTACT_TYPE)[keyof typeof CONTACT_TYPE]


export const DISEASE: {
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
};

export type DISEASE = (typeof DISEASE)[keyof typeof DISEASE]


export const HEIGHT: {
  MIDGET: 'MIDGET',
  SMALL: 'SMALL',
  NORMAL: 'NORMAL',
  TALL: 'TALL',
  GIANT: 'GIANT'
};

export type HEIGHT = (typeof HEIGHT)[keyof typeof HEIGHT]


export const MANNEQUINN: {
  PP: 'PP',
  P: 'P',
  M: 'M',
  G: 'G',
  GG: 'GG',
  GGG: 'GGG'
};

export type MANNEQUINN = (typeof MANNEQUINN)[keyof typeof MANNEQUINN]


export const SEX: {
  M: 'M',
  F: 'F'
};

export type SEX = (typeof SEX)[keyof typeof SEX]


export const TIME_SCALE: {
  HOUR_24: 'HOUR_24',
  HOUR_24X24: 'HOUR_24X24',
  HOUR_24X48: 'HOUR_24X48',
  HOUR_12X36: 'HOUR_12X36',
  HOUR_48X48: 'HOUR_48X48',
  WEEKDAY: 'WEEKDAY',
  WEEKEND: 'WEEKEND',
  WILDCARD: 'WILDCARD'
};

export type TIME_SCALE = (typeof TIME_SCALE)[keyof typeof TIME_SCALE]


export const WEIGHT: {
  RICKETY: 'RICKETY',
  SKINNY: 'SKINNY',
  NORMAL: 'NORMAL',
  STRONG: 'STRONG',
  OBESE: 'OBESE'
};

export type WEIGHT = (typeof WEIGHT)[keyof typeof WEIGHT]


export const WORKER_STATUS: {
  WORKING: 'WORKING',
  FREE: 'FREE',
  FIRED: 'FIRED'
};

export type WORKER_STATUS = (typeof WORKER_STATUS)[keyof typeof WORKER_STATUS]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.observation`: Exposes CRUD operations for the **Observation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Observations
    * const observations = await prisma.observation.findMany()
    * ```
    */
  get observation(): Prisma.ObservationDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<GlobalReject>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<GlobalReject>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<GlobalReject>;

  /**
   * `prisma.body`: Exposes CRUD operations for the **Body** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bodies
    * const bodies = await prisma.body.findMany()
    * ```
    */
  get body(): Prisma.BodyDelegate<GlobalReject>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<GlobalReject>;

  /**
   * `prisma.contractPayment`: Exposes CRUD operations for the **ContractPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractPayments
    * const contractPayments = await prisma.contractPayment.findMany()
    * ```
    */
  get contractPayment(): Prisma.ContractPaymentDelegate<GlobalReject>;

  /**
   * `prisma.contractJourney`: Exposes CRUD operations for the **ContractJourney** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractJourneys
    * const contractJourneys = await prisma.contractJourney.findMany()
    * ```
    */
  get contractJourney(): Prisma.ContractJourneyDelegate<GlobalReject>;

  /**
   * `prisma.caregiverToContract`: Exposes CRUD operations for the **CaregiverToContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaregiverToContracts
    * const caregiverToContracts = await prisma.caregiverToContract.findMany()
    * ```
    */
  get caregiverToContract(): Prisma.CaregiverToContractDelegate<GlobalReject>;

  /**
   * `prisma.caregiverPayment`: Exposes CRUD operations for the **CaregiverPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaregiverPayments
    * const caregiverPayments = await prisma.caregiverPayment.findMany()
    * ```
    */
  get caregiverPayment(): Prisma.CaregiverPaymentDelegate<GlobalReject>;

  /**
   * `prisma.caregiver`: Exposes CRUD operations for the **Caregiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caregivers
    * const caregivers = await prisma.caregiver.findMany()
    * ```
    */
  get caregiver(): Prisma.CaregiverDelegate<GlobalReject>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **Credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.CredentialDelegate<GlobalReject>;

  /**
   * `prisma.costumer`: Exposes CRUD operations for the **Costumer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Costumers
    * const costumers = await prisma.costumer.findMany()
    * ```
    */
  get costumer(): Prisma.CostumerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    Contacts: number
    Observations: number
    BankAccounts: number
  }

  export type PersonCountOutputTypeSelect = {
    Contacts?: boolean
    Observations?: boolean
    BankAccounts?: boolean
  }

  export type PersonCountOutputTypeGetPayload<S extends boolean | null | undefined | PersonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PersonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PersonCountOutputTypeArgs)
    ? PersonCountOutputType 
    : S extends { select: any } & (PersonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PersonCountOutputType ? PersonCountOutputType[P] : never
  } 
      : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     * 
    **/
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type ContractCountOutputType
   */


  export type ContractCountOutputType = {
    Payments: number
    Patients: number
    ContractJourney: number
    CaregiverToContract: number
  }

  export type ContractCountOutputTypeSelect = {
    Payments?: boolean
    Patients?: boolean
    ContractJourney?: boolean
    CaregiverToContract?: boolean
  }

  export type ContractCountOutputTypeGetPayload<S extends boolean | null | undefined | ContractCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ContractCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ContractCountOutputTypeArgs)
    ? ContractCountOutputType 
    : S extends { select: any } & (ContractCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ContractCountOutputType ? ContractCountOutputType[P] : never
  } 
      : ContractCountOutputType




  // Custom InputTypes

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     * 
    **/
    select?: ContractCountOutputTypeSelect | null
  }



  /**
   * Count Type CaregiverToContractCountOutputType
   */


  export type CaregiverToContractCountOutputType = {
    CaregiverPayment: number
  }

  export type CaregiverToContractCountOutputTypeSelect = {
    CaregiverPayment?: boolean
  }

  export type CaregiverToContractCountOutputTypeGetPayload<S extends boolean | null | undefined | CaregiverToContractCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CaregiverToContractCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CaregiverToContractCountOutputTypeArgs)
    ? CaregiverToContractCountOutputType 
    : S extends { select: any } & (CaregiverToContractCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CaregiverToContractCountOutputType ? CaregiverToContractCountOutputType[P] : never
  } 
      : CaregiverToContractCountOutputType




  // Custom InputTypes

  /**
   * CaregiverToContractCountOutputType without action
   */
  export type CaregiverToContractCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContractCountOutputType
     * 
    **/
    select?: CaregiverToContractCountOutputTypeSelect | null
  }



  /**
   * Count Type CaregiverCountOutputType
   */


  export type CaregiverCountOutputType = {
    CaregiverToContract: number
  }

  export type CaregiverCountOutputTypeSelect = {
    CaregiverToContract?: boolean
  }

  export type CaregiverCountOutputTypeGetPayload<S extends boolean | null | undefined | CaregiverCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CaregiverCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CaregiverCountOutputTypeArgs)
    ? CaregiverCountOutputType 
    : S extends { select: any } & (CaregiverCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CaregiverCountOutputType ? CaregiverCountOutputType[P] : never
  } 
      : CaregiverCountOutputType




  // Custom InputTypes

  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CaregiverCountOutputType
     * 
    **/
    select?: CaregiverCountOutputTypeSelect | null
  }



  /**
   * Count Type CostumerCountOutputType
   */


  export type CostumerCountOutputType = {
    Patients: number
    Contract: number
  }

  export type CostumerCountOutputTypeSelect = {
    Patients?: boolean
    Contract?: boolean
  }

  export type CostumerCountOutputTypeGetPayload<S extends boolean | null | undefined | CostumerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CostumerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CostumerCountOutputTypeArgs)
    ? CostumerCountOutputType 
    : S extends { select: any } & (CostumerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CostumerCountOutputType ? CostumerCountOutputType[P] : never
  } 
      : CostumerCountOutputType




  // Custom InputTypes

  /**
   * CostumerCountOutputType without action
   */
  export type CostumerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CostumerCountOutputType
     * 
    **/
    select?: CostumerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    birthDate: Date | null
    sex: SEX | null
    photo: string | null
    archive: string | null
    deletedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birthDate: Date | null
    sex: SEX | null
    photo: string | null
    archive: string | null
    deletedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    birthDate: number
    sex: number
    photo: number
    archive: number
    deletedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    sex?: true
    photo?: true
    archive?: true
    deletedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    sex?: true
    photo?: true
    archive?: true
    deletedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    sex?: true
    photo?: true
    archive?: true
    deletedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: Array<PersonScalarFieldEnum>
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    name: string
    birthDate: Date
    sex: SEX
    photo: string | null
    archive: string | null
    deletedAt: Date | null
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    name?: boolean
    birthDate?: boolean
    sex?: boolean
    photo?: boolean
    archive?: boolean
    deletedAt?: boolean
    Credential?: boolean | CredentialArgs
    Address?: boolean | AddressArgs
    Patient?: boolean | PatientArgs
    Body?: boolean | BodyArgs
    Contacts?: boolean | PersonContactsArgs
    Observations?: boolean | PersonObservationsArgs
    BankAccounts?: boolean | PersonBankAccountsArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }


  export type PersonInclude = {
    Credential?: boolean | CredentialArgs
    Address?: boolean | AddressArgs
    Patient?: boolean | PatientArgs
    Body?: boolean | BodyArgs
    Contacts?: boolean | PersonContactsArgs
    Observations?: boolean | PersonObservationsArgs
    BankAccounts?: boolean | PersonBankAccountsArgs
    _count?: boolean | PersonCountOutputTypeArgs
  } 

  export type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Person :
    S extends undefined ? never :
    S extends { include: any } & (PersonArgs | PersonFindManyArgs)
    ? Person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Credential' ? CredentialGetPayload<S['include'][P]> | null :
        P extends 'Address' ? AddressGetPayload<S['include'][P]> | null :
        P extends 'Patient' ? PatientGetPayload<S['include'][P]> | null :
        P extends 'Body' ? BodyGetPayload<S['include'][P]> | null :
        P extends 'Contacts' ? Array < ContactGetPayload<S['include'][P]>>  :
        P extends 'Observations' ? Array < ObservationGetPayload<S['include'][P]>>  :
        P extends 'BankAccounts' ? Array < BankAccountGetPayload<S['include'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PersonArgs | PersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Credential' ? CredentialGetPayload<S['select'][P]> | null :
        P extends 'Address' ? AddressGetPayload<S['select'][P]> | null :
        P extends 'Patient' ? PatientGetPayload<S['select'][P]> | null :
        P extends 'Body' ? BodyGetPayload<S['select'][P]> | null :
        P extends 'Contacts' ? Array < ContactGetPayload<S['select'][P]>>  :
        P extends 'Observations' ? Array < ObservationGetPayload<S['select'][P]>>  :
        P extends 'BankAccounts' ? Array < BankAccountGetPayload<S['select'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Person ? Person[P] : never
  } 
      : Person


  type PersonCountArgs = Merge<
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }
  >

  export interface PersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): PrismaPromise<Array<PersonGetPayload<T>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs>(
      args?: SelectSubset<T, PersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Credential<T extends CredentialArgs= {}>(args?: Subset<T, CredentialArgs>): Prisma__CredentialClient<CredentialGetPayload<T> | Null>;

    Address<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    Patient<T extends PatientArgs= {}>(args?: Subset<T, PatientArgs>): Prisma__PatientClient<PatientGetPayload<T> | Null>;

    Body<T extends BodyArgs= {}>(args?: Subset<T, BodyArgs>): Prisma__BodyClient<BodyGetPayload<T> | Null>;

    Contacts<T extends PersonContactsArgs= {}>(args?: Subset<T, PersonContactsArgs>): PrismaPromise<Array<ContactGetPayload<T>>| Null>;

    Observations<T extends PersonObservationsArgs= {}>(args?: Subset<T, PersonObservationsArgs>): PrismaPromise<Array<ObservationGetPayload<T>>| Null>;

    BankAccounts<T extends PersonBankAccountsArgs= {}>(args?: Subset<T, PersonBankAccountsArgs>): PrismaPromise<Array<BankAccountGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Person base type for findUnique actions
   */
  export type PersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUnique
   */
  export interface PersonFindUniqueArgs extends PersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person base type for findFirst actions
   */
  export type PersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * Person findFirst
   */
  export interface PersonFindFirstArgs extends PersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     * 
    **/
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs = {
    /**
     * The data used to create many People.
     * 
    **/
    data: Enumerable<PersonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     * 
    **/
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    /**
     * The data used to update People.
     * 
    **/
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     * 
    **/
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     * 
    **/
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    /**
     * Filter which People to delete
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person.Contacts
   */
  export type PersonContactsArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    where?: ContactWhereInput
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Person.Observations
   */
  export type PersonObservationsArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    where?: ObservationWhereInput
    orderBy?: Enumerable<ObservationOrderByWithRelationInput>
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ObservationScalarFieldEnum>
  }


  /**
   * Person.BankAccounts
   */
  export type PersonBankAccountsArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    where?: BankAccountWhereInput
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }


  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
  }



  /**
   * Model Observation
   */


  export type AggregateObservation = {
    _count: ObservationCountAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  export type ObservationMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    createdAt: Date | null
    personId: string | null
  }

  export type ObservationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    createdAt: Date | null
    personId: string | null
  }

  export type ObservationCountAggregateOutputType = {
    id: number
    title: number
    text: number
    createdAt: number
    personId: number
    _all: number
  }


  export type ObservationMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    personId?: true
  }

  export type ObservationMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    personId?: true
  }

  export type ObservationCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    personId?: true
    _all?: true
  }

  export type ObservationAggregateArgs = {
    /**
     * Filter which Observation to aggregate.
     * 
    **/
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     * 
    **/
    orderBy?: Enumerable<ObservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Observations
    **/
    _count?: true | ObservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationMaxAggregateInputType
  }

  export type GetObservationAggregateType<T extends ObservationAggregateArgs> = {
        [P in keyof T & keyof AggregateObservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservation[P]>
      : GetScalarType<T[P], AggregateObservation[P]>
  }




  export type ObservationGroupByArgs = {
    where?: ObservationWhereInput
    orderBy?: Enumerable<ObservationOrderByWithAggregationInput>
    by: Array<ObservationScalarFieldEnum>
    having?: ObservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationCountAggregateInputType | true
    _min?: ObservationMinAggregateInputType
    _max?: ObservationMaxAggregateInputType
  }


  export type ObservationGroupByOutputType = {
    id: string
    title: string
    text: string
    createdAt: Date | null
    personId: string
    _count: ObservationCountAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  type GetObservationGroupByPayload<T extends ObservationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ObservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationGroupByOutputType[P]>
        }
      >
    >


  export type ObservationSelect = {
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    personId?: boolean
    Person?: boolean | PersonArgs
  }


  export type ObservationInclude = {
    Person?: boolean | PersonArgs
  } 

  export type ObservationGetPayload<S extends boolean | null | undefined | ObservationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Observation :
    S extends undefined ? never :
    S extends { include: any } & (ObservationArgs | ObservationFindManyArgs)
    ? Observation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ObservationArgs | ObservationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Observation ? Observation[P] : never
  } 
      : Observation


  type ObservationCountArgs = Merge<
    Omit<ObservationFindManyArgs, 'select' | 'include'> & {
      select?: ObservationCountAggregateInputType | true
    }
  >

  export interface ObservationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Observation that matches the filter.
     * @param {ObservationFindUniqueArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ObservationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ObservationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Observation'> extends True ? Prisma__ObservationClient<ObservationGetPayload<T>> : Prisma__ObservationClient<ObservationGetPayload<T> | null, null>

    /**
     * Find one Observation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ObservationFindUniqueOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ObservationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ObservationFindUniqueOrThrowArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Find the first Observation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ObservationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ObservationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Observation'> extends True ? Prisma__ObservationClient<ObservationGetPayload<T>> : Prisma__ObservationClient<ObservationGetPayload<T> | null, null>

    /**
     * Find the first Observation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ObservationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ObservationFindFirstOrThrowArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Find zero or more Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Observations
     * const observations = await prisma.observation.findMany()
     * 
     * // Get first 10 Observations
     * const observations = await prisma.observation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationWithIdOnly = await prisma.observation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ObservationFindManyArgs>(
      args?: SelectSubset<T, ObservationFindManyArgs>
    ): PrismaPromise<Array<ObservationGetPayload<T>>>

    /**
     * Create a Observation.
     * @param {ObservationCreateArgs} args - Arguments to create a Observation.
     * @example
     * // Create one Observation
     * const Observation = await prisma.observation.create({
     *   data: {
     *     // ... data to create a Observation
     *   }
     * })
     * 
    **/
    create<T extends ObservationCreateArgs>(
      args: SelectSubset<T, ObservationCreateArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Create many Observations.
     *     @param {ObservationCreateManyArgs} args - Arguments to create many Observations.
     *     @example
     *     // Create many Observations
     *     const observation = await prisma.observation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ObservationCreateManyArgs>(
      args?: SelectSubset<T, ObservationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Observation.
     * @param {ObservationDeleteArgs} args - Arguments to delete one Observation.
     * @example
     * // Delete one Observation
     * const Observation = await prisma.observation.delete({
     *   where: {
     *     // ... filter to delete one Observation
     *   }
     * })
     * 
    **/
    delete<T extends ObservationDeleteArgs>(
      args: SelectSubset<T, ObservationDeleteArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Update one Observation.
     * @param {ObservationUpdateArgs} args - Arguments to update one Observation.
     * @example
     * // Update one Observation
     * const observation = await prisma.observation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ObservationUpdateArgs>(
      args: SelectSubset<T, ObservationUpdateArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Delete zero or more Observations.
     * @param {ObservationDeleteManyArgs} args - Arguments to filter Observations to delete.
     * @example
     * // Delete a few Observations
     * const { count } = await prisma.observation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ObservationDeleteManyArgs>(
      args?: SelectSubset<T, ObservationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ObservationUpdateManyArgs>(
      args: SelectSubset<T, ObservationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Observation.
     * @param {ObservationUpsertArgs} args - Arguments to update or create a Observation.
     * @example
     * // Update or create a Observation
     * const observation = await prisma.observation.upsert({
     *   create: {
     *     // ... data to create a Observation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Observation we want to update
     *   }
     * })
    **/
    upsert<T extends ObservationUpsertArgs>(
      args: SelectSubset<T, ObservationUpsertArgs>
    ): Prisma__ObservationClient<ObservationGetPayload<T>>

    /**
     * Count the number of Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationCountArgs} args - Arguments to filter Observations to count.
     * @example
     * // Count the number of Observations
     * const count = await prisma.observation.count({
     *   where: {
     *     // ... the filter for the Observations we want to count
     *   }
     * })
    **/
    count<T extends ObservationCountArgs>(
      args?: Subset<T, ObservationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObservationAggregateArgs>(args: Subset<T, ObservationAggregateArgs>): PrismaPromise<GetObservationAggregateType<T>>

    /**
     * Group by Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationGroupByArgs['orderBy'] }
        : { orderBy?: ObservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Observation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ObservationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Observation base type for findUnique actions
   */
  export type ObservationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter, which Observation to fetch.
     * 
    **/
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findUnique
   */
  export interface ObservationFindUniqueArgs extends ObservationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Observation findUniqueOrThrow
   */
  export type ObservationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter, which Observation to fetch.
     * 
    **/
    where: ObservationWhereUniqueInput
  }


  /**
   * Observation base type for findFirst actions
   */
  export type ObservationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter, which Observation to fetch.
     * 
    **/
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     * 
    **/
    orderBy?: Enumerable<ObservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     * 
    **/
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     * 
    **/
    distinct?: Enumerable<ObservationScalarFieldEnum>
  }

  /**
   * Observation findFirst
   */
  export interface ObservationFindFirstArgs extends ObservationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Observation findFirstOrThrow
   */
  export type ObservationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter, which Observation to fetch.
     * 
    **/
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     * 
    **/
    orderBy?: Enumerable<ObservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     * 
    **/
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     * 
    **/
    distinct?: Enumerable<ObservationScalarFieldEnum>
  }


  /**
   * Observation findMany
   */
  export type ObservationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter, which Observations to fetch.
     * 
    **/
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     * 
    **/
    orderBy?: Enumerable<ObservationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Observations.
     * 
    **/
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ObservationScalarFieldEnum>
  }


  /**
   * Observation create
   */
  export type ObservationCreateArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * The data needed to create a Observation.
     * 
    **/
    data: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
  }


  /**
   * Observation createMany
   */
  export type ObservationCreateManyArgs = {
    /**
     * The data used to create many Observations.
     * 
    **/
    data: Enumerable<ObservationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Observation update
   */
  export type ObservationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * The data needed to update a Observation.
     * 
    **/
    data: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
    /**
     * Choose, which Observation to update.
     * 
    **/
    where: ObservationWhereUniqueInput
  }


  /**
   * Observation updateMany
   */
  export type ObservationUpdateManyArgs = {
    /**
     * The data used to update Observations.
     * 
    **/
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     * 
    **/
    where?: ObservationWhereInput
  }


  /**
   * Observation upsert
   */
  export type ObservationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * The filter to search for the Observation to update in case it exists.
     * 
    **/
    where: ObservationWhereUniqueInput
    /**
     * In case the Observation found by the `where` argument doesn't exist, create a new Observation with this data.
     * 
    **/
    create: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
    /**
     * In case the Observation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
  }


  /**
   * Observation delete
   */
  export type ObservationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
    /**
     * Filter which Observation to delete.
     * 
    **/
    where: ObservationWhereUniqueInput
  }


  /**
   * Observation deleteMany
   */
  export type ObservationDeleteManyArgs = {
    /**
     * Filter which Observations to delete
     * 
    **/
    where?: ObservationWhereInput
  }


  /**
   * Observation without action
   */
  export type ObservationArgs = {
    /**
     * Select specific fields to fetch from the Observation
     * 
    **/
    select?: ObservationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ObservationInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    personId: string | null
    publicPlace: string | null
    number: string | null
    district: string | null
    city: string | null
    CEP: string | null
    complement: string | null
    reference: string | null
  }

  export type AddressMaxAggregateOutputType = {
    personId: string | null
    publicPlace: string | null
    number: string | null
    district: string | null
    city: string | null
    CEP: string | null
    complement: string | null
    reference: string | null
  }

  export type AddressCountAggregateOutputType = {
    personId: number
    publicPlace: number
    number: number
    district: number
    city: number
    CEP: number
    complement: number
    reference: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    personId?: true
    publicPlace?: true
    number?: true
    district?: true
    city?: true
    CEP?: true
    complement?: true
    reference?: true
  }

  export type AddressMaxAggregateInputType = {
    personId?: true
    publicPlace?: true
    number?: true
    district?: true
    city?: true
    CEP?: true
    complement?: true
    reference?: true
  }

  export type AddressCountAggregateInputType = {
    personId?: true
    publicPlace?: true
    number?: true
    district?: true
    city?: true
    CEP?: true
    complement?: true
    reference?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    personId: string
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement: string | null
    reference: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    personId?: boolean
    publicPlace?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    CEP?: boolean
    complement?: boolean
    reference?: boolean
    Person?: boolean | PersonArgs
  }


  export type AddressInclude = {
    Person?: boolean | PersonArgs
  } 

  export type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Address :
    S extends undefined ? never :
    S extends { include: any } & (AddressArgs | AddressFindManyArgs)
    ? Address  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AddressArgs | AddressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
      : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const addressWithPersonIdOnly = await prisma.address.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): PrismaPromise<Array<AddressGetPayload<T>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Contact
   */


  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    type: CONTACT_TYPE | null
    data: string | null
    observation: string | null
    personId: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    type: CONTACT_TYPE | null
    data: string | null
    observation: string | null
    personId: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    type: number
    data: number
    observation: number
    personId: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    type?: true
    data?: true
    observation?: true
    personId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    type?: true
    data?: true
    observation?: true
    personId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    type?: true
    data?: true
    observation?: true
    personId?: true
    _all?: true
  }

  export type ContactAggregateArgs = {
    /**
     * Filter which Contact to aggregate.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs = {
    where?: ContactWhereInput
    orderBy?: Enumerable<ContactOrderByWithAggregationInput>
    by: Array<ContactScalarFieldEnum>
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }


  export type ContactGroupByOutputType = {
    id: string
    type: CONTACT_TYPE
    data: string
    observation: string | null
    personId: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect = {
    id?: boolean
    type?: boolean
    data?: boolean
    observation?: boolean
    personId?: boolean
    Person?: boolean | PersonArgs
  }


  export type ContactInclude = {
    Person?: boolean | PersonArgs
  } 

  export type ContactGetPayload<S extends boolean | null | undefined | ContactArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Contact :
    S extends undefined ? never :
    S extends { include: any } & (ContactArgs | ContactFindManyArgs)
    ? Contact  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContactArgs | ContactFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Contact ? Contact[P] : never
  } 
      : Contact


  type ContactCountArgs = Merge<
    Omit<ContactFindManyArgs, 'select' | 'include'> & {
      select?: ContactCountAggregateInputType | true
    }
  >

  export interface ContactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContactFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contact'> extends True ? Prisma__ContactClient<ContactGetPayload<T>> : Prisma__ContactClient<ContactGetPayload<T> | null, null>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContactFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contact'> extends True ? Prisma__ContactClient<ContactGetPayload<T>> : Prisma__ContactClient<ContactGetPayload<T> | null, null>

    /**
     * Find the first Contact that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs>(
      args?: SelectSubset<T, ContactFindManyArgs>
    ): PrismaPromise<Array<ContactGetPayload<T>>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs>(
      args: SelectSubset<T, ContactCreateArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs>(
      args?: SelectSubset<T, ContactCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs>(
      args: SelectSubset<T, ContactDeleteArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs>(
      args: SelectSubset<T, ContactUpdateArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs>(
      args?: SelectSubset<T, ContactDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs>(
      args: SelectSubset<T, ContactUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs>(
      args: SelectSubset<T, ContactUpsertArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContactClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Contact base type for findUnique actions
   */
  export type ContactFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUnique
   */
  export interface ContactFindUniqueArgs extends ContactFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact base type for findFirst actions
   */
  export type ContactFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     * 
    **/
    distinct?: Enumerable<ContactScalarFieldEnum>
  }

  /**
   * Contact findFirst
   */
  export interface ContactFindFirstArgs extends ContactFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     * 
    **/
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter, which Contacts to fetch.
     * 
    **/
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     * 
    **/
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The data needed to create a Contact.
     * 
    **/
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs = {
    /**
     * The data used to create many Contacts.
     * 
    **/
    data: Enumerable<ContactCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The data needed to update a Contact.
     * 
    **/
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs = {
    /**
     * The data used to update Contacts.
     * 
    **/
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     * 
    **/
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * The filter to search for the Contact to update in case it exists.
     * 
    **/
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     * 
    **/
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
    /**
     * Filter which Contact to delete.
     * 
    **/
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs = {
    /**
     * Filter which Contacts to delete
     * 
    **/
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactArgs = {
    /**
     * Select specific fields to fetch from the Contact
     * 
    **/
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContactInclude | null
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    personId: string | null
    costumerId: string | null
    contractId: string | null
  }

  export type PatientMaxAggregateOutputType = {
    personId: string | null
    costumerId: string | null
    contractId: string | null
  }

  export type PatientCountAggregateOutputType = {
    personId: number
    costumerId: number
    contractId: number
    diseases: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    personId?: true
    costumerId?: true
    contractId?: true
  }

  export type PatientMaxAggregateInputType = {
    personId?: true
    costumerId?: true
    contractId?: true
  }

  export type PatientCountAggregateInputType = {
    personId?: true
    costumerId?: true
    contractId?: true
    diseases?: true
    _all?: true
  }

  export type PatientAggregateArgs = {
    /**
     * Filter which Patient to aggregate.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs = {
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithAggregationInput>
    by: Array<PatientScalarFieldEnum>
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }


  export type PatientGroupByOutputType = {
    personId: string
    costumerId: string | null
    contractId: string | null
    diseases: DISEASE[]
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect = {
    personId?: boolean
    costumerId?: boolean
    contractId?: boolean
    Person?: boolean | PersonArgs
    Costumer?: boolean | CostumerArgs
    Contract?: boolean | ContractArgs
    diseases?: boolean
  }


  export type PatientInclude = {
    Person?: boolean | PersonArgs
    Costumer?: boolean | CostumerArgs
    Contract?: boolean | ContractArgs
  } 

  export type PatientGetPayload<S extends boolean | null | undefined | PatientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Patient :
    S extends undefined ? never :
    S extends { include: any } & (PatientArgs | PatientFindManyArgs)
    ? Patient  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :
        P extends 'Costumer' ? CostumerGetPayload<S['include'][P]> | null :
        P extends 'Contract' ? ContractGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (PatientArgs | PatientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :
        P extends 'Costumer' ? CostumerGetPayload<S['select'][P]> | null :
        P extends 'Contract' ? ContractGetPayload<S['select'][P]> | null :  P extends keyof Patient ? Patient[P] : never
  } 
      : Patient


  type PatientCountArgs = Merge<
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }
  >

  export interface PatientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T>> : Prisma__PatientClient<PatientGetPayload<T> | null, null>

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T>> : Prisma__PatientClient<PatientGetPayload<T> | null, null>

    /**
     * Find the first Patient that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const patientWithPersonIdOnly = await prisma.patient.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs>(
      args?: SelectSubset<T, PatientFindManyArgs>
    ): PrismaPromise<Array<PatientGetPayload<T>>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs>(
      args: SelectSubset<T, PatientCreateArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs>(
      args?: SelectSubset<T, PatientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs>(
      args: SelectSubset<T, PatientDeleteArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs>(
      args: SelectSubset<T, PatientUpdateArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs>(
      args?: SelectSubset<T, PatientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs>(
      args: SelectSubset<T, PatientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs>(
      args: SelectSubset<T, PatientUpsertArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    Costumer<T extends CostumerArgs= {}>(args?: Subset<T, CostumerArgs>): Prisma__CostumerClient<CostumerGetPayload<T> | Null>;

    Contract<T extends ContractArgs= {}>(args?: Subset<T, ContractArgs>): Prisma__ContractClient<ContractGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Patient base type for findUnique actions
   */
  export type PatientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUnique
   */
  export interface PatientFindUniqueArgs extends PatientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient base type for findFirst actions
   */
  export type PatientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     * 
    **/
    distinct?: Enumerable<PatientScalarFieldEnum>
  }

  /**
   * Patient findFirst
   */
  export interface PatientFindFirstArgs extends PatientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     * 
    **/
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patients to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The data needed to create a Patient.
     * 
    **/
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs = {
    /**
     * The data used to create many Patients.
     * 
    **/
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The data needed to update a Patient.
     * 
    **/
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs = {
    /**
     * The data used to update Patients.
     * 
    **/
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The filter to search for the Patient to update in case it exists.
     * 
    **/
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     * 
    **/
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter which Patient to delete.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs = {
    /**
     * Filter which Patients to delete
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
  }



  /**
   * Model BankAccount
   */


  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: BANK_ACCOUNT_TYPE | null
    agency: string | null
    account: string | null
    digit: string | null
    personId: string | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: BANK_ACCOUNT_TYPE | null
    agency: string | null
    account: string | null
    digit: string | null
    personId: string | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    name: number
    type: number
    agency: number
    account: number
    digit: number
    personId: number
    _all: number
  }


  export type BankAccountMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    agency?: true
    account?: true
    digit?: true
    personId?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    agency?: true
    account?: true
    digit?: true
    personId?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    agency?: true
    account?: true
    digit?: true
    personId?: true
    _all?: true
  }

  export type BankAccountAggregateArgs = {
    /**
     * Filter which BankAccount to aggregate.
     * 
    **/
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs = {
    where?: BankAccountWhereInput
    orderBy?: Enumerable<BankAccountOrderByWithAggregationInput>
    by: Array<BankAccountScalarFieldEnum>
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }


  export type BankAccountGroupByOutputType = {
    id: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
    personId: string
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    agency?: boolean
    account?: boolean
    digit?: boolean
    personId?: boolean
    Person?: boolean | PersonArgs
  }


  export type BankAccountInclude = {
    Person?: boolean | PersonArgs
  } 

  export type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BankAccount :
    S extends undefined ? never :
    S extends { include: any } & (BankAccountArgs | BankAccountFindManyArgs)
    ? BankAccount  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BankAccountArgs | BankAccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :  P extends keyof BankAccount ? BankAccount[P] : never
  } 
      : BankAccount


  type BankAccountCountArgs = Merge<
    Omit<BankAccountFindManyArgs, 'select' | 'include'> & {
      select?: BankAccountCountAggregateInputType | true
    }
  >

  export interface BankAccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BankAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BankAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BankAccount'> extends True ? Prisma__BankAccountClient<BankAccountGetPayload<T>> : Prisma__BankAccountClient<BankAccountGetPayload<T> | null, null>

    /**
     * Find one BankAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BankAccountFindUniqueOrThrowArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BankAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BankAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BankAccount'> extends True ? Prisma__BankAccountClient<BankAccountGetPayload<T>> : Prisma__BankAccountClient<BankAccountGetPayload<T> | null, null>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BankAccountFindManyArgs>(
      args?: SelectSubset<T, BankAccountFindManyArgs>
    ): PrismaPromise<Array<BankAccountGetPayload<T>>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
    **/
    create<T extends BankAccountCreateArgs>(
      args: SelectSubset<T, BankAccountCreateArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Create many BankAccounts.
     *     @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     *     @example
     *     // Create many BankAccounts
     *     const bankAccount = await prisma.bankAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BankAccountCreateManyArgs>(
      args?: SelectSubset<T, BankAccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
    **/
    delete<T extends BankAccountDeleteArgs>(
      args: SelectSubset<T, BankAccountDeleteArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BankAccountUpdateArgs>(
      args: SelectSubset<T, BankAccountUpdateArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BankAccountDeleteManyArgs>(
      args?: SelectSubset<T, BankAccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BankAccountUpdateManyArgs>(
      args: SelectSubset<T, BankAccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
    **/
    upsert<T extends BankAccountUpsertArgs>(
      args: SelectSubset<T, BankAccountUpsertArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BankAccountClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BankAccount base type for findUnique actions
   */
  export type BankAccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     * 
    **/
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUnique
   */
  export interface BankAccountFindUniqueArgs extends BankAccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     * 
    **/
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount base type for findFirst actions
   */
  export type BankAccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     * 
    **/
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     * 
    **/
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     * 
    **/
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }

  /**
   * BankAccount findFirst
   */
  export interface BankAccountFindFirstArgs extends BankAccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     * 
    **/
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     * 
    **/
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     * 
    **/
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }


  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccounts to fetch.
     * 
    **/
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     * 
    **/
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }


  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * The data needed to create a BankAccount.
     * 
    **/
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }


  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs = {
    /**
     * The data used to create many BankAccounts.
     * 
    **/
    data: Enumerable<BankAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * The data needed to update a BankAccount.
     * 
    **/
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     * 
    **/
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs = {
    /**
     * The data used to update BankAccounts.
     * 
    **/
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     * 
    **/
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     * 
    **/
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     * 
    **/
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }


  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
    /**
     * Filter which BankAccount to delete.
     * 
    **/
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs = {
    /**
     * Filter which BankAccounts to delete
     * 
    **/
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount without action
   */
  export type BankAccountArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     * 
    **/
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BankAccountInclude | null
  }



  /**
   * Model Body
   */


  export type AggregateBody = {
    _count: BodyCountAggregateOutputType | null
    _min: BodyMinAggregateOutputType | null
    _max: BodyMaxAggregateOutputType | null
  }

  export type BodyMinAggregateOutputType = {
    personId: string | null
    weight: WEIGHT | null
    height: HEIGHT | null
    mannequinn: MANNEQUINN | null
  }

  export type BodyMaxAggregateOutputType = {
    personId: string | null
    weight: WEIGHT | null
    height: HEIGHT | null
    mannequinn: MANNEQUINN | null
  }

  export type BodyCountAggregateOutputType = {
    personId: number
    weight: number
    height: number
    mannequinn: number
    _all: number
  }


  export type BodyMinAggregateInputType = {
    personId?: true
    weight?: true
    height?: true
    mannequinn?: true
  }

  export type BodyMaxAggregateInputType = {
    personId?: true
    weight?: true
    height?: true
    mannequinn?: true
  }

  export type BodyCountAggregateInputType = {
    personId?: true
    weight?: true
    height?: true
    mannequinn?: true
    _all?: true
  }

  export type BodyAggregateArgs = {
    /**
     * Filter which Body to aggregate.
     * 
    **/
    where?: BodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bodies to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bodies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bodies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bodies
    **/
    _count?: true | BodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMaxAggregateInputType
  }

  export type GetBodyAggregateType<T extends BodyAggregateArgs> = {
        [P in keyof T & keyof AggregateBody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBody[P]>
      : GetScalarType<T[P], AggregateBody[P]>
  }




  export type BodyGroupByArgs = {
    where?: BodyWhereInput
    orderBy?: Enumerable<BodyOrderByWithAggregationInput>
    by: Array<BodyScalarFieldEnum>
    having?: BodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyCountAggregateInputType | true
    _min?: BodyMinAggregateInputType
    _max?: BodyMaxAggregateInputType
  }


  export type BodyGroupByOutputType = {
    personId: string
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
    _count: BodyCountAggregateOutputType | null
    _min: BodyMinAggregateOutputType | null
    _max: BodyMaxAggregateOutputType | null
  }

  type GetBodyGroupByPayload<T extends BodyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyGroupByOutputType[P]>
            : GetScalarType<T[P], BodyGroupByOutputType[P]>
        }
      >
    >


  export type BodySelect = {
    personId?: boolean
    weight?: boolean
    height?: boolean
    mannequinn?: boolean
    person?: boolean | PersonArgs
  }


  export type BodyInclude = {
    person?: boolean | PersonArgs
  } 

  export type BodyGetPayload<S extends boolean | null | undefined | BodyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Body :
    S extends undefined ? never :
    S extends { include: any } & (BodyArgs | BodyFindManyArgs)
    ? Body  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BodyArgs | BodyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'person' ? PersonGetPayload<S['select'][P]> :  P extends keyof Body ? Body[P] : never
  } 
      : Body


  type BodyCountArgs = Merge<
    Omit<BodyFindManyArgs, 'select' | 'include'> & {
      select?: BodyCountAggregateInputType | true
    }
  >

  export interface BodyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Body that matches the filter.
     * @param {BodyFindUniqueArgs} args - Arguments to find a Body
     * @example
     * // Get one Body
     * const body = await prisma.body.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BodyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BodyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Body'> extends True ? Prisma__BodyClient<BodyGetPayload<T>> : Prisma__BodyClient<BodyGetPayload<T> | null, null>

    /**
     * Find one Body that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BodyFindUniqueOrThrowArgs} args - Arguments to find a Body
     * @example
     * // Get one Body
     * const body = await prisma.body.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BodyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BodyFindUniqueOrThrowArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Find the first Body that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFindFirstArgs} args - Arguments to find a Body
     * @example
     * // Get one Body
     * const body = await prisma.body.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BodyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BodyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Body'> extends True ? Prisma__BodyClient<BodyGetPayload<T>> : Prisma__BodyClient<BodyGetPayload<T> | null, null>

    /**
     * Find the first Body that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFindFirstOrThrowArgs} args - Arguments to find a Body
     * @example
     * // Get one Body
     * const body = await prisma.body.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BodyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BodyFindFirstOrThrowArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Find zero or more Bodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bodies
     * const bodies = await prisma.body.findMany()
     * 
     * // Get first 10 Bodies
     * const bodies = await prisma.body.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const bodyWithPersonIdOnly = await prisma.body.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends BodyFindManyArgs>(
      args?: SelectSubset<T, BodyFindManyArgs>
    ): PrismaPromise<Array<BodyGetPayload<T>>>

    /**
     * Create a Body.
     * @param {BodyCreateArgs} args - Arguments to create a Body.
     * @example
     * // Create one Body
     * const Body = await prisma.body.create({
     *   data: {
     *     // ... data to create a Body
     *   }
     * })
     * 
    **/
    create<T extends BodyCreateArgs>(
      args: SelectSubset<T, BodyCreateArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Create many Bodies.
     *     @param {BodyCreateManyArgs} args - Arguments to create many Bodies.
     *     @example
     *     // Create many Bodies
     *     const body = await prisma.body.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BodyCreateManyArgs>(
      args?: SelectSubset<T, BodyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Body.
     * @param {BodyDeleteArgs} args - Arguments to delete one Body.
     * @example
     * // Delete one Body
     * const Body = await prisma.body.delete({
     *   where: {
     *     // ... filter to delete one Body
     *   }
     * })
     * 
    **/
    delete<T extends BodyDeleteArgs>(
      args: SelectSubset<T, BodyDeleteArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Update one Body.
     * @param {BodyUpdateArgs} args - Arguments to update one Body.
     * @example
     * // Update one Body
     * const body = await prisma.body.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BodyUpdateArgs>(
      args: SelectSubset<T, BodyUpdateArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Delete zero or more Bodies.
     * @param {BodyDeleteManyArgs} args - Arguments to filter Bodies to delete.
     * @example
     * // Delete a few Bodies
     * const { count } = await prisma.body.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BodyDeleteManyArgs>(
      args?: SelectSubset<T, BodyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bodies
     * const body = await prisma.body.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BodyUpdateManyArgs>(
      args: SelectSubset<T, BodyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Body.
     * @param {BodyUpsertArgs} args - Arguments to update or create a Body.
     * @example
     * // Update or create a Body
     * const body = await prisma.body.upsert({
     *   create: {
     *     // ... data to create a Body
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Body we want to update
     *   }
     * })
    **/
    upsert<T extends BodyUpsertArgs>(
      args: SelectSubset<T, BodyUpsertArgs>
    ): Prisma__BodyClient<BodyGetPayload<T>>

    /**
     * Count the number of Bodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyCountArgs} args - Arguments to filter Bodies to count.
     * @example
     * // Count the number of Bodies
     * const count = await prisma.body.count({
     *   where: {
     *     // ... the filter for the Bodies we want to count
     *   }
     * })
    **/
    count<T extends BodyCountArgs>(
      args?: Subset<T, BodyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Body.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BodyAggregateArgs>(args: Subset<T, BodyAggregateArgs>): PrismaPromise<GetBodyAggregateType<T>>

    /**
     * Group by Body.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyGroupByArgs['orderBy'] }
        : { orderBy?: BodyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Body.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BodyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Body base type for findUnique actions
   */
  export type BodyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter, which Body to fetch.
     * 
    **/
    where: BodyWhereUniqueInput
  }

  /**
   * Body findUnique
   */
  export interface BodyFindUniqueArgs extends BodyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Body findUniqueOrThrow
   */
  export type BodyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter, which Body to fetch.
     * 
    **/
    where: BodyWhereUniqueInput
  }


  /**
   * Body base type for findFirst actions
   */
  export type BodyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter, which Body to fetch.
     * 
    **/
    where?: BodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bodies to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bodies.
     * 
    **/
    cursor?: BodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bodies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bodies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bodies.
     * 
    **/
    distinct?: Enumerable<BodyScalarFieldEnum>
  }

  /**
   * Body findFirst
   */
  export interface BodyFindFirstArgs extends BodyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Body findFirstOrThrow
   */
  export type BodyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter, which Body to fetch.
     * 
    **/
    where?: BodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bodies to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bodies.
     * 
    **/
    cursor?: BodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bodies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bodies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bodies.
     * 
    **/
    distinct?: Enumerable<BodyScalarFieldEnum>
  }


  /**
   * Body findMany
   */
  export type BodyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter, which Bodies to fetch.
     * 
    **/
    where?: BodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bodies to fetch.
     * 
    **/
    orderBy?: Enumerable<BodyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bodies.
     * 
    **/
    cursor?: BodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bodies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bodies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BodyScalarFieldEnum>
  }


  /**
   * Body create
   */
  export type BodyCreateArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * The data needed to create a Body.
     * 
    **/
    data: XOR<BodyCreateInput, BodyUncheckedCreateInput>
  }


  /**
   * Body createMany
   */
  export type BodyCreateManyArgs = {
    /**
     * The data used to create many Bodies.
     * 
    **/
    data: Enumerable<BodyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Body update
   */
  export type BodyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * The data needed to update a Body.
     * 
    **/
    data: XOR<BodyUpdateInput, BodyUncheckedUpdateInput>
    /**
     * Choose, which Body to update.
     * 
    **/
    where: BodyWhereUniqueInput
  }


  /**
   * Body updateMany
   */
  export type BodyUpdateManyArgs = {
    /**
     * The data used to update Bodies.
     * 
    **/
    data: XOR<BodyUpdateManyMutationInput, BodyUncheckedUpdateManyInput>
    /**
     * Filter which Bodies to update
     * 
    **/
    where?: BodyWhereInput
  }


  /**
   * Body upsert
   */
  export type BodyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * The filter to search for the Body to update in case it exists.
     * 
    **/
    where: BodyWhereUniqueInput
    /**
     * In case the Body found by the `where` argument doesn't exist, create a new Body with this data.
     * 
    **/
    create: XOR<BodyCreateInput, BodyUncheckedCreateInput>
    /**
     * In case the Body was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BodyUpdateInput, BodyUncheckedUpdateInput>
  }


  /**
   * Body delete
   */
  export type BodyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
    /**
     * Filter which Body to delete.
     * 
    **/
    where: BodyWhereUniqueInput
  }


  /**
   * Body deleteMany
   */
  export type BodyDeleteManyArgs = {
    /**
     * Filter which Bodies to delete
     * 
    **/
    where?: BodyWhereInput
  }


  /**
   * Body without action
   */
  export type BodyArgs = {
    /**
     * Select specific fields to fetch from the Body
     * 
    **/
    select?: BodySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BodyInclude | null
  }



  /**
   * Model Contract
   */


  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    costumerId: string | null
    timeScale: TIME_SCALE | null
    initAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    acceptedAt: Date | null
    canceledAt: Date | null
    value: string | null
    salary: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    costumerId: string | null
    timeScale: TIME_SCALE | null
    initAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    acceptedAt: Date | null
    canceledAt: Date | null
    value: string | null
    salary: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    costumerId: number
    timeScale: number
    initAt: number
    endAt: number
    createdAt: number
    acceptedAt: number
    canceledAt: number
    value: number
    salary: number
    archives: number
    _all: number
  }


  export type ContractMinAggregateInputType = {
    id?: true
    costumerId?: true
    timeScale?: true
    initAt?: true
    endAt?: true
    createdAt?: true
    acceptedAt?: true
    canceledAt?: true
    value?: true
    salary?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    costumerId?: true
    timeScale?: true
    initAt?: true
    endAt?: true
    createdAt?: true
    acceptedAt?: true
    canceledAt?: true
    value?: true
    salary?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    costumerId?: true
    timeScale?: true
    initAt?: true
    endAt?: true
    createdAt?: true
    acceptedAt?: true
    canceledAt?: true
    value?: true
    salary?: true
    archives?: true
    _all?: true
  }

  export type ContractAggregateArgs = {
    /**
     * Filter which Contract to aggregate.
     * 
    **/
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs = {
    where?: ContractWhereInput
    orderBy?: Enumerable<ContractOrderByWithAggregationInput>
    by: Array<ContractScalarFieldEnum>
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }


  export type ContractGroupByOutputType = {
    id: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date
    endAt: Date
    createdAt: Date | null
    acceptedAt: Date | null
    canceledAt: Date | null
    value: string
    salary: string
    archives: string[]
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect = {
    id?: boolean
    costumerId?: boolean
    timeScale?: boolean
    initAt?: boolean
    endAt?: boolean
    createdAt?: boolean
    acceptedAt?: boolean
    canceledAt?: boolean
    value?: boolean
    salary?: boolean
    archives?: boolean
    Payments?: boolean | ContractPaymentsArgs
    Patients?: boolean | ContractPatientsArgs
    Costumer?: boolean | CostumerArgs
    ContractJourney?: boolean | ContractContractJourneyArgs
    CaregiverToContract?: boolean | ContractCaregiverToContractArgs
    _count?: boolean | ContractCountOutputTypeArgs
  }


  export type ContractInclude = {
    Payments?: boolean | ContractPaymentsArgs
    Patients?: boolean | ContractPatientsArgs
    Costumer?: boolean | CostumerArgs
    ContractJourney?: boolean | ContractContractJourneyArgs
    CaregiverToContract?: boolean | ContractCaregiverToContractArgs
    _count?: boolean | ContractCountOutputTypeArgs
  } 

  export type ContractGetPayload<S extends boolean | null | undefined | ContractArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Contract :
    S extends undefined ? never :
    S extends { include: any } & (ContractArgs | ContractFindManyArgs)
    ? Contract  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Payments' ? Array < ContractPaymentGetPayload<S['include'][P]>>  :
        P extends 'Patients' ? Array < PatientGetPayload<S['include'][P]>>  :
        P extends 'Costumer' ? CostumerGetPayload<S['include'][P]> :
        P extends 'ContractJourney' ? Array < ContractJourneyGetPayload<S['include'][P]>>  :
        P extends 'CaregiverToContract' ? Array < CaregiverToContractGetPayload<S['include'][P]>>  :
        P extends '_count' ? ContractCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContractArgs | ContractFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Payments' ? Array < ContractPaymentGetPayload<S['select'][P]>>  :
        P extends 'Patients' ? Array < PatientGetPayload<S['select'][P]>>  :
        P extends 'Costumer' ? CostumerGetPayload<S['select'][P]> :
        P extends 'ContractJourney' ? Array < ContractJourneyGetPayload<S['select'][P]>>  :
        P extends 'CaregiverToContract' ? Array < CaregiverToContractGetPayload<S['select'][P]>>  :
        P extends '_count' ? ContractCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Contract ? Contract[P] : never
  } 
      : Contract


  type ContractCountArgs = Merge<
    Omit<ContractFindManyArgs, 'select' | 'include'> & {
      select?: ContractCountAggregateInputType | true
    }
  >

  export interface ContractDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContractFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contract'> extends True ? Prisma__ContractClient<ContractGetPayload<T>> : Prisma__ContractClient<ContractGetPayload<T> | null, null>

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContractFindUniqueOrThrowArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContractFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contract'> extends True ? Prisma__ContractClient<ContractGetPayload<T>> : Prisma__ContractClient<ContractGetPayload<T> | null, null>

    /**
     * Find the first Contract that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContractFindFirstOrThrowArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractFindManyArgs>(
      args?: SelectSubset<T, ContractFindManyArgs>
    ): PrismaPromise<Array<ContractGetPayload<T>>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
    **/
    create<T extends ContractCreateArgs>(
      args: SelectSubset<T, ContractCreateArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Create many Contracts.
     *     @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractCreateManyArgs>(
      args?: SelectSubset<T, ContractCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
    **/
    delete<T extends ContractDeleteArgs>(
      args: SelectSubset<T, ContractDeleteArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractUpdateArgs>(
      args: SelectSubset<T, ContractUpdateArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractDeleteManyArgs>(
      args?: SelectSubset<T, ContractDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractUpdateManyArgs>(
      args: SelectSubset<T, ContractUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
    **/
    upsert<T extends ContractUpsertArgs>(
      args: SelectSubset<T, ContractUpsertArgs>
    ): Prisma__ContractClient<ContractGetPayload<T>>

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContractClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Payments<T extends ContractPaymentsArgs= {}>(args?: Subset<T, ContractPaymentsArgs>): PrismaPromise<Array<ContractPaymentGetPayload<T>>| Null>;

    Patients<T extends ContractPatientsArgs= {}>(args?: Subset<T, ContractPatientsArgs>): PrismaPromise<Array<PatientGetPayload<T>>| Null>;

    Costumer<T extends CostumerArgs= {}>(args?: Subset<T, CostumerArgs>): Prisma__CostumerClient<CostumerGetPayload<T> | Null>;

    ContractJourney<T extends ContractContractJourneyArgs= {}>(args?: Subset<T, ContractContractJourneyArgs>): PrismaPromise<Array<ContractJourneyGetPayload<T>>| Null>;

    CaregiverToContract<T extends ContractCaregiverToContractArgs= {}>(args?: Subset<T, ContractCaregiverToContractArgs>): PrismaPromise<Array<CaregiverToContractGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Contract base type for findUnique actions
   */
  export type ContractFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter, which Contract to fetch.
     * 
    **/
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUnique
   */
  export interface ContractFindUniqueArgs extends ContractFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter, which Contract to fetch.
     * 
    **/
    where: ContractWhereUniqueInput
  }


  /**
   * Contract base type for findFirst actions
   */
  export type ContractFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter, which Contract to fetch.
     * 
    **/
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     * 
    **/
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     * 
    **/
    distinct?: Enumerable<ContractScalarFieldEnum>
  }

  /**
   * Contract findFirst
   */
  export interface ContractFindFirstArgs extends ContractFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter, which Contract to fetch.
     * 
    **/
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     * 
    **/
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     * 
    **/
    distinct?: Enumerable<ContractScalarFieldEnum>
  }


  /**
   * Contract findMany
   */
  export type ContractFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter, which Contracts to fetch.
     * 
    **/
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     * 
    **/
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContractScalarFieldEnum>
  }


  /**
   * Contract create
   */
  export type ContractCreateArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * The data needed to create a Contract.
     * 
    **/
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }


  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs = {
    /**
     * The data used to create many Contracts.
     * 
    **/
    data: Enumerable<ContractCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contract update
   */
  export type ContractUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * The data needed to update a Contract.
     * 
    **/
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     * 
    **/
    where: ContractWhereUniqueInput
  }


  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs = {
    /**
     * The data used to update Contracts.
     * 
    **/
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     * 
    **/
    where?: ContractWhereInput
  }


  /**
   * Contract upsert
   */
  export type ContractUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * The filter to search for the Contract to update in case it exists.
     * 
    **/
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     * 
    **/
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }


  /**
   * Contract delete
   */
  export type ContractDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    /**
     * Filter which Contract to delete.
     * 
    **/
    where: ContractWhereUniqueInput
  }


  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs = {
    /**
     * Filter which Contracts to delete
     * 
    **/
    where?: ContractWhereInput
  }


  /**
   * Contract.Payments
   */
  export type ContractPaymentsArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    where?: ContractPaymentWhereInput
    orderBy?: Enumerable<ContractPaymentOrderByWithRelationInput>
    cursor?: ContractPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContractPaymentScalarFieldEnum>
  }


  /**
   * Contract.Patients
   */
  export type ContractPatientsArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Contract.ContractJourney
   */
  export type ContractContractJourneyArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    where?: ContractJourneyWhereInput
    orderBy?: Enumerable<ContractJourneyOrderByWithRelationInput>
    cursor?: ContractJourneyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContractJourneyScalarFieldEnum>
  }


  /**
   * Contract.CaregiverToContract
   */
  export type ContractCaregiverToContractArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    where?: CaregiverToContractWhereInput
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    cursor?: CaregiverToContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CaregiverToContractScalarFieldEnum>
  }


  /**
   * Contract without action
   */
  export type ContractArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
  }



  /**
   * Model ContractPayment
   */


  export type AggregateContractPayment = {
    _count: ContractPaymentCountAggregateOutputType | null
    _min: ContractPaymentMinAggregateOutputType | null
    _max: ContractPaymentMaxAggregateOutputType | null
  }

  export type ContractPaymentMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    value: string | null
    createdAt: Date | null
    proof: string | null
  }

  export type ContractPaymentMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    value: string | null
    createdAt: Date | null
    proof: string | null
  }

  export type ContractPaymentCountAggregateOutputType = {
    id: number
    contractId: number
    value: number
    createdAt: number
    proof: number
    _all: number
  }


  export type ContractPaymentMinAggregateInputType = {
    id?: true
    contractId?: true
    value?: true
    createdAt?: true
    proof?: true
  }

  export type ContractPaymentMaxAggregateInputType = {
    id?: true
    contractId?: true
    value?: true
    createdAt?: true
    proof?: true
  }

  export type ContractPaymentCountAggregateInputType = {
    id?: true
    contractId?: true
    value?: true
    createdAt?: true
    proof?: true
    _all?: true
  }

  export type ContractPaymentAggregateArgs = {
    /**
     * Filter which ContractPayment to aggregate.
     * 
    **/
    where?: ContractPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContractPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractPayments
    **/
    _count?: true | ContractPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractPaymentMaxAggregateInputType
  }

  export type GetContractPaymentAggregateType<T extends ContractPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateContractPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractPayment[P]>
      : GetScalarType<T[P], AggregateContractPayment[P]>
  }




  export type ContractPaymentGroupByArgs = {
    where?: ContractPaymentWhereInput
    orderBy?: Enumerable<ContractPaymentOrderByWithAggregationInput>
    by: Array<ContractPaymentScalarFieldEnum>
    having?: ContractPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractPaymentCountAggregateInputType | true
    _min?: ContractPaymentMinAggregateInputType
    _max?: ContractPaymentMaxAggregateInputType
  }


  export type ContractPaymentGroupByOutputType = {
    id: string
    contractId: string
    value: string
    createdAt: Date | null
    proof: string
    _count: ContractPaymentCountAggregateOutputType | null
    _min: ContractPaymentMinAggregateOutputType | null
    _max: ContractPaymentMaxAggregateOutputType | null
  }

  type GetContractPaymentGroupByPayload<T extends ContractPaymentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContractPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], ContractPaymentGroupByOutputType[P]>
        }
      >
    >


  export type ContractPaymentSelect = {
    id?: boolean
    contractId?: boolean
    value?: boolean
    createdAt?: boolean
    proof?: boolean
    Contract?: boolean | ContractArgs
  }


  export type ContractPaymentInclude = {
    Contract?: boolean | ContractArgs
  } 

  export type ContractPaymentGetPayload<S extends boolean | null | undefined | ContractPaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ContractPayment :
    S extends undefined ? never :
    S extends { include: any } & (ContractPaymentArgs | ContractPaymentFindManyArgs)
    ? ContractPayment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Contract' ? ContractGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContractPaymentArgs | ContractPaymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Contract' ? ContractGetPayload<S['select'][P]> :  P extends keyof ContractPayment ? ContractPayment[P] : never
  } 
      : ContractPayment


  type ContractPaymentCountArgs = Merge<
    Omit<ContractPaymentFindManyArgs, 'select' | 'include'> & {
      select?: ContractPaymentCountAggregateInputType | true
    }
  >

  export interface ContractPaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ContractPayment that matches the filter.
     * @param {ContractPaymentFindUniqueArgs} args - Arguments to find a ContractPayment
     * @example
     * // Get one ContractPayment
     * const contractPayment = await prisma.contractPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractPaymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContractPaymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ContractPayment'> extends True ? Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>> : Prisma__ContractPaymentClient<ContractPaymentGetPayload<T> | null, null>

    /**
     * Find one ContractPayment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractPaymentFindUniqueOrThrowArgs} args - Arguments to find a ContractPayment
     * @example
     * // Get one ContractPayment
     * const contractPayment = await prisma.contractPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractPaymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContractPaymentFindUniqueOrThrowArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Find the first ContractPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentFindFirstArgs} args - Arguments to find a ContractPayment
     * @example
     * // Get one ContractPayment
     * const contractPayment = await prisma.contractPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractPaymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContractPaymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ContractPayment'> extends True ? Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>> : Prisma__ContractPaymentClient<ContractPaymentGetPayload<T> | null, null>

    /**
     * Find the first ContractPayment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentFindFirstOrThrowArgs} args - Arguments to find a ContractPayment
     * @example
     * // Get one ContractPayment
     * const contractPayment = await prisma.contractPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractPaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContractPaymentFindFirstOrThrowArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Find zero or more ContractPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractPayments
     * const contractPayments = await prisma.contractPayment.findMany()
     * 
     * // Get first 10 ContractPayments
     * const contractPayments = await prisma.contractPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractPaymentWithIdOnly = await prisma.contractPayment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractPaymentFindManyArgs>(
      args?: SelectSubset<T, ContractPaymentFindManyArgs>
    ): PrismaPromise<Array<ContractPaymentGetPayload<T>>>

    /**
     * Create a ContractPayment.
     * @param {ContractPaymentCreateArgs} args - Arguments to create a ContractPayment.
     * @example
     * // Create one ContractPayment
     * const ContractPayment = await prisma.contractPayment.create({
     *   data: {
     *     // ... data to create a ContractPayment
     *   }
     * })
     * 
    **/
    create<T extends ContractPaymentCreateArgs>(
      args: SelectSubset<T, ContractPaymentCreateArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Create many ContractPayments.
     *     @param {ContractPaymentCreateManyArgs} args - Arguments to create many ContractPayments.
     *     @example
     *     // Create many ContractPayments
     *     const contractPayment = await prisma.contractPayment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractPaymentCreateManyArgs>(
      args?: SelectSubset<T, ContractPaymentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ContractPayment.
     * @param {ContractPaymentDeleteArgs} args - Arguments to delete one ContractPayment.
     * @example
     * // Delete one ContractPayment
     * const ContractPayment = await prisma.contractPayment.delete({
     *   where: {
     *     // ... filter to delete one ContractPayment
     *   }
     * })
     * 
    **/
    delete<T extends ContractPaymentDeleteArgs>(
      args: SelectSubset<T, ContractPaymentDeleteArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Update one ContractPayment.
     * @param {ContractPaymentUpdateArgs} args - Arguments to update one ContractPayment.
     * @example
     * // Update one ContractPayment
     * const contractPayment = await prisma.contractPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractPaymentUpdateArgs>(
      args: SelectSubset<T, ContractPaymentUpdateArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Delete zero or more ContractPayments.
     * @param {ContractPaymentDeleteManyArgs} args - Arguments to filter ContractPayments to delete.
     * @example
     * // Delete a few ContractPayments
     * const { count } = await prisma.contractPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractPaymentDeleteManyArgs>(
      args?: SelectSubset<T, ContractPaymentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractPayments
     * const contractPayment = await prisma.contractPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractPaymentUpdateManyArgs>(
      args: SelectSubset<T, ContractPaymentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractPayment.
     * @param {ContractPaymentUpsertArgs} args - Arguments to update or create a ContractPayment.
     * @example
     * // Update or create a ContractPayment
     * const contractPayment = await prisma.contractPayment.upsert({
     *   create: {
     *     // ... data to create a ContractPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractPayment we want to update
     *   }
     * })
    **/
    upsert<T extends ContractPaymentUpsertArgs>(
      args: SelectSubset<T, ContractPaymentUpsertArgs>
    ): Prisma__ContractPaymentClient<ContractPaymentGetPayload<T>>

    /**
     * Count the number of ContractPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentCountArgs} args - Arguments to filter ContractPayments to count.
     * @example
     * // Count the number of ContractPayments
     * const count = await prisma.contractPayment.count({
     *   where: {
     *     // ... the filter for the ContractPayments we want to count
     *   }
     * })
    **/
    count<T extends ContractPaymentCountArgs>(
      args?: Subset<T, ContractPaymentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractPaymentAggregateArgs>(args: Subset<T, ContractPaymentAggregateArgs>): PrismaPromise<GetContractPaymentAggregateType<T>>

    /**
     * Group by ContractPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractPaymentGroupByArgs['orderBy'] }
        : { orderBy?: ContractPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractPaymentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContractPaymentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Contract<T extends ContractArgs= {}>(args?: Subset<T, ContractArgs>): Prisma__ContractClient<ContractGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ContractPayment base type for findUnique actions
   */
  export type ContractPaymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter, which ContractPayment to fetch.
     * 
    **/
    where: ContractPaymentWhereUniqueInput
  }

  /**
   * ContractPayment findUnique
   */
  export interface ContractPaymentFindUniqueArgs extends ContractPaymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractPayment findUniqueOrThrow
   */
  export type ContractPaymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter, which ContractPayment to fetch.
     * 
    **/
    where: ContractPaymentWhereUniqueInput
  }


  /**
   * ContractPayment base type for findFirst actions
   */
  export type ContractPaymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter, which ContractPayment to fetch.
     * 
    **/
    where?: ContractPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractPayments.
     * 
    **/
    cursor?: ContractPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractPayments.
     * 
    **/
    distinct?: Enumerable<ContractPaymentScalarFieldEnum>
  }

  /**
   * ContractPayment findFirst
   */
  export interface ContractPaymentFindFirstArgs extends ContractPaymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractPayment findFirstOrThrow
   */
  export type ContractPaymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter, which ContractPayment to fetch.
     * 
    **/
    where?: ContractPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractPayments.
     * 
    **/
    cursor?: ContractPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractPayments.
     * 
    **/
    distinct?: Enumerable<ContractPaymentScalarFieldEnum>
  }


  /**
   * ContractPayment findMany
   */
  export type ContractPaymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter, which ContractPayments to fetch.
     * 
    **/
    where?: ContractPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractPayments.
     * 
    **/
    cursor?: ContractPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractPayments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContractPaymentScalarFieldEnum>
  }


  /**
   * ContractPayment create
   */
  export type ContractPaymentCreateArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * The data needed to create a ContractPayment.
     * 
    **/
    data: XOR<ContractPaymentCreateInput, ContractPaymentUncheckedCreateInput>
  }


  /**
   * ContractPayment createMany
   */
  export type ContractPaymentCreateManyArgs = {
    /**
     * The data used to create many ContractPayments.
     * 
    **/
    data: Enumerable<ContractPaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ContractPayment update
   */
  export type ContractPaymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * The data needed to update a ContractPayment.
     * 
    **/
    data: XOR<ContractPaymentUpdateInput, ContractPaymentUncheckedUpdateInput>
    /**
     * Choose, which ContractPayment to update.
     * 
    **/
    where: ContractPaymentWhereUniqueInput
  }


  /**
   * ContractPayment updateMany
   */
  export type ContractPaymentUpdateManyArgs = {
    /**
     * The data used to update ContractPayments.
     * 
    **/
    data: XOR<ContractPaymentUpdateManyMutationInput, ContractPaymentUncheckedUpdateManyInput>
    /**
     * Filter which ContractPayments to update
     * 
    **/
    where?: ContractPaymentWhereInput
  }


  /**
   * ContractPayment upsert
   */
  export type ContractPaymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * The filter to search for the ContractPayment to update in case it exists.
     * 
    **/
    where: ContractPaymentWhereUniqueInput
    /**
     * In case the ContractPayment found by the `where` argument doesn't exist, create a new ContractPayment with this data.
     * 
    **/
    create: XOR<ContractPaymentCreateInput, ContractPaymentUncheckedCreateInput>
    /**
     * In case the ContractPayment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContractPaymentUpdateInput, ContractPaymentUncheckedUpdateInput>
  }


  /**
   * ContractPayment delete
   */
  export type ContractPaymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
    /**
     * Filter which ContractPayment to delete.
     * 
    **/
    where: ContractPaymentWhereUniqueInput
  }


  /**
   * ContractPayment deleteMany
   */
  export type ContractPaymentDeleteManyArgs = {
    /**
     * Filter which ContractPayments to delete
     * 
    **/
    where?: ContractPaymentWhereInput
  }


  /**
   * ContractPayment without action
   */
  export type ContractPaymentArgs = {
    /**
     * Select specific fields to fetch from the ContractPayment
     * 
    **/
    select?: ContractPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractPaymentInclude | null
  }



  /**
   * Model ContractJourney
   */


  export type AggregateContractJourney = {
    _count: ContractJourneyCountAggregateOutputType | null
    _min: ContractJourneyMinAggregateOutputType | null
    _max: ContractJourneyMaxAggregateOutputType | null
  }

  export type ContractJourneyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    contractId: string | null
  }

  export type ContractJourneyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    contractId: string | null
  }

  export type ContractJourneyCountAggregateOutputType = {
    id: number
    caregiverOrder: number
    createdAt: number
    contractId: number
    _all: number
  }


  export type ContractJourneyMinAggregateInputType = {
    id?: true
    createdAt?: true
    contractId?: true
  }

  export type ContractJourneyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    contractId?: true
  }

  export type ContractJourneyCountAggregateInputType = {
    id?: true
    caregiverOrder?: true
    createdAt?: true
    contractId?: true
    _all?: true
  }

  export type ContractJourneyAggregateArgs = {
    /**
     * Filter which ContractJourney to aggregate.
     * 
    **/
    where?: ContractJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractJourneys to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractJourneyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContractJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractJourneys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractJourneys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractJourneys
    **/
    _count?: true | ContractJourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractJourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractJourneyMaxAggregateInputType
  }

  export type GetContractJourneyAggregateType<T extends ContractJourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateContractJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractJourney[P]>
      : GetScalarType<T[P], AggregateContractJourney[P]>
  }




  export type ContractJourneyGroupByArgs = {
    where?: ContractJourneyWhereInput
    orderBy?: Enumerable<ContractJourneyOrderByWithAggregationInput>
    by: Array<ContractJourneyScalarFieldEnum>
    having?: ContractJourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractJourneyCountAggregateInputType | true
    _min?: ContractJourneyMinAggregateInputType
    _max?: ContractJourneyMaxAggregateInputType
  }


  export type ContractJourneyGroupByOutputType = {
    id: string
    caregiverOrder: string[]
    createdAt: Date | null
    contractId: string
    _count: ContractJourneyCountAggregateOutputType | null
    _min: ContractJourneyMinAggregateOutputType | null
    _max: ContractJourneyMaxAggregateOutputType | null
  }

  type GetContractJourneyGroupByPayload<T extends ContractJourneyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContractJourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractJourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractJourneyGroupByOutputType[P]>
            : GetScalarType<T[P], ContractJourneyGroupByOutputType[P]>
        }
      >
    >


  export type ContractJourneySelect = {
    id?: boolean
    caregiverOrder?: boolean
    createdAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractArgs
  }


  export type ContractJourneyInclude = {
    contract?: boolean | ContractArgs
  } 

  export type ContractJourneyGetPayload<S extends boolean | null | undefined | ContractJourneyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ContractJourney :
    S extends undefined ? never :
    S extends { include: any } & (ContractJourneyArgs | ContractJourneyFindManyArgs)
    ? ContractJourney  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contract' ? ContractGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContractJourneyArgs | ContractJourneyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contract' ? ContractGetPayload<S['select'][P]> :  P extends keyof ContractJourney ? ContractJourney[P] : never
  } 
      : ContractJourney


  type ContractJourneyCountArgs = Merge<
    Omit<ContractJourneyFindManyArgs, 'select' | 'include'> & {
      select?: ContractJourneyCountAggregateInputType | true
    }
  >

  export interface ContractJourneyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ContractJourney that matches the filter.
     * @param {ContractJourneyFindUniqueArgs} args - Arguments to find a ContractJourney
     * @example
     * // Get one ContractJourney
     * const contractJourney = await prisma.contractJourney.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractJourneyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContractJourneyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ContractJourney'> extends True ? Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>> : Prisma__ContractJourneyClient<ContractJourneyGetPayload<T> | null, null>

    /**
     * Find one ContractJourney that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractJourneyFindUniqueOrThrowArgs} args - Arguments to find a ContractJourney
     * @example
     * // Get one ContractJourney
     * const contractJourney = await prisma.contractJourney.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractJourneyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContractJourneyFindUniqueOrThrowArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Find the first ContractJourney that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyFindFirstArgs} args - Arguments to find a ContractJourney
     * @example
     * // Get one ContractJourney
     * const contractJourney = await prisma.contractJourney.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractJourneyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContractJourneyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ContractJourney'> extends True ? Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>> : Prisma__ContractJourneyClient<ContractJourneyGetPayload<T> | null, null>

    /**
     * Find the first ContractJourney that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyFindFirstOrThrowArgs} args - Arguments to find a ContractJourney
     * @example
     * // Get one ContractJourney
     * const contractJourney = await prisma.contractJourney.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractJourneyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContractJourneyFindFirstOrThrowArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Find zero or more ContractJourneys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractJourneys
     * const contractJourneys = await prisma.contractJourney.findMany()
     * 
     * // Get first 10 ContractJourneys
     * const contractJourneys = await prisma.contractJourney.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractJourneyWithIdOnly = await prisma.contractJourney.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractJourneyFindManyArgs>(
      args?: SelectSubset<T, ContractJourneyFindManyArgs>
    ): PrismaPromise<Array<ContractJourneyGetPayload<T>>>

    /**
     * Create a ContractJourney.
     * @param {ContractJourneyCreateArgs} args - Arguments to create a ContractJourney.
     * @example
     * // Create one ContractJourney
     * const ContractJourney = await prisma.contractJourney.create({
     *   data: {
     *     // ... data to create a ContractJourney
     *   }
     * })
     * 
    **/
    create<T extends ContractJourneyCreateArgs>(
      args: SelectSubset<T, ContractJourneyCreateArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Create many ContractJourneys.
     *     @param {ContractJourneyCreateManyArgs} args - Arguments to create many ContractJourneys.
     *     @example
     *     // Create many ContractJourneys
     *     const contractJourney = await prisma.contractJourney.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractJourneyCreateManyArgs>(
      args?: SelectSubset<T, ContractJourneyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ContractJourney.
     * @param {ContractJourneyDeleteArgs} args - Arguments to delete one ContractJourney.
     * @example
     * // Delete one ContractJourney
     * const ContractJourney = await prisma.contractJourney.delete({
     *   where: {
     *     // ... filter to delete one ContractJourney
     *   }
     * })
     * 
    **/
    delete<T extends ContractJourneyDeleteArgs>(
      args: SelectSubset<T, ContractJourneyDeleteArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Update one ContractJourney.
     * @param {ContractJourneyUpdateArgs} args - Arguments to update one ContractJourney.
     * @example
     * // Update one ContractJourney
     * const contractJourney = await prisma.contractJourney.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractJourneyUpdateArgs>(
      args: SelectSubset<T, ContractJourneyUpdateArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Delete zero or more ContractJourneys.
     * @param {ContractJourneyDeleteManyArgs} args - Arguments to filter ContractJourneys to delete.
     * @example
     * // Delete a few ContractJourneys
     * const { count } = await prisma.contractJourney.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractJourneyDeleteManyArgs>(
      args?: SelectSubset<T, ContractJourneyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractJourneys
     * const contractJourney = await prisma.contractJourney.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractJourneyUpdateManyArgs>(
      args: SelectSubset<T, ContractJourneyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractJourney.
     * @param {ContractJourneyUpsertArgs} args - Arguments to update or create a ContractJourney.
     * @example
     * // Update or create a ContractJourney
     * const contractJourney = await prisma.contractJourney.upsert({
     *   create: {
     *     // ... data to create a ContractJourney
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractJourney we want to update
     *   }
     * })
    **/
    upsert<T extends ContractJourneyUpsertArgs>(
      args: SelectSubset<T, ContractJourneyUpsertArgs>
    ): Prisma__ContractJourneyClient<ContractJourneyGetPayload<T>>

    /**
     * Count the number of ContractJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyCountArgs} args - Arguments to filter ContractJourneys to count.
     * @example
     * // Count the number of ContractJourneys
     * const count = await prisma.contractJourney.count({
     *   where: {
     *     // ... the filter for the ContractJourneys we want to count
     *   }
     * })
    **/
    count<T extends ContractJourneyCountArgs>(
      args?: Subset<T, ContractJourneyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractJourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractJourneyAggregateArgs>(args: Subset<T, ContractJourneyAggregateArgs>): PrismaPromise<GetContractJourneyAggregateType<T>>

    /**
     * Group by ContractJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractJourneyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractJourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractJourneyGroupByArgs['orderBy'] }
        : { orderBy?: ContractJourneyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractJourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractJourneyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractJourney.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContractJourneyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    contract<T extends ContractArgs= {}>(args?: Subset<T, ContractArgs>): Prisma__ContractClient<ContractGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ContractJourney base type for findUnique actions
   */
  export type ContractJourneyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter, which ContractJourney to fetch.
     * 
    **/
    where: ContractJourneyWhereUniqueInput
  }

  /**
   * ContractJourney findUnique
   */
  export interface ContractJourneyFindUniqueArgs extends ContractJourneyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractJourney findUniqueOrThrow
   */
  export type ContractJourneyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter, which ContractJourney to fetch.
     * 
    **/
    where: ContractJourneyWhereUniqueInput
  }


  /**
   * ContractJourney base type for findFirst actions
   */
  export type ContractJourneyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter, which ContractJourney to fetch.
     * 
    **/
    where?: ContractJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractJourneys to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractJourneyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractJourneys.
     * 
    **/
    cursor?: ContractJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractJourneys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractJourneys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractJourneys.
     * 
    **/
    distinct?: Enumerable<ContractJourneyScalarFieldEnum>
  }

  /**
   * ContractJourney findFirst
   */
  export interface ContractJourneyFindFirstArgs extends ContractJourneyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractJourney findFirstOrThrow
   */
  export type ContractJourneyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter, which ContractJourney to fetch.
     * 
    **/
    where?: ContractJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractJourneys to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractJourneyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractJourneys.
     * 
    **/
    cursor?: ContractJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractJourneys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractJourneys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractJourneys.
     * 
    **/
    distinct?: Enumerable<ContractJourneyScalarFieldEnum>
  }


  /**
   * ContractJourney findMany
   */
  export type ContractJourneyFindManyArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter, which ContractJourneys to fetch.
     * 
    **/
    where?: ContractJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractJourneys to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractJourneyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractJourneys.
     * 
    **/
    cursor?: ContractJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractJourneys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractJourneys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContractJourneyScalarFieldEnum>
  }


  /**
   * ContractJourney create
   */
  export type ContractJourneyCreateArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * The data needed to create a ContractJourney.
     * 
    **/
    data: XOR<ContractJourneyCreateInput, ContractJourneyUncheckedCreateInput>
  }


  /**
   * ContractJourney createMany
   */
  export type ContractJourneyCreateManyArgs = {
    /**
     * The data used to create many ContractJourneys.
     * 
    **/
    data: Enumerable<ContractJourneyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ContractJourney update
   */
  export type ContractJourneyUpdateArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * The data needed to update a ContractJourney.
     * 
    **/
    data: XOR<ContractJourneyUpdateInput, ContractJourneyUncheckedUpdateInput>
    /**
     * Choose, which ContractJourney to update.
     * 
    **/
    where: ContractJourneyWhereUniqueInput
  }


  /**
   * ContractJourney updateMany
   */
  export type ContractJourneyUpdateManyArgs = {
    /**
     * The data used to update ContractJourneys.
     * 
    **/
    data: XOR<ContractJourneyUpdateManyMutationInput, ContractJourneyUncheckedUpdateManyInput>
    /**
     * Filter which ContractJourneys to update
     * 
    **/
    where?: ContractJourneyWhereInput
  }


  /**
   * ContractJourney upsert
   */
  export type ContractJourneyUpsertArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * The filter to search for the ContractJourney to update in case it exists.
     * 
    **/
    where: ContractJourneyWhereUniqueInput
    /**
     * In case the ContractJourney found by the `where` argument doesn't exist, create a new ContractJourney with this data.
     * 
    **/
    create: XOR<ContractJourneyCreateInput, ContractJourneyUncheckedCreateInput>
    /**
     * In case the ContractJourney was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContractJourneyUpdateInput, ContractJourneyUncheckedUpdateInput>
  }


  /**
   * ContractJourney delete
   */
  export type ContractJourneyDeleteArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
    /**
     * Filter which ContractJourney to delete.
     * 
    **/
    where: ContractJourneyWhereUniqueInput
  }


  /**
   * ContractJourney deleteMany
   */
  export type ContractJourneyDeleteManyArgs = {
    /**
     * Filter which ContractJourneys to delete
     * 
    **/
    where?: ContractJourneyWhereInput
  }


  /**
   * ContractJourney without action
   */
  export type ContractJourneyArgs = {
    /**
     * Select specific fields to fetch from the ContractJourney
     * 
    **/
    select?: ContractJourneySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractJourneyInclude | null
  }



  /**
   * Model CaregiverToContract
   */


  export type AggregateCaregiverToContract = {
    _count: CaregiverToContractCountAggregateOutputType | null
    _min: CaregiverToContractMinAggregateOutputType | null
    _max: CaregiverToContractMaxAggregateOutputType | null
  }

  export type CaregiverToContractMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    caregiverId: string | null
  }

  export type CaregiverToContractMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    caregiverId: string | null
  }

  export type CaregiverToContractCountAggregateOutputType = {
    id: number
    contractId: number
    caregiverId: number
    _all: number
  }


  export type CaregiverToContractMinAggregateInputType = {
    id?: true
    contractId?: true
    caregiverId?: true
  }

  export type CaregiverToContractMaxAggregateInputType = {
    id?: true
    contractId?: true
    caregiverId?: true
  }

  export type CaregiverToContractCountAggregateInputType = {
    id?: true
    contractId?: true
    caregiverId?: true
    _all?: true
  }

  export type CaregiverToContractAggregateArgs = {
    /**
     * Filter which CaregiverToContract to aggregate.
     * 
    **/
    where?: CaregiverToContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverToContracts to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CaregiverToContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverToContracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverToContracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaregiverToContracts
    **/
    _count?: true | CaregiverToContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverToContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverToContractMaxAggregateInputType
  }

  export type GetCaregiverToContractAggregateType<T extends CaregiverToContractAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiverToContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiverToContract[P]>
      : GetScalarType<T[P], AggregateCaregiverToContract[P]>
  }




  export type CaregiverToContractGroupByArgs = {
    where?: CaregiverToContractWhereInput
    orderBy?: Enumerable<CaregiverToContractOrderByWithAggregationInput>
    by: Array<CaregiverToContractScalarFieldEnum>
    having?: CaregiverToContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverToContractCountAggregateInputType | true
    _min?: CaregiverToContractMinAggregateInputType
    _max?: CaregiverToContractMaxAggregateInputType
  }


  export type CaregiverToContractGroupByOutputType = {
    id: string
    contractId: string
    caregiverId: string
    _count: CaregiverToContractCountAggregateOutputType | null
    _min: CaregiverToContractMinAggregateOutputType | null
    _max: CaregiverToContractMaxAggregateOutputType | null
  }

  type GetCaregiverToContractGroupByPayload<T extends CaregiverToContractGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CaregiverToContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverToContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverToContractGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverToContractGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverToContractSelect = {
    id?: boolean
    contractId?: boolean
    caregiverId?: boolean
    Contract?: boolean | ContractArgs
    Caregiver?: boolean | CaregiverArgs
    CaregiverPayment?: boolean | CaregiverToContractCaregiverPaymentArgs
    _count?: boolean | CaregiverToContractCountOutputTypeArgs
  }


  export type CaregiverToContractInclude = {
    Contract?: boolean | ContractArgs
    Caregiver?: boolean | CaregiverArgs
    CaregiverPayment?: boolean | CaregiverToContractCaregiverPaymentArgs
    _count?: boolean | CaregiverToContractCountOutputTypeArgs
  } 

  export type CaregiverToContractGetPayload<S extends boolean | null | undefined | CaregiverToContractArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CaregiverToContract :
    S extends undefined ? never :
    S extends { include: any } & (CaregiverToContractArgs | CaregiverToContractFindManyArgs)
    ? CaregiverToContract  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Contract' ? ContractGetPayload<S['include'][P]> :
        P extends 'Caregiver' ? CaregiverGetPayload<S['include'][P]> :
        P extends 'CaregiverPayment' ? Array < CaregiverPaymentGetPayload<S['include'][P]>>  :
        P extends '_count' ? CaregiverToContractCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CaregiverToContractArgs | CaregiverToContractFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Contract' ? ContractGetPayload<S['select'][P]> :
        P extends 'Caregiver' ? CaregiverGetPayload<S['select'][P]> :
        P extends 'CaregiverPayment' ? Array < CaregiverPaymentGetPayload<S['select'][P]>>  :
        P extends '_count' ? CaregiverToContractCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CaregiverToContract ? CaregiverToContract[P] : never
  } 
      : CaregiverToContract


  type CaregiverToContractCountArgs = Merge<
    Omit<CaregiverToContractFindManyArgs, 'select' | 'include'> & {
      select?: CaregiverToContractCountAggregateInputType | true
    }
  >

  export interface CaregiverToContractDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CaregiverToContract that matches the filter.
     * @param {CaregiverToContractFindUniqueArgs} args - Arguments to find a CaregiverToContract
     * @example
     * // Get one CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CaregiverToContractFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CaregiverToContractFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CaregiverToContract'> extends True ? Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>> : Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T> | null, null>

    /**
     * Find one CaregiverToContract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CaregiverToContractFindUniqueOrThrowArgs} args - Arguments to find a CaregiverToContract
     * @example
     * // Get one CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CaregiverToContractFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CaregiverToContractFindUniqueOrThrowArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Find the first CaregiverToContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractFindFirstArgs} args - Arguments to find a CaregiverToContract
     * @example
     * // Get one CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CaregiverToContractFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CaregiverToContractFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CaregiverToContract'> extends True ? Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>> : Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T> | null, null>

    /**
     * Find the first CaregiverToContract that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractFindFirstOrThrowArgs} args - Arguments to find a CaregiverToContract
     * @example
     * // Get one CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CaregiverToContractFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CaregiverToContractFindFirstOrThrowArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Find zero or more CaregiverToContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaregiverToContracts
     * const caregiverToContracts = await prisma.caregiverToContract.findMany()
     * 
     * // Get first 10 CaregiverToContracts
     * const caregiverToContracts = await prisma.caregiverToContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiverToContractWithIdOnly = await prisma.caregiverToContract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CaregiverToContractFindManyArgs>(
      args?: SelectSubset<T, CaregiverToContractFindManyArgs>
    ): PrismaPromise<Array<CaregiverToContractGetPayload<T>>>

    /**
     * Create a CaregiverToContract.
     * @param {CaregiverToContractCreateArgs} args - Arguments to create a CaregiverToContract.
     * @example
     * // Create one CaregiverToContract
     * const CaregiverToContract = await prisma.caregiverToContract.create({
     *   data: {
     *     // ... data to create a CaregiverToContract
     *   }
     * })
     * 
    **/
    create<T extends CaregiverToContractCreateArgs>(
      args: SelectSubset<T, CaregiverToContractCreateArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Create many CaregiverToContracts.
     *     @param {CaregiverToContractCreateManyArgs} args - Arguments to create many CaregiverToContracts.
     *     @example
     *     // Create many CaregiverToContracts
     *     const caregiverToContract = await prisma.caregiverToContract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CaregiverToContractCreateManyArgs>(
      args?: SelectSubset<T, CaregiverToContractCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CaregiverToContract.
     * @param {CaregiverToContractDeleteArgs} args - Arguments to delete one CaregiverToContract.
     * @example
     * // Delete one CaregiverToContract
     * const CaregiverToContract = await prisma.caregiverToContract.delete({
     *   where: {
     *     // ... filter to delete one CaregiverToContract
     *   }
     * })
     * 
    **/
    delete<T extends CaregiverToContractDeleteArgs>(
      args: SelectSubset<T, CaregiverToContractDeleteArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Update one CaregiverToContract.
     * @param {CaregiverToContractUpdateArgs} args - Arguments to update one CaregiverToContract.
     * @example
     * // Update one CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CaregiverToContractUpdateArgs>(
      args: SelectSubset<T, CaregiverToContractUpdateArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Delete zero or more CaregiverToContracts.
     * @param {CaregiverToContractDeleteManyArgs} args - Arguments to filter CaregiverToContracts to delete.
     * @example
     * // Delete a few CaregiverToContracts
     * const { count } = await prisma.caregiverToContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CaregiverToContractDeleteManyArgs>(
      args?: SelectSubset<T, CaregiverToContractDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaregiverToContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaregiverToContracts
     * const caregiverToContract = await prisma.caregiverToContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CaregiverToContractUpdateManyArgs>(
      args: SelectSubset<T, CaregiverToContractUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CaregiverToContract.
     * @param {CaregiverToContractUpsertArgs} args - Arguments to update or create a CaregiverToContract.
     * @example
     * // Update or create a CaregiverToContract
     * const caregiverToContract = await prisma.caregiverToContract.upsert({
     *   create: {
     *     // ... data to create a CaregiverToContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaregiverToContract we want to update
     *   }
     * })
    **/
    upsert<T extends CaregiverToContractUpsertArgs>(
      args: SelectSubset<T, CaregiverToContractUpsertArgs>
    ): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T>>

    /**
     * Count the number of CaregiverToContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractCountArgs} args - Arguments to filter CaregiverToContracts to count.
     * @example
     * // Count the number of CaregiverToContracts
     * const count = await prisma.caregiverToContract.count({
     *   where: {
     *     // ... the filter for the CaregiverToContracts we want to count
     *   }
     * })
    **/
    count<T extends CaregiverToContractCountArgs>(
      args?: Subset<T, CaregiverToContractCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverToContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaregiverToContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiverToContractAggregateArgs>(args: Subset<T, CaregiverToContractAggregateArgs>): PrismaPromise<GetCaregiverToContractAggregateType<T>>

    /**
     * Group by CaregiverToContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverToContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaregiverToContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverToContractGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverToContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaregiverToContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverToContractGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CaregiverToContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CaregiverToContractClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Contract<T extends ContractArgs= {}>(args?: Subset<T, ContractArgs>): Prisma__ContractClient<ContractGetPayload<T> | Null>;

    Caregiver<T extends CaregiverArgs= {}>(args?: Subset<T, CaregiverArgs>): Prisma__CaregiverClient<CaregiverGetPayload<T> | Null>;

    CaregiverPayment<T extends CaregiverToContractCaregiverPaymentArgs= {}>(args?: Subset<T, CaregiverToContractCaregiverPaymentArgs>): PrismaPromise<Array<CaregiverPaymentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CaregiverToContract base type for findUnique actions
   */
  export type CaregiverToContractFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter, which CaregiverToContract to fetch.
     * 
    **/
    where: CaregiverToContractWhereUniqueInput
  }

  /**
   * CaregiverToContract findUnique
   */
  export interface CaregiverToContractFindUniqueArgs extends CaregiverToContractFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CaregiverToContract findUniqueOrThrow
   */
  export type CaregiverToContractFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter, which CaregiverToContract to fetch.
     * 
    **/
    where: CaregiverToContractWhereUniqueInput
  }


  /**
   * CaregiverToContract base type for findFirst actions
   */
  export type CaregiverToContractFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter, which CaregiverToContract to fetch.
     * 
    **/
    where?: CaregiverToContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverToContracts to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverToContracts.
     * 
    **/
    cursor?: CaregiverToContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverToContracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverToContracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverToContracts.
     * 
    **/
    distinct?: Enumerable<CaregiverToContractScalarFieldEnum>
  }

  /**
   * CaregiverToContract findFirst
   */
  export interface CaregiverToContractFindFirstArgs extends CaregiverToContractFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CaregiverToContract findFirstOrThrow
   */
  export type CaregiverToContractFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter, which CaregiverToContract to fetch.
     * 
    **/
    where?: CaregiverToContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverToContracts to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverToContracts.
     * 
    **/
    cursor?: CaregiverToContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverToContracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverToContracts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverToContracts.
     * 
    **/
    distinct?: Enumerable<CaregiverToContractScalarFieldEnum>
  }


  /**
   * CaregiverToContract findMany
   */
  export type CaregiverToContractFindManyArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter, which CaregiverToContracts to fetch.
     * 
    **/
    where?: CaregiverToContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverToContracts to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaregiverToContracts.
     * 
    **/
    cursor?: CaregiverToContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverToContracts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverToContracts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CaregiverToContractScalarFieldEnum>
  }


  /**
   * CaregiverToContract create
   */
  export type CaregiverToContractCreateArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * The data needed to create a CaregiverToContract.
     * 
    **/
    data: XOR<CaregiverToContractCreateInput, CaregiverToContractUncheckedCreateInput>
  }


  /**
   * CaregiverToContract createMany
   */
  export type CaregiverToContractCreateManyArgs = {
    /**
     * The data used to create many CaregiverToContracts.
     * 
    **/
    data: Enumerable<CaregiverToContractCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CaregiverToContract update
   */
  export type CaregiverToContractUpdateArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * The data needed to update a CaregiverToContract.
     * 
    **/
    data: XOR<CaregiverToContractUpdateInput, CaregiverToContractUncheckedUpdateInput>
    /**
     * Choose, which CaregiverToContract to update.
     * 
    **/
    where: CaregiverToContractWhereUniqueInput
  }


  /**
   * CaregiverToContract updateMany
   */
  export type CaregiverToContractUpdateManyArgs = {
    /**
     * The data used to update CaregiverToContracts.
     * 
    **/
    data: XOR<CaregiverToContractUpdateManyMutationInput, CaregiverToContractUncheckedUpdateManyInput>
    /**
     * Filter which CaregiverToContracts to update
     * 
    **/
    where?: CaregiverToContractWhereInput
  }


  /**
   * CaregiverToContract upsert
   */
  export type CaregiverToContractUpsertArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * The filter to search for the CaregiverToContract to update in case it exists.
     * 
    **/
    where: CaregiverToContractWhereUniqueInput
    /**
     * In case the CaregiverToContract found by the `where` argument doesn't exist, create a new CaregiverToContract with this data.
     * 
    **/
    create: XOR<CaregiverToContractCreateInput, CaregiverToContractUncheckedCreateInput>
    /**
     * In case the CaregiverToContract was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CaregiverToContractUpdateInput, CaregiverToContractUncheckedUpdateInput>
  }


  /**
   * CaregiverToContract delete
   */
  export type CaregiverToContractDeleteArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    /**
     * Filter which CaregiverToContract to delete.
     * 
    **/
    where: CaregiverToContractWhereUniqueInput
  }


  /**
   * CaregiverToContract deleteMany
   */
  export type CaregiverToContractDeleteManyArgs = {
    /**
     * Filter which CaregiverToContracts to delete
     * 
    **/
    where?: CaregiverToContractWhereInput
  }


  /**
   * CaregiverToContract.CaregiverPayment
   */
  export type CaregiverToContractCaregiverPaymentArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    where?: CaregiverPaymentWhereInput
    orderBy?: Enumerable<CaregiverPaymentOrderByWithRelationInput>
    cursor?: CaregiverPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CaregiverPaymentScalarFieldEnum>
  }


  /**
   * CaregiverToContract without action
   */
  export type CaregiverToContractArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
  }



  /**
   * Model CaregiverPayment
   */


  export type AggregateCaregiverPayment = {
    _count: CaregiverPaymentCountAggregateOutputType | null
    _min: CaregiverPaymentMinAggregateOutputType | null
    _max: CaregiverPaymentMaxAggregateOutputType | null
  }

  export type CaregiverPaymentMinAggregateOutputType = {
    id: string | null
    value: string | null
    createdAt: Date | null
    proof: string | null
    caregiverToContractId: string | null
  }

  export type CaregiverPaymentMaxAggregateOutputType = {
    id: string | null
    value: string | null
    createdAt: Date | null
    proof: string | null
    caregiverToContractId: string | null
  }

  export type CaregiverPaymentCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    proof: number
    caregiverToContractId: number
    _all: number
  }


  export type CaregiverPaymentMinAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    proof?: true
    caregiverToContractId?: true
  }

  export type CaregiverPaymentMaxAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    proof?: true
    caregiverToContractId?: true
  }

  export type CaregiverPaymentCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    proof?: true
    caregiverToContractId?: true
    _all?: true
  }

  export type CaregiverPaymentAggregateArgs = {
    /**
     * Filter which CaregiverPayment to aggregate.
     * 
    **/
    where?: CaregiverPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CaregiverPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaregiverPayments
    **/
    _count?: true | CaregiverPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverPaymentMaxAggregateInputType
  }

  export type GetCaregiverPaymentAggregateType<T extends CaregiverPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiverPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiverPayment[P]>
      : GetScalarType<T[P], AggregateCaregiverPayment[P]>
  }




  export type CaregiverPaymentGroupByArgs = {
    where?: CaregiverPaymentWhereInput
    orderBy?: Enumerable<CaregiverPaymentOrderByWithAggregationInput>
    by: Array<CaregiverPaymentScalarFieldEnum>
    having?: CaregiverPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverPaymentCountAggregateInputType | true
    _min?: CaregiverPaymentMinAggregateInputType
    _max?: CaregiverPaymentMaxAggregateInputType
  }


  export type CaregiverPaymentGroupByOutputType = {
    id: string
    value: string
    createdAt: Date | null
    proof: string
    caregiverToContractId: string
    _count: CaregiverPaymentCountAggregateOutputType | null
    _min: CaregiverPaymentMinAggregateOutputType | null
    _max: CaregiverPaymentMaxAggregateOutputType | null
  }

  type GetCaregiverPaymentGroupByPayload<T extends CaregiverPaymentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CaregiverPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverPaymentSelect = {
    id?: boolean
    value?: boolean
    createdAt?: boolean
    proof?: boolean
    caregiverToContractId?: boolean
    CaregiverToContract?: boolean | CaregiverToContractArgs
  }


  export type CaregiverPaymentInclude = {
    CaregiverToContract?: boolean | CaregiverToContractArgs
  } 

  export type CaregiverPaymentGetPayload<S extends boolean | null | undefined | CaregiverPaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CaregiverPayment :
    S extends undefined ? never :
    S extends { include: any } & (CaregiverPaymentArgs | CaregiverPaymentFindManyArgs)
    ? CaregiverPayment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CaregiverToContract' ? CaregiverToContractGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CaregiverPaymentArgs | CaregiverPaymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CaregiverToContract' ? CaregiverToContractGetPayload<S['select'][P]> :  P extends keyof CaregiverPayment ? CaregiverPayment[P] : never
  } 
      : CaregiverPayment


  type CaregiverPaymentCountArgs = Merge<
    Omit<CaregiverPaymentFindManyArgs, 'select' | 'include'> & {
      select?: CaregiverPaymentCountAggregateInputType | true
    }
  >

  export interface CaregiverPaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CaregiverPayment that matches the filter.
     * @param {CaregiverPaymentFindUniqueArgs} args - Arguments to find a CaregiverPayment
     * @example
     * // Get one CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CaregiverPaymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CaregiverPaymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CaregiverPayment'> extends True ? Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>> : Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T> | null, null>

    /**
     * Find one CaregiverPayment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CaregiverPaymentFindUniqueOrThrowArgs} args - Arguments to find a CaregiverPayment
     * @example
     * // Get one CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CaregiverPaymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CaregiverPaymentFindUniqueOrThrowArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Find the first CaregiverPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentFindFirstArgs} args - Arguments to find a CaregiverPayment
     * @example
     * // Get one CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CaregiverPaymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CaregiverPaymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CaregiverPayment'> extends True ? Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>> : Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T> | null, null>

    /**
     * Find the first CaregiverPayment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentFindFirstOrThrowArgs} args - Arguments to find a CaregiverPayment
     * @example
     * // Get one CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CaregiverPaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CaregiverPaymentFindFirstOrThrowArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Find zero or more CaregiverPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaregiverPayments
     * const caregiverPayments = await prisma.caregiverPayment.findMany()
     * 
     * // Get first 10 CaregiverPayments
     * const caregiverPayments = await prisma.caregiverPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiverPaymentWithIdOnly = await prisma.caregiverPayment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CaregiverPaymentFindManyArgs>(
      args?: SelectSubset<T, CaregiverPaymentFindManyArgs>
    ): PrismaPromise<Array<CaregiverPaymentGetPayload<T>>>

    /**
     * Create a CaregiverPayment.
     * @param {CaregiverPaymentCreateArgs} args - Arguments to create a CaregiverPayment.
     * @example
     * // Create one CaregiverPayment
     * const CaregiverPayment = await prisma.caregiverPayment.create({
     *   data: {
     *     // ... data to create a CaregiverPayment
     *   }
     * })
     * 
    **/
    create<T extends CaregiverPaymentCreateArgs>(
      args: SelectSubset<T, CaregiverPaymentCreateArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Create many CaregiverPayments.
     *     @param {CaregiverPaymentCreateManyArgs} args - Arguments to create many CaregiverPayments.
     *     @example
     *     // Create many CaregiverPayments
     *     const caregiverPayment = await prisma.caregiverPayment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CaregiverPaymentCreateManyArgs>(
      args?: SelectSubset<T, CaregiverPaymentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CaregiverPayment.
     * @param {CaregiverPaymentDeleteArgs} args - Arguments to delete one CaregiverPayment.
     * @example
     * // Delete one CaregiverPayment
     * const CaregiverPayment = await prisma.caregiverPayment.delete({
     *   where: {
     *     // ... filter to delete one CaregiverPayment
     *   }
     * })
     * 
    **/
    delete<T extends CaregiverPaymentDeleteArgs>(
      args: SelectSubset<T, CaregiverPaymentDeleteArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Update one CaregiverPayment.
     * @param {CaregiverPaymentUpdateArgs} args - Arguments to update one CaregiverPayment.
     * @example
     * // Update one CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CaregiverPaymentUpdateArgs>(
      args: SelectSubset<T, CaregiverPaymentUpdateArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Delete zero or more CaregiverPayments.
     * @param {CaregiverPaymentDeleteManyArgs} args - Arguments to filter CaregiverPayments to delete.
     * @example
     * // Delete a few CaregiverPayments
     * const { count } = await prisma.caregiverPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CaregiverPaymentDeleteManyArgs>(
      args?: SelectSubset<T, CaregiverPaymentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaregiverPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaregiverPayments
     * const caregiverPayment = await prisma.caregiverPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CaregiverPaymentUpdateManyArgs>(
      args: SelectSubset<T, CaregiverPaymentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CaregiverPayment.
     * @param {CaregiverPaymentUpsertArgs} args - Arguments to update or create a CaregiverPayment.
     * @example
     * // Update or create a CaregiverPayment
     * const caregiverPayment = await prisma.caregiverPayment.upsert({
     *   create: {
     *     // ... data to create a CaregiverPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaregiverPayment we want to update
     *   }
     * })
    **/
    upsert<T extends CaregiverPaymentUpsertArgs>(
      args: SelectSubset<T, CaregiverPaymentUpsertArgs>
    ): Prisma__CaregiverPaymentClient<CaregiverPaymentGetPayload<T>>

    /**
     * Count the number of CaregiverPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentCountArgs} args - Arguments to filter CaregiverPayments to count.
     * @example
     * // Count the number of CaregiverPayments
     * const count = await prisma.caregiverPayment.count({
     *   where: {
     *     // ... the filter for the CaregiverPayments we want to count
     *   }
     * })
    **/
    count<T extends CaregiverPaymentCountArgs>(
      args?: Subset<T, CaregiverPaymentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaregiverPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiverPaymentAggregateArgs>(args: Subset<T, CaregiverPaymentAggregateArgs>): PrismaPromise<GetCaregiverPaymentAggregateType<T>>

    /**
     * Group by CaregiverPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaregiverPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaregiverPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverPaymentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CaregiverPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CaregiverPaymentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CaregiverToContract<T extends CaregiverToContractArgs= {}>(args?: Subset<T, CaregiverToContractArgs>): Prisma__CaregiverToContractClient<CaregiverToContractGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CaregiverPayment base type for findUnique actions
   */
  export type CaregiverPaymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter, which CaregiverPayment to fetch.
     * 
    **/
    where: CaregiverPaymentWhereUniqueInput
  }

  /**
   * CaregiverPayment findUnique
   */
  export interface CaregiverPaymentFindUniqueArgs extends CaregiverPaymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CaregiverPayment findUniqueOrThrow
   */
  export type CaregiverPaymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter, which CaregiverPayment to fetch.
     * 
    **/
    where: CaregiverPaymentWhereUniqueInput
  }


  /**
   * CaregiverPayment base type for findFirst actions
   */
  export type CaregiverPaymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter, which CaregiverPayment to fetch.
     * 
    **/
    where?: CaregiverPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverPayments.
     * 
    **/
    cursor?: CaregiverPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverPayments.
     * 
    **/
    distinct?: Enumerable<CaregiverPaymentScalarFieldEnum>
  }

  /**
   * CaregiverPayment findFirst
   */
  export interface CaregiverPaymentFindFirstArgs extends CaregiverPaymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CaregiverPayment findFirstOrThrow
   */
  export type CaregiverPaymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter, which CaregiverPayment to fetch.
     * 
    **/
    where?: CaregiverPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverPayments.
     * 
    **/
    cursor?: CaregiverPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverPayments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverPayments.
     * 
    **/
    distinct?: Enumerable<CaregiverPaymentScalarFieldEnum>
  }


  /**
   * CaregiverPayment findMany
   */
  export type CaregiverPaymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter, which CaregiverPayments to fetch.
     * 
    **/
    where?: CaregiverPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverPayments to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaregiverPayments.
     * 
    **/
    cursor?: CaregiverPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverPayments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverPayments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CaregiverPaymentScalarFieldEnum>
  }


  /**
   * CaregiverPayment create
   */
  export type CaregiverPaymentCreateArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * The data needed to create a CaregiverPayment.
     * 
    **/
    data: XOR<CaregiverPaymentCreateInput, CaregiverPaymentUncheckedCreateInput>
  }


  /**
   * CaregiverPayment createMany
   */
  export type CaregiverPaymentCreateManyArgs = {
    /**
     * The data used to create many CaregiverPayments.
     * 
    **/
    data: Enumerable<CaregiverPaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CaregiverPayment update
   */
  export type CaregiverPaymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * The data needed to update a CaregiverPayment.
     * 
    **/
    data: XOR<CaregiverPaymentUpdateInput, CaregiverPaymentUncheckedUpdateInput>
    /**
     * Choose, which CaregiverPayment to update.
     * 
    **/
    where: CaregiverPaymentWhereUniqueInput
  }


  /**
   * CaregiverPayment updateMany
   */
  export type CaregiverPaymentUpdateManyArgs = {
    /**
     * The data used to update CaregiverPayments.
     * 
    **/
    data: XOR<CaregiverPaymentUpdateManyMutationInput, CaregiverPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CaregiverPayments to update
     * 
    **/
    where?: CaregiverPaymentWhereInput
  }


  /**
   * CaregiverPayment upsert
   */
  export type CaregiverPaymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * The filter to search for the CaregiverPayment to update in case it exists.
     * 
    **/
    where: CaregiverPaymentWhereUniqueInput
    /**
     * In case the CaregiverPayment found by the `where` argument doesn't exist, create a new CaregiverPayment with this data.
     * 
    **/
    create: XOR<CaregiverPaymentCreateInput, CaregiverPaymentUncheckedCreateInput>
    /**
     * In case the CaregiverPayment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CaregiverPaymentUpdateInput, CaregiverPaymentUncheckedUpdateInput>
  }


  /**
   * CaregiverPayment delete
   */
  export type CaregiverPaymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
    /**
     * Filter which CaregiverPayment to delete.
     * 
    **/
    where: CaregiverPaymentWhereUniqueInput
  }


  /**
   * CaregiverPayment deleteMany
   */
  export type CaregiverPaymentDeleteManyArgs = {
    /**
     * Filter which CaregiverPayments to delete
     * 
    **/
    where?: CaregiverPaymentWhereInput
  }


  /**
   * CaregiverPayment without action
   */
  export type CaregiverPaymentArgs = {
    /**
     * Select specific fields to fetch from the CaregiverPayment
     * 
    **/
    select?: CaregiverPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverPaymentInclude | null
  }



  /**
   * Model Caregiver
   */


  export type AggregateCaregiver = {
    _count: CaregiverCountAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  export type CaregiverMinAggregateOutputType = {
    workerId: string | null
    smoker: boolean | null
    allergyReport: string | null
    uniqueTicket: string | null
  }

  export type CaregiverMaxAggregateOutputType = {
    workerId: string | null
    smoker: boolean | null
    allergyReport: string | null
    uniqueTicket: string | null
  }

  export type CaregiverCountAggregateOutputType = {
    workerId: number
    smoker: number
    allergyReport: number
    uniqueTicket: number
    availableTimeScales: number
    diseaseExperiences: number
    _all: number
  }


  export type CaregiverMinAggregateInputType = {
    workerId?: true
    smoker?: true
    allergyReport?: true
    uniqueTicket?: true
  }

  export type CaregiverMaxAggregateInputType = {
    workerId?: true
    smoker?: true
    allergyReport?: true
    uniqueTicket?: true
  }

  export type CaregiverCountAggregateInputType = {
    workerId?: true
    smoker?: true
    allergyReport?: true
    uniqueTicket?: true
    availableTimeScales?: true
    diseaseExperiences?: true
    _all?: true
  }

  export type CaregiverAggregateArgs = {
    /**
     * Filter which Caregiver to aggregate.
     * 
    **/
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caregivers
    **/
    _count?: true | CaregiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverMaxAggregateInputType
  }

  export type GetCaregiverAggregateType<T extends CaregiverAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiver[P]>
      : GetScalarType<T[P], AggregateCaregiver[P]>
  }




  export type CaregiverGroupByArgs = {
    where?: CaregiverWhereInput
    orderBy?: Enumerable<CaregiverOrderByWithAggregationInput>
    by: Array<CaregiverScalarFieldEnum>
    having?: CaregiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverCountAggregateInputType | true
    _min?: CaregiverMinAggregateInputType
    _max?: CaregiverMaxAggregateInputType
  }


  export type CaregiverGroupByOutputType = {
    workerId: string
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales: TIME_SCALE[]
    diseaseExperiences: DISEASE[]
    _count: CaregiverCountAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  type GetCaregiverGroupByPayload<T extends CaregiverGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CaregiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverSelect = {
    workerId?: boolean
    smoker?: boolean
    allergyReport?: boolean
    uniqueTicket?: boolean
    availableTimeScales?: boolean
    diseaseExperiences?: boolean
    Worker?: boolean | WorkerArgs
    CaregiverToContract?: boolean | CaregiverCaregiverToContractArgs
    _count?: boolean | CaregiverCountOutputTypeArgs
  }


  export type CaregiverInclude = {
    Worker?: boolean | WorkerArgs
    CaregiverToContract?: boolean | CaregiverCaregiverToContractArgs
    _count?: boolean | CaregiverCountOutputTypeArgs
  } 

  export type CaregiverGetPayload<S extends boolean | null | undefined | CaregiverArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Caregiver :
    S extends undefined ? never :
    S extends { include: any } & (CaregiverArgs | CaregiverFindManyArgs)
    ? Caregiver  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Worker' ? WorkerGetPayload<S['include'][P]> :
        P extends 'CaregiverToContract' ? Array < CaregiverToContractGetPayload<S['include'][P]>>  :
        P extends '_count' ? CaregiverCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CaregiverArgs | CaregiverFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Worker' ? WorkerGetPayload<S['select'][P]> :
        P extends 'CaregiverToContract' ? Array < CaregiverToContractGetPayload<S['select'][P]>>  :
        P extends '_count' ? CaregiverCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Caregiver ? Caregiver[P] : never
  } 
      : Caregiver


  type CaregiverCountArgs = Merge<
    Omit<CaregiverFindManyArgs, 'select' | 'include'> & {
      select?: CaregiverCountAggregateInputType | true
    }
  >

  export interface CaregiverDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Caregiver that matches the filter.
     * @param {CaregiverFindUniqueArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CaregiverFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CaregiverFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Caregiver'> extends True ? Prisma__CaregiverClient<CaregiverGetPayload<T>> : Prisma__CaregiverClient<CaregiverGetPayload<T> | null, null>

    /**
     * Find one Caregiver that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CaregiverFindUniqueOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CaregiverFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CaregiverFindUniqueOrThrowArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Find the first Caregiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CaregiverFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CaregiverFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Caregiver'> extends True ? Prisma__CaregiverClient<CaregiverGetPayload<T>> : Prisma__CaregiverClient<CaregiverGetPayload<T> | null, null>

    /**
     * Find the first Caregiver that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CaregiverFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CaregiverFindFirstOrThrowArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Find zero or more Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregivers
     * const caregivers = await prisma.caregiver.findMany()
     * 
     * // Get first 10 Caregivers
     * const caregivers = await prisma.caregiver.findMany({ take: 10 })
     * 
     * // Only select the `workerId`
     * const caregiverWithWorkerIdOnly = await prisma.caregiver.findMany({ select: { workerId: true } })
     * 
    **/
    findMany<T extends CaregiverFindManyArgs>(
      args?: SelectSubset<T, CaregiverFindManyArgs>
    ): PrismaPromise<Array<CaregiverGetPayload<T>>>

    /**
     * Create a Caregiver.
     * @param {CaregiverCreateArgs} args - Arguments to create a Caregiver.
     * @example
     * // Create one Caregiver
     * const Caregiver = await prisma.caregiver.create({
     *   data: {
     *     // ... data to create a Caregiver
     *   }
     * })
     * 
    **/
    create<T extends CaregiverCreateArgs>(
      args: SelectSubset<T, CaregiverCreateArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Create many Caregivers.
     *     @param {CaregiverCreateManyArgs} args - Arguments to create many Caregivers.
     *     @example
     *     // Create many Caregivers
     *     const caregiver = await prisma.caregiver.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CaregiverCreateManyArgs>(
      args?: SelectSubset<T, CaregiverCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Caregiver.
     * @param {CaregiverDeleteArgs} args - Arguments to delete one Caregiver.
     * @example
     * // Delete one Caregiver
     * const Caregiver = await prisma.caregiver.delete({
     *   where: {
     *     // ... filter to delete one Caregiver
     *   }
     * })
     * 
    **/
    delete<T extends CaregiverDeleteArgs>(
      args: SelectSubset<T, CaregiverDeleteArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Update one Caregiver.
     * @param {CaregiverUpdateArgs} args - Arguments to update one Caregiver.
     * @example
     * // Update one Caregiver
     * const caregiver = await prisma.caregiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CaregiverUpdateArgs>(
      args: SelectSubset<T, CaregiverUpdateArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Delete zero or more Caregivers.
     * @param {CaregiverDeleteManyArgs} args - Arguments to filter Caregivers to delete.
     * @example
     * // Delete a few Caregivers
     * const { count } = await prisma.caregiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CaregiverDeleteManyArgs>(
      args?: SelectSubset<T, CaregiverDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CaregiverUpdateManyArgs>(
      args: SelectSubset<T, CaregiverUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Caregiver.
     * @param {CaregiverUpsertArgs} args - Arguments to update or create a Caregiver.
     * @example
     * // Update or create a Caregiver
     * const caregiver = await prisma.caregiver.upsert({
     *   create: {
     *     // ... data to create a Caregiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregiver we want to update
     *   }
     * })
    **/
    upsert<T extends CaregiverUpsertArgs>(
      args: SelectSubset<T, CaregiverUpsertArgs>
    ): Prisma__CaregiverClient<CaregiverGetPayload<T>>

    /**
     * Count the number of Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverCountArgs} args - Arguments to filter Caregivers to count.
     * @example
     * // Count the number of Caregivers
     * const count = await prisma.caregiver.count({
     *   where: {
     *     // ... the filter for the Caregivers we want to count
     *   }
     * })
    **/
    count<T extends CaregiverCountArgs>(
      args?: Subset<T, CaregiverCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiverAggregateArgs>(args: Subset<T, CaregiverAggregateArgs>): PrismaPromise<GetCaregiverAggregateType<T>>

    /**
     * Group by Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaregiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaregiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Caregiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CaregiverClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Worker<T extends WorkerArgs= {}>(args?: Subset<T, WorkerArgs>): Prisma__WorkerClient<WorkerGetPayload<T> | Null>;

    CaregiverToContract<T extends CaregiverCaregiverToContractArgs= {}>(args?: Subset<T, CaregiverCaregiverToContractArgs>): PrismaPromise<Array<CaregiverToContractGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Caregiver base type for findUnique actions
   */
  export type CaregiverFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter, which Caregiver to fetch.
     * 
    **/
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver findUnique
   */
  export interface CaregiverFindUniqueArgs extends CaregiverFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Caregiver findUniqueOrThrow
   */
  export type CaregiverFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter, which Caregiver to fetch.
     * 
    **/
    where: CaregiverWhereUniqueInput
  }


  /**
   * Caregiver base type for findFirst actions
   */
  export type CaregiverFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter, which Caregiver to fetch.
     * 
    **/
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     * 
    **/
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     * 
    **/
    distinct?: Enumerable<CaregiverScalarFieldEnum>
  }

  /**
   * Caregiver findFirst
   */
  export interface CaregiverFindFirstArgs extends CaregiverFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Caregiver findFirstOrThrow
   */
  export type CaregiverFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter, which Caregiver to fetch.
     * 
    **/
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     * 
    **/
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     * 
    **/
    distinct?: Enumerable<CaregiverScalarFieldEnum>
  }


  /**
   * Caregiver findMany
   */
  export type CaregiverFindManyArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter, which Caregivers to fetch.
     * 
    **/
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     * 
    **/
    orderBy?: Enumerable<CaregiverOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caregivers.
     * 
    **/
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CaregiverScalarFieldEnum>
  }


  /**
   * Caregiver create
   */
  export type CaregiverCreateArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * The data needed to create a Caregiver.
     * 
    **/
    data: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
  }


  /**
   * Caregiver createMany
   */
  export type CaregiverCreateManyArgs = {
    /**
     * The data used to create many Caregivers.
     * 
    **/
    data: Enumerable<CaregiverCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Caregiver update
   */
  export type CaregiverUpdateArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * The data needed to update a Caregiver.
     * 
    **/
    data: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
    /**
     * Choose, which Caregiver to update.
     * 
    **/
    where: CaregiverWhereUniqueInput
  }


  /**
   * Caregiver updateMany
   */
  export type CaregiverUpdateManyArgs = {
    /**
     * The data used to update Caregivers.
     * 
    **/
    data: XOR<CaregiverUpdateManyMutationInput, CaregiverUncheckedUpdateManyInput>
    /**
     * Filter which Caregivers to update
     * 
    **/
    where?: CaregiverWhereInput
  }


  /**
   * Caregiver upsert
   */
  export type CaregiverUpsertArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * The filter to search for the Caregiver to update in case it exists.
     * 
    **/
    where: CaregiverWhereUniqueInput
    /**
     * In case the Caregiver found by the `where` argument doesn't exist, create a new Caregiver with this data.
     * 
    **/
    create: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
    /**
     * In case the Caregiver was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
  }


  /**
   * Caregiver delete
   */
  export type CaregiverDeleteArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
    /**
     * Filter which Caregiver to delete.
     * 
    **/
    where: CaregiverWhereUniqueInput
  }


  /**
   * Caregiver deleteMany
   */
  export type CaregiverDeleteManyArgs = {
    /**
     * Filter which Caregivers to delete
     * 
    **/
    where?: CaregiverWhereInput
  }


  /**
   * Caregiver.CaregiverToContract
   */
  export type CaregiverCaregiverToContractArgs = {
    /**
     * Select specific fields to fetch from the CaregiverToContract
     * 
    **/
    select?: CaregiverToContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverToContractInclude | null
    where?: CaregiverToContractWhereInput
    orderBy?: Enumerable<CaregiverToContractOrderByWithRelationInput>
    cursor?: CaregiverToContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CaregiverToContractScalarFieldEnum>
  }


  /**
   * Caregiver without action
   */
  export type CaregiverArgs = {
    /**
     * Select specific fields to fetch from the Caregiver
     * 
    **/
    select?: CaregiverSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CaregiverInclude | null
  }



  /**
   * Model Worker
   */


  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    dependents: number | null
  }

  export type WorkerSumAggregateOutputType = {
    dependents: number | null
  }

  export type WorkerMinAggregateOutputType = {
    credentialId: string | null
    PIS: string | null
    dependents: number | null
    workerStatus: WORKER_STATUS | null
    civilStatus: CIVIL_STATUS | null
  }

  export type WorkerMaxAggregateOutputType = {
    credentialId: string | null
    PIS: string | null
    dependents: number | null
    workerStatus: WORKER_STATUS | null
    civilStatus: CIVIL_STATUS | null
  }

  export type WorkerCountAggregateOutputType = {
    credentialId: number
    PIS: number
    dependents: number
    workerStatus: number
    civilStatus: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    dependents?: true
  }

  export type WorkerSumAggregateInputType = {
    dependents?: true
  }

  export type WorkerMinAggregateInputType = {
    credentialId?: true
    PIS?: true
    dependents?: true
    workerStatus?: true
    civilStatus?: true
  }

  export type WorkerMaxAggregateInputType = {
    credentialId?: true
    PIS?: true
    dependents?: true
    workerStatus?: true
    civilStatus?: true
  }

  export type WorkerCountAggregateInputType = {
    credentialId?: true
    PIS?: true
    dependents?: true
    workerStatus?: true
    civilStatus?: true
    _all?: true
  }

  export type WorkerAggregateArgs = {
    /**
     * Filter which Worker to aggregate.
     * 
    **/
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs = {
    where?: WorkerWhereInput
    orderBy?: Enumerable<WorkerOrderByWithAggregationInput>
    by: Array<WorkerScalarFieldEnum>
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }


  export type WorkerGroupByOutputType = {
    credentialId: string
    PIS: string
    dependents: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect = {
    credentialId?: boolean
    PIS?: boolean
    dependents?: boolean
    workerStatus?: boolean
    civilStatus?: boolean
    Credential?: boolean | CredentialArgs
    Caregiver?: boolean | CaregiverArgs
  }


  export type WorkerInclude = {
    Credential?: boolean | CredentialArgs
    Caregiver?: boolean | CaregiverArgs
  } 

  export type WorkerGetPayload<S extends boolean | null | undefined | WorkerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Worker :
    S extends undefined ? never :
    S extends { include: any } & (WorkerArgs | WorkerFindManyArgs)
    ? Worker  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Credential' ? CredentialGetPayload<S['include'][P]> :
        P extends 'Caregiver' ? CaregiverGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (WorkerArgs | WorkerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Credential' ? CredentialGetPayload<S['select'][P]> :
        P extends 'Caregiver' ? CaregiverGetPayload<S['select'][P]> | null :  P extends keyof Worker ? Worker[P] : never
  } 
      : Worker


  type WorkerCountArgs = Merge<
    Omit<WorkerFindManyArgs, 'select' | 'include'> & {
      select?: WorkerCountAggregateInputType | true
    }
  >

  export interface WorkerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Worker'> extends True ? Prisma__WorkerClient<WorkerGetPayload<T>> : Prisma__WorkerClient<WorkerGetPayload<T> | null, null>

    /**
     * Find one Worker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkerFindUniqueOrThrowArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Worker'> extends True ? Prisma__WorkerClient<WorkerGetPayload<T>> : Prisma__WorkerClient<WorkerGetPayload<T> | null, null>

    /**
     * Find the first Worker that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkerFindFirstOrThrowArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `credentialId`
     * const workerWithCredentialIdOnly = await prisma.worker.findMany({ select: { credentialId: true } })
     * 
    **/
    findMany<T extends WorkerFindManyArgs>(
      args?: SelectSubset<T, WorkerFindManyArgs>
    ): PrismaPromise<Array<WorkerGetPayload<T>>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
    **/
    create<T extends WorkerCreateArgs>(
      args: SelectSubset<T, WorkerCreateArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Create many Workers.
     *     @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     *     @example
     *     // Create many Workers
     *     const worker = await prisma.worker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkerCreateManyArgs>(
      args?: SelectSubset<T, WorkerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
    **/
    delete<T extends WorkerDeleteArgs>(
      args: SelectSubset<T, WorkerDeleteArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkerUpdateArgs>(
      args: SelectSubset<T, WorkerUpdateArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkerDeleteManyArgs>(
      args?: SelectSubset<T, WorkerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkerUpdateManyArgs>(
      args: SelectSubset<T, WorkerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
    **/
    upsert<T extends WorkerUpsertArgs>(
      args: SelectSubset<T, WorkerUpsertArgs>
    ): Prisma__WorkerClient<WorkerGetPayload<T>>

    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Credential<T extends CredentialArgs= {}>(args?: Subset<T, CredentialArgs>): Prisma__CredentialClient<CredentialGetPayload<T> | Null>;

    Caregiver<T extends CaregiverArgs= {}>(args?: Subset<T, CaregiverArgs>): Prisma__CaregiverClient<CaregiverGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Worker base type for findUnique actions
   */
  export type WorkerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter, which Worker to fetch.
     * 
    **/
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUnique
   */
  export interface WorkerFindUniqueArgs extends WorkerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter, which Worker to fetch.
     * 
    **/
    where: WorkerWhereUniqueInput
  }


  /**
   * Worker base type for findFirst actions
   */
  export type WorkerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter, which Worker to fetch.
     * 
    **/
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     * 
    **/
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     * 
    **/
    distinct?: Enumerable<WorkerScalarFieldEnum>
  }

  /**
   * Worker findFirst
   */
  export interface WorkerFindFirstArgs extends WorkerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter, which Worker to fetch.
     * 
    **/
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     * 
    **/
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     * 
    **/
    distinct?: Enumerable<WorkerScalarFieldEnum>
  }


  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter, which Workers to fetch.
     * 
    **/
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     * 
    **/
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkerScalarFieldEnum>
  }


  /**
   * Worker create
   */
  export type WorkerCreateArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * The data needed to create a Worker.
     * 
    **/
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }


  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs = {
    /**
     * The data used to create many Workers.
     * 
    **/
    data: Enumerable<WorkerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Worker update
   */
  export type WorkerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * The data needed to update a Worker.
     * 
    **/
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     * 
    **/
    where: WorkerWhereUniqueInput
  }


  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs = {
    /**
     * The data used to update Workers.
     * 
    **/
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     * 
    **/
    where?: WorkerWhereInput
  }


  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * The filter to search for the Worker to update in case it exists.
     * 
    **/
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     * 
    **/
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }


  /**
   * Worker delete
   */
  export type WorkerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
    /**
     * Filter which Worker to delete.
     * 
    **/
    where: WorkerWhereUniqueInput
  }


  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs = {
    /**
     * Filter which Workers to delete
     * 
    **/
    where?: WorkerWhereInput
  }


  /**
   * Worker without action
   */
  export type WorkerArgs = {
    /**
     * Select specific fields to fetch from the Worker
     * 
    **/
    select?: WorkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkerInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    credentialId: string | null
    administrativeLevel: ADMINISTRATIVE_LEVEL | null
  }

  export type AdminMaxAggregateOutputType = {
    credentialId: string | null
    administrativeLevel: ADMINISTRATIVE_LEVEL | null
  }

  export type AdminCountAggregateOutputType = {
    credentialId: number
    administrativeLevel: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    credentialId?: true
    administrativeLevel?: true
  }

  export type AdminMaxAggregateInputType = {
    credentialId?: true
    administrativeLevel?: true
  }

  export type AdminCountAggregateInputType = {
    credentialId?: true
    administrativeLevel?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    credentialId: string
    administrativeLevel: ADMINISTRATIVE_LEVEL
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    credentialId?: boolean
    administrativeLevel?: boolean
    Credential?: boolean | CredentialArgs
  }


  export type AdminInclude = {
    Credential?: boolean | CredentialArgs
  } 

  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Credential' ? CredentialGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Credential' ? CredentialGetPayload<S['select'][P]> :  P extends keyof Admin ? Admin[P] : never
  } 
      : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `credentialId`
     * const adminWithCredentialIdOnly = await prisma.admin.findMany({ select: { credentialId: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): PrismaPromise<Array<AdminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Credential<T extends CredentialArgs= {}>(args?: Subset<T, CredentialArgs>): Prisma__CredentialClient<CredentialGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     * 
    **/
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
  }



  /**
   * Model Credential
   */


  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    personId: string | null
    email: string | null
    CPF: string | null
    RG: string | null
  }

  export type CredentialMaxAggregateOutputType = {
    personId: string | null
    email: string | null
    CPF: string | null
    RG: string | null
  }

  export type CredentialCountAggregateOutputType = {
    personId: number
    email: number
    CPF: number
    RG: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    personId?: true
    email?: true
    CPF?: true
    RG?: true
  }

  export type CredentialMaxAggregateInputType = {
    personId?: true
    email?: true
    CPF?: true
    RG?: true
  }

  export type CredentialCountAggregateInputType = {
    personId?: true
    email?: true
    CPF?: true
    RG?: true
    _all?: true
  }

  export type CredentialAggregateArgs = {
    /**
     * Filter which Credential to aggregate.
     * 
    **/
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     * 
    **/
    orderBy?: Enumerable<CredentialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type CredentialGroupByArgs = {
    where?: CredentialWhereInput
    orderBy?: Enumerable<CredentialOrderByWithAggregationInput>
    by: Array<CredentialScalarFieldEnum>
    having?: CredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }


  export type CredentialGroupByOutputType = {
    personId: string
    email: string
    CPF: string
    RG: string
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends CredentialGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type CredentialSelect = {
    personId?: boolean
    email?: boolean
    CPF?: boolean
    RG?: boolean
    Person?: boolean | PersonArgs
    Worker?: boolean | WorkerArgs
    Admin?: boolean | AdminArgs
    Costumer?: boolean | CostumerArgs
  }


  export type CredentialInclude = {
    Person?: boolean | PersonArgs
    Worker?: boolean | WorkerArgs
    Admin?: boolean | AdminArgs
    Costumer?: boolean | CostumerArgs
  } 

  export type CredentialGetPayload<S extends boolean | null | undefined | CredentialArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Credential :
    S extends undefined ? never :
    S extends { include: any } & (CredentialArgs | CredentialFindManyArgs)
    ? Credential  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Person' ? PersonGetPayload<S['include'][P]> :
        P extends 'Worker' ? WorkerGetPayload<S['include'][P]> | null :
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> | null :
        P extends 'Costumer' ? CostumerGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CredentialArgs | CredentialFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Person' ? PersonGetPayload<S['select'][P]> :
        P extends 'Worker' ? WorkerGetPayload<S['select'][P]> | null :
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> | null :
        P extends 'Costumer' ? CostumerGetPayload<S['select'][P]> | null :  P extends keyof Credential ? Credential[P] : never
  } 
      : Credential


  type CredentialCountArgs = Merge<
    Omit<CredentialFindManyArgs, 'select' | 'include'> & {
      select?: CredentialCountAggregateInputType | true
    }
  >

  export interface CredentialDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Credential that matches the filter.
     * @param {CredentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CredentialFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CredentialFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Credential'> extends True ? Prisma__CredentialClient<CredentialGetPayload<T>> : Prisma__CredentialClient<CredentialGetPayload<T> | null, null>

    /**
     * Find one Credential that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CredentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CredentialFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CredentialFindUniqueOrThrowArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CredentialFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CredentialFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Credential'> extends True ? Prisma__CredentialClient<CredentialGetPayload<T>> : Prisma__CredentialClient<CredentialGetPayload<T> | null, null>

    /**
     * Find the first Credential that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CredentialFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CredentialFindFirstOrThrowArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const credentialWithPersonIdOnly = await prisma.credential.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends CredentialFindManyArgs>(
      args?: SelectSubset<T, CredentialFindManyArgs>
    ): PrismaPromise<Array<CredentialGetPayload<T>>>

    /**
     * Create a Credential.
     * @param {CredentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
    **/
    create<T extends CredentialCreateArgs>(
      args: SelectSubset<T, CredentialCreateArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Create many Credentials.
     *     @param {CredentialCreateManyArgs} args - Arguments to create many Credentials.
     *     @example
     *     // Create many Credentials
     *     const credential = await prisma.credential.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CredentialCreateManyArgs>(
      args?: SelectSubset<T, CredentialCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Credential.
     * @param {CredentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
    **/
    delete<T extends CredentialDeleteArgs>(
      args: SelectSubset<T, CredentialDeleteArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Update one Credential.
     * @param {CredentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CredentialUpdateArgs>(
      args: SelectSubset<T, CredentialUpdateArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CredentialDeleteManyArgs>(
      args?: SelectSubset<T, CredentialDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CredentialUpdateManyArgs>(
      args: SelectSubset<T, CredentialUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Credential.
     * @param {CredentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
    **/
    upsert<T extends CredentialUpsertArgs>(
      args: SelectSubset<T, CredentialUpsertArgs>
    ): Prisma__CredentialClient<CredentialGetPayload<T>>

    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialCountArgs>(
      args?: Subset<T, CredentialCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialGroupByArgs['orderBy'] }
        : { orderBy?: CredentialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CredentialClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    Worker<T extends WorkerArgs= {}>(args?: Subset<T, WorkerArgs>): Prisma__WorkerClient<WorkerGetPayload<T> | Null>;

    Admin<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    Costumer<T extends CostumerArgs= {}>(args?: Subset<T, CostumerArgs>): Prisma__CostumerClient<CostumerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Credential base type for findUnique actions
   */
  export type CredentialFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter, which Credential to fetch.
     * 
    **/
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findUnique
   */
  export interface CredentialFindUniqueArgs extends CredentialFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Credential findUniqueOrThrow
   */
  export type CredentialFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter, which Credential to fetch.
     * 
    **/
    where: CredentialWhereUniqueInput
  }


  /**
   * Credential base type for findFirst actions
   */
  export type CredentialFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter, which Credential to fetch.
     * 
    **/
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     * 
    **/
    orderBy?: Enumerable<CredentialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     * 
    **/
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     * 
    **/
    distinct?: Enumerable<CredentialScalarFieldEnum>
  }

  /**
   * Credential findFirst
   */
  export interface CredentialFindFirstArgs extends CredentialFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Credential findFirstOrThrow
   */
  export type CredentialFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter, which Credential to fetch.
     * 
    **/
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     * 
    **/
    orderBy?: Enumerable<CredentialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     * 
    **/
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     * 
    **/
    distinct?: Enumerable<CredentialScalarFieldEnum>
  }


  /**
   * Credential findMany
   */
  export type CredentialFindManyArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter, which Credentials to fetch.
     * 
    **/
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     * 
    **/
    orderBy?: Enumerable<CredentialOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     * 
    **/
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CredentialScalarFieldEnum>
  }


  /**
   * Credential create
   */
  export type CredentialCreateArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * The data needed to create a Credential.
     * 
    **/
    data: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
  }


  /**
   * Credential createMany
   */
  export type CredentialCreateManyArgs = {
    /**
     * The data used to create many Credentials.
     * 
    **/
    data: Enumerable<CredentialCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Credential update
   */
  export type CredentialUpdateArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * The data needed to update a Credential.
     * 
    **/
    data: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
    /**
     * Choose, which Credential to update.
     * 
    **/
    where: CredentialWhereUniqueInput
  }


  /**
   * Credential updateMany
   */
  export type CredentialUpdateManyArgs = {
    /**
     * The data used to update Credentials.
     * 
    **/
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     * 
    **/
    where?: CredentialWhereInput
  }


  /**
   * Credential upsert
   */
  export type CredentialUpsertArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * The filter to search for the Credential to update in case it exists.
     * 
    **/
    where: CredentialWhereUniqueInput
    /**
     * In case the Credential found by the `where` argument doesn't exist, create a new Credential with this data.
     * 
    **/
    create: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
    /**
     * In case the Credential was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
  }


  /**
   * Credential delete
   */
  export type CredentialDeleteArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
    /**
     * Filter which Credential to delete.
     * 
    **/
    where: CredentialWhereUniqueInput
  }


  /**
   * Credential deleteMany
   */
  export type CredentialDeleteManyArgs = {
    /**
     * Filter which Credentials to delete
     * 
    **/
    where?: CredentialWhereInput
  }


  /**
   * Credential without action
   */
  export type CredentialArgs = {
    /**
     * Select specific fields to fetch from the Credential
     * 
    **/
    select?: CredentialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CredentialInclude | null
  }



  /**
   * Model Costumer
   */


  export type AggregateCostumer = {
    _count: CostumerCountAggregateOutputType | null
    _min: CostumerMinAggregateOutputType | null
    _max: CostumerMaxAggregateOutputType | null
  }

  export type CostumerMinAggregateOutputType = {
    credentialId: string | null
  }

  export type CostumerMaxAggregateOutputType = {
    credentialId: string | null
  }

  export type CostumerCountAggregateOutputType = {
    credentialId: number
    favoriteScales: number
    _all: number
  }


  export type CostumerMinAggregateInputType = {
    credentialId?: true
  }

  export type CostumerMaxAggregateInputType = {
    credentialId?: true
  }

  export type CostumerCountAggregateInputType = {
    credentialId?: true
    favoriteScales?: true
    _all?: true
  }

  export type CostumerAggregateArgs = {
    /**
     * Filter which Costumer to aggregate.
     * 
    **/
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     * 
    **/
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Costumers
    **/
    _count?: true | CostumerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostumerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostumerMaxAggregateInputType
  }

  export type GetCostumerAggregateType<T extends CostumerAggregateArgs> = {
        [P in keyof T & keyof AggregateCostumer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostumer[P]>
      : GetScalarType<T[P], AggregateCostumer[P]>
  }




  export type CostumerGroupByArgs = {
    where?: CostumerWhereInput
    orderBy?: Enumerable<CostumerOrderByWithAggregationInput>
    by: Array<CostumerScalarFieldEnum>
    having?: CostumerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostumerCountAggregateInputType | true
    _min?: CostumerMinAggregateInputType
    _max?: CostumerMaxAggregateInputType
  }


  export type CostumerGroupByOutputType = {
    credentialId: string
    favoriteScales: TIME_SCALE[]
    _count: CostumerCountAggregateOutputType | null
    _min: CostumerMinAggregateOutputType | null
    _max: CostumerMaxAggregateOutputType | null
  }

  type GetCostumerGroupByPayload<T extends CostumerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CostumerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostumerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostumerGroupByOutputType[P]>
            : GetScalarType<T[P], CostumerGroupByOutputType[P]>
        }
      >
    >


  export type CostumerSelect = {
    credentialId?: boolean
    favoriteScales?: boolean
    Credential?: boolean | CredentialArgs
    Patients?: boolean | CostumerPatientsArgs
    Contract?: boolean | CostumerContractArgs
    _count?: boolean | CostumerCountOutputTypeArgs
  }


  export type CostumerInclude = {
    Credential?: boolean | CredentialArgs
    Patients?: boolean | CostumerPatientsArgs
    Contract?: boolean | CostumerContractArgs
    _count?: boolean | CostumerCountOutputTypeArgs
  } 

  export type CostumerGetPayload<S extends boolean | null | undefined | CostumerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Costumer :
    S extends undefined ? never :
    S extends { include: any } & (CostumerArgs | CostumerFindManyArgs)
    ? Costumer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Credential' ? CredentialGetPayload<S['include'][P]> :
        P extends 'Patients' ? Array < PatientGetPayload<S['include'][P]>>  :
        P extends 'Contract' ? Array < ContractGetPayload<S['include'][P]>>  :
        P extends '_count' ? CostumerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CostumerArgs | CostumerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Credential' ? CredentialGetPayload<S['select'][P]> :
        P extends 'Patients' ? Array < PatientGetPayload<S['select'][P]>>  :
        P extends 'Contract' ? Array < ContractGetPayload<S['select'][P]>>  :
        P extends '_count' ? CostumerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Costumer ? Costumer[P] : never
  } 
      : Costumer


  type CostumerCountArgs = Merge<
    Omit<CostumerFindManyArgs, 'select' | 'include'> & {
      select?: CostumerCountAggregateInputType | true
    }
  >

  export interface CostumerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Costumer that matches the filter.
     * @param {CostumerFindUniqueArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CostumerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CostumerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Costumer'> extends True ? Prisma__CostumerClient<CostumerGetPayload<T>> : Prisma__CostumerClient<CostumerGetPayload<T> | null, null>

    /**
     * Find one Costumer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CostumerFindUniqueOrThrowArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CostumerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CostumerFindUniqueOrThrowArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Find the first Costumer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindFirstArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CostumerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CostumerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Costumer'> extends True ? Prisma__CostumerClient<CostumerGetPayload<T>> : Prisma__CostumerClient<CostumerGetPayload<T> | null, null>

    /**
     * Find the first Costumer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindFirstOrThrowArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CostumerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CostumerFindFirstOrThrowArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Find zero or more Costumers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Costumers
     * const costumers = await prisma.costumer.findMany()
     * 
     * // Get first 10 Costumers
     * const costumers = await prisma.costumer.findMany({ take: 10 })
     * 
     * // Only select the `credentialId`
     * const costumerWithCredentialIdOnly = await prisma.costumer.findMany({ select: { credentialId: true } })
     * 
    **/
    findMany<T extends CostumerFindManyArgs>(
      args?: SelectSubset<T, CostumerFindManyArgs>
    ): PrismaPromise<Array<CostumerGetPayload<T>>>

    /**
     * Create a Costumer.
     * @param {CostumerCreateArgs} args - Arguments to create a Costumer.
     * @example
     * // Create one Costumer
     * const Costumer = await prisma.costumer.create({
     *   data: {
     *     // ... data to create a Costumer
     *   }
     * })
     * 
    **/
    create<T extends CostumerCreateArgs>(
      args: SelectSubset<T, CostumerCreateArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Create many Costumers.
     *     @param {CostumerCreateManyArgs} args - Arguments to create many Costumers.
     *     @example
     *     // Create many Costumers
     *     const costumer = await prisma.costumer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CostumerCreateManyArgs>(
      args?: SelectSubset<T, CostumerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Costumer.
     * @param {CostumerDeleteArgs} args - Arguments to delete one Costumer.
     * @example
     * // Delete one Costumer
     * const Costumer = await prisma.costumer.delete({
     *   where: {
     *     // ... filter to delete one Costumer
     *   }
     * })
     * 
    **/
    delete<T extends CostumerDeleteArgs>(
      args: SelectSubset<T, CostumerDeleteArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Update one Costumer.
     * @param {CostumerUpdateArgs} args - Arguments to update one Costumer.
     * @example
     * // Update one Costumer
     * const costumer = await prisma.costumer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CostumerUpdateArgs>(
      args: SelectSubset<T, CostumerUpdateArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Delete zero or more Costumers.
     * @param {CostumerDeleteManyArgs} args - Arguments to filter Costumers to delete.
     * @example
     * // Delete a few Costumers
     * const { count } = await prisma.costumer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CostumerDeleteManyArgs>(
      args?: SelectSubset<T, CostumerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Costumers
     * const costumer = await prisma.costumer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CostumerUpdateManyArgs>(
      args: SelectSubset<T, CostumerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Costumer.
     * @param {CostumerUpsertArgs} args - Arguments to update or create a Costumer.
     * @example
     * // Update or create a Costumer
     * const costumer = await prisma.costumer.upsert({
     *   create: {
     *     // ... data to create a Costumer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Costumer we want to update
     *   }
     * })
    **/
    upsert<T extends CostumerUpsertArgs>(
      args: SelectSubset<T, CostumerUpsertArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Count the number of Costumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerCountArgs} args - Arguments to filter Costumers to count.
     * @example
     * // Count the number of Costumers
     * const count = await prisma.costumer.count({
     *   where: {
     *     // ... the filter for the Costumers we want to count
     *   }
     * })
    **/
    count<T extends CostumerCountArgs>(
      args?: Subset<T, CostumerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostumerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Costumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CostumerAggregateArgs>(args: Subset<T, CostumerAggregateArgs>): PrismaPromise<GetCostumerAggregateType<T>>

    /**
     * Group by Costumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CostumerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostumerGroupByArgs['orderBy'] }
        : { orderBy?: CostumerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CostumerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostumerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Costumer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CostumerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Credential<T extends CredentialArgs= {}>(args?: Subset<T, CredentialArgs>): Prisma__CredentialClient<CredentialGetPayload<T> | Null>;

    Patients<T extends CostumerPatientsArgs= {}>(args?: Subset<T, CostumerPatientsArgs>): PrismaPromise<Array<PatientGetPayload<T>>| Null>;

    Contract<T extends CostumerContractArgs= {}>(args?: Subset<T, CostumerContractArgs>): PrismaPromise<Array<ContractGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Costumer base type for findUnique actions
   */
  export type CostumerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     * 
    **/
    where: CostumerWhereUniqueInput
  }

  /**
   * Costumer findUnique
   */
  export interface CostumerFindUniqueArgs extends CostumerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Costumer findUniqueOrThrow
   */
  export type CostumerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     * 
    **/
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer base type for findFirst actions
   */
  export type CostumerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     * 
    **/
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     * 
    **/
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumers.
     * 
    **/
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumers.
     * 
    **/
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }

  /**
   * Costumer findFirst
   */
  export interface CostumerFindFirstArgs extends CostumerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Costumer findFirstOrThrow
   */
  export type CostumerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     * 
    **/
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     * 
    **/
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumers.
     * 
    **/
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumers.
     * 
    **/
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }


  /**
   * Costumer findMany
   */
  export type CostumerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter, which Costumers to fetch.
     * 
    **/
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     * 
    **/
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Costumers.
     * 
    **/
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }


  /**
   * Costumer create
   */
  export type CostumerCreateArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * The data needed to create a Costumer.
     * 
    **/
    data: XOR<CostumerCreateInput, CostumerUncheckedCreateInput>
  }


  /**
   * Costumer createMany
   */
  export type CostumerCreateManyArgs = {
    /**
     * The data used to create many Costumers.
     * 
    **/
    data: Enumerable<CostumerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Costumer update
   */
  export type CostumerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * The data needed to update a Costumer.
     * 
    **/
    data: XOR<CostumerUpdateInput, CostumerUncheckedUpdateInput>
    /**
     * Choose, which Costumer to update.
     * 
    **/
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer updateMany
   */
  export type CostumerUpdateManyArgs = {
    /**
     * The data used to update Costumers.
     * 
    **/
    data: XOR<CostumerUpdateManyMutationInput, CostumerUncheckedUpdateManyInput>
    /**
     * Filter which Costumers to update
     * 
    **/
    where?: CostumerWhereInput
  }


  /**
   * Costumer upsert
   */
  export type CostumerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * The filter to search for the Costumer to update in case it exists.
     * 
    **/
    where: CostumerWhereUniqueInput
    /**
     * In case the Costumer found by the `where` argument doesn't exist, create a new Costumer with this data.
     * 
    **/
    create: XOR<CostumerCreateInput, CostumerUncheckedCreateInput>
    /**
     * In case the Costumer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CostumerUpdateInput, CostumerUncheckedUpdateInput>
  }


  /**
   * Costumer delete
   */
  export type CostumerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
    /**
     * Filter which Costumer to delete.
     * 
    **/
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer deleteMany
   */
  export type CostumerDeleteManyArgs = {
    /**
     * Filter which Costumers to delete
     * 
    **/
    where?: CostumerWhereInput
  }


  /**
   * Costumer.Patients
   */
  export type CostumerPatientsArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Costumer.Contract
   */
  export type CostumerContractArgs = {
    /**
     * Select specific fields to fetch from the Contract
     * 
    **/
    select?: ContractSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractInclude | null
    where?: ContractWhereInput
    orderBy?: Enumerable<ContractOrderByWithRelationInput>
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContractScalarFieldEnum>
  }


  /**
   * Costumer without action
   */
  export type CostumerArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     * 
    **/
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CostumerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
    personId: 'personId',
    publicPlace: 'publicPlace',
    number: 'number',
    district: 'district',
    city: 'city',
    CEP: 'CEP',
    complement: 'complement',
    reference: 'reference'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    credentialId: 'credentialId',
    administrativeLevel: 'administrativeLevel'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    agency: 'agency',
    account: 'account',
    digit: 'digit',
    personId: 'personId'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const BodyScalarFieldEnum: {
    personId: 'personId',
    weight: 'weight',
    height: 'height',
    mannequinn: 'mannequinn'
  };

  export type BodyScalarFieldEnum = (typeof BodyScalarFieldEnum)[keyof typeof BodyScalarFieldEnum]


  export const CaregiverPaymentScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    proof: 'proof',
    caregiverToContractId: 'caregiverToContractId'
  };

  export type CaregiverPaymentScalarFieldEnum = (typeof CaregiverPaymentScalarFieldEnum)[keyof typeof CaregiverPaymentScalarFieldEnum]


  export const CaregiverScalarFieldEnum: {
    workerId: 'workerId',
    smoker: 'smoker',
    allergyReport: 'allergyReport',
    uniqueTicket: 'uniqueTicket',
    availableTimeScales: 'availableTimeScales',
    diseaseExperiences: 'diseaseExperiences'
  };

  export type CaregiverScalarFieldEnum = (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum]


  export const CaregiverToContractScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    caregiverId: 'caregiverId'
  };

  export type CaregiverToContractScalarFieldEnum = (typeof CaregiverToContractScalarFieldEnum)[keyof typeof CaregiverToContractScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    type: 'type',
    data: 'data',
    observation: 'observation',
    personId: 'personId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ContractJourneyScalarFieldEnum: {
    id: 'id',
    caregiverOrder: 'caregiverOrder',
    createdAt: 'createdAt',
    contractId: 'contractId'
  };

  export type ContractJourneyScalarFieldEnum = (typeof ContractJourneyScalarFieldEnum)[keyof typeof ContractJourneyScalarFieldEnum]


  export const ContractPaymentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    value: 'value',
    createdAt: 'createdAt',
    proof: 'proof'
  };

  export type ContractPaymentScalarFieldEnum = (typeof ContractPaymentScalarFieldEnum)[keyof typeof ContractPaymentScalarFieldEnum]


  export const ContractScalarFieldEnum: {
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
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const CostumerScalarFieldEnum: {
    credentialId: 'credentialId',
    favoriteScales: 'favoriteScales'
  };

  export type CostumerScalarFieldEnum = (typeof CostumerScalarFieldEnum)[keyof typeof CostumerScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    personId: 'personId',
    email: 'email',
    CPF: 'CPF',
    RG: 'RG'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const ObservationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    createdAt: 'createdAt',
    personId: 'personId'
  };

  export type ObservationScalarFieldEnum = (typeof ObservationScalarFieldEnum)[keyof typeof ObservationScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    personId: 'personId',
    costumerId: 'costumerId',
    contractId: 'contractId',
    diseases: 'diseases'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birthDate: 'birthDate',
    sex: 'sex',
    photo: 'photo',
    archive: 'archive',
    deletedAt: 'deletedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkerScalarFieldEnum: {
    credentialId: 'credentialId',
    PIS: 'PIS',
    dependents: 'dependents',
    workerStatus: 'workerStatus',
    civilStatus: 'civilStatus'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    birthDate?: DateTimeFilter | Date | string
    sex?: EnumSEXFilter | SEX
    photo?: StringNullableFilter | string | null
    archive?: StringNullableFilter | string | null
    deletedAt?: DateTimeNullableFilter | Date | string | null
    Credential?: XOR<CredentialRelationFilter, CredentialWhereInput> | null
    Address?: XOR<AddressRelationFilter, AddressWhereInput> | null
    Patient?: XOR<PatientRelationFilter, PatientWhereInput> | null
    Body?: XOR<BodyRelationFilter, BodyWhereInput> | null
    Contacts?: ContactListRelationFilter
    Observations?: ObservationListRelationFilter
    BankAccounts?: BankAccountListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    photo?: SortOrder
    archive?: SortOrder
    deletedAt?: SortOrder
    Credential?: CredentialOrderByWithRelationInput
    Address?: AddressOrderByWithRelationInput
    Patient?: PatientOrderByWithRelationInput
    Body?: BodyOrderByWithRelationInput
    Contacts?: ContactOrderByRelationAggregateInput
    Observations?: ObservationOrderByRelationAggregateInput
    BankAccounts?: BankAccountOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    photo?: SortOrder
    archive?: SortOrder
    deletedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    birthDate?: DateTimeWithAggregatesFilter | Date | string
    sex?: EnumSEXWithAggregatesFilter | SEX
    photo?: StringNullableWithAggregatesFilter | string | null
    archive?: StringNullableWithAggregatesFilter | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ObservationWhereInput = {
    AND?: Enumerable<ObservationWhereInput>
    OR?: Enumerable<ObservationWhereInput>
    NOT?: Enumerable<ObservationWhereInput>
    id?: UuidFilter | string
    title?: StringFilter | string
    text?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    personId?: UuidFilter | string
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type ObservationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    personId?: SortOrder
    Person?: PersonOrderByWithRelationInput
  }

  export type ObservationWhereUniqueInput = {
    id?: string
  }

  export type ObservationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    personId?: SortOrder
    _count?: ObservationCountOrderByAggregateInput
    _max?: ObservationMaxOrderByAggregateInput
    _min?: ObservationMinOrderByAggregateInput
  }

  export type ObservationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ObservationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ObservationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ObservationScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    personId?: UuidWithAggregatesFilter | string
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    personId?: UuidFilter | string
    publicPlace?: StringFilter | string
    number?: StringFilter | string
    district?: StringFilter | string
    city?: StringFilter | string
    CEP?: StringFilter | string
    complement?: StringNullableFilter | string | null
    reference?: StringNullableFilter | string | null
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    personId?: SortOrder
    publicPlace?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    CEP?: SortOrder
    complement?: SortOrder
    reference?: SortOrder
    Person?: PersonOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = {
    personId?: string
  }

  export type AddressOrderByWithAggregationInput = {
    personId?: SortOrder
    publicPlace?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    CEP?: SortOrder
    complement?: SortOrder
    reference?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    personId?: UuidWithAggregatesFilter | string
    publicPlace?: StringWithAggregatesFilter | string
    number?: StringWithAggregatesFilter | string
    district?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    CEP?: StringWithAggregatesFilter | string
    complement?: StringNullableWithAggregatesFilter | string | null
    reference?: StringNullableWithAggregatesFilter | string | null
  }

  export type ContactWhereInput = {
    AND?: Enumerable<ContactWhereInput>
    OR?: Enumerable<ContactWhereInput>
    NOT?: Enumerable<ContactWhereInput>
    id?: UuidFilter | string
    type?: EnumCONTACT_TYPEFilter | CONTACT_TYPE
    data?: StringFilter | string
    observation?: StringNullableFilter | string | null
    personId?: UuidFilter | string
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    observation?: SortOrder
    personId?: SortOrder
    Person?: PersonOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = {
    id?: string
  }

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    observation?: SortOrder
    personId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContactScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContactScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    type?: EnumCONTACT_TYPEWithAggregatesFilter | CONTACT_TYPE
    data?: StringWithAggregatesFilter | string
    observation?: StringNullableWithAggregatesFilter | string | null
    personId?: UuidWithAggregatesFilter | string
  }

  export type PatientWhereInput = {
    AND?: Enumerable<PatientWhereInput>
    OR?: Enumerable<PatientWhereInput>
    NOT?: Enumerable<PatientWhereInput>
    personId?: UuidFilter | string
    costumerId?: UuidNullableFilter | string | null
    contractId?: UuidNullableFilter | string | null
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
    Costumer?: XOR<CostumerRelationFilter, CostumerWhereInput> | null
    Contract?: XOR<ContractRelationFilter, ContractWhereInput> | null
    diseases?: EnumDISEASENullableListFilter
  }

  export type PatientOrderByWithRelationInput = {
    personId?: SortOrder
    costumerId?: SortOrder
    contractId?: SortOrder
    Person?: PersonOrderByWithRelationInput
    Costumer?: CostumerOrderByWithRelationInput
    Contract?: ContractOrderByWithRelationInput
    diseases?: SortOrder
  }

  export type PatientWhereUniqueInput = {
    personId?: string
  }

  export type PatientOrderByWithAggregationInput = {
    personId?: SortOrder
    costumerId?: SortOrder
    contractId?: SortOrder
    diseases?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PatientScalarWhereWithAggregatesInput>
    OR?: Enumerable<PatientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PatientScalarWhereWithAggregatesInput>
    personId?: UuidWithAggregatesFilter | string
    costumerId?: UuidNullableWithAggregatesFilter | string | null
    contractId?: UuidNullableWithAggregatesFilter | string | null
    diseases?: EnumDISEASENullableListFilter
  }

  export type BankAccountWhereInput = {
    AND?: Enumerable<BankAccountWhereInput>
    OR?: Enumerable<BankAccountWhereInput>
    NOT?: Enumerable<BankAccountWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    type?: EnumBANK_ACCOUNT_TYPEFilter | BANK_ACCOUNT_TYPE
    agency?: StringFilter | string
    account?: StringFilter | string
    digit?: StringFilter | string
    personId?: UuidFilter | string
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    agency?: SortOrder
    account?: SortOrder
    digit?: SortOrder
    personId?: SortOrder
    Person?: PersonOrderByWithRelationInput
  }

  export type BankAccountWhereUniqueInput = {
    id?: string
  }

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    agency?: SortOrder
    account?: SortOrder
    digit?: SortOrder
    personId?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    type?: EnumBANK_ACCOUNT_TYPEWithAggregatesFilter | BANK_ACCOUNT_TYPE
    agency?: StringWithAggregatesFilter | string
    account?: StringWithAggregatesFilter | string
    digit?: StringWithAggregatesFilter | string
    personId?: UuidWithAggregatesFilter | string
  }

  export type BodyWhereInput = {
    AND?: Enumerable<BodyWhereInput>
    OR?: Enumerable<BodyWhereInput>
    NOT?: Enumerable<BodyWhereInput>
    personId?: UuidFilter | string
    weight?: EnumWEIGHTFilter | WEIGHT
    height?: EnumHEIGHTFilter | HEIGHT
    mannequinn?: EnumMANNEQUINNFilter | MANNEQUINN
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type BodyOrderByWithRelationInput = {
    personId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    mannequinn?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type BodyWhereUniqueInput = {
    personId?: string
  }

  export type BodyOrderByWithAggregationInput = {
    personId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    mannequinn?: SortOrder
    _count?: BodyCountOrderByAggregateInput
    _max?: BodyMaxOrderByAggregateInput
    _min?: BodyMinOrderByAggregateInput
  }

  export type BodyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BodyScalarWhereWithAggregatesInput>
    OR?: Enumerable<BodyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BodyScalarWhereWithAggregatesInput>
    personId?: UuidWithAggregatesFilter | string
    weight?: EnumWEIGHTWithAggregatesFilter | WEIGHT
    height?: EnumHEIGHTWithAggregatesFilter | HEIGHT
    mannequinn?: EnumMANNEQUINNWithAggregatesFilter | MANNEQUINN
  }

  export type ContractWhereInput = {
    AND?: Enumerable<ContractWhereInput>
    OR?: Enumerable<ContractWhereInput>
    NOT?: Enumerable<ContractWhereInput>
    id?: UuidFilter | string
    costumerId?: UuidFilter | string
    timeScale?: EnumTIME_SCALEFilter | TIME_SCALE
    initAt?: DateTimeFilter | Date | string
    endAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    acceptedAt?: DateTimeNullableFilter | Date | string | null
    canceledAt?: DateTimeNullableFilter | Date | string | null
    value?: StringFilter | string
    salary?: StringFilter | string
    archives?: StringNullableListFilter
    Payments?: ContractPaymentListRelationFilter
    Patients?: PatientListRelationFilter
    Costumer?: XOR<CostumerRelationFilter, CostumerWhereInput>
    ContractJourney?: ContractJourneyListRelationFilter
    CaregiverToContract?: CaregiverToContractListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    costumerId?: SortOrder
    timeScale?: SortOrder
    initAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
    canceledAt?: SortOrder
    value?: SortOrder
    salary?: SortOrder
    archives?: SortOrder
    Payments?: ContractPaymentOrderByRelationAggregateInput
    Patients?: PatientOrderByRelationAggregateInput
    Costumer?: CostumerOrderByWithRelationInput
    ContractJourney?: ContractJourneyOrderByRelationAggregateInput
    CaregiverToContract?: CaregiverToContractOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = {
    id?: string
  }

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    costumerId?: SortOrder
    timeScale?: SortOrder
    initAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
    canceledAt?: SortOrder
    value?: SortOrder
    salary?: SortOrder
    archives?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContractScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContractScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContractScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    costumerId?: UuidWithAggregatesFilter | string
    timeScale?: EnumTIME_SCALEWithAggregatesFilter | TIME_SCALE
    initAt?: DateTimeWithAggregatesFilter | Date | string
    endAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    acceptedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    value?: StringWithAggregatesFilter | string
    salary?: StringWithAggregatesFilter | string
    archives?: StringNullableListFilter
  }

  export type ContractPaymentWhereInput = {
    AND?: Enumerable<ContractPaymentWhereInput>
    OR?: Enumerable<ContractPaymentWhereInput>
    NOT?: Enumerable<ContractPaymentWhereInput>
    id?: UuidFilter | string
    contractId?: UuidFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    proof?: StringFilter | string
    Contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }

  export type ContractPaymentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    Contract?: ContractOrderByWithRelationInput
  }

  export type ContractPaymentWhereUniqueInput = {
    id?: string
  }

  export type ContractPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    _count?: ContractPaymentCountOrderByAggregateInput
    _max?: ContractPaymentMaxOrderByAggregateInput
    _min?: ContractPaymentMinOrderByAggregateInput
  }

  export type ContractPaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContractPaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContractPaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContractPaymentScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    contractId?: UuidWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    proof?: StringWithAggregatesFilter | string
  }

  export type ContractJourneyWhereInput = {
    AND?: Enumerable<ContractJourneyWhereInput>
    OR?: Enumerable<ContractJourneyWhereInput>
    NOT?: Enumerable<ContractJourneyWhereInput>
    id?: UuidFilter | string
    caregiverOrder?: StringNullableListFilter
    createdAt?: DateTimeNullableFilter | Date | string | null
    contractId?: UuidFilter | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }

  export type ContractJourneyOrderByWithRelationInput = {
    id?: SortOrder
    caregiverOrder?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type ContractJourneyWhereUniqueInput = {
    id?: string
  }

  export type ContractJourneyOrderByWithAggregationInput = {
    id?: SortOrder
    caregiverOrder?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    _count?: ContractJourneyCountOrderByAggregateInput
    _max?: ContractJourneyMaxOrderByAggregateInput
    _min?: ContractJourneyMinOrderByAggregateInput
  }

  export type ContractJourneyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContractJourneyScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContractJourneyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContractJourneyScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    caregiverOrder?: StringNullableListFilter
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    contractId?: UuidWithAggregatesFilter | string
  }

  export type CaregiverToContractWhereInput = {
    AND?: Enumerable<CaregiverToContractWhereInput>
    OR?: Enumerable<CaregiverToContractWhereInput>
    NOT?: Enumerable<CaregiverToContractWhereInput>
    id?: UuidFilter | string
    contractId?: UuidFilter | string
    caregiverId?: UuidFilter | string
    Contract?: XOR<ContractRelationFilter, ContractWhereInput>
    Caregiver?: XOR<CaregiverRelationFilter, CaregiverWhereInput>
    CaregiverPayment?: CaregiverPaymentListRelationFilter
  }

  export type CaregiverToContractOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    caregiverId?: SortOrder
    Contract?: ContractOrderByWithRelationInput
    Caregiver?: CaregiverOrderByWithRelationInput
    CaregiverPayment?: CaregiverPaymentOrderByRelationAggregateInput
  }

  export type CaregiverToContractWhereUniqueInput = {
    id?: string
  }

  export type CaregiverToContractOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    caregiverId?: SortOrder
    _count?: CaregiverToContractCountOrderByAggregateInput
    _max?: CaregiverToContractMaxOrderByAggregateInput
    _min?: CaregiverToContractMinOrderByAggregateInput
  }

  export type CaregiverToContractScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CaregiverToContractScalarWhereWithAggregatesInput>
    OR?: Enumerable<CaregiverToContractScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CaregiverToContractScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    contractId?: UuidWithAggregatesFilter | string
    caregiverId?: UuidWithAggregatesFilter | string
  }

  export type CaregiverPaymentWhereInput = {
    AND?: Enumerable<CaregiverPaymentWhereInput>
    OR?: Enumerable<CaregiverPaymentWhereInput>
    NOT?: Enumerable<CaregiverPaymentWhereInput>
    id?: UuidFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    proof?: StringFilter | string
    caregiverToContractId?: UuidFilter | string
    CaregiverToContract?: XOR<CaregiverToContractRelationFilter, CaregiverToContractWhereInput>
  }

  export type CaregiverPaymentOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    caregiverToContractId?: SortOrder
    CaregiverToContract?: CaregiverToContractOrderByWithRelationInput
  }

  export type CaregiverPaymentWhereUniqueInput = {
    id?: string
  }

  export type CaregiverPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    caregiverToContractId?: SortOrder
    _count?: CaregiverPaymentCountOrderByAggregateInput
    _max?: CaregiverPaymentMaxOrderByAggregateInput
    _min?: CaregiverPaymentMinOrderByAggregateInput
  }

  export type CaregiverPaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CaregiverPaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CaregiverPaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CaregiverPaymentScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    proof?: StringWithAggregatesFilter | string
    caregiverToContractId?: UuidWithAggregatesFilter | string
  }

  export type CaregiverWhereInput = {
    AND?: Enumerable<CaregiverWhereInput>
    OR?: Enumerable<CaregiverWhereInput>
    NOT?: Enumerable<CaregiverWhereInput>
    workerId?: UuidFilter | string
    smoker?: BoolFilter | boolean
    allergyReport?: StringFilter | string
    uniqueTicket?: StringFilter | string
    availableTimeScales?: EnumTIME_SCALENullableListFilter
    diseaseExperiences?: EnumDISEASENullableListFilter
    Worker?: XOR<WorkerRelationFilter, WorkerWhereInput>
    CaregiverToContract?: CaregiverToContractListRelationFilter
  }

  export type CaregiverOrderByWithRelationInput = {
    workerId?: SortOrder
    smoker?: SortOrder
    allergyReport?: SortOrder
    uniqueTicket?: SortOrder
    availableTimeScales?: SortOrder
    diseaseExperiences?: SortOrder
    Worker?: WorkerOrderByWithRelationInput
    CaregiverToContract?: CaregiverToContractOrderByRelationAggregateInput
  }

  export type CaregiverWhereUniqueInput = {
    workerId?: string
    uniqueTicket?: string
  }

  export type CaregiverOrderByWithAggregationInput = {
    workerId?: SortOrder
    smoker?: SortOrder
    allergyReport?: SortOrder
    uniqueTicket?: SortOrder
    availableTimeScales?: SortOrder
    diseaseExperiences?: SortOrder
    _count?: CaregiverCountOrderByAggregateInput
    _max?: CaregiverMaxOrderByAggregateInput
    _min?: CaregiverMinOrderByAggregateInput
  }

  export type CaregiverScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CaregiverScalarWhereWithAggregatesInput>
    OR?: Enumerable<CaregiverScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CaregiverScalarWhereWithAggregatesInput>
    workerId?: UuidWithAggregatesFilter | string
    smoker?: BoolWithAggregatesFilter | boolean
    allergyReport?: StringWithAggregatesFilter | string
    uniqueTicket?: StringWithAggregatesFilter | string
    availableTimeScales?: EnumTIME_SCALENullableListFilter
    diseaseExperiences?: EnumDISEASENullableListFilter
  }

  export type WorkerWhereInput = {
    AND?: Enumerable<WorkerWhereInput>
    OR?: Enumerable<WorkerWhereInput>
    NOT?: Enumerable<WorkerWhereInput>
    credentialId?: UuidFilter | string
    PIS?: StringFilter | string
    dependents?: IntFilter | number
    workerStatus?: EnumWORKER_STATUSFilter | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFilter | CIVIL_STATUS
    Credential?: XOR<CredentialRelationFilter, CredentialWhereInput>
    Caregiver?: XOR<CaregiverRelationFilter, CaregiverWhereInput> | null
  }

  export type WorkerOrderByWithRelationInput = {
    credentialId?: SortOrder
    PIS?: SortOrder
    dependents?: SortOrder
    workerStatus?: SortOrder
    civilStatus?: SortOrder
    Credential?: CredentialOrderByWithRelationInput
    Caregiver?: CaregiverOrderByWithRelationInput
  }

  export type WorkerWhereUniqueInput = {
    credentialId?: string
    PIS?: string
  }

  export type WorkerOrderByWithAggregationInput = {
    credentialId?: SortOrder
    PIS?: SortOrder
    dependents?: SortOrder
    workerStatus?: SortOrder
    civilStatus?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkerScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkerScalarWhereWithAggregatesInput>
    credentialId?: UuidWithAggregatesFilter | string
    PIS?: StringWithAggregatesFilter | string
    dependents?: IntWithAggregatesFilter | number
    workerStatus?: EnumWORKER_STATUSWithAggregatesFilter | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSWithAggregatesFilter | CIVIL_STATUS
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    credentialId?: UuidFilter | string
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFilter | ADMINISTRATIVE_LEVEL
    Credential?: XOR<CredentialRelationFilter, CredentialWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    credentialId?: SortOrder
    administrativeLevel?: SortOrder
    Credential?: CredentialOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = {
    credentialId?: string
  }

  export type AdminOrderByWithAggregationInput = {
    credentialId?: SortOrder
    administrativeLevel?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    credentialId?: UuidWithAggregatesFilter | string
    administrativeLevel?: EnumADMINISTRATIVE_LEVELWithAggregatesFilter | ADMINISTRATIVE_LEVEL
  }

  export type CredentialWhereInput = {
    AND?: Enumerable<CredentialWhereInput>
    OR?: Enumerable<CredentialWhereInput>
    NOT?: Enumerable<CredentialWhereInput>
    personId?: UuidFilter | string
    email?: StringFilter | string
    CPF?: StringFilter | string
    RG?: StringFilter | string
    Person?: XOR<PersonRelationFilter, PersonWhereInput>
    Worker?: XOR<WorkerRelationFilter, WorkerWhereInput> | null
    Admin?: XOR<AdminRelationFilter, AdminWhereInput> | null
    Costumer?: XOR<CostumerRelationFilter, CostumerWhereInput> | null
  }

  export type CredentialOrderByWithRelationInput = {
    personId?: SortOrder
    email?: SortOrder
    CPF?: SortOrder
    RG?: SortOrder
    Person?: PersonOrderByWithRelationInput
    Worker?: WorkerOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
    Costumer?: CostumerOrderByWithRelationInput
  }

  export type CredentialWhereUniqueInput = {
    personId?: string
    email?: string
    CPF?: string
    RG?: string
  }

  export type CredentialOrderByWithAggregationInput = {
    personId?: SortOrder
    email?: SortOrder
    CPF?: SortOrder
    RG?: SortOrder
    _count?: CredentialCountOrderByAggregateInput
    _max?: CredentialMaxOrderByAggregateInput
    _min?: CredentialMinOrderByAggregateInput
  }

  export type CredentialScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CredentialScalarWhereWithAggregatesInput>
    OR?: Enumerable<CredentialScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CredentialScalarWhereWithAggregatesInput>
    personId?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    CPF?: StringWithAggregatesFilter | string
    RG?: StringWithAggregatesFilter | string
  }

  export type CostumerWhereInput = {
    AND?: Enumerable<CostumerWhereInput>
    OR?: Enumerable<CostumerWhereInput>
    NOT?: Enumerable<CostumerWhereInput>
    credentialId?: UuidFilter | string
    favoriteScales?: EnumTIME_SCALENullableListFilter
    Credential?: XOR<CredentialRelationFilter, CredentialWhereInput>
    Patients?: PatientListRelationFilter
    Contract?: ContractListRelationFilter
  }

  export type CostumerOrderByWithRelationInput = {
    credentialId?: SortOrder
    favoriteScales?: SortOrder
    Credential?: CredentialOrderByWithRelationInput
    Patients?: PatientOrderByRelationAggregateInput
    Contract?: ContractOrderByRelationAggregateInput
  }

  export type CostumerWhereUniqueInput = {
    credentialId?: string
  }

  export type CostumerOrderByWithAggregationInput = {
    credentialId?: SortOrder
    favoriteScales?: SortOrder
    _count?: CostumerCountOrderByAggregateInput
    _max?: CostumerMaxOrderByAggregateInput
    _min?: CostumerMinOrderByAggregateInput
  }

  export type CostumerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    credentialId?: UuidWithAggregatesFilter | string
    favoriteScales?: EnumTIME_SCALENullableListFilter
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationCreateInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
    Person: PersonCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
    personId: string
  }

  export type ObservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Person?: PersonUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type ObservationCreateManyInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
    personId: string
  }

  export type ObservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement?: string | null
    reference?: string | null
    Person: PersonCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    personId: string
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement?: string | null
    reference?: string | null
  }

  export type AddressUpdateInput = {
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    Person?: PersonUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    personId: string
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement?: string | null
    reference?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactCreateInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
    Person: PersonCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
    personId: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    Person?: PersonUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
    personId: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    Person: PersonCreateNestedOneWithoutPatientInput
    Costumer?: CostumerCreateNestedOneWithoutPatientsInput
    Contract?: ContractCreateNestedOneWithoutPatientsInput
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedCreateInput = {
    personId: string
    costumerId?: string | null
    contractId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUpdateInput = {
    Person?: PersonUpdateOneRequiredWithoutPatientNestedInput
    Costumer?: CostumerUpdateOneWithoutPatientsNestedInput
    Contract?: ContractUpdateOneWithoutPatientsNestedInput
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    costumerId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientCreateManyInput = {
    personId: string
    costumerId?: string | null
    contractId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUpdateManyMutationInput = {
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    costumerId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type BankAccountCreateInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
    Person: PersonCreateNestedOneWithoutBankAccountsInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
    personId: string
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
    Person?: PersonUpdateOneRequiredWithoutBankAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountCreateManyInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
    personId: string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type BodyCreateInput = {
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
    person: PersonCreateNestedOneWithoutBodyInput
  }

  export type BodyUncheckedCreateInput = {
    personId: string
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
  }

  export type BodyUpdateInput = {
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
    person?: PersonUpdateOneRequiredWithoutBodyNestedInput
  }

  export type BodyUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
  }

  export type BodyCreateManyInput = {
    personId: string
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
  }

  export type BodyUpdateManyMutationInput = {
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
  }

  export type BodyUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
  }

  export type ContractCreateInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentCreateNestedManyWithoutContractInput
    Patients?: PatientCreateNestedManyWithoutContractInput
    Costumer: CostumerCreateNestedOneWithoutContractInput
    ContractJourney?: ContractJourneyCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedCreateNestedManyWithoutContractInput
    Patients?: PatientUncheckedCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyUncheckedCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUpdateManyWithoutContractNestedInput
    Patients?: PatientUpdateManyWithoutContractNestedInput
    Costumer?: CostumerUpdateOneRequiredWithoutContractNestedInput
    ContractJourney?: ContractJourneyUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedUpdateManyWithoutContractNestedInput
    Patients?: PatientUncheckedUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUncheckedUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
  }

  export type ContractPaymentCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
    Contract: ContractCreateNestedOneWithoutPaymentsInput
  }

  export type ContractPaymentUncheckedCreateInput = {
    id?: string
    contractId: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type ContractPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
    Contract?: ContractUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type ContractPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type ContractPaymentCreateManyInput = {
    id?: string
    contractId: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type ContractPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type ContractPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type ContractJourneyCreateInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
    contract: ContractCreateNestedOneWithoutContractJourneyInput
  }

  export type ContractJourneyUncheckedCreateInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
    contractId: string
  }

  export type ContractJourneyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contract?: ContractUpdateOneRequiredWithoutContractJourneyNestedInput
  }

  export type ContractJourneyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type ContractJourneyCreateManyInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
    contractId: string
  }

  export type ContractJourneyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContractJourneyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverToContractCreateInput = {
    id?: string
    Contract: ContractCreateNestedOneWithoutCaregiverToContractInput
    Caregiver: CaregiverCreateNestedOneWithoutCaregiverToContractInput
    CaregiverPayment?: CaregiverPaymentCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractUncheckedCreateInput = {
    id?: string
    contractId: string
    caregiverId: string
    CaregiverPayment?: CaregiverPaymentUncheckedCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Contract?: ContractUpdateOneRequiredWithoutCaregiverToContractNestedInput
    Caregiver?: CaregiverUpdateOneRequiredWithoutCaregiverToContractNestedInput
    CaregiverPayment?: CaregiverPaymentUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    CaregiverPayment?: CaregiverPaymentUncheckedUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractCreateManyInput = {
    id?: string
    contractId: string
    caregiverId: string
  }

  export type CaregiverToContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverToContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
    CaregiverToContract: CaregiverToContractCreateNestedOneWithoutCaregiverPaymentInput
  }

  export type CaregiverPaymentUncheckedCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
    caregiverToContractId: string
  }

  export type CaregiverPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
    CaregiverToContract?: CaregiverToContractUpdateOneRequiredWithoutCaregiverPaymentNestedInput
  }

  export type CaregiverPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
    caregiverToContractId?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentCreateManyInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
    caregiverToContractId: string
  }

  export type CaregiverPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
    caregiverToContractId?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverCreateInput = {
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
    Worker: WorkerCreateNestedOneWithoutCaregiverInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateInput = {
    workerId: string
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUpdateInput = {
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
    Worker?: WorkerUpdateOneRequiredWithoutCaregiverNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverCreateManyInput = {
    workerId: string
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
  }

  export type CaregiverUpdateManyMutationInput = {
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
  }

  export type CaregiverUncheckedUpdateManyInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
  }

  export type WorkerCreateInput = {
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    Credential: CredentialCreateNestedOneWithoutWorkerInput
    Caregiver?: CaregiverCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    credentialId: string
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    Caregiver?: CaregiverUncheckedCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
    Credential?: CredentialUpdateOneRequiredWithoutWorkerNestedInput
    Caregiver?: CaregiverUpdateOneWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
    Caregiver?: CaregiverUncheckedUpdateOneWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    credentialId: string
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
  }

  export type WorkerUpdateManyMutationInput = {
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
  }

  export type WorkerUncheckedUpdateManyInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
  }

  export type AdminCreateInput = {
    administrativeLevel: ADMINISTRATIVE_LEVEL
    Credential: CredentialCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    credentialId: string
    administrativeLevel: ADMINISTRATIVE_LEVEL
  }

  export type AdminUpdateInput = {
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
    Credential?: CredentialUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
  }

  export type AdminCreateManyInput = {
    credentialId: string
    administrativeLevel: ADMINISTRATIVE_LEVEL
  }

  export type AdminUpdateManyMutationInput = {
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
  }

  export type AdminUncheckedUpdateManyInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
  }

  export type CredentialCreateInput = {
    email: string
    CPF: string
    RG: string
    Person: PersonCreateNestedOneWithoutCredentialInput
    Worker?: WorkerCreateNestedOneWithoutCredentialInput
    Admin?: AdminCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUncheckedCreateInput = {
    personId: string
    email: string
    CPF: string
    RG: string
    Worker?: WorkerUncheckedCreateNestedOneWithoutCredentialInput
    Admin?: AdminUncheckedCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerUncheckedCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Person?: PersonUpdateOneRequiredWithoutCredentialNestedInput
    Worker?: WorkerUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Worker?: WorkerUncheckedUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUncheckedUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialCreateManyInput = {
    personId: string
    email: string
    CPF: string
    RG: string
  }

  export type CredentialUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
  }

  export type CredentialUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
  }

  export type CostumerCreateInput = {
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential: CredentialCreateNestedOneWithoutCostumerInput
    Patients?: PatientCreateNestedManyWithoutCostumerInput
    Contract?: ContractCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUncheckedCreateInput = {
    credentialId: string
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedCreateNestedManyWithoutCostumerInput
    Contract?: ContractUncheckedCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUpdateInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential?: CredentialUpdateOneRequiredWithoutCostumerNestedInput
    Patients?: PatientUpdateManyWithoutCostumerNestedInput
    Contract?: ContractUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUncheckedUpdateInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedUpdateManyWithoutCostumerNestedInput
    Contract?: ContractUncheckedUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerCreateManyInput = {
    credentialId: string
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
  }

  export type CostumerUpdateManyMutationInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
  }

  export type CostumerUncheckedUpdateManyInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumSEXFilter = {
    equals?: SEX
    in?: Enumerable<SEX>
    notIn?: Enumerable<SEX>
    not?: NestedEnumSEXFilter | SEX
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CredentialRelationFilter = {
    is?: CredentialWhereInput
    isNot?: CredentialWhereInput
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type BodyRelationFilter = {
    is?: BodyWhereInput | null
    isNot?: BodyWhereInput | null
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type ObservationListRelationFilter = {
    every?: ObservationWhereInput
    some?: ObservationWhereInput
    none?: ObservationWhereInput
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    photo?: SortOrder
    archive?: SortOrder
    deletedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    photo?: SortOrder
    archive?: SortOrder
    deletedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    photo?: SortOrder
    archive?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumSEXWithAggregatesFilter = {
    equals?: SEX
    in?: Enumerable<SEX>
    notIn?: Enumerable<SEX>
    not?: NestedEnumSEXWithAggregatesFilter | SEX
    _count?: NestedIntFilter
    _min?: NestedEnumSEXFilter
    _max?: NestedEnumSEXFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type ObservationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    personId?: SortOrder
  }

  export type ObservationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    personId?: SortOrder
  }

  export type ObservationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    personId?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    personId?: SortOrder
    publicPlace?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    CEP?: SortOrder
    complement?: SortOrder
    reference?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    personId?: SortOrder
    publicPlace?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    CEP?: SortOrder
    complement?: SortOrder
    reference?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    personId?: SortOrder
    publicPlace?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    CEP?: SortOrder
    complement?: SortOrder
    reference?: SortOrder
  }

  export type EnumCONTACT_TYPEFilter = {
    equals?: CONTACT_TYPE
    in?: Enumerable<CONTACT_TYPE>
    notIn?: Enumerable<CONTACT_TYPE>
    not?: NestedEnumCONTACT_TYPEFilter | CONTACT_TYPE
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    observation?: SortOrder
    personId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    observation?: SortOrder
    personId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    observation?: SortOrder
    personId?: SortOrder
  }

  export type EnumCONTACT_TYPEWithAggregatesFilter = {
    equals?: CONTACT_TYPE
    in?: Enumerable<CONTACT_TYPE>
    notIn?: Enumerable<CONTACT_TYPE>
    not?: NestedEnumCONTACT_TYPEWithAggregatesFilter | CONTACT_TYPE
    _count?: NestedIntFilter
    _min?: NestedEnumCONTACT_TYPEFilter
    _max?: NestedEnumCONTACT_TYPEFilter
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type CostumerRelationFilter = {
    is?: CostumerWhereInput | null
    isNot?: CostumerWhereInput | null
  }

  export type ContractRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type EnumDISEASENullableListFilter = {
    equals?: Enumerable<DISEASE> | null
    has?: DISEASE | null
    hasEvery?: Enumerable<DISEASE>
    hasSome?: Enumerable<DISEASE>
    isEmpty?: boolean
  }

  export type PatientCountOrderByAggregateInput = {
    personId?: SortOrder
    costumerId?: SortOrder
    contractId?: SortOrder
    diseases?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    personId?: SortOrder
    costumerId?: SortOrder
    contractId?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    personId?: SortOrder
    costumerId?: SortOrder
    contractId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumBANK_ACCOUNT_TYPEFilter = {
    equals?: BANK_ACCOUNT_TYPE
    in?: Enumerable<BANK_ACCOUNT_TYPE>
    notIn?: Enumerable<BANK_ACCOUNT_TYPE>
    not?: NestedEnumBANK_ACCOUNT_TYPEFilter | BANK_ACCOUNT_TYPE
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    agency?: SortOrder
    account?: SortOrder
    digit?: SortOrder
    personId?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    agency?: SortOrder
    account?: SortOrder
    digit?: SortOrder
    personId?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    agency?: SortOrder
    account?: SortOrder
    digit?: SortOrder
    personId?: SortOrder
  }

  export type EnumBANK_ACCOUNT_TYPEWithAggregatesFilter = {
    equals?: BANK_ACCOUNT_TYPE
    in?: Enumerable<BANK_ACCOUNT_TYPE>
    notIn?: Enumerable<BANK_ACCOUNT_TYPE>
    not?: NestedEnumBANK_ACCOUNT_TYPEWithAggregatesFilter | BANK_ACCOUNT_TYPE
    _count?: NestedIntFilter
    _min?: NestedEnumBANK_ACCOUNT_TYPEFilter
    _max?: NestedEnumBANK_ACCOUNT_TYPEFilter
  }

  export type EnumWEIGHTFilter = {
    equals?: WEIGHT
    in?: Enumerable<WEIGHT>
    notIn?: Enumerable<WEIGHT>
    not?: NestedEnumWEIGHTFilter | WEIGHT
  }

  export type EnumHEIGHTFilter = {
    equals?: HEIGHT
    in?: Enumerable<HEIGHT>
    notIn?: Enumerable<HEIGHT>
    not?: NestedEnumHEIGHTFilter | HEIGHT
  }

  export type EnumMANNEQUINNFilter = {
    equals?: MANNEQUINN
    in?: Enumerable<MANNEQUINN>
    notIn?: Enumerable<MANNEQUINN>
    not?: NestedEnumMANNEQUINNFilter | MANNEQUINN
  }

  export type BodyCountOrderByAggregateInput = {
    personId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    mannequinn?: SortOrder
  }

  export type BodyMaxOrderByAggregateInput = {
    personId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    mannequinn?: SortOrder
  }

  export type BodyMinOrderByAggregateInput = {
    personId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    mannequinn?: SortOrder
  }

  export type EnumWEIGHTWithAggregatesFilter = {
    equals?: WEIGHT
    in?: Enumerable<WEIGHT>
    notIn?: Enumerable<WEIGHT>
    not?: NestedEnumWEIGHTWithAggregatesFilter | WEIGHT
    _count?: NestedIntFilter
    _min?: NestedEnumWEIGHTFilter
    _max?: NestedEnumWEIGHTFilter
  }

  export type EnumHEIGHTWithAggregatesFilter = {
    equals?: HEIGHT
    in?: Enumerable<HEIGHT>
    notIn?: Enumerable<HEIGHT>
    not?: NestedEnumHEIGHTWithAggregatesFilter | HEIGHT
    _count?: NestedIntFilter
    _min?: NestedEnumHEIGHTFilter
    _max?: NestedEnumHEIGHTFilter
  }

  export type EnumMANNEQUINNWithAggregatesFilter = {
    equals?: MANNEQUINN
    in?: Enumerable<MANNEQUINN>
    notIn?: Enumerable<MANNEQUINN>
    not?: NestedEnumMANNEQUINNWithAggregatesFilter | MANNEQUINN
    _count?: NestedIntFilter
    _min?: NestedEnumMANNEQUINNFilter
    _max?: NestedEnumMANNEQUINNFilter
  }

  export type EnumTIME_SCALEFilter = {
    equals?: TIME_SCALE
    in?: Enumerable<TIME_SCALE>
    notIn?: Enumerable<TIME_SCALE>
    not?: NestedEnumTIME_SCALEFilter | TIME_SCALE
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type ContractPaymentListRelationFilter = {
    every?: ContractPaymentWhereInput
    some?: ContractPaymentWhereInput
    none?: ContractPaymentWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type ContractJourneyListRelationFilter = {
    every?: ContractJourneyWhereInput
    some?: ContractJourneyWhereInput
    none?: ContractJourneyWhereInput
  }

  export type CaregiverToContractListRelationFilter = {
    every?: CaregiverToContractWhereInput
    some?: CaregiverToContractWhereInput
    none?: CaregiverToContractWhereInput
  }

  export type ContractPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractJourneyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaregiverToContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    costumerId?: SortOrder
    timeScale?: SortOrder
    initAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
    canceledAt?: SortOrder
    value?: SortOrder
    salary?: SortOrder
    archives?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    costumerId?: SortOrder
    timeScale?: SortOrder
    initAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
    canceledAt?: SortOrder
    value?: SortOrder
    salary?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    costumerId?: SortOrder
    timeScale?: SortOrder
    initAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
    canceledAt?: SortOrder
    value?: SortOrder
    salary?: SortOrder
  }

  export type EnumTIME_SCALEWithAggregatesFilter = {
    equals?: TIME_SCALE
    in?: Enumerable<TIME_SCALE>
    notIn?: Enumerable<TIME_SCALE>
    not?: NestedEnumTIME_SCALEWithAggregatesFilter | TIME_SCALE
    _count?: NestedIntFilter
    _min?: NestedEnumTIME_SCALEFilter
    _max?: NestedEnumTIME_SCALEFilter
  }

  export type ContractPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
  }

  export type ContractPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
  }

  export type ContractPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
  }

  export type ContractJourneyCountOrderByAggregateInput = {
    id?: SortOrder
    caregiverOrder?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type ContractJourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type ContractJourneyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type CaregiverRelationFilter = {
    is?: CaregiverWhereInput
    isNot?: CaregiverWhereInput
  }

  export type CaregiverPaymentListRelationFilter = {
    every?: CaregiverPaymentWhereInput
    some?: CaregiverPaymentWhereInput
    none?: CaregiverPaymentWhereInput
  }

  export type CaregiverPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaregiverToContractCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    caregiverId?: SortOrder
  }

  export type CaregiverToContractMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    caregiverId?: SortOrder
  }

  export type CaregiverToContractMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    caregiverId?: SortOrder
  }

  export type CaregiverToContractRelationFilter = {
    is?: CaregiverToContractWhereInput
    isNot?: CaregiverToContractWhereInput
  }

  export type CaregiverPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    caregiverToContractId?: SortOrder
  }

  export type CaregiverPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    caregiverToContractId?: SortOrder
  }

  export type CaregiverPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    proof?: SortOrder
    caregiverToContractId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumTIME_SCALENullableListFilter = {
    equals?: Enumerable<TIME_SCALE> | null
    has?: TIME_SCALE | null
    hasEvery?: Enumerable<TIME_SCALE>
    hasSome?: Enumerable<TIME_SCALE>
    isEmpty?: boolean
  }

  export type WorkerRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type CaregiverCountOrderByAggregateInput = {
    workerId?: SortOrder
    smoker?: SortOrder
    allergyReport?: SortOrder
    uniqueTicket?: SortOrder
    availableTimeScales?: SortOrder
    diseaseExperiences?: SortOrder
  }

  export type CaregiverMaxOrderByAggregateInput = {
    workerId?: SortOrder
    smoker?: SortOrder
    allergyReport?: SortOrder
    uniqueTicket?: SortOrder
  }

  export type CaregiverMinOrderByAggregateInput = {
    workerId?: SortOrder
    smoker?: SortOrder
    allergyReport?: SortOrder
    uniqueTicket?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumWORKER_STATUSFilter = {
    equals?: WORKER_STATUS
    in?: Enumerable<WORKER_STATUS>
    notIn?: Enumerable<WORKER_STATUS>
    not?: NestedEnumWORKER_STATUSFilter | WORKER_STATUS
  }

  export type EnumCIVIL_STATUSFilter = {
    equals?: CIVIL_STATUS
    in?: Enumerable<CIVIL_STATUS>
    notIn?: Enumerable<CIVIL_STATUS>
    not?: NestedEnumCIVIL_STATUSFilter | CIVIL_STATUS
  }

  export type WorkerCountOrderByAggregateInput = {
    credentialId?: SortOrder
    PIS?: SortOrder
    dependents?: SortOrder
    workerStatus?: SortOrder
    civilStatus?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    dependents?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    credentialId?: SortOrder
    PIS?: SortOrder
    dependents?: SortOrder
    workerStatus?: SortOrder
    civilStatus?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    credentialId?: SortOrder
    PIS?: SortOrder
    dependents?: SortOrder
    workerStatus?: SortOrder
    civilStatus?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    dependents?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumWORKER_STATUSWithAggregatesFilter = {
    equals?: WORKER_STATUS
    in?: Enumerable<WORKER_STATUS>
    notIn?: Enumerable<WORKER_STATUS>
    not?: NestedEnumWORKER_STATUSWithAggregatesFilter | WORKER_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumWORKER_STATUSFilter
    _max?: NestedEnumWORKER_STATUSFilter
  }

  export type EnumCIVIL_STATUSWithAggregatesFilter = {
    equals?: CIVIL_STATUS
    in?: Enumerable<CIVIL_STATUS>
    notIn?: Enumerable<CIVIL_STATUS>
    not?: NestedEnumCIVIL_STATUSWithAggregatesFilter | CIVIL_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumCIVIL_STATUSFilter
    _max?: NestedEnumCIVIL_STATUSFilter
  }

  export type EnumADMINISTRATIVE_LEVELFilter = {
    equals?: ADMINISTRATIVE_LEVEL
    in?: Enumerable<ADMINISTRATIVE_LEVEL>
    notIn?: Enumerable<ADMINISTRATIVE_LEVEL>
    not?: NestedEnumADMINISTRATIVE_LEVELFilter | ADMINISTRATIVE_LEVEL
  }

  export type AdminCountOrderByAggregateInput = {
    credentialId?: SortOrder
    administrativeLevel?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    credentialId?: SortOrder
    administrativeLevel?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    credentialId?: SortOrder
    administrativeLevel?: SortOrder
  }

  export type EnumADMINISTRATIVE_LEVELWithAggregatesFilter = {
    equals?: ADMINISTRATIVE_LEVEL
    in?: Enumerable<ADMINISTRATIVE_LEVEL>
    notIn?: Enumerable<ADMINISTRATIVE_LEVEL>
    not?: NestedEnumADMINISTRATIVE_LEVELWithAggregatesFilter | ADMINISTRATIVE_LEVEL
    _count?: NestedIntFilter
    _min?: NestedEnumADMINISTRATIVE_LEVELFilter
    _max?: NestedEnumADMINISTRATIVE_LEVELFilter
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type CredentialCountOrderByAggregateInput = {
    personId?: SortOrder
    email?: SortOrder
    CPF?: SortOrder
    RG?: SortOrder
  }

  export type CredentialMaxOrderByAggregateInput = {
    personId?: SortOrder
    email?: SortOrder
    CPF?: SortOrder
    RG?: SortOrder
  }

  export type CredentialMinOrderByAggregateInput = {
    personId?: SortOrder
    email?: SortOrder
    CPF?: SortOrder
    RG?: SortOrder
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CostumerCountOrderByAggregateInput = {
    credentialId?: SortOrder
    favoriteScales?: SortOrder
  }

  export type CostumerMaxOrderByAggregateInput = {
    credentialId?: SortOrder
  }

  export type CostumerMinOrderByAggregateInput = {
    credentialId?: SortOrder
  }

  export type CredentialCreateNestedOneWithoutPersonInput = {
    create?: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutPersonInput
    connect?: CredentialWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutPersonInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    connect?: AddressWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutPersonInput = {
    create?: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPersonInput
    connect?: PatientWhereUniqueInput
  }

  export type BodyCreateNestedOneWithoutPersonInput = {
    create?: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
    connectOrCreate?: BodyCreateOrConnectWithoutPersonInput
    connect?: BodyWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ContactCreateWithoutPersonInput>, Enumerable<ContactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutPersonInput>
    createMany?: ContactCreateManyPersonInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type ObservationCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ObservationCreateWithoutPersonInput>, Enumerable<ObservationUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ObservationCreateOrConnectWithoutPersonInput>
    createMany?: ObservationCreateManyPersonInputEnvelope
    connect?: Enumerable<ObservationWhereUniqueInput>
  }

  export type BankAccountCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<BankAccountCreateWithoutPersonInput>, Enumerable<BankAccountUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<BankAccountCreateOrConnectWithoutPersonInput>
    createMany?: BankAccountCreateManyPersonInputEnvelope
    connect?: Enumerable<BankAccountWhereUniqueInput>
  }

  export type CredentialUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutPersonInput
    connect?: CredentialWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    connect?: AddressWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPersonInput
    connect?: PatientWhereUniqueInput
  }

  export type BodyUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
    connectOrCreate?: BodyCreateOrConnectWithoutPersonInput
    connect?: BodyWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ContactCreateWithoutPersonInput>, Enumerable<ContactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutPersonInput>
    createMany?: ContactCreateManyPersonInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type ObservationUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ObservationCreateWithoutPersonInput>, Enumerable<ObservationUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ObservationCreateOrConnectWithoutPersonInput>
    createMany?: ObservationCreateManyPersonInputEnvelope
    connect?: Enumerable<ObservationWhereUniqueInput>
  }

  export type BankAccountUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<BankAccountCreateWithoutPersonInput>, Enumerable<BankAccountUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<BankAccountCreateOrConnectWithoutPersonInput>
    createMany?: BankAccountCreateManyPersonInputEnvelope
    connect?: Enumerable<BankAccountWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSEXFieldUpdateOperationsInput = {
    set?: SEX
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CredentialUpdateOneWithoutPersonNestedInput = {
    create?: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutPersonInput
    upsert?: CredentialUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: CredentialWhereUniqueInput
    update?: XOR<CredentialUpdateWithoutPersonInput, CredentialUncheckedUpdateWithoutPersonInput>
  }

  export type AddressUpdateOneWithoutPersonNestedInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    upsert?: AddressUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type PatientUpdateOneWithoutPersonNestedInput = {
    create?: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPersonInput
    upsert?: PatientUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<PatientUpdateWithoutPersonInput, PatientUncheckedUpdateWithoutPersonInput>
  }

  export type BodyUpdateOneWithoutPersonNestedInput = {
    create?: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
    connectOrCreate?: BodyCreateOrConnectWithoutPersonInput
    upsert?: BodyUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: BodyWhereUniqueInput
    update?: XOR<BodyUpdateWithoutPersonInput, BodyUncheckedUpdateWithoutPersonInput>
  }

  export type ContactUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ContactCreateWithoutPersonInput>, Enumerable<ContactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ContactCreateManyPersonInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type ObservationUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ObservationCreateWithoutPersonInput>, Enumerable<ObservationUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ObservationCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ObservationUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ObservationCreateManyPersonInputEnvelope
    set?: Enumerable<ObservationWhereUniqueInput>
    disconnect?: Enumerable<ObservationWhereUniqueInput>
    delete?: Enumerable<ObservationWhereUniqueInput>
    connect?: Enumerable<ObservationWhereUniqueInput>
    update?: Enumerable<ObservationUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ObservationUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ObservationScalarWhereInput>
  }

  export type BankAccountUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<BankAccountCreateWithoutPersonInput>, Enumerable<BankAccountUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<BankAccountCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<BankAccountUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: BankAccountCreateManyPersonInputEnvelope
    set?: Enumerable<BankAccountWhereUniqueInput>
    disconnect?: Enumerable<BankAccountWhereUniqueInput>
    delete?: Enumerable<BankAccountWhereUniqueInput>
    connect?: Enumerable<BankAccountWhereUniqueInput>
    update?: Enumerable<BankAccountUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<BankAccountUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<BankAccountScalarWhereInput>
  }

  export type CredentialUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutPersonInput
    upsert?: CredentialUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: CredentialWhereUniqueInput
    update?: XOR<CredentialUpdateWithoutPersonInput, CredentialUncheckedUpdateWithoutPersonInput>
  }

  export type AddressUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    upsert?: AddressUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type PatientUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPersonInput
    upsert?: PatientUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<PatientUpdateWithoutPersonInput, PatientUncheckedUpdateWithoutPersonInput>
  }

  export type BodyUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
    connectOrCreate?: BodyCreateOrConnectWithoutPersonInput
    upsert?: BodyUpsertWithoutPersonInput
    disconnect?: boolean
    delete?: boolean
    connect?: BodyWhereUniqueInput
    update?: XOR<BodyUpdateWithoutPersonInput, BodyUncheckedUpdateWithoutPersonInput>
  }

  export type ContactUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ContactCreateWithoutPersonInput>, Enumerable<ContactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ContactCreateManyPersonInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type ObservationUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ObservationCreateWithoutPersonInput>, Enumerable<ObservationUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ObservationCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ObservationUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ObservationCreateManyPersonInputEnvelope
    set?: Enumerable<ObservationWhereUniqueInput>
    disconnect?: Enumerable<ObservationWhereUniqueInput>
    delete?: Enumerable<ObservationWhereUniqueInput>
    connect?: Enumerable<ObservationWhereUniqueInput>
    update?: Enumerable<ObservationUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ObservationUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ObservationScalarWhereInput>
  }

  export type BankAccountUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<BankAccountCreateWithoutPersonInput>, Enumerable<BankAccountUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<BankAccountCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<BankAccountUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: BankAccountCreateManyPersonInputEnvelope
    set?: Enumerable<BankAccountWhereUniqueInput>
    disconnect?: Enumerable<BankAccountWhereUniqueInput>
    delete?: Enumerable<BankAccountWhereUniqueInput>
    connect?: Enumerable<BankAccountWhereUniqueInput>
    update?: Enumerable<BankAccountUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<BankAccountUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<BankAccountScalarWhereInput>
  }

  export type PersonCreateNestedOneWithoutObservationsInput = {
    create?: XOR<PersonCreateWithoutObservationsInput, PersonUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutObservationsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<PersonCreateWithoutObservationsInput, PersonUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutObservationsInput
    upsert?: PersonUpsertWithoutObservationsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutObservationsInput, PersonUncheckedUpdateWithoutObservationsInput>
  }

  export type PersonCreateNestedOneWithoutAddressInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    upsert?: PersonUpsertWithoutAddressInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type PersonCreateNestedOneWithoutContactsInput = {
    create?: XOR<PersonCreateWithoutContactsInput, PersonUncheckedCreateWithoutContactsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutContactsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumCONTACT_TYPEFieldUpdateOperationsInput = {
    set?: CONTACT_TYPE
  }

  export type PersonUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<PersonCreateWithoutContactsInput, PersonUncheckedCreateWithoutContactsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutContactsInput
    upsert?: PersonUpsertWithoutContactsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutContactsInput, PersonUncheckedUpdateWithoutContactsInput>
  }

  export type PersonCreateNestedOneWithoutPatientInput = {
    create?: XOR<PersonCreateWithoutPatientInput, PersonUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPatientInput
    connect?: PersonWhereUniqueInput
  }

  export type CostumerCreateNestedOneWithoutPatientsInput = {
    create?: XOR<CostumerCreateWithoutPatientsInput, CostumerUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutPatientsInput
    connect?: CostumerWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutPatientsInput = {
    create?: XOR<ContractCreateWithoutPatientsInput, ContractUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPatientsInput
    connect?: ContractWhereUniqueInput
  }

  export type PatientCreatediseasesInput = {
    set: Enumerable<DISEASE>
  }

  export type PersonUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<PersonCreateWithoutPatientInput, PersonUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPatientInput
    upsert?: PersonUpsertWithoutPatientInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutPatientInput, PersonUncheckedUpdateWithoutPatientInput>
  }

  export type CostumerUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<CostumerCreateWithoutPatientsInput, CostumerUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutPatientsInput
    upsert?: CostumerUpsertWithoutPatientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CostumerWhereUniqueInput
    update?: XOR<CostumerUpdateWithoutPatientsInput, CostumerUncheckedUpdateWithoutPatientsInput>
  }

  export type ContractUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<ContractCreateWithoutPatientsInput, ContractUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPatientsInput
    upsert?: ContractUpsertWithoutPatientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<ContractUpdateWithoutPatientsInput, ContractUncheckedUpdateWithoutPatientsInput>
  }

  export type PatientUpdatediseasesInput = {
    set?: Enumerable<DISEASE>
    push?: Enumerable<DISEASE>
  }

  export type PersonCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<PersonCreateWithoutBankAccountsInput, PersonUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBankAccountsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput = {
    set?: BANK_ACCOUNT_TYPE
  }

  export type PersonUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<PersonCreateWithoutBankAccountsInput, PersonUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBankAccountsInput
    upsert?: PersonUpsertWithoutBankAccountsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutBankAccountsInput, PersonUncheckedUpdateWithoutBankAccountsInput>
  }

  export type PersonCreateNestedOneWithoutBodyInput = {
    create?: XOR<PersonCreateWithoutBodyInput, PersonUncheckedCreateWithoutBodyInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBodyInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumWEIGHTFieldUpdateOperationsInput = {
    set?: WEIGHT
  }

  export type EnumHEIGHTFieldUpdateOperationsInput = {
    set?: HEIGHT
  }

  export type EnumMANNEQUINNFieldUpdateOperationsInput = {
    set?: MANNEQUINN
  }

  export type PersonUpdateOneRequiredWithoutBodyNestedInput = {
    create?: XOR<PersonCreateWithoutBodyInput, PersonUncheckedCreateWithoutBodyInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBodyInput
    upsert?: PersonUpsertWithoutBodyInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutBodyInput, PersonUncheckedUpdateWithoutBodyInput>
  }

  export type ContractCreatearchivesInput = {
    set: Enumerable<string>
  }

  export type ContractPaymentCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<ContractPaymentCreateWithoutContractInput>, Enumerable<ContractPaymentUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractPaymentCreateOrConnectWithoutContractInput>
    createMany?: ContractPaymentCreateManyContractInputEnvelope
    connect?: Enumerable<ContractPaymentWhereUniqueInput>
  }

  export type PatientCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<PatientCreateWithoutContractInput>, Enumerable<PatientUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutContractInput>
    createMany?: PatientCreateManyContractInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type CostumerCreateNestedOneWithoutContractInput = {
    create?: XOR<CostumerCreateWithoutContractInput, CostumerUncheckedCreateWithoutContractInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutContractInput
    connect?: CostumerWhereUniqueInput
  }

  export type ContractJourneyCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<ContractJourneyCreateWithoutContractInput>, Enumerable<ContractJourneyUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractJourneyCreateOrConnectWithoutContractInput>
    createMany?: ContractJourneyCreateManyContractInputEnvelope
    connect?: Enumerable<ContractJourneyWhereUniqueInput>
  }

  export type CaregiverToContractCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutContractInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutContractInput>
    createMany?: CaregiverToContractCreateManyContractInputEnvelope
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
  }

  export type ContractPaymentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<ContractPaymentCreateWithoutContractInput>, Enumerable<ContractPaymentUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractPaymentCreateOrConnectWithoutContractInput>
    createMany?: ContractPaymentCreateManyContractInputEnvelope
    connect?: Enumerable<ContractPaymentWhereUniqueInput>
  }

  export type PatientUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<PatientCreateWithoutContractInput>, Enumerable<PatientUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutContractInput>
    createMany?: PatientCreateManyContractInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type ContractJourneyUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<ContractJourneyCreateWithoutContractInput>, Enumerable<ContractJourneyUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractJourneyCreateOrConnectWithoutContractInput>
    createMany?: ContractJourneyCreateManyContractInputEnvelope
    connect?: Enumerable<ContractJourneyWhereUniqueInput>
  }

  export type CaregiverToContractUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutContractInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutContractInput>
    createMany?: CaregiverToContractCreateManyContractInputEnvelope
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
  }

  export type EnumTIME_SCALEFieldUpdateOperationsInput = {
    set?: TIME_SCALE
  }

  export type ContractUpdatearchivesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ContractPaymentUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<ContractPaymentCreateWithoutContractInput>, Enumerable<ContractPaymentUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractPaymentCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<ContractPaymentUpsertWithWhereUniqueWithoutContractInput>
    createMany?: ContractPaymentCreateManyContractInputEnvelope
    set?: Enumerable<ContractPaymentWhereUniqueInput>
    disconnect?: Enumerable<ContractPaymentWhereUniqueInput>
    delete?: Enumerable<ContractPaymentWhereUniqueInput>
    connect?: Enumerable<ContractPaymentWhereUniqueInput>
    update?: Enumerable<ContractPaymentUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<ContractPaymentUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<ContractPaymentScalarWhereInput>
  }

  export type PatientUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutContractInput>, Enumerable<PatientUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutContractInput>
    createMany?: PatientCreateManyContractInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type CostumerUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<CostumerCreateWithoutContractInput, CostumerUncheckedCreateWithoutContractInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutContractInput
    upsert?: CostumerUpsertWithoutContractInput
    connect?: CostumerWhereUniqueInput
    update?: XOR<CostumerUpdateWithoutContractInput, CostumerUncheckedUpdateWithoutContractInput>
  }

  export type ContractJourneyUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<ContractJourneyCreateWithoutContractInput>, Enumerable<ContractJourneyUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractJourneyCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<ContractJourneyUpsertWithWhereUniqueWithoutContractInput>
    createMany?: ContractJourneyCreateManyContractInputEnvelope
    set?: Enumerable<ContractJourneyWhereUniqueInput>
    disconnect?: Enumerable<ContractJourneyWhereUniqueInput>
    delete?: Enumerable<ContractJourneyWhereUniqueInput>
    connect?: Enumerable<ContractJourneyWhereUniqueInput>
    update?: Enumerable<ContractJourneyUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<ContractJourneyUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<ContractJourneyScalarWhereInput>
  }

  export type CaregiverToContractUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutContractInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<CaregiverToContractUpsertWithWhereUniqueWithoutContractInput>
    createMany?: CaregiverToContractCreateManyContractInputEnvelope
    set?: Enumerable<CaregiverToContractWhereUniqueInput>
    disconnect?: Enumerable<CaregiverToContractWhereUniqueInput>
    delete?: Enumerable<CaregiverToContractWhereUniqueInput>
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
    update?: Enumerable<CaregiverToContractUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<CaregiverToContractUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<CaregiverToContractScalarWhereInput>
  }

  export type ContractPaymentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<ContractPaymentCreateWithoutContractInput>, Enumerable<ContractPaymentUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractPaymentCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<ContractPaymentUpsertWithWhereUniqueWithoutContractInput>
    createMany?: ContractPaymentCreateManyContractInputEnvelope
    set?: Enumerable<ContractPaymentWhereUniqueInput>
    disconnect?: Enumerable<ContractPaymentWhereUniqueInput>
    delete?: Enumerable<ContractPaymentWhereUniqueInput>
    connect?: Enumerable<ContractPaymentWhereUniqueInput>
    update?: Enumerable<ContractPaymentUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<ContractPaymentUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<ContractPaymentScalarWhereInput>
  }

  export type PatientUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutContractInput>, Enumerable<PatientUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutContractInput>
    createMany?: PatientCreateManyContractInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type ContractJourneyUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<ContractJourneyCreateWithoutContractInput>, Enumerable<ContractJourneyUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<ContractJourneyCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<ContractJourneyUpsertWithWhereUniqueWithoutContractInput>
    createMany?: ContractJourneyCreateManyContractInputEnvelope
    set?: Enumerable<ContractJourneyWhereUniqueInput>
    disconnect?: Enumerable<ContractJourneyWhereUniqueInput>
    delete?: Enumerable<ContractJourneyWhereUniqueInput>
    connect?: Enumerable<ContractJourneyWhereUniqueInput>
    update?: Enumerable<ContractJourneyUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<ContractJourneyUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<ContractJourneyScalarWhereInput>
  }

  export type CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutContractInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutContractInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutContractInput>
    upsert?: Enumerable<CaregiverToContractUpsertWithWhereUniqueWithoutContractInput>
    createMany?: CaregiverToContractCreateManyContractInputEnvelope
    set?: Enumerable<CaregiverToContractWhereUniqueInput>
    disconnect?: Enumerable<CaregiverToContractWhereUniqueInput>
    delete?: Enumerable<CaregiverToContractWhereUniqueInput>
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
    update?: Enumerable<CaregiverToContractUpdateWithWhereUniqueWithoutContractInput>
    updateMany?: Enumerable<CaregiverToContractUpdateManyWithWhereWithoutContractInput>
    deleteMany?: Enumerable<CaregiverToContractScalarWhereInput>
  }

  export type ContractCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    upsert?: ContractUpsertWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
  }

  export type ContractJourneyCreatecaregiverOrderInput = {
    set: Enumerable<string>
  }

  export type ContractCreateNestedOneWithoutContractJourneyInput = {
    create?: XOR<ContractCreateWithoutContractJourneyInput, ContractUncheckedCreateWithoutContractJourneyInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractJourneyInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractJourneyUpdatecaregiverOrderInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ContractUpdateOneRequiredWithoutContractJourneyNestedInput = {
    create?: XOR<ContractCreateWithoutContractJourneyInput, ContractUncheckedCreateWithoutContractJourneyInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractJourneyInput
    upsert?: ContractUpsertWithoutContractJourneyInput
    connect?: ContractWhereUniqueInput
    update?: XOR<ContractUpdateWithoutContractJourneyInput, ContractUncheckedUpdateWithoutContractJourneyInput>
  }

  export type ContractCreateNestedOneWithoutCaregiverToContractInput = {
    create?: XOR<ContractCreateWithoutCaregiverToContractInput, ContractUncheckedCreateWithoutCaregiverToContractInput>
    connectOrCreate?: ContractCreateOrConnectWithoutCaregiverToContractInput
    connect?: ContractWhereUniqueInput
  }

  export type CaregiverCreateNestedOneWithoutCaregiverToContractInput = {
    create?: XOR<CaregiverCreateWithoutCaregiverToContractInput, CaregiverUncheckedCreateWithoutCaregiverToContractInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutCaregiverToContractInput
    connect?: CaregiverWhereUniqueInput
  }

  export type CaregiverPaymentCreateNestedManyWithoutCaregiverToContractInput = {
    create?: XOR<Enumerable<CaregiverPaymentCreateWithoutCaregiverToContractInput>, Enumerable<CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>>
    connectOrCreate?: Enumerable<CaregiverPaymentCreateOrConnectWithoutCaregiverToContractInput>
    createMany?: CaregiverPaymentCreateManyCaregiverToContractInputEnvelope
    connect?: Enumerable<CaregiverPaymentWhereUniqueInput>
  }

  export type CaregiverPaymentUncheckedCreateNestedManyWithoutCaregiverToContractInput = {
    create?: XOR<Enumerable<CaregiverPaymentCreateWithoutCaregiverToContractInput>, Enumerable<CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>>
    connectOrCreate?: Enumerable<CaregiverPaymentCreateOrConnectWithoutCaregiverToContractInput>
    createMany?: CaregiverPaymentCreateManyCaregiverToContractInputEnvelope
    connect?: Enumerable<CaregiverPaymentWhereUniqueInput>
  }

  export type ContractUpdateOneRequiredWithoutCaregiverToContractNestedInput = {
    create?: XOR<ContractCreateWithoutCaregiverToContractInput, ContractUncheckedCreateWithoutCaregiverToContractInput>
    connectOrCreate?: ContractCreateOrConnectWithoutCaregiverToContractInput
    upsert?: ContractUpsertWithoutCaregiverToContractInput
    connect?: ContractWhereUniqueInput
    update?: XOR<ContractUpdateWithoutCaregiverToContractInput, ContractUncheckedUpdateWithoutCaregiverToContractInput>
  }

  export type CaregiverUpdateOneRequiredWithoutCaregiverToContractNestedInput = {
    create?: XOR<CaregiverCreateWithoutCaregiverToContractInput, CaregiverUncheckedCreateWithoutCaregiverToContractInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutCaregiverToContractInput
    upsert?: CaregiverUpsertWithoutCaregiverToContractInput
    connect?: CaregiverWhereUniqueInput
    update?: XOR<CaregiverUpdateWithoutCaregiverToContractInput, CaregiverUncheckedUpdateWithoutCaregiverToContractInput>
  }

  export type CaregiverPaymentUpdateManyWithoutCaregiverToContractNestedInput = {
    create?: XOR<Enumerable<CaregiverPaymentCreateWithoutCaregiverToContractInput>, Enumerable<CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>>
    connectOrCreate?: Enumerable<CaregiverPaymentCreateOrConnectWithoutCaregiverToContractInput>
    upsert?: Enumerable<CaregiverPaymentUpsertWithWhereUniqueWithoutCaregiverToContractInput>
    createMany?: CaregiverPaymentCreateManyCaregiverToContractInputEnvelope
    set?: Enumerable<CaregiverPaymentWhereUniqueInput>
    disconnect?: Enumerable<CaregiverPaymentWhereUniqueInput>
    delete?: Enumerable<CaregiverPaymentWhereUniqueInput>
    connect?: Enumerable<CaregiverPaymentWhereUniqueInput>
    update?: Enumerable<CaregiverPaymentUpdateWithWhereUniqueWithoutCaregiverToContractInput>
    updateMany?: Enumerable<CaregiverPaymentUpdateManyWithWhereWithoutCaregiverToContractInput>
    deleteMany?: Enumerable<CaregiverPaymentScalarWhereInput>
  }

  export type CaregiverPaymentUncheckedUpdateManyWithoutCaregiverToContractNestedInput = {
    create?: XOR<Enumerable<CaregiverPaymentCreateWithoutCaregiverToContractInput>, Enumerable<CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>>
    connectOrCreate?: Enumerable<CaregiverPaymentCreateOrConnectWithoutCaregiverToContractInput>
    upsert?: Enumerable<CaregiverPaymentUpsertWithWhereUniqueWithoutCaregiverToContractInput>
    createMany?: CaregiverPaymentCreateManyCaregiverToContractInputEnvelope
    set?: Enumerable<CaregiverPaymentWhereUniqueInput>
    disconnect?: Enumerable<CaregiverPaymentWhereUniqueInput>
    delete?: Enumerable<CaregiverPaymentWhereUniqueInput>
    connect?: Enumerable<CaregiverPaymentWhereUniqueInput>
    update?: Enumerable<CaregiverPaymentUpdateWithWhereUniqueWithoutCaregiverToContractInput>
    updateMany?: Enumerable<CaregiverPaymentUpdateManyWithWhereWithoutCaregiverToContractInput>
    deleteMany?: Enumerable<CaregiverPaymentScalarWhereInput>
  }

  export type CaregiverToContractCreateNestedOneWithoutCaregiverPaymentInput = {
    create?: XOR<CaregiverToContractCreateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedCreateWithoutCaregiverPaymentInput>
    connectOrCreate?: CaregiverToContractCreateOrConnectWithoutCaregiverPaymentInput
    connect?: CaregiverToContractWhereUniqueInput
  }

  export type CaregiverToContractUpdateOneRequiredWithoutCaregiverPaymentNestedInput = {
    create?: XOR<CaregiverToContractCreateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedCreateWithoutCaregiverPaymentInput>
    connectOrCreate?: CaregiverToContractCreateOrConnectWithoutCaregiverPaymentInput
    upsert?: CaregiverToContractUpsertWithoutCaregiverPaymentInput
    connect?: CaregiverToContractWhereUniqueInput
    update?: XOR<CaregiverToContractUpdateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedUpdateWithoutCaregiverPaymentInput>
  }

  export type CaregiverCreateavailableTimeScalesInput = {
    set: Enumerable<TIME_SCALE>
  }

  export type CaregiverCreatediseaseExperiencesInput = {
    set: Enumerable<DISEASE>
  }

  export type WorkerCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<WorkerCreateWithoutCaregiverInput, WorkerUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCaregiverInput
    connect?: WorkerWhereUniqueInput
  }

  export type CaregiverToContractCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutCaregiverInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutCaregiverInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutCaregiverInput>
    createMany?: CaregiverToContractCreateManyCaregiverInputEnvelope
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
  }

  export type CaregiverToContractUncheckedCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutCaregiverInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutCaregiverInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutCaregiverInput>
    createMany?: CaregiverToContractCreateManyCaregiverInputEnvelope
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CaregiverUpdateavailableTimeScalesInput = {
    set?: Enumerable<TIME_SCALE>
    push?: Enumerable<TIME_SCALE>
  }

  export type CaregiverUpdatediseaseExperiencesInput = {
    set?: Enumerable<DISEASE>
    push?: Enumerable<DISEASE>
  }

  export type WorkerUpdateOneRequiredWithoutCaregiverNestedInput = {
    create?: XOR<WorkerCreateWithoutCaregiverInput, WorkerUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCaregiverInput
    upsert?: WorkerUpsertWithoutCaregiverInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<WorkerUpdateWithoutCaregiverInput, WorkerUncheckedUpdateWithoutCaregiverInput>
  }

  export type CaregiverToContractUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutCaregiverInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutCaregiverInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutCaregiverInput>
    upsert?: Enumerable<CaregiverToContractUpsertWithWhereUniqueWithoutCaregiverInput>
    createMany?: CaregiverToContractCreateManyCaregiverInputEnvelope
    set?: Enumerable<CaregiverToContractWhereUniqueInput>
    disconnect?: Enumerable<CaregiverToContractWhereUniqueInput>
    delete?: Enumerable<CaregiverToContractWhereUniqueInput>
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
    update?: Enumerable<CaregiverToContractUpdateWithWhereUniqueWithoutCaregiverInput>
    updateMany?: Enumerable<CaregiverToContractUpdateManyWithWhereWithoutCaregiverInput>
    deleteMany?: Enumerable<CaregiverToContractScalarWhereInput>
  }

  export type CaregiverToContractUncheckedUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<Enumerable<CaregiverToContractCreateWithoutCaregiverInput>, Enumerable<CaregiverToContractUncheckedCreateWithoutCaregiverInput>>
    connectOrCreate?: Enumerable<CaregiverToContractCreateOrConnectWithoutCaregiverInput>
    upsert?: Enumerable<CaregiverToContractUpsertWithWhereUniqueWithoutCaregiverInput>
    createMany?: CaregiverToContractCreateManyCaregiverInputEnvelope
    set?: Enumerable<CaregiverToContractWhereUniqueInput>
    disconnect?: Enumerable<CaregiverToContractWhereUniqueInput>
    delete?: Enumerable<CaregiverToContractWhereUniqueInput>
    connect?: Enumerable<CaregiverToContractWhereUniqueInput>
    update?: Enumerable<CaregiverToContractUpdateWithWhereUniqueWithoutCaregiverInput>
    updateMany?: Enumerable<CaregiverToContractUpdateManyWithWhereWithoutCaregiverInput>
    deleteMany?: Enumerable<CaregiverToContractScalarWhereInput>
  }

  export type CredentialCreateNestedOneWithoutWorkerInput = {
    create?: XOR<CredentialCreateWithoutWorkerInput, CredentialUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutWorkerInput
    connect?: CredentialWhereUniqueInput
  }

  export type CaregiverCreateNestedOneWithoutWorkerInput = {
    create?: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutWorkerInput
    connect?: CaregiverWhereUniqueInput
  }

  export type CaregiverUncheckedCreateNestedOneWithoutWorkerInput = {
    create?: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutWorkerInput
    connect?: CaregiverWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWORKER_STATUSFieldUpdateOperationsInput = {
    set?: WORKER_STATUS
  }

  export type EnumCIVIL_STATUSFieldUpdateOperationsInput = {
    set?: CIVIL_STATUS
  }

  export type CredentialUpdateOneRequiredWithoutWorkerNestedInput = {
    create?: XOR<CredentialCreateWithoutWorkerInput, CredentialUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutWorkerInput
    upsert?: CredentialUpsertWithoutWorkerInput
    connect?: CredentialWhereUniqueInput
    update?: XOR<CredentialUpdateWithoutWorkerInput, CredentialUncheckedUpdateWithoutWorkerInput>
  }

  export type CaregiverUpdateOneWithoutWorkerNestedInput = {
    create?: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutWorkerInput
    upsert?: CaregiverUpsertWithoutWorkerInput
    disconnect?: boolean
    delete?: boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<CaregiverUpdateWithoutWorkerInput, CaregiverUncheckedUpdateWithoutWorkerInput>
  }

  export type CaregiverUncheckedUpdateOneWithoutWorkerNestedInput = {
    create?: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutWorkerInput
    upsert?: CaregiverUpsertWithoutWorkerInput
    disconnect?: boolean
    delete?: boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<CaregiverUpdateWithoutWorkerInput, CaregiverUncheckedUpdateWithoutWorkerInput>
  }

  export type CredentialCreateNestedOneWithoutAdminInput = {
    create?: XOR<CredentialCreateWithoutAdminInput, CredentialUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutAdminInput
    connect?: CredentialWhereUniqueInput
  }

  export type EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput = {
    set?: ADMINISTRATIVE_LEVEL
  }

  export type CredentialUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<CredentialCreateWithoutAdminInput, CredentialUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutAdminInput
    upsert?: CredentialUpsertWithoutAdminInput
    connect?: CredentialWhereUniqueInput
    update?: XOR<CredentialUpdateWithoutAdminInput, CredentialUncheckedUpdateWithoutAdminInput>
  }

  export type PersonCreateNestedOneWithoutCredentialInput = {
    create?: XOR<PersonCreateWithoutCredentialInput, PersonUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCredentialInput
    connect?: PersonWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutCredentialInput = {
    create?: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCredentialInput
    connect?: WorkerWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutCredentialInput = {
    create?: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCredentialInput
    connect?: AdminWhereUniqueInput
  }

  export type CostumerCreateNestedOneWithoutCredentialInput = {
    create?: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutCredentialInput
    connect?: CostumerWhereUniqueInput
  }

  export type WorkerUncheckedCreateNestedOneWithoutCredentialInput = {
    create?: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCredentialInput
    connect?: WorkerWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutCredentialInput = {
    create?: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCredentialInput
    connect?: AdminWhereUniqueInput
  }

  export type CostumerUncheckedCreateNestedOneWithoutCredentialInput = {
    create?: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutCredentialInput
    connect?: CostumerWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutCredentialNestedInput = {
    create?: XOR<PersonCreateWithoutCredentialInput, PersonUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCredentialInput
    upsert?: PersonUpsertWithoutCredentialInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutCredentialInput, PersonUncheckedUpdateWithoutCredentialInput>
  }

  export type WorkerUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCredentialInput
    upsert?: WorkerUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<WorkerUpdateWithoutCredentialInput, WorkerUncheckedUpdateWithoutCredentialInput>
  }

  export type AdminUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCredentialInput
    upsert?: AdminUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutCredentialInput, AdminUncheckedUpdateWithoutCredentialInput>
  }

  export type CostumerUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutCredentialInput
    upsert?: CostumerUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: CostumerWhereUniqueInput
    update?: XOR<CostumerUpdateWithoutCredentialInput, CostumerUncheckedUpdateWithoutCredentialInput>
  }

  export type WorkerUncheckedUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCredentialInput
    upsert?: WorkerUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<WorkerUpdateWithoutCredentialInput, WorkerUncheckedUpdateWithoutCredentialInput>
  }

  export type AdminUncheckedUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCredentialInput
    upsert?: AdminUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutCredentialInput, AdminUncheckedUpdateWithoutCredentialInput>
  }

  export type CostumerUncheckedUpdateOneWithoutCredentialNestedInput = {
    create?: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutCredentialInput
    upsert?: CostumerUpsertWithoutCredentialInput
    disconnect?: boolean
    delete?: boolean
    connect?: CostumerWhereUniqueInput
    update?: XOR<CostumerUpdateWithoutCredentialInput, CostumerUncheckedUpdateWithoutCredentialInput>
  }

  export type CostumerCreatefavoriteScalesInput = {
    set: Enumerable<TIME_SCALE>
  }

  export type CredentialCreateNestedOneWithoutCostumerInput = {
    create?: XOR<CredentialCreateWithoutCostumerInput, CredentialUncheckedCreateWithoutCostumerInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutCostumerInput
    connect?: CredentialWhereUniqueInput
  }

  export type PatientCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCostumerInput>, Enumerable<PatientUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCostumerInput>
    createMany?: PatientCreateManyCostumerInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type ContractCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<ContractCreateWithoutCostumerInput>, Enumerable<ContractUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<ContractCreateOrConnectWithoutCostumerInput>
    createMany?: ContractCreateManyCostumerInputEnvelope
    connect?: Enumerable<ContractWhereUniqueInput>
  }

  export type PatientUncheckedCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCostumerInput>, Enumerable<PatientUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCostumerInput>
    createMany?: PatientCreateManyCostumerInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type ContractUncheckedCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<ContractCreateWithoutCostumerInput>, Enumerable<ContractUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<ContractCreateOrConnectWithoutCostumerInput>
    createMany?: ContractCreateManyCostumerInputEnvelope
    connect?: Enumerable<ContractWhereUniqueInput>
  }

  export type CostumerUpdatefavoriteScalesInput = {
    set?: Enumerable<TIME_SCALE>
    push?: Enumerable<TIME_SCALE>
  }

  export type CredentialUpdateOneRequiredWithoutCostumerNestedInput = {
    create?: XOR<CredentialCreateWithoutCostumerInput, CredentialUncheckedCreateWithoutCostumerInput>
    connectOrCreate?: CredentialCreateOrConnectWithoutCostumerInput
    upsert?: CredentialUpsertWithoutCostumerInput
    connect?: CredentialWhereUniqueInput
    update?: XOR<CredentialUpdateWithoutCostumerInput, CredentialUncheckedUpdateWithoutCostumerInput>
  }

  export type PatientUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCostumerInput>, Enumerable<PatientUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutCostumerInput>
    createMany?: PatientCreateManyCostumerInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type ContractUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<ContractCreateWithoutCostumerInput>, Enumerable<ContractUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<ContractCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<ContractUpsertWithWhereUniqueWithoutCostumerInput>
    createMany?: ContractCreateManyCostumerInputEnvelope
    set?: Enumerable<ContractWhereUniqueInput>
    disconnect?: Enumerable<ContractWhereUniqueInput>
    delete?: Enumerable<ContractWhereUniqueInput>
    connect?: Enumerable<ContractWhereUniqueInput>
    update?: Enumerable<ContractUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<ContractUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<ContractScalarWhereInput>
  }

  export type PatientUncheckedUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCostumerInput>, Enumerable<PatientUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutCostumerInput>
    createMany?: PatientCreateManyCostumerInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type ContractUncheckedUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<ContractCreateWithoutCostumerInput>, Enumerable<ContractUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<ContractCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<ContractUpsertWithWhereUniqueWithoutCostumerInput>
    createMany?: ContractCreateManyCostumerInputEnvelope
    set?: Enumerable<ContractWhereUniqueInput>
    disconnect?: Enumerable<ContractWhereUniqueInput>
    delete?: Enumerable<ContractWhereUniqueInput>
    connect?: Enumerable<ContractWhereUniqueInput>
    update?: Enumerable<ContractUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<ContractUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<ContractScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumSEXFilter = {
    equals?: SEX
    in?: Enumerable<SEX>
    notIn?: Enumerable<SEX>
    not?: NestedEnumSEXFilter | SEX
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumSEXWithAggregatesFilter = {
    equals?: SEX
    in?: Enumerable<SEX>
    notIn?: Enumerable<SEX>
    not?: NestedEnumSEXWithAggregatesFilter | SEX
    _count?: NestedIntFilter
    _min?: NestedEnumSEXFilter
    _max?: NestedEnumSEXFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumCONTACT_TYPEFilter = {
    equals?: CONTACT_TYPE
    in?: Enumerable<CONTACT_TYPE>
    notIn?: Enumerable<CONTACT_TYPE>
    not?: NestedEnumCONTACT_TYPEFilter | CONTACT_TYPE
  }

  export type NestedEnumCONTACT_TYPEWithAggregatesFilter = {
    equals?: CONTACT_TYPE
    in?: Enumerable<CONTACT_TYPE>
    notIn?: Enumerable<CONTACT_TYPE>
    not?: NestedEnumCONTACT_TYPEWithAggregatesFilter | CONTACT_TYPE
    _count?: NestedIntFilter
    _min?: NestedEnumCONTACT_TYPEFilter
    _max?: NestedEnumCONTACT_TYPEFilter
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumBANK_ACCOUNT_TYPEFilter = {
    equals?: BANK_ACCOUNT_TYPE
    in?: Enumerable<BANK_ACCOUNT_TYPE>
    notIn?: Enumerable<BANK_ACCOUNT_TYPE>
    not?: NestedEnumBANK_ACCOUNT_TYPEFilter | BANK_ACCOUNT_TYPE
  }

  export type NestedEnumBANK_ACCOUNT_TYPEWithAggregatesFilter = {
    equals?: BANK_ACCOUNT_TYPE
    in?: Enumerable<BANK_ACCOUNT_TYPE>
    notIn?: Enumerable<BANK_ACCOUNT_TYPE>
    not?: NestedEnumBANK_ACCOUNT_TYPEWithAggregatesFilter | BANK_ACCOUNT_TYPE
    _count?: NestedIntFilter
    _min?: NestedEnumBANK_ACCOUNT_TYPEFilter
    _max?: NestedEnumBANK_ACCOUNT_TYPEFilter
  }

  export type NestedEnumWEIGHTFilter = {
    equals?: WEIGHT
    in?: Enumerable<WEIGHT>
    notIn?: Enumerable<WEIGHT>
    not?: NestedEnumWEIGHTFilter | WEIGHT
  }

  export type NestedEnumHEIGHTFilter = {
    equals?: HEIGHT
    in?: Enumerable<HEIGHT>
    notIn?: Enumerable<HEIGHT>
    not?: NestedEnumHEIGHTFilter | HEIGHT
  }

  export type NestedEnumMANNEQUINNFilter = {
    equals?: MANNEQUINN
    in?: Enumerable<MANNEQUINN>
    notIn?: Enumerable<MANNEQUINN>
    not?: NestedEnumMANNEQUINNFilter | MANNEQUINN
  }

  export type NestedEnumWEIGHTWithAggregatesFilter = {
    equals?: WEIGHT
    in?: Enumerable<WEIGHT>
    notIn?: Enumerable<WEIGHT>
    not?: NestedEnumWEIGHTWithAggregatesFilter | WEIGHT
    _count?: NestedIntFilter
    _min?: NestedEnumWEIGHTFilter
    _max?: NestedEnumWEIGHTFilter
  }

  export type NestedEnumHEIGHTWithAggregatesFilter = {
    equals?: HEIGHT
    in?: Enumerable<HEIGHT>
    notIn?: Enumerable<HEIGHT>
    not?: NestedEnumHEIGHTWithAggregatesFilter | HEIGHT
    _count?: NestedIntFilter
    _min?: NestedEnumHEIGHTFilter
    _max?: NestedEnumHEIGHTFilter
  }

  export type NestedEnumMANNEQUINNWithAggregatesFilter = {
    equals?: MANNEQUINN
    in?: Enumerable<MANNEQUINN>
    notIn?: Enumerable<MANNEQUINN>
    not?: NestedEnumMANNEQUINNWithAggregatesFilter | MANNEQUINN
    _count?: NestedIntFilter
    _min?: NestedEnumMANNEQUINNFilter
    _max?: NestedEnumMANNEQUINNFilter
  }

  export type NestedEnumTIME_SCALEFilter = {
    equals?: TIME_SCALE
    in?: Enumerable<TIME_SCALE>
    notIn?: Enumerable<TIME_SCALE>
    not?: NestedEnumTIME_SCALEFilter | TIME_SCALE
  }

  export type NestedEnumTIME_SCALEWithAggregatesFilter = {
    equals?: TIME_SCALE
    in?: Enumerable<TIME_SCALE>
    notIn?: Enumerable<TIME_SCALE>
    not?: NestedEnumTIME_SCALEWithAggregatesFilter | TIME_SCALE
    _count?: NestedIntFilter
    _min?: NestedEnumTIME_SCALEFilter
    _max?: NestedEnumTIME_SCALEFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumWORKER_STATUSFilter = {
    equals?: WORKER_STATUS
    in?: Enumerable<WORKER_STATUS>
    notIn?: Enumerable<WORKER_STATUS>
    not?: NestedEnumWORKER_STATUSFilter | WORKER_STATUS
  }

  export type NestedEnumCIVIL_STATUSFilter = {
    equals?: CIVIL_STATUS
    in?: Enumerable<CIVIL_STATUS>
    notIn?: Enumerable<CIVIL_STATUS>
    not?: NestedEnumCIVIL_STATUSFilter | CIVIL_STATUS
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumWORKER_STATUSWithAggregatesFilter = {
    equals?: WORKER_STATUS
    in?: Enumerable<WORKER_STATUS>
    notIn?: Enumerable<WORKER_STATUS>
    not?: NestedEnumWORKER_STATUSWithAggregatesFilter | WORKER_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumWORKER_STATUSFilter
    _max?: NestedEnumWORKER_STATUSFilter
  }

  export type NestedEnumCIVIL_STATUSWithAggregatesFilter = {
    equals?: CIVIL_STATUS
    in?: Enumerable<CIVIL_STATUS>
    notIn?: Enumerable<CIVIL_STATUS>
    not?: NestedEnumCIVIL_STATUSWithAggregatesFilter | CIVIL_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumCIVIL_STATUSFilter
    _max?: NestedEnumCIVIL_STATUSFilter
  }

  export type NestedEnumADMINISTRATIVE_LEVELFilter = {
    equals?: ADMINISTRATIVE_LEVEL
    in?: Enumerable<ADMINISTRATIVE_LEVEL>
    notIn?: Enumerable<ADMINISTRATIVE_LEVEL>
    not?: NestedEnumADMINISTRATIVE_LEVELFilter | ADMINISTRATIVE_LEVEL
  }

  export type NestedEnumADMINISTRATIVE_LEVELWithAggregatesFilter = {
    equals?: ADMINISTRATIVE_LEVEL
    in?: Enumerable<ADMINISTRATIVE_LEVEL>
    notIn?: Enumerable<ADMINISTRATIVE_LEVEL>
    not?: NestedEnumADMINISTRATIVE_LEVELWithAggregatesFilter | ADMINISTRATIVE_LEVEL
    _count?: NestedIntFilter
    _min?: NestedEnumADMINISTRATIVE_LEVELFilter
    _max?: NestedEnumADMINISTRATIVE_LEVELFilter
  }

  export type CredentialCreateWithoutPersonInput = {
    email: string
    CPF: string
    RG: string
    Worker?: WorkerCreateNestedOneWithoutCredentialInput
    Admin?: AdminCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUncheckedCreateWithoutPersonInput = {
    email: string
    CPF: string
    RG: string
    Worker?: WorkerUncheckedCreateNestedOneWithoutCredentialInput
    Admin?: AdminUncheckedCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerUncheckedCreateNestedOneWithoutCredentialInput
  }

  export type CredentialCreateOrConnectWithoutPersonInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
  }

  export type AddressCreateWithoutPersonInput = {
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement?: string | null
    reference?: string | null
  }

  export type AddressUncheckedCreateWithoutPersonInput = {
    publicPlace: string
    number: string
    district: string
    city: string
    CEP: string
    complement?: string | null
    reference?: string | null
  }

  export type AddressCreateOrConnectWithoutPersonInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
  }

  export type PatientCreateWithoutPersonInput = {
    Costumer?: CostumerCreateNestedOneWithoutPatientsInput
    Contract?: ContractCreateNestedOneWithoutPatientsInput
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedCreateWithoutPersonInput = {
    costumerId?: string | null
    contractId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientCreateOrConnectWithoutPersonInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
  }

  export type BodyCreateWithoutPersonInput = {
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
  }

  export type BodyUncheckedCreateWithoutPersonInput = {
    weight: WEIGHT
    height: HEIGHT
    mannequinn: MANNEQUINN
  }

  export type BodyCreateOrConnectWithoutPersonInput = {
    where: BodyWhereUniqueInput
    create: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
  }

  export type ContactCreateWithoutPersonInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
  }

  export type ContactUncheckedCreateWithoutPersonInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
  }

  export type ContactCreateOrConnectWithoutPersonInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutPersonInput, ContactUncheckedCreateWithoutPersonInput>
  }

  export type ContactCreateManyPersonInputEnvelope = {
    data: Enumerable<ContactCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type ObservationCreateWithoutPersonInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
  }

  export type ObservationUncheckedCreateWithoutPersonInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
  }

  export type ObservationCreateOrConnectWithoutPersonInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutPersonInput, ObservationUncheckedCreateWithoutPersonInput>
  }

  export type ObservationCreateManyPersonInputEnvelope = {
    data: Enumerable<ObservationCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type BankAccountCreateWithoutPersonInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
  }

  export type BankAccountUncheckedCreateWithoutPersonInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
  }

  export type BankAccountCreateOrConnectWithoutPersonInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutPersonInput, BankAccountUncheckedCreateWithoutPersonInput>
  }

  export type BankAccountCreateManyPersonInputEnvelope = {
    data: Enumerable<BankAccountCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type CredentialUpsertWithoutPersonInput = {
    update: XOR<CredentialUpdateWithoutPersonInput, CredentialUncheckedUpdateWithoutPersonInput>
    create: XOR<CredentialCreateWithoutPersonInput, CredentialUncheckedCreateWithoutPersonInput>
  }

  export type CredentialUpdateWithoutPersonInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Worker?: WorkerUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialUncheckedUpdateWithoutPersonInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Worker?: WorkerUncheckedUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUncheckedUpdateOneWithoutCredentialNestedInput
  }

  export type AddressUpsertWithoutPersonInput = {
    update: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
  }

  export type AddressUpdateWithoutPersonInput = {
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutPersonInput = {
    publicPlace?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUpsertWithoutPersonInput = {
    update: XOR<PatientUpdateWithoutPersonInput, PatientUncheckedUpdateWithoutPersonInput>
    create: XOR<PatientCreateWithoutPersonInput, PatientUncheckedCreateWithoutPersonInput>
  }

  export type PatientUpdateWithoutPersonInput = {
    Costumer?: CostumerUpdateOneWithoutPatientsNestedInput
    Contract?: ContractUpdateOneWithoutPatientsNestedInput
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateWithoutPersonInput = {
    costumerId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type BodyUpsertWithoutPersonInput = {
    update: XOR<BodyUpdateWithoutPersonInput, BodyUncheckedUpdateWithoutPersonInput>
    create: XOR<BodyCreateWithoutPersonInput, BodyUncheckedCreateWithoutPersonInput>
  }

  export type BodyUpdateWithoutPersonInput = {
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
  }

  export type BodyUncheckedUpdateWithoutPersonInput = {
    weight?: EnumWEIGHTFieldUpdateOperationsInput | WEIGHT
    height?: EnumHEIGHTFieldUpdateOperationsInput | HEIGHT
    mannequinn?: EnumMANNEQUINNFieldUpdateOperationsInput | MANNEQUINN
  }

  export type ContactUpsertWithWhereUniqueWithoutPersonInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutPersonInput, ContactUncheckedUpdateWithoutPersonInput>
    create: XOR<ContactCreateWithoutPersonInput, ContactUncheckedCreateWithoutPersonInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutPersonInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutPersonInput, ContactUncheckedUpdateWithoutPersonInput>
  }

  export type ContactUpdateManyWithWhereWithoutPersonInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutContactsInput>
  }

  export type ContactScalarWhereInput = {
    AND?: Enumerable<ContactScalarWhereInput>
    OR?: Enumerable<ContactScalarWhereInput>
    NOT?: Enumerable<ContactScalarWhereInput>
    id?: UuidFilter | string
    type?: EnumCONTACT_TYPEFilter | CONTACT_TYPE
    data?: StringFilter | string
    observation?: StringNullableFilter | string | null
    personId?: UuidFilter | string
  }

  export type ObservationUpsertWithWhereUniqueWithoutPersonInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutPersonInput, ObservationUncheckedUpdateWithoutPersonInput>
    create: XOR<ObservationCreateWithoutPersonInput, ObservationUncheckedCreateWithoutPersonInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutPersonInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutPersonInput, ObservationUncheckedUpdateWithoutPersonInput>
  }

  export type ObservationUpdateManyWithWhereWithoutPersonInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutObservationsInput>
  }

  export type ObservationScalarWhereInput = {
    AND?: Enumerable<ObservationScalarWhereInput>
    OR?: Enumerable<ObservationScalarWhereInput>
    NOT?: Enumerable<ObservationScalarWhereInput>
    id?: UuidFilter | string
    title?: StringFilter | string
    text?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    personId?: UuidFilter | string
  }

  export type BankAccountUpsertWithWhereUniqueWithoutPersonInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutPersonInput, BankAccountUncheckedUpdateWithoutPersonInput>
    create: XOR<BankAccountCreateWithoutPersonInput, BankAccountUncheckedCreateWithoutPersonInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutPersonInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutPersonInput, BankAccountUncheckedUpdateWithoutPersonInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutPersonInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutBankAccountsInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: Enumerable<BankAccountScalarWhereInput>
    OR?: Enumerable<BankAccountScalarWhereInput>
    NOT?: Enumerable<BankAccountScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    type?: EnumBANK_ACCOUNT_TYPEFilter | BANK_ACCOUNT_TYPE
    agency?: StringFilter | string
    account?: StringFilter | string
    digit?: StringFilter | string
    personId?: UuidFilter | string
  }

  export type PersonCreateWithoutObservationsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutObservationsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutObservationsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutObservationsInput, PersonUncheckedCreateWithoutObservationsInput>
  }

  export type PersonUpsertWithoutObservationsInput = {
    update: XOR<PersonUpdateWithoutObservationsInput, PersonUncheckedUpdateWithoutObservationsInput>
    create: XOR<PersonCreateWithoutObservationsInput, PersonUncheckedCreateWithoutObservationsInput>
  }

  export type PersonUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutAddressInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutAddressInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
  }

  export type PersonUpsertWithoutAddressInput = {
    update: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
  }

  export type PersonUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutContactsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutContactsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutContactsInput, PersonUncheckedCreateWithoutContactsInput>
  }

  export type PersonUpsertWithoutContactsInput = {
    update: XOR<PersonUpdateWithoutContactsInput, PersonUncheckedUpdateWithoutContactsInput>
    create: XOR<PersonCreateWithoutContactsInput, PersonUncheckedCreateWithoutContactsInput>
  }

  export type PersonUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutPatientInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutPatientInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutPatientInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPatientInput, PersonUncheckedCreateWithoutPatientInput>
  }

  export type CostumerCreateWithoutPatientsInput = {
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential: CredentialCreateNestedOneWithoutCostumerInput
    Contract?: ContractCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUncheckedCreateWithoutPatientsInput = {
    credentialId: string
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Contract?: ContractUncheckedCreateNestedManyWithoutCostumerInput
  }

  export type CostumerCreateOrConnectWithoutPatientsInput = {
    where: CostumerWhereUniqueInput
    create: XOR<CostumerCreateWithoutPatientsInput, CostumerUncheckedCreateWithoutPatientsInput>
  }

  export type ContractCreateWithoutPatientsInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentCreateNestedManyWithoutContractInput
    Costumer: CostumerCreateNestedOneWithoutContractInput
    ContractJourney?: ContractJourneyCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutPatientsInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyUncheckedCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutPatientsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPatientsInput, ContractUncheckedCreateWithoutPatientsInput>
  }

  export type PersonUpsertWithoutPatientInput = {
    update: XOR<PersonUpdateWithoutPatientInput, PersonUncheckedUpdateWithoutPatientInput>
    create: XOR<PersonCreateWithoutPatientInput, PersonUncheckedCreateWithoutPatientInput>
  }

  export type PersonUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type CostumerUpsertWithoutPatientsInput = {
    update: XOR<CostumerUpdateWithoutPatientsInput, CostumerUncheckedUpdateWithoutPatientsInput>
    create: XOR<CostumerCreateWithoutPatientsInput, CostumerUncheckedCreateWithoutPatientsInput>
  }

  export type CostumerUpdateWithoutPatientsInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential?: CredentialUpdateOneRequiredWithoutCostumerNestedInput
    Contract?: ContractUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUncheckedUpdateWithoutPatientsInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Contract?: ContractUncheckedUpdateManyWithoutCostumerNestedInput
  }

  export type ContractUpsertWithoutPatientsInput = {
    update: XOR<ContractUpdateWithoutPatientsInput, ContractUncheckedUpdateWithoutPatientsInput>
    create: XOR<ContractCreateWithoutPatientsInput, ContractUncheckedCreateWithoutPatientsInput>
  }

  export type ContractUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUpdateManyWithoutContractNestedInput
    Costumer?: CostumerUpdateOneRequiredWithoutContractNestedInput
    ContractJourney?: ContractJourneyUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUncheckedUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput
  }

  export type PersonCreateWithoutBankAccountsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutBankAccountsInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutBankAccountsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutBankAccountsInput, PersonUncheckedCreateWithoutBankAccountsInput>
  }

  export type PersonUpsertWithoutBankAccountsInput = {
    update: XOR<PersonUpdateWithoutBankAccountsInput, PersonUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<PersonCreateWithoutBankAccountsInput, PersonUncheckedCreateWithoutBankAccountsInput>
  }

  export type PersonUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutBodyInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialCreateNestedOneWithoutPersonInput
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutBodyInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Credential?: CredentialUncheckedCreateNestedOneWithoutPersonInput
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutBodyInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutBodyInput, PersonUncheckedCreateWithoutBodyInput>
  }

  export type PersonUpsertWithoutBodyInput = {
    update: XOR<PersonUpdateWithoutBodyInput, PersonUncheckedUpdateWithoutBodyInput>
    create: XOR<PersonCreateWithoutBodyInput, PersonUncheckedCreateWithoutBodyInput>
  }

  export type PersonUpdateWithoutBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUpdateOneWithoutPersonNestedInput
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credential?: CredentialUncheckedUpdateOneWithoutPersonNestedInput
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type ContractPaymentCreateWithoutContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type ContractPaymentUncheckedCreateWithoutContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type ContractPaymentCreateOrConnectWithoutContractInput = {
    where: ContractPaymentWhereUniqueInput
    create: XOR<ContractPaymentCreateWithoutContractInput, ContractPaymentUncheckedCreateWithoutContractInput>
  }

  export type ContractPaymentCreateManyContractInputEnvelope = {
    data: Enumerable<ContractPaymentCreateManyContractInput>
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutContractInput = {
    Person: PersonCreateNestedOneWithoutPatientInput
    Costumer?: CostumerCreateNestedOneWithoutPatientsInput
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedCreateWithoutContractInput = {
    personId: string
    costumerId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientCreateOrConnectWithoutContractInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutContractInput, PatientUncheckedCreateWithoutContractInput>
  }

  export type PatientCreateManyContractInputEnvelope = {
    data: Enumerable<PatientCreateManyContractInput>
    skipDuplicates?: boolean
  }

  export type CostumerCreateWithoutContractInput = {
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential: CredentialCreateNestedOneWithoutCostumerInput
    Patients?: PatientCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUncheckedCreateWithoutContractInput = {
    credentialId: string
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedCreateNestedManyWithoutCostumerInput
  }

  export type CostumerCreateOrConnectWithoutContractInput = {
    where: CostumerWhereUniqueInput
    create: XOR<CostumerCreateWithoutContractInput, CostumerUncheckedCreateWithoutContractInput>
  }

  export type ContractJourneyCreateWithoutContractInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
  }

  export type ContractJourneyUncheckedCreateWithoutContractInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
  }

  export type ContractJourneyCreateOrConnectWithoutContractInput = {
    where: ContractJourneyWhereUniqueInput
    create: XOR<ContractJourneyCreateWithoutContractInput, ContractJourneyUncheckedCreateWithoutContractInput>
  }

  export type ContractJourneyCreateManyContractInputEnvelope = {
    data: Enumerable<ContractJourneyCreateManyContractInput>
    skipDuplicates?: boolean
  }

  export type CaregiverToContractCreateWithoutContractInput = {
    id?: string
    Caregiver: CaregiverCreateNestedOneWithoutCaregiverToContractInput
    CaregiverPayment?: CaregiverPaymentCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractUncheckedCreateWithoutContractInput = {
    id?: string
    caregiverId: string
    CaregiverPayment?: CaregiverPaymentUncheckedCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractCreateOrConnectWithoutContractInput = {
    where: CaregiverToContractWhereUniqueInput
    create: XOR<CaregiverToContractCreateWithoutContractInput, CaregiverToContractUncheckedCreateWithoutContractInput>
  }

  export type CaregiverToContractCreateManyContractInputEnvelope = {
    data: Enumerable<CaregiverToContractCreateManyContractInput>
    skipDuplicates?: boolean
  }

  export type ContractPaymentUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractPaymentWhereUniqueInput
    update: XOR<ContractPaymentUpdateWithoutContractInput, ContractPaymentUncheckedUpdateWithoutContractInput>
    create: XOR<ContractPaymentCreateWithoutContractInput, ContractPaymentUncheckedCreateWithoutContractInput>
  }

  export type ContractPaymentUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractPaymentWhereUniqueInput
    data: XOR<ContractPaymentUpdateWithoutContractInput, ContractPaymentUncheckedUpdateWithoutContractInput>
  }

  export type ContractPaymentUpdateManyWithWhereWithoutContractInput = {
    where: ContractPaymentScalarWhereInput
    data: XOR<ContractPaymentUpdateManyMutationInput, ContractPaymentUncheckedUpdateManyWithoutPaymentsInput>
  }

  export type ContractPaymentScalarWhereInput = {
    AND?: Enumerable<ContractPaymentScalarWhereInput>
    OR?: Enumerable<ContractPaymentScalarWhereInput>
    NOT?: Enumerable<ContractPaymentScalarWhereInput>
    id?: UuidFilter | string
    contractId?: UuidFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    proof?: StringFilter | string
  }

  export type PatientUpsertWithWhereUniqueWithoutContractInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutContractInput, PatientUncheckedUpdateWithoutContractInput>
    create: XOR<PatientCreateWithoutContractInput, PatientUncheckedCreateWithoutContractInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutContractInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutContractInput, PatientUncheckedUpdateWithoutContractInput>
  }

  export type PatientUpdateManyWithWhereWithoutContractInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutPatientsInput>
  }

  export type PatientScalarWhereInput = {
    AND?: Enumerable<PatientScalarWhereInput>
    OR?: Enumerable<PatientScalarWhereInput>
    NOT?: Enumerable<PatientScalarWhereInput>
    personId?: UuidFilter | string
    costumerId?: UuidNullableFilter | string | null
    contractId?: UuidNullableFilter | string | null
    diseases?: EnumDISEASENullableListFilter
  }

  export type CostumerUpsertWithoutContractInput = {
    update: XOR<CostumerUpdateWithoutContractInput, CostumerUncheckedUpdateWithoutContractInput>
    create: XOR<CostumerCreateWithoutContractInput, CostumerUncheckedCreateWithoutContractInput>
  }

  export type CostumerUpdateWithoutContractInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Credential?: CredentialUpdateOneRequiredWithoutCostumerNestedInput
    Patients?: PatientUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUncheckedUpdateWithoutContractInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedUpdateManyWithoutCostumerNestedInput
  }

  export type ContractJourneyUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractJourneyWhereUniqueInput
    update: XOR<ContractJourneyUpdateWithoutContractInput, ContractJourneyUncheckedUpdateWithoutContractInput>
    create: XOR<ContractJourneyCreateWithoutContractInput, ContractJourneyUncheckedCreateWithoutContractInput>
  }

  export type ContractJourneyUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractJourneyWhereUniqueInput
    data: XOR<ContractJourneyUpdateWithoutContractInput, ContractJourneyUncheckedUpdateWithoutContractInput>
  }

  export type ContractJourneyUpdateManyWithWhereWithoutContractInput = {
    where: ContractJourneyScalarWhereInput
    data: XOR<ContractJourneyUpdateManyMutationInput, ContractJourneyUncheckedUpdateManyWithoutContractJourneyInput>
  }

  export type ContractJourneyScalarWhereInput = {
    AND?: Enumerable<ContractJourneyScalarWhereInput>
    OR?: Enumerable<ContractJourneyScalarWhereInput>
    NOT?: Enumerable<ContractJourneyScalarWhereInput>
    id?: UuidFilter | string
    caregiverOrder?: StringNullableListFilter
    createdAt?: DateTimeNullableFilter | Date | string | null
    contractId?: UuidFilter | string
  }

  export type CaregiverToContractUpsertWithWhereUniqueWithoutContractInput = {
    where: CaregiverToContractWhereUniqueInput
    update: XOR<CaregiverToContractUpdateWithoutContractInput, CaregiverToContractUncheckedUpdateWithoutContractInput>
    create: XOR<CaregiverToContractCreateWithoutContractInput, CaregiverToContractUncheckedCreateWithoutContractInput>
  }

  export type CaregiverToContractUpdateWithWhereUniqueWithoutContractInput = {
    where: CaregiverToContractWhereUniqueInput
    data: XOR<CaregiverToContractUpdateWithoutContractInput, CaregiverToContractUncheckedUpdateWithoutContractInput>
  }

  export type CaregiverToContractUpdateManyWithWhereWithoutContractInput = {
    where: CaregiverToContractScalarWhereInput
    data: XOR<CaregiverToContractUpdateManyMutationInput, CaregiverToContractUncheckedUpdateManyWithoutCaregiverToContractInput>
  }

  export type CaregiverToContractScalarWhereInput = {
    AND?: Enumerable<CaregiverToContractScalarWhereInput>
    OR?: Enumerable<CaregiverToContractScalarWhereInput>
    NOT?: Enumerable<CaregiverToContractScalarWhereInput>
    id?: UuidFilter | string
    contractId?: UuidFilter | string
    caregiverId?: UuidFilter | string
  }

  export type ContractCreateWithoutPaymentsInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Patients?: PatientCreateNestedManyWithoutContractInput
    Costumer: CostumerCreateNestedOneWithoutContractInput
    ContractJourney?: ContractJourneyCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutPaymentsInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Patients?: PatientUncheckedCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyUncheckedCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutPaymentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
  }

  export type ContractUpsertWithoutPaymentsInput = {
    update: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
  }

  export type ContractUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Patients?: PatientUpdateManyWithoutContractNestedInput
    Costumer?: CostumerUpdateOneRequiredWithoutContractNestedInput
    ContractJourney?: ContractJourneyUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Patients?: PatientUncheckedUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUncheckedUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutContractJourneyInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentCreateNestedManyWithoutContractInput
    Patients?: PatientCreateNestedManyWithoutContractInput
    Costumer: CostumerCreateNestedOneWithoutContractInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutContractJourneyInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedCreateNestedManyWithoutContractInput
    Patients?: PatientUncheckedCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutContractJourneyInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutContractJourneyInput, ContractUncheckedCreateWithoutContractJourneyInput>
  }

  export type ContractUpsertWithoutContractJourneyInput = {
    update: XOR<ContractUpdateWithoutContractJourneyInput, ContractUncheckedUpdateWithoutContractJourneyInput>
    create: XOR<ContractCreateWithoutContractJourneyInput, ContractUncheckedCreateWithoutContractJourneyInput>
  }

  export type ContractUpdateWithoutContractJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUpdateManyWithoutContractNestedInput
    Patients?: PatientUpdateManyWithoutContractNestedInput
    Costumer?: CostumerUpdateOneRequiredWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutContractJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedUpdateManyWithoutContractNestedInput
    Patients?: PatientUncheckedUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutCaregiverToContractInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentCreateNestedManyWithoutContractInput
    Patients?: PatientCreateNestedManyWithoutContractInput
    Costumer: CostumerCreateNestedOneWithoutContractInput
    ContractJourney?: ContractJourneyCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCaregiverToContractInput = {
    id?: string
    costumerId: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedCreateNestedManyWithoutContractInput
    Patients?: PatientUncheckedCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCaregiverToContractInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCaregiverToContractInput, ContractUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type CaregiverCreateWithoutCaregiverToContractInput = {
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
    Worker: WorkerCreateNestedOneWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutCaregiverToContractInput = {
    workerId: string
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
  }

  export type CaregiverCreateOrConnectWithoutCaregiverToContractInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutCaregiverToContractInput, CaregiverUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type CaregiverPaymentCreateWithoutCaregiverToContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type CaregiverPaymentCreateOrConnectWithoutCaregiverToContractInput = {
    where: CaregiverPaymentWhereUniqueInput
    create: XOR<CaregiverPaymentCreateWithoutCaregiverToContractInput, CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type CaregiverPaymentCreateManyCaregiverToContractInputEnvelope = {
    data: Enumerable<CaregiverPaymentCreateManyCaregiverToContractInput>
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithoutCaregiverToContractInput = {
    update: XOR<ContractUpdateWithoutCaregiverToContractInput, ContractUncheckedUpdateWithoutCaregiverToContractInput>
    create: XOR<ContractCreateWithoutCaregiverToContractInput, ContractUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type ContractUpdateWithoutCaregiverToContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUpdateManyWithoutContractNestedInput
    Patients?: PatientUpdateManyWithoutContractNestedInput
    Costumer?: CostumerUpdateOneRequiredWithoutContractNestedInput
    ContractJourney?: ContractJourneyUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCaregiverToContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumerId?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedUpdateManyWithoutContractNestedInput
    Patients?: PatientUncheckedUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUncheckedUpdateManyWithoutContractNestedInput
  }

  export type CaregiverUpsertWithoutCaregiverToContractInput = {
    update: XOR<CaregiverUpdateWithoutCaregiverToContractInput, CaregiverUncheckedUpdateWithoutCaregiverToContractInput>
    create: XOR<CaregiverCreateWithoutCaregiverToContractInput, CaregiverUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type CaregiverUpdateWithoutCaregiverToContractInput = {
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
    Worker?: WorkerUpdateOneRequiredWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutCaregiverToContractInput = {
    workerId?: StringFieldUpdateOperationsInput | string
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
  }

  export type CaregiverPaymentUpsertWithWhereUniqueWithoutCaregiverToContractInput = {
    where: CaregiverPaymentWhereUniqueInput
    update: XOR<CaregiverPaymentUpdateWithoutCaregiverToContractInput, CaregiverPaymentUncheckedUpdateWithoutCaregiverToContractInput>
    create: XOR<CaregiverPaymentCreateWithoutCaregiverToContractInput, CaregiverPaymentUncheckedCreateWithoutCaregiverToContractInput>
  }

  export type CaregiverPaymentUpdateWithWhereUniqueWithoutCaregiverToContractInput = {
    where: CaregiverPaymentWhereUniqueInput
    data: XOR<CaregiverPaymentUpdateWithoutCaregiverToContractInput, CaregiverPaymentUncheckedUpdateWithoutCaregiverToContractInput>
  }

  export type CaregiverPaymentUpdateManyWithWhereWithoutCaregiverToContractInput = {
    where: CaregiverPaymentScalarWhereInput
    data: XOR<CaregiverPaymentUpdateManyMutationInput, CaregiverPaymentUncheckedUpdateManyWithoutCaregiverPaymentInput>
  }

  export type CaregiverPaymentScalarWhereInput = {
    AND?: Enumerable<CaregiverPaymentScalarWhereInput>
    OR?: Enumerable<CaregiverPaymentScalarWhereInput>
    NOT?: Enumerable<CaregiverPaymentScalarWhereInput>
    id?: UuidFilter | string
    value?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    proof?: StringFilter | string
    caregiverToContractId?: UuidFilter | string
  }

  export type CaregiverToContractCreateWithoutCaregiverPaymentInput = {
    id?: string
    Contract: ContractCreateNestedOneWithoutCaregiverToContractInput
    Caregiver: CaregiverCreateNestedOneWithoutCaregiverToContractInput
  }

  export type CaregiverToContractUncheckedCreateWithoutCaregiverPaymentInput = {
    id?: string
    contractId: string
    caregiverId: string
  }

  export type CaregiverToContractCreateOrConnectWithoutCaregiverPaymentInput = {
    where: CaregiverToContractWhereUniqueInput
    create: XOR<CaregiverToContractCreateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedCreateWithoutCaregiverPaymentInput>
  }

  export type CaregiverToContractUpsertWithoutCaregiverPaymentInput = {
    update: XOR<CaregiverToContractUpdateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedUpdateWithoutCaregiverPaymentInput>
    create: XOR<CaregiverToContractCreateWithoutCaregiverPaymentInput, CaregiverToContractUncheckedCreateWithoutCaregiverPaymentInput>
  }

  export type CaregiverToContractUpdateWithoutCaregiverPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    Contract?: ContractUpdateOneRequiredWithoutCaregiverToContractNestedInput
    Caregiver?: CaregiverUpdateOneRequiredWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractUncheckedUpdateWithoutCaregiverPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkerCreateWithoutCaregiverInput = {
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    Credential: CredentialCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutCaregiverInput = {
    credentialId: string
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
  }

  export type WorkerCreateOrConnectWithoutCaregiverInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutCaregiverInput, WorkerUncheckedCreateWithoutCaregiverInput>
  }

  export type CaregiverToContractCreateWithoutCaregiverInput = {
    id?: string
    Contract: ContractCreateNestedOneWithoutCaregiverToContractInput
    CaregiverPayment?: CaregiverPaymentCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractUncheckedCreateWithoutCaregiverInput = {
    id?: string
    contractId: string
    CaregiverPayment?: CaregiverPaymentUncheckedCreateNestedManyWithoutCaregiverToContractInput
  }

  export type CaregiverToContractCreateOrConnectWithoutCaregiverInput = {
    where: CaregiverToContractWhereUniqueInput
    create: XOR<CaregiverToContractCreateWithoutCaregiverInput, CaregiverToContractUncheckedCreateWithoutCaregiverInput>
  }

  export type CaregiverToContractCreateManyCaregiverInputEnvelope = {
    data: Enumerable<CaregiverToContractCreateManyCaregiverInput>
    skipDuplicates?: boolean
  }

  export type WorkerUpsertWithoutCaregiverInput = {
    update: XOR<WorkerUpdateWithoutCaregiverInput, WorkerUncheckedUpdateWithoutCaregiverInput>
    create: XOR<WorkerCreateWithoutCaregiverInput, WorkerUncheckedCreateWithoutCaregiverInput>
  }

  export type WorkerUpdateWithoutCaregiverInput = {
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
    Credential?: CredentialUpdateOneRequiredWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutCaregiverInput = {
    credentialId?: StringFieldUpdateOperationsInput | string
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
  }

  export type CaregiverToContractUpsertWithWhereUniqueWithoutCaregiverInput = {
    where: CaregiverToContractWhereUniqueInput
    update: XOR<CaregiverToContractUpdateWithoutCaregiverInput, CaregiverToContractUncheckedUpdateWithoutCaregiverInput>
    create: XOR<CaregiverToContractCreateWithoutCaregiverInput, CaregiverToContractUncheckedCreateWithoutCaregiverInput>
  }

  export type CaregiverToContractUpdateWithWhereUniqueWithoutCaregiverInput = {
    where: CaregiverToContractWhereUniqueInput
    data: XOR<CaregiverToContractUpdateWithoutCaregiverInput, CaregiverToContractUncheckedUpdateWithoutCaregiverInput>
  }

  export type CaregiverToContractUpdateManyWithWhereWithoutCaregiverInput = {
    where: CaregiverToContractScalarWhereInput
    data: XOR<CaregiverToContractUpdateManyMutationInput, CaregiverToContractUncheckedUpdateManyWithoutCaregiverToContractInput>
  }

  export type CredentialCreateWithoutWorkerInput = {
    email: string
    CPF: string
    RG: string
    Person: PersonCreateNestedOneWithoutCredentialInput
    Admin?: AdminCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUncheckedCreateWithoutWorkerInput = {
    personId: string
    email: string
    CPF: string
    RG: string
    Admin?: AdminUncheckedCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerUncheckedCreateNestedOneWithoutCredentialInput
  }

  export type CredentialCreateOrConnectWithoutWorkerInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutWorkerInput, CredentialUncheckedCreateWithoutWorkerInput>
  }

  export type CaregiverCreateWithoutWorkerInput = {
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutWorkerInput = {
    smoker: boolean
    allergyReport: string
    uniqueTicket: string
    availableTimeScales?: CaregiverCreateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverCreatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutWorkerInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
  }

  export type CredentialUpsertWithoutWorkerInput = {
    update: XOR<CredentialUpdateWithoutWorkerInput, CredentialUncheckedUpdateWithoutWorkerInput>
    create: XOR<CredentialCreateWithoutWorkerInput, CredentialUncheckedCreateWithoutWorkerInput>
  }

  export type CredentialUpdateWithoutWorkerInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Person?: PersonUpdateOneRequiredWithoutCredentialNestedInput
    Admin?: AdminUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialUncheckedUpdateWithoutWorkerInput = {
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUncheckedUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUncheckedUpdateOneWithoutCredentialNestedInput
  }

  export type CaregiverUpsertWithoutWorkerInput = {
    update: XOR<CaregiverUpdateWithoutWorkerInput, CaregiverUncheckedUpdateWithoutWorkerInput>
    create: XOR<CaregiverCreateWithoutWorkerInput, CaregiverUncheckedCreateWithoutWorkerInput>
  }

  export type CaregiverUpdateWithoutWorkerInput = {
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutWorkerInput = {
    smoker?: BoolFieldUpdateOperationsInput | boolean
    allergyReport?: StringFieldUpdateOperationsInput | string
    uniqueTicket?: StringFieldUpdateOperationsInput | string
    availableTimeScales?: CaregiverUpdateavailableTimeScalesInput | Enumerable<TIME_SCALE>
    diseaseExperiences?: CaregiverUpdatediseaseExperiencesInput | Enumerable<DISEASE>
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type CredentialCreateWithoutAdminInput = {
    email: string
    CPF: string
    RG: string
    Person: PersonCreateNestedOneWithoutCredentialInput
    Worker?: WorkerCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUncheckedCreateWithoutAdminInput = {
    personId: string
    email: string
    CPF: string
    RG: string
    Worker?: WorkerUncheckedCreateNestedOneWithoutCredentialInput
    Costumer?: CostumerUncheckedCreateNestedOneWithoutCredentialInput
  }

  export type CredentialCreateOrConnectWithoutAdminInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutAdminInput, CredentialUncheckedCreateWithoutAdminInput>
  }

  export type CredentialUpsertWithoutAdminInput = {
    update: XOR<CredentialUpdateWithoutAdminInput, CredentialUncheckedUpdateWithoutAdminInput>
    create: XOR<CredentialCreateWithoutAdminInput, CredentialUncheckedCreateWithoutAdminInput>
  }

  export type CredentialUpdateWithoutAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Person?: PersonUpdateOneRequiredWithoutCredentialNestedInput
    Worker?: WorkerUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialUncheckedUpdateWithoutAdminInput = {
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Worker?: WorkerUncheckedUpdateOneWithoutCredentialNestedInput
    Costumer?: CostumerUncheckedUpdateOneWithoutCredentialNestedInput
  }

  export type PersonCreateWithoutCredentialInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Address?: AddressCreateNestedOneWithoutPersonInput
    Patient?: PatientCreateNestedOneWithoutPersonInput
    Body?: BodyCreateNestedOneWithoutPersonInput
    Contacts?: ContactCreateNestedManyWithoutPersonInput
    Observations?: ObservationCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCredentialInput = {
    id?: string
    name: string
    birthDate: Date | string
    sex: SEX
    photo?: string | null
    archive?: string | null
    deletedAt?: Date | string | null
    Address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    Patient?: PatientUncheckedCreateNestedOneWithoutPersonInput
    Body?: BodyUncheckedCreateNestedOneWithoutPersonInput
    Contacts?: ContactUncheckedCreateNestedManyWithoutPersonInput
    Observations?: ObservationUncheckedCreateNestedManyWithoutPersonInput
    BankAccounts?: BankAccountUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCredentialInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCredentialInput, PersonUncheckedCreateWithoutCredentialInput>
  }

  export type WorkerCreateWithoutCredentialInput = {
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    Caregiver?: CaregiverCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutCredentialInput = {
    PIS: string
    dependents?: number
    workerStatus: WORKER_STATUS
    civilStatus: CIVIL_STATUS
    Caregiver?: CaregiverUncheckedCreateNestedOneWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutCredentialInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
  }

  export type AdminCreateWithoutCredentialInput = {
    administrativeLevel: ADMINISTRATIVE_LEVEL
  }

  export type AdminUncheckedCreateWithoutCredentialInput = {
    administrativeLevel: ADMINISTRATIVE_LEVEL
  }

  export type AdminCreateOrConnectWithoutCredentialInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
  }

  export type CostumerCreateWithoutCredentialInput = {
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientCreateNestedManyWithoutCostumerInput
    Contract?: ContractCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUncheckedCreateWithoutCredentialInput = {
    favoriteScales?: CostumerCreatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedCreateNestedManyWithoutCostumerInput
    Contract?: ContractUncheckedCreateNestedManyWithoutCostumerInput
  }

  export type CostumerCreateOrConnectWithoutCredentialInput = {
    where: CostumerWhereUniqueInput
    create: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
  }

  export type PersonUpsertWithoutCredentialInput = {
    update: XOR<PersonUpdateWithoutCredentialInput, PersonUncheckedUpdateWithoutCredentialInput>
    create: XOR<PersonCreateWithoutCredentialInput, PersonUncheckedCreateWithoutCredentialInput>
  }

  export type PersonUpdateWithoutCredentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutPersonNestedInput
    Patient?: PatientUpdateOneWithoutPersonNestedInput
    Body?: BodyUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCredentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSEXFieldUpdateOperationsInput | SEX
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    Patient?: PatientUncheckedUpdateOneWithoutPersonNestedInput
    Body?: BodyUncheckedUpdateOneWithoutPersonNestedInput
    Contacts?: ContactUncheckedUpdateManyWithoutPersonNestedInput
    Observations?: ObservationUncheckedUpdateManyWithoutPersonNestedInput
    BankAccounts?: BankAccountUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type WorkerUpsertWithoutCredentialInput = {
    update: XOR<WorkerUpdateWithoutCredentialInput, WorkerUncheckedUpdateWithoutCredentialInput>
    create: XOR<WorkerCreateWithoutCredentialInput, WorkerUncheckedCreateWithoutCredentialInput>
  }

  export type WorkerUpdateWithoutCredentialInput = {
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
    Caregiver?: CaregiverUpdateOneWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutCredentialInput = {
    PIS?: StringFieldUpdateOperationsInput | string
    dependents?: IntFieldUpdateOperationsInput | number
    workerStatus?: EnumWORKER_STATUSFieldUpdateOperationsInput | WORKER_STATUS
    civilStatus?: EnumCIVIL_STATUSFieldUpdateOperationsInput | CIVIL_STATUS
    Caregiver?: CaregiverUncheckedUpdateOneWithoutWorkerNestedInput
  }

  export type AdminUpsertWithoutCredentialInput = {
    update: XOR<AdminUpdateWithoutCredentialInput, AdminUncheckedUpdateWithoutCredentialInput>
    create: XOR<AdminCreateWithoutCredentialInput, AdminUncheckedCreateWithoutCredentialInput>
  }

  export type AdminUpdateWithoutCredentialInput = {
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
  }

  export type AdminUncheckedUpdateWithoutCredentialInput = {
    administrativeLevel?: EnumADMINISTRATIVE_LEVELFieldUpdateOperationsInput | ADMINISTRATIVE_LEVEL
  }

  export type CostumerUpsertWithoutCredentialInput = {
    update: XOR<CostumerUpdateWithoutCredentialInput, CostumerUncheckedUpdateWithoutCredentialInput>
    create: XOR<CostumerCreateWithoutCredentialInput, CostumerUncheckedCreateWithoutCredentialInput>
  }

  export type CostumerUpdateWithoutCredentialInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUpdateManyWithoutCostumerNestedInput
    Contract?: ContractUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUncheckedUpdateWithoutCredentialInput = {
    favoriteScales?: CostumerUpdatefavoriteScalesInput | Enumerable<TIME_SCALE>
    Patients?: PatientUncheckedUpdateManyWithoutCostumerNestedInput
    Contract?: ContractUncheckedUpdateManyWithoutCostumerNestedInput
  }

  export type CredentialCreateWithoutCostumerInput = {
    email: string
    CPF: string
    RG: string
    Person: PersonCreateNestedOneWithoutCredentialInput
    Worker?: WorkerCreateNestedOneWithoutCredentialInput
    Admin?: AdminCreateNestedOneWithoutCredentialInput
  }

  export type CredentialUncheckedCreateWithoutCostumerInput = {
    personId: string
    email: string
    CPF: string
    RG: string
    Worker?: WorkerUncheckedCreateNestedOneWithoutCredentialInput
    Admin?: AdminUncheckedCreateNestedOneWithoutCredentialInput
  }

  export type CredentialCreateOrConnectWithoutCostumerInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutCostumerInput, CredentialUncheckedCreateWithoutCostumerInput>
  }

  export type PatientCreateWithoutCostumerInput = {
    Person: PersonCreateNestedOneWithoutPatientInput
    Contract?: ContractCreateNestedOneWithoutPatientsInput
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedCreateWithoutCostumerInput = {
    personId: string
    contractId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientCreateOrConnectWithoutCostumerInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCostumerInput, PatientUncheckedCreateWithoutCostumerInput>
  }

  export type PatientCreateManyCostumerInputEnvelope = {
    data: Enumerable<PatientCreateManyCostumerInput>
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutCostumerInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentCreateNestedManyWithoutContractInput
    Patients?: PatientCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutCostumerInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedCreateNestedManyWithoutContractInput
    Patients?: PatientUncheckedCreateNestedManyWithoutContractInput
    ContractJourney?: ContractJourneyUncheckedCreateNestedManyWithoutContractInput
    CaregiverToContract?: CaregiverToContractUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutCostumerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutCostumerInput, ContractUncheckedCreateWithoutCostumerInput>
  }

  export type ContractCreateManyCostumerInputEnvelope = {
    data: Enumerable<ContractCreateManyCostumerInput>
    skipDuplicates?: boolean
  }

  export type CredentialUpsertWithoutCostumerInput = {
    update: XOR<CredentialUpdateWithoutCostumerInput, CredentialUncheckedUpdateWithoutCostumerInput>
    create: XOR<CredentialCreateWithoutCostumerInput, CredentialUncheckedCreateWithoutCostumerInput>
  }

  export type CredentialUpdateWithoutCostumerInput = {
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Person?: PersonUpdateOneRequiredWithoutCredentialNestedInput
    Worker?: WorkerUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUpdateOneWithoutCredentialNestedInput
  }

  export type CredentialUncheckedUpdateWithoutCostumerInput = {
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    Worker?: WorkerUncheckedUpdateOneWithoutCredentialNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutCredentialNestedInput
  }

  export type PatientUpsertWithWhereUniqueWithoutCostumerInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutCostumerInput, PatientUncheckedUpdateWithoutCostumerInput>
    create: XOR<PatientCreateWithoutCostumerInput, PatientUncheckedCreateWithoutCostumerInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutCostumerInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutCostumerInput, PatientUncheckedUpdateWithoutCostumerInput>
  }

  export type PatientUpdateManyWithWhereWithoutCostumerInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutPatientsInput>
  }

  export type ContractUpsertWithWhereUniqueWithoutCostumerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutCostumerInput, ContractUncheckedUpdateWithoutCostumerInput>
    create: XOR<ContractCreateWithoutCostumerInput, ContractUncheckedCreateWithoutCostumerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutCostumerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutCostumerInput, ContractUncheckedUpdateWithoutCostumerInput>
  }

  export type ContractUpdateManyWithWhereWithoutCostumerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractScalarWhereInput = {
    AND?: Enumerable<ContractScalarWhereInput>
    OR?: Enumerable<ContractScalarWhereInput>
    NOT?: Enumerable<ContractScalarWhereInput>
    id?: UuidFilter | string
    costumerId?: UuidFilter | string
    timeScale?: EnumTIME_SCALEFilter | TIME_SCALE
    initAt?: DateTimeFilter | Date | string
    endAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeNullableFilter | Date | string | null
    acceptedAt?: DateTimeNullableFilter | Date | string | null
    canceledAt?: DateTimeNullableFilter | Date | string | null
    value?: StringFilter | string
    salary?: StringFilter | string
    archives?: StringNullableListFilter
  }

  export type ContactCreateManyPersonInput = {
    id?: string
    type: CONTACT_TYPE
    data: string
    observation?: string | null
  }

  export type ObservationCreateManyPersonInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string | null
  }

  export type BankAccountCreateManyPersonInput = {
    id?: string
    name: string
    type: BANK_ACCOUNT_TYPE
    agency: string
    account: string
    digit: string
  }

  export type ContactUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCONTACT_TYPEFieldUpdateOperationsInput | CONTACT_TYPE
    data?: StringFieldUpdateOperationsInput | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObservationUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationUncheckedUpdateManyWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BankAccountUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountUncheckedUpdateManyWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBANK_ACCOUNT_TYPEFieldUpdateOperationsInput | BANK_ACCOUNT_TYPE
    agency?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    digit?: StringFieldUpdateOperationsInput | string
  }

  export type ContractPaymentCreateManyContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type PatientCreateManyContractInput = {
    personId: string
    costumerId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type ContractJourneyCreateManyContractInput = {
    id: string
    caregiverOrder?: ContractJourneyCreatecaregiverOrderInput | Enumerable<string>
    createdAt?: Date | string | null
  }

  export type CaregiverToContractCreateManyContractInput = {
    id?: string
    caregiverId: string
  }

  export type ContractPaymentUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type ContractPaymentUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type ContractPaymentUncheckedUpdateManyWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUpdateWithoutContractInput = {
    Person?: PersonUpdateOneRequiredWithoutPatientNestedInput
    Costumer?: CostumerUpdateOneWithoutPatientsNestedInput
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateWithoutContractInput = {
    personId?: StringFieldUpdateOperationsInput | string
    costumerId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateManyWithoutPatientsInput = {
    personId?: StringFieldUpdateOperationsInput | string
    costumerId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type ContractJourneyUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContractJourneyUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContractJourneyUncheckedUpdateManyWithoutContractJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverOrder?: ContractJourneyUpdatecaregiverOrderInput | Enumerable<string>
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CaregiverToContractUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    Caregiver?: CaregiverUpdateOneRequiredWithoutCaregiverToContractNestedInput
    CaregiverPayment?: CaregiverPaymentUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    CaregiverPayment?: CaregiverPaymentUncheckedUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractUncheckedUpdateManyWithoutCaregiverToContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentCreateManyCaregiverToContractInput = {
    id?: string
    value: string
    createdAt?: Date | string | null
    proof: string
  }

  export type CaregiverPaymentUpdateWithoutCaregiverToContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentUncheckedUpdateWithoutCaregiverToContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverPaymentUncheckedUpdateManyWithoutCaregiverPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: StringFieldUpdateOperationsInput | string
  }

  export type CaregiverToContractCreateManyCaregiverInput = {
    id?: string
    contractId: string
  }

  export type CaregiverToContractUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    Contract?: ContractUpdateOneRequiredWithoutCaregiverToContractNestedInput
    CaregiverPayment?: CaregiverPaymentUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type CaregiverToContractUncheckedUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    CaregiverPayment?: CaregiverPaymentUncheckedUpdateManyWithoutCaregiverToContractNestedInput
  }

  export type PatientCreateManyCostumerInput = {
    personId: string
    contractId?: string | null
    diseases?: PatientCreatediseasesInput | Enumerable<DISEASE>
  }

  export type ContractCreateManyCostumerInput = {
    id?: string
    timeScale: TIME_SCALE
    initAt: Date | string
    endAt: Date | string
    createdAt?: Date | string | null
    acceptedAt?: Date | string | null
    canceledAt?: Date | string | null
    value: string
    salary: string
    archives?: ContractCreatearchivesInput | Enumerable<string>
  }

  export type PatientUpdateWithoutCostumerInput = {
    Person?: PersonUpdateOneRequiredWithoutPatientNestedInput
    Contract?: ContractUpdateOneWithoutPatientsNestedInput
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type PatientUncheckedUpdateWithoutCostumerInput = {
    personId?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    diseases?: PatientUpdatediseasesInput | Enumerable<DISEASE>
  }

  export type ContractUpdateWithoutCostumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUpdateManyWithoutContractNestedInput
    Patients?: PatientUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutCostumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
    Payments?: ContractPaymentUncheckedUpdateManyWithoutContractNestedInput
    Patients?: PatientUncheckedUpdateManyWithoutContractNestedInput
    ContractJourney?: ContractJourneyUncheckedUpdateManyWithoutContractNestedInput
    CaregiverToContract?: CaregiverToContractUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeScale?: EnumTIME_SCALEFieldUpdateOperationsInput | TIME_SCALE
    initAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    archives?: ContractUpdatearchivesInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}