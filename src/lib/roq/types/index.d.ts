/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model mechanic
 *
 */
export type mechanic = $Result.DefaultSelection<Prisma.$mechanicPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model service
 *
 */
export type service = $Result.DefaultSelection<Prisma.$servicePayload>;
/**
 * Model service_manager
 *
 */
export type service_manager = $Result.DefaultSelection<Prisma.$service_managerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.mechanic`: Exposes CRUD operations for the **mechanic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Mechanics
   * const mechanics = await prisma.mechanic.findMany()
   * ```
   */
  get mechanic(): Prisma.mechanicDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   */
  get service(): Prisma.serviceDelegate<ExtArgs>;

  /**
   * `prisma.service_manager`: Exposes CRUD operations for the **service_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Service_managers
   * const service_managers = await prisma.service_manager.findMany()
   * ```
   */
  get service_manager(): Prisma.service_managerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    customer: 'customer';
    mechanic: 'mechanic';
    organization: 'organization';
    service: 'service';
    service_manager: 'service_manager';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customer' | 'mechanic' | 'organization' | 'service' | 'service_manager' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      mechanic: {
        payload: Prisma.$mechanicPayload<ExtArgs>;
        fields: Prisma.mechanicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.mechanicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.mechanicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          findFirst: {
            args: Prisma.mechanicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.mechanicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          findMany: {
            args: Prisma.mechanicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>[];
          };
          create: {
            args: Prisma.mechanicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          createMany: {
            args: Prisma.mechanicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.mechanicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          update: {
            args: Prisma.mechanicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          deleteMany: {
            args: Prisma.mechanicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.mechanicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.mechanicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          aggregate: {
            args: Prisma.MechanicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMechanic>;
          };
          groupBy: {
            args: Prisma.mechanicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MechanicGroupByOutputType>[];
          };
          count: {
            args: Prisma.mechanicCountArgs<ExtArgs>;
            result: $Utils.Optional<MechanicCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      service: {
        payload: Prisma.$servicePayload<ExtArgs>;
        fields: Prisma.serviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.serviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.serviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          findFirst: {
            args: Prisma.serviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.serviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          findMany: {
            args: Prisma.serviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[];
          };
          create: {
            args: Prisma.serviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          createMany: {
            args: Prisma.serviceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.serviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          update: {
            args: Prisma.serviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          deleteMany: {
            args: Prisma.serviceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.serviceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.serviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService>;
          };
          groupBy: {
            args: Prisma.serviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.serviceCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number;
          };
        };
      };
      service_manager: {
        payload: Prisma.$service_managerPayload<ExtArgs>;
        fields: Prisma.service_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.service_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.service_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          findFirst: {
            args: Prisma.service_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.service_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          findMany: {
            args: Prisma.service_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>[];
          };
          create: {
            args: Prisma.service_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          createMany: {
            args: Prisma.service_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.service_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          update: {
            args: Prisma.service_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          deleteMany: {
            args: Prisma.service_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.service_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.service_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$service_managerPayload>;
          };
          aggregate: {
            args: Prisma.Service_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService_manager>;
          };
          groupBy: {
            args: Prisma.service_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Service_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.service_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Service_managerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    service: number;
  };

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | CustomerCountOutputTypeCountServiceArgs;
  };

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountServiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: serviceWhereInput;
  };

  /**
   * Count Type MechanicCountOutputType
   */

  export type MechanicCountOutputType = {
    service: number;
  };

  export type MechanicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | MechanicCountOutputTypeCountServiceArgs;
  };

  // Custom InputTypes

  /**
   * MechanicCountOutputType without action
   */
  export type MechanicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MechanicCountOutputType
     */
    select?: MechanicCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MechanicCountOutputType without action
   */
  export type MechanicCountOutputTypeCountServiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: serviceWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customer: number;
    mechanic: number;
    organization: number;
    service_manager: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    mechanic?: boolean | UserCountOutputTypeCountMechanicArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    service_manager?: boolean | UserCountOutputTypeCountService_managerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: mechanicWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountService_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: service_managerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    phone_number: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    name: string;
    address: string;
    phone_number: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        phone_number?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        service?: boolean | customer$serviceArgs<ExtArgs>;
        _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone_number?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    service?: boolean | customer$serviceArgs<ExtArgs>;
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      service: Prisma.$servicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string;
        phone_number: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    service<T extends customer$serviceArgs<ExtArgs> = {}>(
      args?: Subset<T, customer$serviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly name: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly phone_number: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer.service
   */
  export type customer$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    where?: serviceWhereInput;
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    cursor?: serviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model mechanic
   */

  export type AggregateMechanic = {
    _count: MechanicCountAggregateOutputType | null;
    _avg: MechanicAvgAggregateOutputType | null;
    _sum: MechanicSumAggregateOutputType | null;
    _min: MechanicMinAggregateOutputType | null;
    _max: MechanicMaxAggregateOutputType | null;
  };

  export type MechanicAvgAggregateOutputType = {
    experience_years: number | null;
  };

  export type MechanicSumAggregateOutputType = {
    experience_years: number | null;
  };

  export type MechanicMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    experience_years: number | null;
    specialization: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MechanicMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    experience_years: number | null;
    specialization: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MechanicCountAggregateOutputType = {
    id: number;
    name: number;
    experience_years: number;
    specialization: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MechanicAvgAggregateInputType = {
    experience_years?: true;
  };

  export type MechanicSumAggregateInputType = {
    experience_years?: true;
  };

  export type MechanicMinAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MechanicMaxAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MechanicCountAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MechanicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mechanic to aggregate.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mechanics
     **/
    _count?: true | MechanicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MechanicAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MechanicSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MechanicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MechanicMaxAggregateInputType;
  };

  export type GetMechanicAggregateType<T extends MechanicAggregateArgs> = {
    [P in keyof T & keyof AggregateMechanic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMechanic[P]>
      : GetScalarType<T[P], AggregateMechanic[P]>;
  };

  export type mechanicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mechanicWhereInput;
    orderBy?: mechanicOrderByWithAggregationInput | mechanicOrderByWithAggregationInput[];
    by: MechanicScalarFieldEnum[] | MechanicScalarFieldEnum;
    having?: mechanicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MechanicCountAggregateInputType | true;
    _avg?: MechanicAvgAggregateInputType;
    _sum?: MechanicSumAggregateInputType;
    _min?: MechanicMinAggregateInputType;
    _max?: MechanicMaxAggregateInputType;
  };

  export type MechanicGroupByOutputType = {
    id: string;
    name: string;
    experience_years: number;
    specialization: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: MechanicCountAggregateOutputType | null;
    _avg: MechanicAvgAggregateOutputType | null;
    _sum: MechanicSumAggregateOutputType | null;
    _min: MechanicMinAggregateOutputType | null;
    _max: MechanicMaxAggregateOutputType | null;
  };

  type GetMechanicGroupByPayload<T extends mechanicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MechanicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MechanicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MechanicGroupByOutputType[P]>
          : GetScalarType<T[P], MechanicGroupByOutputType[P]>;
      }
    >
  >;

  export type mechanicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        experience_years?: boolean;
        specialization?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        service?: boolean | mechanic$serviceArgs<ExtArgs>;
        _count?: boolean | MechanicCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['mechanic']
    >;

  export type mechanicSelectScalar = {
    id?: boolean;
    name?: boolean;
    experience_years?: boolean;
    specialization?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type mechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    service?: boolean | mechanic$serviceArgs<ExtArgs>;
    _count?: boolean | MechanicCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $mechanicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'mechanic';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      service: Prisma.$servicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        experience_years: number;
        specialization: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['mechanic']
    >;
    composites: {};
  };

  type mechanicGetPayload<S extends boolean | null | undefined | mechanicDefaultArgs> = $Result.GetResult<
    Prisma.$mechanicPayload,
    S
  >;

  type mechanicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    mechanicFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MechanicCountAggregateInputType | true;
  };

  export interface mechanicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mechanic']; meta: { name: 'mechanic' } };
    /**
     * Find zero or one Mechanic that matches the filter.
     * @param {mechanicFindUniqueArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends mechanicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicFindUniqueArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Mechanic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {mechanicFindUniqueOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends mechanicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Mechanic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindFirstArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends mechanicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindFirstArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Mechanic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindFirstOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends mechanicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Mechanics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mechanics
     * const mechanics = await prisma.mechanic.findMany()
     *
     * // Get first 10 Mechanics
     * const mechanics = await prisma.mechanic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mechanicWithIdOnly = await prisma.mechanic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends mechanicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Mechanic.
     * @param {mechanicCreateArgs} args - Arguments to create a Mechanic.
     * @example
     * // Create one Mechanic
     * const Mechanic = await prisma.mechanic.create({
     *   data: {
     *     // ... data to create a Mechanic
     *   }
     * })
     *
     **/
    create<T extends mechanicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicCreateArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Mechanics.
     *     @param {mechanicCreateManyArgs} args - Arguments to create many Mechanics.
     *     @example
     *     // Create many Mechanics
     *     const mechanic = await prisma.mechanic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends mechanicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Mechanic.
     * @param {mechanicDeleteArgs} args - Arguments to delete one Mechanic.
     * @example
     * // Delete one Mechanic
     * const Mechanic = await prisma.mechanic.delete({
     *   where: {
     *     // ... filter to delete one Mechanic
     *   }
     * })
     *
     **/
    delete<T extends mechanicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicDeleteArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Mechanic.
     * @param {mechanicUpdateArgs} args - Arguments to update one Mechanic.
     * @example
     * // Update one Mechanic
     * const mechanic = await prisma.mechanic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends mechanicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpdateArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Mechanics.
     * @param {mechanicDeleteManyArgs} args - Arguments to filter Mechanics to delete.
     * @example
     * // Delete a few Mechanics
     * const { count } = await prisma.mechanic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends mechanicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mechanics
     * const mechanic = await prisma.mechanic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends mechanicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Mechanic.
     * @param {mechanicUpsertArgs} args - Arguments to update or create a Mechanic.
     * @example
     * // Update or create a Mechanic
     * const mechanic = await prisma.mechanic.upsert({
     *   create: {
     *     // ... data to create a Mechanic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mechanic we want to update
     *   }
     * })
     **/
    upsert<T extends mechanicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpsertArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicCountArgs} args - Arguments to filter Mechanics to count.
     * @example
     * // Count the number of Mechanics
     * const count = await prisma.mechanic.count({
     *   where: {
     *     // ... the filter for the Mechanics we want to count
     *   }
     * })
     **/
    count<T extends mechanicCountArgs>(
      args?: Subset<T, mechanicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MechanicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MechanicAggregateArgs>(
      args: Subset<T, MechanicAggregateArgs>,
    ): Prisma.PrismaPromise<GetMechanicAggregateType<T>>;

    /**
     * Group by Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicGroupByArgs} args - Group by arguments.
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
      T extends mechanicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mechanicGroupByArgs['orderBy'] }
        : { orderBy?: mechanicGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, mechanicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMechanicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the mechanic model
     */
    readonly fields: mechanicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mechanic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mechanicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    service<T extends mechanic$serviceArgs<ExtArgs> = {}>(
      args?: Subset<T, mechanic$serviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the mechanic model
   */
  interface mechanicFieldRefs {
    readonly id: FieldRef<'mechanic', 'String'>;
    readonly name: FieldRef<'mechanic', 'String'>;
    readonly experience_years: FieldRef<'mechanic', 'Int'>;
    readonly specialization: FieldRef<'mechanic', 'String'>;
    readonly user_id: FieldRef<'mechanic', 'String'>;
    readonly created_at: FieldRef<'mechanic', 'DateTime'>;
    readonly updated_at: FieldRef<'mechanic', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * mechanic findUnique
   */
  export type mechanicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic findUniqueOrThrow
   */
  export type mechanicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic findFirst
   */
  export type mechanicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic findFirstOrThrow
   */
  export type mechanicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic findMany
   */
  export type mechanicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanics to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic create
   */
  export type mechanicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The data needed to create a mechanic.
     */
    data: XOR<mechanicCreateInput, mechanicUncheckedCreateInput>;
  };

  /**
   * mechanic createMany
   */
  export type mechanicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mechanics.
     */
    data: mechanicCreateManyInput | mechanicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * mechanic update
   */
  export type mechanicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The data needed to update a mechanic.
     */
    data: XOR<mechanicUpdateInput, mechanicUncheckedUpdateInput>;
    /**
     * Choose, which mechanic to update.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic updateMany
   */
  export type mechanicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mechanics.
     */
    data: XOR<mechanicUpdateManyMutationInput, mechanicUncheckedUpdateManyInput>;
    /**
     * Filter which mechanics to update
     */
    where?: mechanicWhereInput;
  };

  /**
   * mechanic upsert
   */
  export type mechanicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The filter to search for the mechanic to update in case it exists.
     */
    where: mechanicWhereUniqueInput;
    /**
     * In case the mechanic found by the `where` argument doesn't exist, create a new mechanic with this data.
     */
    create: XOR<mechanicCreateInput, mechanicUncheckedCreateInput>;
    /**
     * In case the mechanic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mechanicUpdateInput, mechanicUncheckedUpdateInput>;
  };

  /**
   * mechanic delete
   */
  export type mechanicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter which mechanic to delete.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic deleteMany
   */
  export type mechanicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mechanics to delete
     */
    where?: mechanicWhereInput;
  };

  /**
   * mechanic.service
   */
  export type mechanic$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    where?: serviceWhereInput;
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    cursor?: serviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * mechanic without action
   */
  export type mechanicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        phone_number?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
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
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
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
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly phone_number: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  export type ServiceAvgAggregateOutputType = {
    price: number | null;
  };

  export type ServiceSumAggregateOutputType = {
    price: number | null;
  };

  export type ServiceMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    mechanic_id: string | null;
    customer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    mechanic_id: string | null;
    customer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    mechanic_id: number;
    customer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ServiceAvgAggregateInputType = {
    price?: true;
  };

  export type ServiceSumAggregateInputType = {
    price?: true;
  };

  export type ServiceMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    mechanic_id?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    mechanic_id?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    mechanic_id?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned services
     **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceMaxAggregateInputType;
  };

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>;
  };

  export type serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput;
    orderBy?: serviceOrderByWithAggregationInput | serviceOrderByWithAggregationInput[];
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum;
    having?: serviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
  };

  export type ServiceGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    mechanic_id: string;
    customer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  type GetServiceGroupByPayload<T extends serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ServiceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
          : GetScalarType<T[P], ServiceGroupByOutputType[P]>;
      }
    >
  >;

  export type serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      mechanic_id?: boolean;
      customer_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      customer?: boolean | customerDefaultArgs<ExtArgs>;
      mechanic?: boolean | mechanicDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type serviceSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    mechanic_id?: boolean;
    customer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>;
    mechanic?: boolean | mechanicDefaultArgs<ExtArgs>;
  };

  export type $servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'service';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>;
      mechanic: Prisma.$mechanicPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price: number;
        mechanic_id: string;
        customer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['service']
    >;
    composites: {};
  };

  type serviceGetPayload<S extends boolean | null | undefined | serviceDefaultArgs> = $Result.GetResult<
    Prisma.$servicePayload,
    S
  >;

  type serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    serviceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ServiceCountAggregateInputType | true;
  };

  export interface serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service']; meta: { name: 'service' } };
    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends serviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, serviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__serviceClient<
      $Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends serviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindFirstArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends serviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     **/
    create<T extends serviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, serviceCreateArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Services.
     *     @param {serviceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends serviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     **/
    delete<T extends serviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, serviceDeleteArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends serviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpdateArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends serviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends serviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     **/
    upsert<T extends serviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpsertArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(
      args: Subset<T, ServiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceAggregateType<T>>;

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceGroupByArgs} args - Group by arguments.
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
      T extends serviceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceGroupByArgs['orderBy'] }
        : { orderBy?: serviceGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, serviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the service model
     */
    readonly fields: serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends customerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, customerDefaultArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    mechanic<T extends mechanicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, mechanicDefaultArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the service model
   */
  interface serviceFieldRefs {
    readonly id: FieldRef<'service', 'String'>;
    readonly name: FieldRef<'service', 'String'>;
    readonly description: FieldRef<'service', 'String'>;
    readonly price: FieldRef<'service', 'Int'>;
    readonly mechanic_id: FieldRef<'service', 'String'>;
    readonly customer_id: FieldRef<'service', 'String'>;
    readonly created_at: FieldRef<'service', 'DateTime'>;
    readonly updated_at: FieldRef<'service', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * service findUnique
   */
  export type serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service findFirst
   */
  export type serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service findMany
   */
  export type serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service create
   */
  export type serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>;
  };

  /**
   * service createMany
   */
  export type serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * service update
   */
  export type serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>;
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>;
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput;
  };

  /**
   * service upsert
   */
  export type serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput;
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>;
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>;
  };

  /**
   * service delete
   */
  export type serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput;
  };

  /**
   * service without action
   */
  export type serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
  };

  /**
   * Model service_manager
   */

  export type AggregateService_manager = {
    _count: Service_managerCountAggregateOutputType | null;
    _avg: Service_managerAvgAggregateOutputType | null;
    _sum: Service_managerSumAggregateOutputType | null;
    _min: Service_managerMinAggregateOutputType | null;
    _max: Service_managerMaxAggregateOutputType | null;
  };

  export type Service_managerAvgAggregateOutputType = {
    experience_years: number | null;
  };

  export type Service_managerSumAggregateOutputType = {
    experience_years: number | null;
  };

  export type Service_managerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    experience_years: number | null;
    user_id: string | null;
    address: string | null;
    phone_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Service_managerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    experience_years: number | null;
    user_id: string | null;
    address: string | null;
    phone_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Service_managerCountAggregateOutputType = {
    id: number;
    name: number;
    experience_years: number;
    user_id: number;
    address: number;
    phone_number: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Service_managerAvgAggregateInputType = {
    experience_years?: true;
  };

  export type Service_managerSumAggregateInputType = {
    experience_years?: true;
  };

  export type Service_managerMinAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    user_id?: true;
    address?: true;
    phone_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Service_managerMaxAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    user_id?: true;
    address?: true;
    phone_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Service_managerCountAggregateInputType = {
    id?: true;
    name?: true;
    experience_years?: true;
    user_id?: true;
    address?: true;
    phone_number?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Service_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service_manager to aggregate.
     */
    where?: service_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of service_managers to fetch.
     */
    orderBy?: service_managerOrderByWithRelationInput | service_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: service_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` service_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` service_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned service_managers
     **/
    _count?: true | Service_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Service_managerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Service_managerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Service_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Service_managerMaxAggregateInputType;
  };

  export type GetService_managerAggregateType<T extends Service_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateService_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_manager[P]>
      : GetScalarType<T[P], AggregateService_manager[P]>;
  };

  export type service_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: service_managerWhereInput;
    orderBy?: service_managerOrderByWithAggregationInput | service_managerOrderByWithAggregationInput[];
    by: Service_managerScalarFieldEnum[] | Service_managerScalarFieldEnum;
    having?: service_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Service_managerCountAggregateInputType | true;
    _avg?: Service_managerAvgAggregateInputType;
    _sum?: Service_managerSumAggregateInputType;
    _min?: Service_managerMinAggregateInputType;
    _max?: Service_managerMaxAggregateInputType;
  };

  export type Service_managerGroupByOutputType = {
    id: string;
    name: string;
    experience_years: number;
    user_id: string;
    address: string;
    phone_number: string;
    created_at: Date;
    updated_at: Date;
    _count: Service_managerCountAggregateOutputType | null;
    _avg: Service_managerAvgAggregateOutputType | null;
    _sum: Service_managerSumAggregateOutputType | null;
    _min: Service_managerMinAggregateOutputType | null;
    _max: Service_managerMaxAggregateOutputType | null;
  };

  type GetService_managerGroupByPayload<T extends service_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Service_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Service_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Service_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type service_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        experience_years?: boolean;
        user_id?: boolean;
        address?: boolean;
        phone_number?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['service_manager']
    >;

  export type service_managerSelectScalar = {
    id?: boolean;
    name?: boolean;
    experience_years?: boolean;
    user_id?: boolean;
    address?: boolean;
    phone_number?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type service_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $service_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'service_manager';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        experience_years: number;
        user_id: string;
        address: string;
        phone_number: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['service_manager']
    >;
    composites: {};
  };

  type service_managerGetPayload<S extends boolean | null | undefined | service_managerDefaultArgs> = $Result.GetResult<
    Prisma.$service_managerPayload,
    S
  >;

  type service_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    service_managerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Service_managerCountAggregateInputType | true;
  };

  export interface service_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service_manager']; meta: { name: 'service_manager' } };
    /**
     * Find zero or one Service_manager that matches the filter.
     * @param {service_managerFindUniqueArgs} args - Arguments to find a Service_manager
     * @example
     * // Get one Service_manager
     * const service_manager = await prisma.service_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends service_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Service_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {service_managerFindUniqueOrThrowArgs} args - Arguments to find a Service_manager
     * @example
     * // Get one Service_manager
     * const service_manager = await prisma.service_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends service_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Service_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerFindFirstArgs} args - Arguments to find a Service_manager
     * @example
     * // Get one Service_manager
     * const service_manager = await prisma.service_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends service_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Service_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerFindFirstOrThrowArgs} args - Arguments to find a Service_manager
     * @example
     * // Get one Service_manager
     * const service_manager = await prisma.service_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends service_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Service_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_managers
     * const service_managers = await prisma.service_manager.findMany()
     *
     * // Get first 10 Service_managers
     * const service_managers = await prisma.service_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const service_managerWithIdOnly = await prisma.service_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends service_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Service_manager.
     * @param {service_managerCreateArgs} args - Arguments to create a Service_manager.
     * @example
     * // Create one Service_manager
     * const Service_manager = await prisma.service_manager.create({
     *   data: {
     *     // ... data to create a Service_manager
     *   }
     * })
     *
     **/
    create<T extends service_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerCreateArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Service_managers.
     *     @param {service_managerCreateManyArgs} args - Arguments to create many Service_managers.
     *     @example
     *     // Create many Service_managers
     *     const service_manager = await prisma.service_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends service_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Service_manager.
     * @param {service_managerDeleteArgs} args - Arguments to delete one Service_manager.
     * @example
     * // Delete one Service_manager
     * const Service_manager = await prisma.service_manager.delete({
     *   where: {
     *     // ... filter to delete one Service_manager
     *   }
     * })
     *
     **/
    delete<T extends service_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerDeleteArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Service_manager.
     * @param {service_managerUpdateArgs} args - Arguments to update one Service_manager.
     * @example
     * // Update one Service_manager
     * const service_manager = await prisma.service_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends service_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerUpdateArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Service_managers.
     * @param {service_managerDeleteManyArgs} args - Arguments to filter Service_managers to delete.
     * @example
     * // Delete a few Service_managers
     * const { count } = await prisma.service_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends service_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Service_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_managers
     * const service_manager = await prisma.service_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends service_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Service_manager.
     * @param {service_managerUpsertArgs} args - Arguments to update or create a Service_manager.
     * @example
     * // Update or create a Service_manager
     * const service_manager = await prisma.service_manager.upsert({
     *   create: {
     *     // ... data to create a Service_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_manager we want to update
     *   }
     * })
     **/
    upsert<T extends service_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, service_managerUpsertArgs<ExtArgs>>,
    ): Prisma__service_managerClient<
      $Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Service_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerCountArgs} args - Arguments to filter Service_managers to count.
     * @example
     * // Count the number of Service_managers
     * const count = await prisma.service_manager.count({
     *   where: {
     *     // ... the filter for the Service_managers we want to count
     *   }
     * })
     **/
    count<T extends service_managerCountArgs>(
      args?: Subset<T, service_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Service_managerAggregateArgs>(
      args: Subset<T, Service_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetService_managerAggregateType<T>>;

    /**
     * Group by Service_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_managerGroupByArgs} args - Group by arguments.
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
      T extends service_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: service_managerGroupByArgs['orderBy'] }
        : { orderBy?: service_managerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, service_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetService_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the service_manager model
     */
    readonly fields: service_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__service_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the service_manager model
   */
  interface service_managerFieldRefs {
    readonly id: FieldRef<'service_manager', 'String'>;
    readonly name: FieldRef<'service_manager', 'String'>;
    readonly experience_years: FieldRef<'service_manager', 'Int'>;
    readonly user_id: FieldRef<'service_manager', 'String'>;
    readonly address: FieldRef<'service_manager', 'String'>;
    readonly phone_number: FieldRef<'service_manager', 'String'>;
    readonly created_at: FieldRef<'service_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'service_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * service_manager findUnique
   */
  export type service_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * Filter, which service_manager to fetch.
     */
    where: service_managerWhereUniqueInput;
  };

  /**
   * service_manager findUniqueOrThrow
   */
  export type service_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the service_manager
       */
      select?: service_managerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: service_managerInclude<ExtArgs> | null;
      /**
       * Filter, which service_manager to fetch.
       */
      where: service_managerWhereUniqueInput;
    };

  /**
   * service_manager findFirst
   */
  export type service_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * Filter, which service_manager to fetch.
     */
    where?: service_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of service_managers to fetch.
     */
    orderBy?: service_managerOrderByWithRelationInput | service_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for service_managers.
     */
    cursor?: service_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` service_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` service_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of service_managers.
     */
    distinct?: Service_managerScalarFieldEnum | Service_managerScalarFieldEnum[];
  };

  /**
   * service_manager findFirstOrThrow
   */
  export type service_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the service_manager
       */
      select?: service_managerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: service_managerInclude<ExtArgs> | null;
      /**
       * Filter, which service_manager to fetch.
       */
      where?: service_managerWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of service_managers to fetch.
       */
      orderBy?: service_managerOrderByWithRelationInput | service_managerOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for service_managers.
       */
      cursor?: service_managerWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` service_managers from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` service_managers.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of service_managers.
       */
      distinct?: Service_managerScalarFieldEnum | Service_managerScalarFieldEnum[];
    };

  /**
   * service_manager findMany
   */
  export type service_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * Filter, which service_managers to fetch.
     */
    where?: service_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of service_managers to fetch.
     */
    orderBy?: service_managerOrderByWithRelationInput | service_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing service_managers.
     */
    cursor?: service_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` service_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` service_managers.
     */
    skip?: number;
    distinct?: Service_managerScalarFieldEnum | Service_managerScalarFieldEnum[];
  };

  /**
   * service_manager create
   */
  export type service_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a service_manager.
     */
    data: XOR<service_managerCreateInput, service_managerUncheckedCreateInput>;
  };

  /**
   * service_manager createMany
   */
  export type service_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many service_managers.
     */
    data: service_managerCreateManyInput | service_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * service_manager update
   */
  export type service_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a service_manager.
     */
    data: XOR<service_managerUpdateInput, service_managerUncheckedUpdateInput>;
    /**
     * Choose, which service_manager to update.
     */
    where: service_managerWhereUniqueInput;
  };

  /**
   * service_manager updateMany
   */
  export type service_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update service_managers.
     */
    data: XOR<service_managerUpdateManyMutationInput, service_managerUncheckedUpdateManyInput>;
    /**
     * Filter which service_managers to update
     */
    where?: service_managerWhereInput;
  };

  /**
   * service_manager upsert
   */
  export type service_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the service_manager to update in case it exists.
     */
    where: service_managerWhereUniqueInput;
    /**
     * In case the service_manager found by the `where` argument doesn't exist, create a new service_manager with this data.
     */
    create: XOR<service_managerCreateInput, service_managerUncheckedCreateInput>;
    /**
     * In case the service_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<service_managerUpdateInput, service_managerUncheckedUpdateInput>;
  };

  /**
   * service_manager delete
   */
  export type service_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    /**
     * Filter which service_manager to delete.
     */
    where: service_managerWhereUniqueInput;
  };

  /**
   * service_manager deleteMany
   */
  export type service_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service_managers to delete
     */
    where?: service_managerWhereInput;
  };

  /**
   * service_manager without action
   */
  export type service_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      customer?: boolean | user$customerArgs<ExtArgs>;
      mechanic?: boolean | user$mechanicArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      service_manager?: boolean | user$service_managerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | user$customerArgs<ExtArgs>;
    mechanic?: boolean | user$mechanicArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    service_manager?: boolean | user$service_managerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[];
      mechanic: Prisma.$mechanicPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      service_manager: Prisma.$service_managerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    mechanic<T extends user$mechanicArgs<ExtArgs> = {}>(
      args?: Subset<T, user$mechanicArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    service_manager<T extends user$service_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$service_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$service_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.mechanic
   */
  export type user$mechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    where?: mechanicWhereInput;
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    cursor?: mechanicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.service_manager
   */
  export type user$service_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_manager
     */
    select?: service_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_managerInclude<ExtArgs> | null;
    where?: service_managerWhereInput;
    orderBy?: service_managerOrderByWithRelationInput | service_managerOrderByWithRelationInput[];
    cursor?: service_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Service_managerScalarFieldEnum | Service_managerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    phone_number: 'phone_number';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const MechanicScalarFieldEnum: {
    id: 'id';
    name: 'name';
    experience_years: 'experience_years';
    specialization: 'specialization';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MechanicScalarFieldEnum = (typeof MechanicScalarFieldEnum)[keyof typeof MechanicScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const ServiceScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    mechanic_id: 'mechanic_id';
    customer_id: 'customer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];

  export const Service_managerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    experience_years: 'experience_years';
    user_id: 'user_id';
    address: 'address';
    phone_number: 'phone_number';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Service_managerScalarFieldEnum =
    (typeof Service_managerScalarFieldEnum)[keyof typeof Service_managerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    phone_number?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    service?: ServiceListRelationFilter;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    service?: serviceOrderByRelationAggregateInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      name?: StringFilter<'customer'> | string;
      address?: StringFilter<'customer'> | string;
      phone_number?: StringFilter<'customer'> | string;
      user_id?: UuidFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      service?: ServiceListRelationFilter;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    name?: StringWithAggregatesFilter<'customer'> | string;
    address?: StringWithAggregatesFilter<'customer'> | string;
    phone_number?: StringWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type mechanicWhereInput = {
    AND?: mechanicWhereInput | mechanicWhereInput[];
    OR?: mechanicWhereInput[];
    NOT?: mechanicWhereInput | mechanicWhereInput[];
    id?: UuidFilter<'mechanic'> | string;
    name?: StringFilter<'mechanic'> | string;
    experience_years?: IntFilter<'mechanic'> | number;
    specialization?: StringFilter<'mechanic'> | string;
    user_id?: UuidFilter<'mechanic'> | string;
    created_at?: DateTimeFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeFilter<'mechanic'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    service?: ServiceListRelationFilter;
  };

  export type mechanicOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    service?: serviceOrderByRelationAggregateInput;
  };

  export type mechanicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: mechanicWhereInput | mechanicWhereInput[];
      OR?: mechanicWhereInput[];
      NOT?: mechanicWhereInput | mechanicWhereInput[];
      name?: StringFilter<'mechanic'> | string;
      experience_years?: IntFilter<'mechanic'> | number;
      specialization?: StringFilter<'mechanic'> | string;
      user_id?: UuidFilter<'mechanic'> | string;
      created_at?: DateTimeFilter<'mechanic'> | Date | string;
      updated_at?: DateTimeFilter<'mechanic'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      service?: ServiceListRelationFilter;
    },
    'id'
  >;

  export type mechanicOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: mechanicCountOrderByAggregateInput;
    _avg?: mechanicAvgOrderByAggregateInput;
    _max?: mechanicMaxOrderByAggregateInput;
    _min?: mechanicMinOrderByAggregateInput;
    _sum?: mechanicSumOrderByAggregateInput;
  };

  export type mechanicScalarWhereWithAggregatesInput = {
    AND?: mechanicScalarWhereWithAggregatesInput | mechanicScalarWhereWithAggregatesInput[];
    OR?: mechanicScalarWhereWithAggregatesInput[];
    NOT?: mechanicScalarWhereWithAggregatesInput | mechanicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'mechanic'> | string;
    name?: StringWithAggregatesFilter<'mechanic'> | string;
    experience_years?: IntWithAggregatesFilter<'mechanic'> | number;
    specialization?: StringWithAggregatesFilter<'mechanic'> | string;
    user_id?: UuidWithAggregatesFilter<'mechanic'> | string;
    created_at?: DateTimeWithAggregatesFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'mechanic'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    phone_number?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      phone_number?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type serviceWhereInput = {
    AND?: serviceWhereInput | serviceWhereInput[];
    OR?: serviceWhereInput[];
    NOT?: serviceWhereInput | serviceWhereInput[];
    id?: UuidFilter<'service'> | string;
    name?: StringFilter<'service'> | string;
    description?: StringNullableFilter<'service'> | string | null;
    price?: IntFilter<'service'> | number;
    mechanic_id?: UuidFilter<'service'> | string;
    customer_id?: UuidFilter<'service'> | string;
    created_at?: DateTimeFilter<'service'> | Date | string;
    updated_at?: DateTimeFilter<'service'> | Date | string;
    customer?: XOR<CustomerRelationFilter, customerWhereInput>;
    mechanic?: XOR<MechanicRelationFilter, mechanicWhereInput>;
  };

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    mechanic_id?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByWithRelationInput;
    mechanic?: mechanicOrderByWithRelationInput;
  };

  export type serviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: serviceWhereInput | serviceWhereInput[];
      OR?: serviceWhereInput[];
      NOT?: serviceWhereInput | serviceWhereInput[];
      name?: StringFilter<'service'> | string;
      description?: StringNullableFilter<'service'> | string | null;
      price?: IntFilter<'service'> | number;
      mechanic_id?: UuidFilter<'service'> | string;
      customer_id?: UuidFilter<'service'> | string;
      created_at?: DateTimeFilter<'service'> | Date | string;
      updated_at?: DateTimeFilter<'service'> | Date | string;
      customer?: XOR<CustomerRelationFilter, customerWhereInput>;
      mechanic?: XOR<MechanicRelationFilter, mechanicWhereInput>;
    },
    'id'
  >;

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    mechanic_id?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: serviceCountOrderByAggregateInput;
    _avg?: serviceAvgOrderByAggregateInput;
    _max?: serviceMaxOrderByAggregateInput;
    _min?: serviceMinOrderByAggregateInput;
    _sum?: serviceSumOrderByAggregateInput;
  };

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[];
    OR?: serviceScalarWhereWithAggregatesInput[];
    NOT?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'service'> | string;
    name?: StringWithAggregatesFilter<'service'> | string;
    description?: StringNullableWithAggregatesFilter<'service'> | string | null;
    price?: IntWithAggregatesFilter<'service'> | number;
    mechanic_id?: UuidWithAggregatesFilter<'service'> | string;
    customer_id?: UuidWithAggregatesFilter<'service'> | string;
    created_at?: DateTimeWithAggregatesFilter<'service'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'service'> | Date | string;
  };

  export type service_managerWhereInput = {
    AND?: service_managerWhereInput | service_managerWhereInput[];
    OR?: service_managerWhereInput[];
    NOT?: service_managerWhereInput | service_managerWhereInput[];
    id?: UuidFilter<'service_manager'> | string;
    name?: StringFilter<'service_manager'> | string;
    experience_years?: IntFilter<'service_manager'> | number;
    user_id?: UuidFilter<'service_manager'> | string;
    address?: StringFilter<'service_manager'> | string;
    phone_number?: StringFilter<'service_manager'> | string;
    created_at?: DateTimeFilter<'service_manager'> | Date | string;
    updated_at?: DateTimeFilter<'service_manager'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type service_managerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type service_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: service_managerWhereInput | service_managerWhereInput[];
      OR?: service_managerWhereInput[];
      NOT?: service_managerWhereInput | service_managerWhereInput[];
      name?: StringFilter<'service_manager'> | string;
      experience_years?: IntFilter<'service_manager'> | number;
      user_id?: UuidFilter<'service_manager'> | string;
      address?: StringFilter<'service_manager'> | string;
      phone_number?: StringFilter<'service_manager'> | string;
      created_at?: DateTimeFilter<'service_manager'> | Date | string;
      updated_at?: DateTimeFilter<'service_manager'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type service_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: service_managerCountOrderByAggregateInput;
    _avg?: service_managerAvgOrderByAggregateInput;
    _max?: service_managerMaxOrderByAggregateInput;
    _min?: service_managerMinOrderByAggregateInput;
    _sum?: service_managerSumOrderByAggregateInput;
  };

  export type service_managerScalarWhereWithAggregatesInput = {
    AND?: service_managerScalarWhereWithAggregatesInput | service_managerScalarWhereWithAggregatesInput[];
    OR?: service_managerScalarWhereWithAggregatesInput[];
    NOT?: service_managerScalarWhereWithAggregatesInput | service_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'service_manager'> | string;
    name?: StringWithAggregatesFilter<'service_manager'> | string;
    experience_years?: IntWithAggregatesFilter<'service_manager'> | number;
    user_id?: UuidWithAggregatesFilter<'service_manager'> | string;
    address?: StringWithAggregatesFilter<'service_manager'> | string;
    phone_number?: StringWithAggregatesFilter<'service_manager'> | string;
    created_at?: DateTimeWithAggregatesFilter<'service_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'service_manager'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    customer?: CustomerListRelationFilter;
    mechanic?: MechanicListRelationFilter;
    organization?: OrganizationListRelationFilter;
    service_manager?: Service_managerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByRelationAggregateInput;
    mechanic?: mechanicOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    service_manager?: service_managerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      customer?: CustomerListRelationFilter;
      mechanic?: MechanicListRelationFilter;
      organization?: OrganizationListRelationFilter;
      service_manager?: Service_managerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
    service?: serviceCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
    service?: serviceUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerCreateManyInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicCreateInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMechanicInput;
    service?: serviceCreateNestedManyWithoutMechanicInput;
  };

  export type mechanicUncheckedCreateInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceUncheckedCreateNestedManyWithoutMechanicInput;
  };

  export type mechanicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMechanicNestedInput;
    service?: serviceUpdateManyWithoutMechanicNestedInput;
  };

  export type mechanicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUncheckedUpdateManyWithoutMechanicNestedInput;
  };

  export type mechanicCreateManyInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type serviceCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutServiceInput;
    mechanic: mechanicCreateNestedOneWithoutServiceInput;
  };

  export type serviceUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    mechanic_id: string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutServiceNestedInput;
    mechanic?: mechanicUpdateOneRequiredWithoutServiceNestedInput;
  };

  export type serviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    mechanic_id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    mechanic_id: string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    mechanic_id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type service_managerCreateInput = {
    id?: string;
    name: string;
    experience_years: number;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutService_managerInput;
  };

  export type service_managerUncheckedCreateInput = {
    id?: string;
    name: string;
    experience_years: number;
    user_id: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type service_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutService_managerNestedInput;
  };

  export type service_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type service_managerCreateManyInput = {
    id?: string;
    name: string;
    experience_years: number;
    user_id: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type service_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type service_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    service_manager?: service_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    service_manager?: service_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ServiceListRelationFilter = {
    every?: serviceWhereInput;
    some?: serviceWhereInput;
    none?: serviceWhereInput;
  };

  export type serviceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type mechanicCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicAvgOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type mechanicMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicSumOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type CustomerRelationFilter = {
    is?: customerWhereInput;
    isNot?: customerWhereInput;
  };

  export type MechanicRelationFilter = {
    is?: mechanicWhereInput;
    isNot?: mechanicWhereInput;
  };

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    mechanic_id?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    mechanic_id?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    mechanic_id?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type service_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type service_managerAvgOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type service_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type service_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    experience_years?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type service_managerSumOrderByAggregateInput = {
    experience_years?: SortOrder;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type MechanicListRelationFilter = {
    every?: mechanicWhereInput;
    some?: mechanicWhereInput;
    none?: mechanicWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type Service_managerListRelationFilter = {
    every?: service_managerWhereInput;
    some?: service_managerWhereInput;
    none?: service_managerWhereInput;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type mechanicOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type service_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type serviceCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>
      | serviceCreateWithoutCustomerInput[]
      | serviceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutCustomerInput | serviceCreateOrConnectWithoutCustomerInput[];
    createMany?: serviceCreateManyCustomerInputEnvelope;
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
  };

  export type serviceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>
      | serviceCreateWithoutCustomerInput[]
      | serviceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutCustomerInput | serviceCreateOrConnectWithoutCustomerInput[];
    createMany?: serviceCreateManyCustomerInputEnvelope;
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type serviceUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>
      | serviceCreateWithoutCustomerInput[]
      | serviceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutCustomerInput | serviceCreateOrConnectWithoutCustomerInput[];
    upsert?: serviceUpsertWithWhereUniqueWithoutCustomerInput | serviceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: serviceCreateManyCustomerInputEnvelope;
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    update?: serviceUpdateWithWhereUniqueWithoutCustomerInput | serviceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: serviceUpdateManyWithWhereWithoutCustomerInput | serviceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[];
  };

  export type serviceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>
      | serviceCreateWithoutCustomerInput[]
      | serviceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutCustomerInput | serviceCreateOrConnectWithoutCustomerInput[];
    upsert?: serviceUpsertWithWhereUniqueWithoutCustomerInput | serviceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: serviceCreateManyCustomerInputEnvelope;
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    update?: serviceUpdateWithWhereUniqueWithoutCustomerInput | serviceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: serviceUpdateManyWithWhereWithoutCustomerInput | serviceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutMechanicInput = {
    create?: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    connectOrCreate?: userCreateOrConnectWithoutMechanicInput;
    connect?: userWhereUniqueInput;
  };

  export type serviceCreateNestedManyWithoutMechanicInput = {
    create?:
      | XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>
      | serviceCreateWithoutMechanicInput[]
      | serviceUncheckedCreateWithoutMechanicInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutMechanicInput | serviceCreateOrConnectWithoutMechanicInput[];
    createMany?: serviceCreateManyMechanicInputEnvelope;
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
  };

  export type serviceUncheckedCreateNestedManyWithoutMechanicInput = {
    create?:
      | XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>
      | serviceCreateWithoutMechanicInput[]
      | serviceUncheckedCreateWithoutMechanicInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutMechanicInput | serviceCreateOrConnectWithoutMechanicInput[];
    createMany?: serviceCreateManyMechanicInputEnvelope;
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutMechanicNestedInput = {
    create?: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    connectOrCreate?: userCreateOrConnectWithoutMechanicInput;
    upsert?: userUpsertWithoutMechanicInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMechanicInput, userUpdateWithoutMechanicInput>,
      userUncheckedUpdateWithoutMechanicInput
    >;
  };

  export type serviceUpdateManyWithoutMechanicNestedInput = {
    create?:
      | XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>
      | serviceCreateWithoutMechanicInput[]
      | serviceUncheckedCreateWithoutMechanicInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutMechanicInput | serviceCreateOrConnectWithoutMechanicInput[];
    upsert?: serviceUpsertWithWhereUniqueWithoutMechanicInput | serviceUpsertWithWhereUniqueWithoutMechanicInput[];
    createMany?: serviceCreateManyMechanicInputEnvelope;
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    update?: serviceUpdateWithWhereUniqueWithoutMechanicInput | serviceUpdateWithWhereUniqueWithoutMechanicInput[];
    updateMany?: serviceUpdateManyWithWhereWithoutMechanicInput | serviceUpdateManyWithWhereWithoutMechanicInput[];
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[];
  };

  export type serviceUncheckedUpdateManyWithoutMechanicNestedInput = {
    create?:
      | XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>
      | serviceCreateWithoutMechanicInput[]
      | serviceUncheckedCreateWithoutMechanicInput[];
    connectOrCreate?: serviceCreateOrConnectWithoutMechanicInput | serviceCreateOrConnectWithoutMechanicInput[];
    upsert?: serviceUpsertWithWhereUniqueWithoutMechanicInput | serviceUpsertWithWhereUniqueWithoutMechanicInput[];
    createMany?: serviceCreateManyMechanicInputEnvelope;
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[];
    update?: serviceUpdateWithWhereUniqueWithoutMechanicInput | serviceUpdateWithWhereUniqueWithoutMechanicInput[];
    updateMany?: serviceUpdateManyWithWhereWithoutMechanicInput | serviceUpdateManyWithWhereWithoutMechanicInput[];
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type customerCreateNestedOneWithoutServiceInput = {
    create?: XOR<customerCreateWithoutServiceInput, customerUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: customerCreateOrConnectWithoutServiceInput;
    connect?: customerWhereUniqueInput;
  };

  export type mechanicCreateNestedOneWithoutServiceInput = {
    create?: XOR<mechanicCreateWithoutServiceInput, mechanicUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: mechanicCreateOrConnectWithoutServiceInput;
    connect?: mechanicWhereUniqueInput;
  };

  export type customerUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<customerCreateWithoutServiceInput, customerUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: customerCreateOrConnectWithoutServiceInput;
    upsert?: customerUpsertWithoutServiceInput;
    connect?: customerWhereUniqueInput;
    update?: XOR<
      XOR<customerUpdateToOneWithWhereWithoutServiceInput, customerUpdateWithoutServiceInput>,
      customerUncheckedUpdateWithoutServiceInput
    >;
  };

  export type mechanicUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<mechanicCreateWithoutServiceInput, mechanicUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: mechanicCreateOrConnectWithoutServiceInput;
    upsert?: mechanicUpsertWithoutServiceInput;
    connect?: mechanicWhereUniqueInput;
    update?: XOR<
      XOR<mechanicUpdateToOneWithWhereWithoutServiceInput, mechanicUpdateWithoutServiceInput>,
      mechanicUncheckedUpdateWithoutServiceInput
    >;
  };

  export type userCreateNestedOneWithoutService_managerInput = {
    create?: XOR<userCreateWithoutService_managerInput, userUncheckedCreateWithoutService_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutService_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutService_managerNestedInput = {
    create?: XOR<userCreateWithoutService_managerInput, userUncheckedCreateWithoutService_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutService_managerInput;
    upsert?: userUpsertWithoutService_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutService_managerInput, userUpdateWithoutService_managerInput>,
      userUncheckedUpdateWithoutService_managerInput
    >;
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type mechanicCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type service_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>
      | service_managerCreateWithoutUserInput[]
      | service_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: service_managerCreateOrConnectWithoutUserInput | service_managerCreateOrConnectWithoutUserInput[];
    createMany?: service_managerCreateManyUserInputEnvelope;
    connect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type mechanicUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type service_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>
      | service_managerCreateWithoutUserInput[]
      | service_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: service_managerCreateOrConnectWithoutUserInput | service_managerCreateOrConnectWithoutUserInput[];
    createMany?: service_managerCreateManyUserInputEnvelope;
    connect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type mechanicUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    upsert?: mechanicUpsertWithWhereUniqueWithoutUserInput | mechanicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    set?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    disconnect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    delete?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    update?: mechanicUpdateWithWhereUniqueWithoutUserInput | mechanicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: mechanicUpdateManyWithWhereWithoutUserInput | mechanicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type service_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>
      | service_managerCreateWithoutUserInput[]
      | service_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: service_managerCreateOrConnectWithoutUserInput | service_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | service_managerUpsertWithWhereUniqueWithoutUserInput
      | service_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: service_managerCreateManyUserInputEnvelope;
    set?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    disconnect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    delete?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    connect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    update?:
      | service_managerUpdateWithWhereUniqueWithoutUserInput
      | service_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | service_managerUpdateManyWithWhereWithoutUserInput
      | service_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: service_managerScalarWhereInput | service_managerScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type mechanicUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    upsert?: mechanicUpsertWithWhereUniqueWithoutUserInput | mechanicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    set?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    disconnect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    delete?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    update?: mechanicUpdateWithWhereUniqueWithoutUserInput | mechanicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: mechanicUpdateManyWithWhereWithoutUserInput | mechanicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type service_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>
      | service_managerCreateWithoutUserInput[]
      | service_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: service_managerCreateOrConnectWithoutUserInput | service_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | service_managerUpsertWithWhereUniqueWithoutUserInput
      | service_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: service_managerCreateManyUserInputEnvelope;
    set?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    disconnect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    delete?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    connect?: service_managerWhereUniqueInput | service_managerWhereUniqueInput[];
    update?:
      | service_managerUpdateWithWhereUniqueWithoutUserInput
      | service_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | service_managerUpdateManyWithWhereWithoutUserInput
      | service_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: service_managerScalarWhereInput | service_managerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    service_manager?: service_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    service_manager?: service_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type serviceCreateWithoutCustomerInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    mechanic: mechanicCreateNestedOneWithoutServiceInput;
  };

  export type serviceUncheckedCreateWithoutCustomerInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    mechanic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceCreateOrConnectWithoutCustomerInput = {
    where: serviceWhereUniqueInput;
    create: XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>;
  };

  export type serviceCreateManyCustomerInputEnvelope = {
    data: serviceCreateManyCustomerInput | serviceCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type serviceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: serviceWhereUniqueInput;
    update: XOR<serviceUpdateWithoutCustomerInput, serviceUncheckedUpdateWithoutCustomerInput>;
    create: XOR<serviceCreateWithoutCustomerInput, serviceUncheckedCreateWithoutCustomerInput>;
  };

  export type serviceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: serviceWhereUniqueInput;
    data: XOR<serviceUpdateWithoutCustomerInput, serviceUncheckedUpdateWithoutCustomerInput>;
  };

  export type serviceUpdateManyWithWhereWithoutCustomerInput = {
    where: serviceScalarWhereInput;
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type serviceScalarWhereInput = {
    AND?: serviceScalarWhereInput | serviceScalarWhereInput[];
    OR?: serviceScalarWhereInput[];
    NOT?: serviceScalarWhereInput | serviceScalarWhereInput[];
    id?: UuidFilter<'service'> | string;
    name?: StringFilter<'service'> | string;
    description?: StringNullableFilter<'service'> | string | null;
    price?: IntFilter<'service'> | number;
    mechanic_id?: UuidFilter<'service'> | string;
    customer_id?: UuidFilter<'service'> | string;
    created_at?: DateTimeFilter<'service'> | Date | string;
    updated_at?: DateTimeFilter<'service'> | Date | string;
  };

  export type userCreateWithoutMechanicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    service_manager?: service_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMechanicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    service_manager?: service_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMechanicInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
  };

  export type serviceCreateWithoutMechanicInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutServiceInput;
  };

  export type serviceUncheckedCreateWithoutMechanicInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceCreateOrConnectWithoutMechanicInput = {
    where: serviceWhereUniqueInput;
    create: XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>;
  };

  export type serviceCreateManyMechanicInputEnvelope = {
    data: serviceCreateManyMechanicInput | serviceCreateManyMechanicInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutMechanicInput = {
    update: XOR<userUpdateWithoutMechanicInput, userUncheckedUpdateWithoutMechanicInput>;
    create: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMechanicInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMechanicInput, userUncheckedUpdateWithoutMechanicInput>;
  };

  export type userUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type serviceUpsertWithWhereUniqueWithoutMechanicInput = {
    where: serviceWhereUniqueInput;
    update: XOR<serviceUpdateWithoutMechanicInput, serviceUncheckedUpdateWithoutMechanicInput>;
    create: XOR<serviceCreateWithoutMechanicInput, serviceUncheckedCreateWithoutMechanicInput>;
  };

  export type serviceUpdateWithWhereUniqueWithoutMechanicInput = {
    where: serviceWhereUniqueInput;
    data: XOR<serviceUpdateWithoutMechanicInput, serviceUncheckedUpdateWithoutMechanicInput>;
  };

  export type serviceUpdateManyWithWhereWithoutMechanicInput = {
    where: serviceScalarWhereInput;
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyWithoutMechanicInput>;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
    service_manager?: service_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
    service_manager?: service_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
    service_manager?: service_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerCreateWithoutServiceInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutServiceInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutServiceInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutServiceInput, customerUncheckedCreateWithoutServiceInput>;
  };

  export type mechanicCreateWithoutServiceInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMechanicInput;
  };

  export type mechanicUncheckedCreateWithoutServiceInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicCreateOrConnectWithoutServiceInput = {
    where: mechanicWhereUniqueInput;
    create: XOR<mechanicCreateWithoutServiceInput, mechanicUncheckedCreateWithoutServiceInput>;
  };

  export type customerUpsertWithoutServiceInput = {
    update: XOR<customerUpdateWithoutServiceInput, customerUncheckedUpdateWithoutServiceInput>;
    create: XOR<customerCreateWithoutServiceInput, customerUncheckedCreateWithoutServiceInput>;
    where?: customerWhereInput;
  };

  export type customerUpdateToOneWithWhereWithoutServiceInput = {
    where?: customerWhereInput;
    data: XOR<customerUpdateWithoutServiceInput, customerUncheckedUpdateWithoutServiceInput>;
  };

  export type customerUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUpsertWithoutServiceInput = {
    update: XOR<mechanicUpdateWithoutServiceInput, mechanicUncheckedUpdateWithoutServiceInput>;
    create: XOR<mechanicCreateWithoutServiceInput, mechanicUncheckedCreateWithoutServiceInput>;
    where?: mechanicWhereInput;
  };

  export type mechanicUpdateToOneWithWhereWithoutServiceInput = {
    where?: mechanicWhereInput;
    data: XOR<mechanicUpdateWithoutServiceInput, mechanicUncheckedUpdateWithoutServiceInput>;
  };

  export type mechanicUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMechanicNestedInput;
  };

  export type mechanicUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutService_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutService_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutService_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutService_managerInput, userUncheckedCreateWithoutService_managerInput>;
  };

  export type userUpsertWithoutService_managerInput = {
    update: XOR<userUpdateWithoutService_managerInput, userUncheckedUpdateWithoutService_managerInput>;
    create: XOR<userCreateWithoutService_managerInput, userUncheckedCreateWithoutService_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutService_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutService_managerInput, userUncheckedUpdateWithoutService_managerInput>;
  };

  export type userUpdateWithoutService_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutService_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type mechanicCreateWithoutUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceCreateNestedManyWithoutMechanicInput;
  };

  export type mechanicUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: serviceUncheckedCreateNestedManyWithoutMechanicInput;
  };

  export type mechanicCreateOrConnectWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    create: XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>;
  };

  export type mechanicCreateManyUserInputEnvelope = {
    data: mechanicCreateManyUserInput | mechanicCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type service_managerCreateWithoutUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type service_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type service_managerCreateOrConnectWithoutUserInput = {
    where: service_managerWhereUniqueInput;
    create: XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>;
  };

  export type service_managerCreateManyUserInputEnvelope = {
    data: service_managerCreateManyUserInput | service_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    phone_number?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type mechanicUpsertWithWhereUniqueWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    update: XOR<mechanicUpdateWithoutUserInput, mechanicUncheckedUpdateWithoutUserInput>;
    create: XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>;
  };

  export type mechanicUpdateWithWhereUniqueWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    data: XOR<mechanicUpdateWithoutUserInput, mechanicUncheckedUpdateWithoutUserInput>;
  };

  export type mechanicUpdateManyWithWhereWithoutUserInput = {
    where: mechanicScalarWhereInput;
    data: XOR<mechanicUpdateManyMutationInput, mechanicUncheckedUpdateManyWithoutUserInput>;
  };

  export type mechanicScalarWhereInput = {
    AND?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
    OR?: mechanicScalarWhereInput[];
    NOT?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
    id?: UuidFilter<'mechanic'> | string;
    name?: StringFilter<'mechanic'> | string;
    experience_years?: IntFilter<'mechanic'> | number;
    specialization?: StringFilter<'mechanic'> | string;
    user_id?: UuidFilter<'mechanic'> | string;
    created_at?: DateTimeFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeFilter<'mechanic'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    phone_number?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type service_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: service_managerWhereUniqueInput;
    update: XOR<service_managerUpdateWithoutUserInput, service_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<service_managerCreateWithoutUserInput, service_managerUncheckedCreateWithoutUserInput>;
  };

  export type service_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: service_managerWhereUniqueInput;
    data: XOR<service_managerUpdateWithoutUserInput, service_managerUncheckedUpdateWithoutUserInput>;
  };

  export type service_managerUpdateManyWithWhereWithoutUserInput = {
    where: service_managerScalarWhereInput;
    data: XOR<service_managerUpdateManyMutationInput, service_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type service_managerScalarWhereInput = {
    AND?: service_managerScalarWhereInput | service_managerScalarWhereInput[];
    OR?: service_managerScalarWhereInput[];
    NOT?: service_managerScalarWhereInput | service_managerScalarWhereInput[];
    id?: UuidFilter<'service_manager'> | string;
    name?: StringFilter<'service_manager'> | string;
    experience_years?: IntFilter<'service_manager'> | number;
    user_id?: UuidFilter<'service_manager'> | string;
    address?: StringFilter<'service_manager'> | string;
    phone_number?: StringFilter<'service_manager'> | string;
    created_at?: DateTimeFilter<'service_manager'> | Date | string;
    updated_at?: DateTimeFilter<'service_manager'> | Date | string;
  };

  export type serviceCreateManyCustomerInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    mechanic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    mechanic?: mechanicUpdateOneRequiredWithoutServiceNestedInput;
  };

  export type serviceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    mechanic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    mechanic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceCreateManyMechanicInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutServiceNestedInput;
  };

  export type serviceUncheckedUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUncheckedUpdateManyWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicCreateManyUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type service_managerCreateManyUserInput = {
    id?: string;
    name: string;
    experience_years: number;
    address: string;
    phone_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUpdateManyWithoutMechanicNestedInput;
  };

  export type mechanicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: serviceUncheckedUpdateManyWithoutMechanicNestedInput;
  };

  export type mechanicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type service_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type service_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type service_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    experience_years?: IntFieldUpdateOperationsInput | number;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
   */
  export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MechanicCountOutputTypeDefaultArgs instead
   */
  export type MechanicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MechanicCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use mechanicDefaultArgs instead
   */
  export type mechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    mechanicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use serviceDefaultArgs instead
   */
  export type serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    serviceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use service_managerDefaultArgs instead
   */
  export type service_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    service_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
