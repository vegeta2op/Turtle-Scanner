
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model Scan
 * 
 */
export type Scan = $Result.DefaultSelection<Prisma.$ScanPayload>
/**
 * Model ScanFinding
 * 
 */
export type ScanFinding = $Result.DefaultSelection<Prisma.$ScanFindingPayload>
/**
 * Model IntegrationSettings
 * 
 */
export type IntegrationSettings = $Result.DefaultSelection<Prisma.$IntegrationSettingsPayload>
/**
 * Model GitlabGroup
 * 
 */
export type GitlabGroup = $Result.DefaultSelection<Prisma.$GitlabGroupPayload>
/**
 * Model GitlabProject
 * 
 */
export type GitlabProject = $Result.DefaultSelection<Prisma.$GitlabProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ScanStatus: {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus]


export const Severity: {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  INFO: 'INFO'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const IntegrationProvider: {
  GITLAB: 'GITLAB',
  JIRA: 'JIRA',
  SLACK: 'SLACK',
  GITHUB: 'GITHUB'
};

export type IntegrationProvider = (typeof IntegrationProvider)[keyof typeof IntegrationProvider]

}

export type ScanStatus = $Enums.ScanStatus

export const ScanStatus: typeof $Enums.ScanStatus

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type IntegrationProvider = $Enums.IntegrationProvider

export const IntegrationProvider: typeof $Enums.IntegrationProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scan`: Exposes CRUD operations for the **Scan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scans
    * const scans = await prisma.scan.findMany()
    * ```
    */
  get scan(): Prisma.ScanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanFinding`: Exposes CRUD operations for the **ScanFinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanFindings
    * const scanFindings = await prisma.scanFinding.findMany()
    * ```
    */
  get scanFinding(): Prisma.ScanFindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrationSettings`: Exposes CRUD operations for the **IntegrationSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationSettings
    * const integrationSettings = await prisma.integrationSettings.findMany()
    * ```
    */
  get integrationSettings(): Prisma.IntegrationSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitlabGroup`: Exposes CRUD operations for the **GitlabGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitlabGroups
    * const gitlabGroups = await prisma.gitlabGroup.findMany()
    * ```
    */
  get gitlabGroup(): Prisma.GitlabGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitlabProject`: Exposes CRUD operations for the **GitlabProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitlabProjects
    * const gitlabProjects = await prisma.gitlabProject.findMany()
    * ```
    */
  get gitlabProject(): Prisma.GitlabProjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Organization: 'Organization',
    Repository: 'Repository',
    Scan: 'Scan',
    ScanFinding: 'ScanFinding',
    IntegrationSettings: 'IntegrationSettings',
    GitlabGroup: 'GitlabGroup',
    GitlabProject: 'GitlabProject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "organization" | "repository" | "scan" | "scanFinding" | "integrationSettings" | "gitlabGroup" | "gitlabProject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      Scan: {
        payload: Prisma.$ScanPayload<ExtArgs>
        fields: Prisma.ScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findFirst: {
            args: Prisma.ScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findMany: {
            args: Prisma.ScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          create: {
            args: Prisma.ScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          createMany: {
            args: Prisma.ScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          delete: {
            args: Prisma.ScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          update: {
            args: Prisma.ScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          deleteMany: {
            args: Prisma.ScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          upsert: {
            args: Prisma.ScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          aggregate: {
            args: Prisma.ScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScan>
          }
          groupBy: {
            args: Prisma.ScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanCountArgs<ExtArgs>
            result: $Utils.Optional<ScanCountAggregateOutputType> | number
          }
        }
      }
      ScanFinding: {
        payload: Prisma.$ScanFindingPayload<ExtArgs>
        fields: Prisma.ScanFindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanFindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanFindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          findFirst: {
            args: Prisma.ScanFindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanFindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          findMany: {
            args: Prisma.ScanFindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>[]
          }
          create: {
            args: Prisma.ScanFindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          createMany: {
            args: Prisma.ScanFindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanFindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>[]
          }
          delete: {
            args: Prisma.ScanFindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          update: {
            args: Prisma.ScanFindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          deleteMany: {
            args: Prisma.ScanFindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanFindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanFindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>[]
          }
          upsert: {
            args: Prisma.ScanFindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanFindingPayload>
          }
          aggregate: {
            args: Prisma.ScanFindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanFinding>
          }
          groupBy: {
            args: Prisma.ScanFindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanFindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanFindingCountArgs<ExtArgs>
            result: $Utils.Optional<ScanFindingCountAggregateOutputType> | number
          }
        }
      }
      IntegrationSettings: {
        payload: Prisma.$IntegrationSettingsPayload<ExtArgs>
        fields: Prisma.IntegrationSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          findFirst: {
            args: Prisma.IntegrationSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          findMany: {
            args: Prisma.IntegrationSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>[]
          }
          create: {
            args: Prisma.IntegrationSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          createMany: {
            args: Prisma.IntegrationSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>[]
          }
          delete: {
            args: Prisma.IntegrationSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          update: {
            args: Prisma.IntegrationSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationSettingsPayload>
          }
          aggregate: {
            args: Prisma.IntegrationSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationSettings>
          }
          groupBy: {
            args: Prisma.IntegrationSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationSettingsCountAggregateOutputType> | number
          }
        }
      }
      GitlabGroup: {
        payload: Prisma.$GitlabGroupPayload<ExtArgs>
        fields: Prisma.GitlabGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitlabGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitlabGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          findFirst: {
            args: Prisma.GitlabGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitlabGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          findMany: {
            args: Prisma.GitlabGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>[]
          }
          create: {
            args: Prisma.GitlabGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          createMany: {
            args: Prisma.GitlabGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitlabGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>[]
          }
          delete: {
            args: Prisma.GitlabGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          update: {
            args: Prisma.GitlabGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          deleteMany: {
            args: Prisma.GitlabGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitlabGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitlabGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>[]
          }
          upsert: {
            args: Prisma.GitlabGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabGroupPayload>
          }
          aggregate: {
            args: Prisma.GitlabGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitlabGroup>
          }
          groupBy: {
            args: Prisma.GitlabGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitlabGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitlabGroupCountArgs<ExtArgs>
            result: $Utils.Optional<GitlabGroupCountAggregateOutputType> | number
          }
        }
      }
      GitlabProject: {
        payload: Prisma.$GitlabProjectPayload<ExtArgs>
        fields: Prisma.GitlabProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitlabProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitlabProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          findFirst: {
            args: Prisma.GitlabProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitlabProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          findMany: {
            args: Prisma.GitlabProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>[]
          }
          create: {
            args: Prisma.GitlabProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          createMany: {
            args: Prisma.GitlabProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitlabProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>[]
          }
          delete: {
            args: Prisma.GitlabProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          update: {
            args: Prisma.GitlabProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          deleteMany: {
            args: Prisma.GitlabProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitlabProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitlabProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>[]
          }
          upsert: {
            args: Prisma.GitlabProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitlabProjectPayload>
          }
          aggregate: {
            args: Prisma.GitlabProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitlabProject>
          }
          groupBy: {
            args: Prisma.GitlabProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitlabProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitlabProjectCountArgs<ExtArgs>
            result: $Utils.Optional<GitlabProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    organization?: OrganizationOmit
    repository?: RepositoryOmit
    scan?: ScanOmit
    scanFinding?: ScanFindingOmit
    integrationSettings?: IntegrationSettingsOmit
    gitlabGroup?: GitlabGroupOmit
    gitlabProject?: GitlabProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    scans: number
    integrations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    scans?: boolean | UserCountOutputTypeCountScansArgs
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationSettingsWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    repositories: number
    scans: number
    integrations: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | OrganizationCountOutputTypeCountRepositoriesArgs
    scans?: boolean | OrganizationCountOutputTypeCountScansArgs
    integrations?: boolean | OrganizationCountOutputTypeCountIntegrationsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountScansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationSettingsWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    scans: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scans?: boolean | RepositoryCountOutputTypeCountScansArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountScansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
  }


  /**
   * Count Type ScanCountOutputType
   */

  export type ScanCountOutputType = {
    findings: number
  }

  export type ScanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    findings?: boolean | ScanCountOutputTypeCountFindingsArgs
  }

  // Custom InputTypes
  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCountOutputType
     */
    select?: ScanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanFindingWhereInput
  }


  /**
   * Count Type IntegrationSettingsCountOutputType
   */

  export type IntegrationSettingsCountOutputType = {
    gitlabGroups: number
    gitlabProjects: number
  }

  export type IntegrationSettingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gitlabGroups?: boolean | IntegrationSettingsCountOutputTypeCountGitlabGroupsArgs
    gitlabProjects?: boolean | IntegrationSettingsCountOutputTypeCountGitlabProjectsArgs
  }

  // Custom InputTypes
  /**
   * IntegrationSettingsCountOutputType without action
   */
  export type IntegrationSettingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettingsCountOutputType
     */
    select?: IntegrationSettingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntegrationSettingsCountOutputType without action
   */
  export type IntegrationSettingsCountOutputTypeCountGitlabGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitlabGroupWhereInput
  }

  /**
   * IntegrationSettingsCountOutputType without action
   */
  export type IntegrationSettingsCountOutputTypeCountGitlabProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitlabProjectWhereInput
  }


  /**
   * Count Type GitlabGroupCountOutputType
   */

  export type GitlabGroupCountOutputType = {
    projects: number
  }

  export type GitlabGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | GitlabGroupCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * GitlabGroupCountOutputType without action
   */
  export type GitlabGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroupCountOutputType
     */
    select?: GitlabGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GitlabGroupCountOutputType without action
   */
  export type GitlabGroupCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitlabProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    scans?: boolean | User$scansArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    scans?: boolean | User$scansArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      scans: Prisma.$ScanPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationSettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scans<T extends User$scansArgs<ExtArgs> = {}>(args?: Subset<T, User$scansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.scans
   */
  export type User$scansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    cursor?: ScanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    where?: IntegrationSettingsWhereInput
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    cursor?: IntegrationSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationSettingsScalarFieldEnum | IntegrationSettingsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    gitlabGroupId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    gitlabGroupId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    gitlabGroupId: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gitlabGroupId: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    gitlabGroupId: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    gitlabGroupId?: true
  }

  export type OrganizationSumAggregateInputType = {
    gitlabGroupId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    gitlabGroupId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    gitlabGroupId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    gitlabGroupId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    gitlabGroupId: number | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabGroupId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repositories?: boolean | Organization$repositoriesArgs<ExtArgs>
    scans?: boolean | Organization$scansArgs<ExtArgs>
    integrations?: boolean | Organization$integrationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabGroupId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabGroupId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    gitlabGroupId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gitlabGroupId" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | Organization$repositoriesArgs<ExtArgs>
    scans?: boolean | Organization$scansArgs<ExtArgs>
    integrations?: boolean | Organization$integrationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      repositories: Prisma.$RepositoryPayload<ExtArgs>[]
      scans: Prisma.$ScanPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationSettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gitlabGroupId: number | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repositories<T extends Organization$repositoriesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$repositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scans<T extends Organization$scansArgs<ExtArgs> = {}>(args?: Subset<T, Organization$scansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends Organization$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly gitlabGroupId: FieldRef<"Organization", 'Int'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.repositories
   */
  export type Organization$repositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Organization.scans
   */
  export type Organization$scansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    cursor?: ScanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Organization.integrations
   */
  export type Organization$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    where?: IntegrationSettingsWhereInput
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    cursor?: IntegrationSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationSettingsScalarFieldEnum | IntegrationSettingsScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    gitlabProjectId: number | null
    githubRepoId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    gitlabProjectId: number | null
    githubRepoId: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    gitlabProjectId: number | null
    githubRepoId: number | null
    defaultBranch: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gitlabProjectId: number | null
    githubRepoId: number | null
    defaultBranch: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    name: number
    gitlabProjectId: number
    githubRepoId: number
    defaultBranch: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    gitlabProjectId?: true
    githubRepoId?: true
  }

  export type RepositorySumAggregateInputType = {
    gitlabProjectId?: true
    githubRepoId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    name?: true
    gitlabProjectId?: true
    githubRepoId?: true
    defaultBranch?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    name?: true
    gitlabProjectId?: true
    githubRepoId?: true
    defaultBranch?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    name?: true
    gitlabProjectId?: true
    githubRepoId?: true
    defaultBranch?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    name: string
    gitlabProjectId: number | null
    githubRepoId: number | null
    defaultBranch: string | null
    organizationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabProjectId?: boolean
    githubRepoId?: boolean
    defaultBranch?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Repository$organizationArgs<ExtArgs>
    scans?: boolean | Repository$scansArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabProjectId?: boolean
    githubRepoId?: boolean
    defaultBranch?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Repository$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gitlabProjectId?: boolean
    githubRepoId?: boolean
    defaultBranch?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Repository$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    name?: boolean
    gitlabProjectId?: boolean
    githubRepoId?: boolean
    defaultBranch?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gitlabProjectId" | "githubRepoId" | "defaultBranch" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Repository$organizationArgs<ExtArgs>
    scans?: boolean | Repository$scansArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Repository$organizationArgs<ExtArgs>
  }
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Repository$organizationArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      scans: Prisma.$ScanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gitlabProjectId: number | null
      githubRepoId: number | null
      defaultBranch: string | null
      organizationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
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
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Repository$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Repository$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scans<T extends Repository$scansArgs<ExtArgs> = {}>(args?: Subset<T, Repository$scansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly gitlabProjectId: FieldRef<"Repository", 'Int'>
    readonly githubRepoId: FieldRef<"Repository", 'Int'>
    readonly defaultBranch: FieldRef<"Repository", 'String'>
    readonly organizationId: FieldRef<"Repository", 'String'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
    readonly updatedAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.organization
   */
  export type Repository$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Repository.scans
   */
  export type Repository$scansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    cursor?: ScanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model Scan
   */

  export type AggregateScan = {
    _count: ScanCountAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  export type ScanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.ScanStatus | null
    createdByUserId: string | null
    organizationId: string | null
    repositoryId: string | null
    includeCrossRepo: boolean | null
    reportMarkdown: string | null
  }

  export type ScanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.ScanStatus | null
    createdByUserId: string | null
    organizationId: string | null
    repositoryId: string | null
    includeCrossRepo: boolean | null
    reportMarkdown: string | null
  }

  export type ScanCountAggregateOutputType = {
    id: number
    createdAt: number
    startedAt: number
    finishedAt: number
    status: number
    createdByUserId: number
    organizationId: number
    repositoryId: number
    includeCrossRepo: number
    parameters: number
    reportMarkdown: number
    _all: number
  }


  export type ScanMinAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    createdByUserId?: true
    organizationId?: true
    repositoryId?: true
    includeCrossRepo?: true
    reportMarkdown?: true
  }

  export type ScanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    createdByUserId?: true
    organizationId?: true
    repositoryId?: true
    includeCrossRepo?: true
    reportMarkdown?: true
  }

  export type ScanCountAggregateInputType = {
    id?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    createdByUserId?: true
    organizationId?: true
    repositoryId?: true
    includeCrossRepo?: true
    parameters?: true
    reportMarkdown?: true
    _all?: true
  }

  export type ScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan to aggregate.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scans
    **/
    _count?: true | ScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanMaxAggregateInputType
  }

  export type GetScanAggregateType<T extends ScanAggregateArgs> = {
        [P in keyof T & keyof AggregateScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan[P]>
      : GetScalarType<T[P], AggregateScan[P]>
  }




  export type ScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithAggregationInput | ScanOrderByWithAggregationInput[]
    by: ScanScalarFieldEnum[] | ScanScalarFieldEnum
    having?: ScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanCountAggregateInputType | true
    _min?: ScanMinAggregateInputType
    _max?: ScanMaxAggregateInputType
  }

  export type ScanGroupByOutputType = {
    id: string
    createdAt: Date
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.ScanStatus
    createdByUserId: string
    organizationId: string | null
    repositoryId: string | null
    includeCrossRepo: boolean
    parameters: JsonValue | null
    reportMarkdown: string | null
    _count: ScanCountAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  type GetScanGroupByPayload<T extends ScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanGroupByOutputType[P]>
            : GetScalarType<T[P], ScanGroupByOutputType[P]>
        }
      >
    >


  export type ScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    createdByUserId?: boolean
    organizationId?: boolean
    repositoryId?: boolean
    includeCrossRepo?: boolean
    parameters?: boolean
    reportMarkdown?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
    findings?: boolean | Scan$findingsArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    createdByUserId?: boolean
    organizationId?: boolean
    repositoryId?: boolean
    includeCrossRepo?: boolean
    parameters?: boolean
    reportMarkdown?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    createdByUserId?: boolean
    organizationId?: boolean
    repositoryId?: boolean
    includeCrossRepo?: boolean
    parameters?: boolean
    reportMarkdown?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    createdByUserId?: boolean
    organizationId?: boolean
    repositoryId?: boolean
    includeCrossRepo?: boolean
    parameters?: boolean
    reportMarkdown?: boolean
  }

  export type ScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "startedAt" | "finishedAt" | "status" | "createdByUserId" | "organizationId" | "repositoryId" | "includeCrossRepo" | "parameters" | "reportMarkdown", ExtArgs["result"]["scan"]>
  export type ScanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
    findings?: boolean | Scan$findingsArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
  }
  export type ScanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | Scan$organizationArgs<ExtArgs>
    repository?: boolean | Scan$repositoryArgs<ExtArgs>
  }

  export type $ScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scan"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      repository: Prisma.$RepositoryPayload<ExtArgs> | null
      findings: Prisma.$ScanFindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      startedAt: Date | null
      finishedAt: Date | null
      status: $Enums.ScanStatus
      createdByUserId: string
      organizationId: string | null
      repositoryId: string | null
      includeCrossRepo: boolean
      parameters: Prisma.JsonValue | null
      reportMarkdown: string | null
    }, ExtArgs["result"]["scan"]>
    composites: {}
  }

  type ScanGetPayload<S extends boolean | null | undefined | ScanDefaultArgs> = $Result.GetResult<Prisma.$ScanPayload, S>

  type ScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanCountAggregateInputType | true
    }

  export interface ScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scan'], meta: { name: 'Scan' } }
    /**
     * Find zero or one Scan that matches the filter.
     * @param {ScanFindUniqueArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindUniqueArgs>(args: SelectSubset<T, ScanFindUniqueArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindUniqueOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindFirstArgs>(args?: SelectSubset<T, ScanFindFirstArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scans
     * const scans = await prisma.scan.findMany()
     * 
     * // Get first 10 Scans
     * const scans = await prisma.scan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanWithIdOnly = await prisma.scan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanFindManyArgs>(args?: SelectSubset<T, ScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scan.
     * @param {ScanCreateArgs} args - Arguments to create a Scan.
     * @example
     * // Create one Scan
     * const Scan = await prisma.scan.create({
     *   data: {
     *     // ... data to create a Scan
     *   }
     * })
     * 
     */
    create<T extends ScanCreateArgs>(args: SelectSubset<T, ScanCreateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scans.
     * @param {ScanCreateManyArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanCreateManyArgs>(args?: SelectSubset<T, ScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scans and returns the data saved in the database.
     * @param {ScanCreateManyAndReturnArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scan.
     * @param {ScanDeleteArgs} args - Arguments to delete one Scan.
     * @example
     * // Delete one Scan
     * const Scan = await prisma.scan.delete({
     *   where: {
     *     // ... filter to delete one Scan
     *   }
     * })
     * 
     */
    delete<T extends ScanDeleteArgs>(args: SelectSubset<T, ScanDeleteArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scan.
     * @param {ScanUpdateArgs} args - Arguments to update one Scan.
     * @example
     * // Update one Scan
     * const scan = await prisma.scan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanUpdateArgs>(args: SelectSubset<T, ScanUpdateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scans.
     * @param {ScanDeleteManyArgs} args - Arguments to filter Scans to delete.
     * @example
     * // Delete a few Scans
     * const { count } = await prisma.scan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanDeleteManyArgs>(args?: SelectSubset<T, ScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanUpdateManyArgs>(args: SelectSubset<T, ScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans and returns the data updated in the database.
     * @param {ScanUpdateManyAndReturnArgs} args - Arguments to update many Scans.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scan.
     * @param {ScanUpsertArgs} args - Arguments to update or create a Scan.
     * @example
     * // Update or create a Scan
     * const scan = await prisma.scan.upsert({
     *   create: {
     *     // ... data to create a Scan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan we want to update
     *   }
     * })
     */
    upsert<T extends ScanUpsertArgs>(args: SelectSubset<T, ScanUpsertArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCountArgs} args - Arguments to filter Scans to count.
     * @example
     * // Count the number of Scans
     * const count = await prisma.scan.count({
     *   where: {
     *     // ... the filter for the Scans we want to count
     *   }
     * })
    **/
    count<T extends ScanCountArgs>(
      args?: Subset<T, ScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScanAggregateArgs>(args: Subset<T, ScanAggregateArgs>): Prisma.PrismaPromise<GetScanAggregateType<T>>

    /**
     * Group by Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanGroupByArgs} args - Group by arguments.
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
      T extends ScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanGroupByArgs['orderBy'] }
        : { orderBy?: ScanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scan model
   */
  readonly fields: ScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends Scan$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Scan$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repository<T extends Scan$repositoryArgs<ExtArgs> = {}>(args?: Subset<T, Scan$repositoryArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findings<T extends Scan$findingsArgs<ExtArgs> = {}>(args?: Subset<T, Scan$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scan model
   */
  interface ScanFieldRefs {
    readonly id: FieldRef<"Scan", 'String'>
    readonly createdAt: FieldRef<"Scan", 'DateTime'>
    readonly startedAt: FieldRef<"Scan", 'DateTime'>
    readonly finishedAt: FieldRef<"Scan", 'DateTime'>
    readonly status: FieldRef<"Scan", 'ScanStatus'>
    readonly createdByUserId: FieldRef<"Scan", 'String'>
    readonly organizationId: FieldRef<"Scan", 'String'>
    readonly repositoryId: FieldRef<"Scan", 'String'>
    readonly includeCrossRepo: FieldRef<"Scan", 'Boolean'>
    readonly parameters: FieldRef<"Scan", 'Json'>
    readonly reportMarkdown: FieldRef<"Scan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scan findUnique
   */
  export type ScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findUniqueOrThrow
   */
  export type ScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findFirst
   */
  export type ScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findFirstOrThrow
   */
  export type ScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findMany
   */
  export type ScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scans to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan create
   */
  export type ScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to create a Scan.
     */
    data: XOR<ScanCreateInput, ScanUncheckedCreateInput>
  }

  /**
   * Scan createMany
   */
  export type ScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan createManyAndReturn
   */
  export type ScanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scan update
   */
  export type ScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to update a Scan.
     */
    data: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
    /**
     * Choose, which Scan to update.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan updateMany
   */
  export type ScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
  }

  /**
   * Scan updateManyAndReturn
   */
  export type ScanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scan upsert
   */
  export type ScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The filter to search for the Scan to update in case it exists.
     */
    where: ScanWhereUniqueInput
    /**
     * In case the Scan found by the `where` argument doesn't exist, create a new Scan with this data.
     */
    create: XOR<ScanCreateInput, ScanUncheckedCreateInput>
    /**
     * In case the Scan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
  }

  /**
   * Scan delete
   */
  export type ScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter which Scan to delete.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan deleteMany
   */
  export type ScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scans to delete
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to delete.
     */
    limit?: number
  }

  /**
   * Scan.organization
   */
  export type Scan$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Scan.repository
   */
  export type Scan$repositoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
  }

  /**
   * Scan.findings
   */
  export type Scan$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    where?: ScanFindingWhereInput
    orderBy?: ScanFindingOrderByWithRelationInput | ScanFindingOrderByWithRelationInput[]
    cursor?: ScanFindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanFindingScalarFieldEnum | ScanFindingScalarFieldEnum[]
  }

  /**
   * Scan without action
   */
  export type ScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
  }


  /**
   * Model ScanFinding
   */

  export type AggregateScanFinding = {
    _count: ScanFindingCountAggregateOutputType | null
    _avg: ScanFindingAvgAggregateOutputType | null
    _sum: ScanFindingSumAggregateOutputType | null
    _min: ScanFindingMinAggregateOutputType | null
    _max: ScanFindingMaxAggregateOutputType | null
  }

  export type ScanFindingAvgAggregateOutputType = {
    line: number | null
  }

  export type ScanFindingSumAggregateOutputType = {
    line: number | null
  }

  export type ScanFindingMinAggregateOutputType = {
    id: string | null
    scanId: string | null
    severity: $Enums.Severity | null
    title: string | null
    description: string | null
    recommendation: string | null
    filePath: string | null
    line: number | null
    createdAt: Date | null
  }

  export type ScanFindingMaxAggregateOutputType = {
    id: string | null
    scanId: string | null
    severity: $Enums.Severity | null
    title: string | null
    description: string | null
    recommendation: string | null
    filePath: string | null
    line: number | null
    createdAt: Date | null
  }

  export type ScanFindingCountAggregateOutputType = {
    id: number
    scanId: number
    severity: number
    title: number
    description: number
    recommendation: number
    filePath: number
    line: number
    externalRefs: number
    createdAt: number
    _all: number
  }


  export type ScanFindingAvgAggregateInputType = {
    line?: true
  }

  export type ScanFindingSumAggregateInputType = {
    line?: true
  }

  export type ScanFindingMinAggregateInputType = {
    id?: true
    scanId?: true
    severity?: true
    title?: true
    description?: true
    recommendation?: true
    filePath?: true
    line?: true
    createdAt?: true
  }

  export type ScanFindingMaxAggregateInputType = {
    id?: true
    scanId?: true
    severity?: true
    title?: true
    description?: true
    recommendation?: true
    filePath?: true
    line?: true
    createdAt?: true
  }

  export type ScanFindingCountAggregateInputType = {
    id?: true
    scanId?: true
    severity?: true
    title?: true
    description?: true
    recommendation?: true
    filePath?: true
    line?: true
    externalRefs?: true
    createdAt?: true
    _all?: true
  }

  export type ScanFindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanFinding to aggregate.
     */
    where?: ScanFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanFindings to fetch.
     */
    orderBy?: ScanFindingOrderByWithRelationInput | ScanFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanFindings
    **/
    _count?: true | ScanFindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanFindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanFindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanFindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanFindingMaxAggregateInputType
  }

  export type GetScanFindingAggregateType<T extends ScanFindingAggregateArgs> = {
        [P in keyof T & keyof AggregateScanFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanFinding[P]>
      : GetScalarType<T[P], AggregateScanFinding[P]>
  }




  export type ScanFindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanFindingWhereInput
    orderBy?: ScanFindingOrderByWithAggregationInput | ScanFindingOrderByWithAggregationInput[]
    by: ScanFindingScalarFieldEnum[] | ScanFindingScalarFieldEnum
    having?: ScanFindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanFindingCountAggregateInputType | true
    _avg?: ScanFindingAvgAggregateInputType
    _sum?: ScanFindingSumAggregateInputType
    _min?: ScanFindingMinAggregateInputType
    _max?: ScanFindingMaxAggregateInputType
  }

  export type ScanFindingGroupByOutputType = {
    id: string
    scanId: string
    severity: $Enums.Severity
    title: string
    description: string | null
    recommendation: string | null
    filePath: string | null
    line: number | null
    externalRefs: JsonValue | null
    createdAt: Date
    _count: ScanFindingCountAggregateOutputType | null
    _avg: ScanFindingAvgAggregateOutputType | null
    _sum: ScanFindingSumAggregateOutputType | null
    _min: ScanFindingMinAggregateOutputType | null
    _max: ScanFindingMaxAggregateOutputType | null
  }

  type GetScanFindingGroupByPayload<T extends ScanFindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanFindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanFindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanFindingGroupByOutputType[P]>
            : GetScalarType<T[P], ScanFindingGroupByOutputType[P]>
        }
      >
    >


  export type ScanFindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    recommendation?: boolean
    filePath?: boolean
    line?: boolean
    externalRefs?: boolean
    createdAt?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanFinding"]>

  export type ScanFindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    recommendation?: boolean
    filePath?: boolean
    line?: boolean
    externalRefs?: boolean
    createdAt?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanFinding"]>

  export type ScanFindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    recommendation?: boolean
    filePath?: boolean
    line?: boolean
    externalRefs?: boolean
    createdAt?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanFinding"]>

  export type ScanFindingSelectScalar = {
    id?: boolean
    scanId?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    recommendation?: boolean
    filePath?: boolean
    line?: boolean
    externalRefs?: boolean
    createdAt?: boolean
  }

  export type ScanFindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "severity" | "title" | "description" | "recommendation" | "filePath" | "line" | "externalRefs" | "createdAt", ExtArgs["result"]["scanFinding"]>
  export type ScanFindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type ScanFindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type ScanFindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }

  export type $ScanFindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanFinding"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scanId: string
      severity: $Enums.Severity
      title: string
      description: string | null
      recommendation: string | null
      filePath: string | null
      line: number | null
      externalRefs: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["scanFinding"]>
    composites: {}
  }

  type ScanFindingGetPayload<S extends boolean | null | undefined | ScanFindingDefaultArgs> = $Result.GetResult<Prisma.$ScanFindingPayload, S>

  type ScanFindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanFindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanFindingCountAggregateInputType | true
    }

  export interface ScanFindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanFinding'], meta: { name: 'ScanFinding' } }
    /**
     * Find zero or one ScanFinding that matches the filter.
     * @param {ScanFindingFindUniqueArgs} args - Arguments to find a ScanFinding
     * @example
     * // Get one ScanFinding
     * const scanFinding = await prisma.scanFinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindingFindUniqueArgs>(args: SelectSubset<T, ScanFindingFindUniqueArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanFinding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindingFindUniqueOrThrowArgs} args - Arguments to find a ScanFinding
     * @example
     * // Get one ScanFinding
     * const scanFinding = await prisma.scanFinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindingFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanFindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanFinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingFindFirstArgs} args - Arguments to find a ScanFinding
     * @example
     * // Get one ScanFinding
     * const scanFinding = await prisma.scanFinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindingFindFirstArgs>(args?: SelectSubset<T, ScanFindingFindFirstArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanFinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingFindFirstOrThrowArgs} args - Arguments to find a ScanFinding
     * @example
     * // Get one ScanFinding
     * const scanFinding = await prisma.scanFinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindingFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanFindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanFindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanFindings
     * const scanFindings = await prisma.scanFinding.findMany()
     * 
     * // Get first 10 ScanFindings
     * const scanFindings = await prisma.scanFinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanFindingWithIdOnly = await prisma.scanFinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanFindingFindManyArgs>(args?: SelectSubset<T, ScanFindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanFinding.
     * @param {ScanFindingCreateArgs} args - Arguments to create a ScanFinding.
     * @example
     * // Create one ScanFinding
     * const ScanFinding = await prisma.scanFinding.create({
     *   data: {
     *     // ... data to create a ScanFinding
     *   }
     * })
     * 
     */
    create<T extends ScanFindingCreateArgs>(args: SelectSubset<T, ScanFindingCreateArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanFindings.
     * @param {ScanFindingCreateManyArgs} args - Arguments to create many ScanFindings.
     * @example
     * // Create many ScanFindings
     * const scanFinding = await prisma.scanFinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanFindingCreateManyArgs>(args?: SelectSubset<T, ScanFindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanFindings and returns the data saved in the database.
     * @param {ScanFindingCreateManyAndReturnArgs} args - Arguments to create many ScanFindings.
     * @example
     * // Create many ScanFindings
     * const scanFinding = await prisma.scanFinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanFindings and only return the `id`
     * const scanFindingWithIdOnly = await prisma.scanFinding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanFindingCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanFindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanFinding.
     * @param {ScanFindingDeleteArgs} args - Arguments to delete one ScanFinding.
     * @example
     * // Delete one ScanFinding
     * const ScanFinding = await prisma.scanFinding.delete({
     *   where: {
     *     // ... filter to delete one ScanFinding
     *   }
     * })
     * 
     */
    delete<T extends ScanFindingDeleteArgs>(args: SelectSubset<T, ScanFindingDeleteArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanFinding.
     * @param {ScanFindingUpdateArgs} args - Arguments to update one ScanFinding.
     * @example
     * // Update one ScanFinding
     * const scanFinding = await prisma.scanFinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanFindingUpdateArgs>(args: SelectSubset<T, ScanFindingUpdateArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanFindings.
     * @param {ScanFindingDeleteManyArgs} args - Arguments to filter ScanFindings to delete.
     * @example
     * // Delete a few ScanFindings
     * const { count } = await prisma.scanFinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanFindingDeleteManyArgs>(args?: SelectSubset<T, ScanFindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanFindings
     * const scanFinding = await prisma.scanFinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanFindingUpdateManyArgs>(args: SelectSubset<T, ScanFindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanFindings and returns the data updated in the database.
     * @param {ScanFindingUpdateManyAndReturnArgs} args - Arguments to update many ScanFindings.
     * @example
     * // Update many ScanFindings
     * const scanFinding = await prisma.scanFinding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanFindings and only return the `id`
     * const scanFindingWithIdOnly = await prisma.scanFinding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanFindingUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanFindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanFinding.
     * @param {ScanFindingUpsertArgs} args - Arguments to update or create a ScanFinding.
     * @example
     * // Update or create a ScanFinding
     * const scanFinding = await prisma.scanFinding.upsert({
     *   create: {
     *     // ... data to create a ScanFinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanFinding we want to update
     *   }
     * })
     */
    upsert<T extends ScanFindingUpsertArgs>(args: SelectSubset<T, ScanFindingUpsertArgs<ExtArgs>>): Prisma__ScanFindingClient<$Result.GetResult<Prisma.$ScanFindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingCountArgs} args - Arguments to filter ScanFindings to count.
     * @example
     * // Count the number of ScanFindings
     * const count = await prisma.scanFinding.count({
     *   where: {
     *     // ... the filter for the ScanFindings we want to count
     *   }
     * })
    **/
    count<T extends ScanFindingCountArgs>(
      args?: Subset<T, ScanFindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanFindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScanFindingAggregateArgs>(args: Subset<T, ScanFindingAggregateArgs>): Prisma.PrismaPromise<GetScanFindingAggregateType<T>>

    /**
     * Group by ScanFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindingGroupByArgs} args - Group by arguments.
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
      T extends ScanFindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanFindingGroupByArgs['orderBy'] }
        : { orderBy?: ScanFindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScanFindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanFinding model
   */
  readonly fields: ScanFindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanFinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanFindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanFinding model
   */
  interface ScanFindingFieldRefs {
    readonly id: FieldRef<"ScanFinding", 'String'>
    readonly scanId: FieldRef<"ScanFinding", 'String'>
    readonly severity: FieldRef<"ScanFinding", 'Severity'>
    readonly title: FieldRef<"ScanFinding", 'String'>
    readonly description: FieldRef<"ScanFinding", 'String'>
    readonly recommendation: FieldRef<"ScanFinding", 'String'>
    readonly filePath: FieldRef<"ScanFinding", 'String'>
    readonly line: FieldRef<"ScanFinding", 'Int'>
    readonly externalRefs: FieldRef<"ScanFinding", 'Json'>
    readonly createdAt: FieldRef<"ScanFinding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScanFinding findUnique
   */
  export type ScanFindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter, which ScanFinding to fetch.
     */
    where: ScanFindingWhereUniqueInput
  }

  /**
   * ScanFinding findUniqueOrThrow
   */
  export type ScanFindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter, which ScanFinding to fetch.
     */
    where: ScanFindingWhereUniqueInput
  }

  /**
   * ScanFinding findFirst
   */
  export type ScanFindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter, which ScanFinding to fetch.
     */
    where?: ScanFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanFindings to fetch.
     */
    orderBy?: ScanFindingOrderByWithRelationInput | ScanFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanFindings.
     */
    cursor?: ScanFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanFindings.
     */
    distinct?: ScanFindingScalarFieldEnum | ScanFindingScalarFieldEnum[]
  }

  /**
   * ScanFinding findFirstOrThrow
   */
  export type ScanFindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter, which ScanFinding to fetch.
     */
    where?: ScanFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanFindings to fetch.
     */
    orderBy?: ScanFindingOrderByWithRelationInput | ScanFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanFindings.
     */
    cursor?: ScanFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanFindings.
     */
    distinct?: ScanFindingScalarFieldEnum | ScanFindingScalarFieldEnum[]
  }

  /**
   * ScanFinding findMany
   */
  export type ScanFindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter, which ScanFindings to fetch.
     */
    where?: ScanFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanFindings to fetch.
     */
    orderBy?: ScanFindingOrderByWithRelationInput | ScanFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanFindings.
     */
    cursor?: ScanFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanFindings.
     */
    skip?: number
    distinct?: ScanFindingScalarFieldEnum | ScanFindingScalarFieldEnum[]
  }

  /**
   * ScanFinding create
   */
  export type ScanFindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * The data needed to create a ScanFinding.
     */
    data: XOR<ScanFindingCreateInput, ScanFindingUncheckedCreateInput>
  }

  /**
   * ScanFinding createMany
   */
  export type ScanFindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanFindings.
     */
    data: ScanFindingCreateManyInput | ScanFindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanFinding createManyAndReturn
   */
  export type ScanFindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * The data used to create many ScanFindings.
     */
    data: ScanFindingCreateManyInput | ScanFindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanFinding update
   */
  export type ScanFindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * The data needed to update a ScanFinding.
     */
    data: XOR<ScanFindingUpdateInput, ScanFindingUncheckedUpdateInput>
    /**
     * Choose, which ScanFinding to update.
     */
    where: ScanFindingWhereUniqueInput
  }

  /**
   * ScanFinding updateMany
   */
  export type ScanFindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanFindings.
     */
    data: XOR<ScanFindingUpdateManyMutationInput, ScanFindingUncheckedUpdateManyInput>
    /**
     * Filter which ScanFindings to update
     */
    where?: ScanFindingWhereInput
    /**
     * Limit how many ScanFindings to update.
     */
    limit?: number
  }

  /**
   * ScanFinding updateManyAndReturn
   */
  export type ScanFindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * The data used to update ScanFindings.
     */
    data: XOR<ScanFindingUpdateManyMutationInput, ScanFindingUncheckedUpdateManyInput>
    /**
     * Filter which ScanFindings to update
     */
    where?: ScanFindingWhereInput
    /**
     * Limit how many ScanFindings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanFinding upsert
   */
  export type ScanFindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * The filter to search for the ScanFinding to update in case it exists.
     */
    where: ScanFindingWhereUniqueInput
    /**
     * In case the ScanFinding found by the `where` argument doesn't exist, create a new ScanFinding with this data.
     */
    create: XOR<ScanFindingCreateInput, ScanFindingUncheckedCreateInput>
    /**
     * In case the ScanFinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanFindingUpdateInput, ScanFindingUncheckedUpdateInput>
  }

  /**
   * ScanFinding delete
   */
  export type ScanFindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
    /**
     * Filter which ScanFinding to delete.
     */
    where: ScanFindingWhereUniqueInput
  }

  /**
   * ScanFinding deleteMany
   */
  export type ScanFindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanFindings to delete
     */
    where?: ScanFindingWhereInput
    /**
     * Limit how many ScanFindings to delete.
     */
    limit?: number
  }

  /**
   * ScanFinding without action
   */
  export type ScanFindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanFinding
     */
    select?: ScanFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanFinding
     */
    omit?: ScanFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanFindingInclude<ExtArgs> | null
  }


  /**
   * Model IntegrationSettings
   */

  export type AggregateIntegrationSettings = {
    _count: IntegrationSettingsCountAggregateOutputType | null
    _min: IntegrationSettingsMinAggregateOutputType | null
    _max: IntegrationSettingsMaxAggregateOutputType | null
  }

  export type IntegrationSettingsMinAggregateOutputType = {
    id: string | null
    provider: $Enums.IntegrationProvider | null
    userId: string | null
    organizationId: string | null
    accessTokenEnc: string | null
    refreshTokenEnc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationSettingsMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.IntegrationProvider | null
    userId: string | null
    organizationId: string | null
    accessTokenEnc: string | null
    refreshTokenEnc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationSettingsCountAggregateOutputType = {
    id: number
    provider: number
    userId: number
    organizationId: number
    accessTokenEnc: number
    refreshTokenEnc: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationSettingsMinAggregateInputType = {
    id?: true
    provider?: true
    userId?: true
    organizationId?: true
    accessTokenEnc?: true
    refreshTokenEnc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationSettingsMaxAggregateInputType = {
    id?: true
    provider?: true
    userId?: true
    organizationId?: true
    accessTokenEnc?: true
    refreshTokenEnc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationSettingsCountAggregateInputType = {
    id?: true
    provider?: true
    userId?: true
    organizationId?: true
    accessTokenEnc?: true
    refreshTokenEnc?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationSettings to aggregate.
     */
    where?: IntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationSettings to fetch.
     */
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationSettings
    **/
    _count?: true | IntegrationSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationSettingsMaxAggregateInputType
  }

  export type GetIntegrationSettingsAggregateType<T extends IntegrationSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationSettings[P]>
      : GetScalarType<T[P], AggregateIntegrationSettings[P]>
  }




  export type IntegrationSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationSettingsWhereInput
    orderBy?: IntegrationSettingsOrderByWithAggregationInput | IntegrationSettingsOrderByWithAggregationInput[]
    by: IntegrationSettingsScalarFieldEnum[] | IntegrationSettingsScalarFieldEnum
    having?: IntegrationSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationSettingsCountAggregateInputType | true
    _min?: IntegrationSettingsMinAggregateInputType
    _max?: IntegrationSettingsMaxAggregateInputType
  }

  export type IntegrationSettingsGroupByOutputType = {
    id: string
    provider: $Enums.IntegrationProvider
    userId: string | null
    organizationId: string | null
    accessTokenEnc: string | null
    refreshTokenEnc: string | null
    data: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IntegrationSettingsCountAggregateOutputType | null
    _min: IntegrationSettingsMinAggregateOutputType | null
    _max: IntegrationSettingsMaxAggregateOutputType | null
  }

  type GetIntegrationSettingsGroupByPayload<T extends IntegrationSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationSettingsGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    userId?: boolean
    organizationId?: boolean
    accessTokenEnc?: boolean
    refreshTokenEnc?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
    gitlabGroups?: boolean | IntegrationSettings$gitlabGroupsArgs<ExtArgs>
    gitlabProjects?: boolean | IntegrationSettings$gitlabProjectsArgs<ExtArgs>
    _count?: boolean | IntegrationSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationSettings"]>

  export type IntegrationSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    userId?: boolean
    organizationId?: boolean
    accessTokenEnc?: boolean
    refreshTokenEnc?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["integrationSettings"]>

  export type IntegrationSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    userId?: boolean
    organizationId?: boolean
    accessTokenEnc?: boolean
    refreshTokenEnc?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["integrationSettings"]>

  export type IntegrationSettingsSelectScalar = {
    id?: boolean
    provider?: boolean
    userId?: boolean
    organizationId?: boolean
    accessTokenEnc?: boolean
    refreshTokenEnc?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "userId" | "organizationId" | "accessTokenEnc" | "refreshTokenEnc" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["integrationSettings"]>
  export type IntegrationSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
    gitlabGroups?: boolean | IntegrationSettings$gitlabGroupsArgs<ExtArgs>
    gitlabProjects?: boolean | IntegrationSettings$gitlabProjectsArgs<ExtArgs>
    _count?: boolean | IntegrationSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntegrationSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
  }
  export type IntegrationSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IntegrationSettings$userArgs<ExtArgs>
    organization?: boolean | IntegrationSettings$organizationArgs<ExtArgs>
  }

  export type $IntegrationSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      gitlabGroups: Prisma.$GitlabGroupPayload<ExtArgs>[]
      gitlabProjects: Prisma.$GitlabProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.IntegrationProvider
      userId: string | null
      organizationId: string | null
      accessTokenEnc: string | null
      refreshTokenEnc: string | null
      data: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integrationSettings"]>
    composites: {}
  }

  type IntegrationSettingsGetPayload<S extends boolean | null | undefined | IntegrationSettingsDefaultArgs> = $Result.GetResult<Prisma.$IntegrationSettingsPayload, S>

  type IntegrationSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationSettingsCountAggregateInputType | true
    }

  export interface IntegrationSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationSettings'], meta: { name: 'IntegrationSettings' } }
    /**
     * Find zero or one IntegrationSettings that matches the filter.
     * @param {IntegrationSettingsFindUniqueArgs} args - Arguments to find a IntegrationSettings
     * @example
     * // Get one IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationSettingsFindUniqueArgs>(args: SelectSubset<T, IntegrationSettingsFindUniqueArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationSettingsFindUniqueOrThrowArgs} args - Arguments to find a IntegrationSettings
     * @example
     * // Get one IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsFindFirstArgs} args - Arguments to find a IntegrationSettings
     * @example
     * // Get one IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationSettingsFindFirstArgs>(args?: SelectSubset<T, IntegrationSettingsFindFirstArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsFindFirstOrThrowArgs} args - Arguments to find a IntegrationSettings
     * @example
     * // Get one IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findMany()
     * 
     * // Get first 10 IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationSettingsWithIdOnly = await prisma.integrationSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationSettingsFindManyArgs>(args?: SelectSubset<T, IntegrationSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationSettings.
     * @param {IntegrationSettingsCreateArgs} args - Arguments to create a IntegrationSettings.
     * @example
     * // Create one IntegrationSettings
     * const IntegrationSettings = await prisma.integrationSettings.create({
     *   data: {
     *     // ... data to create a IntegrationSettings
     *   }
     * })
     * 
     */
    create<T extends IntegrationSettingsCreateArgs>(args: SelectSubset<T, IntegrationSettingsCreateArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationSettings.
     * @param {IntegrationSettingsCreateManyArgs} args - Arguments to create many IntegrationSettings.
     * @example
     * // Create many IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationSettingsCreateManyArgs>(args?: SelectSubset<T, IntegrationSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationSettings and returns the data saved in the database.
     * @param {IntegrationSettingsCreateManyAndReturnArgs} args - Arguments to create many IntegrationSettings.
     * @example
     * // Create many IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationSettings and only return the `id`
     * const integrationSettingsWithIdOnly = await prisma.integrationSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationSettings.
     * @param {IntegrationSettingsDeleteArgs} args - Arguments to delete one IntegrationSettings.
     * @example
     * // Delete one IntegrationSettings
     * const IntegrationSettings = await prisma.integrationSettings.delete({
     *   where: {
     *     // ... filter to delete one IntegrationSettings
     *   }
     * })
     * 
     */
    delete<T extends IntegrationSettingsDeleteArgs>(args: SelectSubset<T, IntegrationSettingsDeleteArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationSettings.
     * @param {IntegrationSettingsUpdateArgs} args - Arguments to update one IntegrationSettings.
     * @example
     * // Update one IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationSettingsUpdateArgs>(args: SelectSubset<T, IntegrationSettingsUpdateArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationSettings.
     * @param {IntegrationSettingsDeleteManyArgs} args - Arguments to filter IntegrationSettings to delete.
     * @example
     * // Delete a few IntegrationSettings
     * const { count } = await prisma.integrationSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationSettingsDeleteManyArgs>(args?: SelectSubset<T, IntegrationSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationSettingsUpdateManyArgs>(args: SelectSubset<T, IntegrationSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationSettings and returns the data updated in the database.
     * @param {IntegrationSettingsUpdateManyAndReturnArgs} args - Arguments to update many IntegrationSettings.
     * @example
     * // Update many IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationSettings and only return the `id`
     * const integrationSettingsWithIdOnly = await prisma.integrationSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationSettings.
     * @param {IntegrationSettingsUpsertArgs} args - Arguments to update or create a IntegrationSettings.
     * @example
     * // Update or create a IntegrationSettings
     * const integrationSettings = await prisma.integrationSettings.upsert({
     *   create: {
     *     // ... data to create a IntegrationSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationSettings we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationSettingsUpsertArgs>(args: SelectSubset<T, IntegrationSettingsUpsertArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsCountArgs} args - Arguments to filter IntegrationSettings to count.
     * @example
     * // Count the number of IntegrationSettings
     * const count = await prisma.integrationSettings.count({
     *   where: {
     *     // ... the filter for the IntegrationSettings we want to count
     *   }
     * })
    **/
    count<T extends IntegrationSettingsCountArgs>(
      args?: Subset<T, IntegrationSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationSettingsAggregateArgs>(args: Subset<T, IntegrationSettingsAggregateArgs>): Prisma.PrismaPromise<GetIntegrationSettingsAggregateType<T>>

    /**
     * Group by IntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationSettingsGroupByArgs} args - Group by arguments.
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
      T extends IntegrationSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationSettingsGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, IntegrationSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationSettings model
   */
  readonly fields: IntegrationSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends IntegrationSettings$userArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettings$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends IntegrationSettings$organizationArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettings$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gitlabGroups<T extends IntegrationSettings$gitlabGroupsArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettings$gitlabGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gitlabProjects<T extends IntegrationSettings$gitlabProjectsArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettings$gitlabProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntegrationSettings model
   */
  interface IntegrationSettingsFieldRefs {
    readonly id: FieldRef<"IntegrationSettings", 'String'>
    readonly provider: FieldRef<"IntegrationSettings", 'IntegrationProvider'>
    readonly userId: FieldRef<"IntegrationSettings", 'String'>
    readonly organizationId: FieldRef<"IntegrationSettings", 'String'>
    readonly accessTokenEnc: FieldRef<"IntegrationSettings", 'String'>
    readonly refreshTokenEnc: FieldRef<"IntegrationSettings", 'String'>
    readonly data: FieldRef<"IntegrationSettings", 'Json'>
    readonly createdAt: FieldRef<"IntegrationSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"IntegrationSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationSettings findUnique
   */
  export type IntegrationSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationSettings to fetch.
     */
    where: IntegrationSettingsWhereUniqueInput
  }

  /**
   * IntegrationSettings findUniqueOrThrow
   */
  export type IntegrationSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationSettings to fetch.
     */
    where: IntegrationSettingsWhereUniqueInput
  }

  /**
   * IntegrationSettings findFirst
   */
  export type IntegrationSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationSettings to fetch.
     */
    where?: IntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationSettings to fetch.
     */
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationSettings.
     */
    cursor?: IntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationSettings.
     */
    distinct?: IntegrationSettingsScalarFieldEnum | IntegrationSettingsScalarFieldEnum[]
  }

  /**
   * IntegrationSettings findFirstOrThrow
   */
  export type IntegrationSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationSettings to fetch.
     */
    where?: IntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationSettings to fetch.
     */
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationSettings.
     */
    cursor?: IntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationSettings.
     */
    distinct?: IntegrationSettingsScalarFieldEnum | IntegrationSettingsScalarFieldEnum[]
  }

  /**
   * IntegrationSettings findMany
   */
  export type IntegrationSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationSettings to fetch.
     */
    where?: IntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationSettings to fetch.
     */
    orderBy?: IntegrationSettingsOrderByWithRelationInput | IntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationSettings.
     */
    cursor?: IntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationSettings.
     */
    skip?: number
    distinct?: IntegrationSettingsScalarFieldEnum | IntegrationSettingsScalarFieldEnum[]
  }

  /**
   * IntegrationSettings create
   */
  export type IntegrationSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegrationSettings.
     */
    data: XOR<IntegrationSettingsCreateInput, IntegrationSettingsUncheckedCreateInput>
  }

  /**
   * IntegrationSettings createMany
   */
  export type IntegrationSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationSettings.
     */
    data: IntegrationSettingsCreateManyInput | IntegrationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationSettings createManyAndReturn
   */
  export type IntegrationSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationSettings.
     */
    data: IntegrationSettingsCreateManyInput | IntegrationSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationSettings update
   */
  export type IntegrationSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegrationSettings.
     */
    data: XOR<IntegrationSettingsUpdateInput, IntegrationSettingsUncheckedUpdateInput>
    /**
     * Choose, which IntegrationSettings to update.
     */
    where: IntegrationSettingsWhereUniqueInput
  }

  /**
   * IntegrationSettings updateMany
   */
  export type IntegrationSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationSettings.
     */
    data: XOR<IntegrationSettingsUpdateManyMutationInput, IntegrationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationSettings to update
     */
    where?: IntegrationSettingsWhereInput
    /**
     * Limit how many IntegrationSettings to update.
     */
    limit?: number
  }

  /**
   * IntegrationSettings updateManyAndReturn
   */
  export type IntegrationSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationSettings.
     */
    data: XOR<IntegrationSettingsUpdateManyMutationInput, IntegrationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationSettings to update
     */
    where?: IntegrationSettingsWhereInput
    /**
     * Limit how many IntegrationSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationSettings upsert
   */
  export type IntegrationSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegrationSettings to update in case it exists.
     */
    where: IntegrationSettingsWhereUniqueInput
    /**
     * In case the IntegrationSettings found by the `where` argument doesn't exist, create a new IntegrationSettings with this data.
     */
    create: XOR<IntegrationSettingsCreateInput, IntegrationSettingsUncheckedCreateInput>
    /**
     * In case the IntegrationSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationSettingsUpdateInput, IntegrationSettingsUncheckedUpdateInput>
  }

  /**
   * IntegrationSettings delete
   */
  export type IntegrationSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
    /**
     * Filter which IntegrationSettings to delete.
     */
    where: IntegrationSettingsWhereUniqueInput
  }

  /**
   * IntegrationSettings deleteMany
   */
  export type IntegrationSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationSettings to delete
     */
    where?: IntegrationSettingsWhereInput
    /**
     * Limit how many IntegrationSettings to delete.
     */
    limit?: number
  }

  /**
   * IntegrationSettings.user
   */
  export type IntegrationSettings$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * IntegrationSettings.organization
   */
  export type IntegrationSettings$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * IntegrationSettings.gitlabGroups
   */
  export type IntegrationSettings$gitlabGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    where?: GitlabGroupWhereInput
    orderBy?: GitlabGroupOrderByWithRelationInput | GitlabGroupOrderByWithRelationInput[]
    cursor?: GitlabGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitlabGroupScalarFieldEnum | GitlabGroupScalarFieldEnum[]
  }

  /**
   * IntegrationSettings.gitlabProjects
   */
  export type IntegrationSettings$gitlabProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    where?: GitlabProjectWhereInput
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    cursor?: GitlabProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitlabProjectScalarFieldEnum | GitlabProjectScalarFieldEnum[]
  }

  /**
   * IntegrationSettings without action
   */
  export type IntegrationSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationSettings
     */
    select?: IntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationSettings
     */
    omit?: IntegrationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationSettingsInclude<ExtArgs> | null
  }


  /**
   * Model GitlabGroup
   */

  export type AggregateGitlabGroup = {
    _count: GitlabGroupCountAggregateOutputType | null
    _avg: GitlabGroupAvgAggregateOutputType | null
    _sum: GitlabGroupSumAggregateOutputType | null
    _min: GitlabGroupMinAggregateOutputType | null
    _max: GitlabGroupMaxAggregateOutputType | null
  }

  export type GitlabGroupAvgAggregateOutputType = {
    gitlabGroupId: number | null
    parentGitlabGroupId: number | null
  }

  export type GitlabGroupSumAggregateOutputType = {
    gitlabGroupId: number | null
    parentGitlabGroupId: number | null
  }

  export type GitlabGroupMinAggregateOutputType = {
    id: string | null
    integrationId: string | null
    gitlabGroupId: number | null
    parentGitlabGroupId: number | null
    name: string | null
    fullPath: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitlabGroupMaxAggregateOutputType = {
    id: string | null
    integrationId: string | null
    gitlabGroupId: number | null
    parentGitlabGroupId: number | null
    name: string | null
    fullPath: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitlabGroupCountAggregateOutputType = {
    id: number
    integrationId: number
    gitlabGroupId: number
    parentGitlabGroupId: number
    name: number
    fullPath: number
    lastSyncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GitlabGroupAvgAggregateInputType = {
    gitlabGroupId?: true
    parentGitlabGroupId?: true
  }

  export type GitlabGroupSumAggregateInputType = {
    gitlabGroupId?: true
    parentGitlabGroupId?: true
  }

  export type GitlabGroupMinAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabGroupId?: true
    parentGitlabGroupId?: true
    name?: true
    fullPath?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitlabGroupMaxAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabGroupId?: true
    parentGitlabGroupId?: true
    name?: true
    fullPath?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitlabGroupCountAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabGroupId?: true
    parentGitlabGroupId?: true
    name?: true
    fullPath?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GitlabGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitlabGroup to aggregate.
     */
    where?: GitlabGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabGroups to fetch.
     */
    orderBy?: GitlabGroupOrderByWithRelationInput | GitlabGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitlabGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitlabGroups
    **/
    _count?: true | GitlabGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GitlabGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GitlabGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitlabGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitlabGroupMaxAggregateInputType
  }

  export type GetGitlabGroupAggregateType<T extends GitlabGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGitlabGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitlabGroup[P]>
      : GetScalarType<T[P], AggregateGitlabGroup[P]>
  }




  export type GitlabGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitlabGroupWhereInput
    orderBy?: GitlabGroupOrderByWithAggregationInput | GitlabGroupOrderByWithAggregationInput[]
    by: GitlabGroupScalarFieldEnum[] | GitlabGroupScalarFieldEnum
    having?: GitlabGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitlabGroupCountAggregateInputType | true
    _avg?: GitlabGroupAvgAggregateInputType
    _sum?: GitlabGroupSumAggregateInputType
    _min?: GitlabGroupMinAggregateInputType
    _max?: GitlabGroupMaxAggregateInputType
  }

  export type GitlabGroupGroupByOutputType = {
    id: string
    integrationId: string
    gitlabGroupId: number
    parentGitlabGroupId: number | null
    name: string
    fullPath: string | null
    lastSyncedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: GitlabGroupCountAggregateOutputType | null
    _avg: GitlabGroupAvgAggregateOutputType | null
    _sum: GitlabGroupSumAggregateOutputType | null
    _min: GitlabGroupMinAggregateOutputType | null
    _max: GitlabGroupMaxAggregateOutputType | null
  }

  type GetGitlabGroupGroupByPayload<T extends GitlabGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitlabGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitlabGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitlabGroupGroupByOutputType[P]>
            : GetScalarType<T[P], GitlabGroupGroupByOutputType[P]>
        }
      >
    >


  export type GitlabGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabGroupId?: boolean
    parentGitlabGroupId?: boolean
    name?: boolean
    fullPath?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    projects?: boolean | GitlabGroup$projectsArgs<ExtArgs>
    _count?: boolean | GitlabGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabGroup"]>

  export type GitlabGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabGroupId?: boolean
    parentGitlabGroupId?: boolean
    name?: boolean
    fullPath?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabGroup"]>

  export type GitlabGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabGroupId?: boolean
    parentGitlabGroupId?: boolean
    name?: boolean
    fullPath?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabGroup"]>

  export type GitlabGroupSelectScalar = {
    id?: boolean
    integrationId?: boolean
    gitlabGroupId?: boolean
    parentGitlabGroupId?: boolean
    name?: boolean
    fullPath?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GitlabGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "integrationId" | "gitlabGroupId" | "parentGitlabGroupId" | "name" | "fullPath" | "lastSyncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["gitlabGroup"]>
  export type GitlabGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    projects?: boolean | GitlabGroup$projectsArgs<ExtArgs>
    _count?: boolean | GitlabGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GitlabGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
  }
  export type GitlabGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
  }

  export type $GitlabGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitlabGroup"
    objects: {
      integration: Prisma.$IntegrationSettingsPayload<ExtArgs>
      projects: Prisma.$GitlabProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      integrationId: string
      gitlabGroupId: number
      parentGitlabGroupId: number | null
      name: string
      fullPath: string | null
      lastSyncedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gitlabGroup"]>
    composites: {}
  }

  type GitlabGroupGetPayload<S extends boolean | null | undefined | GitlabGroupDefaultArgs> = $Result.GetResult<Prisma.$GitlabGroupPayload, S>

  type GitlabGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitlabGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitlabGroupCountAggregateInputType | true
    }

  export interface GitlabGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitlabGroup'], meta: { name: 'GitlabGroup' } }
    /**
     * Find zero or one GitlabGroup that matches the filter.
     * @param {GitlabGroupFindUniqueArgs} args - Arguments to find a GitlabGroup
     * @example
     * // Get one GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitlabGroupFindUniqueArgs>(args: SelectSubset<T, GitlabGroupFindUniqueArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitlabGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitlabGroupFindUniqueOrThrowArgs} args - Arguments to find a GitlabGroup
     * @example
     * // Get one GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitlabGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GitlabGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitlabGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupFindFirstArgs} args - Arguments to find a GitlabGroup
     * @example
     * // Get one GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitlabGroupFindFirstArgs>(args?: SelectSubset<T, GitlabGroupFindFirstArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitlabGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupFindFirstOrThrowArgs} args - Arguments to find a GitlabGroup
     * @example
     * // Get one GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitlabGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GitlabGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitlabGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitlabGroups
     * const gitlabGroups = await prisma.gitlabGroup.findMany()
     * 
     * // Get first 10 GitlabGroups
     * const gitlabGroups = await prisma.gitlabGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitlabGroupWithIdOnly = await prisma.gitlabGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitlabGroupFindManyArgs>(args?: SelectSubset<T, GitlabGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitlabGroup.
     * @param {GitlabGroupCreateArgs} args - Arguments to create a GitlabGroup.
     * @example
     * // Create one GitlabGroup
     * const GitlabGroup = await prisma.gitlabGroup.create({
     *   data: {
     *     // ... data to create a GitlabGroup
     *   }
     * })
     * 
     */
    create<T extends GitlabGroupCreateArgs>(args: SelectSubset<T, GitlabGroupCreateArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitlabGroups.
     * @param {GitlabGroupCreateManyArgs} args - Arguments to create many GitlabGroups.
     * @example
     * // Create many GitlabGroups
     * const gitlabGroup = await prisma.gitlabGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitlabGroupCreateManyArgs>(args?: SelectSubset<T, GitlabGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitlabGroups and returns the data saved in the database.
     * @param {GitlabGroupCreateManyAndReturnArgs} args - Arguments to create many GitlabGroups.
     * @example
     * // Create many GitlabGroups
     * const gitlabGroup = await prisma.gitlabGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitlabGroups and only return the `id`
     * const gitlabGroupWithIdOnly = await prisma.gitlabGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitlabGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GitlabGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitlabGroup.
     * @param {GitlabGroupDeleteArgs} args - Arguments to delete one GitlabGroup.
     * @example
     * // Delete one GitlabGroup
     * const GitlabGroup = await prisma.gitlabGroup.delete({
     *   where: {
     *     // ... filter to delete one GitlabGroup
     *   }
     * })
     * 
     */
    delete<T extends GitlabGroupDeleteArgs>(args: SelectSubset<T, GitlabGroupDeleteArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitlabGroup.
     * @param {GitlabGroupUpdateArgs} args - Arguments to update one GitlabGroup.
     * @example
     * // Update one GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitlabGroupUpdateArgs>(args: SelectSubset<T, GitlabGroupUpdateArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitlabGroups.
     * @param {GitlabGroupDeleteManyArgs} args - Arguments to filter GitlabGroups to delete.
     * @example
     * // Delete a few GitlabGroups
     * const { count } = await prisma.gitlabGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitlabGroupDeleteManyArgs>(args?: SelectSubset<T, GitlabGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitlabGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitlabGroups
     * const gitlabGroup = await prisma.gitlabGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitlabGroupUpdateManyArgs>(args: SelectSubset<T, GitlabGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitlabGroups and returns the data updated in the database.
     * @param {GitlabGroupUpdateManyAndReturnArgs} args - Arguments to update many GitlabGroups.
     * @example
     * // Update many GitlabGroups
     * const gitlabGroup = await prisma.gitlabGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitlabGroups and only return the `id`
     * const gitlabGroupWithIdOnly = await prisma.gitlabGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitlabGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GitlabGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitlabGroup.
     * @param {GitlabGroupUpsertArgs} args - Arguments to update or create a GitlabGroup.
     * @example
     * // Update or create a GitlabGroup
     * const gitlabGroup = await prisma.gitlabGroup.upsert({
     *   create: {
     *     // ... data to create a GitlabGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitlabGroup we want to update
     *   }
     * })
     */
    upsert<T extends GitlabGroupUpsertArgs>(args: SelectSubset<T, GitlabGroupUpsertArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitlabGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupCountArgs} args - Arguments to filter GitlabGroups to count.
     * @example
     * // Count the number of GitlabGroups
     * const count = await prisma.gitlabGroup.count({
     *   where: {
     *     // ... the filter for the GitlabGroups we want to count
     *   }
     * })
    **/
    count<T extends GitlabGroupCountArgs>(
      args?: Subset<T, GitlabGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitlabGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitlabGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GitlabGroupAggregateArgs>(args: Subset<T, GitlabGroupAggregateArgs>): Prisma.PrismaPromise<GetGitlabGroupAggregateType<T>>

    /**
     * Group by GitlabGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabGroupGroupByArgs} args - Group by arguments.
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
      T extends GitlabGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitlabGroupGroupByArgs['orderBy'] }
        : { orderBy?: GitlabGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GitlabGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitlabGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitlabGroup model
   */
  readonly fields: GitlabGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitlabGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitlabGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integration<T extends IntegrationSettingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettingsDefaultArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends GitlabGroup$projectsArgs<ExtArgs> = {}>(args?: Subset<T, GitlabGroup$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitlabGroup model
   */
  interface GitlabGroupFieldRefs {
    readonly id: FieldRef<"GitlabGroup", 'String'>
    readonly integrationId: FieldRef<"GitlabGroup", 'String'>
    readonly gitlabGroupId: FieldRef<"GitlabGroup", 'Int'>
    readonly parentGitlabGroupId: FieldRef<"GitlabGroup", 'Int'>
    readonly name: FieldRef<"GitlabGroup", 'String'>
    readonly fullPath: FieldRef<"GitlabGroup", 'String'>
    readonly lastSyncedAt: FieldRef<"GitlabGroup", 'DateTime'>
    readonly createdAt: FieldRef<"GitlabGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"GitlabGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GitlabGroup findUnique
   */
  export type GitlabGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitlabGroup to fetch.
     */
    where: GitlabGroupWhereUniqueInput
  }

  /**
   * GitlabGroup findUniqueOrThrow
   */
  export type GitlabGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitlabGroup to fetch.
     */
    where: GitlabGroupWhereUniqueInput
  }

  /**
   * GitlabGroup findFirst
   */
  export type GitlabGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitlabGroup to fetch.
     */
    where?: GitlabGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabGroups to fetch.
     */
    orderBy?: GitlabGroupOrderByWithRelationInput | GitlabGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitlabGroups.
     */
    cursor?: GitlabGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitlabGroups.
     */
    distinct?: GitlabGroupScalarFieldEnum | GitlabGroupScalarFieldEnum[]
  }

  /**
   * GitlabGroup findFirstOrThrow
   */
  export type GitlabGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitlabGroup to fetch.
     */
    where?: GitlabGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabGroups to fetch.
     */
    orderBy?: GitlabGroupOrderByWithRelationInput | GitlabGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitlabGroups.
     */
    cursor?: GitlabGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitlabGroups.
     */
    distinct?: GitlabGroupScalarFieldEnum | GitlabGroupScalarFieldEnum[]
  }

  /**
   * GitlabGroup findMany
   */
  export type GitlabGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitlabGroups to fetch.
     */
    where?: GitlabGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabGroups to fetch.
     */
    orderBy?: GitlabGroupOrderByWithRelationInput | GitlabGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitlabGroups.
     */
    cursor?: GitlabGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabGroups.
     */
    skip?: number
    distinct?: GitlabGroupScalarFieldEnum | GitlabGroupScalarFieldEnum[]
  }

  /**
   * GitlabGroup create
   */
  export type GitlabGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a GitlabGroup.
     */
    data: XOR<GitlabGroupCreateInput, GitlabGroupUncheckedCreateInput>
  }

  /**
   * GitlabGroup createMany
   */
  export type GitlabGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitlabGroups.
     */
    data: GitlabGroupCreateManyInput | GitlabGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitlabGroup createManyAndReturn
   */
  export type GitlabGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * The data used to create many GitlabGroups.
     */
    data: GitlabGroupCreateManyInput | GitlabGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitlabGroup update
   */
  export type GitlabGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a GitlabGroup.
     */
    data: XOR<GitlabGroupUpdateInput, GitlabGroupUncheckedUpdateInput>
    /**
     * Choose, which GitlabGroup to update.
     */
    where: GitlabGroupWhereUniqueInput
  }

  /**
   * GitlabGroup updateMany
   */
  export type GitlabGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitlabGroups.
     */
    data: XOR<GitlabGroupUpdateManyMutationInput, GitlabGroupUncheckedUpdateManyInput>
    /**
     * Filter which GitlabGroups to update
     */
    where?: GitlabGroupWhereInput
    /**
     * Limit how many GitlabGroups to update.
     */
    limit?: number
  }

  /**
   * GitlabGroup updateManyAndReturn
   */
  export type GitlabGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * The data used to update GitlabGroups.
     */
    data: XOR<GitlabGroupUpdateManyMutationInput, GitlabGroupUncheckedUpdateManyInput>
    /**
     * Filter which GitlabGroups to update
     */
    where?: GitlabGroupWhereInput
    /**
     * Limit how many GitlabGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitlabGroup upsert
   */
  export type GitlabGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the GitlabGroup to update in case it exists.
     */
    where: GitlabGroupWhereUniqueInput
    /**
     * In case the GitlabGroup found by the `where` argument doesn't exist, create a new GitlabGroup with this data.
     */
    create: XOR<GitlabGroupCreateInput, GitlabGroupUncheckedCreateInput>
    /**
     * In case the GitlabGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitlabGroupUpdateInput, GitlabGroupUncheckedUpdateInput>
  }

  /**
   * GitlabGroup delete
   */
  export type GitlabGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    /**
     * Filter which GitlabGroup to delete.
     */
    where: GitlabGroupWhereUniqueInput
  }

  /**
   * GitlabGroup deleteMany
   */
  export type GitlabGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitlabGroups to delete
     */
    where?: GitlabGroupWhereInput
    /**
     * Limit how many GitlabGroups to delete.
     */
    limit?: number
  }

  /**
   * GitlabGroup.projects
   */
  export type GitlabGroup$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    where?: GitlabProjectWhereInput
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    cursor?: GitlabProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitlabProjectScalarFieldEnum | GitlabProjectScalarFieldEnum[]
  }

  /**
   * GitlabGroup without action
   */
  export type GitlabGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
  }


  /**
   * Model GitlabProject
   */

  export type AggregateGitlabProject = {
    _count: GitlabProjectCountAggregateOutputType | null
    _avg: GitlabProjectAvgAggregateOutputType | null
    _sum: GitlabProjectSumAggregateOutputType | null
    _min: GitlabProjectMinAggregateOutputType | null
    _max: GitlabProjectMaxAggregateOutputType | null
  }

  export type GitlabProjectAvgAggregateOutputType = {
    gitlabProjectId: number | null
    groupGitlabId: number | null
  }

  export type GitlabProjectSumAggregateOutputType = {
    gitlabProjectId: number | null
    groupGitlabId: number | null
  }

  export type GitlabProjectMinAggregateOutputType = {
    id: string | null
    integrationId: string | null
    gitlabProjectId: number | null
    groupGitlabId: number | null
    name: string | null
    pathWithNamespace: string | null
    defaultBranch: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitlabProjectMaxAggregateOutputType = {
    id: string | null
    integrationId: string | null
    gitlabProjectId: number | null
    groupGitlabId: number | null
    name: string | null
    pathWithNamespace: string | null
    defaultBranch: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitlabProjectCountAggregateOutputType = {
    id: number
    integrationId: number
    gitlabProjectId: number
    groupGitlabId: number
    name: number
    pathWithNamespace: number
    defaultBranch: number
    lastSyncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GitlabProjectAvgAggregateInputType = {
    gitlabProjectId?: true
    groupGitlabId?: true
  }

  export type GitlabProjectSumAggregateInputType = {
    gitlabProjectId?: true
    groupGitlabId?: true
  }

  export type GitlabProjectMinAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabProjectId?: true
    groupGitlabId?: true
    name?: true
    pathWithNamespace?: true
    defaultBranch?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitlabProjectMaxAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabProjectId?: true
    groupGitlabId?: true
    name?: true
    pathWithNamespace?: true
    defaultBranch?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitlabProjectCountAggregateInputType = {
    id?: true
    integrationId?: true
    gitlabProjectId?: true
    groupGitlabId?: true
    name?: true
    pathWithNamespace?: true
    defaultBranch?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GitlabProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitlabProject to aggregate.
     */
    where?: GitlabProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabProjects to fetch.
     */
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitlabProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitlabProjects
    **/
    _count?: true | GitlabProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GitlabProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GitlabProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitlabProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitlabProjectMaxAggregateInputType
  }

  export type GetGitlabProjectAggregateType<T extends GitlabProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateGitlabProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitlabProject[P]>
      : GetScalarType<T[P], AggregateGitlabProject[P]>
  }




  export type GitlabProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitlabProjectWhereInput
    orderBy?: GitlabProjectOrderByWithAggregationInput | GitlabProjectOrderByWithAggregationInput[]
    by: GitlabProjectScalarFieldEnum[] | GitlabProjectScalarFieldEnum
    having?: GitlabProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitlabProjectCountAggregateInputType | true
    _avg?: GitlabProjectAvgAggregateInputType
    _sum?: GitlabProjectSumAggregateInputType
    _min?: GitlabProjectMinAggregateInputType
    _max?: GitlabProjectMaxAggregateInputType
  }

  export type GitlabProjectGroupByOutputType = {
    id: string
    integrationId: string
    gitlabProjectId: number
    groupGitlabId: number | null
    name: string
    pathWithNamespace: string
    defaultBranch: string | null
    lastSyncedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: GitlabProjectCountAggregateOutputType | null
    _avg: GitlabProjectAvgAggregateOutputType | null
    _sum: GitlabProjectSumAggregateOutputType | null
    _min: GitlabProjectMinAggregateOutputType | null
    _max: GitlabProjectMaxAggregateOutputType | null
  }

  type GetGitlabProjectGroupByPayload<T extends GitlabProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitlabProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitlabProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitlabProjectGroupByOutputType[P]>
            : GetScalarType<T[P], GitlabProjectGroupByOutputType[P]>
        }
      >
    >


  export type GitlabProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabProjectId?: boolean
    groupGitlabId?: boolean
    name?: boolean
    pathWithNamespace?: boolean
    defaultBranch?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabProject"]>

  export type GitlabProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabProjectId?: boolean
    groupGitlabId?: boolean
    name?: boolean
    pathWithNamespace?: boolean
    defaultBranch?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabProject"]>

  export type GitlabProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    gitlabProjectId?: boolean
    groupGitlabId?: boolean
    name?: boolean
    pathWithNamespace?: boolean
    defaultBranch?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }, ExtArgs["result"]["gitlabProject"]>

  export type GitlabProjectSelectScalar = {
    id?: boolean
    integrationId?: boolean
    gitlabProjectId?: boolean
    groupGitlabId?: boolean
    name?: boolean
    pathWithNamespace?: boolean
    defaultBranch?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GitlabProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "integrationId" | "gitlabProjectId" | "groupGitlabId" | "name" | "pathWithNamespace" | "defaultBranch" | "lastSyncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["gitlabProject"]>
  export type GitlabProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }
  export type GitlabProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }
  export type GitlabProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationSettingsDefaultArgs<ExtArgs>
    group?: boolean | GitlabProject$groupArgs<ExtArgs>
  }

  export type $GitlabProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitlabProject"
    objects: {
      integration: Prisma.$IntegrationSettingsPayload<ExtArgs>
      group: Prisma.$GitlabGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      integrationId: string
      gitlabProjectId: number
      groupGitlabId: number | null
      name: string
      pathWithNamespace: string
      defaultBranch: string | null
      lastSyncedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gitlabProject"]>
    composites: {}
  }

  type GitlabProjectGetPayload<S extends boolean | null | undefined | GitlabProjectDefaultArgs> = $Result.GetResult<Prisma.$GitlabProjectPayload, S>

  type GitlabProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitlabProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitlabProjectCountAggregateInputType | true
    }

  export interface GitlabProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitlabProject'], meta: { name: 'GitlabProject' } }
    /**
     * Find zero or one GitlabProject that matches the filter.
     * @param {GitlabProjectFindUniqueArgs} args - Arguments to find a GitlabProject
     * @example
     * // Get one GitlabProject
     * const gitlabProject = await prisma.gitlabProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitlabProjectFindUniqueArgs>(args: SelectSubset<T, GitlabProjectFindUniqueArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitlabProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitlabProjectFindUniqueOrThrowArgs} args - Arguments to find a GitlabProject
     * @example
     * // Get one GitlabProject
     * const gitlabProject = await prisma.gitlabProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitlabProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, GitlabProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitlabProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectFindFirstArgs} args - Arguments to find a GitlabProject
     * @example
     * // Get one GitlabProject
     * const gitlabProject = await prisma.gitlabProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitlabProjectFindFirstArgs>(args?: SelectSubset<T, GitlabProjectFindFirstArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitlabProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectFindFirstOrThrowArgs} args - Arguments to find a GitlabProject
     * @example
     * // Get one GitlabProject
     * const gitlabProject = await prisma.gitlabProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitlabProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, GitlabProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitlabProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitlabProjects
     * const gitlabProjects = await prisma.gitlabProject.findMany()
     * 
     * // Get first 10 GitlabProjects
     * const gitlabProjects = await prisma.gitlabProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitlabProjectWithIdOnly = await prisma.gitlabProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitlabProjectFindManyArgs>(args?: SelectSubset<T, GitlabProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitlabProject.
     * @param {GitlabProjectCreateArgs} args - Arguments to create a GitlabProject.
     * @example
     * // Create one GitlabProject
     * const GitlabProject = await prisma.gitlabProject.create({
     *   data: {
     *     // ... data to create a GitlabProject
     *   }
     * })
     * 
     */
    create<T extends GitlabProjectCreateArgs>(args: SelectSubset<T, GitlabProjectCreateArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitlabProjects.
     * @param {GitlabProjectCreateManyArgs} args - Arguments to create many GitlabProjects.
     * @example
     * // Create many GitlabProjects
     * const gitlabProject = await prisma.gitlabProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitlabProjectCreateManyArgs>(args?: SelectSubset<T, GitlabProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitlabProjects and returns the data saved in the database.
     * @param {GitlabProjectCreateManyAndReturnArgs} args - Arguments to create many GitlabProjects.
     * @example
     * // Create many GitlabProjects
     * const gitlabProject = await prisma.gitlabProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitlabProjects and only return the `id`
     * const gitlabProjectWithIdOnly = await prisma.gitlabProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitlabProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, GitlabProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitlabProject.
     * @param {GitlabProjectDeleteArgs} args - Arguments to delete one GitlabProject.
     * @example
     * // Delete one GitlabProject
     * const GitlabProject = await prisma.gitlabProject.delete({
     *   where: {
     *     // ... filter to delete one GitlabProject
     *   }
     * })
     * 
     */
    delete<T extends GitlabProjectDeleteArgs>(args: SelectSubset<T, GitlabProjectDeleteArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitlabProject.
     * @param {GitlabProjectUpdateArgs} args - Arguments to update one GitlabProject.
     * @example
     * // Update one GitlabProject
     * const gitlabProject = await prisma.gitlabProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitlabProjectUpdateArgs>(args: SelectSubset<T, GitlabProjectUpdateArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitlabProjects.
     * @param {GitlabProjectDeleteManyArgs} args - Arguments to filter GitlabProjects to delete.
     * @example
     * // Delete a few GitlabProjects
     * const { count } = await prisma.gitlabProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitlabProjectDeleteManyArgs>(args?: SelectSubset<T, GitlabProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitlabProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitlabProjects
     * const gitlabProject = await prisma.gitlabProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitlabProjectUpdateManyArgs>(args: SelectSubset<T, GitlabProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitlabProjects and returns the data updated in the database.
     * @param {GitlabProjectUpdateManyAndReturnArgs} args - Arguments to update many GitlabProjects.
     * @example
     * // Update many GitlabProjects
     * const gitlabProject = await prisma.gitlabProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitlabProjects and only return the `id`
     * const gitlabProjectWithIdOnly = await prisma.gitlabProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitlabProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, GitlabProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitlabProject.
     * @param {GitlabProjectUpsertArgs} args - Arguments to update or create a GitlabProject.
     * @example
     * // Update or create a GitlabProject
     * const gitlabProject = await prisma.gitlabProject.upsert({
     *   create: {
     *     // ... data to create a GitlabProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitlabProject we want to update
     *   }
     * })
     */
    upsert<T extends GitlabProjectUpsertArgs>(args: SelectSubset<T, GitlabProjectUpsertArgs<ExtArgs>>): Prisma__GitlabProjectClient<$Result.GetResult<Prisma.$GitlabProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitlabProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectCountArgs} args - Arguments to filter GitlabProjects to count.
     * @example
     * // Count the number of GitlabProjects
     * const count = await prisma.gitlabProject.count({
     *   where: {
     *     // ... the filter for the GitlabProjects we want to count
     *   }
     * })
    **/
    count<T extends GitlabProjectCountArgs>(
      args?: Subset<T, GitlabProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitlabProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitlabProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GitlabProjectAggregateArgs>(args: Subset<T, GitlabProjectAggregateArgs>): Prisma.PrismaPromise<GetGitlabProjectAggregateType<T>>

    /**
     * Group by GitlabProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitlabProjectGroupByArgs} args - Group by arguments.
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
      T extends GitlabProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitlabProjectGroupByArgs['orderBy'] }
        : { orderBy?: GitlabProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GitlabProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitlabProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitlabProject model
   */
  readonly fields: GitlabProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitlabProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitlabProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integration<T extends IntegrationSettingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationSettingsDefaultArgs<ExtArgs>>): Prisma__IntegrationSettingsClient<$Result.GetResult<Prisma.$IntegrationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GitlabProject$groupArgs<ExtArgs> = {}>(args?: Subset<T, GitlabProject$groupArgs<ExtArgs>>): Prisma__GitlabGroupClient<$Result.GetResult<Prisma.$GitlabGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitlabProject model
   */
  interface GitlabProjectFieldRefs {
    readonly id: FieldRef<"GitlabProject", 'String'>
    readonly integrationId: FieldRef<"GitlabProject", 'String'>
    readonly gitlabProjectId: FieldRef<"GitlabProject", 'Int'>
    readonly groupGitlabId: FieldRef<"GitlabProject", 'Int'>
    readonly name: FieldRef<"GitlabProject", 'String'>
    readonly pathWithNamespace: FieldRef<"GitlabProject", 'String'>
    readonly defaultBranch: FieldRef<"GitlabProject", 'String'>
    readonly lastSyncedAt: FieldRef<"GitlabProject", 'DateTime'>
    readonly createdAt: FieldRef<"GitlabProject", 'DateTime'>
    readonly updatedAt: FieldRef<"GitlabProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GitlabProject findUnique
   */
  export type GitlabProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitlabProject to fetch.
     */
    where: GitlabProjectWhereUniqueInput
  }

  /**
   * GitlabProject findUniqueOrThrow
   */
  export type GitlabProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitlabProject to fetch.
     */
    where: GitlabProjectWhereUniqueInput
  }

  /**
   * GitlabProject findFirst
   */
  export type GitlabProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitlabProject to fetch.
     */
    where?: GitlabProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabProjects to fetch.
     */
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitlabProjects.
     */
    cursor?: GitlabProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitlabProjects.
     */
    distinct?: GitlabProjectScalarFieldEnum | GitlabProjectScalarFieldEnum[]
  }

  /**
   * GitlabProject findFirstOrThrow
   */
  export type GitlabProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitlabProject to fetch.
     */
    where?: GitlabProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabProjects to fetch.
     */
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitlabProjects.
     */
    cursor?: GitlabProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitlabProjects.
     */
    distinct?: GitlabProjectScalarFieldEnum | GitlabProjectScalarFieldEnum[]
  }

  /**
   * GitlabProject findMany
   */
  export type GitlabProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitlabProjects to fetch.
     */
    where?: GitlabProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitlabProjects to fetch.
     */
    orderBy?: GitlabProjectOrderByWithRelationInput | GitlabProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitlabProjects.
     */
    cursor?: GitlabProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitlabProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitlabProjects.
     */
    skip?: number
    distinct?: GitlabProjectScalarFieldEnum | GitlabProjectScalarFieldEnum[]
  }

  /**
   * GitlabProject create
   */
  export type GitlabProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a GitlabProject.
     */
    data: XOR<GitlabProjectCreateInput, GitlabProjectUncheckedCreateInput>
  }

  /**
   * GitlabProject createMany
   */
  export type GitlabProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitlabProjects.
     */
    data: GitlabProjectCreateManyInput | GitlabProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitlabProject createManyAndReturn
   */
  export type GitlabProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * The data used to create many GitlabProjects.
     */
    data: GitlabProjectCreateManyInput | GitlabProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitlabProject update
   */
  export type GitlabProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a GitlabProject.
     */
    data: XOR<GitlabProjectUpdateInput, GitlabProjectUncheckedUpdateInput>
    /**
     * Choose, which GitlabProject to update.
     */
    where: GitlabProjectWhereUniqueInput
  }

  /**
   * GitlabProject updateMany
   */
  export type GitlabProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitlabProjects.
     */
    data: XOR<GitlabProjectUpdateManyMutationInput, GitlabProjectUncheckedUpdateManyInput>
    /**
     * Filter which GitlabProjects to update
     */
    where?: GitlabProjectWhereInput
    /**
     * Limit how many GitlabProjects to update.
     */
    limit?: number
  }

  /**
   * GitlabProject updateManyAndReturn
   */
  export type GitlabProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * The data used to update GitlabProjects.
     */
    data: XOR<GitlabProjectUpdateManyMutationInput, GitlabProjectUncheckedUpdateManyInput>
    /**
     * Filter which GitlabProjects to update
     */
    where?: GitlabProjectWhereInput
    /**
     * Limit how many GitlabProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitlabProject upsert
   */
  export type GitlabProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the GitlabProject to update in case it exists.
     */
    where: GitlabProjectWhereUniqueInput
    /**
     * In case the GitlabProject found by the `where` argument doesn't exist, create a new GitlabProject with this data.
     */
    create: XOR<GitlabProjectCreateInput, GitlabProjectUncheckedCreateInput>
    /**
     * In case the GitlabProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitlabProjectUpdateInput, GitlabProjectUncheckedUpdateInput>
  }

  /**
   * GitlabProject delete
   */
  export type GitlabProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
    /**
     * Filter which GitlabProject to delete.
     */
    where: GitlabProjectWhereUniqueInput
  }

  /**
   * GitlabProject deleteMany
   */
  export type GitlabProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitlabProjects to delete
     */
    where?: GitlabProjectWhereInput
    /**
     * Limit how many GitlabProjects to delete.
     */
    limit?: number
  }

  /**
   * GitlabProject.group
   */
  export type GitlabProject$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabGroup
     */
    select?: GitlabGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabGroup
     */
    omit?: GitlabGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabGroupInclude<ExtArgs> | null
    where?: GitlabGroupWhereInput
  }

  /**
   * GitlabProject without action
   */
  export type GitlabProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitlabProject
     */
    select?: GitlabProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitlabProject
     */
    omit?: GitlabProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitlabProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gitlabGroupId: 'gitlabGroupId',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gitlabProjectId: 'gitlabProjectId',
    githubRepoId: 'githubRepoId',
    defaultBranch: 'defaultBranch',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const ScanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    status: 'status',
    createdByUserId: 'createdByUserId',
    organizationId: 'organizationId',
    repositoryId: 'repositoryId',
    includeCrossRepo: 'includeCrossRepo',
    parameters: 'parameters',
    reportMarkdown: 'reportMarkdown'
  };

  export type ScanScalarFieldEnum = (typeof ScanScalarFieldEnum)[keyof typeof ScanScalarFieldEnum]


  export const ScanFindingScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    severity: 'severity',
    title: 'title',
    description: 'description',
    recommendation: 'recommendation',
    filePath: 'filePath',
    line: 'line',
    externalRefs: 'externalRefs',
    createdAt: 'createdAt'
  };

  export type ScanFindingScalarFieldEnum = (typeof ScanFindingScalarFieldEnum)[keyof typeof ScanFindingScalarFieldEnum]


  export const IntegrationSettingsScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    userId: 'userId',
    organizationId: 'organizationId',
    accessTokenEnc: 'accessTokenEnc',
    refreshTokenEnc: 'refreshTokenEnc',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationSettingsScalarFieldEnum = (typeof IntegrationSettingsScalarFieldEnum)[keyof typeof IntegrationSettingsScalarFieldEnum]


  export const GitlabGroupScalarFieldEnum: {
    id: 'id',
    integrationId: 'integrationId',
    gitlabGroupId: 'gitlabGroupId',
    parentGitlabGroupId: 'parentGitlabGroupId',
    name: 'name',
    fullPath: 'fullPath',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GitlabGroupScalarFieldEnum = (typeof GitlabGroupScalarFieldEnum)[keyof typeof GitlabGroupScalarFieldEnum]


  export const GitlabProjectScalarFieldEnum: {
    id: 'id',
    integrationId: 'integrationId',
    gitlabProjectId: 'gitlabProjectId',
    groupGitlabId: 'groupGitlabId',
    name: 'name',
    pathWithNamespace: 'pathWithNamespace',
    defaultBranch: 'defaultBranch',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GitlabProjectScalarFieldEnum = (typeof GitlabProjectScalarFieldEnum)[keyof typeof GitlabProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ScanStatus'
   */
  export type EnumScanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScanStatus'>
    


  /**
   * Reference to a field of type 'ScanStatus[]'
   */
  export type ListEnumScanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScanStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'IntegrationProvider'
   */
  export type EnumIntegrationProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationProvider'>
    


  /**
   * Reference to a field of type 'IntegrationProvider[]'
   */
  export type ListEnumIntegrationProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationProvider[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    scans?: ScanListRelationFilter
    integrations?: IntegrationSettingsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    scans?: ScanOrderByRelationAggregateInput
    integrations?: IntegrationSettingsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    scans?: ScanListRelationFilter
    integrations?: IntegrationSettingsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token" | "token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    gitlabGroupId?: IntNullableFilter<"Organization"> | number | null
    description?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    repositories?: RepositoryListRelationFilter
    scans?: ScanListRelationFilter
    integrations?: IntegrationSettingsListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabGroupId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repositories?: RepositoryOrderByRelationAggregateInput
    scans?: ScanOrderByRelationAggregateInput
    integrations?: IntegrationSettingsOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    gitlabGroupId?: IntNullableFilter<"Organization"> | number | null
    description?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    repositories?: RepositoryListRelationFilter
    scans?: ScanListRelationFilter
    integrations?: IntegrationSettingsListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabGroupId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    gitlabGroupId?: IntNullableWithAggregatesFilter<"Organization"> | number | null
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    gitlabProjectId?: IntNullableFilter<"Repository"> | number | null
    githubRepoId?: IntNullableFilter<"Repository"> | number | null
    defaultBranch?: StringNullableFilter<"Repository"> | string | null
    organizationId?: StringNullableFilter<"Repository"> | string | null
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    scans?: ScanListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabProjectId?: SortOrderInput | SortOrder
    githubRepoId?: SortOrderInput | SortOrder
    defaultBranch?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    scans?: ScanOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    name?: StringFilter<"Repository"> | string
    gitlabProjectId?: IntNullableFilter<"Repository"> | number | null
    githubRepoId?: IntNullableFilter<"Repository"> | number | null
    defaultBranch?: StringNullableFilter<"Repository"> | string | null
    organizationId?: StringNullableFilter<"Repository"> | string | null
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    scans?: ScanListRelationFilter
  }, "id">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabProjectId?: SortOrderInput | SortOrder
    githubRepoId?: SortOrderInput | SortOrder
    defaultBranch?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    gitlabProjectId?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    githubRepoId?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    defaultBranch?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type ScanWhereInput = {
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    id?: StringFilter<"Scan"> | string
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    startedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    status?: EnumScanStatusFilter<"Scan"> | $Enums.ScanStatus
    createdByUserId?: StringFilter<"Scan"> | string
    organizationId?: StringNullableFilter<"Scan"> | string | null
    repositoryId?: StringNullableFilter<"Scan"> | string | null
    includeCrossRepo?: BoolFilter<"Scan"> | boolean
    parameters?: JsonNullableFilter<"Scan">
    reportMarkdown?: StringNullableFilter<"Scan"> | string | null
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    repository?: XOR<RepositoryNullableScalarRelationFilter, RepositoryWhereInput> | null
    findings?: ScanFindingListRelationFilter
  }

  export type ScanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdByUserId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    repositoryId?: SortOrderInput | SortOrder
    includeCrossRepo?: SortOrder
    parameters?: SortOrderInput | SortOrder
    reportMarkdown?: SortOrderInput | SortOrder
    createdByUser?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    repository?: RepositoryOrderByWithRelationInput
    findings?: ScanFindingOrderByRelationAggregateInput
  }

  export type ScanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    startedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    status?: EnumScanStatusFilter<"Scan"> | $Enums.ScanStatus
    createdByUserId?: StringFilter<"Scan"> | string
    organizationId?: StringNullableFilter<"Scan"> | string | null
    repositoryId?: StringNullableFilter<"Scan"> | string | null
    includeCrossRepo?: BoolFilter<"Scan"> | boolean
    parameters?: JsonNullableFilter<"Scan">
    reportMarkdown?: StringNullableFilter<"Scan"> | string | null
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    repository?: XOR<RepositoryNullableScalarRelationFilter, RepositoryWhereInput> | null
    findings?: ScanFindingListRelationFilter
  }, "id">

  export type ScanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdByUserId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    repositoryId?: SortOrderInput | SortOrder
    includeCrossRepo?: SortOrder
    parameters?: SortOrderInput | SortOrder
    reportMarkdown?: SortOrderInput | SortOrder
    _count?: ScanCountOrderByAggregateInput
    _max?: ScanMaxOrderByAggregateInput
    _min?: ScanMinOrderByAggregateInput
  }

  export type ScanScalarWhereWithAggregatesInput = {
    AND?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    OR?: ScanScalarWhereWithAggregatesInput[]
    NOT?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Scan"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Scan"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Scan"> | Date | string | null
    status?: EnumScanStatusWithAggregatesFilter<"Scan"> | $Enums.ScanStatus
    createdByUserId?: StringWithAggregatesFilter<"Scan"> | string
    organizationId?: StringNullableWithAggregatesFilter<"Scan"> | string | null
    repositoryId?: StringNullableWithAggregatesFilter<"Scan"> | string | null
    includeCrossRepo?: BoolWithAggregatesFilter<"Scan"> | boolean
    parameters?: JsonNullableWithAggregatesFilter<"Scan">
    reportMarkdown?: StringNullableWithAggregatesFilter<"Scan"> | string | null
  }

  export type ScanFindingWhereInput = {
    AND?: ScanFindingWhereInput | ScanFindingWhereInput[]
    OR?: ScanFindingWhereInput[]
    NOT?: ScanFindingWhereInput | ScanFindingWhereInput[]
    id?: StringFilter<"ScanFinding"> | string
    scanId?: StringFilter<"ScanFinding"> | string
    severity?: EnumSeverityFilter<"ScanFinding"> | $Enums.Severity
    title?: StringFilter<"ScanFinding"> | string
    description?: StringNullableFilter<"ScanFinding"> | string | null
    recommendation?: StringNullableFilter<"ScanFinding"> | string | null
    filePath?: StringNullableFilter<"ScanFinding"> | string | null
    line?: IntNullableFilter<"ScanFinding"> | number | null
    externalRefs?: JsonNullableFilter<"ScanFinding">
    createdAt?: DateTimeFilter<"ScanFinding"> | Date | string
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }

  export type ScanFindingOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    line?: SortOrderInput | SortOrder
    externalRefs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    scan?: ScanOrderByWithRelationInput
  }

  export type ScanFindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScanFindingWhereInput | ScanFindingWhereInput[]
    OR?: ScanFindingWhereInput[]
    NOT?: ScanFindingWhereInput | ScanFindingWhereInput[]
    scanId?: StringFilter<"ScanFinding"> | string
    severity?: EnumSeverityFilter<"ScanFinding"> | $Enums.Severity
    title?: StringFilter<"ScanFinding"> | string
    description?: StringNullableFilter<"ScanFinding"> | string | null
    recommendation?: StringNullableFilter<"ScanFinding"> | string | null
    filePath?: StringNullableFilter<"ScanFinding"> | string | null
    line?: IntNullableFilter<"ScanFinding"> | number | null
    externalRefs?: JsonNullableFilter<"ScanFinding">
    createdAt?: DateTimeFilter<"ScanFinding"> | Date | string
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }, "id">

  export type ScanFindingOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    line?: SortOrderInput | SortOrder
    externalRefs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScanFindingCountOrderByAggregateInput
    _avg?: ScanFindingAvgOrderByAggregateInput
    _max?: ScanFindingMaxOrderByAggregateInput
    _min?: ScanFindingMinOrderByAggregateInput
    _sum?: ScanFindingSumOrderByAggregateInput
  }

  export type ScanFindingScalarWhereWithAggregatesInput = {
    AND?: ScanFindingScalarWhereWithAggregatesInput | ScanFindingScalarWhereWithAggregatesInput[]
    OR?: ScanFindingScalarWhereWithAggregatesInput[]
    NOT?: ScanFindingScalarWhereWithAggregatesInput | ScanFindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScanFinding"> | string
    scanId?: StringWithAggregatesFilter<"ScanFinding"> | string
    severity?: EnumSeverityWithAggregatesFilter<"ScanFinding"> | $Enums.Severity
    title?: StringWithAggregatesFilter<"ScanFinding"> | string
    description?: StringNullableWithAggregatesFilter<"ScanFinding"> | string | null
    recommendation?: StringNullableWithAggregatesFilter<"ScanFinding"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"ScanFinding"> | string | null
    line?: IntNullableWithAggregatesFilter<"ScanFinding"> | number | null
    externalRefs?: JsonNullableWithAggregatesFilter<"ScanFinding">
    createdAt?: DateTimeWithAggregatesFilter<"ScanFinding"> | Date | string
  }

  export type IntegrationSettingsWhereInput = {
    AND?: IntegrationSettingsWhereInput | IntegrationSettingsWhereInput[]
    OR?: IntegrationSettingsWhereInput[]
    NOT?: IntegrationSettingsWhereInput | IntegrationSettingsWhereInput[]
    id?: StringFilter<"IntegrationSettings"> | string
    provider?: EnumIntegrationProviderFilter<"IntegrationSettings"> | $Enums.IntegrationProvider
    userId?: StringNullableFilter<"IntegrationSettings"> | string | null
    organizationId?: StringNullableFilter<"IntegrationSettings"> | string | null
    accessTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    refreshTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    data?: JsonNullableFilter<"IntegrationSettings">
    createdAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    gitlabGroups?: GitlabGroupListRelationFilter
    gitlabProjects?: GitlabProjectListRelationFilter
  }

  export type IntegrationSettingsOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    accessTokenEnc?: SortOrderInput | SortOrder
    refreshTokenEnc?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    gitlabGroups?: GitlabGroupOrderByRelationAggregateInput
    gitlabProjects?: GitlabProjectOrderByRelationAggregateInput
  }

  export type IntegrationSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationSettingsWhereInput | IntegrationSettingsWhereInput[]
    OR?: IntegrationSettingsWhereInput[]
    NOT?: IntegrationSettingsWhereInput | IntegrationSettingsWhereInput[]
    provider?: EnumIntegrationProviderFilter<"IntegrationSettings"> | $Enums.IntegrationProvider
    userId?: StringNullableFilter<"IntegrationSettings"> | string | null
    organizationId?: StringNullableFilter<"IntegrationSettings"> | string | null
    accessTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    refreshTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    data?: JsonNullableFilter<"IntegrationSettings">
    createdAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    gitlabGroups?: GitlabGroupListRelationFilter
    gitlabProjects?: GitlabProjectListRelationFilter
  }, "id">

  export type IntegrationSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    accessTokenEnc?: SortOrderInput | SortOrder
    refreshTokenEnc?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationSettingsCountOrderByAggregateInput
    _max?: IntegrationSettingsMaxOrderByAggregateInput
    _min?: IntegrationSettingsMinOrderByAggregateInput
  }

  export type IntegrationSettingsScalarWhereWithAggregatesInput = {
    AND?: IntegrationSettingsScalarWhereWithAggregatesInput | IntegrationSettingsScalarWhereWithAggregatesInput[]
    OR?: IntegrationSettingsScalarWhereWithAggregatesInput[]
    NOT?: IntegrationSettingsScalarWhereWithAggregatesInput | IntegrationSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegrationSettings"> | string
    provider?: EnumIntegrationProviderWithAggregatesFilter<"IntegrationSettings"> | $Enums.IntegrationProvider
    userId?: StringNullableWithAggregatesFilter<"IntegrationSettings"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"IntegrationSettings"> | string | null
    accessTokenEnc?: StringNullableWithAggregatesFilter<"IntegrationSettings"> | string | null
    refreshTokenEnc?: StringNullableWithAggregatesFilter<"IntegrationSettings"> | string | null
    data?: JsonNullableWithAggregatesFilter<"IntegrationSettings">
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntegrationSettings"> | Date | string
  }

  export type GitlabGroupWhereInput = {
    AND?: GitlabGroupWhereInput | GitlabGroupWhereInput[]
    OR?: GitlabGroupWhereInput[]
    NOT?: GitlabGroupWhereInput | GitlabGroupWhereInput[]
    id?: StringFilter<"GitlabGroup"> | string
    integrationId?: StringFilter<"GitlabGroup"> | string
    gitlabGroupId?: IntFilter<"GitlabGroup"> | number
    parentGitlabGroupId?: IntNullableFilter<"GitlabGroup"> | number | null
    name?: StringFilter<"GitlabGroup"> | string
    fullPath?: StringNullableFilter<"GitlabGroup"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    createdAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    integration?: XOR<IntegrationSettingsScalarRelationFilter, IntegrationSettingsWhereInput>
    projects?: GitlabProjectListRelationFilter
  }

  export type GitlabGroupOrderByWithRelationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrderInput | SortOrder
    name?: SortOrder
    fullPath?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integration?: IntegrationSettingsOrderByWithRelationInput
    projects?: GitlabProjectOrderByRelationAggregateInput
  }

  export type GitlabGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    integrationId_gitlabGroupId?: GitlabGroupIntegrationIdGitlabGroupIdCompoundUniqueInput
    AND?: GitlabGroupWhereInput | GitlabGroupWhereInput[]
    OR?: GitlabGroupWhereInput[]
    NOT?: GitlabGroupWhereInput | GitlabGroupWhereInput[]
    integrationId?: StringFilter<"GitlabGroup"> | string
    gitlabGroupId?: IntFilter<"GitlabGroup"> | number
    parentGitlabGroupId?: IntNullableFilter<"GitlabGroup"> | number | null
    name?: StringFilter<"GitlabGroup"> | string
    fullPath?: StringNullableFilter<"GitlabGroup"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    createdAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    integration?: XOR<IntegrationSettingsScalarRelationFilter, IntegrationSettingsWhereInput>
    projects?: GitlabProjectListRelationFilter
  }, "id" | "integrationId_gitlabGroupId">

  export type GitlabGroupOrderByWithAggregationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrderInput | SortOrder
    name?: SortOrder
    fullPath?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GitlabGroupCountOrderByAggregateInput
    _avg?: GitlabGroupAvgOrderByAggregateInput
    _max?: GitlabGroupMaxOrderByAggregateInput
    _min?: GitlabGroupMinOrderByAggregateInput
    _sum?: GitlabGroupSumOrderByAggregateInput
  }

  export type GitlabGroupScalarWhereWithAggregatesInput = {
    AND?: GitlabGroupScalarWhereWithAggregatesInput | GitlabGroupScalarWhereWithAggregatesInput[]
    OR?: GitlabGroupScalarWhereWithAggregatesInput[]
    NOT?: GitlabGroupScalarWhereWithAggregatesInput | GitlabGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GitlabGroup"> | string
    integrationId?: StringWithAggregatesFilter<"GitlabGroup"> | string
    gitlabGroupId?: IntWithAggregatesFilter<"GitlabGroup"> | number
    parentGitlabGroupId?: IntNullableWithAggregatesFilter<"GitlabGroup"> | number | null
    name?: StringWithAggregatesFilter<"GitlabGroup"> | string
    fullPath?: StringNullableWithAggregatesFilter<"GitlabGroup"> | string | null
    lastSyncedAt?: DateTimeWithAggregatesFilter<"GitlabGroup"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GitlabGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GitlabGroup"> | Date | string
  }

  export type GitlabProjectWhereInput = {
    AND?: GitlabProjectWhereInput | GitlabProjectWhereInput[]
    OR?: GitlabProjectWhereInput[]
    NOT?: GitlabProjectWhereInput | GitlabProjectWhereInput[]
    id?: StringFilter<"GitlabProject"> | string
    integrationId?: StringFilter<"GitlabProject"> | string
    gitlabProjectId?: IntFilter<"GitlabProject"> | number
    groupGitlabId?: IntNullableFilter<"GitlabProject"> | number | null
    name?: StringFilter<"GitlabProject"> | string
    pathWithNamespace?: StringFilter<"GitlabProject"> | string
    defaultBranch?: StringNullableFilter<"GitlabProject"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabProject"> | Date | string
    createdAt?: DateTimeFilter<"GitlabProject"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabProject"> | Date | string
    integration?: XOR<IntegrationSettingsScalarRelationFilter, IntegrationSettingsWhereInput>
    group?: XOR<GitlabGroupNullableScalarRelationFilter, GitlabGroupWhereInput> | null
  }

  export type GitlabProjectOrderByWithRelationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrderInput | SortOrder
    name?: SortOrder
    pathWithNamespace?: SortOrder
    defaultBranch?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integration?: IntegrationSettingsOrderByWithRelationInput
    group?: GitlabGroupOrderByWithRelationInput
  }

  export type GitlabProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    integrationId_gitlabProjectId?: GitlabProjectIntegrationIdGitlabProjectIdCompoundUniqueInput
    AND?: GitlabProjectWhereInput | GitlabProjectWhereInput[]
    OR?: GitlabProjectWhereInput[]
    NOT?: GitlabProjectWhereInput | GitlabProjectWhereInput[]
    integrationId?: StringFilter<"GitlabProject"> | string
    gitlabProjectId?: IntFilter<"GitlabProject"> | number
    groupGitlabId?: IntNullableFilter<"GitlabProject"> | number | null
    name?: StringFilter<"GitlabProject"> | string
    pathWithNamespace?: StringFilter<"GitlabProject"> | string
    defaultBranch?: StringNullableFilter<"GitlabProject"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabProject"> | Date | string
    createdAt?: DateTimeFilter<"GitlabProject"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabProject"> | Date | string
    integration?: XOR<IntegrationSettingsScalarRelationFilter, IntegrationSettingsWhereInput>
    group?: XOR<GitlabGroupNullableScalarRelationFilter, GitlabGroupWhereInput> | null
  }, "id" | "integrationId_gitlabProjectId">

  export type GitlabProjectOrderByWithAggregationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrderInput | SortOrder
    name?: SortOrder
    pathWithNamespace?: SortOrder
    defaultBranch?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GitlabProjectCountOrderByAggregateInput
    _avg?: GitlabProjectAvgOrderByAggregateInput
    _max?: GitlabProjectMaxOrderByAggregateInput
    _min?: GitlabProjectMinOrderByAggregateInput
    _sum?: GitlabProjectSumOrderByAggregateInput
  }

  export type GitlabProjectScalarWhereWithAggregatesInput = {
    AND?: GitlabProjectScalarWhereWithAggregatesInput | GitlabProjectScalarWhereWithAggregatesInput[]
    OR?: GitlabProjectScalarWhereWithAggregatesInput[]
    NOT?: GitlabProjectScalarWhereWithAggregatesInput | GitlabProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GitlabProject"> | string
    integrationId?: StringWithAggregatesFilter<"GitlabProject"> | string
    gitlabProjectId?: IntWithAggregatesFilter<"GitlabProject"> | number
    groupGitlabId?: IntNullableWithAggregatesFilter<"GitlabProject"> | number | null
    name?: StringWithAggregatesFilter<"GitlabProject"> | string
    pathWithNamespace?: StringWithAggregatesFilter<"GitlabProject"> | string
    defaultBranch?: StringNullableWithAggregatesFilter<"GitlabProject"> | string | null
    lastSyncedAt?: DateTimeWithAggregatesFilter<"GitlabProject"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GitlabProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GitlabProject"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    scans?: ScanCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    scans?: ScanUncheckedCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    scans?: ScanUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    scans?: ScanUncheckedUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutOrganizationInput
    scans?: ScanCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutOrganizationInput
    scans?: ScanUncheckedCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutOrganizationNestedInput
    scans?: ScanUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutOrganizationNestedInput
    scans?: ScanUncheckedUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutRepositoriesInput
    scans?: ScanCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutRepositoriesNestedInput
    scans?: ScanUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCreateInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    createdByUser: UserCreateNestedOneWithoutScansInput
    organization?: OrganizationCreateNestedOneWithoutScansInput
    repository?: RepositoryCreateNestedOneWithoutScansInput
    findings?: ScanFindingCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    organizationId?: string | null
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    findings?: ScanFindingUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUser?: UserUpdateOneRequiredWithoutScansNestedInput
    organization?: OrganizationUpdateOneWithoutScansNestedInput
    repository?: RepositoryUpdateOneWithoutScansNestedInput
    findings?: ScanFindingUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: ScanFindingUncheckedUpdateManyWithoutScanNestedInput
  }

  export type ScanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    organizationId?: string | null
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
  }

  export type ScanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScanFindingCreateInput = {
    id?: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutFindingsInput
  }

  export type ScanFindingUncheckedCreateInput = {
    id?: string
    scanId: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScanFindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type ScanFindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanFindingCreateManyInput = {
    id?: string
    scanId: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScanFindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanFindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationSettingsCreateInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutIntegrationsInput
    organization?: OrganizationCreateNestedOneWithoutIntegrationsInput
    gitlabGroups?: GitlabGroupCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUncheckedCreateInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    gitlabGroups?: GitlabGroupUncheckedCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIntegrationsNestedInput
    organization?: OrganizationUpdateOneWithoutIntegrationsNestedInput
    gitlabGroups?: GitlabGroupUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitlabGroups?: GitlabGroupUncheckedUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsCreateManyInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabGroupCreateInput = {
    id?: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationSettingsCreateNestedOneWithoutGitlabGroupsInput
    projects?: GitlabProjectCreateNestedManyWithoutGroupInput
  }

  export type GitlabGroupUncheckedCreateInput = {
    id?: string
    integrationId: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: GitlabProjectUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GitlabGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationSettingsUpdateOneRequiredWithoutGitlabGroupsNestedInput
    projects?: GitlabProjectUpdateManyWithoutGroupNestedInput
  }

  export type GitlabGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: GitlabProjectUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GitlabGroupCreateManyInput = {
    id?: string
    integrationId: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectCreateInput = {
    id?: string
    gitlabProjectId: number
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationSettingsCreateNestedOneWithoutGitlabProjectsInput
    group?: GitlabGroupCreateNestedOneWithoutProjectsInput
  }

  export type GitlabProjectUncheckedCreateInput = {
    id?: string
    integrationId: string
    gitlabProjectId: number
    groupGitlabId?: number | null
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationSettingsUpdateOneRequiredWithoutGitlabProjectsNestedInput
    group?: GitlabGroupUpdateOneWithoutProjectsNestedInput
  }

  export type GitlabProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    groupGitlabId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectCreateManyInput = {
    id?: string
    integrationId: string
    gitlabProjectId: number
    groupGitlabId?: number | null
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    groupGitlabId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ScanListRelationFilter = {
    every?: ScanWhereInput
    some?: ScanWhereInput
    none?: ScanWhereInput
  }

  export type IntegrationSettingsListRelationFilter = {
    every?: IntegrationSettingsWhereInput
    some?: IntegrationSettingsWhereInput
    none?: IntegrationSettingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabGroupId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    gitlabGroupId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabGroupId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabGroupId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    gitlabGroupId?: SortOrder
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabProjectId?: SortOrder
    githubRepoId?: SortOrder
    defaultBranch?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    gitlabProjectId?: SortOrder
    githubRepoId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabProjectId?: SortOrder
    githubRepoId?: SortOrder
    defaultBranch?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gitlabProjectId?: SortOrder
    githubRepoId?: SortOrder
    defaultBranch?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    gitlabProjectId?: SortOrder
    githubRepoId?: SortOrder
  }

  export type EnumScanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanStatus | EnumScanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScanStatusFilter<$PrismaModel> | $Enums.ScanStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RepositoryNullableScalarRelationFilter = {
    is?: RepositoryWhereInput | null
    isNot?: RepositoryWhereInput | null
  }

  export type ScanFindingListRelationFilter = {
    every?: ScanFindingWhereInput
    some?: ScanFindingWhereInput
    none?: ScanFindingWhereInput
  }

  export type ScanFindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    createdByUserId?: SortOrder
    organizationId?: SortOrder
    repositoryId?: SortOrder
    includeCrossRepo?: SortOrder
    parameters?: SortOrder
    reportMarkdown?: SortOrder
  }

  export type ScanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    createdByUserId?: SortOrder
    organizationId?: SortOrder
    repositoryId?: SortOrder
    includeCrossRepo?: SortOrder
    reportMarkdown?: SortOrder
  }

  export type ScanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    createdByUserId?: SortOrder
    organizationId?: SortOrder
    repositoryId?: SortOrder
    includeCrossRepo?: SortOrder
    reportMarkdown?: SortOrder
  }

  export type EnumScanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanStatus | EnumScanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScanStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScanStatusFilter<$PrismaModel>
    _max?: NestedEnumScanStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type ScanScalarRelationFilter = {
    is?: ScanWhereInput
    isNot?: ScanWhereInput
  }

  export type ScanFindingCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    filePath?: SortOrder
    line?: SortOrder
    externalRefs?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanFindingAvgOrderByAggregateInput = {
    line?: SortOrder
  }

  export type ScanFindingMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    filePath?: SortOrder
    line?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanFindingMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recommendation?: SortOrder
    filePath?: SortOrder
    line?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanFindingSumOrderByAggregateInput = {
    line?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type EnumIntegrationProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderFilter<$PrismaModel> | $Enums.IntegrationProvider
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GitlabGroupListRelationFilter = {
    every?: GitlabGroupWhereInput
    some?: GitlabGroupWhereInput
    none?: GitlabGroupWhereInput
  }

  export type GitlabProjectListRelationFilter = {
    every?: GitlabProjectWhereInput
    some?: GitlabProjectWhereInput
    none?: GitlabProjectWhereInput
  }

  export type GitlabGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitlabProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessTokenEnc?: SortOrder
    refreshTokenEnc?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessTokenEnc?: SortOrder
    refreshTokenEnc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessTokenEnc?: SortOrder
    refreshTokenEnc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIntegrationProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationProviderFilter<$PrismaModel>
    _max?: NestedEnumIntegrationProviderFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntegrationSettingsScalarRelationFilter = {
    is?: IntegrationSettingsWhereInput
    isNot?: IntegrationSettingsWhereInput
  }

  export type GitlabGroupIntegrationIdGitlabGroupIdCompoundUniqueInput = {
    integrationId: string
    gitlabGroupId: number
  }

  export type GitlabGroupCountOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrder
    name?: SortOrder
    fullPath?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabGroupAvgOrderByAggregateInput = {
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrder
  }

  export type GitlabGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrder
    name?: SortOrder
    fullPath?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabGroupMinOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrder
    name?: SortOrder
    fullPath?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabGroupSumOrderByAggregateInput = {
    gitlabGroupId?: SortOrder
    parentGitlabGroupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GitlabGroupNullableScalarRelationFilter = {
    is?: GitlabGroupWhereInput | null
    isNot?: GitlabGroupWhereInput | null
  }

  export type GitlabProjectIntegrationIdGitlabProjectIdCompoundUniqueInput = {
    integrationId: string
    gitlabProjectId: number
  }

  export type GitlabProjectCountOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrder
    name?: SortOrder
    pathWithNamespace?: SortOrder
    defaultBranch?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabProjectAvgOrderByAggregateInput = {
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrder
  }

  export type GitlabProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrder
    name?: SortOrder
    pathWithNamespace?: SortOrder
    defaultBranch?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabProjectMinOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrder
    name?: SortOrder
    pathWithNamespace?: SortOrder
    defaultBranch?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitlabProjectSumOrderByAggregateInput = {
    gitlabProjectId?: SortOrder
    groupGitlabId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ScanCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput> | ScanCreateWithoutCreatedByUserInput[] | ScanUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutCreatedByUserInput | ScanCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ScanCreateManyCreatedByUserInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type IntegrationSettingsCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput> | IntegrationSettingsCreateWithoutUserInput[] | IntegrationSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutUserInput | IntegrationSettingsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationSettingsCreateManyUserInputEnvelope
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ScanUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput> | ScanCreateWithoutCreatedByUserInput[] | ScanUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutCreatedByUserInput | ScanCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ScanCreateManyCreatedByUserInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type IntegrationSettingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput> | IntegrationSettingsCreateWithoutUserInput[] | IntegrationSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutUserInput | IntegrationSettingsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationSettingsCreateManyUserInputEnvelope
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ScanUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput> | ScanCreateWithoutCreatedByUserInput[] | ScanUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutCreatedByUserInput | ScanCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutCreatedByUserInput | ScanUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ScanCreateManyCreatedByUserInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutCreatedByUserInput | ScanUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutCreatedByUserInput | ScanUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type IntegrationSettingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput> | IntegrationSettingsCreateWithoutUserInput[] | IntegrationSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutUserInput | IntegrationSettingsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationSettingsUpsertWithWhereUniqueWithoutUserInput | IntegrationSettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationSettingsCreateManyUserInputEnvelope
    set?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    disconnect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    delete?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    update?: IntegrationSettingsUpdateWithWhereUniqueWithoutUserInput | IntegrationSettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationSettingsUpdateManyWithWhereWithoutUserInput | IntegrationSettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ScanUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput> | ScanCreateWithoutCreatedByUserInput[] | ScanUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutCreatedByUserInput | ScanCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutCreatedByUserInput | ScanUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ScanCreateManyCreatedByUserInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutCreatedByUserInput | ScanUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutCreatedByUserInput | ScanUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type IntegrationSettingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput> | IntegrationSettingsCreateWithoutUserInput[] | IntegrationSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutUserInput | IntegrationSettingsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationSettingsUpsertWithWhereUniqueWithoutUserInput | IntegrationSettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationSettingsCreateManyUserInputEnvelope
    set?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    disconnect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    delete?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    update?: IntegrationSettingsUpdateWithWhereUniqueWithoutUserInput | IntegrationSettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationSettingsUpdateManyWithWhereWithoutUserInput | IntegrationSettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type RepositoryCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput> | RepositoryCreateWithoutOrganizationInput[] | RepositoryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrganizationInput | RepositoryCreateOrConnectWithoutOrganizationInput[]
    createMany?: RepositoryCreateManyOrganizationInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type ScanCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput> | ScanCreateWithoutOrganizationInput[] | ScanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutOrganizationInput | ScanCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScanCreateManyOrganizationInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type IntegrationSettingsCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput> | IntegrationSettingsCreateWithoutOrganizationInput[] | IntegrationSettingsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutOrganizationInput | IntegrationSettingsCreateOrConnectWithoutOrganizationInput[]
    createMany?: IntegrationSettingsCreateManyOrganizationInputEnvelope
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput> | RepositoryCreateWithoutOrganizationInput[] | RepositoryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrganizationInput | RepositoryCreateOrConnectWithoutOrganizationInput[]
    createMany?: RepositoryCreateManyOrganizationInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type ScanUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput> | ScanCreateWithoutOrganizationInput[] | ScanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutOrganizationInput | ScanCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScanCreateManyOrganizationInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type IntegrationSettingsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput> | IntegrationSettingsCreateWithoutOrganizationInput[] | IntegrationSettingsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutOrganizationInput | IntegrationSettingsCreateOrConnectWithoutOrganizationInput[]
    createMany?: IntegrationSettingsCreateManyOrganizationInputEnvelope
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
  }

  export type RepositoryUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput> | RepositoryCreateWithoutOrganizationInput[] | RepositoryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrganizationInput | RepositoryCreateOrConnectWithoutOrganizationInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOrganizationInput | RepositoryUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RepositoryCreateManyOrganizationInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOrganizationInput | RepositoryUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOrganizationInput | RepositoryUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type ScanUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput> | ScanCreateWithoutOrganizationInput[] | ScanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutOrganizationInput | ScanCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutOrganizationInput | ScanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScanCreateManyOrganizationInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutOrganizationInput | ScanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutOrganizationInput | ScanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type IntegrationSettingsUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput> | IntegrationSettingsCreateWithoutOrganizationInput[] | IntegrationSettingsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutOrganizationInput | IntegrationSettingsCreateOrConnectWithoutOrganizationInput[]
    upsert?: IntegrationSettingsUpsertWithWhereUniqueWithoutOrganizationInput | IntegrationSettingsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IntegrationSettingsCreateManyOrganizationInputEnvelope
    set?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    disconnect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    delete?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    update?: IntegrationSettingsUpdateWithWhereUniqueWithoutOrganizationInput | IntegrationSettingsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IntegrationSettingsUpdateManyWithWhereWithoutOrganizationInput | IntegrationSettingsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput> | RepositoryCreateWithoutOrganizationInput[] | RepositoryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrganizationInput | RepositoryCreateOrConnectWithoutOrganizationInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOrganizationInput | RepositoryUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RepositoryCreateManyOrganizationInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOrganizationInput | RepositoryUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOrganizationInput | RepositoryUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type ScanUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput> | ScanCreateWithoutOrganizationInput[] | ScanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutOrganizationInput | ScanCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutOrganizationInput | ScanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScanCreateManyOrganizationInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutOrganizationInput | ScanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutOrganizationInput | ScanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type IntegrationSettingsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput> | IntegrationSettingsCreateWithoutOrganizationInput[] | IntegrationSettingsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutOrganizationInput | IntegrationSettingsCreateOrConnectWithoutOrganizationInput[]
    upsert?: IntegrationSettingsUpsertWithWhereUniqueWithoutOrganizationInput | IntegrationSettingsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IntegrationSettingsCreateManyOrganizationInputEnvelope
    set?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    disconnect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    delete?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    connect?: IntegrationSettingsWhereUniqueInput | IntegrationSettingsWhereUniqueInput[]
    update?: IntegrationSettingsUpdateWithWhereUniqueWithoutOrganizationInput | IntegrationSettingsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IntegrationSettingsUpdateManyWithWhereWithoutOrganizationInput | IntegrationSettingsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutRepositoriesInput = {
    create?: XOR<OrganizationCreateWithoutRepositoriesInput, OrganizationUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutRepositoriesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScanCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput> | ScanCreateWithoutRepositoryInput[] | ScanUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutRepositoryInput | ScanCreateOrConnectWithoutRepositoryInput[]
    createMany?: ScanCreateManyRepositoryInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type ScanUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput> | ScanCreateWithoutRepositoryInput[] | ScanUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutRepositoryInput | ScanCreateOrConnectWithoutRepositoryInput[]
    createMany?: ScanCreateManyRepositoryInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type OrganizationUpdateOneWithoutRepositoriesNestedInput = {
    create?: XOR<OrganizationCreateWithoutRepositoriesInput, OrganizationUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutRepositoriesInput
    upsert?: OrganizationUpsertWithoutRepositoriesInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutRepositoriesInput, OrganizationUpdateWithoutRepositoriesInput>, OrganizationUncheckedUpdateWithoutRepositoriesInput>
  }

  export type ScanUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput> | ScanCreateWithoutRepositoryInput[] | ScanUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutRepositoryInput | ScanCreateOrConnectWithoutRepositoryInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutRepositoryInput | ScanUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: ScanCreateManyRepositoryInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutRepositoryInput | ScanUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutRepositoryInput | ScanUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type ScanUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput> | ScanCreateWithoutRepositoryInput[] | ScanUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutRepositoryInput | ScanCreateOrConnectWithoutRepositoryInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutRepositoryInput | ScanUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: ScanCreateManyRepositoryInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutRepositoryInput | ScanUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutRepositoryInput | ScanUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutScansInput = {
    create?: XOR<UserCreateWithoutScansInput, UserUncheckedCreateWithoutScansInput>
    connectOrCreate?: UserCreateOrConnectWithoutScansInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutScansInput = {
    create?: XOR<OrganizationCreateWithoutScansInput, OrganizationUncheckedCreateWithoutScansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutScansInput
    connect?: OrganizationWhereUniqueInput
  }

  export type RepositoryCreateNestedOneWithoutScansInput = {
    create?: XOR<RepositoryCreateWithoutScansInput, RepositoryUncheckedCreateWithoutScansInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutScansInput
    connect?: RepositoryWhereUniqueInput
  }

  export type ScanFindingCreateNestedManyWithoutScanInput = {
    create?: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput> | ScanFindingCreateWithoutScanInput[] | ScanFindingUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanFindingCreateOrConnectWithoutScanInput | ScanFindingCreateOrConnectWithoutScanInput[]
    createMany?: ScanFindingCreateManyScanInputEnvelope
    connect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
  }

  export type ScanFindingUncheckedCreateNestedManyWithoutScanInput = {
    create?: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput> | ScanFindingCreateWithoutScanInput[] | ScanFindingUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanFindingCreateOrConnectWithoutScanInput | ScanFindingCreateOrConnectWithoutScanInput[]
    createMany?: ScanFindingCreateManyScanInputEnvelope
    connect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
  }

  export type EnumScanStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScanStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutScansNestedInput = {
    create?: XOR<UserCreateWithoutScansInput, UserUncheckedCreateWithoutScansInput>
    connectOrCreate?: UserCreateOrConnectWithoutScansInput
    upsert?: UserUpsertWithoutScansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScansInput, UserUpdateWithoutScansInput>, UserUncheckedUpdateWithoutScansInput>
  }

  export type OrganizationUpdateOneWithoutScansNestedInput = {
    create?: XOR<OrganizationCreateWithoutScansInput, OrganizationUncheckedCreateWithoutScansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutScansInput
    upsert?: OrganizationUpsertWithoutScansInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutScansInput, OrganizationUpdateWithoutScansInput>, OrganizationUncheckedUpdateWithoutScansInput>
  }

  export type RepositoryUpdateOneWithoutScansNestedInput = {
    create?: XOR<RepositoryCreateWithoutScansInput, RepositoryUncheckedCreateWithoutScansInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutScansInput
    upsert?: RepositoryUpsertWithoutScansInput
    disconnect?: RepositoryWhereInput | boolean
    delete?: RepositoryWhereInput | boolean
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutScansInput, RepositoryUpdateWithoutScansInput>, RepositoryUncheckedUpdateWithoutScansInput>
  }

  export type ScanFindingUpdateManyWithoutScanNestedInput = {
    create?: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput> | ScanFindingCreateWithoutScanInput[] | ScanFindingUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanFindingCreateOrConnectWithoutScanInput | ScanFindingCreateOrConnectWithoutScanInput[]
    upsert?: ScanFindingUpsertWithWhereUniqueWithoutScanInput | ScanFindingUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: ScanFindingCreateManyScanInputEnvelope
    set?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    disconnect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    delete?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    connect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    update?: ScanFindingUpdateWithWhereUniqueWithoutScanInput | ScanFindingUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: ScanFindingUpdateManyWithWhereWithoutScanInput | ScanFindingUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: ScanFindingScalarWhereInput | ScanFindingScalarWhereInput[]
  }

  export type ScanFindingUncheckedUpdateManyWithoutScanNestedInput = {
    create?: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput> | ScanFindingCreateWithoutScanInput[] | ScanFindingUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanFindingCreateOrConnectWithoutScanInput | ScanFindingCreateOrConnectWithoutScanInput[]
    upsert?: ScanFindingUpsertWithWhereUniqueWithoutScanInput | ScanFindingUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: ScanFindingCreateManyScanInputEnvelope
    set?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    disconnect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    delete?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    connect?: ScanFindingWhereUniqueInput | ScanFindingWhereUniqueInput[]
    update?: ScanFindingUpdateWithWhereUniqueWithoutScanInput | ScanFindingUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: ScanFindingUpdateManyWithWhereWithoutScanInput | ScanFindingUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: ScanFindingScalarWhereInput | ScanFindingScalarWhereInput[]
  }

  export type ScanCreateNestedOneWithoutFindingsInput = {
    create?: XOR<ScanCreateWithoutFindingsInput, ScanUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ScanCreateOrConnectWithoutFindingsInput
    connect?: ScanWhereUniqueInput
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type ScanUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<ScanCreateWithoutFindingsInput, ScanUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ScanCreateOrConnectWithoutFindingsInput
    upsert?: ScanUpsertWithoutFindingsInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutFindingsInput, ScanUpdateWithoutFindingsInput>, ScanUncheckedUpdateWithoutFindingsInput>
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<OrganizationCreateWithoutIntegrationsInput, OrganizationUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIntegrationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type GitlabGroupCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput> | GitlabGroupCreateWithoutIntegrationInput[] | GitlabGroupUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutIntegrationInput | GitlabGroupCreateOrConnectWithoutIntegrationInput[]
    createMany?: GitlabGroupCreateManyIntegrationInputEnvelope
    connect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
  }

  export type GitlabProjectCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput> | GitlabProjectCreateWithoutIntegrationInput[] | GitlabProjectUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutIntegrationInput | GitlabProjectCreateOrConnectWithoutIntegrationInput[]
    createMany?: GitlabProjectCreateManyIntegrationInputEnvelope
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
  }

  export type GitlabGroupUncheckedCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput> | GitlabGroupCreateWithoutIntegrationInput[] | GitlabGroupUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutIntegrationInput | GitlabGroupCreateOrConnectWithoutIntegrationInput[]
    createMany?: GitlabGroupCreateManyIntegrationInputEnvelope
    connect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
  }

  export type GitlabProjectUncheckedCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput> | GitlabProjectCreateWithoutIntegrationInput[] | GitlabProjectUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutIntegrationInput | GitlabProjectCreateOrConnectWithoutIntegrationInput[]
    createMany?: GitlabProjectCreateManyIntegrationInputEnvelope
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
  }

  export type EnumIntegrationProviderFieldUpdateOperationsInput = {
    set?: $Enums.IntegrationProvider
  }

  export type UserUpdateOneWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type OrganizationUpdateOneWithoutIntegrationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutIntegrationsInput, OrganizationUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIntegrationsInput
    upsert?: OrganizationUpsertWithoutIntegrationsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutIntegrationsInput, OrganizationUpdateWithoutIntegrationsInput>, OrganizationUncheckedUpdateWithoutIntegrationsInput>
  }

  export type GitlabGroupUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput> | GitlabGroupCreateWithoutIntegrationInput[] | GitlabGroupUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutIntegrationInput | GitlabGroupCreateOrConnectWithoutIntegrationInput[]
    upsert?: GitlabGroupUpsertWithWhereUniqueWithoutIntegrationInput | GitlabGroupUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: GitlabGroupCreateManyIntegrationInputEnvelope
    set?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    disconnect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    delete?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    connect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    update?: GitlabGroupUpdateWithWhereUniqueWithoutIntegrationInput | GitlabGroupUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: GitlabGroupUpdateManyWithWhereWithoutIntegrationInput | GitlabGroupUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: GitlabGroupScalarWhereInput | GitlabGroupScalarWhereInput[]
  }

  export type GitlabProjectUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput> | GitlabProjectCreateWithoutIntegrationInput[] | GitlabProjectUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutIntegrationInput | GitlabProjectCreateOrConnectWithoutIntegrationInput[]
    upsert?: GitlabProjectUpsertWithWhereUniqueWithoutIntegrationInput | GitlabProjectUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: GitlabProjectCreateManyIntegrationInputEnvelope
    set?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    disconnect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    delete?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    update?: GitlabProjectUpdateWithWhereUniqueWithoutIntegrationInput | GitlabProjectUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: GitlabProjectUpdateManyWithWhereWithoutIntegrationInput | GitlabProjectUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
  }

  export type GitlabGroupUncheckedUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput> | GitlabGroupCreateWithoutIntegrationInput[] | GitlabGroupUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutIntegrationInput | GitlabGroupCreateOrConnectWithoutIntegrationInput[]
    upsert?: GitlabGroupUpsertWithWhereUniqueWithoutIntegrationInput | GitlabGroupUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: GitlabGroupCreateManyIntegrationInputEnvelope
    set?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    disconnect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    delete?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    connect?: GitlabGroupWhereUniqueInput | GitlabGroupWhereUniqueInput[]
    update?: GitlabGroupUpdateWithWhereUniqueWithoutIntegrationInput | GitlabGroupUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: GitlabGroupUpdateManyWithWhereWithoutIntegrationInput | GitlabGroupUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: GitlabGroupScalarWhereInput | GitlabGroupScalarWhereInput[]
  }

  export type GitlabProjectUncheckedUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput> | GitlabProjectCreateWithoutIntegrationInput[] | GitlabProjectUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutIntegrationInput | GitlabProjectCreateOrConnectWithoutIntegrationInput[]
    upsert?: GitlabProjectUpsertWithWhereUniqueWithoutIntegrationInput | GitlabProjectUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: GitlabProjectCreateManyIntegrationInputEnvelope
    set?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    disconnect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    delete?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    update?: GitlabProjectUpdateWithWhereUniqueWithoutIntegrationInput | GitlabProjectUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: GitlabProjectUpdateManyWithWhereWithoutIntegrationInput | GitlabProjectUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
  }

  export type IntegrationSettingsCreateNestedOneWithoutGitlabGroupsInput = {
    create?: XOR<IntegrationSettingsCreateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedCreateWithoutGitlabGroupsInput>
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutGitlabGroupsInput
    connect?: IntegrationSettingsWhereUniqueInput
  }

  export type GitlabProjectCreateNestedManyWithoutGroupInput = {
    create?: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput> | GitlabProjectCreateWithoutGroupInput[] | GitlabProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutGroupInput | GitlabProjectCreateOrConnectWithoutGroupInput[]
    createMany?: GitlabProjectCreateManyGroupInputEnvelope
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
  }

  export type GitlabProjectUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput> | GitlabProjectCreateWithoutGroupInput[] | GitlabProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutGroupInput | GitlabProjectCreateOrConnectWithoutGroupInput[]
    createMany?: GitlabProjectCreateManyGroupInputEnvelope
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntegrationSettingsUpdateOneRequiredWithoutGitlabGroupsNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedCreateWithoutGitlabGroupsInput>
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutGitlabGroupsInput
    upsert?: IntegrationSettingsUpsertWithoutGitlabGroupsInput
    connect?: IntegrationSettingsWhereUniqueInput
    update?: XOR<XOR<IntegrationSettingsUpdateToOneWithWhereWithoutGitlabGroupsInput, IntegrationSettingsUpdateWithoutGitlabGroupsInput>, IntegrationSettingsUncheckedUpdateWithoutGitlabGroupsInput>
  }

  export type GitlabProjectUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput> | GitlabProjectCreateWithoutGroupInput[] | GitlabProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutGroupInput | GitlabProjectCreateOrConnectWithoutGroupInput[]
    upsert?: GitlabProjectUpsertWithWhereUniqueWithoutGroupInput | GitlabProjectUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GitlabProjectCreateManyGroupInputEnvelope
    set?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    disconnect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    delete?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    update?: GitlabProjectUpdateWithWhereUniqueWithoutGroupInput | GitlabProjectUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GitlabProjectUpdateManyWithWhereWithoutGroupInput | GitlabProjectUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
  }

  export type GitlabProjectUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput> | GitlabProjectCreateWithoutGroupInput[] | GitlabProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GitlabProjectCreateOrConnectWithoutGroupInput | GitlabProjectCreateOrConnectWithoutGroupInput[]
    upsert?: GitlabProjectUpsertWithWhereUniqueWithoutGroupInput | GitlabProjectUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GitlabProjectCreateManyGroupInputEnvelope
    set?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    disconnect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    delete?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    connect?: GitlabProjectWhereUniqueInput | GitlabProjectWhereUniqueInput[]
    update?: GitlabProjectUpdateWithWhereUniqueWithoutGroupInput | GitlabProjectUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GitlabProjectUpdateManyWithWhereWithoutGroupInput | GitlabProjectUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
  }

  export type IntegrationSettingsCreateNestedOneWithoutGitlabProjectsInput = {
    create?: XOR<IntegrationSettingsCreateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedCreateWithoutGitlabProjectsInput>
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutGitlabProjectsInput
    connect?: IntegrationSettingsWhereUniqueInput
  }

  export type GitlabGroupCreateNestedOneWithoutProjectsInput = {
    create?: XOR<GitlabGroupCreateWithoutProjectsInput, GitlabGroupUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutProjectsInput
    connect?: GitlabGroupWhereUniqueInput
  }

  export type IntegrationSettingsUpdateOneRequiredWithoutGitlabProjectsNestedInput = {
    create?: XOR<IntegrationSettingsCreateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedCreateWithoutGitlabProjectsInput>
    connectOrCreate?: IntegrationSettingsCreateOrConnectWithoutGitlabProjectsInput
    upsert?: IntegrationSettingsUpsertWithoutGitlabProjectsInput
    connect?: IntegrationSettingsWhereUniqueInput
    update?: XOR<XOR<IntegrationSettingsUpdateToOneWithWhereWithoutGitlabProjectsInput, IntegrationSettingsUpdateWithoutGitlabProjectsInput>, IntegrationSettingsUncheckedUpdateWithoutGitlabProjectsInput>
  }

  export type GitlabGroupUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<GitlabGroupCreateWithoutProjectsInput, GitlabGroupUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GitlabGroupCreateOrConnectWithoutProjectsInput
    upsert?: GitlabGroupUpsertWithoutProjectsInput
    disconnect?: GitlabGroupWhereInput | boolean
    delete?: GitlabGroupWhereInput | boolean
    connect?: GitlabGroupWhereUniqueInput
    update?: XOR<XOR<GitlabGroupUpdateToOneWithWhereWithoutProjectsInput, GitlabGroupUpdateWithoutProjectsInput>, GitlabGroupUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumScanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanStatus | EnumScanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScanStatusFilter<$PrismaModel> | $Enums.ScanStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumScanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanStatus | EnumScanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScanStatus[] | ListEnumScanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScanStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScanStatusFilter<$PrismaModel>
    _max?: NestedEnumScanStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumIntegrationProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderFilter<$PrismaModel> | $Enums.IntegrationProvider
  }

  export type NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationProviderFilter<$PrismaModel>
    _max?: NestedEnumIntegrationProviderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScanCreateWithoutCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    organization?: OrganizationCreateNestedOneWithoutScansInput
    repository?: RepositoryCreateNestedOneWithoutScansInput
    findings?: ScanFindingCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    organizationId?: string | null
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    findings?: ScanFindingUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutCreatedByUserInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ScanCreateManyCreatedByUserInputEnvelope = {
    data: ScanCreateManyCreatedByUserInput | ScanCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationSettingsCreateWithoutUserInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutIntegrationsInput
    gitlabGroups?: GitlabGroupCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    gitlabGroups?: GitlabGroupUncheckedCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsCreateOrConnectWithoutUserInput = {
    where: IntegrationSettingsWhereUniqueInput
    create: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationSettingsCreateManyUserInputEnvelope = {
    data: IntegrationSettingsCreateManyUserInput | IntegrationSettingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ScanUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ScanWhereUniqueInput
    update: XOR<ScanUpdateWithoutCreatedByUserInput, ScanUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ScanCreateWithoutCreatedByUserInput, ScanUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ScanUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ScanWhereUniqueInput
    data: XOR<ScanUpdateWithoutCreatedByUserInput, ScanUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ScanUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ScanScalarWhereInput
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ScanScalarWhereInput = {
    AND?: ScanScalarWhereInput | ScanScalarWhereInput[]
    OR?: ScanScalarWhereInput[]
    NOT?: ScanScalarWhereInput | ScanScalarWhereInput[]
    id?: StringFilter<"Scan"> | string
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    startedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    status?: EnumScanStatusFilter<"Scan"> | $Enums.ScanStatus
    createdByUserId?: StringFilter<"Scan"> | string
    organizationId?: StringNullableFilter<"Scan"> | string | null
    repositoryId?: StringNullableFilter<"Scan"> | string | null
    includeCrossRepo?: BoolFilter<"Scan"> | boolean
    parameters?: JsonNullableFilter<"Scan">
    reportMarkdown?: StringNullableFilter<"Scan"> | string | null
  }

  export type IntegrationSettingsUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationSettingsWhereUniqueInput
    update: XOR<IntegrationSettingsUpdateWithoutUserInput, IntegrationSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationSettingsCreateWithoutUserInput, IntegrationSettingsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationSettingsUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationSettingsWhereUniqueInput
    data: XOR<IntegrationSettingsUpdateWithoutUserInput, IntegrationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationSettingsUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationSettingsScalarWhereInput
    data: XOR<IntegrationSettingsUpdateManyMutationInput, IntegrationSettingsUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationSettingsScalarWhereInput = {
    AND?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
    OR?: IntegrationSettingsScalarWhereInput[]
    NOT?: IntegrationSettingsScalarWhereInput | IntegrationSettingsScalarWhereInput[]
    id?: StringFilter<"IntegrationSettings"> | string
    provider?: EnumIntegrationProviderFilter<"IntegrationSettings"> | $Enums.IntegrationProvider
    userId?: StringNullableFilter<"IntegrationSettings"> | string | null
    organizationId?: StringNullableFilter<"IntegrationSettings"> | string | null
    accessTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    refreshTokenEnc?: StringNullableFilter<"IntegrationSettings"> | string | null
    data?: JsonNullableFilter<"IntegrationSettings">
    createdAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationSettings"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    scans?: ScanCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    scans?: ScanUncheckedCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    scans?: ScanUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    scans?: ScanUncheckedUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    scans?: ScanCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    scans?: ScanUncheckedCreateNestedManyWithoutCreatedByUserInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    scans?: ScanUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    scans?: ScanUncheckedUpdateManyWithoutCreatedByUserNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepositoryCreateWithoutOrganizationInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scans?: ScanCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutOrganizationInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput>
  }

  export type RepositoryCreateManyOrganizationInputEnvelope = {
    data: RepositoryCreateManyOrganizationInput | RepositoryCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ScanCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    createdByUser: UserCreateNestedOneWithoutScansInput
    repository?: RepositoryCreateNestedOneWithoutScansInput
    findings?: ScanFindingCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutOrganizationInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    findings?: ScanFindingUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutOrganizationInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput>
  }

  export type ScanCreateManyOrganizationInputEnvelope = {
    data: ScanCreateManyOrganizationInput | ScanCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationSettingsCreateWithoutOrganizationInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutIntegrationsInput
    gitlabGroups?: GitlabGroupCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUncheckedCreateWithoutOrganizationInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    gitlabGroups?: GitlabGroupUncheckedCreateNestedManyWithoutIntegrationInput
    gitlabProjects?: GitlabProjectUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsCreateOrConnectWithoutOrganizationInput = {
    where: IntegrationSettingsWhereUniqueInput
    create: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput>
  }

  export type IntegrationSettingsCreateManyOrganizationInputEnvelope = {
    data: IntegrationSettingsCreateManyOrganizationInput | IntegrationSettingsCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutOrganizationInput, RepositoryUncheckedUpdateWithoutOrganizationInput>
    create: XOR<RepositoryCreateWithoutOrganizationInput, RepositoryUncheckedCreateWithoutOrganizationInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutOrganizationInput, RepositoryUncheckedUpdateWithoutOrganizationInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutOrganizationInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    gitlabProjectId?: IntNullableFilter<"Repository"> | number | null
    githubRepoId?: IntNullableFilter<"Repository"> | number | null
    defaultBranch?: StringNullableFilter<"Repository"> | string | null
    organizationId?: StringNullableFilter<"Repository"> | string | null
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
  }

  export type ScanUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ScanWhereUniqueInput
    update: XOR<ScanUpdateWithoutOrganizationInput, ScanUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ScanCreateWithoutOrganizationInput, ScanUncheckedCreateWithoutOrganizationInput>
  }

  export type ScanUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ScanWhereUniqueInput
    data: XOR<ScanUpdateWithoutOrganizationInput, ScanUncheckedUpdateWithoutOrganizationInput>
  }

  export type ScanUpdateManyWithWhereWithoutOrganizationInput = {
    where: ScanScalarWhereInput
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type IntegrationSettingsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: IntegrationSettingsWhereUniqueInput
    update: XOR<IntegrationSettingsUpdateWithoutOrganizationInput, IntegrationSettingsUncheckedUpdateWithoutOrganizationInput>
    create: XOR<IntegrationSettingsCreateWithoutOrganizationInput, IntegrationSettingsUncheckedCreateWithoutOrganizationInput>
  }

  export type IntegrationSettingsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: IntegrationSettingsWhereUniqueInput
    data: XOR<IntegrationSettingsUpdateWithoutOrganizationInput, IntegrationSettingsUncheckedUpdateWithoutOrganizationInput>
  }

  export type IntegrationSettingsUpdateManyWithWhereWithoutOrganizationInput = {
    where: IntegrationSettingsScalarWhereInput
    data: XOR<IntegrationSettingsUpdateManyMutationInput, IntegrationSettingsUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutRepositoriesInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scans?: ScanCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutRepositoriesInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutRepositoriesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutRepositoriesInput, OrganizationUncheckedCreateWithoutRepositoriesInput>
  }

  export type ScanCreateWithoutRepositoryInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    createdByUser: UserCreateNestedOneWithoutScansInput
    organization?: OrganizationCreateNestedOneWithoutScansInput
    findings?: ScanFindingCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutRepositoryInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    organizationId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    findings?: ScanFindingUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutRepositoryInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput>
  }

  export type ScanCreateManyRepositoryInputEnvelope = {
    data: ScanCreateManyRepositoryInput | ScanCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutRepositoriesInput = {
    update: XOR<OrganizationUpdateWithoutRepositoriesInput, OrganizationUncheckedUpdateWithoutRepositoriesInput>
    create: XOR<OrganizationCreateWithoutRepositoriesInput, OrganizationUncheckedCreateWithoutRepositoriesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutRepositoriesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutRepositoriesInput, OrganizationUncheckedUpdateWithoutRepositoriesInput>
  }

  export type OrganizationUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ScanUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: ScanWhereUniqueInput
    update: XOR<ScanUpdateWithoutRepositoryInput, ScanUncheckedUpdateWithoutRepositoryInput>
    create: XOR<ScanCreateWithoutRepositoryInput, ScanUncheckedCreateWithoutRepositoryInput>
  }

  export type ScanUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: ScanWhereUniqueInput
    data: XOR<ScanUpdateWithoutRepositoryInput, ScanUncheckedUpdateWithoutRepositoryInput>
  }

  export type ScanUpdateManyWithWhereWithoutRepositoryInput = {
    where: ScanScalarWhereInput
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type UserCreateWithoutScansInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScansInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScansInput, UserUncheckedCreateWithoutScansInput>
  }

  export type OrganizationCreateWithoutScansInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutScansInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutOrganizationInput
    integrations?: IntegrationSettingsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutScansInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutScansInput, OrganizationUncheckedCreateWithoutScansInput>
  }

  export type RepositoryCreateWithoutScansInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutRepositoriesInput
  }

  export type RepositoryUncheckedCreateWithoutScansInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryCreateOrConnectWithoutScansInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutScansInput, RepositoryUncheckedCreateWithoutScansInput>
  }

  export type ScanFindingCreateWithoutScanInput = {
    id?: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScanFindingUncheckedCreateWithoutScanInput = {
    id?: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScanFindingCreateOrConnectWithoutScanInput = {
    where: ScanFindingWhereUniqueInput
    create: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput>
  }

  export type ScanFindingCreateManyScanInputEnvelope = {
    data: ScanFindingCreateManyScanInput | ScanFindingCreateManyScanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutScansInput = {
    update: XOR<UserUpdateWithoutScansInput, UserUncheckedUpdateWithoutScansInput>
    create: XOR<UserCreateWithoutScansInput, UserUncheckedCreateWithoutScansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScansInput, UserUncheckedUpdateWithoutScansInput>
  }

  export type UserUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutScansInput = {
    update: XOR<OrganizationUpdateWithoutScansInput, OrganizationUncheckedUpdateWithoutScansInput>
    create: XOR<OrganizationCreateWithoutScansInput, OrganizationUncheckedCreateWithoutScansInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutScansInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutScansInput, OrganizationUncheckedUpdateWithoutScansInput>
  }

  export type OrganizationUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutOrganizationNestedInput
    integrations?: IntegrationSettingsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type RepositoryUpsertWithoutScansInput = {
    update: XOR<RepositoryUpdateWithoutScansInput, RepositoryUncheckedUpdateWithoutScansInput>
    create: XOR<RepositoryCreateWithoutScansInput, RepositoryUncheckedCreateWithoutScansInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutScansInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutScansInput, RepositoryUncheckedUpdateWithoutScansInput>
  }

  export type RepositoryUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutRepositoriesNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanFindingUpsertWithWhereUniqueWithoutScanInput = {
    where: ScanFindingWhereUniqueInput
    update: XOR<ScanFindingUpdateWithoutScanInput, ScanFindingUncheckedUpdateWithoutScanInput>
    create: XOR<ScanFindingCreateWithoutScanInput, ScanFindingUncheckedCreateWithoutScanInput>
  }

  export type ScanFindingUpdateWithWhereUniqueWithoutScanInput = {
    where: ScanFindingWhereUniqueInput
    data: XOR<ScanFindingUpdateWithoutScanInput, ScanFindingUncheckedUpdateWithoutScanInput>
  }

  export type ScanFindingUpdateManyWithWhereWithoutScanInput = {
    where: ScanFindingScalarWhereInput
    data: XOR<ScanFindingUpdateManyMutationInput, ScanFindingUncheckedUpdateManyWithoutScanInput>
  }

  export type ScanFindingScalarWhereInput = {
    AND?: ScanFindingScalarWhereInput | ScanFindingScalarWhereInput[]
    OR?: ScanFindingScalarWhereInput[]
    NOT?: ScanFindingScalarWhereInput | ScanFindingScalarWhereInput[]
    id?: StringFilter<"ScanFinding"> | string
    scanId?: StringFilter<"ScanFinding"> | string
    severity?: EnumSeverityFilter<"ScanFinding"> | $Enums.Severity
    title?: StringFilter<"ScanFinding"> | string
    description?: StringNullableFilter<"ScanFinding"> | string | null
    recommendation?: StringNullableFilter<"ScanFinding"> | string | null
    filePath?: StringNullableFilter<"ScanFinding"> | string | null
    line?: IntNullableFilter<"ScanFinding"> | number | null
    externalRefs?: JsonNullableFilter<"ScanFinding">
    createdAt?: DateTimeFilter<"ScanFinding"> | Date | string
  }

  export type ScanCreateWithoutFindingsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
    createdByUser: UserCreateNestedOneWithoutScansInput
    organization?: OrganizationCreateNestedOneWithoutScansInput
    repository?: RepositoryCreateNestedOneWithoutScansInput
  }

  export type ScanUncheckedCreateWithoutFindingsInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    organizationId?: string | null
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
  }

  export type ScanCreateOrConnectWithoutFindingsInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutFindingsInput, ScanUncheckedCreateWithoutFindingsInput>
  }

  export type ScanUpsertWithoutFindingsInput = {
    update: XOR<ScanUpdateWithoutFindingsInput, ScanUncheckedUpdateWithoutFindingsInput>
    create: XOR<ScanCreateWithoutFindingsInput, ScanUncheckedCreateWithoutFindingsInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutFindingsInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutFindingsInput, ScanUncheckedUpdateWithoutFindingsInput>
  }

  export type ScanUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUser?: UserUpdateOneRequiredWithoutScansNestedInput
    organization?: OrganizationUpdateOneWithoutScansNestedInput
    repository?: RepositoryUpdateOneWithoutScansNestedInput
  }

  export type ScanUncheckedUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutIntegrationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    scans?: ScanCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    scans?: ScanUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type OrganizationCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutOrganizationInput
    scans?: ScanCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    gitlabGroupId?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutOrganizationInput
    scans?: ScanUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutIntegrationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutIntegrationsInput, OrganizationUncheckedCreateWithoutIntegrationsInput>
  }

  export type GitlabGroupCreateWithoutIntegrationInput = {
    id?: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: GitlabProjectCreateNestedManyWithoutGroupInput
  }

  export type GitlabGroupUncheckedCreateWithoutIntegrationInput = {
    id?: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: GitlabProjectUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GitlabGroupCreateOrConnectWithoutIntegrationInput = {
    where: GitlabGroupWhereUniqueInput
    create: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput>
  }

  export type GitlabGroupCreateManyIntegrationInputEnvelope = {
    data: GitlabGroupCreateManyIntegrationInput | GitlabGroupCreateManyIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type GitlabProjectCreateWithoutIntegrationInput = {
    id?: string
    gitlabProjectId: number
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GitlabGroupCreateNestedOneWithoutProjectsInput
  }

  export type GitlabProjectUncheckedCreateWithoutIntegrationInput = {
    id?: string
    gitlabProjectId: number
    groupGitlabId?: number | null
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectCreateOrConnectWithoutIntegrationInput = {
    where: GitlabProjectWhereUniqueInput
    create: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput>
  }

  export type GitlabProjectCreateManyIntegrationInputEnvelope = {
    data: GitlabProjectCreateManyIntegrationInput | GitlabProjectCreateManyIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    scans?: ScanUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    scans?: ScanUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type OrganizationUpsertWithoutIntegrationsInput = {
    update: XOR<OrganizationUpdateWithoutIntegrationsInput, OrganizationUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<OrganizationCreateWithoutIntegrationsInput, OrganizationUncheckedCreateWithoutIntegrationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutIntegrationsInput, OrganizationUncheckedUpdateWithoutIntegrationsInput>
  }

  export type OrganizationUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutOrganizationNestedInput
    scans?: ScanUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutOrganizationNestedInput
    scans?: ScanUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type GitlabGroupUpsertWithWhereUniqueWithoutIntegrationInput = {
    where: GitlabGroupWhereUniqueInput
    update: XOR<GitlabGroupUpdateWithoutIntegrationInput, GitlabGroupUncheckedUpdateWithoutIntegrationInput>
    create: XOR<GitlabGroupCreateWithoutIntegrationInput, GitlabGroupUncheckedCreateWithoutIntegrationInput>
  }

  export type GitlabGroupUpdateWithWhereUniqueWithoutIntegrationInput = {
    where: GitlabGroupWhereUniqueInput
    data: XOR<GitlabGroupUpdateWithoutIntegrationInput, GitlabGroupUncheckedUpdateWithoutIntegrationInput>
  }

  export type GitlabGroupUpdateManyWithWhereWithoutIntegrationInput = {
    where: GitlabGroupScalarWhereInput
    data: XOR<GitlabGroupUpdateManyMutationInput, GitlabGroupUncheckedUpdateManyWithoutIntegrationInput>
  }

  export type GitlabGroupScalarWhereInput = {
    AND?: GitlabGroupScalarWhereInput | GitlabGroupScalarWhereInput[]
    OR?: GitlabGroupScalarWhereInput[]
    NOT?: GitlabGroupScalarWhereInput | GitlabGroupScalarWhereInput[]
    id?: StringFilter<"GitlabGroup"> | string
    integrationId?: StringFilter<"GitlabGroup"> | string
    gitlabGroupId?: IntFilter<"GitlabGroup"> | number
    parentGitlabGroupId?: IntNullableFilter<"GitlabGroup"> | number | null
    name?: StringFilter<"GitlabGroup"> | string
    fullPath?: StringNullableFilter<"GitlabGroup"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    createdAt?: DateTimeFilter<"GitlabGroup"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabGroup"> | Date | string
  }

  export type GitlabProjectUpsertWithWhereUniqueWithoutIntegrationInput = {
    where: GitlabProjectWhereUniqueInput
    update: XOR<GitlabProjectUpdateWithoutIntegrationInput, GitlabProjectUncheckedUpdateWithoutIntegrationInput>
    create: XOR<GitlabProjectCreateWithoutIntegrationInput, GitlabProjectUncheckedCreateWithoutIntegrationInput>
  }

  export type GitlabProjectUpdateWithWhereUniqueWithoutIntegrationInput = {
    where: GitlabProjectWhereUniqueInput
    data: XOR<GitlabProjectUpdateWithoutIntegrationInput, GitlabProjectUncheckedUpdateWithoutIntegrationInput>
  }

  export type GitlabProjectUpdateManyWithWhereWithoutIntegrationInput = {
    where: GitlabProjectScalarWhereInput
    data: XOR<GitlabProjectUpdateManyMutationInput, GitlabProjectUncheckedUpdateManyWithoutIntegrationInput>
  }

  export type GitlabProjectScalarWhereInput = {
    AND?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
    OR?: GitlabProjectScalarWhereInput[]
    NOT?: GitlabProjectScalarWhereInput | GitlabProjectScalarWhereInput[]
    id?: StringFilter<"GitlabProject"> | string
    integrationId?: StringFilter<"GitlabProject"> | string
    gitlabProjectId?: IntFilter<"GitlabProject"> | number
    groupGitlabId?: IntNullableFilter<"GitlabProject"> | number | null
    name?: StringFilter<"GitlabProject"> | string
    pathWithNamespace?: StringFilter<"GitlabProject"> | string
    defaultBranch?: StringNullableFilter<"GitlabProject"> | string | null
    lastSyncedAt?: DateTimeFilter<"GitlabProject"> | Date | string
    createdAt?: DateTimeFilter<"GitlabProject"> | Date | string
    updatedAt?: DateTimeFilter<"GitlabProject"> | Date | string
  }

  export type IntegrationSettingsCreateWithoutGitlabGroupsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutIntegrationsInput
    organization?: OrganizationCreateNestedOneWithoutIntegrationsInput
    gitlabProjects?: GitlabProjectCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUncheckedCreateWithoutGitlabGroupsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    gitlabProjects?: GitlabProjectUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsCreateOrConnectWithoutGitlabGroupsInput = {
    where: IntegrationSettingsWhereUniqueInput
    create: XOR<IntegrationSettingsCreateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedCreateWithoutGitlabGroupsInput>
  }

  export type GitlabProjectCreateWithoutGroupInput = {
    id?: string
    gitlabProjectId: number
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationSettingsCreateNestedOneWithoutGitlabProjectsInput
  }

  export type GitlabProjectUncheckedCreateWithoutGroupInput = {
    id?: string
    gitlabProjectId: number
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectCreateOrConnectWithoutGroupInput = {
    where: GitlabProjectWhereUniqueInput
    create: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput>
  }

  export type GitlabProjectCreateManyGroupInputEnvelope = {
    data: GitlabProjectCreateManyGroupInput | GitlabProjectCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationSettingsUpsertWithoutGitlabGroupsInput = {
    update: XOR<IntegrationSettingsUpdateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedUpdateWithoutGitlabGroupsInput>
    create: XOR<IntegrationSettingsCreateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedCreateWithoutGitlabGroupsInput>
    where?: IntegrationSettingsWhereInput
  }

  export type IntegrationSettingsUpdateToOneWithWhereWithoutGitlabGroupsInput = {
    where?: IntegrationSettingsWhereInput
    data: XOR<IntegrationSettingsUpdateWithoutGitlabGroupsInput, IntegrationSettingsUncheckedUpdateWithoutGitlabGroupsInput>
  }

  export type IntegrationSettingsUpdateWithoutGitlabGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIntegrationsNestedInput
    organization?: OrganizationUpdateOneWithoutIntegrationsNestedInput
    gitlabProjects?: GitlabProjectUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateWithoutGitlabGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitlabProjects?: GitlabProjectUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type GitlabProjectUpsertWithWhereUniqueWithoutGroupInput = {
    where: GitlabProjectWhereUniqueInput
    update: XOR<GitlabProjectUpdateWithoutGroupInput, GitlabProjectUncheckedUpdateWithoutGroupInput>
    create: XOR<GitlabProjectCreateWithoutGroupInput, GitlabProjectUncheckedCreateWithoutGroupInput>
  }

  export type GitlabProjectUpdateWithWhereUniqueWithoutGroupInput = {
    where: GitlabProjectWhereUniqueInput
    data: XOR<GitlabProjectUpdateWithoutGroupInput, GitlabProjectUncheckedUpdateWithoutGroupInput>
  }

  export type GitlabProjectUpdateManyWithWhereWithoutGroupInput = {
    where: GitlabProjectScalarWhereInput
    data: XOR<GitlabProjectUpdateManyMutationInput, GitlabProjectUncheckedUpdateManyWithoutGroupInput>
  }

  export type IntegrationSettingsCreateWithoutGitlabProjectsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutIntegrationsInput
    organization?: OrganizationCreateNestedOneWithoutIntegrationsInput
    gitlabGroups?: GitlabGroupCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsUncheckedCreateWithoutGitlabProjectsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    gitlabGroups?: GitlabGroupUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationSettingsCreateOrConnectWithoutGitlabProjectsInput = {
    where: IntegrationSettingsWhereUniqueInput
    create: XOR<IntegrationSettingsCreateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedCreateWithoutGitlabProjectsInput>
  }

  export type GitlabGroupCreateWithoutProjectsInput = {
    id?: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationSettingsCreateNestedOneWithoutGitlabGroupsInput
  }

  export type GitlabGroupUncheckedCreateWithoutProjectsInput = {
    id?: string
    integrationId: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabGroupCreateOrConnectWithoutProjectsInput = {
    where: GitlabGroupWhereUniqueInput
    create: XOR<GitlabGroupCreateWithoutProjectsInput, GitlabGroupUncheckedCreateWithoutProjectsInput>
  }

  export type IntegrationSettingsUpsertWithoutGitlabProjectsInput = {
    update: XOR<IntegrationSettingsUpdateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedUpdateWithoutGitlabProjectsInput>
    create: XOR<IntegrationSettingsCreateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedCreateWithoutGitlabProjectsInput>
    where?: IntegrationSettingsWhereInput
  }

  export type IntegrationSettingsUpdateToOneWithWhereWithoutGitlabProjectsInput = {
    where?: IntegrationSettingsWhereInput
    data: XOR<IntegrationSettingsUpdateWithoutGitlabProjectsInput, IntegrationSettingsUncheckedUpdateWithoutGitlabProjectsInput>
  }

  export type IntegrationSettingsUpdateWithoutGitlabProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIntegrationsNestedInput
    organization?: OrganizationUpdateOneWithoutIntegrationsNestedInput
    gitlabGroups?: GitlabGroupUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateWithoutGitlabProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitlabGroups?: GitlabGroupUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type GitlabGroupUpsertWithoutProjectsInput = {
    update: XOR<GitlabGroupUpdateWithoutProjectsInput, GitlabGroupUncheckedUpdateWithoutProjectsInput>
    create: XOR<GitlabGroupCreateWithoutProjectsInput, GitlabGroupUncheckedCreateWithoutProjectsInput>
    where?: GitlabGroupWhereInput
  }

  export type GitlabGroupUpdateToOneWithWhereWithoutProjectsInput = {
    where?: GitlabGroupWhereInput
    data: XOR<GitlabGroupUpdateWithoutProjectsInput, GitlabGroupUncheckedUpdateWithoutProjectsInput>
  }

  export type GitlabGroupUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationSettingsUpdateOneRequiredWithoutGitlabGroupsNestedInput
  }

  export type GitlabGroupUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ScanCreateManyCreatedByUserInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    organizationId?: string | null
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
  }

  export type IntegrationSettingsCreateManyUserInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    organizationId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneWithoutScansNestedInput
    repository?: RepositoryUpdateOneWithoutScansNestedInput
    findings?: ScanFindingUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: ScanFindingUncheckedUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutIntegrationsNestedInput
    gitlabGroups?: GitlabGroupUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitlabGroups?: GitlabGroupUncheckedUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateManyOrganizationInput = {
    id?: string
    name: string
    gitlabProjectId?: number | null
    githubRepoId?: number | null
    defaultBranch?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScanCreateManyOrganizationInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    repositoryId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
  }

  export type IntegrationSettingsCreateManyOrganizationInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    userId?: string | null
    accessTokenEnc?: string | null
    refreshTokenEnc?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: NullableIntFieldUpdateOperationsInput | number | null
    githubRepoId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUser?: UserUpdateOneRequiredWithoutScansNestedInput
    repository?: RepositoryUpdateOneWithoutScansNestedInput
    findings?: ScanFindingUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: ScanFindingUncheckedUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    repositoryId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationSettingsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutIntegrationsNestedInput
    gitlabGroups?: GitlabGroupUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitlabGroups?: GitlabGroupUncheckedUpdateManyWithoutIntegrationNestedInput
    gitlabProjects?: GitlabProjectUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationSettingsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenEnc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCreateManyRepositoryInput = {
    id?: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    status?: $Enums.ScanStatus
    createdByUserId: string
    organizationId?: string | null
    includeCrossRepo?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: string | null
  }

  export type ScanUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUser?: UserUpdateOneRequiredWithoutScansNestedInput
    organization?: OrganizationUpdateOneWithoutScansNestedInput
    findings?: ScanFindingUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: ScanFindingUncheckedUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScanStatusFieldUpdateOperationsInput | $Enums.ScanStatus
    createdByUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    includeCrossRepo?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    reportMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScanFindingCreateManyScanInput = {
    id?: string
    severity: $Enums.Severity
    title: string
    description?: string | null
    recommendation?: string | null
    filePath?: string | null
    line?: number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScanFindingUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanFindingUncheckedUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanFindingUncheckedUpdateManyWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    line?: NullableIntFieldUpdateOperationsInput | number | null
    externalRefs?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabGroupCreateManyIntegrationInput = {
    id?: string
    gitlabGroupId: number
    parentGitlabGroupId?: number | null
    name: string
    fullPath?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectCreateManyIntegrationInput = {
    id?: string
    gitlabProjectId: number
    groupGitlabId?: number | null
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabGroupUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: GitlabProjectUpdateManyWithoutGroupNestedInput
  }

  export type GitlabGroupUncheckedUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: GitlabProjectUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GitlabGroupUncheckedUpdateManyWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabGroupId?: IntFieldUpdateOperationsInput | number
    parentGitlabGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GitlabGroupUpdateOneWithoutProjectsNestedInput
  }

  export type GitlabProjectUncheckedUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    groupGitlabId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectUncheckedUpdateManyWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    groupGitlabId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectCreateManyGroupInput = {
    id?: string
    gitlabProjectId: number
    name: string
    pathWithNamespace: string
    defaultBranch?: string | null
    lastSyncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitlabProjectUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationSettingsUpdateOneRequiredWithoutGitlabProjectsNestedInput
  }

  export type GitlabProjectUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitlabProjectUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    gitlabProjectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pathWithNamespace?: StringFieldUpdateOperationsInput | string
    defaultBranch?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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