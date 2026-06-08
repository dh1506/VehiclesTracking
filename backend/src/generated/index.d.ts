
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Geofence
 * 
 */
export type Geofence = $Result.DefaultSelection<Prisma.$GeofencePayload>
/**
 * Model VehicleGeofenceLog
 * 
 */
export type VehicleGeofenceLog = $Result.DefaultSelection<Prisma.$VehicleGeofenceLogPayload>
/**
 * Model MaintenanceLog
 * 
 */
export type MaintenanceLog = $Result.DefaultSelection<Prisma.$MaintenanceLogPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>
/**
 * Model MonthlyReport
 * 
 */
export type MonthlyReport = $Result.DefaultSelection<Prisma.$MonthlyReportPayload>
/**
 * Model GpsLog
 * 
 */
export type GpsLog = $Result.DefaultSelection<Prisma.$GpsLogPayload>
/**
 * Model VehicleAlert
 * 
 */
export type VehicleAlert = $Result.DefaultSelection<Prisma.$VehicleAlertPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model IotDevice
 * 
 */
export type IotDevice = $Result.DefaultSelection<Prisma.$IotDevicePayload>
/**
 * Model VehicleDeviceAssignment
 * 
 */
export type VehicleDeviceAssignment = $Result.DefaultSelection<Prisma.$VehicleDeviceAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const GeofenceType: {
  circle: 'circle',
  polygon: 'polygon'
};

export type GeofenceType = (typeof GeofenceType)[keyof typeof GeofenceType]


export const GeofenceEvent: {
  enter: 'enter',
  exit: 'exit'
};

export type GeofenceEvent = (typeof GeofenceEvent)[keyof typeof GeofenceEvent]


export const RentalStatus: {
  active: 'active',
  completed: 'completed'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]


export const GpsStatus: {
  online: 'online',
  offline: 'offline'
};

export type GpsStatus = (typeof GpsStatus)[keyof typeof GpsStatus]


export const AlertType: {
  accident: 'accident',
  impact: 'impact',
  out_of_zone: 'out_of_zone',
  disconnected: 'disconnected'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const VehicleStatus: {
  available: 'available',
  rented: 'rented',
  maintenance: 'maintenance'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const DeviceStatus: {
  online: 'online',
  offline: 'offline'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type GeofenceType = $Enums.GeofenceType

export const GeofenceType: typeof $Enums.GeofenceType

export type GeofenceEvent = $Enums.GeofenceEvent

export const GeofenceEvent: typeof $Enums.GeofenceEvent

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

export type GpsStatus = $Enums.GpsStatus

export const GpsStatus: typeof $Enums.GpsStatus

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.geofence`: Exposes CRUD operations for the **Geofence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Geofences
    * const geofences = await prisma.geofence.findMany()
    * ```
    */
  get geofence(): Prisma.GeofenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleGeofenceLog`: Exposes CRUD operations for the **VehicleGeofenceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleGeofenceLogs
    * const vehicleGeofenceLogs = await prisma.vehicleGeofenceLog.findMany()
    * ```
    */
  get vehicleGeofenceLog(): Prisma.VehicleGeofenceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceLog`: Exposes CRUD operations for the **MaintenanceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceLogs
    * const maintenanceLogs = await prisma.maintenanceLog.findMany()
    * ```
    */
  get maintenanceLog(): Prisma.MaintenanceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyReport`: Exposes CRUD operations for the **MonthlyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyReports
    * const monthlyReports = await prisma.monthlyReport.findMany()
    * ```
    */
  get monthlyReport(): Prisma.MonthlyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gpsLog`: Exposes CRUD operations for the **GpsLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GpsLogs
    * const gpsLogs = await prisma.gpsLog.findMany()
    * ```
    */
  get gpsLog(): Prisma.GpsLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleAlert`: Exposes CRUD operations for the **VehicleAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleAlerts
    * const vehicleAlerts = await prisma.vehicleAlert.findMany()
    * ```
    */
  get vehicleAlert(): Prisma.VehicleAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iotDevice`: Exposes CRUD operations for the **IotDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IotDevices
    * const iotDevices = await prisma.iotDevice.findMany()
    * ```
    */
  get iotDevice(): Prisma.IotDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleDeviceAssignment`: Exposes CRUD operations for the **VehicleDeviceAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleDeviceAssignments
    * const vehicleDeviceAssignments = await prisma.vehicleDeviceAssignment.findMany()
    * ```
    */
  get vehicleDeviceAssignment(): Prisma.VehicleDeviceAssignmentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Role: 'Role',
    User: 'User',
    Geofence: 'Geofence',
    VehicleGeofenceLog: 'VehicleGeofenceLog',
    MaintenanceLog: 'MaintenanceLog',
    Customer: 'Customer',
    Rental: 'Rental',
    MonthlyReport: 'MonthlyReport',
    GpsLog: 'GpsLog',
    VehicleAlert: 'VehicleAlert',
    Vehicle: 'Vehicle',
    IotDevice: 'IotDevice',
    VehicleDeviceAssignment: 'VehicleDeviceAssignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "geofence" | "vehicleGeofenceLog" | "maintenanceLog" | "customer" | "rental" | "monthlyReport" | "gpsLog" | "vehicleAlert" | "vehicle" | "iotDevice" | "vehicleDeviceAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
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
      Geofence: {
        payload: Prisma.$GeofencePayload<ExtArgs>
        fields: Prisma.GeofenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeofenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeofenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          findFirst: {
            args: Prisma.GeofenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeofenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          findMany: {
            args: Prisma.GeofenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>[]
          }
          create: {
            args: Prisma.GeofenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          createMany: {
            args: Prisma.GeofenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeofenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          update: {
            args: Prisma.GeofenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          deleteMany: {
            args: Prisma.GeofenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeofenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeofenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeofencePayload>
          }
          aggregate: {
            args: Prisma.GeofenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeofence>
          }
          groupBy: {
            args: Prisma.GeofenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeofenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeofenceCountArgs<ExtArgs>
            result: $Utils.Optional<GeofenceCountAggregateOutputType> | number
          }
        }
      }
      VehicleGeofenceLog: {
        payload: Prisma.$VehicleGeofenceLogPayload<ExtArgs>
        fields: Prisma.VehicleGeofenceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleGeofenceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleGeofenceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          findFirst: {
            args: Prisma.VehicleGeofenceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleGeofenceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          findMany: {
            args: Prisma.VehicleGeofenceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>[]
          }
          create: {
            args: Prisma.VehicleGeofenceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          createMany: {
            args: Prisma.VehicleGeofenceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleGeofenceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          update: {
            args: Prisma.VehicleGeofenceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          deleteMany: {
            args: Prisma.VehicleGeofenceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleGeofenceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleGeofenceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleGeofenceLogPayload>
          }
          aggregate: {
            args: Prisma.VehicleGeofenceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleGeofenceLog>
          }
          groupBy: {
            args: Prisma.VehicleGeofenceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGeofenceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleGeofenceLogCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleGeofenceLogCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceLog: {
        payload: Prisma.$MaintenanceLogPayload<ExtArgs>
        fields: Prisma.MaintenanceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findMany: {
            args: Prisma.MaintenanceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          create: {
            args: Prisma.MaintenanceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          createMany: {
            args: Prisma.MaintenanceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          update: {
            args: Prisma.MaintenanceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceLog>
          }
          groupBy: {
            args: Prisma.MaintenanceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceLogCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
      MonthlyReport: {
        payload: Prisma.$MonthlyReportPayload<ExtArgs>
        fields: Prisma.MonthlyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findFirst: {
            args: Prisma.MonthlyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          findMany: {
            args: Prisma.MonthlyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>[]
          }
          create: {
            args: Prisma.MonthlyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          createMany: {
            args: Prisma.MonthlyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          update: {
            args: Prisma.MonthlyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyReportPayload>
          }
          aggregate: {
            args: Prisma.MonthlyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyReport>
          }
          groupBy: {
            args: Prisma.MonthlyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyReportCountAggregateOutputType> | number
          }
        }
      }
      GpsLog: {
        payload: Prisma.$GpsLogPayload<ExtArgs>
        fields: Prisma.GpsLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GpsLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GpsLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          findFirst: {
            args: Prisma.GpsLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GpsLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          findMany: {
            args: Prisma.GpsLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>[]
          }
          create: {
            args: Prisma.GpsLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          createMany: {
            args: Prisma.GpsLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GpsLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          update: {
            args: Prisma.GpsLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          deleteMany: {
            args: Prisma.GpsLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GpsLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GpsLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpsLogPayload>
          }
          aggregate: {
            args: Prisma.GpsLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGpsLog>
          }
          groupBy: {
            args: Prisma.GpsLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GpsLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GpsLogCountArgs<ExtArgs>
            result: $Utils.Optional<GpsLogCountAggregateOutputType> | number
          }
        }
      }
      VehicleAlert: {
        payload: Prisma.$VehicleAlertPayload<ExtArgs>
        fields: Prisma.VehicleAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          findFirst: {
            args: Prisma.VehicleAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          findMany: {
            args: Prisma.VehicleAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>[]
          }
          create: {
            args: Prisma.VehicleAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          createMany: {
            args: Prisma.VehicleAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          update: {
            args: Prisma.VehicleAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          deleteMany: {
            args: Prisma.VehicleAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAlertPayload>
          }
          aggregate: {
            args: Prisma.VehicleAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleAlert>
          }
          groupBy: {
            args: Prisma.VehicleAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleAlertCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleAlertCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      IotDevice: {
        payload: Prisma.$IotDevicePayload<ExtArgs>
        fields: Prisma.IotDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IotDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IotDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          findFirst: {
            args: Prisma.IotDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IotDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          findMany: {
            args: Prisma.IotDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>[]
          }
          create: {
            args: Prisma.IotDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          createMany: {
            args: Prisma.IotDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IotDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          update: {
            args: Prisma.IotDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          deleteMany: {
            args: Prisma.IotDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IotDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IotDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IotDevicePayload>
          }
          aggregate: {
            args: Prisma.IotDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIotDevice>
          }
          groupBy: {
            args: Prisma.IotDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<IotDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.IotDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<IotDeviceCountAggregateOutputType> | number
          }
        }
      }
      VehicleDeviceAssignment: {
        payload: Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>
        fields: Prisma.VehicleDeviceAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleDeviceAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleDeviceAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          findFirst: {
            args: Prisma.VehicleDeviceAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleDeviceAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          findMany: {
            args: Prisma.VehicleDeviceAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>[]
          }
          create: {
            args: Prisma.VehicleDeviceAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          createMany: {
            args: Prisma.VehicleDeviceAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeviceAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          update: {
            args: Prisma.VehicleDeviceAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeviceAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleDeviceAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleDeviceAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDeviceAssignmentPayload>
          }
          aggregate: {
            args: Prisma.VehicleDeviceAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleDeviceAssignment>
          }
          groupBy: {
            args: Prisma.VehicleDeviceAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleDeviceAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleDeviceAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleDeviceAssignmentCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    geofence?: GeofenceOmit
    vehicleGeofenceLog?: VehicleGeofenceLogOmit
    maintenanceLog?: MaintenanceLogOmit
    customer?: CustomerOmit
    rental?: RentalOmit
    monthlyReport?: MonthlyReportOmit
    gpsLog?: GpsLogOmit
    vehicleAlert?: VehicleAlertOmit
    vehicle?: VehicleOmit
    iotDevice?: IotDeviceOmit
    vehicleDeviceAssignment?: VehicleDeviceAssignmentOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    geofences: number
    maintenanceLogs: number
    rentals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    geofences?: boolean | UserCountOutputTypeCountGeofencesArgs
    maintenanceLogs?: boolean | UserCountOutputTypeCountMaintenanceLogsArgs
    rentals?: boolean | UserCountOutputTypeCountRentalsArgs
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
  export type UserCountOutputTypeCountGeofencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeofenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type GeofenceCountOutputType
   */

  export type GeofenceCountOutputType = {
    geofenceLogs: number
  }

  export type GeofenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    geofenceLogs?: boolean | GeofenceCountOutputTypeCountGeofenceLogsArgs
  }

  // Custom InputTypes
  /**
   * GeofenceCountOutputType without action
   */
  export type GeofenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeofenceCountOutputType
     */
    select?: GeofenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeofenceCountOutputType without action
   */
  export type GeofenceCountOutputTypeCountGeofenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleGeofenceLogWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    rentals: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | CustomerCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    gpsLogs: number
    alerts: number
  }

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpsLogs?: boolean | RentalCountOutputTypeCountGpsLogsArgs
    alerts?: boolean | RentalCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountGpsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsLogWhereInput
  }

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleAlertWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    gpsLogs: number
    maintenanceLogs: number
    monthlyReports: number
    rentals: number
    alerts: number
    deviceAssignments: number
    geofenceLogs: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpsLogs?: boolean | VehicleCountOutputTypeCountGpsLogsArgs
    maintenanceLogs?: boolean | VehicleCountOutputTypeCountMaintenanceLogsArgs
    monthlyReports?: boolean | VehicleCountOutputTypeCountMonthlyReportsArgs
    rentals?: boolean | VehicleCountOutputTypeCountRentalsArgs
    alerts?: boolean | VehicleCountOutputTypeCountAlertsArgs
    deviceAssignments?: boolean | VehicleCountOutputTypeCountDeviceAssignmentsArgs
    geofenceLogs?: boolean | VehicleCountOutputTypeCountGeofenceLogsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountGpsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMonthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleAlertWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDeviceAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDeviceAssignmentWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountGeofenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleGeofenceLogWhereInput
  }


  /**
   * Count Type IotDeviceCountOutputType
   */

  export type IotDeviceCountOutputType = {
    assignments: number
  }

  export type IotDeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | IotDeviceCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * IotDeviceCountOutputType without action
   */
  export type IotDeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDeviceCountOutputType
     */
    select?: IotDeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IotDeviceCountOutputType without action
   */
  export type IotDeviceCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDeviceAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    roleName: string | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    roleName: string | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    roleName: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleName", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleName: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    roleId: number | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    roleId: number | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    fullName: number
    email: number
    passwordHash: number
    phone: number
    roleId: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    roleId?: true
    status?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    roleId?: true
    status?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    roleId?: true
    status?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    fullName: string
    email: string
    passwordHash: string
    phone: string | null
    roleId: number
    status: $Enums.UserStatus
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    userId?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
    geofences?: boolean | User$geofencesArgs<ExtArgs>
    maintenanceLogs?: boolean | User$maintenanceLogsArgs<ExtArgs>
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    userId?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullName" | "email" | "passwordHash" | "phone" | "roleId" | "status" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    geofences?: boolean | User$geofencesArgs<ExtArgs>
    maintenanceLogs?: boolean | User$maintenanceLogsArgs<ExtArgs>
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      geofences: Prisma.$GeofencePayload<ExtArgs>[]
      maintenanceLogs: Prisma.$MaintenanceLogPayload<ExtArgs>[]
      rentals: Prisma.$RentalPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      fullName: string
      email: string
      passwordHash: string
      phone: string | null
      roleId: number
      status: $Enums.UserStatus
      createdAt: Date
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
    geofences<T extends User$geofencesArgs<ExtArgs> = {}>(args?: Subset<T, User$geofencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceLogs<T extends User$maintenanceLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends User$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.geofences
   */
  export type User$geofencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    where?: GeofenceWhereInput
    orderBy?: GeofenceOrderByWithRelationInput | GeofenceOrderByWithRelationInput[]
    cursor?: GeofenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeofenceScalarFieldEnum | GeofenceScalarFieldEnum[]
  }

  /**
   * User.maintenanceLogs
   */
  export type User$maintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    cursor?: MaintenanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * User.rentals
   */
  export type User$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
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
   * Model Geofence
   */

  export type AggregateGeofence = {
    _count: GeofenceCountAggregateOutputType | null
    _avg: GeofenceAvgAggregateOutputType | null
    _sum: GeofenceSumAggregateOutputType | null
    _min: GeofenceMinAggregateOutputType | null
    _max: GeofenceMaxAggregateOutputType | null
  }

  export type GeofenceAvgAggregateOutputType = {
    geofenceId: number | null
    centerLat: Decimal | null
    centerLon: Decimal | null
    radiusMeter: Decimal | null
    createdBy: number | null
  }

  export type GeofenceSumAggregateOutputType = {
    geofenceId: number | null
    centerLat: Decimal | null
    centerLon: Decimal | null
    radiusMeter: Decimal | null
    createdBy: number | null
  }

  export type GeofenceMinAggregateOutputType = {
    geofenceId: number | null
    geofenceName: string | null
    geofenceType: $Enums.GeofenceType | null
    centerLat: Decimal | null
    centerLon: Decimal | null
    radiusMeter: Decimal | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type GeofenceMaxAggregateOutputType = {
    geofenceId: number | null
    geofenceName: string | null
    geofenceType: $Enums.GeofenceType | null
    centerLat: Decimal | null
    centerLon: Decimal | null
    radiusMeter: Decimal | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type GeofenceCountAggregateOutputType = {
    geofenceId: number
    geofenceName: number
    geofenceType: number
    centerLat: number
    centerLon: number
    radiusMeter: number
    polygonData: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type GeofenceAvgAggregateInputType = {
    geofenceId?: true
    centerLat?: true
    centerLon?: true
    radiusMeter?: true
    createdBy?: true
  }

  export type GeofenceSumAggregateInputType = {
    geofenceId?: true
    centerLat?: true
    centerLon?: true
    radiusMeter?: true
    createdBy?: true
  }

  export type GeofenceMinAggregateInputType = {
    geofenceId?: true
    geofenceName?: true
    geofenceType?: true
    centerLat?: true
    centerLon?: true
    radiusMeter?: true
    createdBy?: true
    createdAt?: true
  }

  export type GeofenceMaxAggregateInputType = {
    geofenceId?: true
    geofenceName?: true
    geofenceType?: true
    centerLat?: true
    centerLon?: true
    radiusMeter?: true
    createdBy?: true
    createdAt?: true
  }

  export type GeofenceCountAggregateInputType = {
    geofenceId?: true
    geofenceName?: true
    geofenceType?: true
    centerLat?: true
    centerLon?: true
    radiusMeter?: true
    polygonData?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type GeofenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geofence to aggregate.
     */
    where?: GeofenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geofences to fetch.
     */
    orderBy?: GeofenceOrderByWithRelationInput | GeofenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeofenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geofences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geofences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Geofences
    **/
    _count?: true | GeofenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeofenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeofenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeofenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeofenceMaxAggregateInputType
  }

  export type GetGeofenceAggregateType<T extends GeofenceAggregateArgs> = {
        [P in keyof T & keyof AggregateGeofence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeofence[P]>
      : GetScalarType<T[P], AggregateGeofence[P]>
  }




  export type GeofenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeofenceWhereInput
    orderBy?: GeofenceOrderByWithAggregationInput | GeofenceOrderByWithAggregationInput[]
    by: GeofenceScalarFieldEnum[] | GeofenceScalarFieldEnum
    having?: GeofenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeofenceCountAggregateInputType | true
    _avg?: GeofenceAvgAggregateInputType
    _sum?: GeofenceSumAggregateInputType
    _min?: GeofenceMinAggregateInputType
    _max?: GeofenceMaxAggregateInputType
  }

  export type GeofenceGroupByOutputType = {
    geofenceId: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat: Decimal | null
    centerLon: Decimal | null
    radiusMeter: Decimal | null
    polygonData: JsonValue | null
    createdBy: number
    createdAt: Date
    _count: GeofenceCountAggregateOutputType | null
    _avg: GeofenceAvgAggregateOutputType | null
    _sum: GeofenceSumAggregateOutputType | null
    _min: GeofenceMinAggregateOutputType | null
    _max: GeofenceMaxAggregateOutputType | null
  }

  type GetGeofenceGroupByPayload<T extends GeofenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeofenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeofenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeofenceGroupByOutputType[P]>
            : GetScalarType<T[P], GeofenceGroupByOutputType[P]>
        }
      >
    >


  export type GeofenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    geofenceId?: boolean
    geofenceName?: boolean
    geofenceType?: boolean
    centerLat?: boolean
    centerLon?: boolean
    radiusMeter?: boolean
    polygonData?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    geofenceLogs?: boolean | Geofence$geofenceLogsArgs<ExtArgs>
    _count?: boolean | GeofenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geofence"]>



  export type GeofenceSelectScalar = {
    geofenceId?: boolean
    geofenceName?: boolean
    geofenceType?: boolean
    centerLat?: boolean
    centerLon?: boolean
    radiusMeter?: boolean
    polygonData?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type GeofenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"geofenceId" | "geofenceName" | "geofenceType" | "centerLat" | "centerLon" | "radiusMeter" | "polygonData" | "createdBy" | "createdAt", ExtArgs["result"]["geofence"]>
  export type GeofenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    geofenceLogs?: boolean | Geofence$geofenceLogsArgs<ExtArgs>
    _count?: boolean | GeofenceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeofencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Geofence"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      geofenceLogs: Prisma.$VehicleGeofenceLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      geofenceId: number
      geofenceName: string
      geofenceType: $Enums.GeofenceType
      centerLat: Prisma.Decimal | null
      centerLon: Prisma.Decimal | null
      radiusMeter: Prisma.Decimal | null
      polygonData: Prisma.JsonValue | null
      createdBy: number
      createdAt: Date
    }, ExtArgs["result"]["geofence"]>
    composites: {}
  }

  type GeofenceGetPayload<S extends boolean | null | undefined | GeofenceDefaultArgs> = $Result.GetResult<Prisma.$GeofencePayload, S>

  type GeofenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeofenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeofenceCountAggregateInputType | true
    }

  export interface GeofenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Geofence'], meta: { name: 'Geofence' } }
    /**
     * Find zero or one Geofence that matches the filter.
     * @param {GeofenceFindUniqueArgs} args - Arguments to find a Geofence
     * @example
     * // Get one Geofence
     * const geofence = await prisma.geofence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeofenceFindUniqueArgs>(args: SelectSubset<T, GeofenceFindUniqueArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Geofence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeofenceFindUniqueOrThrowArgs} args - Arguments to find a Geofence
     * @example
     * // Get one Geofence
     * const geofence = await prisma.geofence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeofenceFindUniqueOrThrowArgs>(args: SelectSubset<T, GeofenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geofence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceFindFirstArgs} args - Arguments to find a Geofence
     * @example
     * // Get one Geofence
     * const geofence = await prisma.geofence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeofenceFindFirstArgs>(args?: SelectSubset<T, GeofenceFindFirstArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geofence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceFindFirstOrThrowArgs} args - Arguments to find a Geofence
     * @example
     * // Get one Geofence
     * const geofence = await prisma.geofence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeofenceFindFirstOrThrowArgs>(args?: SelectSubset<T, GeofenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Geofences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Geofences
     * const geofences = await prisma.geofence.findMany()
     * 
     * // Get first 10 Geofences
     * const geofences = await prisma.geofence.findMany({ take: 10 })
     * 
     * // Only select the `geofenceId`
     * const geofenceWithGeofenceIdOnly = await prisma.geofence.findMany({ select: { geofenceId: true } })
     * 
     */
    findMany<T extends GeofenceFindManyArgs>(args?: SelectSubset<T, GeofenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Geofence.
     * @param {GeofenceCreateArgs} args - Arguments to create a Geofence.
     * @example
     * // Create one Geofence
     * const Geofence = await prisma.geofence.create({
     *   data: {
     *     // ... data to create a Geofence
     *   }
     * })
     * 
     */
    create<T extends GeofenceCreateArgs>(args: SelectSubset<T, GeofenceCreateArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Geofences.
     * @param {GeofenceCreateManyArgs} args - Arguments to create many Geofences.
     * @example
     * // Create many Geofences
     * const geofence = await prisma.geofence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeofenceCreateManyArgs>(args?: SelectSubset<T, GeofenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Geofence.
     * @param {GeofenceDeleteArgs} args - Arguments to delete one Geofence.
     * @example
     * // Delete one Geofence
     * const Geofence = await prisma.geofence.delete({
     *   where: {
     *     // ... filter to delete one Geofence
     *   }
     * })
     * 
     */
    delete<T extends GeofenceDeleteArgs>(args: SelectSubset<T, GeofenceDeleteArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Geofence.
     * @param {GeofenceUpdateArgs} args - Arguments to update one Geofence.
     * @example
     * // Update one Geofence
     * const geofence = await prisma.geofence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeofenceUpdateArgs>(args: SelectSubset<T, GeofenceUpdateArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Geofences.
     * @param {GeofenceDeleteManyArgs} args - Arguments to filter Geofences to delete.
     * @example
     * // Delete a few Geofences
     * const { count } = await prisma.geofence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeofenceDeleteManyArgs>(args?: SelectSubset<T, GeofenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Geofences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Geofences
     * const geofence = await prisma.geofence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeofenceUpdateManyArgs>(args: SelectSubset<T, GeofenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Geofence.
     * @param {GeofenceUpsertArgs} args - Arguments to update or create a Geofence.
     * @example
     * // Update or create a Geofence
     * const geofence = await prisma.geofence.upsert({
     *   create: {
     *     // ... data to create a Geofence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Geofence we want to update
     *   }
     * })
     */
    upsert<T extends GeofenceUpsertArgs>(args: SelectSubset<T, GeofenceUpsertArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Geofences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceCountArgs} args - Arguments to filter Geofences to count.
     * @example
     * // Count the number of Geofences
     * const count = await prisma.geofence.count({
     *   where: {
     *     // ... the filter for the Geofences we want to count
     *   }
     * })
    **/
    count<T extends GeofenceCountArgs>(
      args?: Subset<T, GeofenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeofenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Geofence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeofenceAggregateArgs>(args: Subset<T, GeofenceAggregateArgs>): Prisma.PrismaPromise<GetGeofenceAggregateType<T>>

    /**
     * Group by Geofence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeofenceGroupByArgs} args - Group by arguments.
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
      T extends GeofenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeofenceGroupByArgs['orderBy'] }
        : { orderBy?: GeofenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeofenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeofenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Geofence model
   */
  readonly fields: GeofenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Geofence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeofenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    geofenceLogs<T extends Geofence$geofenceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Geofence$geofenceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Geofence model
   */
  interface GeofenceFieldRefs {
    readonly geofenceId: FieldRef<"Geofence", 'Int'>
    readonly geofenceName: FieldRef<"Geofence", 'String'>
    readonly geofenceType: FieldRef<"Geofence", 'GeofenceType'>
    readonly centerLat: FieldRef<"Geofence", 'Decimal'>
    readonly centerLon: FieldRef<"Geofence", 'Decimal'>
    readonly radiusMeter: FieldRef<"Geofence", 'Decimal'>
    readonly polygonData: FieldRef<"Geofence", 'Json'>
    readonly createdBy: FieldRef<"Geofence", 'Int'>
    readonly createdAt: FieldRef<"Geofence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Geofence findUnique
   */
  export type GeofenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter, which Geofence to fetch.
     */
    where: GeofenceWhereUniqueInput
  }

  /**
   * Geofence findUniqueOrThrow
   */
  export type GeofenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter, which Geofence to fetch.
     */
    where: GeofenceWhereUniqueInput
  }

  /**
   * Geofence findFirst
   */
  export type GeofenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter, which Geofence to fetch.
     */
    where?: GeofenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geofences to fetch.
     */
    orderBy?: GeofenceOrderByWithRelationInput | GeofenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geofences.
     */
    cursor?: GeofenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geofences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geofences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geofences.
     */
    distinct?: GeofenceScalarFieldEnum | GeofenceScalarFieldEnum[]
  }

  /**
   * Geofence findFirstOrThrow
   */
  export type GeofenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter, which Geofence to fetch.
     */
    where?: GeofenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geofences to fetch.
     */
    orderBy?: GeofenceOrderByWithRelationInput | GeofenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geofences.
     */
    cursor?: GeofenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geofences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geofences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geofences.
     */
    distinct?: GeofenceScalarFieldEnum | GeofenceScalarFieldEnum[]
  }

  /**
   * Geofence findMany
   */
  export type GeofenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter, which Geofences to fetch.
     */
    where?: GeofenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geofences to fetch.
     */
    orderBy?: GeofenceOrderByWithRelationInput | GeofenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Geofences.
     */
    cursor?: GeofenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geofences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geofences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geofences.
     */
    distinct?: GeofenceScalarFieldEnum | GeofenceScalarFieldEnum[]
  }

  /**
   * Geofence create
   */
  export type GeofenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Geofence.
     */
    data: XOR<GeofenceCreateInput, GeofenceUncheckedCreateInput>
  }

  /**
   * Geofence createMany
   */
  export type GeofenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Geofences.
     */
    data: GeofenceCreateManyInput | GeofenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Geofence update
   */
  export type GeofenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Geofence.
     */
    data: XOR<GeofenceUpdateInput, GeofenceUncheckedUpdateInput>
    /**
     * Choose, which Geofence to update.
     */
    where: GeofenceWhereUniqueInput
  }

  /**
   * Geofence updateMany
   */
  export type GeofenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Geofences.
     */
    data: XOR<GeofenceUpdateManyMutationInput, GeofenceUncheckedUpdateManyInput>
    /**
     * Filter which Geofences to update
     */
    where?: GeofenceWhereInput
    /**
     * Limit how many Geofences to update.
     */
    limit?: number
  }

  /**
   * Geofence upsert
   */
  export type GeofenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Geofence to update in case it exists.
     */
    where: GeofenceWhereUniqueInput
    /**
     * In case the Geofence found by the `where` argument doesn't exist, create a new Geofence with this data.
     */
    create: XOR<GeofenceCreateInput, GeofenceUncheckedCreateInput>
    /**
     * In case the Geofence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeofenceUpdateInput, GeofenceUncheckedUpdateInput>
  }

  /**
   * Geofence delete
   */
  export type GeofenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
    /**
     * Filter which Geofence to delete.
     */
    where: GeofenceWhereUniqueInput
  }

  /**
   * Geofence deleteMany
   */
  export type GeofenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geofences to delete
     */
    where?: GeofenceWhereInput
    /**
     * Limit how many Geofences to delete.
     */
    limit?: number
  }

  /**
   * Geofence.geofenceLogs
   */
  export type Geofence$geofenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    where?: VehicleGeofenceLogWhereInput
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    cursor?: VehicleGeofenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleGeofenceLogScalarFieldEnum | VehicleGeofenceLogScalarFieldEnum[]
  }

  /**
   * Geofence without action
   */
  export type GeofenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geofence
     */
    select?: GeofenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Geofence
     */
    omit?: GeofenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeofenceInclude<ExtArgs> | null
  }


  /**
   * Model VehicleGeofenceLog
   */

  export type AggregateVehicleGeofenceLog = {
    _count: VehicleGeofenceLogCountAggregateOutputType | null
    _avg: VehicleGeofenceLogAvgAggregateOutputType | null
    _sum: VehicleGeofenceLogSumAggregateOutputType | null
    _min: VehicleGeofenceLogMinAggregateOutputType | null
    _max: VehicleGeofenceLogMaxAggregateOutputType | null
  }

  export type VehicleGeofenceLogAvgAggregateOutputType = {
    geofenceLogId: number | null
    vehicleId: number | null
    geofenceId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type VehicleGeofenceLogSumAggregateOutputType = {
    geofenceLogId: number | null
    vehicleId: number | null
    geofenceId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type VehicleGeofenceLogMinAggregateOutputType = {
    geofenceLogId: number | null
    vehicleId: number | null
    geofenceId: number | null
    eventType: $Enums.GeofenceEvent | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
  }

  export type VehicleGeofenceLogMaxAggregateOutputType = {
    geofenceLogId: number | null
    vehicleId: number | null
    geofenceId: number | null
    eventType: $Enums.GeofenceEvent | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
  }

  export type VehicleGeofenceLogCountAggregateOutputType = {
    geofenceLogId: number
    vehicleId: number
    geofenceId: number
    eventType: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type VehicleGeofenceLogAvgAggregateInputType = {
    geofenceLogId?: true
    vehicleId?: true
    geofenceId?: true
    latitude?: true
    longitude?: true
  }

  export type VehicleGeofenceLogSumAggregateInputType = {
    geofenceLogId?: true
    vehicleId?: true
    geofenceId?: true
    latitude?: true
    longitude?: true
  }

  export type VehicleGeofenceLogMinAggregateInputType = {
    geofenceLogId?: true
    vehicleId?: true
    geofenceId?: true
    eventType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type VehicleGeofenceLogMaxAggregateInputType = {
    geofenceLogId?: true
    vehicleId?: true
    geofenceId?: true
    eventType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type VehicleGeofenceLogCountAggregateInputType = {
    geofenceLogId?: true
    vehicleId?: true
    geofenceId?: true
    eventType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleGeofenceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleGeofenceLog to aggregate.
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleGeofenceLogs to fetch.
     */
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleGeofenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleGeofenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleGeofenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleGeofenceLogs
    **/
    _count?: true | VehicleGeofenceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleGeofenceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleGeofenceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleGeofenceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleGeofenceLogMaxAggregateInputType
  }

  export type GetVehicleGeofenceLogAggregateType<T extends VehicleGeofenceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleGeofenceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleGeofenceLog[P]>
      : GetScalarType<T[P], AggregateVehicleGeofenceLog[P]>
  }




  export type VehicleGeofenceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleGeofenceLogWhereInput
    orderBy?: VehicleGeofenceLogOrderByWithAggregationInput | VehicleGeofenceLogOrderByWithAggregationInput[]
    by: VehicleGeofenceLogScalarFieldEnum[] | VehicleGeofenceLogScalarFieldEnum
    having?: VehicleGeofenceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleGeofenceLogCountAggregateInputType | true
    _avg?: VehicleGeofenceLogAvgAggregateInputType
    _sum?: VehicleGeofenceLogSumAggregateInputType
    _min?: VehicleGeofenceLogMinAggregateInputType
    _max?: VehicleGeofenceLogMaxAggregateInputType
  }

  export type VehicleGeofenceLogGroupByOutputType = {
    geofenceLogId: number
    vehicleId: number
    geofenceId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal
    longitude: Decimal
    createdAt: Date
    _count: VehicleGeofenceLogCountAggregateOutputType | null
    _avg: VehicleGeofenceLogAvgAggregateOutputType | null
    _sum: VehicleGeofenceLogSumAggregateOutputType | null
    _min: VehicleGeofenceLogMinAggregateOutputType | null
    _max: VehicleGeofenceLogMaxAggregateOutputType | null
  }

  type GetVehicleGeofenceLogGroupByPayload<T extends VehicleGeofenceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGeofenceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGeofenceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGeofenceLogGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGeofenceLogGroupByOutputType[P]>
        }
      >
    >


  export type VehicleGeofenceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    geofenceLogId?: boolean
    vehicleId?: boolean
    geofenceId?: boolean
    eventType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    geofence?: boolean | GeofenceDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleGeofenceLog"]>



  export type VehicleGeofenceLogSelectScalar = {
    geofenceLogId?: boolean
    vehicleId?: boolean
    geofenceId?: boolean
    eventType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type VehicleGeofenceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"geofenceLogId" | "vehicleId" | "geofenceId" | "eventType" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["vehicleGeofenceLog"]>
  export type VehicleGeofenceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    geofence?: boolean | GeofenceDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleGeofenceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleGeofenceLog"
    objects: {
      geofence: Prisma.$GeofencePayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      geofenceLogId: number
      vehicleId: number
      geofenceId: number
      eventType: $Enums.GeofenceEvent
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["vehicleGeofenceLog"]>
    composites: {}
  }

  type VehicleGeofenceLogGetPayload<S extends boolean | null | undefined | VehicleGeofenceLogDefaultArgs> = $Result.GetResult<Prisma.$VehicleGeofenceLogPayload, S>

  type VehicleGeofenceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleGeofenceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleGeofenceLogCountAggregateInputType | true
    }

  export interface VehicleGeofenceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleGeofenceLog'], meta: { name: 'VehicleGeofenceLog' } }
    /**
     * Find zero or one VehicleGeofenceLog that matches the filter.
     * @param {VehicleGeofenceLogFindUniqueArgs} args - Arguments to find a VehicleGeofenceLog
     * @example
     * // Get one VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleGeofenceLogFindUniqueArgs>(args: SelectSubset<T, VehicleGeofenceLogFindUniqueArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleGeofenceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleGeofenceLogFindUniqueOrThrowArgs} args - Arguments to find a VehicleGeofenceLog
     * @example
     * // Get one VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleGeofenceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleGeofenceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleGeofenceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogFindFirstArgs} args - Arguments to find a VehicleGeofenceLog
     * @example
     * // Get one VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleGeofenceLogFindFirstArgs>(args?: SelectSubset<T, VehicleGeofenceLogFindFirstArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleGeofenceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogFindFirstOrThrowArgs} args - Arguments to find a VehicleGeofenceLog
     * @example
     * // Get one VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleGeofenceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleGeofenceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleGeofenceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleGeofenceLogs
     * const vehicleGeofenceLogs = await prisma.vehicleGeofenceLog.findMany()
     * 
     * // Get first 10 VehicleGeofenceLogs
     * const vehicleGeofenceLogs = await prisma.vehicleGeofenceLog.findMany({ take: 10 })
     * 
     * // Only select the `geofenceLogId`
     * const vehicleGeofenceLogWithGeofenceLogIdOnly = await prisma.vehicleGeofenceLog.findMany({ select: { geofenceLogId: true } })
     * 
     */
    findMany<T extends VehicleGeofenceLogFindManyArgs>(args?: SelectSubset<T, VehicleGeofenceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleGeofenceLog.
     * @param {VehicleGeofenceLogCreateArgs} args - Arguments to create a VehicleGeofenceLog.
     * @example
     * // Create one VehicleGeofenceLog
     * const VehicleGeofenceLog = await prisma.vehicleGeofenceLog.create({
     *   data: {
     *     // ... data to create a VehicleGeofenceLog
     *   }
     * })
     * 
     */
    create<T extends VehicleGeofenceLogCreateArgs>(args: SelectSubset<T, VehicleGeofenceLogCreateArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleGeofenceLogs.
     * @param {VehicleGeofenceLogCreateManyArgs} args - Arguments to create many VehicleGeofenceLogs.
     * @example
     * // Create many VehicleGeofenceLogs
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleGeofenceLogCreateManyArgs>(args?: SelectSubset<T, VehicleGeofenceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleGeofenceLog.
     * @param {VehicleGeofenceLogDeleteArgs} args - Arguments to delete one VehicleGeofenceLog.
     * @example
     * // Delete one VehicleGeofenceLog
     * const VehicleGeofenceLog = await prisma.vehicleGeofenceLog.delete({
     *   where: {
     *     // ... filter to delete one VehicleGeofenceLog
     *   }
     * })
     * 
     */
    delete<T extends VehicleGeofenceLogDeleteArgs>(args: SelectSubset<T, VehicleGeofenceLogDeleteArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleGeofenceLog.
     * @param {VehicleGeofenceLogUpdateArgs} args - Arguments to update one VehicleGeofenceLog.
     * @example
     * // Update one VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleGeofenceLogUpdateArgs>(args: SelectSubset<T, VehicleGeofenceLogUpdateArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleGeofenceLogs.
     * @param {VehicleGeofenceLogDeleteManyArgs} args - Arguments to filter VehicleGeofenceLogs to delete.
     * @example
     * // Delete a few VehicleGeofenceLogs
     * const { count } = await prisma.vehicleGeofenceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleGeofenceLogDeleteManyArgs>(args?: SelectSubset<T, VehicleGeofenceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleGeofenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleGeofenceLogs
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleGeofenceLogUpdateManyArgs>(args: SelectSubset<T, VehicleGeofenceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleGeofenceLog.
     * @param {VehicleGeofenceLogUpsertArgs} args - Arguments to update or create a VehicleGeofenceLog.
     * @example
     * // Update or create a VehicleGeofenceLog
     * const vehicleGeofenceLog = await prisma.vehicleGeofenceLog.upsert({
     *   create: {
     *     // ... data to create a VehicleGeofenceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleGeofenceLog we want to update
     *   }
     * })
     */
    upsert<T extends VehicleGeofenceLogUpsertArgs>(args: SelectSubset<T, VehicleGeofenceLogUpsertArgs<ExtArgs>>): Prisma__VehicleGeofenceLogClient<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleGeofenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogCountArgs} args - Arguments to filter VehicleGeofenceLogs to count.
     * @example
     * // Count the number of VehicleGeofenceLogs
     * const count = await prisma.vehicleGeofenceLog.count({
     *   where: {
     *     // ... the filter for the VehicleGeofenceLogs we want to count
     *   }
     * })
    **/
    count<T extends VehicleGeofenceLogCountArgs>(
      args?: Subset<T, VehicleGeofenceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleGeofenceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleGeofenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleGeofenceLogAggregateArgs>(args: Subset<T, VehicleGeofenceLogAggregateArgs>): Prisma.PrismaPromise<GetVehicleGeofenceLogAggregateType<T>>

    /**
     * Group by VehicleGeofenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGeofenceLogGroupByArgs} args - Group by arguments.
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
      T extends VehicleGeofenceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGeofenceLogGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGeofenceLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGeofenceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGeofenceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleGeofenceLog model
   */
  readonly fields: VehicleGeofenceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleGeofenceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleGeofenceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    geofence<T extends GeofenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeofenceDefaultArgs<ExtArgs>>): Prisma__GeofenceClient<$Result.GetResult<Prisma.$GeofencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleGeofenceLog model
   */
  interface VehicleGeofenceLogFieldRefs {
    readonly geofenceLogId: FieldRef<"VehicleGeofenceLog", 'Int'>
    readonly vehicleId: FieldRef<"VehicleGeofenceLog", 'Int'>
    readonly geofenceId: FieldRef<"VehicleGeofenceLog", 'Int'>
    readonly eventType: FieldRef<"VehicleGeofenceLog", 'GeofenceEvent'>
    readonly latitude: FieldRef<"VehicleGeofenceLog", 'Decimal'>
    readonly longitude: FieldRef<"VehicleGeofenceLog", 'Decimal'>
    readonly createdAt: FieldRef<"VehicleGeofenceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleGeofenceLog findUnique
   */
  export type VehicleGeofenceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleGeofenceLog to fetch.
     */
    where: VehicleGeofenceLogWhereUniqueInput
  }

  /**
   * VehicleGeofenceLog findUniqueOrThrow
   */
  export type VehicleGeofenceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleGeofenceLog to fetch.
     */
    where: VehicleGeofenceLogWhereUniqueInput
  }

  /**
   * VehicleGeofenceLog findFirst
   */
  export type VehicleGeofenceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleGeofenceLog to fetch.
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleGeofenceLogs to fetch.
     */
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleGeofenceLogs.
     */
    cursor?: VehicleGeofenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleGeofenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleGeofenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleGeofenceLogs.
     */
    distinct?: VehicleGeofenceLogScalarFieldEnum | VehicleGeofenceLogScalarFieldEnum[]
  }

  /**
   * VehicleGeofenceLog findFirstOrThrow
   */
  export type VehicleGeofenceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleGeofenceLog to fetch.
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleGeofenceLogs to fetch.
     */
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleGeofenceLogs.
     */
    cursor?: VehicleGeofenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleGeofenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleGeofenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleGeofenceLogs.
     */
    distinct?: VehicleGeofenceLogScalarFieldEnum | VehicleGeofenceLogScalarFieldEnum[]
  }

  /**
   * VehicleGeofenceLog findMany
   */
  export type VehicleGeofenceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleGeofenceLogs to fetch.
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleGeofenceLogs to fetch.
     */
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleGeofenceLogs.
     */
    cursor?: VehicleGeofenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleGeofenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleGeofenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleGeofenceLogs.
     */
    distinct?: VehicleGeofenceLogScalarFieldEnum | VehicleGeofenceLogScalarFieldEnum[]
  }

  /**
   * VehicleGeofenceLog create
   */
  export type VehicleGeofenceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleGeofenceLog.
     */
    data: XOR<VehicleGeofenceLogCreateInput, VehicleGeofenceLogUncheckedCreateInput>
  }

  /**
   * VehicleGeofenceLog createMany
   */
  export type VehicleGeofenceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleGeofenceLogs.
     */
    data: VehicleGeofenceLogCreateManyInput | VehicleGeofenceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleGeofenceLog update
   */
  export type VehicleGeofenceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleGeofenceLog.
     */
    data: XOR<VehicleGeofenceLogUpdateInput, VehicleGeofenceLogUncheckedUpdateInput>
    /**
     * Choose, which VehicleGeofenceLog to update.
     */
    where: VehicleGeofenceLogWhereUniqueInput
  }

  /**
   * VehicleGeofenceLog updateMany
   */
  export type VehicleGeofenceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleGeofenceLogs.
     */
    data: XOR<VehicleGeofenceLogUpdateManyMutationInput, VehicleGeofenceLogUncheckedUpdateManyInput>
    /**
     * Filter which VehicleGeofenceLogs to update
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * Limit how many VehicleGeofenceLogs to update.
     */
    limit?: number
  }

  /**
   * VehicleGeofenceLog upsert
   */
  export type VehicleGeofenceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleGeofenceLog to update in case it exists.
     */
    where: VehicleGeofenceLogWhereUniqueInput
    /**
     * In case the VehicleGeofenceLog found by the `where` argument doesn't exist, create a new VehicleGeofenceLog with this data.
     */
    create: XOR<VehicleGeofenceLogCreateInput, VehicleGeofenceLogUncheckedCreateInput>
    /**
     * In case the VehicleGeofenceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleGeofenceLogUpdateInput, VehicleGeofenceLogUncheckedUpdateInput>
  }

  /**
   * VehicleGeofenceLog delete
   */
  export type VehicleGeofenceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    /**
     * Filter which VehicleGeofenceLog to delete.
     */
    where: VehicleGeofenceLogWhereUniqueInput
  }

  /**
   * VehicleGeofenceLog deleteMany
   */
  export type VehicleGeofenceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleGeofenceLogs to delete
     */
    where?: VehicleGeofenceLogWhereInput
    /**
     * Limit how many VehicleGeofenceLogs to delete.
     */
    limit?: number
  }

  /**
   * VehicleGeofenceLog without action
   */
  export type VehicleGeofenceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceLog
   */

  export type AggregateMaintenanceLog = {
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  export type MaintenanceLogAvgAggregateOutputType = {
    maintenanceId: number | null
    vehicleId: number | null
    currentKm: Decimal | null
    cost: Decimal | null
    createdBy: number | null
  }

  export type MaintenanceLogSumAggregateOutputType = {
    maintenanceId: number | null
    vehicleId: number | null
    currentKm: Decimal | null
    cost: Decimal | null
    createdBy: number | null
  }

  export type MaintenanceLogMinAggregateOutputType = {
    maintenanceId: number | null
    vehicleId: number | null
    maintenanceType: string | null
    description: string | null
    maintenanceDate: Date | null
    currentKm: Decimal | null
    cost: Decimal | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type MaintenanceLogMaxAggregateOutputType = {
    maintenanceId: number | null
    vehicleId: number | null
    maintenanceType: string | null
    description: string | null
    maintenanceDate: Date | null
    currentKm: Decimal | null
    cost: Decimal | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type MaintenanceLogCountAggregateOutputType = {
    maintenanceId: number
    vehicleId: number
    maintenanceType: number
    description: number
    maintenanceDate: number
    currentKm: number
    cost: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type MaintenanceLogAvgAggregateInputType = {
    maintenanceId?: true
    vehicleId?: true
    currentKm?: true
    cost?: true
    createdBy?: true
  }

  export type MaintenanceLogSumAggregateInputType = {
    maintenanceId?: true
    vehicleId?: true
    currentKm?: true
    cost?: true
    createdBy?: true
  }

  export type MaintenanceLogMinAggregateInputType = {
    maintenanceId?: true
    vehicleId?: true
    maintenanceType?: true
    description?: true
    maintenanceDate?: true
    currentKm?: true
    cost?: true
    createdBy?: true
    createdAt?: true
  }

  export type MaintenanceLogMaxAggregateInputType = {
    maintenanceId?: true
    vehicleId?: true
    maintenanceType?: true
    description?: true
    maintenanceDate?: true
    currentKm?: true
    cost?: true
    createdBy?: true
    createdAt?: true
  }

  export type MaintenanceLogCountAggregateInputType = {
    maintenanceId?: true
    vehicleId?: true
    maintenanceType?: true
    description?: true
    maintenanceDate?: true
    currentKm?: true
    cost?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLog to aggregate.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceLogs
    **/
    _count?: true | MaintenanceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type GetMaintenanceLogAggregateType<T extends MaintenanceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceLog[P]>
      : GetScalarType<T[P], AggregateMaintenanceLog[P]>
  }




  export type MaintenanceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithAggregationInput | MaintenanceLogOrderByWithAggregationInput[]
    by: MaintenanceLogScalarFieldEnum[] | MaintenanceLogScalarFieldEnum
    having?: MaintenanceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceLogCountAggregateInputType | true
    _avg?: MaintenanceLogAvgAggregateInputType
    _sum?: MaintenanceLogSumAggregateInputType
    _min?: MaintenanceLogMinAggregateInputType
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type MaintenanceLogGroupByOutputType = {
    maintenanceId: number
    vehicleId: number
    maintenanceType: string
    description: string | null
    maintenanceDate: Date
    currentKm: Decimal
    cost: Decimal | null
    createdBy: number
    createdAt: Date
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  type GetMaintenanceLogGroupByPayload<T extends MaintenanceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenanceId?: boolean
    vehicleId?: boolean
    maintenanceType?: boolean
    description?: boolean
    maintenanceDate?: boolean
    currentKm?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>



  export type MaintenanceLogSelectScalar = {
    maintenanceId?: boolean
    vehicleId?: boolean
    maintenanceType?: boolean
    description?: boolean
    maintenanceDate?: boolean
    currentKm?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type MaintenanceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maintenanceId" | "vehicleId" | "maintenanceType" | "description" | "maintenanceDate" | "currentKm" | "cost" | "createdBy" | "createdAt", ExtArgs["result"]["maintenanceLog"]>
  export type MaintenanceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceLog"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maintenanceId: number
      vehicleId: number
      maintenanceType: string
      description: string | null
      maintenanceDate: Date
      currentKm: Prisma.Decimal
      cost: Prisma.Decimal | null
      createdBy: number
      createdAt: Date
    }, ExtArgs["result"]["maintenanceLog"]>
    composites: {}
  }

  type MaintenanceLogGetPayload<S extends boolean | null | undefined | MaintenanceLogDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceLogPayload, S>

  type MaintenanceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceLogCountAggregateInputType | true
    }

  export interface MaintenanceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceLog'], meta: { name: 'MaintenanceLog' } }
    /**
     * Find zero or one MaintenanceLog that matches the filter.
     * @param {MaintenanceLogFindUniqueArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceLogFindUniqueArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceLogFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceLogFindFirstArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany()
     * 
     * // Get first 10 MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany({ take: 10 })
     * 
     * // Only select the `maintenanceId`
     * const maintenanceLogWithMaintenanceIdOnly = await prisma.maintenanceLog.findMany({ select: { maintenanceId: true } })
     * 
     */
    findMany<T extends MaintenanceLogFindManyArgs>(args?: SelectSubset<T, MaintenanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceLog.
     * @param {MaintenanceLogCreateArgs} args - Arguments to create a MaintenanceLog.
     * @example
     * // Create one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.create({
     *   data: {
     *     // ... data to create a MaintenanceLog
     *   }
     * })
     * 
     */
    create<T extends MaintenanceLogCreateArgs>(args: SelectSubset<T, MaintenanceLogCreateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceLogs.
     * @param {MaintenanceLogCreateManyArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceLogCreateManyArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaintenanceLog.
     * @param {MaintenanceLogDeleteArgs} args - Arguments to delete one MaintenanceLog.
     * @example
     * // Delete one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceLog
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceLogDeleteArgs>(args: SelectSubset<T, MaintenanceLogDeleteArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceLog.
     * @param {MaintenanceLogUpdateArgs} args - Arguments to update one MaintenanceLog.
     * @example
     * // Update one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceLogUpdateArgs>(args: SelectSubset<T, MaintenanceLogUpdateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceLogs.
     * @param {MaintenanceLogDeleteManyArgs} args - Arguments to filter MaintenanceLogs to delete.
     * @example
     * // Delete a few MaintenanceLogs
     * const { count } = await prisma.maintenanceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceLogDeleteManyArgs>(args?: SelectSubset<T, MaintenanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceLogUpdateManyArgs>(args: SelectSubset<T, MaintenanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceLog.
     * @param {MaintenanceLogUpsertArgs} args - Arguments to update or create a MaintenanceLog.
     * @example
     * // Update or create a MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.upsert({
     *   create: {
     *     // ... data to create a MaintenanceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceLog we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceLogUpsertArgs>(args: SelectSubset<T, MaintenanceLogUpsertArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogCountArgs} args - Arguments to filter MaintenanceLogs to count.
     * @example
     * // Count the number of MaintenanceLogs
     * const count = await prisma.maintenanceLog.count({
     *   where: {
     *     // ... the filter for the MaintenanceLogs we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceLogCountArgs>(
      args?: Subset<T, MaintenanceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceLogAggregateArgs>(args: Subset<T, MaintenanceLogAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceLogAggregateType<T>>

    /**
     * Group by MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceLogGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceLog model
   */
  readonly fields: MaintenanceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceLog model
   */
  interface MaintenanceLogFieldRefs {
    readonly maintenanceId: FieldRef<"MaintenanceLog", 'Int'>
    readonly vehicleId: FieldRef<"MaintenanceLog", 'Int'>
    readonly maintenanceType: FieldRef<"MaintenanceLog", 'String'>
    readonly description: FieldRef<"MaintenanceLog", 'String'>
    readonly maintenanceDate: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly currentKm: FieldRef<"MaintenanceLog", 'Decimal'>
    readonly cost: FieldRef<"MaintenanceLog", 'Decimal'>
    readonly createdBy: FieldRef<"MaintenanceLog", 'Int'>
    readonly createdAt: FieldRef<"MaintenanceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceLog findUnique
   */
  export type MaintenanceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findUniqueOrThrow
   */
  export type MaintenanceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findFirst
   */
  export type MaintenanceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findFirstOrThrow
   */
  export type MaintenanceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findMany
   */
  export type MaintenanceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLogs to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog create
   */
  export type MaintenanceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceLog.
     */
    data: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
  }

  /**
   * MaintenanceLog createMany
   */
  export type MaintenanceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceLog update
   */
  export type MaintenanceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceLog.
     */
    data: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceLog to update.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog updateMany
   */
  export type MaintenanceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceLogs.
     */
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceLogs to update
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to update.
     */
    limit?: number
  }

  /**
   * MaintenanceLog upsert
   */
  export type MaintenanceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceLog to update in case it exists.
     */
    where: MaintenanceLogWhereUniqueInput
    /**
     * In case the MaintenanceLog found by the `where` argument doesn't exist, create a new MaintenanceLog with this data.
     */
    create: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
    /**
     * In case the MaintenanceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
  }

  /**
   * MaintenanceLog delete
   */
  export type MaintenanceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceLog to delete.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog deleteMany
   */
  export type MaintenanceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLogs to delete
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceLog without action
   */
  export type MaintenanceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    fullName: string | null
    phone: string | null
    email: string | null
    identityNumber: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    fullName: string | null
    phone: string | null
    email: string | null
    identityNumber: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    fullName: number
    phone: number
    email: number
    identityNumber: number
    address: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    fullName?: true
    phone?: true
    email?: true
    identityNumber?: true
    address?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    fullName?: true
    phone?: true
    email?: true
    identityNumber?: true
    address?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    fullName?: true
    phone?: true
    email?: true
    identityNumber?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    fullName: string
    phone: string
    email: string | null
    identityNumber: string | null
    address: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    identityNumber?: boolean
    address?: boolean
    createdAt?: boolean
    rentals?: boolean | Customer$rentalsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    customerId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    identityNumber?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "fullName" | "phone" | "email" | "identityNumber" | "address" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | Customer$rentalsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      rentals: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      fullName: string
      phone: string
      email: string | null
      identityNumber: string | null
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
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
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
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
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends Customer$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly fullName: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly identityNumber: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.rentals
   */
  export type Customer$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    rentalId: number | null
    vehicleId: number | null
    customerId: number | null
    rentedBy: number | null
    startKm: Decimal | null
    endKm: Decimal | null
    rentalFee: number | null
  }

  export type RentalSumAggregateOutputType = {
    rentalId: number | null
    vehicleId: number | null
    customerId: number | null
    rentedBy: number | null
    startKm: Decimal | null
    endKm: Decimal | null
    rentalFee: number | null
  }

  export type RentalMinAggregateOutputType = {
    rentalId: number | null
    vehicleId: number | null
    customerId: number | null
    rentedBy: number | null
    startTime: Date | null
    endTime: Date | null
    startKm: Decimal | null
    endKm: Decimal | null
    rentalStatus: $Enums.RentalStatus | null
    createdAt: Date | null
    rentalFee: number | null
  }

  export type RentalMaxAggregateOutputType = {
    rentalId: number | null
    vehicleId: number | null
    customerId: number | null
    rentedBy: number | null
    startTime: Date | null
    endTime: Date | null
    startKm: Decimal | null
    endKm: Decimal | null
    rentalStatus: $Enums.RentalStatus | null
    createdAt: Date | null
    rentalFee: number | null
  }

  export type RentalCountAggregateOutputType = {
    rentalId: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: number
    endTime: number
    startKm: number
    endKm: number
    rentalStatus: number
    createdAt: number
    rentalFee: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    rentalId?: true
    vehicleId?: true
    customerId?: true
    rentedBy?: true
    startKm?: true
    endKm?: true
    rentalFee?: true
  }

  export type RentalSumAggregateInputType = {
    rentalId?: true
    vehicleId?: true
    customerId?: true
    rentedBy?: true
    startKm?: true
    endKm?: true
    rentalFee?: true
  }

  export type RentalMinAggregateInputType = {
    rentalId?: true
    vehicleId?: true
    customerId?: true
    rentedBy?: true
    startTime?: true
    endTime?: true
    startKm?: true
    endKm?: true
    rentalStatus?: true
    createdAt?: true
    rentalFee?: true
  }

  export type RentalMaxAggregateInputType = {
    rentalId?: true
    vehicleId?: true
    customerId?: true
    rentedBy?: true
    startTime?: true
    endTime?: true
    startKm?: true
    endKm?: true
    rentalStatus?: true
    createdAt?: true
    rentalFee?: true
  }

  export type RentalCountAggregateInputType = {
    rentalId?: true
    vehicleId?: true
    customerId?: true
    rentedBy?: true
    startTime?: true
    endTime?: true
    startKm?: true
    endKm?: true
    rentalStatus?: true
    createdAt?: true
    rentalFee?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    rentalId: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: Date
    endTime: Date | null
    startKm: Decimal
    endKm: Decimal | null
    rentalStatus: $Enums.RentalStatus
    createdAt: Date
    rentalFee: number
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rentalId?: boolean
    vehicleId?: boolean
    customerId?: boolean
    rentedBy?: boolean
    startTime?: boolean
    endTime?: boolean
    startKm?: boolean
    endKm?: boolean
    rentalStatus?: boolean
    createdAt?: boolean
    rentalFee?: boolean
    gpsLogs?: boolean | Rental$gpsLogsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    alerts?: boolean | Rental$alertsArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>



  export type RentalSelectScalar = {
    rentalId?: boolean
    vehicleId?: boolean
    customerId?: boolean
    rentedBy?: boolean
    startTime?: boolean
    endTime?: boolean
    startKm?: boolean
    endKm?: boolean
    rentalStatus?: boolean
    createdAt?: boolean
    rentalFee?: boolean
  }

  export type RentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rentalId" | "vehicleId" | "customerId" | "rentedBy" | "startTime" | "endTime" | "startKm" | "endKm" | "rentalStatus" | "createdAt" | "rentalFee", ExtArgs["result"]["rental"]>
  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpsLogs?: boolean | Rental$gpsLogsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    alerts?: boolean | Rental$alertsArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      gpsLogs: Prisma.$GpsLogPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      alerts: Prisma.$VehicleAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      rentalId: number
      vehicleId: number
      customerId: number
      rentedBy: number
      startTime: Date
      endTime: Date | null
      startKm: Prisma.Decimal
      endKm: Prisma.Decimal | null
      rentalStatus: $Enums.RentalStatus
      createdAt: Date
      rentalFee: number
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalFindUniqueArgs>(args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalFindFirstArgs>(args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `rentalId`
     * const rentalWithRentalIdOnly = await prisma.rental.findMany({ select: { rentalId: true } })
     * 
     */
    findMany<T extends RentalFindManyArgs>(args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends RentalCreateArgs>(args: SelectSubset<T, RentalCreateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalCreateManyArgs>(args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends RentalDeleteArgs>(args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUpdateArgs>(args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalDeleteManyArgs>(args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUpdateManyArgs>(args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends RentalUpsertArgs>(args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
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
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gpsLogs<T extends Rental$gpsLogsArgs<ExtArgs> = {}>(args?: Subset<T, Rental$gpsLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alerts<T extends Rental$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Rental$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rental model
   */
  interface RentalFieldRefs {
    readonly rentalId: FieldRef<"Rental", 'Int'>
    readonly vehicleId: FieldRef<"Rental", 'Int'>
    readonly customerId: FieldRef<"Rental", 'Int'>
    readonly rentedBy: FieldRef<"Rental", 'Int'>
    readonly startTime: FieldRef<"Rental", 'DateTime'>
    readonly endTime: FieldRef<"Rental", 'DateTime'>
    readonly startKm: FieldRef<"Rental", 'Decimal'>
    readonly endKm: FieldRef<"Rental", 'Decimal'>
    readonly rentalStatus: FieldRef<"Rental", 'RentalStatus'>
    readonly createdAt: FieldRef<"Rental", 'DateTime'>
    readonly rentalFee: FieldRef<"Rental", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
  }

  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
  }

  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
  }

  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to delete.
     */
    limit?: number
  }

  /**
   * Rental.gpsLogs
   */
  export type Rental$gpsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    where?: GpsLogWhereInput
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    cursor?: GpsLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GpsLogScalarFieldEnum | GpsLogScalarFieldEnum[]
  }

  /**
   * Rental.alerts
   */
  export type Rental$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    where?: VehicleAlertWhereInput
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    cursor?: VehicleAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleAlertScalarFieldEnum | VehicleAlertScalarFieldEnum[]
  }

  /**
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyReport
   */

  export type AggregateMonthlyReport = {
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  export type MonthlyReportAvgAggregateOutputType = {
    reportId: number | null
    vehicleId: number | null
    totalKm: Decimal | null
    totalAlerts: number | null
    totalImpacts: number | null
    totalOutOfZone: number | null
  }

  export type MonthlyReportSumAggregateOutputType = {
    reportId: number | null
    vehicleId: number | null
    totalKm: Decimal | null
    totalAlerts: number | null
    totalImpacts: number | null
    totalOutOfZone: number | null
  }

  export type MonthlyReportMinAggregateOutputType = {
    reportId: number | null
    vehicleId: number | null
    reportMonth: Date | null
    totalKm: Decimal | null
    totalAlerts: number | null
    totalImpacts: number | null
    totalOutOfZone: number | null
    generatedAt: Date | null
  }

  export type MonthlyReportMaxAggregateOutputType = {
    reportId: number | null
    vehicleId: number | null
    reportMonth: Date | null
    totalKm: Decimal | null
    totalAlerts: number | null
    totalImpacts: number | null
    totalOutOfZone: number | null
    generatedAt: Date | null
  }

  export type MonthlyReportCountAggregateOutputType = {
    reportId: number
    vehicleId: number
    reportMonth: number
    totalKm: number
    totalAlerts: number
    totalImpacts: number
    totalOutOfZone: number
    generatedAt: number
    _all: number
  }


  export type MonthlyReportAvgAggregateInputType = {
    reportId?: true
    vehicleId?: true
    totalKm?: true
    totalAlerts?: true
    totalImpacts?: true
    totalOutOfZone?: true
  }

  export type MonthlyReportSumAggregateInputType = {
    reportId?: true
    vehicleId?: true
    totalKm?: true
    totalAlerts?: true
    totalImpacts?: true
    totalOutOfZone?: true
  }

  export type MonthlyReportMinAggregateInputType = {
    reportId?: true
    vehicleId?: true
    reportMonth?: true
    totalKm?: true
    totalAlerts?: true
    totalImpacts?: true
    totalOutOfZone?: true
    generatedAt?: true
  }

  export type MonthlyReportMaxAggregateInputType = {
    reportId?: true
    vehicleId?: true
    reportMonth?: true
    totalKm?: true
    totalAlerts?: true
    totalImpacts?: true
    totalOutOfZone?: true
    generatedAt?: true
  }

  export type MonthlyReportCountAggregateInputType = {
    reportId?: true
    vehicleId?: true
    reportMonth?: true
    totalKm?: true
    totalAlerts?: true
    totalImpacts?: true
    totalOutOfZone?: true
    generatedAt?: true
    _all?: true
  }

  export type MonthlyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReport to aggregate.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyReports
    **/
    _count?: true | MonthlyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type GetMonthlyReportAggregateType<T extends MonthlyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyReport[P]>
      : GetScalarType<T[P], AggregateMonthlyReport[P]>
  }




  export type MonthlyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithAggregationInput | MonthlyReportOrderByWithAggregationInput[]
    by: MonthlyReportScalarFieldEnum[] | MonthlyReportScalarFieldEnum
    having?: MonthlyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyReportCountAggregateInputType | true
    _avg?: MonthlyReportAvgAggregateInputType
    _sum?: MonthlyReportSumAggregateInputType
    _min?: MonthlyReportMinAggregateInputType
    _max?: MonthlyReportMaxAggregateInputType
  }

  export type MonthlyReportGroupByOutputType = {
    reportId: number
    vehicleId: number
    reportMonth: Date
    totalKm: Decimal
    totalAlerts: number
    totalImpacts: number
    totalOutOfZone: number
    generatedAt: Date
    _count: MonthlyReportCountAggregateOutputType | null
    _avg: MonthlyReportAvgAggregateOutputType | null
    _sum: MonthlyReportSumAggregateOutputType | null
    _min: MonthlyReportMinAggregateOutputType | null
    _max: MonthlyReportMaxAggregateOutputType | null
  }

  type GetMonthlyReportGroupByPayload<T extends MonthlyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    vehicleId?: boolean
    reportMonth?: boolean
    totalKm?: boolean
    totalAlerts?: boolean
    totalImpacts?: boolean
    totalOutOfZone?: boolean
    generatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyReport"]>



  export type MonthlyReportSelectScalar = {
    reportId?: boolean
    vehicleId?: boolean
    reportMonth?: boolean
    totalKm?: boolean
    totalAlerts?: boolean
    totalImpacts?: boolean
    totalOutOfZone?: boolean
    generatedAt?: boolean
  }

  export type MonthlyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reportId" | "vehicleId" | "reportMonth" | "totalKm" | "totalAlerts" | "totalImpacts" | "totalOutOfZone" | "generatedAt", ExtArgs["result"]["monthlyReport"]>
  export type MonthlyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MonthlyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyReport"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reportId: number
      vehicleId: number
      reportMonth: Date
      totalKm: Prisma.Decimal
      totalAlerts: number
      totalImpacts: number
      totalOutOfZone: number
      generatedAt: Date
    }, ExtArgs["result"]["monthlyReport"]>
    composites: {}
  }

  type MonthlyReportGetPayload<S extends boolean | null | undefined | MonthlyReportDefaultArgs> = $Result.GetResult<Prisma.$MonthlyReportPayload, S>

  type MonthlyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyReportCountAggregateInputType | true
    }

  export interface MonthlyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyReport'], meta: { name: 'MonthlyReport' } }
    /**
     * Find zero or one MonthlyReport that matches the filter.
     * @param {MonthlyReportFindUniqueArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyReportFindUniqueArgs>(args: SelectSubset<T, MonthlyReportFindUniqueArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyReportFindUniqueOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyReportFindFirstArgs>(args?: SelectSubset<T, MonthlyReportFindFirstArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindFirstOrThrowArgs} args - Arguments to find a MonthlyReport
     * @example
     * // Get one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany()
     * 
     * // Get first 10 MonthlyReports
     * const monthlyReports = await prisma.monthlyReport.findMany({ take: 10 })
     * 
     * // Only select the `reportId`
     * const monthlyReportWithReportIdOnly = await prisma.monthlyReport.findMany({ select: { reportId: true } })
     * 
     */
    findMany<T extends MonthlyReportFindManyArgs>(args?: SelectSubset<T, MonthlyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyReport.
     * @param {MonthlyReportCreateArgs} args - Arguments to create a MonthlyReport.
     * @example
     * // Create one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.create({
     *   data: {
     *     // ... data to create a MonthlyReport
     *   }
     * })
     * 
     */
    create<T extends MonthlyReportCreateArgs>(args: SelectSubset<T, MonthlyReportCreateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyReports.
     * @param {MonthlyReportCreateManyArgs} args - Arguments to create many MonthlyReports.
     * @example
     * // Create many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyReportCreateManyArgs>(args?: SelectSubset<T, MonthlyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyReport.
     * @param {MonthlyReportDeleteArgs} args - Arguments to delete one MonthlyReport.
     * @example
     * // Delete one MonthlyReport
     * const MonthlyReport = await prisma.monthlyReport.delete({
     *   where: {
     *     // ... filter to delete one MonthlyReport
     *   }
     * })
     * 
     */
    delete<T extends MonthlyReportDeleteArgs>(args: SelectSubset<T, MonthlyReportDeleteArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyReport.
     * @param {MonthlyReportUpdateArgs} args - Arguments to update one MonthlyReport.
     * @example
     * // Update one MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyReportUpdateArgs>(args: SelectSubset<T, MonthlyReportUpdateArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyReports.
     * @param {MonthlyReportDeleteManyArgs} args - Arguments to filter MonthlyReports to delete.
     * @example
     * // Delete a few MonthlyReports
     * const { count } = await prisma.monthlyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyReportDeleteManyArgs>(args?: SelectSubset<T, MonthlyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyReports
     * const monthlyReport = await prisma.monthlyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyReportUpdateManyArgs>(args: SelectSubset<T, MonthlyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyReport.
     * @param {MonthlyReportUpsertArgs} args - Arguments to update or create a MonthlyReport.
     * @example
     * // Update or create a MonthlyReport
     * const monthlyReport = await prisma.monthlyReport.upsert({
     *   create: {
     *     // ... data to create a MonthlyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyReportUpsertArgs>(args: SelectSubset<T, MonthlyReportUpsertArgs<ExtArgs>>): Prisma__MonthlyReportClient<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportCountArgs} args - Arguments to filter MonthlyReports to count.
     * @example
     * // Count the number of MonthlyReports
     * const count = await prisma.monthlyReport.count({
     *   where: {
     *     // ... the filter for the MonthlyReports we want to count
     *   }
     * })
    **/
    count<T extends MonthlyReportCountArgs>(
      args?: Subset<T, MonthlyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyReportAggregateArgs>(args: Subset<T, MonthlyReportAggregateArgs>): Prisma.PrismaPromise<GetMonthlyReportAggregateType<T>>

    /**
     * Group by MonthlyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyReportGroupByArgs} args - Group by arguments.
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
      T extends MonthlyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyReport model
   */
  readonly fields: MonthlyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlyReport model
   */
  interface MonthlyReportFieldRefs {
    readonly reportId: FieldRef<"MonthlyReport", 'Int'>
    readonly vehicleId: FieldRef<"MonthlyReport", 'Int'>
    readonly reportMonth: FieldRef<"MonthlyReport", 'DateTime'>
    readonly totalKm: FieldRef<"MonthlyReport", 'Decimal'>
    readonly totalAlerts: FieldRef<"MonthlyReport", 'Int'>
    readonly totalImpacts: FieldRef<"MonthlyReport", 'Int'>
    readonly totalOutOfZone: FieldRef<"MonthlyReport", 'Int'>
    readonly generatedAt: FieldRef<"MonthlyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyReport findUnique
   */
  export type MonthlyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findUniqueOrThrow
   */
  export type MonthlyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport findFirst
   */
  export type MonthlyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findFirstOrThrow
   */
  export type MonthlyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReport to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport findMany
   */
  export type MonthlyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyReports to fetch.
     */
    where?: MonthlyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyReports to fetch.
     */
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyReports.
     */
    cursor?: MonthlyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyReports.
     */
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * MonthlyReport create
   */
  export type MonthlyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyReport.
     */
    data: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
  }

  /**
   * MonthlyReport createMany
   */
  export type MonthlyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyReports.
     */
    data: MonthlyReportCreateManyInput | MonthlyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyReport update
   */
  export type MonthlyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyReport.
     */
    data: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
    /**
     * Choose, which MonthlyReport to update.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport updateMany
   */
  export type MonthlyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyReports.
     */
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyReports to update
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to update.
     */
    limit?: number
  }

  /**
   * MonthlyReport upsert
   */
  export type MonthlyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyReport to update in case it exists.
     */
    where: MonthlyReportWhereUniqueInput
    /**
     * In case the MonthlyReport found by the `where` argument doesn't exist, create a new MonthlyReport with this data.
     */
    create: XOR<MonthlyReportCreateInput, MonthlyReportUncheckedCreateInput>
    /**
     * In case the MonthlyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyReportUpdateInput, MonthlyReportUncheckedUpdateInput>
  }

  /**
   * MonthlyReport delete
   */
  export type MonthlyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    /**
     * Filter which MonthlyReport to delete.
     */
    where: MonthlyReportWhereUniqueInput
  }

  /**
   * MonthlyReport deleteMany
   */
  export type MonthlyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyReports to delete
     */
    where?: MonthlyReportWhereInput
    /**
     * Limit how many MonthlyReports to delete.
     */
    limit?: number
  }

  /**
   * MonthlyReport without action
   */
  export type MonthlyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
  }


  /**
   * Model GpsLog
   */

  export type AggregateGpsLog = {
    _count: GpsLogCountAggregateOutputType | null
    _avg: GpsLogAvgAggregateOutputType | null
    _sum: GpsLogSumAggregateOutputType | null
    _min: GpsLogMinAggregateOutputType | null
    _max: GpsLogMaxAggregateOutputType | null
  }

  export type GpsLogAvgAggregateOutputType = {
    gpsLogId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    speedKmh: Decimal | null
    distanceFromHome: Decimal | null
    homeLatitude: Decimal | null
    homeLongitude: Decimal | null
  }

  export type GpsLogSumAggregateOutputType = {
    gpsLogId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    speedKmh: Decimal | null
    distanceFromHome: Decimal | null
    homeLatitude: Decimal | null
    homeLongitude: Decimal | null
  }

  export type GpsLogMinAggregateOutputType = {
    gpsLogId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    speedKmh: Decimal | null
    gpsStatus: $Enums.GpsStatus | null
    recordedAt: Date | null
    distanceFromHome: Decimal | null
    homeLatitude: Decimal | null
    homeLongitude: Decimal | null
  }

  export type GpsLogMaxAggregateOutputType = {
    gpsLogId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    speedKmh: Decimal | null
    gpsStatus: $Enums.GpsStatus | null
    recordedAt: Date | null
    distanceFromHome: Decimal | null
    homeLatitude: Decimal | null
    homeLongitude: Decimal | null
  }

  export type GpsLogCountAggregateOutputType = {
    gpsLogId: number
    vehicleId: number
    rentalId: number
    latitude: number
    longitude: number
    speedKmh: number
    gpsStatus: number
    recordedAt: number
    distanceFromHome: number
    homeLatitude: number
    homeLongitude: number
    _all: number
  }


  export type GpsLogAvgAggregateInputType = {
    gpsLogId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    distanceFromHome?: true
    homeLatitude?: true
    homeLongitude?: true
  }

  export type GpsLogSumAggregateInputType = {
    gpsLogId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    distanceFromHome?: true
    homeLatitude?: true
    homeLongitude?: true
  }

  export type GpsLogMinAggregateInputType = {
    gpsLogId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    gpsStatus?: true
    recordedAt?: true
    distanceFromHome?: true
    homeLatitude?: true
    homeLongitude?: true
  }

  export type GpsLogMaxAggregateInputType = {
    gpsLogId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    gpsStatus?: true
    recordedAt?: true
    distanceFromHome?: true
    homeLatitude?: true
    homeLongitude?: true
  }

  export type GpsLogCountAggregateInputType = {
    gpsLogId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    gpsStatus?: true
    recordedAt?: true
    distanceFromHome?: true
    homeLatitude?: true
    homeLongitude?: true
    _all?: true
  }

  export type GpsLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsLog to aggregate.
     */
    where?: GpsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsLogs to fetch.
     */
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GpsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GpsLogs
    **/
    _count?: true | GpsLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GpsLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GpsLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GpsLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GpsLogMaxAggregateInputType
  }

  export type GetGpsLogAggregateType<T extends GpsLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGpsLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGpsLog[P]>
      : GetScalarType<T[P], AggregateGpsLog[P]>
  }




  export type GpsLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpsLogWhereInput
    orderBy?: GpsLogOrderByWithAggregationInput | GpsLogOrderByWithAggregationInput[]
    by: GpsLogScalarFieldEnum[] | GpsLogScalarFieldEnum
    having?: GpsLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GpsLogCountAggregateInputType | true
    _avg?: GpsLogAvgAggregateInputType
    _sum?: GpsLogSumAggregateInputType
    _min?: GpsLogMinAggregateInputType
    _max?: GpsLogMaxAggregateInputType
  }

  export type GpsLogGroupByOutputType = {
    gpsLogId: number
    vehicleId: number
    rentalId: number | null
    latitude: Decimal
    longitude: Decimal
    speedKmh: Decimal
    gpsStatus: $Enums.GpsStatus
    recordedAt: Date
    distanceFromHome: Decimal | null
    homeLatitude: Decimal | null
    homeLongitude: Decimal | null
    _count: GpsLogCountAggregateOutputType | null
    _avg: GpsLogAvgAggregateOutputType | null
    _sum: GpsLogSumAggregateOutputType | null
    _min: GpsLogMinAggregateOutputType | null
    _max: GpsLogMaxAggregateOutputType | null
  }

  type GetGpsLogGroupByPayload<T extends GpsLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GpsLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GpsLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GpsLogGroupByOutputType[P]>
            : GetScalarType<T[P], GpsLogGroupByOutputType[P]>
        }
      >
    >


  export type GpsLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gpsLogId?: boolean
    vehicleId?: boolean
    rentalId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    gpsStatus?: boolean
    recordedAt?: boolean
    distanceFromHome?: boolean
    homeLatitude?: boolean
    homeLongitude?: boolean
    rental?: boolean | GpsLog$rentalArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gpsLog"]>



  export type GpsLogSelectScalar = {
    gpsLogId?: boolean
    vehicleId?: boolean
    rentalId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    gpsStatus?: boolean
    recordedAt?: boolean
    distanceFromHome?: boolean
    homeLatitude?: boolean
    homeLongitude?: boolean
  }

  export type GpsLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gpsLogId" | "vehicleId" | "rentalId" | "latitude" | "longitude" | "speedKmh" | "gpsStatus" | "recordedAt" | "distanceFromHome" | "homeLatitude" | "homeLongitude", ExtArgs["result"]["gpsLog"]>
  export type GpsLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | GpsLog$rentalArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $GpsLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GpsLog"
    objects: {
      rental: Prisma.$RentalPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gpsLogId: number
      vehicleId: number
      rentalId: number | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      speedKmh: Prisma.Decimal
      gpsStatus: $Enums.GpsStatus
      recordedAt: Date
      distanceFromHome: Prisma.Decimal | null
      homeLatitude: Prisma.Decimal | null
      homeLongitude: Prisma.Decimal | null
    }, ExtArgs["result"]["gpsLog"]>
    composites: {}
  }

  type GpsLogGetPayload<S extends boolean | null | undefined | GpsLogDefaultArgs> = $Result.GetResult<Prisma.$GpsLogPayload, S>

  type GpsLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GpsLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GpsLogCountAggregateInputType | true
    }

  export interface GpsLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GpsLog'], meta: { name: 'GpsLog' } }
    /**
     * Find zero or one GpsLog that matches the filter.
     * @param {GpsLogFindUniqueArgs} args - Arguments to find a GpsLog
     * @example
     * // Get one GpsLog
     * const gpsLog = await prisma.gpsLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GpsLogFindUniqueArgs>(args: SelectSubset<T, GpsLogFindUniqueArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GpsLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GpsLogFindUniqueOrThrowArgs} args - Arguments to find a GpsLog
     * @example
     * // Get one GpsLog
     * const gpsLog = await prisma.gpsLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GpsLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GpsLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogFindFirstArgs} args - Arguments to find a GpsLog
     * @example
     * // Get one GpsLog
     * const gpsLog = await prisma.gpsLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GpsLogFindFirstArgs>(args?: SelectSubset<T, GpsLogFindFirstArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpsLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogFindFirstOrThrowArgs} args - Arguments to find a GpsLog
     * @example
     * // Get one GpsLog
     * const gpsLog = await prisma.gpsLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GpsLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GpsLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GpsLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GpsLogs
     * const gpsLogs = await prisma.gpsLog.findMany()
     * 
     * // Get first 10 GpsLogs
     * const gpsLogs = await prisma.gpsLog.findMany({ take: 10 })
     * 
     * // Only select the `gpsLogId`
     * const gpsLogWithGpsLogIdOnly = await prisma.gpsLog.findMany({ select: { gpsLogId: true } })
     * 
     */
    findMany<T extends GpsLogFindManyArgs>(args?: SelectSubset<T, GpsLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GpsLog.
     * @param {GpsLogCreateArgs} args - Arguments to create a GpsLog.
     * @example
     * // Create one GpsLog
     * const GpsLog = await prisma.gpsLog.create({
     *   data: {
     *     // ... data to create a GpsLog
     *   }
     * })
     * 
     */
    create<T extends GpsLogCreateArgs>(args: SelectSubset<T, GpsLogCreateArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GpsLogs.
     * @param {GpsLogCreateManyArgs} args - Arguments to create many GpsLogs.
     * @example
     * // Create many GpsLogs
     * const gpsLog = await prisma.gpsLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GpsLogCreateManyArgs>(args?: SelectSubset<T, GpsLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GpsLog.
     * @param {GpsLogDeleteArgs} args - Arguments to delete one GpsLog.
     * @example
     * // Delete one GpsLog
     * const GpsLog = await prisma.gpsLog.delete({
     *   where: {
     *     // ... filter to delete one GpsLog
     *   }
     * })
     * 
     */
    delete<T extends GpsLogDeleteArgs>(args: SelectSubset<T, GpsLogDeleteArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GpsLog.
     * @param {GpsLogUpdateArgs} args - Arguments to update one GpsLog.
     * @example
     * // Update one GpsLog
     * const gpsLog = await prisma.gpsLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GpsLogUpdateArgs>(args: SelectSubset<T, GpsLogUpdateArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GpsLogs.
     * @param {GpsLogDeleteManyArgs} args - Arguments to filter GpsLogs to delete.
     * @example
     * // Delete a few GpsLogs
     * const { count } = await prisma.gpsLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GpsLogDeleteManyArgs>(args?: SelectSubset<T, GpsLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GpsLogs
     * const gpsLog = await prisma.gpsLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GpsLogUpdateManyArgs>(args: SelectSubset<T, GpsLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GpsLog.
     * @param {GpsLogUpsertArgs} args - Arguments to update or create a GpsLog.
     * @example
     * // Update or create a GpsLog
     * const gpsLog = await prisma.gpsLog.upsert({
     *   create: {
     *     // ... data to create a GpsLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GpsLog we want to update
     *   }
     * })
     */
    upsert<T extends GpsLogUpsertArgs>(args: SelectSubset<T, GpsLogUpsertArgs<ExtArgs>>): Prisma__GpsLogClient<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GpsLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogCountArgs} args - Arguments to filter GpsLogs to count.
     * @example
     * // Count the number of GpsLogs
     * const count = await prisma.gpsLog.count({
     *   where: {
     *     // ... the filter for the GpsLogs we want to count
     *   }
     * })
    **/
    count<T extends GpsLogCountArgs>(
      args?: Subset<T, GpsLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GpsLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GpsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GpsLogAggregateArgs>(args: Subset<T, GpsLogAggregateArgs>): Prisma.PrismaPromise<GetGpsLogAggregateType<T>>

    /**
     * Group by GpsLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpsLogGroupByArgs} args - Group by arguments.
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
      T extends GpsLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GpsLogGroupByArgs['orderBy'] }
        : { orderBy?: GpsLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GpsLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGpsLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GpsLog model
   */
  readonly fields: GpsLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GpsLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GpsLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends GpsLog$rentalArgs<ExtArgs> = {}>(args?: Subset<T, GpsLog$rentalArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GpsLog model
   */
  interface GpsLogFieldRefs {
    readonly gpsLogId: FieldRef<"GpsLog", 'Int'>
    readonly vehicleId: FieldRef<"GpsLog", 'Int'>
    readonly rentalId: FieldRef<"GpsLog", 'Int'>
    readonly latitude: FieldRef<"GpsLog", 'Decimal'>
    readonly longitude: FieldRef<"GpsLog", 'Decimal'>
    readonly speedKmh: FieldRef<"GpsLog", 'Decimal'>
    readonly gpsStatus: FieldRef<"GpsLog", 'GpsStatus'>
    readonly recordedAt: FieldRef<"GpsLog", 'DateTime'>
    readonly distanceFromHome: FieldRef<"GpsLog", 'Decimal'>
    readonly homeLatitude: FieldRef<"GpsLog", 'Decimal'>
    readonly homeLongitude: FieldRef<"GpsLog", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * GpsLog findUnique
   */
  export type GpsLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter, which GpsLog to fetch.
     */
    where: GpsLogWhereUniqueInput
  }

  /**
   * GpsLog findUniqueOrThrow
   */
  export type GpsLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter, which GpsLog to fetch.
     */
    where: GpsLogWhereUniqueInput
  }

  /**
   * GpsLog findFirst
   */
  export type GpsLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter, which GpsLog to fetch.
     */
    where?: GpsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsLogs to fetch.
     */
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsLogs.
     */
    cursor?: GpsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsLogs.
     */
    distinct?: GpsLogScalarFieldEnum | GpsLogScalarFieldEnum[]
  }

  /**
   * GpsLog findFirstOrThrow
   */
  export type GpsLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter, which GpsLog to fetch.
     */
    where?: GpsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsLogs to fetch.
     */
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpsLogs.
     */
    cursor?: GpsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsLogs.
     */
    distinct?: GpsLogScalarFieldEnum | GpsLogScalarFieldEnum[]
  }

  /**
   * GpsLog findMany
   */
  export type GpsLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter, which GpsLogs to fetch.
     */
    where?: GpsLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpsLogs to fetch.
     */
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GpsLogs.
     */
    cursor?: GpsLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpsLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpsLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpsLogs.
     */
    distinct?: GpsLogScalarFieldEnum | GpsLogScalarFieldEnum[]
  }

  /**
   * GpsLog create
   */
  export type GpsLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GpsLog.
     */
    data: XOR<GpsLogCreateInput, GpsLogUncheckedCreateInput>
  }

  /**
   * GpsLog createMany
   */
  export type GpsLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GpsLogs.
     */
    data: GpsLogCreateManyInput | GpsLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GpsLog update
   */
  export type GpsLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GpsLog.
     */
    data: XOR<GpsLogUpdateInput, GpsLogUncheckedUpdateInput>
    /**
     * Choose, which GpsLog to update.
     */
    where: GpsLogWhereUniqueInput
  }

  /**
   * GpsLog updateMany
   */
  export type GpsLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GpsLogs.
     */
    data: XOR<GpsLogUpdateManyMutationInput, GpsLogUncheckedUpdateManyInput>
    /**
     * Filter which GpsLogs to update
     */
    where?: GpsLogWhereInput
    /**
     * Limit how many GpsLogs to update.
     */
    limit?: number
  }

  /**
   * GpsLog upsert
   */
  export type GpsLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GpsLog to update in case it exists.
     */
    where: GpsLogWhereUniqueInput
    /**
     * In case the GpsLog found by the `where` argument doesn't exist, create a new GpsLog with this data.
     */
    create: XOR<GpsLogCreateInput, GpsLogUncheckedCreateInput>
    /**
     * In case the GpsLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GpsLogUpdateInput, GpsLogUncheckedUpdateInput>
  }

  /**
   * GpsLog delete
   */
  export type GpsLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    /**
     * Filter which GpsLog to delete.
     */
    where: GpsLogWhereUniqueInput
  }

  /**
   * GpsLog deleteMany
   */
  export type GpsLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpsLogs to delete
     */
    where?: GpsLogWhereInput
    /**
     * Limit how many GpsLogs to delete.
     */
    limit?: number
  }

  /**
   * GpsLog.rental
   */
  export type GpsLog$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
  }

  /**
   * GpsLog without action
   */
  export type GpsLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
  }


  /**
   * Model VehicleAlert
   */

  export type AggregateVehicleAlert = {
    _count: VehicleAlertCountAggregateOutputType | null
    _avg: VehicleAlertAvgAggregateOutputType | null
    _sum: VehicleAlertSumAggregateOutputType | null
    _min: VehicleAlertMinAggregateOutputType | null
    _max: VehicleAlertMaxAggregateOutputType | null
  }

  export type VehicleAlertAvgAggregateOutputType = {
    alertId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type VehicleAlertSumAggregateOutputType = {
    alertId: number | null
    vehicleId: number | null
    rentalId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type VehicleAlertMinAggregateOutputType = {
    alertId: number | null
    vehicleId: number | null
    rentalId: number | null
    alertType: $Enums.AlertType | null
    latitude: Decimal | null
    longitude: Decimal | null
    alertMessage: string | null
    isAcknowledged: boolean | null
    acknowledgedAt: Date | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type VehicleAlertMaxAggregateOutputType = {
    alertId: number | null
    vehicleId: number | null
    rentalId: number | null
    alertType: $Enums.AlertType | null
    latitude: Decimal | null
    longitude: Decimal | null
    alertMessage: string | null
    isAcknowledged: boolean | null
    acknowledgedAt: Date | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type VehicleAlertCountAggregateOutputType = {
    alertId: number
    vehicleId: number
    rentalId: number
    alertType: number
    latitude: number
    longitude: number
    alertMessage: number
    isAcknowledged: number
    acknowledgedAt: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type VehicleAlertAvgAggregateInputType = {
    alertId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
  }

  export type VehicleAlertSumAggregateInputType = {
    alertId?: true
    vehicleId?: true
    rentalId?: true
    latitude?: true
    longitude?: true
  }

  export type VehicleAlertMinAggregateInputType = {
    alertId?: true
    vehicleId?: true
    rentalId?: true
    alertType?: true
    latitude?: true
    longitude?: true
    alertMessage?: true
    isAcknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type VehicleAlertMaxAggregateInputType = {
    alertId?: true
    vehicleId?: true
    rentalId?: true
    alertType?: true
    latitude?: true
    longitude?: true
    alertMessage?: true
    isAcknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type VehicleAlertCountAggregateInputType = {
    alertId?: true
    vehicleId?: true
    rentalId?: true
    alertType?: true
    latitude?: true
    longitude?: true
    alertMessage?: true
    isAcknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type VehicleAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleAlert to aggregate.
     */
    where?: VehicleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAlerts to fetch.
     */
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleAlerts
    **/
    _count?: true | VehicleAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleAlertMaxAggregateInputType
  }

  export type GetVehicleAlertAggregateType<T extends VehicleAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleAlert[P]>
      : GetScalarType<T[P], AggregateVehicleAlert[P]>
  }




  export type VehicleAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleAlertWhereInput
    orderBy?: VehicleAlertOrderByWithAggregationInput | VehicleAlertOrderByWithAggregationInput[]
    by: VehicleAlertScalarFieldEnum[] | VehicleAlertScalarFieldEnum
    having?: VehicleAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleAlertCountAggregateInputType | true
    _avg?: VehicleAlertAvgAggregateInputType
    _sum?: VehicleAlertSumAggregateInputType
    _min?: VehicleAlertMinAggregateInputType
    _max?: VehicleAlertMaxAggregateInputType
  }

  export type VehicleAlertGroupByOutputType = {
    alertId: number
    vehicleId: number
    rentalId: number | null
    alertType: $Enums.AlertType
    latitude: Decimal | null
    longitude: Decimal | null
    alertMessage: string | null
    isAcknowledged: boolean
    acknowledgedAt: Date | null
    createdAt: Date
    resolvedAt: Date | null
    _count: VehicleAlertCountAggregateOutputType | null
    _avg: VehicleAlertAvgAggregateOutputType | null
    _sum: VehicleAlertSumAggregateOutputType | null
    _min: VehicleAlertMinAggregateOutputType | null
    _max: VehicleAlertMaxAggregateOutputType | null
  }

  type GetVehicleAlertGroupByPayload<T extends VehicleAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleAlertGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleAlertGroupByOutputType[P]>
        }
      >
    >


  export type VehicleAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alertId?: boolean
    vehicleId?: boolean
    rentalId?: boolean
    alertType?: boolean
    latitude?: boolean
    longitude?: boolean
    alertMessage?: boolean
    isAcknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    rental?: boolean | VehicleAlert$rentalArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleAlert"]>



  export type VehicleAlertSelectScalar = {
    alertId?: boolean
    vehicleId?: boolean
    rentalId?: boolean
    alertType?: boolean
    latitude?: boolean
    longitude?: boolean
    alertMessage?: boolean
    isAcknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type VehicleAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alertId" | "vehicleId" | "rentalId" | "alertType" | "latitude" | "longitude" | "alertMessage" | "isAcknowledged" | "acknowledgedAt" | "createdAt" | "resolvedAt", ExtArgs["result"]["vehicleAlert"]>
  export type VehicleAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | VehicleAlert$rentalArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleAlert"
    objects: {
      rental: Prisma.$RentalPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alertId: number
      vehicleId: number
      rentalId: number | null
      alertType: $Enums.AlertType
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      alertMessage: string | null
      isAcknowledged: boolean
      acknowledgedAt: Date | null
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["vehicleAlert"]>
    composites: {}
  }

  type VehicleAlertGetPayload<S extends boolean | null | undefined | VehicleAlertDefaultArgs> = $Result.GetResult<Prisma.$VehicleAlertPayload, S>

  type VehicleAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleAlertCountAggregateInputType | true
    }

  export interface VehicleAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleAlert'], meta: { name: 'VehicleAlert' } }
    /**
     * Find zero or one VehicleAlert that matches the filter.
     * @param {VehicleAlertFindUniqueArgs} args - Arguments to find a VehicleAlert
     * @example
     * // Get one VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleAlertFindUniqueArgs>(args: SelectSubset<T, VehicleAlertFindUniqueArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleAlertFindUniqueOrThrowArgs} args - Arguments to find a VehicleAlert
     * @example
     * // Get one VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertFindFirstArgs} args - Arguments to find a VehicleAlert
     * @example
     * // Get one VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleAlertFindFirstArgs>(args?: SelectSubset<T, VehicleAlertFindFirstArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertFindFirstOrThrowArgs} args - Arguments to find a VehicleAlert
     * @example
     * // Get one VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleAlerts
     * const vehicleAlerts = await prisma.vehicleAlert.findMany()
     * 
     * // Get first 10 VehicleAlerts
     * const vehicleAlerts = await prisma.vehicleAlert.findMany({ take: 10 })
     * 
     * // Only select the `alertId`
     * const vehicleAlertWithAlertIdOnly = await prisma.vehicleAlert.findMany({ select: { alertId: true } })
     * 
     */
    findMany<T extends VehicleAlertFindManyArgs>(args?: SelectSubset<T, VehicleAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleAlert.
     * @param {VehicleAlertCreateArgs} args - Arguments to create a VehicleAlert.
     * @example
     * // Create one VehicleAlert
     * const VehicleAlert = await prisma.vehicleAlert.create({
     *   data: {
     *     // ... data to create a VehicleAlert
     *   }
     * })
     * 
     */
    create<T extends VehicleAlertCreateArgs>(args: SelectSubset<T, VehicleAlertCreateArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleAlerts.
     * @param {VehicleAlertCreateManyArgs} args - Arguments to create many VehicleAlerts.
     * @example
     * // Create many VehicleAlerts
     * const vehicleAlert = await prisma.vehicleAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleAlertCreateManyArgs>(args?: SelectSubset<T, VehicleAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleAlert.
     * @param {VehicleAlertDeleteArgs} args - Arguments to delete one VehicleAlert.
     * @example
     * // Delete one VehicleAlert
     * const VehicleAlert = await prisma.vehicleAlert.delete({
     *   where: {
     *     // ... filter to delete one VehicleAlert
     *   }
     * })
     * 
     */
    delete<T extends VehicleAlertDeleteArgs>(args: SelectSubset<T, VehicleAlertDeleteArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleAlert.
     * @param {VehicleAlertUpdateArgs} args - Arguments to update one VehicleAlert.
     * @example
     * // Update one VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleAlertUpdateArgs>(args: SelectSubset<T, VehicleAlertUpdateArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleAlerts.
     * @param {VehicleAlertDeleteManyArgs} args - Arguments to filter VehicleAlerts to delete.
     * @example
     * // Delete a few VehicleAlerts
     * const { count } = await prisma.vehicleAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleAlertDeleteManyArgs>(args?: SelectSubset<T, VehicleAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleAlerts
     * const vehicleAlert = await prisma.vehicleAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleAlertUpdateManyArgs>(args: SelectSubset<T, VehicleAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleAlert.
     * @param {VehicleAlertUpsertArgs} args - Arguments to update or create a VehicleAlert.
     * @example
     * // Update or create a VehicleAlert
     * const vehicleAlert = await prisma.vehicleAlert.upsert({
     *   create: {
     *     // ... data to create a VehicleAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleAlert we want to update
     *   }
     * })
     */
    upsert<T extends VehicleAlertUpsertArgs>(args: SelectSubset<T, VehicleAlertUpsertArgs<ExtArgs>>): Prisma__VehicleAlertClient<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertCountArgs} args - Arguments to filter VehicleAlerts to count.
     * @example
     * // Count the number of VehicleAlerts
     * const count = await prisma.vehicleAlert.count({
     *   where: {
     *     // ... the filter for the VehicleAlerts we want to count
     *   }
     * })
    **/
    count<T extends VehicleAlertCountArgs>(
      args?: Subset<T, VehicleAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAlertAggregateArgs>(args: Subset<T, VehicleAlertAggregateArgs>): Prisma.PrismaPromise<GetVehicleAlertAggregateType<T>>

    /**
     * Group by VehicleAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAlertGroupByArgs} args - Group by arguments.
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
      T extends VehicleAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleAlertGroupByArgs['orderBy'] }
        : { orderBy?: VehicleAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleAlert model
   */
  readonly fields: VehicleAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends VehicleAlert$rentalArgs<ExtArgs> = {}>(args?: Subset<T, VehicleAlert$rentalArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleAlert model
   */
  interface VehicleAlertFieldRefs {
    readonly alertId: FieldRef<"VehicleAlert", 'Int'>
    readonly vehicleId: FieldRef<"VehicleAlert", 'Int'>
    readonly rentalId: FieldRef<"VehicleAlert", 'Int'>
    readonly alertType: FieldRef<"VehicleAlert", 'AlertType'>
    readonly latitude: FieldRef<"VehicleAlert", 'Decimal'>
    readonly longitude: FieldRef<"VehicleAlert", 'Decimal'>
    readonly alertMessage: FieldRef<"VehicleAlert", 'String'>
    readonly isAcknowledged: FieldRef<"VehicleAlert", 'Boolean'>
    readonly acknowledgedAt: FieldRef<"VehicleAlert", 'DateTime'>
    readonly createdAt: FieldRef<"VehicleAlert", 'DateTime'>
    readonly resolvedAt: FieldRef<"VehicleAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleAlert findUnique
   */
  export type VehicleAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAlert to fetch.
     */
    where: VehicleAlertWhereUniqueInput
  }

  /**
   * VehicleAlert findUniqueOrThrow
   */
  export type VehicleAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAlert to fetch.
     */
    where: VehicleAlertWhereUniqueInput
  }

  /**
   * VehicleAlert findFirst
   */
  export type VehicleAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAlert to fetch.
     */
    where?: VehicleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAlerts to fetch.
     */
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleAlerts.
     */
    cursor?: VehicleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleAlerts.
     */
    distinct?: VehicleAlertScalarFieldEnum | VehicleAlertScalarFieldEnum[]
  }

  /**
   * VehicleAlert findFirstOrThrow
   */
  export type VehicleAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAlert to fetch.
     */
    where?: VehicleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAlerts to fetch.
     */
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleAlerts.
     */
    cursor?: VehicleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleAlerts.
     */
    distinct?: VehicleAlertScalarFieldEnum | VehicleAlertScalarFieldEnum[]
  }

  /**
   * VehicleAlert findMany
   */
  export type VehicleAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAlerts to fetch.
     */
    where?: VehicleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAlerts to fetch.
     */
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleAlerts.
     */
    cursor?: VehicleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleAlerts.
     */
    distinct?: VehicleAlertScalarFieldEnum | VehicleAlertScalarFieldEnum[]
  }

  /**
   * VehicleAlert create
   */
  export type VehicleAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleAlert.
     */
    data: XOR<VehicleAlertCreateInput, VehicleAlertUncheckedCreateInput>
  }

  /**
   * VehicleAlert createMany
   */
  export type VehicleAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleAlerts.
     */
    data: VehicleAlertCreateManyInput | VehicleAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleAlert update
   */
  export type VehicleAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleAlert.
     */
    data: XOR<VehicleAlertUpdateInput, VehicleAlertUncheckedUpdateInput>
    /**
     * Choose, which VehicleAlert to update.
     */
    where: VehicleAlertWhereUniqueInput
  }

  /**
   * VehicleAlert updateMany
   */
  export type VehicleAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleAlerts.
     */
    data: XOR<VehicleAlertUpdateManyMutationInput, VehicleAlertUncheckedUpdateManyInput>
    /**
     * Filter which VehicleAlerts to update
     */
    where?: VehicleAlertWhereInput
    /**
     * Limit how many VehicleAlerts to update.
     */
    limit?: number
  }

  /**
   * VehicleAlert upsert
   */
  export type VehicleAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleAlert to update in case it exists.
     */
    where: VehicleAlertWhereUniqueInput
    /**
     * In case the VehicleAlert found by the `where` argument doesn't exist, create a new VehicleAlert with this data.
     */
    create: XOR<VehicleAlertCreateInput, VehicleAlertUncheckedCreateInput>
    /**
     * In case the VehicleAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleAlertUpdateInput, VehicleAlertUncheckedUpdateInput>
  }

  /**
   * VehicleAlert delete
   */
  export type VehicleAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    /**
     * Filter which VehicleAlert to delete.
     */
    where: VehicleAlertWhereUniqueInput
  }

  /**
   * VehicleAlert deleteMany
   */
  export type VehicleAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleAlerts to delete
     */
    where?: VehicleAlertWhereInput
    /**
     * Limit how many VehicleAlerts to delete.
     */
    limit?: number
  }

  /**
   * VehicleAlert.rental
   */
  export type VehicleAlert$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
  }

  /**
   * VehicleAlert without action
   */
  export type VehicleAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    vehicleId: number | null
    yearManufactured: number | null
    totalKm: Decimal | null
  }

  export type VehicleSumAggregateOutputType = {
    vehicleId: number | null
    yearManufactured: number | null
    totalKm: Decimal | null
  }

  export type VehicleMinAggregateOutputType = {
    vehicleId: number | null
    plateNumber: string | null
    vehicleName: string | null
    vehicleType: string | null
    brand: string | null
    model: string | null
    color: string | null
    yearManufactured: number | null
    status: $Enums.VehicleStatus | null
    totalKm: Decimal | null
    createdAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    vehicleId: number | null
    plateNumber: string | null
    vehicleName: string | null
    vehicleType: string | null
    brand: string | null
    model: string | null
    color: string | null
    yearManufactured: number | null
    status: $Enums.VehicleStatus | null
    totalKm: Decimal | null
    createdAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    vehicleId: number
    plateNumber: number
    vehicleName: number
    vehicleType: number
    brand: number
    model: number
    color: number
    yearManufactured: number
    status: number
    totalKm: number
    createdAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    vehicleId?: true
    yearManufactured?: true
    totalKm?: true
  }

  export type VehicleSumAggregateInputType = {
    vehicleId?: true
    yearManufactured?: true
    totalKm?: true
  }

  export type VehicleMinAggregateInputType = {
    vehicleId?: true
    plateNumber?: true
    vehicleName?: true
    vehicleType?: true
    brand?: true
    model?: true
    color?: true
    yearManufactured?: true
    status?: true
    totalKm?: true
    createdAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    vehicleId?: true
    plateNumber?: true
    vehicleName?: true
    vehicleType?: true
    brand?: true
    model?: true
    color?: true
    yearManufactured?: true
    status?: true
    totalKm?: true
    createdAt?: true
  }

  export type VehicleCountAggregateInputType = {
    vehicleId?: true
    plateNumber?: true
    vehicleName?: true
    vehicleType?: true
    brand?: true
    model?: true
    color?: true
    yearManufactured?: true
    status?: true
    totalKm?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    vehicleId: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand: string | null
    model: string | null
    color: string | null
    yearManufactured: number | null
    status: $Enums.VehicleStatus
    totalKm: Decimal
    createdAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    plateNumber?: boolean
    vehicleName?: boolean
    vehicleType?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    yearManufactured?: boolean
    status?: boolean
    totalKm?: boolean
    createdAt?: boolean
    gpsLogs?: boolean | Vehicle$gpsLogsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    monthlyReports?: boolean | Vehicle$monthlyReportsArgs<ExtArgs>
    rentals?: boolean | Vehicle$rentalsArgs<ExtArgs>
    alerts?: boolean | Vehicle$alertsArgs<ExtArgs>
    deviceAssignments?: boolean | Vehicle$deviceAssignmentsArgs<ExtArgs>
    geofenceLogs?: boolean | Vehicle$geofenceLogsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    vehicleId?: boolean
    plateNumber?: boolean
    vehicleName?: boolean
    vehicleType?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    yearManufactured?: boolean
    status?: boolean
    totalKm?: boolean
    createdAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicleId" | "plateNumber" | "vehicleName" | "vehicleType" | "brand" | "model" | "color" | "yearManufactured" | "status" | "totalKm" | "createdAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpsLogs?: boolean | Vehicle$gpsLogsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    monthlyReports?: boolean | Vehicle$monthlyReportsArgs<ExtArgs>
    rentals?: boolean | Vehicle$rentalsArgs<ExtArgs>
    alerts?: boolean | Vehicle$alertsArgs<ExtArgs>
    deviceAssignments?: boolean | Vehicle$deviceAssignmentsArgs<ExtArgs>
    geofenceLogs?: boolean | Vehicle$geofenceLogsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      gpsLogs: Prisma.$GpsLogPayload<ExtArgs>[]
      maintenanceLogs: Prisma.$MaintenanceLogPayload<ExtArgs>[]
      monthlyReports: Prisma.$MonthlyReportPayload<ExtArgs>[]
      rentals: Prisma.$RentalPayload<ExtArgs>[]
      alerts: Prisma.$VehicleAlertPayload<ExtArgs>[]
      deviceAssignments: Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>[]
      geofenceLogs: Prisma.$VehicleGeofenceLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicleId: number
      plateNumber: string
      vehicleName: string
      vehicleType: string
      brand: string | null
      model: string | null
      color: string | null
      yearManufactured: number | null
      status: $Enums.VehicleStatus
      totalKm: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `vehicleId`
     * const vehicleWithVehicleIdOnly = await prisma.vehicle.findMany({ select: { vehicleId: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gpsLogs<T extends Vehicle$gpsLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$gpsLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpsLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceLogs<T extends Vehicle$maintenanceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyReports<T extends Vehicle$monthlyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$monthlyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends Vehicle$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Vehicle$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deviceAssignments<T extends Vehicle$deviceAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$deviceAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    geofenceLogs<T extends Vehicle$geofenceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$geofenceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleGeofenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly vehicleId: FieldRef<"Vehicle", 'Int'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleName: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly yearManufactured: FieldRef<"Vehicle", 'Int'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly totalKm: FieldRef<"Vehicle", 'Decimal'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.gpsLogs
   */
  export type Vehicle$gpsLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpsLog
     */
    select?: GpsLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpsLog
     */
    omit?: GpsLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpsLogInclude<ExtArgs> | null
    where?: GpsLogWhereInput
    orderBy?: GpsLogOrderByWithRelationInput | GpsLogOrderByWithRelationInput[]
    cursor?: GpsLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GpsLogScalarFieldEnum | GpsLogScalarFieldEnum[]
  }

  /**
   * Vehicle.maintenanceLogs
   */
  export type Vehicle$maintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    cursor?: MaintenanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * Vehicle.monthlyReports
   */
  export type Vehicle$monthlyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyReport
     */
    select?: MonthlyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyReport
     */
    omit?: MonthlyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyReportInclude<ExtArgs> | null
    where?: MonthlyReportWhereInput
    orderBy?: MonthlyReportOrderByWithRelationInput | MonthlyReportOrderByWithRelationInput[]
    cursor?: MonthlyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyReportScalarFieldEnum | MonthlyReportScalarFieldEnum[]
  }

  /**
   * Vehicle.rentals
   */
  export type Vehicle$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Vehicle.alerts
   */
  export type Vehicle$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAlert
     */
    select?: VehicleAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAlert
     */
    omit?: VehicleAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAlertInclude<ExtArgs> | null
    where?: VehicleAlertWhereInput
    orderBy?: VehicleAlertOrderByWithRelationInput | VehicleAlertOrderByWithRelationInput[]
    cursor?: VehicleAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleAlertScalarFieldEnum | VehicleAlertScalarFieldEnum[]
  }

  /**
   * Vehicle.deviceAssignments
   */
  export type Vehicle$deviceAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    where?: VehicleDeviceAssignmentWhereInput
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleDeviceAssignmentScalarFieldEnum | VehicleDeviceAssignmentScalarFieldEnum[]
  }

  /**
   * Vehicle.geofenceLogs
   */
  export type Vehicle$geofenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleGeofenceLog
     */
    select?: VehicleGeofenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleGeofenceLog
     */
    omit?: VehicleGeofenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleGeofenceLogInclude<ExtArgs> | null
    where?: VehicleGeofenceLogWhereInput
    orderBy?: VehicleGeofenceLogOrderByWithRelationInput | VehicleGeofenceLogOrderByWithRelationInput[]
    cursor?: VehicleGeofenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleGeofenceLogScalarFieldEnum | VehicleGeofenceLogScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model IotDevice
   */

  export type AggregateIotDevice = {
    _count: IotDeviceCountAggregateOutputType | null
    _avg: IotDeviceAvgAggregateOutputType | null
    _sum: IotDeviceSumAggregateOutputType | null
    _min: IotDeviceMinAggregateOutputType | null
    _max: IotDeviceMaxAggregateOutputType | null
  }

  export type IotDeviceAvgAggregateOutputType = {
    deviceId: number | null
  }

  export type IotDeviceSumAggregateOutputType = {
    deviceId: number | null
  }

  export type IotDeviceMinAggregateOutputType = {
    deviceId: number | null
    serialNumber: string | null
    mqttTopic: string | null
    simNumber: string | null
    firmwareVersion: string | null
    lastOnlineAt: Date | null
    status: $Enums.DeviceStatus | null
    createdAt: Date | null
  }

  export type IotDeviceMaxAggregateOutputType = {
    deviceId: number | null
    serialNumber: string | null
    mqttTopic: string | null
    simNumber: string | null
    firmwareVersion: string | null
    lastOnlineAt: Date | null
    status: $Enums.DeviceStatus | null
    createdAt: Date | null
  }

  export type IotDeviceCountAggregateOutputType = {
    deviceId: number
    serialNumber: number
    mqttTopic: number
    simNumber: number
    firmwareVersion: number
    lastOnlineAt: number
    status: number
    createdAt: number
    _all: number
  }


  export type IotDeviceAvgAggregateInputType = {
    deviceId?: true
  }

  export type IotDeviceSumAggregateInputType = {
    deviceId?: true
  }

  export type IotDeviceMinAggregateInputType = {
    deviceId?: true
    serialNumber?: true
    mqttTopic?: true
    simNumber?: true
    firmwareVersion?: true
    lastOnlineAt?: true
    status?: true
    createdAt?: true
  }

  export type IotDeviceMaxAggregateInputType = {
    deviceId?: true
    serialNumber?: true
    mqttTopic?: true
    simNumber?: true
    firmwareVersion?: true
    lastOnlineAt?: true
    status?: true
    createdAt?: true
  }

  export type IotDeviceCountAggregateInputType = {
    deviceId?: true
    serialNumber?: true
    mqttTopic?: true
    simNumber?: true
    firmwareVersion?: true
    lastOnlineAt?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type IotDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IotDevice to aggregate.
     */
    where?: IotDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotDevices to fetch.
     */
    orderBy?: IotDeviceOrderByWithRelationInput | IotDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IotDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IotDevices
    **/
    _count?: true | IotDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IotDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IotDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IotDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IotDeviceMaxAggregateInputType
  }

  export type GetIotDeviceAggregateType<T extends IotDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateIotDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIotDevice[P]>
      : GetScalarType<T[P], AggregateIotDevice[P]>
  }




  export type IotDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IotDeviceWhereInput
    orderBy?: IotDeviceOrderByWithAggregationInput | IotDeviceOrderByWithAggregationInput[]
    by: IotDeviceScalarFieldEnum[] | IotDeviceScalarFieldEnum
    having?: IotDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IotDeviceCountAggregateInputType | true
    _avg?: IotDeviceAvgAggregateInputType
    _sum?: IotDeviceSumAggregateInputType
    _min?: IotDeviceMinAggregateInputType
    _max?: IotDeviceMaxAggregateInputType
  }

  export type IotDeviceGroupByOutputType = {
    deviceId: number
    serialNumber: string
    mqttTopic: string
    simNumber: string | null
    firmwareVersion: string | null
    lastOnlineAt: Date | null
    status: $Enums.DeviceStatus
    createdAt: Date
    _count: IotDeviceCountAggregateOutputType | null
    _avg: IotDeviceAvgAggregateOutputType | null
    _sum: IotDeviceSumAggregateOutputType | null
    _min: IotDeviceMinAggregateOutputType | null
    _max: IotDeviceMaxAggregateOutputType | null
  }

  type GetIotDeviceGroupByPayload<T extends IotDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IotDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IotDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IotDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], IotDeviceGroupByOutputType[P]>
        }
      >
    >


  export type IotDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    serialNumber?: boolean
    mqttTopic?: boolean
    simNumber?: boolean
    firmwareVersion?: boolean
    lastOnlineAt?: boolean
    status?: boolean
    createdAt?: boolean
    assignments?: boolean | IotDevice$assignmentsArgs<ExtArgs>
    _count?: boolean | IotDeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iotDevice"]>



  export type IotDeviceSelectScalar = {
    deviceId?: boolean
    serialNumber?: boolean
    mqttTopic?: boolean
    simNumber?: boolean
    firmwareVersion?: boolean
    lastOnlineAt?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type IotDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceId" | "serialNumber" | "mqttTopic" | "simNumber" | "firmwareVersion" | "lastOnlineAt" | "status" | "createdAt", ExtArgs["result"]["iotDevice"]>
  export type IotDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | IotDevice$assignmentsArgs<ExtArgs>
    _count?: boolean | IotDeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IotDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IotDevice"
    objects: {
      assignments: Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceId: number
      serialNumber: string
      mqttTopic: string
      simNumber: string | null
      firmwareVersion: string | null
      lastOnlineAt: Date | null
      status: $Enums.DeviceStatus
      createdAt: Date
    }, ExtArgs["result"]["iotDevice"]>
    composites: {}
  }

  type IotDeviceGetPayload<S extends boolean | null | undefined | IotDeviceDefaultArgs> = $Result.GetResult<Prisma.$IotDevicePayload, S>

  type IotDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IotDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IotDeviceCountAggregateInputType | true
    }

  export interface IotDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IotDevice'], meta: { name: 'IotDevice' } }
    /**
     * Find zero or one IotDevice that matches the filter.
     * @param {IotDeviceFindUniqueArgs} args - Arguments to find a IotDevice
     * @example
     * // Get one IotDevice
     * const iotDevice = await prisma.iotDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IotDeviceFindUniqueArgs>(args: SelectSubset<T, IotDeviceFindUniqueArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IotDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IotDeviceFindUniqueOrThrowArgs} args - Arguments to find a IotDevice
     * @example
     * // Get one IotDevice
     * const iotDevice = await prisma.iotDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IotDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, IotDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IotDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceFindFirstArgs} args - Arguments to find a IotDevice
     * @example
     * // Get one IotDevice
     * const iotDevice = await prisma.iotDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IotDeviceFindFirstArgs>(args?: SelectSubset<T, IotDeviceFindFirstArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IotDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceFindFirstOrThrowArgs} args - Arguments to find a IotDevice
     * @example
     * // Get one IotDevice
     * const iotDevice = await prisma.iotDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IotDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, IotDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IotDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IotDevices
     * const iotDevices = await prisma.iotDevice.findMany()
     * 
     * // Get first 10 IotDevices
     * const iotDevices = await prisma.iotDevice.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const iotDeviceWithDeviceIdOnly = await prisma.iotDevice.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends IotDeviceFindManyArgs>(args?: SelectSubset<T, IotDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IotDevice.
     * @param {IotDeviceCreateArgs} args - Arguments to create a IotDevice.
     * @example
     * // Create one IotDevice
     * const IotDevice = await prisma.iotDevice.create({
     *   data: {
     *     // ... data to create a IotDevice
     *   }
     * })
     * 
     */
    create<T extends IotDeviceCreateArgs>(args: SelectSubset<T, IotDeviceCreateArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IotDevices.
     * @param {IotDeviceCreateManyArgs} args - Arguments to create many IotDevices.
     * @example
     * // Create many IotDevices
     * const iotDevice = await prisma.iotDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IotDeviceCreateManyArgs>(args?: SelectSubset<T, IotDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IotDevice.
     * @param {IotDeviceDeleteArgs} args - Arguments to delete one IotDevice.
     * @example
     * // Delete one IotDevice
     * const IotDevice = await prisma.iotDevice.delete({
     *   where: {
     *     // ... filter to delete one IotDevice
     *   }
     * })
     * 
     */
    delete<T extends IotDeviceDeleteArgs>(args: SelectSubset<T, IotDeviceDeleteArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IotDevice.
     * @param {IotDeviceUpdateArgs} args - Arguments to update one IotDevice.
     * @example
     * // Update one IotDevice
     * const iotDevice = await prisma.iotDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IotDeviceUpdateArgs>(args: SelectSubset<T, IotDeviceUpdateArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IotDevices.
     * @param {IotDeviceDeleteManyArgs} args - Arguments to filter IotDevices to delete.
     * @example
     * // Delete a few IotDevices
     * const { count } = await prisma.iotDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IotDeviceDeleteManyArgs>(args?: SelectSubset<T, IotDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IotDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IotDevices
     * const iotDevice = await prisma.iotDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IotDeviceUpdateManyArgs>(args: SelectSubset<T, IotDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IotDevice.
     * @param {IotDeviceUpsertArgs} args - Arguments to update or create a IotDevice.
     * @example
     * // Update or create a IotDevice
     * const iotDevice = await prisma.iotDevice.upsert({
     *   create: {
     *     // ... data to create a IotDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IotDevice we want to update
     *   }
     * })
     */
    upsert<T extends IotDeviceUpsertArgs>(args: SelectSubset<T, IotDeviceUpsertArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IotDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceCountArgs} args - Arguments to filter IotDevices to count.
     * @example
     * // Count the number of IotDevices
     * const count = await prisma.iotDevice.count({
     *   where: {
     *     // ... the filter for the IotDevices we want to count
     *   }
     * })
    **/
    count<T extends IotDeviceCountArgs>(
      args?: Subset<T, IotDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IotDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IotDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IotDeviceAggregateArgs>(args: Subset<T, IotDeviceAggregateArgs>): Prisma.PrismaPromise<GetIotDeviceAggregateType<T>>

    /**
     * Group by IotDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotDeviceGroupByArgs} args - Group by arguments.
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
      T extends IotDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IotDeviceGroupByArgs['orderBy'] }
        : { orderBy?: IotDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IotDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIotDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IotDevice model
   */
  readonly fields: IotDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IotDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IotDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends IotDevice$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, IotDevice$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IotDevice model
   */
  interface IotDeviceFieldRefs {
    readonly deviceId: FieldRef<"IotDevice", 'Int'>
    readonly serialNumber: FieldRef<"IotDevice", 'String'>
    readonly mqttTopic: FieldRef<"IotDevice", 'String'>
    readonly simNumber: FieldRef<"IotDevice", 'String'>
    readonly firmwareVersion: FieldRef<"IotDevice", 'String'>
    readonly lastOnlineAt: FieldRef<"IotDevice", 'DateTime'>
    readonly status: FieldRef<"IotDevice", 'DeviceStatus'>
    readonly createdAt: FieldRef<"IotDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IotDevice findUnique
   */
  export type IotDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter, which IotDevice to fetch.
     */
    where: IotDeviceWhereUniqueInput
  }

  /**
   * IotDevice findUniqueOrThrow
   */
  export type IotDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter, which IotDevice to fetch.
     */
    where: IotDeviceWhereUniqueInput
  }

  /**
   * IotDevice findFirst
   */
  export type IotDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter, which IotDevice to fetch.
     */
    where?: IotDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotDevices to fetch.
     */
    orderBy?: IotDeviceOrderByWithRelationInput | IotDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IotDevices.
     */
    cursor?: IotDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IotDevices.
     */
    distinct?: IotDeviceScalarFieldEnum | IotDeviceScalarFieldEnum[]
  }

  /**
   * IotDevice findFirstOrThrow
   */
  export type IotDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter, which IotDevice to fetch.
     */
    where?: IotDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotDevices to fetch.
     */
    orderBy?: IotDeviceOrderByWithRelationInput | IotDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IotDevices.
     */
    cursor?: IotDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IotDevices.
     */
    distinct?: IotDeviceScalarFieldEnum | IotDeviceScalarFieldEnum[]
  }

  /**
   * IotDevice findMany
   */
  export type IotDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter, which IotDevices to fetch.
     */
    where?: IotDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotDevices to fetch.
     */
    orderBy?: IotDeviceOrderByWithRelationInput | IotDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IotDevices.
     */
    cursor?: IotDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IotDevices.
     */
    distinct?: IotDeviceScalarFieldEnum | IotDeviceScalarFieldEnum[]
  }

  /**
   * IotDevice create
   */
  export type IotDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a IotDevice.
     */
    data: XOR<IotDeviceCreateInput, IotDeviceUncheckedCreateInput>
  }

  /**
   * IotDevice createMany
   */
  export type IotDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IotDevices.
     */
    data: IotDeviceCreateManyInput | IotDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IotDevice update
   */
  export type IotDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a IotDevice.
     */
    data: XOR<IotDeviceUpdateInput, IotDeviceUncheckedUpdateInput>
    /**
     * Choose, which IotDevice to update.
     */
    where: IotDeviceWhereUniqueInput
  }

  /**
   * IotDevice updateMany
   */
  export type IotDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IotDevices.
     */
    data: XOR<IotDeviceUpdateManyMutationInput, IotDeviceUncheckedUpdateManyInput>
    /**
     * Filter which IotDevices to update
     */
    where?: IotDeviceWhereInput
    /**
     * Limit how many IotDevices to update.
     */
    limit?: number
  }

  /**
   * IotDevice upsert
   */
  export type IotDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the IotDevice to update in case it exists.
     */
    where: IotDeviceWhereUniqueInput
    /**
     * In case the IotDevice found by the `where` argument doesn't exist, create a new IotDevice with this data.
     */
    create: XOR<IotDeviceCreateInput, IotDeviceUncheckedCreateInput>
    /**
     * In case the IotDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IotDeviceUpdateInput, IotDeviceUncheckedUpdateInput>
  }

  /**
   * IotDevice delete
   */
  export type IotDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
    /**
     * Filter which IotDevice to delete.
     */
    where: IotDeviceWhereUniqueInput
  }

  /**
   * IotDevice deleteMany
   */
  export type IotDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IotDevices to delete
     */
    where?: IotDeviceWhereInput
    /**
     * Limit how many IotDevices to delete.
     */
    limit?: number
  }

  /**
   * IotDevice.assignments
   */
  export type IotDevice$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    where?: VehicleDeviceAssignmentWhereInput
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleDeviceAssignmentScalarFieldEnum | VehicleDeviceAssignmentScalarFieldEnum[]
  }

  /**
   * IotDevice without action
   */
  export type IotDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotDevice
     */
    select?: IotDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IotDevice
     */
    omit?: IotDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IotDeviceInclude<ExtArgs> | null
  }


  /**
   * Model VehicleDeviceAssignment
   */

  export type AggregateVehicleDeviceAssignment = {
    _count: VehicleDeviceAssignmentCountAggregateOutputType | null
    _avg: VehicleDeviceAssignmentAvgAggregateOutputType | null
    _sum: VehicleDeviceAssignmentSumAggregateOutputType | null
    _min: VehicleDeviceAssignmentMinAggregateOutputType | null
    _max: VehicleDeviceAssignmentMaxAggregateOutputType | null
  }

  export type VehicleDeviceAssignmentAvgAggregateOutputType = {
    assignmentId: number | null
    vehicleId: number | null
    deviceId: number | null
  }

  export type VehicleDeviceAssignmentSumAggregateOutputType = {
    assignmentId: number | null
    vehicleId: number | null
    deviceId: number | null
  }

  export type VehicleDeviceAssignmentMinAggregateOutputType = {
    assignmentId: number | null
    vehicleId: number | null
    deviceId: number | null
    assignedAt: Date | null
    removedAt: Date | null
    isActive: boolean | null
  }

  export type VehicleDeviceAssignmentMaxAggregateOutputType = {
    assignmentId: number | null
    vehicleId: number | null
    deviceId: number | null
    assignedAt: Date | null
    removedAt: Date | null
    isActive: boolean | null
  }

  export type VehicleDeviceAssignmentCountAggregateOutputType = {
    assignmentId: number
    vehicleId: number
    deviceId: number
    assignedAt: number
    removedAt: number
    isActive: number
    _all: number
  }


  export type VehicleDeviceAssignmentAvgAggregateInputType = {
    assignmentId?: true
    vehicleId?: true
    deviceId?: true
  }

  export type VehicleDeviceAssignmentSumAggregateInputType = {
    assignmentId?: true
    vehicleId?: true
    deviceId?: true
  }

  export type VehicleDeviceAssignmentMinAggregateInputType = {
    assignmentId?: true
    vehicleId?: true
    deviceId?: true
    assignedAt?: true
    removedAt?: true
    isActive?: true
  }

  export type VehicleDeviceAssignmentMaxAggregateInputType = {
    assignmentId?: true
    vehicleId?: true
    deviceId?: true
    assignedAt?: true
    removedAt?: true
    isActive?: true
  }

  export type VehicleDeviceAssignmentCountAggregateInputType = {
    assignmentId?: true
    vehicleId?: true
    deviceId?: true
    assignedAt?: true
    removedAt?: true
    isActive?: true
    _all?: true
  }

  export type VehicleDeviceAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDeviceAssignment to aggregate.
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDeviceAssignments to fetch.
     */
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleDeviceAssignments
    **/
    _count?: true | VehicleDeviceAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleDeviceAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleDeviceAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleDeviceAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleDeviceAssignmentMaxAggregateInputType
  }

  export type GetVehicleDeviceAssignmentAggregateType<T extends VehicleDeviceAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleDeviceAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleDeviceAssignment[P]>
      : GetScalarType<T[P], AggregateVehicleDeviceAssignment[P]>
  }




  export type VehicleDeviceAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDeviceAssignmentWhereInput
    orderBy?: VehicleDeviceAssignmentOrderByWithAggregationInput | VehicleDeviceAssignmentOrderByWithAggregationInput[]
    by: VehicleDeviceAssignmentScalarFieldEnum[] | VehicleDeviceAssignmentScalarFieldEnum
    having?: VehicleDeviceAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleDeviceAssignmentCountAggregateInputType | true
    _avg?: VehicleDeviceAssignmentAvgAggregateInputType
    _sum?: VehicleDeviceAssignmentSumAggregateInputType
    _min?: VehicleDeviceAssignmentMinAggregateInputType
    _max?: VehicleDeviceAssignmentMaxAggregateInputType
  }

  export type VehicleDeviceAssignmentGroupByOutputType = {
    assignmentId: number
    vehicleId: number
    deviceId: number
    assignedAt: Date
    removedAt: Date | null
    isActive: boolean
    _count: VehicleDeviceAssignmentCountAggregateOutputType | null
    _avg: VehicleDeviceAssignmentAvgAggregateOutputType | null
    _sum: VehicleDeviceAssignmentSumAggregateOutputType | null
    _min: VehicleDeviceAssignmentMinAggregateOutputType | null
    _max: VehicleDeviceAssignmentMaxAggregateOutputType | null
  }

  type GetVehicleDeviceAssignmentGroupByPayload<T extends VehicleDeviceAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleDeviceAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleDeviceAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleDeviceAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleDeviceAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type VehicleDeviceAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentId?: boolean
    vehicleId?: boolean
    deviceId?: boolean
    assignedAt?: boolean
    removedAt?: boolean
    isActive?: boolean
    device?: boolean | IotDeviceDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleDeviceAssignment"]>



  export type VehicleDeviceAssignmentSelectScalar = {
    assignmentId?: boolean
    vehicleId?: boolean
    deviceId?: boolean
    assignedAt?: boolean
    removedAt?: boolean
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignmentId" | "vehicleId" | "deviceId" | "assignedAt" | "removedAt" | "isActive", ExtArgs["result"]["vehicleDeviceAssignment"]>
  export type VehicleDeviceAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | IotDeviceDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleDeviceAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleDeviceAssignment"
    objects: {
      device: Prisma.$IotDevicePayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignmentId: number
      vehicleId: number
      deviceId: number
      assignedAt: Date
      removedAt: Date | null
      isActive: boolean
    }, ExtArgs["result"]["vehicleDeviceAssignment"]>
    composites: {}
  }

  type VehicleDeviceAssignmentGetPayload<S extends boolean | null | undefined | VehicleDeviceAssignmentDefaultArgs> = $Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload, S>

  type VehicleDeviceAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleDeviceAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleDeviceAssignmentCountAggregateInputType | true
    }

  export interface VehicleDeviceAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleDeviceAssignment'], meta: { name: 'VehicleDeviceAssignment' } }
    /**
     * Find zero or one VehicleDeviceAssignment that matches the filter.
     * @param {VehicleDeviceAssignmentFindUniqueArgs} args - Arguments to find a VehicleDeviceAssignment
     * @example
     * // Get one VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleDeviceAssignmentFindUniqueArgs>(args: SelectSubset<T, VehicleDeviceAssignmentFindUniqueArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleDeviceAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleDeviceAssignmentFindUniqueOrThrowArgs} args - Arguments to find a VehicleDeviceAssignment
     * @example
     * // Get one VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleDeviceAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleDeviceAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDeviceAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentFindFirstArgs} args - Arguments to find a VehicleDeviceAssignment
     * @example
     * // Get one VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleDeviceAssignmentFindFirstArgs>(args?: SelectSubset<T, VehicleDeviceAssignmentFindFirstArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDeviceAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentFindFirstOrThrowArgs} args - Arguments to find a VehicleDeviceAssignment
     * @example
     * // Get one VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleDeviceAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleDeviceAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleDeviceAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleDeviceAssignments
     * const vehicleDeviceAssignments = await prisma.vehicleDeviceAssignment.findMany()
     * 
     * // Get first 10 VehicleDeviceAssignments
     * const vehicleDeviceAssignments = await prisma.vehicleDeviceAssignment.findMany({ take: 10 })
     * 
     * // Only select the `assignmentId`
     * const vehicleDeviceAssignmentWithAssignmentIdOnly = await prisma.vehicleDeviceAssignment.findMany({ select: { assignmentId: true } })
     * 
     */
    findMany<T extends VehicleDeviceAssignmentFindManyArgs>(args?: SelectSubset<T, VehicleDeviceAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleDeviceAssignment.
     * @param {VehicleDeviceAssignmentCreateArgs} args - Arguments to create a VehicleDeviceAssignment.
     * @example
     * // Create one VehicleDeviceAssignment
     * const VehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.create({
     *   data: {
     *     // ... data to create a VehicleDeviceAssignment
     *   }
     * })
     * 
     */
    create<T extends VehicleDeviceAssignmentCreateArgs>(args: SelectSubset<T, VehicleDeviceAssignmentCreateArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleDeviceAssignments.
     * @param {VehicleDeviceAssignmentCreateManyArgs} args - Arguments to create many VehicleDeviceAssignments.
     * @example
     * // Create many VehicleDeviceAssignments
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleDeviceAssignmentCreateManyArgs>(args?: SelectSubset<T, VehicleDeviceAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleDeviceAssignment.
     * @param {VehicleDeviceAssignmentDeleteArgs} args - Arguments to delete one VehicleDeviceAssignment.
     * @example
     * // Delete one VehicleDeviceAssignment
     * const VehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.delete({
     *   where: {
     *     // ... filter to delete one VehicleDeviceAssignment
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeviceAssignmentDeleteArgs>(args: SelectSubset<T, VehicleDeviceAssignmentDeleteArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleDeviceAssignment.
     * @param {VehicleDeviceAssignmentUpdateArgs} args - Arguments to update one VehicleDeviceAssignment.
     * @example
     * // Update one VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleDeviceAssignmentUpdateArgs>(args: SelectSubset<T, VehicleDeviceAssignmentUpdateArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleDeviceAssignments.
     * @param {VehicleDeviceAssignmentDeleteManyArgs} args - Arguments to filter VehicleDeviceAssignments to delete.
     * @example
     * // Delete a few VehicleDeviceAssignments
     * const { count } = await prisma.vehicleDeviceAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeviceAssignmentDeleteManyArgs>(args?: SelectSubset<T, VehicleDeviceAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleDeviceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleDeviceAssignments
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleDeviceAssignmentUpdateManyArgs>(args: SelectSubset<T, VehicleDeviceAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleDeviceAssignment.
     * @param {VehicleDeviceAssignmentUpsertArgs} args - Arguments to update or create a VehicleDeviceAssignment.
     * @example
     * // Update or create a VehicleDeviceAssignment
     * const vehicleDeviceAssignment = await prisma.vehicleDeviceAssignment.upsert({
     *   create: {
     *     // ... data to create a VehicleDeviceAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleDeviceAssignment we want to update
     *   }
     * })
     */
    upsert<T extends VehicleDeviceAssignmentUpsertArgs>(args: SelectSubset<T, VehicleDeviceAssignmentUpsertArgs<ExtArgs>>): Prisma__VehicleDeviceAssignmentClient<$Result.GetResult<Prisma.$VehicleDeviceAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleDeviceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentCountArgs} args - Arguments to filter VehicleDeviceAssignments to count.
     * @example
     * // Count the number of VehicleDeviceAssignments
     * const count = await prisma.vehicleDeviceAssignment.count({
     *   where: {
     *     // ... the filter for the VehicleDeviceAssignments we want to count
     *   }
     * })
    **/
    count<T extends VehicleDeviceAssignmentCountArgs>(
      args?: Subset<T, VehicleDeviceAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleDeviceAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleDeviceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleDeviceAssignmentAggregateArgs>(args: Subset<T, VehicleDeviceAssignmentAggregateArgs>): Prisma.PrismaPromise<GetVehicleDeviceAssignmentAggregateType<T>>

    /**
     * Group by VehicleDeviceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDeviceAssignmentGroupByArgs} args - Group by arguments.
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
      T extends VehicleDeviceAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleDeviceAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: VehicleDeviceAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleDeviceAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleDeviceAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleDeviceAssignment model
   */
  readonly fields: VehicleDeviceAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleDeviceAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleDeviceAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends IotDeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IotDeviceDefaultArgs<ExtArgs>>): Prisma__IotDeviceClient<$Result.GetResult<Prisma.$IotDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleDeviceAssignment model
   */
  interface VehicleDeviceAssignmentFieldRefs {
    readonly assignmentId: FieldRef<"VehicleDeviceAssignment", 'Int'>
    readonly vehicleId: FieldRef<"VehicleDeviceAssignment", 'Int'>
    readonly deviceId: FieldRef<"VehicleDeviceAssignment", 'Int'>
    readonly assignedAt: FieldRef<"VehicleDeviceAssignment", 'DateTime'>
    readonly removedAt: FieldRef<"VehicleDeviceAssignment", 'DateTime'>
    readonly isActive: FieldRef<"VehicleDeviceAssignment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VehicleDeviceAssignment findUnique
   */
  export type VehicleDeviceAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDeviceAssignment to fetch.
     */
    where: VehicleDeviceAssignmentWhereUniqueInput
  }

  /**
   * VehicleDeviceAssignment findUniqueOrThrow
   */
  export type VehicleDeviceAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDeviceAssignment to fetch.
     */
    where: VehicleDeviceAssignmentWhereUniqueInput
  }

  /**
   * VehicleDeviceAssignment findFirst
   */
  export type VehicleDeviceAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDeviceAssignment to fetch.
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDeviceAssignments to fetch.
     */
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDeviceAssignments.
     */
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDeviceAssignments.
     */
    distinct?: VehicleDeviceAssignmentScalarFieldEnum | VehicleDeviceAssignmentScalarFieldEnum[]
  }

  /**
   * VehicleDeviceAssignment findFirstOrThrow
   */
  export type VehicleDeviceAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDeviceAssignment to fetch.
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDeviceAssignments to fetch.
     */
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDeviceAssignments.
     */
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDeviceAssignments.
     */
    distinct?: VehicleDeviceAssignmentScalarFieldEnum | VehicleDeviceAssignmentScalarFieldEnum[]
  }

  /**
   * VehicleDeviceAssignment findMany
   */
  export type VehicleDeviceAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDeviceAssignments to fetch.
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDeviceAssignments to fetch.
     */
    orderBy?: VehicleDeviceAssignmentOrderByWithRelationInput | VehicleDeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleDeviceAssignments.
     */
    cursor?: VehicleDeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDeviceAssignments.
     */
    distinct?: VehicleDeviceAssignmentScalarFieldEnum | VehicleDeviceAssignmentScalarFieldEnum[]
  }

  /**
   * VehicleDeviceAssignment create
   */
  export type VehicleDeviceAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleDeviceAssignment.
     */
    data: XOR<VehicleDeviceAssignmentCreateInput, VehicleDeviceAssignmentUncheckedCreateInput>
  }

  /**
   * VehicleDeviceAssignment createMany
   */
  export type VehicleDeviceAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleDeviceAssignments.
     */
    data: VehicleDeviceAssignmentCreateManyInput | VehicleDeviceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleDeviceAssignment update
   */
  export type VehicleDeviceAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleDeviceAssignment.
     */
    data: XOR<VehicleDeviceAssignmentUpdateInput, VehicleDeviceAssignmentUncheckedUpdateInput>
    /**
     * Choose, which VehicleDeviceAssignment to update.
     */
    where: VehicleDeviceAssignmentWhereUniqueInput
  }

  /**
   * VehicleDeviceAssignment updateMany
   */
  export type VehicleDeviceAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleDeviceAssignments.
     */
    data: XOR<VehicleDeviceAssignmentUpdateManyMutationInput, VehicleDeviceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which VehicleDeviceAssignments to update
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * Limit how many VehicleDeviceAssignments to update.
     */
    limit?: number
  }

  /**
   * VehicleDeviceAssignment upsert
   */
  export type VehicleDeviceAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleDeviceAssignment to update in case it exists.
     */
    where: VehicleDeviceAssignmentWhereUniqueInput
    /**
     * In case the VehicleDeviceAssignment found by the `where` argument doesn't exist, create a new VehicleDeviceAssignment with this data.
     */
    create: XOR<VehicleDeviceAssignmentCreateInput, VehicleDeviceAssignmentUncheckedCreateInput>
    /**
     * In case the VehicleDeviceAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleDeviceAssignmentUpdateInput, VehicleDeviceAssignmentUncheckedUpdateInput>
  }

  /**
   * VehicleDeviceAssignment delete
   */
  export type VehicleDeviceAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
    /**
     * Filter which VehicleDeviceAssignment to delete.
     */
    where: VehicleDeviceAssignmentWhereUniqueInput
  }

  /**
   * VehicleDeviceAssignment deleteMany
   */
  export type VehicleDeviceAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDeviceAssignments to delete
     */
    where?: VehicleDeviceAssignmentWhereInput
    /**
     * Limit how many VehicleDeviceAssignments to delete.
     */
    limit?: number
  }

  /**
   * VehicleDeviceAssignment without action
   */
  export type VehicleDeviceAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDeviceAssignment
     */
    select?: VehicleDeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDeviceAssignment
     */
    omit?: VehicleDeviceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDeviceAssignmentInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    roleId: 'roleId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GeofenceScalarFieldEnum: {
    geofenceId: 'geofenceId',
    geofenceName: 'geofenceName',
    geofenceType: 'geofenceType',
    centerLat: 'centerLat',
    centerLon: 'centerLon',
    radiusMeter: 'radiusMeter',
    polygonData: 'polygonData',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type GeofenceScalarFieldEnum = (typeof GeofenceScalarFieldEnum)[keyof typeof GeofenceScalarFieldEnum]


  export const VehicleGeofenceLogScalarFieldEnum: {
    geofenceLogId: 'geofenceLogId',
    vehicleId: 'vehicleId',
    geofenceId: 'geofenceId',
    eventType: 'eventType',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type VehicleGeofenceLogScalarFieldEnum = (typeof VehicleGeofenceLogScalarFieldEnum)[keyof typeof VehicleGeofenceLogScalarFieldEnum]


  export const MaintenanceLogScalarFieldEnum: {
    maintenanceId: 'maintenanceId',
    vehicleId: 'vehicleId',
    maintenanceType: 'maintenanceType',
    description: 'description',
    maintenanceDate: 'maintenanceDate',
    currentKm: 'currentKm',
    cost: 'cost',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type MaintenanceLogScalarFieldEnum = (typeof MaintenanceLogScalarFieldEnum)[keyof typeof MaintenanceLogScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    identityNumber: 'identityNumber',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    rentalId: 'rentalId',
    vehicleId: 'vehicleId',
    customerId: 'customerId',
    rentedBy: 'rentedBy',
    startTime: 'startTime',
    endTime: 'endTime',
    startKm: 'startKm',
    endKm: 'endKm',
    rentalStatus: 'rentalStatus',
    createdAt: 'createdAt',
    rentalFee: 'rentalFee'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const MonthlyReportScalarFieldEnum: {
    reportId: 'reportId',
    vehicleId: 'vehicleId',
    reportMonth: 'reportMonth',
    totalKm: 'totalKm',
    totalAlerts: 'totalAlerts',
    totalImpacts: 'totalImpacts',
    totalOutOfZone: 'totalOutOfZone',
    generatedAt: 'generatedAt'
  };

  export type MonthlyReportScalarFieldEnum = (typeof MonthlyReportScalarFieldEnum)[keyof typeof MonthlyReportScalarFieldEnum]


  export const GpsLogScalarFieldEnum: {
    gpsLogId: 'gpsLogId',
    vehicleId: 'vehicleId',
    rentalId: 'rentalId',
    latitude: 'latitude',
    longitude: 'longitude',
    speedKmh: 'speedKmh',
    gpsStatus: 'gpsStatus',
    recordedAt: 'recordedAt',
    distanceFromHome: 'distanceFromHome',
    homeLatitude: 'homeLatitude',
    homeLongitude: 'homeLongitude'
  };

  export type GpsLogScalarFieldEnum = (typeof GpsLogScalarFieldEnum)[keyof typeof GpsLogScalarFieldEnum]


  export const VehicleAlertScalarFieldEnum: {
    alertId: 'alertId',
    vehicleId: 'vehicleId',
    rentalId: 'rentalId',
    alertType: 'alertType',
    latitude: 'latitude',
    longitude: 'longitude',
    alertMessage: 'alertMessage',
    isAcknowledged: 'isAcknowledged',
    acknowledgedAt: 'acknowledgedAt',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type VehicleAlertScalarFieldEnum = (typeof VehicleAlertScalarFieldEnum)[keyof typeof VehicleAlertScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    vehicleId: 'vehicleId',
    plateNumber: 'plateNumber',
    vehicleName: 'vehicleName',
    vehicleType: 'vehicleType',
    brand: 'brand',
    model: 'model',
    color: 'color',
    yearManufactured: 'yearManufactured',
    status: 'status',
    totalKm: 'totalKm',
    createdAt: 'createdAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const IotDeviceScalarFieldEnum: {
    deviceId: 'deviceId',
    serialNumber: 'serialNumber',
    mqttTopic: 'mqttTopic',
    simNumber: 'simNumber',
    firmwareVersion: 'firmwareVersion',
    lastOnlineAt: 'lastOnlineAt',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type IotDeviceScalarFieldEnum = (typeof IotDeviceScalarFieldEnum)[keyof typeof IotDeviceScalarFieldEnum]


  export const VehicleDeviceAssignmentScalarFieldEnum: {
    assignmentId: 'assignmentId',
    vehicleId: 'vehicleId',
    deviceId: 'deviceId',
    assignedAt: 'assignedAt',
    removedAt: 'removedAt',
    isActive: 'isActive'
  };

  export type VehicleDeviceAssignmentScalarFieldEnum = (typeof VehicleDeviceAssignmentScalarFieldEnum)[keyof typeof VehicleDeviceAssignmentScalarFieldEnum]


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


  export const RoleOrderByRelevanceFieldEnum: {
    roleName: 'roleName'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const GeofenceOrderByRelevanceFieldEnum: {
    geofenceName: 'geofenceName'
  };

  export type GeofenceOrderByRelevanceFieldEnum = (typeof GeofenceOrderByRelevanceFieldEnum)[keyof typeof GeofenceOrderByRelevanceFieldEnum]


  export const MaintenanceLogOrderByRelevanceFieldEnum: {
    maintenanceType: 'maintenanceType',
    description: 'description'
  };

  export type MaintenanceLogOrderByRelevanceFieldEnum = (typeof MaintenanceLogOrderByRelevanceFieldEnum)[keyof typeof MaintenanceLogOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    identityNumber: 'identityNumber',
    address: 'address'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const VehicleAlertOrderByRelevanceFieldEnum: {
    alertMessage: 'alertMessage'
  };

  export type VehicleAlertOrderByRelevanceFieldEnum = (typeof VehicleAlertOrderByRelevanceFieldEnum)[keyof typeof VehicleAlertOrderByRelevanceFieldEnum]


  export const VehicleOrderByRelevanceFieldEnum: {
    plateNumber: 'plateNumber',
    vehicleName: 'vehicleName',
    vehicleType: 'vehicleType',
    brand: 'brand',
    model: 'model',
    color: 'color'
  };

  export type VehicleOrderByRelevanceFieldEnum = (typeof VehicleOrderByRelevanceFieldEnum)[keyof typeof VehicleOrderByRelevanceFieldEnum]


  export const IotDeviceOrderByRelevanceFieldEnum: {
    serialNumber: 'serialNumber',
    mqttTopic: 'mqttTopic',
    simNumber: 'simNumber',
    firmwareVersion: 'firmwareVersion'
  };

  export type IotDeviceOrderByRelevanceFieldEnum = (typeof IotDeviceOrderByRelevanceFieldEnum)[keyof typeof IotDeviceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'GeofenceType'
   */
  export type EnumGeofenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeofenceType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GeofenceEvent'
   */
  export type EnumGeofenceEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeofenceEvent'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'GpsStatus'
   */
  export type EnumGpsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GpsStatus'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    roleName?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "roleId" | "roleName">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    geofences?: GeofenceListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    rentals?: RentalListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    geofences?: GeofenceOrderByRelationAggregateInput
    maintenanceLogs?: MaintenanceLogOrderByRelationAggregateInput
    rentals?: RentalOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    geofences?: GeofenceListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    rentals?: RentalListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GeofenceWhereInput = {
    AND?: GeofenceWhereInput | GeofenceWhereInput[]
    OR?: GeofenceWhereInput[]
    NOT?: GeofenceWhereInput | GeofenceWhereInput[]
    geofenceId?: IntFilter<"Geofence"> | number
    geofenceName?: StringFilter<"Geofence"> | string
    geofenceType?: EnumGeofenceTypeFilter<"Geofence"> | $Enums.GeofenceType
    centerLat?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    centerLon?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    polygonData?: JsonNullableFilter<"Geofence">
    createdBy?: IntFilter<"Geofence"> | number
    createdAt?: DateTimeFilter<"Geofence"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    geofenceLogs?: VehicleGeofenceLogListRelationFilter
  }

  export type GeofenceOrderByWithRelationInput = {
    geofenceId?: SortOrder
    geofenceName?: SortOrder
    geofenceType?: SortOrder
    centerLat?: SortOrderInput | SortOrder
    centerLon?: SortOrderInput | SortOrder
    radiusMeter?: SortOrderInput | SortOrder
    polygonData?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    geofenceLogs?: VehicleGeofenceLogOrderByRelationAggregateInput
    _relevance?: GeofenceOrderByRelevanceInput
  }

  export type GeofenceWhereUniqueInput = Prisma.AtLeast<{
    geofenceId?: number
    AND?: GeofenceWhereInput | GeofenceWhereInput[]
    OR?: GeofenceWhereInput[]
    NOT?: GeofenceWhereInput | GeofenceWhereInput[]
    geofenceName?: StringFilter<"Geofence"> | string
    geofenceType?: EnumGeofenceTypeFilter<"Geofence"> | $Enums.GeofenceType
    centerLat?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    centerLon?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    polygonData?: JsonNullableFilter<"Geofence">
    createdBy?: IntFilter<"Geofence"> | number
    createdAt?: DateTimeFilter<"Geofence"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    geofenceLogs?: VehicleGeofenceLogListRelationFilter
  }, "geofenceId">

  export type GeofenceOrderByWithAggregationInput = {
    geofenceId?: SortOrder
    geofenceName?: SortOrder
    geofenceType?: SortOrder
    centerLat?: SortOrderInput | SortOrder
    centerLon?: SortOrderInput | SortOrder
    radiusMeter?: SortOrderInput | SortOrder
    polygonData?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: GeofenceCountOrderByAggregateInput
    _avg?: GeofenceAvgOrderByAggregateInput
    _max?: GeofenceMaxOrderByAggregateInput
    _min?: GeofenceMinOrderByAggregateInput
    _sum?: GeofenceSumOrderByAggregateInput
  }

  export type GeofenceScalarWhereWithAggregatesInput = {
    AND?: GeofenceScalarWhereWithAggregatesInput | GeofenceScalarWhereWithAggregatesInput[]
    OR?: GeofenceScalarWhereWithAggregatesInput[]
    NOT?: GeofenceScalarWhereWithAggregatesInput | GeofenceScalarWhereWithAggregatesInput[]
    geofenceId?: IntWithAggregatesFilter<"Geofence"> | number
    geofenceName?: StringWithAggregatesFilter<"Geofence"> | string
    geofenceType?: EnumGeofenceTypeWithAggregatesFilter<"Geofence"> | $Enums.GeofenceType
    centerLat?: DecimalNullableWithAggregatesFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    centerLon?: DecimalNullableWithAggregatesFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: DecimalNullableWithAggregatesFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    polygonData?: JsonNullableWithAggregatesFilter<"Geofence">
    createdBy?: IntWithAggregatesFilter<"Geofence"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Geofence"> | Date | string
  }

  export type VehicleGeofenceLogWhereInput = {
    AND?: VehicleGeofenceLogWhereInput | VehicleGeofenceLogWhereInput[]
    OR?: VehicleGeofenceLogWhereInput[]
    NOT?: VehicleGeofenceLogWhereInput | VehicleGeofenceLogWhereInput[]
    geofenceLogId?: IntFilter<"VehicleGeofenceLog"> | number
    vehicleId?: IntFilter<"VehicleGeofenceLog"> | number
    geofenceId?: IntFilter<"VehicleGeofenceLog"> | number
    eventType?: EnumGeofenceEventFilter<"VehicleGeofenceLog"> | $Enums.GeofenceEvent
    latitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VehicleGeofenceLog"> | Date | string
    geofence?: XOR<GeofenceScalarRelationFilter, GeofenceWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleGeofenceLogOrderByWithRelationInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    eventType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    geofence?: GeofenceOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleGeofenceLogWhereUniqueInput = Prisma.AtLeast<{
    geofenceLogId?: number
    AND?: VehicleGeofenceLogWhereInput | VehicleGeofenceLogWhereInput[]
    OR?: VehicleGeofenceLogWhereInput[]
    NOT?: VehicleGeofenceLogWhereInput | VehicleGeofenceLogWhereInput[]
    vehicleId?: IntFilter<"VehicleGeofenceLog"> | number
    geofenceId?: IntFilter<"VehicleGeofenceLog"> | number
    eventType?: EnumGeofenceEventFilter<"VehicleGeofenceLog"> | $Enums.GeofenceEvent
    latitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VehicleGeofenceLog"> | Date | string
    geofence?: XOR<GeofenceScalarRelationFilter, GeofenceWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "geofenceLogId">

  export type VehicleGeofenceLogOrderByWithAggregationInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    eventType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleGeofenceLogCountOrderByAggregateInput
    _avg?: VehicleGeofenceLogAvgOrderByAggregateInput
    _max?: VehicleGeofenceLogMaxOrderByAggregateInput
    _min?: VehicleGeofenceLogMinOrderByAggregateInput
    _sum?: VehicleGeofenceLogSumOrderByAggregateInput
  }

  export type VehicleGeofenceLogScalarWhereWithAggregatesInput = {
    AND?: VehicleGeofenceLogScalarWhereWithAggregatesInput | VehicleGeofenceLogScalarWhereWithAggregatesInput[]
    OR?: VehicleGeofenceLogScalarWhereWithAggregatesInput[]
    NOT?: VehicleGeofenceLogScalarWhereWithAggregatesInput | VehicleGeofenceLogScalarWhereWithAggregatesInput[]
    geofenceLogId?: IntWithAggregatesFilter<"VehicleGeofenceLog"> | number
    vehicleId?: IntWithAggregatesFilter<"VehicleGeofenceLog"> | number
    geofenceId?: IntWithAggregatesFilter<"VehicleGeofenceLog"> | number
    eventType?: EnumGeofenceEventWithAggregatesFilter<"VehicleGeofenceLog"> | $Enums.GeofenceEvent
    latitude?: DecimalWithAggregatesFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"VehicleGeofenceLog"> | Date | string
  }

  export type MaintenanceLogWhereInput = {
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    maintenanceId?: IntFilter<"MaintenanceLog"> | number
    vehicleId?: IntFilter<"MaintenanceLog"> | number
    maintenanceType?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    maintenanceDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    currentKm?: DecimalFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFilter<"MaintenanceLog"> | number
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceLogOrderByWithRelationInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    description?: SortOrderInput | SortOrder
    maintenanceDate?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    _relevance?: MaintenanceLogOrderByRelevanceInput
  }

  export type MaintenanceLogWhereUniqueInput = Prisma.AtLeast<{
    maintenanceId?: number
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    vehicleId?: IntFilter<"MaintenanceLog"> | number
    maintenanceType?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    maintenanceDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    currentKm?: DecimalFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFilter<"MaintenanceLog"> | number
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "maintenanceId">

  export type MaintenanceLogOrderByWithAggregationInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    description?: SortOrderInput | SortOrder
    maintenanceDate?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceLogCountOrderByAggregateInput
    _avg?: MaintenanceLogAvgOrderByAggregateInput
    _max?: MaintenanceLogMaxOrderByAggregateInput
    _min?: MaintenanceLogMinOrderByAggregateInput
    _sum?: MaintenanceLogSumOrderByAggregateInput
  }

  export type MaintenanceLogScalarWhereWithAggregatesInput = {
    AND?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    OR?: MaintenanceLogScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    maintenanceId?: IntWithAggregatesFilter<"MaintenanceLog"> | number
    vehicleId?: IntWithAggregatesFilter<"MaintenanceLog"> | number
    maintenanceType?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    description?: StringNullableWithAggregatesFilter<"MaintenanceLog"> | string | null
    maintenanceDate?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
    currentKm?: DecimalWithAggregatesFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalNullableWithAggregatesFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntWithAggregatesFilter<"MaintenanceLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    fullName?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    identityNumber?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    rentals?: RentalListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rentals?: RentalOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    fullName?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    identityNumber?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    rentals?: RentalListRelationFilter
  }, "customerId">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    identityNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    fullName?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    identityNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    rentalId?: IntFilter<"Rental"> | number
    vehicleId?: IntFilter<"Rental"> | number
    customerId?: IntFilter<"Rental"> | number
    rentedBy?: IntFilter<"Rental"> | number
    startTime?: DateTimeFilter<"Rental"> | Date | string
    endTime?: DateTimeNullableFilter<"Rental"> | Date | string | null
    startKm?: DecimalFilter<"Rental"> | Decimal | DecimalJsLike | number | string
    endKm?: DecimalNullableFilter<"Rental"> | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    rentalFee?: FloatFilter<"Rental"> | number
    gpsLogs?: GpsLogListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    alerts?: VehicleAlertListRelationFilter
  }

  export type RentalOrderByWithRelationInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    startKm?: SortOrder
    endKm?: SortOrderInput | SortOrder
    rentalStatus?: SortOrder
    createdAt?: SortOrder
    rentalFee?: SortOrder
    gpsLogs?: GpsLogOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    alerts?: VehicleAlertOrderByRelationAggregateInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    rentalId?: number
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    vehicleId?: IntFilter<"Rental"> | number
    customerId?: IntFilter<"Rental"> | number
    rentedBy?: IntFilter<"Rental"> | number
    startTime?: DateTimeFilter<"Rental"> | Date | string
    endTime?: DateTimeNullableFilter<"Rental"> | Date | string | null
    startKm?: DecimalFilter<"Rental"> | Decimal | DecimalJsLike | number | string
    endKm?: DecimalNullableFilter<"Rental"> | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    rentalFee?: FloatFilter<"Rental"> | number
    gpsLogs?: GpsLogListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    alerts?: VehicleAlertListRelationFilter
  }, "rentalId">

  export type RentalOrderByWithAggregationInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    startKm?: SortOrder
    endKm?: SortOrderInput | SortOrder
    rentalStatus?: SortOrder
    createdAt?: SortOrder
    rentalFee?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _avg?: RentalAvgOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
    _sum?: RentalSumOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    rentalId?: IntWithAggregatesFilter<"Rental"> | number
    vehicleId?: IntWithAggregatesFilter<"Rental"> | number
    customerId?: IntWithAggregatesFilter<"Rental"> | number
    rentedBy?: IntWithAggregatesFilter<"Rental"> | number
    startTime?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Rental"> | Date | string | null
    startKm?: DecimalWithAggregatesFilter<"Rental"> | Decimal | DecimalJsLike | number | string
    endKm?: DecimalNullableWithAggregatesFilter<"Rental"> | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusWithAggregatesFilter<"Rental"> | $Enums.RentalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    rentalFee?: FloatWithAggregatesFilter<"Rental"> | number
  }

  export type MonthlyReportWhereInput = {
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    reportId?: IntFilter<"MonthlyReport"> | number
    vehicleId?: IntFilter<"MonthlyReport"> | number
    reportMonth?: DateTimeFilter<"MonthlyReport"> | Date | string
    totalKm?: DecimalFilter<"MonthlyReport"> | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFilter<"MonthlyReport"> | number
    totalImpacts?: IntFilter<"MonthlyReport"> | number
    totalOutOfZone?: IntFilter<"MonthlyReport"> | number
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MonthlyReportOrderByWithRelationInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    reportMonth?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
    generatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type MonthlyReportWhereUniqueInput = Prisma.AtLeast<{
    reportId?: number
    vehicleId_reportMonth?: MonthlyReportVehicleIdReportMonthCompoundUniqueInput
    AND?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    OR?: MonthlyReportWhereInput[]
    NOT?: MonthlyReportWhereInput | MonthlyReportWhereInput[]
    vehicleId?: IntFilter<"MonthlyReport"> | number
    reportMonth?: DateTimeFilter<"MonthlyReport"> | Date | string
    totalKm?: DecimalFilter<"MonthlyReport"> | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFilter<"MonthlyReport"> | number
    totalImpacts?: IntFilter<"MonthlyReport"> | number
    totalOutOfZone?: IntFilter<"MonthlyReport"> | number
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "reportId" | "vehicleId_reportMonth">

  export type MonthlyReportOrderByWithAggregationInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    reportMonth?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
    generatedAt?: SortOrder
    _count?: MonthlyReportCountOrderByAggregateInput
    _avg?: MonthlyReportAvgOrderByAggregateInput
    _max?: MonthlyReportMaxOrderByAggregateInput
    _min?: MonthlyReportMinOrderByAggregateInput
    _sum?: MonthlyReportSumOrderByAggregateInput
  }

  export type MonthlyReportScalarWhereWithAggregatesInput = {
    AND?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    OR?: MonthlyReportScalarWhereWithAggregatesInput[]
    NOT?: MonthlyReportScalarWhereWithAggregatesInput | MonthlyReportScalarWhereWithAggregatesInput[]
    reportId?: IntWithAggregatesFilter<"MonthlyReport"> | number
    vehicleId?: IntWithAggregatesFilter<"MonthlyReport"> | number
    reportMonth?: DateTimeWithAggregatesFilter<"MonthlyReport"> | Date | string
    totalKm?: DecimalWithAggregatesFilter<"MonthlyReport"> | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntWithAggregatesFilter<"MonthlyReport"> | number
    totalImpacts?: IntWithAggregatesFilter<"MonthlyReport"> | number
    totalOutOfZone?: IntWithAggregatesFilter<"MonthlyReport"> | number
    generatedAt?: DateTimeWithAggregatesFilter<"MonthlyReport"> | Date | string
  }

  export type GpsLogWhereInput = {
    AND?: GpsLogWhereInput | GpsLogWhereInput[]
    OR?: GpsLogWhereInput[]
    NOT?: GpsLogWhereInput | GpsLogWhereInput[]
    gpsLogId?: IntFilter<"GpsLog"> | number
    vehicleId?: IntFilter<"GpsLog"> | number
    rentalId?: IntNullableFilter<"GpsLog"> | number | null
    latitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFilter<"GpsLog"> | $Enums.GpsStatus
    recordedAt?: DateTimeFilter<"GpsLog"> | Date | string
    distanceFromHome?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type GpsLogOrderByWithRelationInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    gpsStatus?: SortOrder
    recordedAt?: SortOrder
    distanceFromHome?: SortOrderInput | SortOrder
    homeLatitude?: SortOrderInput | SortOrder
    homeLongitude?: SortOrderInput | SortOrder
    rental?: RentalOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type GpsLogWhereUniqueInput = Prisma.AtLeast<{
    gpsLogId?: number
    AND?: GpsLogWhereInput | GpsLogWhereInput[]
    OR?: GpsLogWhereInput[]
    NOT?: GpsLogWhereInput | GpsLogWhereInput[]
    vehicleId?: IntFilter<"GpsLog"> | number
    rentalId?: IntNullableFilter<"GpsLog"> | number | null
    latitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFilter<"GpsLog"> | $Enums.GpsStatus
    recordedAt?: DateTimeFilter<"GpsLog"> | Date | string
    distanceFromHome?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "gpsLogId">

  export type GpsLogOrderByWithAggregationInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    gpsStatus?: SortOrder
    recordedAt?: SortOrder
    distanceFromHome?: SortOrderInput | SortOrder
    homeLatitude?: SortOrderInput | SortOrder
    homeLongitude?: SortOrderInput | SortOrder
    _count?: GpsLogCountOrderByAggregateInput
    _avg?: GpsLogAvgOrderByAggregateInput
    _max?: GpsLogMaxOrderByAggregateInput
    _min?: GpsLogMinOrderByAggregateInput
    _sum?: GpsLogSumOrderByAggregateInput
  }

  export type GpsLogScalarWhereWithAggregatesInput = {
    AND?: GpsLogScalarWhereWithAggregatesInput | GpsLogScalarWhereWithAggregatesInput[]
    OR?: GpsLogScalarWhereWithAggregatesInput[]
    NOT?: GpsLogScalarWhereWithAggregatesInput | GpsLogScalarWhereWithAggregatesInput[]
    gpsLogId?: IntWithAggregatesFilter<"GpsLog"> | number
    vehicleId?: IntWithAggregatesFilter<"GpsLog"> | number
    rentalId?: IntNullableWithAggregatesFilter<"GpsLog"> | number | null
    latitude?: DecimalWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusWithAggregatesFilter<"GpsLog"> | $Enums.GpsStatus
    recordedAt?: DateTimeWithAggregatesFilter<"GpsLog"> | Date | string
    distanceFromHome?: DecimalNullableWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: DecimalNullableWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: DecimalNullableWithAggregatesFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
  }

  export type VehicleAlertWhereInput = {
    AND?: VehicleAlertWhereInput | VehicleAlertWhereInput[]
    OR?: VehicleAlertWhereInput[]
    NOT?: VehicleAlertWhereInput | VehicleAlertWhereInput[]
    alertId?: IntFilter<"VehicleAlert"> | number
    vehicleId?: IntFilter<"VehicleAlert"> | number
    rentalId?: IntNullableFilter<"VehicleAlert"> | number | null
    alertType?: EnumAlertTypeFilter<"VehicleAlert"> | $Enums.AlertType
    latitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    alertMessage?: StringNullableFilter<"VehicleAlert"> | string | null
    isAcknowledged?: BoolFilter<"VehicleAlert"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"VehicleAlert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleAlertOrderByWithRelationInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrderInput | SortOrder
    alertType?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    alertMessage?: SortOrderInput | SortOrder
    isAcknowledged?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    rental?: RentalOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    _relevance?: VehicleAlertOrderByRelevanceInput
  }

  export type VehicleAlertWhereUniqueInput = Prisma.AtLeast<{
    alertId?: number
    AND?: VehicleAlertWhereInput | VehicleAlertWhereInput[]
    OR?: VehicleAlertWhereInput[]
    NOT?: VehicleAlertWhereInput | VehicleAlertWhereInput[]
    vehicleId?: IntFilter<"VehicleAlert"> | number
    rentalId?: IntNullableFilter<"VehicleAlert"> | number | null
    alertType?: EnumAlertTypeFilter<"VehicleAlert"> | $Enums.AlertType
    latitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    alertMessage?: StringNullableFilter<"VehicleAlert"> | string | null
    isAcknowledged?: BoolFilter<"VehicleAlert"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"VehicleAlert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "alertId">

  export type VehicleAlertOrderByWithAggregationInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrderInput | SortOrder
    alertType?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    alertMessage?: SortOrderInput | SortOrder
    isAcknowledged?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: VehicleAlertCountOrderByAggregateInput
    _avg?: VehicleAlertAvgOrderByAggregateInput
    _max?: VehicleAlertMaxOrderByAggregateInput
    _min?: VehicleAlertMinOrderByAggregateInput
    _sum?: VehicleAlertSumOrderByAggregateInput
  }

  export type VehicleAlertScalarWhereWithAggregatesInput = {
    AND?: VehicleAlertScalarWhereWithAggregatesInput | VehicleAlertScalarWhereWithAggregatesInput[]
    OR?: VehicleAlertScalarWhereWithAggregatesInput[]
    NOT?: VehicleAlertScalarWhereWithAggregatesInput | VehicleAlertScalarWhereWithAggregatesInput[]
    alertId?: IntWithAggregatesFilter<"VehicleAlert"> | number
    vehicleId?: IntWithAggregatesFilter<"VehicleAlert"> | number
    rentalId?: IntNullableWithAggregatesFilter<"VehicleAlert"> | number | null
    alertType?: EnumAlertTypeWithAggregatesFilter<"VehicleAlert"> | $Enums.AlertType
    latitude?: DecimalNullableWithAggregatesFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    alertMessage?: StringNullableWithAggregatesFilter<"VehicleAlert"> | string | null
    isAcknowledged?: BoolWithAggregatesFilter<"VehicleAlert"> | boolean
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"VehicleAlert"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VehicleAlert"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"VehicleAlert"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleId?: IntFilter<"Vehicle"> | number
    plateNumber?: StringFilter<"Vehicle"> | string
    vehicleName?: StringFilter<"Vehicle"> | string
    vehicleType?: StringFilter<"Vehicle"> | string
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    yearManufactured?: IntNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    totalKm?: DecimalFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    gpsLogs?: GpsLogListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    monthlyReports?: MonthlyReportListRelationFilter
    rentals?: RentalListRelationFilter
    alerts?: VehicleAlertListRelationFilter
    deviceAssignments?: VehicleDeviceAssignmentListRelationFilter
    geofenceLogs?: VehicleGeofenceLogListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    vehicleId?: SortOrder
    plateNumber?: SortOrder
    vehicleName?: SortOrder
    vehicleType?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    yearManufactured?: SortOrderInput | SortOrder
    status?: SortOrder
    totalKm?: SortOrder
    createdAt?: SortOrder
    gpsLogs?: GpsLogOrderByRelationAggregateInput
    maintenanceLogs?: MaintenanceLogOrderByRelationAggregateInput
    monthlyReports?: MonthlyReportOrderByRelationAggregateInput
    rentals?: RentalOrderByRelationAggregateInput
    alerts?: VehicleAlertOrderByRelationAggregateInput
    deviceAssignments?: VehicleDeviceAssignmentOrderByRelationAggregateInput
    geofenceLogs?: VehicleGeofenceLogOrderByRelationAggregateInput
    _relevance?: VehicleOrderByRelevanceInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    vehicleId?: number
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleName?: StringFilter<"Vehicle"> | string
    vehicleType?: StringFilter<"Vehicle"> | string
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    yearManufactured?: IntNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    totalKm?: DecimalFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    gpsLogs?: GpsLogListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    monthlyReports?: MonthlyReportListRelationFilter
    rentals?: RentalListRelationFilter
    alerts?: VehicleAlertListRelationFilter
    deviceAssignments?: VehicleDeviceAssignmentListRelationFilter
    geofenceLogs?: VehicleGeofenceLogListRelationFilter
  }, "vehicleId" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    vehicleId?: SortOrder
    plateNumber?: SortOrder
    vehicleName?: SortOrder
    vehicleType?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    yearManufactured?: SortOrderInput | SortOrder
    status?: SortOrder
    totalKm?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    vehicleId?: IntWithAggregatesFilter<"Vehicle"> | number
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleName?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    yearManufactured?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    totalKm?: DecimalWithAggregatesFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type IotDeviceWhereInput = {
    AND?: IotDeviceWhereInput | IotDeviceWhereInput[]
    OR?: IotDeviceWhereInput[]
    NOT?: IotDeviceWhereInput | IotDeviceWhereInput[]
    deviceId?: IntFilter<"IotDevice"> | number
    serialNumber?: StringFilter<"IotDevice"> | string
    mqttTopic?: StringFilter<"IotDevice"> | string
    simNumber?: StringNullableFilter<"IotDevice"> | string | null
    firmwareVersion?: StringNullableFilter<"IotDevice"> | string | null
    lastOnlineAt?: DateTimeNullableFilter<"IotDevice"> | Date | string | null
    status?: EnumDeviceStatusFilter<"IotDevice"> | $Enums.DeviceStatus
    createdAt?: DateTimeFilter<"IotDevice"> | Date | string
    assignments?: VehicleDeviceAssignmentListRelationFilter
  }

  export type IotDeviceOrderByWithRelationInput = {
    deviceId?: SortOrder
    serialNumber?: SortOrder
    mqttTopic?: SortOrder
    simNumber?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    lastOnlineAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    assignments?: VehicleDeviceAssignmentOrderByRelationAggregateInput
    _relevance?: IotDeviceOrderByRelevanceInput
  }

  export type IotDeviceWhereUniqueInput = Prisma.AtLeast<{
    deviceId?: number
    serialNumber?: string
    AND?: IotDeviceWhereInput | IotDeviceWhereInput[]
    OR?: IotDeviceWhereInput[]
    NOT?: IotDeviceWhereInput | IotDeviceWhereInput[]
    mqttTopic?: StringFilter<"IotDevice"> | string
    simNumber?: StringNullableFilter<"IotDevice"> | string | null
    firmwareVersion?: StringNullableFilter<"IotDevice"> | string | null
    lastOnlineAt?: DateTimeNullableFilter<"IotDevice"> | Date | string | null
    status?: EnumDeviceStatusFilter<"IotDevice"> | $Enums.DeviceStatus
    createdAt?: DateTimeFilter<"IotDevice"> | Date | string
    assignments?: VehicleDeviceAssignmentListRelationFilter
  }, "deviceId" | "serialNumber">

  export type IotDeviceOrderByWithAggregationInput = {
    deviceId?: SortOrder
    serialNumber?: SortOrder
    mqttTopic?: SortOrder
    simNumber?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    lastOnlineAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: IotDeviceCountOrderByAggregateInput
    _avg?: IotDeviceAvgOrderByAggregateInput
    _max?: IotDeviceMaxOrderByAggregateInput
    _min?: IotDeviceMinOrderByAggregateInput
    _sum?: IotDeviceSumOrderByAggregateInput
  }

  export type IotDeviceScalarWhereWithAggregatesInput = {
    AND?: IotDeviceScalarWhereWithAggregatesInput | IotDeviceScalarWhereWithAggregatesInput[]
    OR?: IotDeviceScalarWhereWithAggregatesInput[]
    NOT?: IotDeviceScalarWhereWithAggregatesInput | IotDeviceScalarWhereWithAggregatesInput[]
    deviceId?: IntWithAggregatesFilter<"IotDevice"> | number
    serialNumber?: StringWithAggregatesFilter<"IotDevice"> | string
    mqttTopic?: StringWithAggregatesFilter<"IotDevice"> | string
    simNumber?: StringNullableWithAggregatesFilter<"IotDevice"> | string | null
    firmwareVersion?: StringNullableWithAggregatesFilter<"IotDevice"> | string | null
    lastOnlineAt?: DateTimeNullableWithAggregatesFilter<"IotDevice"> | Date | string | null
    status?: EnumDeviceStatusWithAggregatesFilter<"IotDevice"> | $Enums.DeviceStatus
    createdAt?: DateTimeWithAggregatesFilter<"IotDevice"> | Date | string
  }

  export type VehicleDeviceAssignmentWhereInput = {
    AND?: VehicleDeviceAssignmentWhereInput | VehicleDeviceAssignmentWhereInput[]
    OR?: VehicleDeviceAssignmentWhereInput[]
    NOT?: VehicleDeviceAssignmentWhereInput | VehicleDeviceAssignmentWhereInput[]
    assignmentId?: IntFilter<"VehicleDeviceAssignment"> | number
    vehicleId?: IntFilter<"VehicleDeviceAssignment"> | number
    deviceId?: IntFilter<"VehicleDeviceAssignment"> | number
    assignedAt?: DateTimeFilter<"VehicleDeviceAssignment"> | Date | string
    removedAt?: DateTimeNullableFilter<"VehicleDeviceAssignment"> | Date | string | null
    isActive?: BoolFilter<"VehicleDeviceAssignment"> | boolean
    device?: XOR<IotDeviceScalarRelationFilter, IotDeviceWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleDeviceAssignmentOrderByWithRelationInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
    assignedAt?: SortOrder
    removedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    device?: IotDeviceOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleDeviceAssignmentWhereUniqueInput = Prisma.AtLeast<{
    assignmentId?: number
    AND?: VehicleDeviceAssignmentWhereInput | VehicleDeviceAssignmentWhereInput[]
    OR?: VehicleDeviceAssignmentWhereInput[]
    NOT?: VehicleDeviceAssignmentWhereInput | VehicleDeviceAssignmentWhereInput[]
    vehicleId?: IntFilter<"VehicleDeviceAssignment"> | number
    deviceId?: IntFilter<"VehicleDeviceAssignment"> | number
    assignedAt?: DateTimeFilter<"VehicleDeviceAssignment"> | Date | string
    removedAt?: DateTimeNullableFilter<"VehicleDeviceAssignment"> | Date | string | null
    isActive?: BoolFilter<"VehicleDeviceAssignment"> | boolean
    device?: XOR<IotDeviceScalarRelationFilter, IotDeviceWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "assignmentId">

  export type VehicleDeviceAssignmentOrderByWithAggregationInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
    assignedAt?: SortOrder
    removedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: VehicleDeviceAssignmentCountOrderByAggregateInput
    _avg?: VehicleDeviceAssignmentAvgOrderByAggregateInput
    _max?: VehicleDeviceAssignmentMaxOrderByAggregateInput
    _min?: VehicleDeviceAssignmentMinOrderByAggregateInput
    _sum?: VehicleDeviceAssignmentSumOrderByAggregateInput
  }

  export type VehicleDeviceAssignmentScalarWhereWithAggregatesInput = {
    AND?: VehicleDeviceAssignmentScalarWhereWithAggregatesInput | VehicleDeviceAssignmentScalarWhereWithAggregatesInput[]
    OR?: VehicleDeviceAssignmentScalarWhereWithAggregatesInput[]
    NOT?: VehicleDeviceAssignmentScalarWhereWithAggregatesInput | VehicleDeviceAssignmentScalarWhereWithAggregatesInput[]
    assignmentId?: IntWithAggregatesFilter<"VehicleDeviceAssignment"> | number
    vehicleId?: IntWithAggregatesFilter<"VehicleDeviceAssignment"> | number
    deviceId?: IntWithAggregatesFilter<"VehicleDeviceAssignment"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"VehicleDeviceAssignment"> | Date | string
    removedAt?: DateTimeNullableWithAggregatesFilter<"VehicleDeviceAssignment"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"VehicleDeviceAssignment"> | boolean
  }

  export type RoleCreateInput = {
    roleName: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    roleName: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    roleName: string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutCreatorInput
    rentals?: RentalCreateNestedManyWithoutStaffInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    roleId: number
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceUncheckedCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutCreatorInput
    rentals?: RentalUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUpdateManyWithoutStaffNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUncheckedUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    roleId: number
    status?: $Enums.UserStatus
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeofenceCreateInput = {
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutGeofencesInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutGeofenceInput
  }

  export type GeofenceUncheckedCreateInput = {
    geofenceId?: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy: number
    createdAt?: Date | string
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutGeofenceInput
  }

  export type GeofenceUpdateInput = {
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutGeofencesNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutGeofenceNestedInput
  }

  export type GeofenceUncheckedUpdateInput = {
    geofenceId?: IntFieldUpdateOperationsInput | number
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutGeofenceNestedInput
  }

  export type GeofenceCreateManyInput = {
    geofenceId?: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy: number
    createdAt?: Date | string
  }

  export type GeofenceUpdateManyMutationInput = {
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeofenceUncheckedUpdateManyInput = {
    geofenceId?: IntFieldUpdateOperationsInput | number
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleGeofenceLogCreateInput = {
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    geofence: GeofenceCreateNestedOneWithoutGeofenceLogsInput
    vehicle: VehicleCreateNestedOneWithoutGeofenceLogsInput
  }

  export type VehicleGeofenceLogUncheckedCreateInput = {
    geofenceLogId?: number
    vehicleId: number
    geofenceId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleGeofenceLogUpdateInput = {
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofence?: GeofenceUpdateOneRequiredWithoutGeofenceLogsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutGeofenceLogsNestedInput
  }

  export type VehicleGeofenceLogUncheckedUpdateInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    geofenceId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleGeofenceLogCreateManyInput = {
    geofenceLogId?: number
    vehicleId: number
    geofenceId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleGeofenceLogUpdateManyMutationInput = {
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleGeofenceLogUncheckedUpdateManyInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    geofenceId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateInput = {
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutMaintenanceLogsInput
    vehicle: VehicleCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateInput = {
    maintenanceId?: number
    vehicleId: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type MaintenanceLogUpdateInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMaintenanceLogsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateManyInput = {
    maintenanceId?: number
    vehicleId: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type MaintenanceLogUpdateManyMutationInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    fullName: string
    phone: string
    email?: string | null
    identityNumber?: string | null
    address?: string | null
    createdAt?: Date | string
    rentals?: RentalCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    fullName: string
    phone: string
    email?: string | null
    identityNumber?: string | null
    address?: string | null
    createdAt?: Date | string
    rentals?: RentalUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customerId?: number
    fullName: string
    phone: string
    email?: string | null
    identityNumber?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogCreateNestedManyWithoutRentalInput
    customer: CustomerCreateNestedOneWithoutRentalsInput
    staff: UserCreateNestedOneWithoutRentalsInput
    vehicle: VehicleCreateNestedOneWithoutRentalsInput
    alerts?: VehicleAlertCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutRentalInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUpdateManyWithoutRentalNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRentalsNestedInput
    staff?: UserUpdateOneRequiredWithoutRentalsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRentalsNestedInput
    alerts?: VehicleAlertUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutRentalNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalCreateManyInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
  }

  export type RentalUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
  }

  export type RentalUncheckedUpdateManyInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthlyReportCreateInput = {
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMonthlyReportsInput
  }

  export type MonthlyReportUncheckedCreateInput = {
    reportId?: number
    vehicleId: number
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
  }

  export type MonthlyReportUpdateInput = {
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMonthlyReportsNestedInput
  }

  export type MonthlyReportUncheckedUpdateInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportCreateManyInput = {
    reportId?: number
    vehicleId: number
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
  }

  export type MonthlyReportUpdateManyMutationInput = {
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportUncheckedUpdateManyInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GpsLogCreateInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
    rental?: RentalCreateNestedOneWithoutGpsLogsInput
    vehicle: VehicleCreateNestedOneWithoutGpsLogsInput
  }

  export type GpsLogUncheckedCreateInput = {
    gpsLogId?: number
    vehicleId: number
    rentalId?: number | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogUpdateInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rental?: RentalUpdateOneWithoutGpsLogsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutGpsLogsNestedInput
  }

  export type GpsLogUncheckedUpdateInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogCreateManyInput = {
    gpsLogId?: number
    vehicleId: number
    rentalId?: number | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogUpdateManyMutationInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogUncheckedUpdateManyInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VehicleAlertCreateInput = {
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    rental?: RentalCreateNestedOneWithoutAlertsInput
    vehicle: VehicleCreateNestedOneWithoutAlertsInput
  }

  export type VehicleAlertUncheckedCreateInput = {
    alertId?: number
    vehicleId: number
    rentalId?: number | null
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type VehicleAlertUpdateInput = {
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: RentalUpdateOneWithoutAlertsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type VehicleAlertUncheckedUpdateInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleAlertCreateManyInput = {
    alertId?: number
    vehicleId: number
    rentalId?: number | null
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type VehicleAlertUpdateManyMutationInput = {
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleAlertUncheckedUpdateManyInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotDeviceCreateInput = {
    serialNumber: string
    mqttTopic: string
    simNumber?: string | null
    firmwareVersion?: string | null
    lastOnlineAt?: Date | string | null
    status?: $Enums.DeviceStatus
    createdAt?: Date | string
    assignments?: VehicleDeviceAssignmentCreateNestedManyWithoutDeviceInput
  }

  export type IotDeviceUncheckedCreateInput = {
    deviceId?: number
    serialNumber: string
    mqttTopic: string
    simNumber?: string | null
    firmwareVersion?: string | null
    lastOnlineAt?: Date | string | null
    status?: $Enums.DeviceStatus
    createdAt?: Date | string
    assignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type IotDeviceUpdateInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: VehicleDeviceAssignmentUpdateManyWithoutDeviceNestedInput
  }

  export type IotDeviceUncheckedUpdateInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type IotDeviceCreateManyInput = {
    deviceId?: number
    serialNumber: string
    mqttTopic: string
    simNumber?: string | null
    firmwareVersion?: string | null
    lastOnlineAt?: Date | string | null
    status?: $Enums.DeviceStatus
    createdAt?: Date | string
  }

  export type IotDeviceUpdateManyMutationInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotDeviceUncheckedUpdateManyInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDeviceAssignmentCreateInput = {
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
    device: IotDeviceCreateNestedOneWithoutAssignmentsInput
    vehicle: VehicleCreateNestedOneWithoutDeviceAssignmentsInput
  }

  export type VehicleDeviceAssignmentUncheckedCreateInput = {
    assignmentId?: number
    vehicleId: number
    deviceId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: IotDeviceUpdateOneRequiredWithoutAssignmentsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutDeviceAssignmentsNestedInput
  }

  export type VehicleDeviceAssignmentUncheckedUpdateInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleDeviceAssignmentCreateManyInput = {
    assignmentId?: number
    vehicleId: number
    deviceId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleDeviceAssignmentUncheckedUpdateManyInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GeofenceListRelationFilter = {
    every?: GeofenceWhereInput
    some?: GeofenceWhereInput
    none?: GeofenceWhereInput
  }

  export type MaintenanceLogListRelationFilter = {
    every?: MaintenanceLogWhereInput
    some?: MaintenanceLogWhereInput
    none?: MaintenanceLogWhereInput
  }

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GeofenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGeofenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceType | EnumGeofenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceType[]
    notIn?: $Enums.GeofenceType[]
    not?: NestedEnumGeofenceTypeFilter<$PrismaModel> | $Enums.GeofenceType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleGeofenceLogListRelationFilter = {
    every?: VehicleGeofenceLogWhereInput
    some?: VehicleGeofenceLogWhereInput
    none?: VehicleGeofenceLogWhereInput
  }

  export type VehicleGeofenceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeofenceOrderByRelevanceInput = {
    fields: GeofenceOrderByRelevanceFieldEnum | GeofenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeofenceCountOrderByAggregateInput = {
    geofenceId?: SortOrder
    geofenceName?: SortOrder
    geofenceType?: SortOrder
    centerLat?: SortOrder
    centerLon?: SortOrder
    radiusMeter?: SortOrder
    polygonData?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type GeofenceAvgOrderByAggregateInput = {
    geofenceId?: SortOrder
    centerLat?: SortOrder
    centerLon?: SortOrder
    radiusMeter?: SortOrder
    createdBy?: SortOrder
  }

  export type GeofenceMaxOrderByAggregateInput = {
    geofenceId?: SortOrder
    geofenceName?: SortOrder
    geofenceType?: SortOrder
    centerLat?: SortOrder
    centerLon?: SortOrder
    radiusMeter?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type GeofenceMinOrderByAggregateInput = {
    geofenceId?: SortOrder
    geofenceName?: SortOrder
    geofenceType?: SortOrder
    centerLat?: SortOrder
    centerLon?: SortOrder
    radiusMeter?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type GeofenceSumOrderByAggregateInput = {
    geofenceId?: SortOrder
    centerLat?: SortOrder
    centerLon?: SortOrder
    radiusMeter?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumGeofenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceType | EnumGeofenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceType[]
    notIn?: $Enums.GeofenceType[]
    not?: NestedEnumGeofenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.GeofenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeofenceTypeFilter<$PrismaModel>
    _max?: NestedEnumGeofenceTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumGeofenceEventFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceEvent | EnumGeofenceEventFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceEvent[]
    notIn?: $Enums.GeofenceEvent[]
    not?: NestedEnumGeofenceEventFilter<$PrismaModel> | $Enums.GeofenceEvent
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type GeofenceScalarRelationFilter = {
    is?: GeofenceWhereInput
    isNot?: GeofenceWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type VehicleGeofenceLogCountOrderByAggregateInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    eventType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleGeofenceLogAvgOrderByAggregateInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type VehicleGeofenceLogMaxOrderByAggregateInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    eventType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleGeofenceLogMinOrderByAggregateInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    eventType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleGeofenceLogSumOrderByAggregateInput = {
    geofenceLogId?: SortOrder
    vehicleId?: SortOrder
    geofenceId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumGeofenceEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceEvent | EnumGeofenceEventFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceEvent[]
    notIn?: $Enums.GeofenceEvent[]
    not?: NestedEnumGeofenceEventWithAggregatesFilter<$PrismaModel> | $Enums.GeofenceEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeofenceEventFilter<$PrismaModel>
    _max?: NestedEnumGeofenceEventFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MaintenanceLogOrderByRelevanceInput = {
    fields: MaintenanceLogOrderByRelevanceFieldEnum | MaintenanceLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaintenanceLogCountOrderByAggregateInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    description?: SortOrder
    maintenanceDate?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceLogAvgOrderByAggregateInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
  }

  export type MaintenanceLogMaxOrderByAggregateInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    description?: SortOrder
    maintenanceDate?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceLogMinOrderByAggregateInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    description?: SortOrder
    maintenanceDate?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceLogSumOrderByAggregateInput = {
    maintenanceId?: SortOrder
    vehicleId?: SortOrder
    currentKm?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    identityNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    identityNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    identityNumber?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[]
    notIn?: $Enums.RentalStatus[]
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GpsLogListRelationFilter = {
    every?: GpsLogWhereInput
    some?: GpsLogWhereInput
    none?: GpsLogWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type VehicleAlertListRelationFilter = {
    every?: VehicleAlertWhereInput
    some?: VehicleAlertWhereInput
    none?: VehicleAlertWhereInput
  }

  export type GpsLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalCountOrderByAggregateInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startKm?: SortOrder
    endKm?: SortOrder
    rentalStatus?: SortOrder
    createdAt?: SortOrder
    rentalFee?: SortOrder
  }

  export type RentalAvgOrderByAggregateInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startKm?: SortOrder
    endKm?: SortOrder
    rentalFee?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startKm?: SortOrder
    endKm?: SortOrder
    rentalStatus?: SortOrder
    createdAt?: SortOrder
    rentalFee?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    startKm?: SortOrder
    endKm?: SortOrder
    rentalStatus?: SortOrder
    createdAt?: SortOrder
    rentalFee?: SortOrder
  }

  export type RentalSumOrderByAggregateInput = {
    rentalId?: SortOrder
    vehicleId?: SortOrder
    customerId?: SortOrder
    rentedBy?: SortOrder
    startKm?: SortOrder
    endKm?: SortOrder
    rentalFee?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[]
    notIn?: $Enums.RentalStatus[]
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MonthlyReportVehicleIdReportMonthCompoundUniqueInput = {
    vehicleId: number
    reportMonth: Date | string
  }

  export type MonthlyReportCountOrderByAggregateInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    reportMonth?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
    generatedAt?: SortOrder
  }

  export type MonthlyReportAvgOrderByAggregateInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
  }

  export type MonthlyReportMaxOrderByAggregateInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    reportMonth?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
    generatedAt?: SortOrder
  }

  export type MonthlyReportMinOrderByAggregateInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    reportMonth?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
    generatedAt?: SortOrder
  }

  export type MonthlyReportSumOrderByAggregateInput = {
    reportId?: SortOrder
    vehicleId?: SortOrder
    totalKm?: SortOrder
    totalAlerts?: SortOrder
    totalImpacts?: SortOrder
    totalOutOfZone?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGpsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GpsStatus | EnumGpsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GpsStatus[]
    notIn?: $Enums.GpsStatus[]
    not?: NestedEnumGpsStatusFilter<$PrismaModel> | $Enums.GpsStatus
  }

  export type RentalNullableScalarRelationFilter = {
    is?: RentalWhereInput | null
    isNot?: RentalWhereInput | null
  }

  export type GpsLogCountOrderByAggregateInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    gpsStatus?: SortOrder
    recordedAt?: SortOrder
    distanceFromHome?: SortOrder
    homeLatitude?: SortOrder
    homeLongitude?: SortOrder
  }

  export type GpsLogAvgOrderByAggregateInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    distanceFromHome?: SortOrder
    homeLatitude?: SortOrder
    homeLongitude?: SortOrder
  }

  export type GpsLogMaxOrderByAggregateInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    gpsStatus?: SortOrder
    recordedAt?: SortOrder
    distanceFromHome?: SortOrder
    homeLatitude?: SortOrder
    homeLongitude?: SortOrder
  }

  export type GpsLogMinOrderByAggregateInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    gpsStatus?: SortOrder
    recordedAt?: SortOrder
    distanceFromHome?: SortOrder
    homeLatitude?: SortOrder
    homeLongitude?: SortOrder
  }

  export type GpsLogSumOrderByAggregateInput = {
    gpsLogId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    distanceFromHome?: SortOrder
    homeLatitude?: SortOrder
    homeLongitude?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumGpsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GpsStatus | EnumGpsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GpsStatus[]
    notIn?: $Enums.GpsStatus[]
    not?: NestedEnumGpsStatusWithAggregatesFilter<$PrismaModel> | $Enums.GpsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGpsStatusFilter<$PrismaModel>
    _max?: NestedEnumGpsStatusFilter<$PrismaModel>
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VehicleAlertOrderByRelevanceInput = {
    fields: VehicleAlertOrderByRelevanceFieldEnum | VehicleAlertOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleAlertCountOrderByAggregateInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    alertType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    alertMessage?: SortOrder
    isAcknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type VehicleAlertAvgOrderByAggregateInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type VehicleAlertMaxOrderByAggregateInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    alertType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    alertMessage?: SortOrder
    isAcknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type VehicleAlertMinOrderByAggregateInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    alertType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    alertMessage?: SortOrder
    isAcknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type VehicleAlertSumOrderByAggregateInput = {
    alertId?: SortOrder
    vehicleId?: SortOrder
    rentalId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type MonthlyReportListRelationFilter = {
    every?: MonthlyReportWhereInput
    some?: MonthlyReportWhereInput
    none?: MonthlyReportWhereInput
  }

  export type VehicleDeviceAssignmentListRelationFilter = {
    every?: VehicleDeviceAssignmentWhereInput
    some?: VehicleDeviceAssignmentWhereInput
    none?: VehicleDeviceAssignmentWhereInput
  }

  export type MonthlyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleDeviceAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelevanceInput = {
    fields: VehicleOrderByRelevanceFieldEnum | VehicleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleCountOrderByAggregateInput = {
    vehicleId?: SortOrder
    plateNumber?: SortOrder
    vehicleName?: SortOrder
    vehicleType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    yearManufactured?: SortOrder
    status?: SortOrder
    totalKm?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    vehicleId?: SortOrder
    yearManufactured?: SortOrder
    totalKm?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    vehicleId?: SortOrder
    plateNumber?: SortOrder
    vehicleName?: SortOrder
    vehicleType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    yearManufactured?: SortOrder
    status?: SortOrder
    totalKm?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    vehicleId?: SortOrder
    plateNumber?: SortOrder
    vehicleName?: SortOrder
    vehicleType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    yearManufactured?: SortOrder
    status?: SortOrder
    totalKm?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    vehicleId?: SortOrder
    yearManufactured?: SortOrder
    totalKm?: SortOrder
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[]
    notIn?: $Enums.DeviceStatus[]
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type IotDeviceOrderByRelevanceInput = {
    fields: IotDeviceOrderByRelevanceFieldEnum | IotDeviceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IotDeviceCountOrderByAggregateInput = {
    deviceId?: SortOrder
    serialNumber?: SortOrder
    mqttTopic?: SortOrder
    simNumber?: SortOrder
    firmwareVersion?: SortOrder
    lastOnlineAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IotDeviceAvgOrderByAggregateInput = {
    deviceId?: SortOrder
  }

  export type IotDeviceMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    serialNumber?: SortOrder
    mqttTopic?: SortOrder
    simNumber?: SortOrder
    firmwareVersion?: SortOrder
    lastOnlineAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IotDeviceMinOrderByAggregateInput = {
    deviceId?: SortOrder
    serialNumber?: SortOrder
    mqttTopic?: SortOrder
    simNumber?: SortOrder
    firmwareVersion?: SortOrder
    lastOnlineAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IotDeviceSumOrderByAggregateInput = {
    deviceId?: SortOrder
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[]
    notIn?: $Enums.DeviceStatus[]
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type IotDeviceScalarRelationFilter = {
    is?: IotDeviceWhereInput
    isNot?: IotDeviceWhereInput
  }

  export type VehicleDeviceAssignmentCountOrderByAggregateInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
    assignedAt?: SortOrder
    removedAt?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleDeviceAssignmentAvgOrderByAggregateInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
  }

  export type VehicleDeviceAssignmentMaxOrderByAggregateInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
    assignedAt?: SortOrder
    removedAt?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleDeviceAssignmentMinOrderByAggregateInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
    assignedAt?: SortOrder
    removedAt?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleDeviceAssignmentSumOrderByAggregateInput = {
    assignmentId?: SortOrder
    vehicleId?: SortOrder
    deviceId?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GeofenceCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput> | GeofenceCreateWithoutCreatorInput[] | GeofenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GeofenceCreateOrConnectWithoutCreatorInput | GeofenceCreateOrConnectWithoutCreatorInput[]
    createMany?: GeofenceCreateManyCreatorInputEnvelope
    connect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
  }

  export type MaintenanceLogCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput> | MaintenanceLogCreateWithoutCreatorInput[] | MaintenanceLogUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutCreatorInput | MaintenanceLogCreateOrConnectWithoutCreatorInput[]
    createMany?: MaintenanceLogCreateManyCreatorInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type RentalCreateNestedManyWithoutStaffInput = {
    create?: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput> | RentalCreateWithoutStaffInput[] | RentalUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutStaffInput | RentalCreateOrConnectWithoutStaffInput[]
    createMany?: RentalCreateManyStaffInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type GeofenceUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput> | GeofenceCreateWithoutCreatorInput[] | GeofenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GeofenceCreateOrConnectWithoutCreatorInput | GeofenceCreateOrConnectWithoutCreatorInput[]
    createMany?: GeofenceCreateManyCreatorInputEnvelope
    connect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
  }

  export type MaintenanceLogUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput> | MaintenanceLogCreateWithoutCreatorInput[] | MaintenanceLogUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutCreatorInput | MaintenanceLogCreateOrConnectWithoutCreatorInput[]
    createMany?: MaintenanceLogCreateManyCreatorInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput> | RentalCreateWithoutStaffInput[] | RentalUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutStaffInput | RentalCreateOrConnectWithoutStaffInput[]
    createMany?: RentalCreateManyStaffInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GeofenceUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput> | GeofenceCreateWithoutCreatorInput[] | GeofenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GeofenceCreateOrConnectWithoutCreatorInput | GeofenceCreateOrConnectWithoutCreatorInput[]
    upsert?: GeofenceUpsertWithWhereUniqueWithoutCreatorInput | GeofenceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GeofenceCreateManyCreatorInputEnvelope
    set?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    disconnect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    delete?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    connect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    update?: GeofenceUpdateWithWhereUniqueWithoutCreatorInput | GeofenceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GeofenceUpdateManyWithWhereWithoutCreatorInput | GeofenceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GeofenceScalarWhereInput | GeofenceScalarWhereInput[]
  }

  export type MaintenanceLogUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput> | MaintenanceLogCreateWithoutCreatorInput[] | MaintenanceLogUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutCreatorInput | MaintenanceLogCreateOrConnectWithoutCreatorInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutCreatorInput | MaintenanceLogUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MaintenanceLogCreateManyCreatorInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutCreatorInput | MaintenanceLogUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutCreatorInput | MaintenanceLogUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type RentalUpdateManyWithoutStaffNestedInput = {
    create?: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput> | RentalCreateWithoutStaffInput[] | RentalUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutStaffInput | RentalCreateOrConnectWithoutStaffInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutStaffInput | RentalUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: RentalCreateManyStaffInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutStaffInput | RentalUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutStaffInput | RentalUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type GeofenceUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput> | GeofenceCreateWithoutCreatorInput[] | GeofenceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GeofenceCreateOrConnectWithoutCreatorInput | GeofenceCreateOrConnectWithoutCreatorInput[]
    upsert?: GeofenceUpsertWithWhereUniqueWithoutCreatorInput | GeofenceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GeofenceCreateManyCreatorInputEnvelope
    set?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    disconnect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    delete?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    connect?: GeofenceWhereUniqueInput | GeofenceWhereUniqueInput[]
    update?: GeofenceUpdateWithWhereUniqueWithoutCreatorInput | GeofenceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GeofenceUpdateManyWithWhereWithoutCreatorInput | GeofenceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GeofenceScalarWhereInput | GeofenceScalarWhereInput[]
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput> | MaintenanceLogCreateWithoutCreatorInput[] | MaintenanceLogUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutCreatorInput | MaintenanceLogCreateOrConnectWithoutCreatorInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutCreatorInput | MaintenanceLogUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MaintenanceLogCreateManyCreatorInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutCreatorInput | MaintenanceLogUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutCreatorInput | MaintenanceLogUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput> | RentalCreateWithoutStaffInput[] | RentalUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutStaffInput | RentalCreateOrConnectWithoutStaffInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutStaffInput | RentalUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: RentalCreateManyStaffInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutStaffInput | RentalUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutStaffInput | RentalUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGeofencesInput = {
    create?: XOR<UserCreateWithoutGeofencesInput, UserUncheckedCreateWithoutGeofencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeofencesInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleGeofenceLogCreateNestedManyWithoutGeofenceInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput> | VehicleGeofenceLogCreateWithoutGeofenceInput[] | VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput | VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput[]
    createMany?: VehicleGeofenceLogCreateManyGeofenceInputEnvelope
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
  }

  export type VehicleGeofenceLogUncheckedCreateNestedManyWithoutGeofenceInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput> | VehicleGeofenceLogCreateWithoutGeofenceInput[] | VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput | VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput[]
    createMany?: VehicleGeofenceLogCreateManyGeofenceInputEnvelope
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
  }

  export type EnumGeofenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.GeofenceType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutGeofencesNestedInput = {
    create?: XOR<UserCreateWithoutGeofencesInput, UserUncheckedCreateWithoutGeofencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeofencesInput
    upsert?: UserUpsertWithoutGeofencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeofencesInput, UserUpdateWithoutGeofencesInput>, UserUncheckedUpdateWithoutGeofencesInput>
  }

  export type VehicleGeofenceLogUpdateManyWithoutGeofenceNestedInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput> | VehicleGeofenceLogCreateWithoutGeofenceInput[] | VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput | VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput[]
    upsert?: VehicleGeofenceLogUpsertWithWhereUniqueWithoutGeofenceInput | VehicleGeofenceLogUpsertWithWhereUniqueWithoutGeofenceInput[]
    createMany?: VehicleGeofenceLogCreateManyGeofenceInputEnvelope
    set?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    disconnect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    delete?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    update?: VehicleGeofenceLogUpdateWithWhereUniqueWithoutGeofenceInput | VehicleGeofenceLogUpdateWithWhereUniqueWithoutGeofenceInput[]
    updateMany?: VehicleGeofenceLogUpdateManyWithWhereWithoutGeofenceInput | VehicleGeofenceLogUpdateManyWithWhereWithoutGeofenceInput[]
    deleteMany?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
  }

  export type VehicleGeofenceLogUncheckedUpdateManyWithoutGeofenceNestedInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput> | VehicleGeofenceLogCreateWithoutGeofenceInput[] | VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput | VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput[]
    upsert?: VehicleGeofenceLogUpsertWithWhereUniqueWithoutGeofenceInput | VehicleGeofenceLogUpsertWithWhereUniqueWithoutGeofenceInput[]
    createMany?: VehicleGeofenceLogCreateManyGeofenceInputEnvelope
    set?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    disconnect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    delete?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    update?: VehicleGeofenceLogUpdateWithWhereUniqueWithoutGeofenceInput | VehicleGeofenceLogUpdateWithWhereUniqueWithoutGeofenceInput[]
    updateMany?: VehicleGeofenceLogUpdateManyWithWhereWithoutGeofenceInput | VehicleGeofenceLogUpdateManyWithWhereWithoutGeofenceInput[]
    deleteMany?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
  }

  export type GeofenceCreateNestedOneWithoutGeofenceLogsInput = {
    create?: XOR<GeofenceCreateWithoutGeofenceLogsInput, GeofenceUncheckedCreateWithoutGeofenceLogsInput>
    connectOrCreate?: GeofenceCreateOrConnectWithoutGeofenceLogsInput
    connect?: GeofenceWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutGeofenceLogsInput = {
    create?: XOR<VehicleCreateWithoutGeofenceLogsInput, VehicleUncheckedCreateWithoutGeofenceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGeofenceLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumGeofenceEventFieldUpdateOperationsInput = {
    set?: $Enums.GeofenceEvent
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type GeofenceUpdateOneRequiredWithoutGeofenceLogsNestedInput = {
    create?: XOR<GeofenceCreateWithoutGeofenceLogsInput, GeofenceUncheckedCreateWithoutGeofenceLogsInput>
    connectOrCreate?: GeofenceCreateOrConnectWithoutGeofenceLogsInput
    upsert?: GeofenceUpsertWithoutGeofenceLogsInput
    connect?: GeofenceWhereUniqueInput
    update?: XOR<XOR<GeofenceUpdateToOneWithWhereWithoutGeofenceLogsInput, GeofenceUpdateWithoutGeofenceLogsInput>, GeofenceUncheckedUpdateWithoutGeofenceLogsInput>
  }

  export type VehicleUpdateOneRequiredWithoutGeofenceLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutGeofenceLogsInput, VehicleUncheckedCreateWithoutGeofenceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGeofenceLogsInput
    upsert?: VehicleUpsertWithoutGeofenceLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutGeofenceLogsInput, VehicleUpdateWithoutGeofenceLogsInput>, VehicleUncheckedUpdateWithoutGeofenceLogsInput>
  }

  export type UserCreateNestedOneWithoutMaintenanceLogsInput = {
    create?: XOR<UserCreateWithoutMaintenanceLogsInput, UserUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceLogsInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutMaintenanceLogsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
    create?: XOR<UserCreateWithoutMaintenanceLogsInput, UserUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceLogsInput
    upsert?: UserUpsertWithoutMaintenanceLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenanceLogsInput, UserUpdateWithoutMaintenanceLogsInput>, UserUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    upsert?: VehicleUpsertWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput, VehicleUpdateWithoutMaintenanceLogsInput>, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type RentalCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput> | RentalCreateWithoutCustomerInput[] | RentalUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput | RentalCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalCreateManyCustomerInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput> | RentalCreateWithoutCustomerInput[] | RentalUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput | RentalCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalCreateManyCustomerInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput> | RentalCreateWithoutCustomerInput[] | RentalUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput | RentalCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutCustomerInput | RentalUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalCreateManyCustomerInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutCustomerInput | RentalUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutCustomerInput | RentalUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput> | RentalCreateWithoutCustomerInput[] | RentalUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput | RentalCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutCustomerInput | RentalUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalCreateManyCustomerInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutCustomerInput | RentalUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutCustomerInput | RentalUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type GpsLogCreateNestedManyWithoutRentalInput = {
    create?: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput> | GpsLogCreateWithoutRentalInput[] | GpsLogUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutRentalInput | GpsLogCreateOrConnectWithoutRentalInput[]
    createMany?: GpsLogCreateManyRentalInputEnvelope
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutRentalsInput = {
    create?: XOR<CustomerCreateWithoutRentalsInput, CustomerUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRentalsInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRentalsInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutRentalsInput = {
    create?: XOR<VehicleCreateWithoutRentalsInput, VehicleUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRentalsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleAlertCreateNestedManyWithoutRentalInput = {
    create?: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput> | VehicleAlertCreateWithoutRentalInput[] | VehicleAlertUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutRentalInput | VehicleAlertCreateOrConnectWithoutRentalInput[]
    createMany?: VehicleAlertCreateManyRentalInputEnvelope
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
  }

  export type GpsLogUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput> | GpsLogCreateWithoutRentalInput[] | GpsLogUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutRentalInput | GpsLogCreateOrConnectWithoutRentalInput[]
    createMany?: GpsLogCreateManyRentalInputEnvelope
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
  }

  export type VehicleAlertUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput> | VehicleAlertCreateWithoutRentalInput[] | VehicleAlertUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutRentalInput | VehicleAlertCreateOrConnectWithoutRentalInput[]
    createMany?: VehicleAlertCreateManyRentalInputEnvelope
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GpsLogUpdateManyWithoutRentalNestedInput = {
    create?: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput> | GpsLogCreateWithoutRentalInput[] | GpsLogUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutRentalInput | GpsLogCreateOrConnectWithoutRentalInput[]
    upsert?: GpsLogUpsertWithWhereUniqueWithoutRentalInput | GpsLogUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: GpsLogCreateManyRentalInputEnvelope
    set?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    disconnect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    delete?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    update?: GpsLogUpdateWithWhereUniqueWithoutRentalInput | GpsLogUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: GpsLogUpdateManyWithWhereWithoutRentalInput | GpsLogUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<CustomerCreateWithoutRentalsInput, CustomerUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRentalsInput
    upsert?: CustomerUpsertWithoutRentalsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRentalsInput, CustomerUpdateWithoutRentalsInput>, CustomerUncheckedUpdateWithoutRentalsInput>
  }

  export type UserUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput
    upsert?: UserUpsertWithoutRentalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalsInput, UserUpdateWithoutRentalsInput>, UserUncheckedUpdateWithoutRentalsInput>
  }

  export type VehicleUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<VehicleCreateWithoutRentalsInput, VehicleUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRentalsInput
    upsert?: VehicleUpsertWithoutRentalsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRentalsInput, VehicleUpdateWithoutRentalsInput>, VehicleUncheckedUpdateWithoutRentalsInput>
  }

  export type VehicleAlertUpdateManyWithoutRentalNestedInput = {
    create?: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput> | VehicleAlertCreateWithoutRentalInput[] | VehicleAlertUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutRentalInput | VehicleAlertCreateOrConnectWithoutRentalInput[]
    upsert?: VehicleAlertUpsertWithWhereUniqueWithoutRentalInput | VehicleAlertUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: VehicleAlertCreateManyRentalInputEnvelope
    set?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    disconnect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    delete?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    update?: VehicleAlertUpdateWithWhereUniqueWithoutRentalInput | VehicleAlertUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: VehicleAlertUpdateManyWithWhereWithoutRentalInput | VehicleAlertUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
  }

  export type GpsLogUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput> | GpsLogCreateWithoutRentalInput[] | GpsLogUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutRentalInput | GpsLogCreateOrConnectWithoutRentalInput[]
    upsert?: GpsLogUpsertWithWhereUniqueWithoutRentalInput | GpsLogUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: GpsLogCreateManyRentalInputEnvelope
    set?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    disconnect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    delete?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    update?: GpsLogUpdateWithWhereUniqueWithoutRentalInput | GpsLogUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: GpsLogUpdateManyWithWhereWithoutRentalInput | GpsLogUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
  }

  export type VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput> | VehicleAlertCreateWithoutRentalInput[] | VehicleAlertUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutRentalInput | VehicleAlertCreateOrConnectWithoutRentalInput[]
    upsert?: VehicleAlertUpsertWithWhereUniqueWithoutRentalInput | VehicleAlertUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: VehicleAlertCreateManyRentalInputEnvelope
    set?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    disconnect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    delete?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    update?: VehicleAlertUpdateWithWhereUniqueWithoutRentalInput | VehicleAlertUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: VehicleAlertUpdateManyWithWhereWithoutRentalInput | VehicleAlertUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMonthlyReportsInput = {
    create?: XOR<VehicleCreateWithoutMonthlyReportsInput, VehicleUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMonthlyReportsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutMonthlyReportsNestedInput = {
    create?: XOR<VehicleCreateWithoutMonthlyReportsInput, VehicleUncheckedCreateWithoutMonthlyReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMonthlyReportsInput
    upsert?: VehicleUpsertWithoutMonthlyReportsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMonthlyReportsInput, VehicleUpdateWithoutMonthlyReportsInput>, VehicleUncheckedUpdateWithoutMonthlyReportsInput>
  }

  export type RentalCreateNestedOneWithoutGpsLogsInput = {
    create?: XOR<RentalCreateWithoutGpsLogsInput, RentalUncheckedCreateWithoutGpsLogsInput>
    connectOrCreate?: RentalCreateOrConnectWithoutGpsLogsInput
    connect?: RentalWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutGpsLogsInput = {
    create?: XOR<VehicleCreateWithoutGpsLogsInput, VehicleUncheckedCreateWithoutGpsLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGpsLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumGpsStatusFieldUpdateOperationsInput = {
    set?: $Enums.GpsStatus
  }

  export type RentalUpdateOneWithoutGpsLogsNestedInput = {
    create?: XOR<RentalCreateWithoutGpsLogsInput, RentalUncheckedCreateWithoutGpsLogsInput>
    connectOrCreate?: RentalCreateOrConnectWithoutGpsLogsInput
    upsert?: RentalUpsertWithoutGpsLogsInput
    disconnect?: RentalWhereInput | boolean
    delete?: RentalWhereInput | boolean
    connect?: RentalWhereUniqueInput
    update?: XOR<XOR<RentalUpdateToOneWithWhereWithoutGpsLogsInput, RentalUpdateWithoutGpsLogsInput>, RentalUncheckedUpdateWithoutGpsLogsInput>
  }

  export type VehicleUpdateOneRequiredWithoutGpsLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutGpsLogsInput, VehicleUncheckedCreateWithoutGpsLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGpsLogsInput
    upsert?: VehicleUpsertWithoutGpsLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutGpsLogsInput, VehicleUpdateWithoutGpsLogsInput>, VehicleUncheckedUpdateWithoutGpsLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentalCreateNestedOneWithoutAlertsInput = {
    create?: XOR<RentalCreateWithoutAlertsInput, RentalUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RentalCreateOrConnectWithoutAlertsInput
    connect?: RentalWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutAlertsInput = {
    create?: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAlertsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RentalUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<RentalCreateWithoutAlertsInput, RentalUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RentalCreateOrConnectWithoutAlertsInput
    upsert?: RentalUpsertWithoutAlertsInput
    disconnect?: RentalWhereInput | boolean
    delete?: RentalWhereInput | boolean
    connect?: RentalWhereUniqueInput
    update?: XOR<XOR<RentalUpdateToOneWithWhereWithoutAlertsInput, RentalUpdateWithoutAlertsInput>, RentalUncheckedUpdateWithoutAlertsInput>
  }

  export type VehicleUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAlertsInput
    upsert?: VehicleUpsertWithoutAlertsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutAlertsInput, VehicleUpdateWithoutAlertsInput>, VehicleUncheckedUpdateWithoutAlertsInput>
  }

  export type GpsLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput> | GpsLogCreateWithoutVehicleInput[] | GpsLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutVehicleInput | GpsLogCreateOrConnectWithoutVehicleInput[]
    createMany?: GpsLogCreateManyVehicleInputEnvelope
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
  }

  export type MaintenanceLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type MonthlyReportCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput> | MonthlyReportCreateWithoutVehicleInput[] | MonthlyReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutVehicleInput | MonthlyReportCreateOrConnectWithoutVehicleInput[]
    createMany?: MonthlyReportCreateManyVehicleInputEnvelope
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
  }

  export type RentalCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput> | RentalCreateWithoutVehicleInput[] | RentalUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutVehicleInput | RentalCreateOrConnectWithoutVehicleInput[]
    createMany?: RentalCreateManyVehicleInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type VehicleAlertCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput> | VehicleAlertCreateWithoutVehicleInput[] | VehicleAlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutVehicleInput | VehicleAlertCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleAlertCreateManyVehicleInputEnvelope
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
  }

  export type VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput> | VehicleDeviceAssignmentCreateWithoutVehicleInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput | VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDeviceAssignmentCreateManyVehicleInputEnvelope
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
  }

  export type VehicleGeofenceLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput> | VehicleGeofenceLogCreateWithoutVehicleInput[] | VehicleGeofenceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutVehicleInput | VehicleGeofenceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleGeofenceLogCreateManyVehicleInputEnvelope
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
  }

  export type GpsLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput> | GpsLogCreateWithoutVehicleInput[] | GpsLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutVehicleInput | GpsLogCreateOrConnectWithoutVehicleInput[]
    createMany?: GpsLogCreateManyVehicleInputEnvelope
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
  }

  export type MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput> | MonthlyReportCreateWithoutVehicleInput[] | MonthlyReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutVehicleInput | MonthlyReportCreateOrConnectWithoutVehicleInput[]
    createMany?: MonthlyReportCreateManyVehicleInputEnvelope
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput> | RentalCreateWithoutVehicleInput[] | RentalUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutVehicleInput | RentalCreateOrConnectWithoutVehicleInput[]
    createMany?: RentalCreateManyVehicleInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput> | VehicleAlertCreateWithoutVehicleInput[] | VehicleAlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutVehicleInput | VehicleAlertCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleAlertCreateManyVehicleInputEnvelope
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
  }

  export type VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput> | VehicleDeviceAssignmentCreateWithoutVehicleInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput | VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDeviceAssignmentCreateManyVehicleInputEnvelope
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
  }

  export type VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput> | VehicleGeofenceLogCreateWithoutVehicleInput[] | VehicleGeofenceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutVehicleInput | VehicleGeofenceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleGeofenceLogCreateManyVehicleInputEnvelope
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type GpsLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput> | GpsLogCreateWithoutVehicleInput[] | GpsLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutVehicleInput | GpsLogCreateOrConnectWithoutVehicleInput[]
    upsert?: GpsLogUpsertWithWhereUniqueWithoutVehicleInput | GpsLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: GpsLogCreateManyVehicleInputEnvelope
    set?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    disconnect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    delete?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    update?: GpsLogUpdateWithWhereUniqueWithoutVehicleInput | GpsLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: GpsLogUpdateManyWithWhereWithoutVehicleInput | GpsLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
  }

  export type MaintenanceLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type MonthlyReportUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput> | MonthlyReportCreateWithoutVehicleInput[] | MonthlyReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutVehicleInput | MonthlyReportCreateOrConnectWithoutVehicleInput[]
    upsert?: MonthlyReportUpsertWithWhereUniqueWithoutVehicleInput | MonthlyReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MonthlyReportCreateManyVehicleInputEnvelope
    set?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    disconnect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    delete?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    update?: MonthlyReportUpdateWithWhereUniqueWithoutVehicleInput | MonthlyReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MonthlyReportUpdateManyWithWhereWithoutVehicleInput | MonthlyReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
  }

  export type RentalUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput> | RentalCreateWithoutVehicleInput[] | RentalUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutVehicleInput | RentalCreateOrConnectWithoutVehicleInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutVehicleInput | RentalUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RentalCreateManyVehicleInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutVehicleInput | RentalUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutVehicleInput | RentalUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type VehicleAlertUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput> | VehicleAlertCreateWithoutVehicleInput[] | VehicleAlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutVehicleInput | VehicleAlertCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleAlertUpsertWithWhereUniqueWithoutVehicleInput | VehicleAlertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleAlertCreateManyVehicleInputEnvelope
    set?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    disconnect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    delete?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    update?: VehicleAlertUpdateWithWhereUniqueWithoutVehicleInput | VehicleAlertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleAlertUpdateManyWithWhereWithoutVehicleInput | VehicleAlertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
  }

  export type VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput> | VehicleDeviceAssignmentCreateWithoutVehicleInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput | VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutVehicleInput | VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDeviceAssignmentCreateManyVehicleInputEnvelope
    set?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    disconnect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    delete?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    update?: VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutVehicleInput | VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDeviceAssignmentUpdateManyWithWhereWithoutVehicleInput | VehicleDeviceAssignmentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
  }

  export type VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput> | VehicleGeofenceLogCreateWithoutVehicleInput[] | VehicleGeofenceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutVehicleInput | VehicleGeofenceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleGeofenceLogUpsertWithWhereUniqueWithoutVehicleInput | VehicleGeofenceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleGeofenceLogCreateManyVehicleInputEnvelope
    set?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    disconnect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    delete?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    update?: VehicleGeofenceLogUpdateWithWhereUniqueWithoutVehicleInput | VehicleGeofenceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleGeofenceLogUpdateManyWithWhereWithoutVehicleInput | VehicleGeofenceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
  }

  export type GpsLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput> | GpsLogCreateWithoutVehicleInput[] | GpsLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: GpsLogCreateOrConnectWithoutVehicleInput | GpsLogCreateOrConnectWithoutVehicleInput[]
    upsert?: GpsLogUpsertWithWhereUniqueWithoutVehicleInput | GpsLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: GpsLogCreateManyVehicleInputEnvelope
    set?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    disconnect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    delete?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    connect?: GpsLogWhereUniqueInput | GpsLogWhereUniqueInput[]
    update?: GpsLogUpdateWithWhereUniqueWithoutVehicleInput | GpsLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: GpsLogUpdateManyWithWhereWithoutVehicleInput | GpsLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput> | MonthlyReportCreateWithoutVehicleInput[] | MonthlyReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MonthlyReportCreateOrConnectWithoutVehicleInput | MonthlyReportCreateOrConnectWithoutVehicleInput[]
    upsert?: MonthlyReportUpsertWithWhereUniqueWithoutVehicleInput | MonthlyReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MonthlyReportCreateManyVehicleInputEnvelope
    set?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    disconnect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    delete?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    connect?: MonthlyReportWhereUniqueInput | MonthlyReportWhereUniqueInput[]
    update?: MonthlyReportUpdateWithWhereUniqueWithoutVehicleInput | MonthlyReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MonthlyReportUpdateManyWithWhereWithoutVehicleInput | MonthlyReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput> | RentalCreateWithoutVehicleInput[] | RentalUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutVehicleInput | RentalCreateOrConnectWithoutVehicleInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutVehicleInput | RentalUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RentalCreateManyVehicleInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutVehicleInput | RentalUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutVehicleInput | RentalUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput> | VehicleAlertCreateWithoutVehicleInput[] | VehicleAlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAlertCreateOrConnectWithoutVehicleInput | VehicleAlertCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleAlertUpsertWithWhereUniqueWithoutVehicleInput | VehicleAlertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleAlertCreateManyVehicleInputEnvelope
    set?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    disconnect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    delete?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    connect?: VehicleAlertWhereUniqueInput | VehicleAlertWhereUniqueInput[]
    update?: VehicleAlertUpdateWithWhereUniqueWithoutVehicleInput | VehicleAlertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleAlertUpdateManyWithWhereWithoutVehicleInput | VehicleAlertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
  }

  export type VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput> | VehicleDeviceAssignmentCreateWithoutVehicleInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput | VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutVehicleInput | VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDeviceAssignmentCreateManyVehicleInputEnvelope
    set?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    disconnect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    delete?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    update?: VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutVehicleInput | VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDeviceAssignmentUpdateManyWithWhereWithoutVehicleInput | VehicleDeviceAssignmentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
  }

  export type VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput> | VehicleGeofenceLogCreateWithoutVehicleInput[] | VehicleGeofenceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleGeofenceLogCreateOrConnectWithoutVehicleInput | VehicleGeofenceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleGeofenceLogUpsertWithWhereUniqueWithoutVehicleInput | VehicleGeofenceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleGeofenceLogCreateManyVehicleInputEnvelope
    set?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    disconnect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    delete?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    connect?: VehicleGeofenceLogWhereUniqueInput | VehicleGeofenceLogWhereUniqueInput[]
    update?: VehicleGeofenceLogUpdateWithWhereUniqueWithoutVehicleInput | VehicleGeofenceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleGeofenceLogUpdateManyWithWhereWithoutVehicleInput | VehicleGeofenceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
  }

  export type VehicleDeviceAssignmentCreateNestedManyWithoutDeviceInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput> | VehicleDeviceAssignmentCreateWithoutDeviceInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput | VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput[]
    createMany?: VehicleDeviceAssignmentCreateManyDeviceInputEnvelope
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
  }

  export type VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput> | VehicleDeviceAssignmentCreateWithoutDeviceInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput | VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput[]
    createMany?: VehicleDeviceAssignmentCreateManyDeviceInputEnvelope
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type VehicleDeviceAssignmentUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput> | VehicleDeviceAssignmentCreateWithoutDeviceInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput | VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput[]
    upsert?: VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutDeviceInput | VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: VehicleDeviceAssignmentCreateManyDeviceInputEnvelope
    set?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    disconnect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    delete?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    update?: VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutDeviceInput | VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: VehicleDeviceAssignmentUpdateManyWithWhereWithoutDeviceInput | VehicleDeviceAssignmentUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
  }

  export type VehicleDeviceAssignmentUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput> | VehicleDeviceAssignmentCreateWithoutDeviceInput[] | VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput | VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput[]
    upsert?: VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutDeviceInput | VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: VehicleDeviceAssignmentCreateManyDeviceInputEnvelope
    set?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    disconnect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    delete?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    connect?: VehicleDeviceAssignmentWhereUniqueInput | VehicleDeviceAssignmentWhereUniqueInput[]
    update?: VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutDeviceInput | VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: VehicleDeviceAssignmentUpdateManyWithWhereWithoutDeviceInput | VehicleDeviceAssignmentUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
  }

  export type IotDeviceCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<IotDeviceCreateWithoutAssignmentsInput, IotDeviceUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: IotDeviceCreateOrConnectWithoutAssignmentsInput
    connect?: IotDeviceWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutDeviceAssignmentsInput = {
    create?: XOR<VehicleCreateWithoutDeviceAssignmentsInput, VehicleUncheckedCreateWithoutDeviceAssignmentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDeviceAssignmentsInput
    connect?: VehicleWhereUniqueInput
  }

  export type IotDeviceUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<IotDeviceCreateWithoutAssignmentsInput, IotDeviceUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: IotDeviceCreateOrConnectWithoutAssignmentsInput
    upsert?: IotDeviceUpsertWithoutAssignmentsInput
    connect?: IotDeviceWhereUniqueInput
    update?: XOR<XOR<IotDeviceUpdateToOneWithWhereWithoutAssignmentsInput, IotDeviceUpdateWithoutAssignmentsInput>, IotDeviceUncheckedUpdateWithoutAssignmentsInput>
  }

  export type VehicleUpdateOneRequiredWithoutDeviceAssignmentsNestedInput = {
    create?: XOR<VehicleCreateWithoutDeviceAssignmentsInput, VehicleUncheckedCreateWithoutDeviceAssignmentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDeviceAssignmentsInput
    upsert?: VehicleUpsertWithoutDeviceAssignmentsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDeviceAssignmentsInput, VehicleUpdateWithoutDeviceAssignmentsInput>, VehicleUncheckedUpdateWithoutDeviceAssignmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGeofenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceType | EnumGeofenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceType[]
    notIn?: $Enums.GeofenceType[]
    not?: NestedEnumGeofenceTypeFilter<$PrismaModel> | $Enums.GeofenceType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumGeofenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceType | EnumGeofenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceType[]
    notIn?: $Enums.GeofenceType[]
    not?: NestedEnumGeofenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.GeofenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeofenceTypeFilter<$PrismaModel>
    _max?: NestedEnumGeofenceTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGeofenceEventFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceEvent | EnumGeofenceEventFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceEvent[]
    notIn?: $Enums.GeofenceEvent[]
    not?: NestedEnumGeofenceEventFilter<$PrismaModel> | $Enums.GeofenceEvent
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumGeofenceEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeofenceEvent | EnumGeofenceEventFieldRefInput<$PrismaModel>
    in?: $Enums.GeofenceEvent[]
    notIn?: $Enums.GeofenceEvent[]
    not?: NestedEnumGeofenceEventWithAggregatesFilter<$PrismaModel> | $Enums.GeofenceEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeofenceEventFilter<$PrismaModel>
    _max?: NestedEnumGeofenceEventFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[]
    notIn?: $Enums.RentalStatus[]
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[]
    notIn?: $Enums.RentalStatus[]
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumGpsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GpsStatus | EnumGpsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GpsStatus[]
    notIn?: $Enums.GpsStatus[]
    not?: NestedEnumGpsStatusFilter<$PrismaModel> | $Enums.GpsStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGpsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GpsStatus | EnumGpsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GpsStatus[]
    notIn?: $Enums.GpsStatus[]
    not?: NestedEnumGpsStatusWithAggregatesFilter<$PrismaModel> | $Enums.GpsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGpsStatusFilter<$PrismaModel>
    _max?: NestedEnumGpsStatusFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[]
    notIn?: $Enums.AlertType[]
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[]
    notIn?: $Enums.DeviceStatus[]
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[]
    notIn?: $Enums.DeviceStatus[]
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutCreatorInput
    rentals?: RentalCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceUncheckedCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutCreatorInput
    rentals?: RentalUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type GeofenceCreateWithoutCreatorInput = {
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutGeofenceInput
  }

  export type GeofenceUncheckedCreateWithoutCreatorInput = {
    geofenceId?: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutGeofenceInput
  }

  export type GeofenceCreateOrConnectWithoutCreatorInput = {
    where: GeofenceWhereUniqueInput
    create: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput>
  }

  export type GeofenceCreateManyCreatorInputEnvelope = {
    data: GeofenceCreateManyCreatorInput | GeofenceCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceLogCreateWithoutCreatorInput = {
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateWithoutCreatorInput = {
    maintenanceId?: number
    vehicleId: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type MaintenanceLogCreateOrConnectWithoutCreatorInput = {
    where: MaintenanceLogWhereUniqueInput
    create: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput>
  }

  export type MaintenanceLogCreateManyCreatorInputEnvelope = {
    data: MaintenanceLogCreateManyCreatorInput | MaintenanceLogCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RentalCreateWithoutStaffInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogCreateNestedManyWithoutRentalInput
    customer: CustomerCreateNestedOneWithoutRentalsInput
    vehicle: VehicleCreateNestedOneWithoutRentalsInput
    alerts?: VehicleAlertCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutStaffInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutRentalInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutStaffInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput>
  }

  export type RentalCreateManyStaffInputEnvelope = {
    data: RentalCreateManyStaffInput | RentalCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    roleName: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    roleName: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type GeofenceUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GeofenceWhereUniqueInput
    update: XOR<GeofenceUpdateWithoutCreatorInput, GeofenceUncheckedUpdateWithoutCreatorInput>
    create: XOR<GeofenceCreateWithoutCreatorInput, GeofenceUncheckedCreateWithoutCreatorInput>
  }

  export type GeofenceUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GeofenceWhereUniqueInput
    data: XOR<GeofenceUpdateWithoutCreatorInput, GeofenceUncheckedUpdateWithoutCreatorInput>
  }

  export type GeofenceUpdateManyWithWhereWithoutCreatorInput = {
    where: GeofenceScalarWhereInput
    data: XOR<GeofenceUpdateManyMutationInput, GeofenceUncheckedUpdateManyWithoutCreatorInput>
  }

  export type GeofenceScalarWhereInput = {
    AND?: GeofenceScalarWhereInput | GeofenceScalarWhereInput[]
    OR?: GeofenceScalarWhereInput[]
    NOT?: GeofenceScalarWhereInput | GeofenceScalarWhereInput[]
    geofenceId?: IntFilter<"Geofence"> | number
    geofenceName?: StringFilter<"Geofence"> | string
    geofenceType?: EnumGeofenceTypeFilter<"Geofence"> | $Enums.GeofenceType
    centerLat?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    centerLon?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: DecimalNullableFilter<"Geofence"> | Decimal | DecimalJsLike | number | string | null
    polygonData?: JsonNullableFilter<"Geofence">
    createdBy?: IntFilter<"Geofence"> | number
    createdAt?: DateTimeFilter<"Geofence"> | Date | string
  }

  export type MaintenanceLogUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MaintenanceLogWhereUniqueInput
    update: XOR<MaintenanceLogUpdateWithoutCreatorInput, MaintenanceLogUncheckedUpdateWithoutCreatorInput>
    create: XOR<MaintenanceLogCreateWithoutCreatorInput, MaintenanceLogUncheckedCreateWithoutCreatorInput>
  }

  export type MaintenanceLogUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MaintenanceLogWhereUniqueInput
    data: XOR<MaintenanceLogUpdateWithoutCreatorInput, MaintenanceLogUncheckedUpdateWithoutCreatorInput>
  }

  export type MaintenanceLogUpdateManyWithWhereWithoutCreatorInput = {
    where: MaintenanceLogScalarWhereInput
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MaintenanceLogScalarWhereInput = {
    AND?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    OR?: MaintenanceLogScalarWhereInput[]
    NOT?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    maintenanceId?: IntFilter<"MaintenanceLog"> | number
    vehicleId?: IntFilter<"MaintenanceLog"> | number
    maintenanceType?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    maintenanceDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    currentKm?: DecimalFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFilter<"MaintenanceLog"> | number
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
  }

  export type RentalUpsertWithWhereUniqueWithoutStaffInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutStaffInput, RentalUncheckedUpdateWithoutStaffInput>
    create: XOR<RentalCreateWithoutStaffInput, RentalUncheckedCreateWithoutStaffInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutStaffInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutStaffInput, RentalUncheckedUpdateWithoutStaffInput>
  }

  export type RentalUpdateManyWithWhereWithoutStaffInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutStaffInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    rentalId?: IntFilter<"Rental"> | number
    vehicleId?: IntFilter<"Rental"> | number
    customerId?: IntFilter<"Rental"> | number
    rentedBy?: IntFilter<"Rental"> | number
    startTime?: DateTimeFilter<"Rental"> | Date | string
    endTime?: DateTimeNullableFilter<"Rental"> | Date | string | null
    startKm?: DecimalFilter<"Rental"> | Decimal | DecimalJsLike | number | string
    endKm?: DecimalNullableFilter<"Rental"> | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    rentalFee?: FloatFilter<"Rental"> | number
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutGeofencesInput = {
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutCreatorInput
    rentals?: RentalCreateNestedManyWithoutStaffInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutGeofencesInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    roleId: number
    status?: $Enums.UserStatus
    createdAt?: Date | string
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutCreatorInput
    rentals?: RentalUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutGeofencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeofencesInput, UserUncheckedCreateWithoutGeofencesInput>
  }

  export type VehicleGeofenceLogCreateWithoutGeofenceInput = {
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutGeofenceLogsInput
  }

  export type VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput = {
    geofenceLogId?: number
    vehicleId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleGeofenceLogCreateOrConnectWithoutGeofenceInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    create: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput>
  }

  export type VehicleGeofenceLogCreateManyGeofenceInputEnvelope = {
    data: VehicleGeofenceLogCreateManyGeofenceInput | VehicleGeofenceLogCreateManyGeofenceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGeofencesInput = {
    update: XOR<UserUpdateWithoutGeofencesInput, UserUncheckedUpdateWithoutGeofencesInput>
    create: XOR<UserCreateWithoutGeofencesInput, UserUncheckedCreateWithoutGeofencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeofencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeofencesInput, UserUncheckedUpdateWithoutGeofencesInput>
  }

  export type UserUpdateWithoutGeofencesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUpdateManyWithoutStaffNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutGeofencesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type VehicleGeofenceLogUpsertWithWhereUniqueWithoutGeofenceInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    update: XOR<VehicleGeofenceLogUpdateWithoutGeofenceInput, VehicleGeofenceLogUncheckedUpdateWithoutGeofenceInput>
    create: XOR<VehicleGeofenceLogCreateWithoutGeofenceInput, VehicleGeofenceLogUncheckedCreateWithoutGeofenceInput>
  }

  export type VehicleGeofenceLogUpdateWithWhereUniqueWithoutGeofenceInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    data: XOR<VehicleGeofenceLogUpdateWithoutGeofenceInput, VehicleGeofenceLogUncheckedUpdateWithoutGeofenceInput>
  }

  export type VehicleGeofenceLogUpdateManyWithWhereWithoutGeofenceInput = {
    where: VehicleGeofenceLogScalarWhereInput
    data: XOR<VehicleGeofenceLogUpdateManyMutationInput, VehicleGeofenceLogUncheckedUpdateManyWithoutGeofenceInput>
  }

  export type VehicleGeofenceLogScalarWhereInput = {
    AND?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
    OR?: VehicleGeofenceLogScalarWhereInput[]
    NOT?: VehicleGeofenceLogScalarWhereInput | VehicleGeofenceLogScalarWhereInput[]
    geofenceLogId?: IntFilter<"VehicleGeofenceLog"> | number
    vehicleId?: IntFilter<"VehicleGeofenceLog"> | number
    geofenceId?: IntFilter<"VehicleGeofenceLog"> | number
    eventType?: EnumGeofenceEventFilter<"VehicleGeofenceLog"> | $Enums.GeofenceEvent
    latitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"VehicleGeofenceLog"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VehicleGeofenceLog"> | Date | string
  }

  export type GeofenceCreateWithoutGeofenceLogsInput = {
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutGeofencesInput
  }

  export type GeofenceUncheckedCreateWithoutGeofenceLogsInput = {
    geofenceId?: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy: number
    createdAt?: Date | string
  }

  export type GeofenceCreateOrConnectWithoutGeofenceLogsInput = {
    where: GeofenceWhereUniqueInput
    create: XOR<GeofenceCreateWithoutGeofenceLogsInput, GeofenceUncheckedCreateWithoutGeofenceLogsInput>
  }

  export type VehicleCreateWithoutGeofenceLogsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutGeofenceLogsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutGeofenceLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutGeofenceLogsInput, VehicleUncheckedCreateWithoutGeofenceLogsInput>
  }

  export type GeofenceUpsertWithoutGeofenceLogsInput = {
    update: XOR<GeofenceUpdateWithoutGeofenceLogsInput, GeofenceUncheckedUpdateWithoutGeofenceLogsInput>
    create: XOR<GeofenceCreateWithoutGeofenceLogsInput, GeofenceUncheckedCreateWithoutGeofenceLogsInput>
    where?: GeofenceWhereInput
  }

  export type GeofenceUpdateToOneWithWhereWithoutGeofenceLogsInput = {
    where?: GeofenceWhereInput
    data: XOR<GeofenceUpdateWithoutGeofenceLogsInput, GeofenceUncheckedUpdateWithoutGeofenceLogsInput>
  }

  export type GeofenceUpdateWithoutGeofenceLogsInput = {
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutGeofencesNestedInput
  }

  export type GeofenceUncheckedUpdateWithoutGeofenceLogsInput = {
    geofenceId?: IntFieldUpdateOperationsInput | number
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpsertWithoutGeofenceLogsInput = {
    update: XOR<VehicleUpdateWithoutGeofenceLogsInput, VehicleUncheckedUpdateWithoutGeofenceLogsInput>
    create: XOR<VehicleCreateWithoutGeofenceLogsInput, VehicleUncheckedCreateWithoutGeofenceLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutGeofenceLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutGeofenceLogsInput, VehicleUncheckedUpdateWithoutGeofenceLogsInput>
  }

  export type VehicleUpdateWithoutGeofenceLogsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutGeofenceLogsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserCreateWithoutMaintenanceLogsInput = {
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceCreateNestedManyWithoutCreatorInput
    rentals?: RentalCreateNestedManyWithoutStaffInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMaintenanceLogsInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    roleId: number
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceUncheckedCreateNestedManyWithoutCreatorInput
    rentals?: RentalUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutMaintenanceLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenanceLogsInput, UserUncheckedCreateWithoutMaintenanceLogsInput>
  }

  export type VehicleCreateWithoutMaintenanceLogsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceLogsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
  }

  export type UserUpsertWithoutMaintenanceLogsInput = {
    update: XOR<UserUpdateWithoutMaintenanceLogsInput, UserUncheckedUpdateWithoutMaintenanceLogsInput>
    create: XOR<UserCreateWithoutMaintenanceLogsInput, UserUncheckedCreateWithoutMaintenanceLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenanceLogsInput, UserUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type UserUpdateWithoutMaintenanceLogsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUpdateManyWithoutStaffNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenanceLogsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUncheckedUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type VehicleUpsertWithoutMaintenanceLogsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpdateWithoutMaintenanceLogsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceLogsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type RentalCreateWithoutCustomerInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogCreateNestedManyWithoutRentalInput
    staff: UserCreateNestedOneWithoutRentalsInput
    vehicle: VehicleCreateNestedOneWithoutRentalsInput
    alerts?: VehicleAlertCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutCustomerInput = {
    rentalId?: number
    vehicleId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutRentalInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutCustomerInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput>
  }

  export type RentalCreateManyCustomerInputEnvelope = {
    data: RentalCreateManyCustomerInput | RentalCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutCustomerInput, RentalUncheckedUpdateWithoutCustomerInput>
    create: XOR<RentalCreateWithoutCustomerInput, RentalUncheckedCreateWithoutCustomerInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutCustomerInput, RentalUncheckedUpdateWithoutCustomerInput>
  }

  export type RentalUpdateManyWithWhereWithoutCustomerInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutCustomerInput>
  }

  export type GpsLogCreateWithoutRentalInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
    vehicle: VehicleCreateNestedOneWithoutGpsLogsInput
  }

  export type GpsLogUncheckedCreateWithoutRentalInput = {
    gpsLogId?: number
    vehicleId: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogCreateOrConnectWithoutRentalInput = {
    where: GpsLogWhereUniqueInput
    create: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput>
  }

  export type GpsLogCreateManyRentalInputEnvelope = {
    data: GpsLogCreateManyRentalInput | GpsLogCreateManyRentalInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutRentalsInput = {
    fullName: string
    phone: string
    email?: string | null
    identityNumber?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutRentalsInput = {
    customerId?: number
    fullName: string
    phone: string
    email?: string | null
    identityNumber?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutRentalsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRentalsInput, CustomerUncheckedCreateWithoutRentalsInput>
  }

  export type UserCreateWithoutRentalsInput = {
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutCreatorInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRentalsInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    roleId: number
    status?: $Enums.UserStatus
    createdAt?: Date | string
    geofences?: GeofenceUncheckedCreateNestedManyWithoutCreatorInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRentalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
  }

  export type VehicleCreateWithoutRentalsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRentalsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutRentalsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRentalsInput, VehicleUncheckedCreateWithoutRentalsInput>
  }

  export type VehicleAlertCreateWithoutRentalInput = {
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutAlertsInput
  }

  export type VehicleAlertUncheckedCreateWithoutRentalInput = {
    alertId?: number
    vehicleId: number
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type VehicleAlertCreateOrConnectWithoutRentalInput = {
    where: VehicleAlertWhereUniqueInput
    create: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput>
  }

  export type VehicleAlertCreateManyRentalInputEnvelope = {
    data: VehicleAlertCreateManyRentalInput | VehicleAlertCreateManyRentalInput[]
    skipDuplicates?: boolean
  }

  export type GpsLogUpsertWithWhereUniqueWithoutRentalInput = {
    where: GpsLogWhereUniqueInput
    update: XOR<GpsLogUpdateWithoutRentalInput, GpsLogUncheckedUpdateWithoutRentalInput>
    create: XOR<GpsLogCreateWithoutRentalInput, GpsLogUncheckedCreateWithoutRentalInput>
  }

  export type GpsLogUpdateWithWhereUniqueWithoutRentalInput = {
    where: GpsLogWhereUniqueInput
    data: XOR<GpsLogUpdateWithoutRentalInput, GpsLogUncheckedUpdateWithoutRentalInput>
  }

  export type GpsLogUpdateManyWithWhereWithoutRentalInput = {
    where: GpsLogScalarWhereInput
    data: XOR<GpsLogUpdateManyMutationInput, GpsLogUncheckedUpdateManyWithoutRentalInput>
  }

  export type GpsLogScalarWhereInput = {
    AND?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
    OR?: GpsLogScalarWhereInput[]
    NOT?: GpsLogScalarWhereInput | GpsLogScalarWhereInput[]
    gpsLogId?: IntFilter<"GpsLog"> | number
    vehicleId?: IntFilter<"GpsLog"> | number
    rentalId?: IntNullableFilter<"GpsLog"> | number | null
    latitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFilter<"GpsLog"> | $Enums.GpsStatus
    recordedAt?: DateTimeFilter<"GpsLog"> | Date | string
    distanceFromHome?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: DecimalNullableFilter<"GpsLog"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustomerUpsertWithoutRentalsInput = {
    update: XOR<CustomerUpdateWithoutRentalsInput, CustomerUncheckedUpdateWithoutRentalsInput>
    create: XOR<CustomerCreateWithoutRentalsInput, CustomerUncheckedCreateWithoutRentalsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRentalsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRentalsInput, CustomerUncheckedUpdateWithoutRentalsInput>
  }

  export type CustomerUpdateWithoutRentalsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutRentalsInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    identityNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRentalsInput = {
    update: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
  }

  export type UserUpdateWithoutRentalsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutCreatorNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRentalsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUncheckedUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type VehicleUpsertWithoutRentalsInput = {
    update: XOR<VehicleUpdateWithoutRentalsInput, VehicleUncheckedUpdateWithoutRentalsInput>
    create: XOR<VehicleCreateWithoutRentalsInput, VehicleUncheckedCreateWithoutRentalsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutRentalsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutRentalsInput, VehicleUncheckedUpdateWithoutRentalsInput>
  }

  export type VehicleUpdateWithoutRentalsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRentalsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleAlertUpsertWithWhereUniqueWithoutRentalInput = {
    where: VehicleAlertWhereUniqueInput
    update: XOR<VehicleAlertUpdateWithoutRentalInput, VehicleAlertUncheckedUpdateWithoutRentalInput>
    create: XOR<VehicleAlertCreateWithoutRentalInput, VehicleAlertUncheckedCreateWithoutRentalInput>
  }

  export type VehicleAlertUpdateWithWhereUniqueWithoutRentalInput = {
    where: VehicleAlertWhereUniqueInput
    data: XOR<VehicleAlertUpdateWithoutRentalInput, VehicleAlertUncheckedUpdateWithoutRentalInput>
  }

  export type VehicleAlertUpdateManyWithWhereWithoutRentalInput = {
    where: VehicleAlertScalarWhereInput
    data: XOR<VehicleAlertUpdateManyMutationInput, VehicleAlertUncheckedUpdateManyWithoutRentalInput>
  }

  export type VehicleAlertScalarWhereInput = {
    AND?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
    OR?: VehicleAlertScalarWhereInput[]
    NOT?: VehicleAlertScalarWhereInput | VehicleAlertScalarWhereInput[]
    alertId?: IntFilter<"VehicleAlert"> | number
    vehicleId?: IntFilter<"VehicleAlert"> | number
    rentalId?: IntNullableFilter<"VehicleAlert"> | number | null
    alertType?: EnumAlertTypeFilter<"VehicleAlert"> | $Enums.AlertType
    latitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"VehicleAlert"> | Decimal | DecimalJsLike | number | string | null
    alertMessage?: StringNullableFilter<"VehicleAlert"> | string | null
    isAcknowledged?: BoolFilter<"VehicleAlert"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"VehicleAlert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"VehicleAlert"> | Date | string | null
  }

  export type VehicleCreateWithoutMonthlyReportsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMonthlyReportsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMonthlyReportsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMonthlyReportsInput, VehicleUncheckedCreateWithoutMonthlyReportsInput>
  }

  export type VehicleUpsertWithoutMonthlyReportsInput = {
    update: XOR<VehicleUpdateWithoutMonthlyReportsInput, VehicleUncheckedUpdateWithoutMonthlyReportsInput>
    create: XOR<VehicleCreateWithoutMonthlyReportsInput, VehicleUncheckedCreateWithoutMonthlyReportsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMonthlyReportsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMonthlyReportsInput, VehicleUncheckedUpdateWithoutMonthlyReportsInput>
  }

  export type VehicleUpdateWithoutMonthlyReportsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMonthlyReportsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type RentalCreateWithoutGpsLogsInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    customer: CustomerCreateNestedOneWithoutRentalsInput
    staff: UserCreateNestedOneWithoutRentalsInput
    vehicle: VehicleCreateNestedOneWithoutRentalsInput
    alerts?: VehicleAlertCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutGpsLogsInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutGpsLogsInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutGpsLogsInput, RentalUncheckedCreateWithoutGpsLogsInput>
  }

  export type VehicleCreateWithoutGpsLogsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutGpsLogsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutGpsLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutGpsLogsInput, VehicleUncheckedCreateWithoutGpsLogsInput>
  }

  export type RentalUpsertWithoutGpsLogsInput = {
    update: XOR<RentalUpdateWithoutGpsLogsInput, RentalUncheckedUpdateWithoutGpsLogsInput>
    create: XOR<RentalCreateWithoutGpsLogsInput, RentalUncheckedCreateWithoutGpsLogsInput>
    where?: RentalWhereInput
  }

  export type RentalUpdateToOneWithWhereWithoutGpsLogsInput = {
    where?: RentalWhereInput
    data: XOR<RentalUpdateWithoutGpsLogsInput, RentalUncheckedUpdateWithoutGpsLogsInput>
  }

  export type RentalUpdateWithoutGpsLogsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutRentalsNestedInput
    staff?: UserUpdateOneRequiredWithoutRentalsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRentalsNestedInput
    alerts?: VehicleAlertUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutGpsLogsInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    alerts?: VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type VehicleUpsertWithoutGpsLogsInput = {
    update: XOR<VehicleUpdateWithoutGpsLogsInput, VehicleUncheckedUpdateWithoutGpsLogsInput>
    create: XOR<VehicleCreateWithoutGpsLogsInput, VehicleUncheckedCreateWithoutGpsLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutGpsLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutGpsLogsInput, VehicleUncheckedUpdateWithoutGpsLogsInput>
  }

  export type VehicleUpdateWithoutGpsLogsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutGpsLogsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type RentalCreateWithoutAlertsInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogCreateNestedManyWithoutRentalInput
    customer: CustomerCreateNestedOneWithoutRentalsInput
    staff: UserCreateNestedOneWithoutRentalsInput
    vehicle: VehicleCreateNestedOneWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutAlertsInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutAlertsInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutAlertsInput, RentalUncheckedCreateWithoutAlertsInput>
  }

  export type VehicleCreateWithoutAlertsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutAlertsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutAlertsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
  }

  export type RentalUpsertWithoutAlertsInput = {
    update: XOR<RentalUpdateWithoutAlertsInput, RentalUncheckedUpdateWithoutAlertsInput>
    create: XOR<RentalCreateWithoutAlertsInput, RentalUncheckedCreateWithoutAlertsInput>
    where?: RentalWhereInput
  }

  export type RentalUpdateToOneWithWhereWithoutAlertsInput = {
    where?: RentalWhereInput
    data: XOR<RentalUpdateWithoutAlertsInput, RentalUncheckedUpdateWithoutAlertsInput>
  }

  export type RentalUpdateWithoutAlertsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUpdateManyWithoutRentalNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRentalsNestedInput
    staff?: UserUpdateOneRequiredWithoutRentalsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutAlertsInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type VehicleUpsertWithoutAlertsInput = {
    update: XOR<VehicleUpdateWithoutAlertsInput, VehicleUncheckedUpdateWithoutAlertsInput>
    create: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutAlertsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutAlertsInput, VehicleUncheckedUpdateWithoutAlertsInput>
  }

  export type VehicleUpdateWithoutAlertsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutAlertsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    deviceAssignments?: VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type GpsLogCreateWithoutVehicleInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
    rental?: RentalCreateNestedOneWithoutGpsLogsInput
  }

  export type GpsLogUncheckedCreateWithoutVehicleInput = {
    gpsLogId?: number
    rentalId?: number | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogCreateOrConnectWithoutVehicleInput = {
    where: GpsLogWhereUniqueInput
    create: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput>
  }

  export type GpsLogCreateManyVehicleInputEnvelope = {
    data: GpsLogCreateManyVehicleInput | GpsLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceLogCreateWithoutVehicleInput = {
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateWithoutVehicleInput = {
    maintenanceId?: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type MaintenanceLogCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogCreateManyVehicleInputEnvelope = {
    data: MaintenanceLogCreateManyVehicleInput | MaintenanceLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyReportCreateWithoutVehicleInput = {
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
  }

  export type MonthlyReportUncheckedCreateWithoutVehicleInput = {
    reportId?: number
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
  }

  export type MonthlyReportCreateOrConnectWithoutVehicleInput = {
    where: MonthlyReportWhereUniqueInput
    create: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput>
  }

  export type MonthlyReportCreateManyVehicleInputEnvelope = {
    data: MonthlyReportCreateManyVehicleInput | MonthlyReportCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type RentalCreateWithoutVehicleInput = {
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogCreateNestedManyWithoutRentalInput
    customer: CustomerCreateNestedOneWithoutRentalsInput
    staff: UserCreateNestedOneWithoutRentalsInput
    alerts?: VehicleAlertCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutVehicleInput = {
    rentalId?: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutRentalInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutVehicleInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput>
  }

  export type RentalCreateManyVehicleInputEnvelope = {
    data: RentalCreateManyVehicleInput | RentalCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleAlertCreateWithoutVehicleInput = {
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    rental?: RentalCreateNestedOneWithoutAlertsInput
  }

  export type VehicleAlertUncheckedCreateWithoutVehicleInput = {
    alertId?: number
    rentalId?: number | null
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type VehicleAlertCreateOrConnectWithoutVehicleInput = {
    where: VehicleAlertWhereUniqueInput
    create: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleAlertCreateManyVehicleInputEnvelope = {
    data: VehicleAlertCreateManyVehicleInput | VehicleAlertCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleDeviceAssignmentCreateWithoutVehicleInput = {
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
    device: IotDeviceCreateNestedOneWithoutAssignmentsInput
  }

  export type VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput = {
    assignmentId?: number
    deviceId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentCreateOrConnectWithoutVehicleInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    create: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentCreateManyVehicleInputEnvelope = {
    data: VehicleDeviceAssignmentCreateManyVehicleInput | VehicleDeviceAssignmentCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleGeofenceLogCreateWithoutVehicleInput = {
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    geofence: GeofenceCreateNestedOneWithoutGeofenceLogsInput
  }

  export type VehicleGeofenceLogUncheckedCreateWithoutVehicleInput = {
    geofenceLogId?: number
    geofenceId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleGeofenceLogCreateOrConnectWithoutVehicleInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    create: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleGeofenceLogCreateManyVehicleInputEnvelope = {
    data: VehicleGeofenceLogCreateManyVehicleInput | VehicleGeofenceLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type GpsLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: GpsLogWhereUniqueInput
    update: XOR<GpsLogUpdateWithoutVehicleInput, GpsLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<GpsLogCreateWithoutVehicleInput, GpsLogUncheckedCreateWithoutVehicleInput>
  }

  export type GpsLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: GpsLogWhereUniqueInput
    data: XOR<GpsLogUpdateWithoutVehicleInput, GpsLogUncheckedUpdateWithoutVehicleInput>
  }

  export type GpsLogUpdateManyWithWhereWithoutVehicleInput = {
    where: GpsLogScalarWhereInput
    data: XOR<GpsLogUpdateManyMutationInput, GpsLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    update: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    data: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceLogScalarWhereInput
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MonthlyReportUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MonthlyReportWhereUniqueInput
    update: XOR<MonthlyReportUpdateWithoutVehicleInput, MonthlyReportUncheckedUpdateWithoutVehicleInput>
    create: XOR<MonthlyReportCreateWithoutVehicleInput, MonthlyReportUncheckedCreateWithoutVehicleInput>
  }

  export type MonthlyReportUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MonthlyReportWhereUniqueInput
    data: XOR<MonthlyReportUpdateWithoutVehicleInput, MonthlyReportUncheckedUpdateWithoutVehicleInput>
  }

  export type MonthlyReportUpdateManyWithWhereWithoutVehicleInput = {
    where: MonthlyReportScalarWhereInput
    data: XOR<MonthlyReportUpdateManyMutationInput, MonthlyReportUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MonthlyReportScalarWhereInput = {
    AND?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
    OR?: MonthlyReportScalarWhereInput[]
    NOT?: MonthlyReportScalarWhereInput | MonthlyReportScalarWhereInput[]
    reportId?: IntFilter<"MonthlyReport"> | number
    vehicleId?: IntFilter<"MonthlyReport"> | number
    reportMonth?: DateTimeFilter<"MonthlyReport"> | Date | string
    totalKm?: DecimalFilter<"MonthlyReport"> | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFilter<"MonthlyReport"> | number
    totalImpacts?: IntFilter<"MonthlyReport"> | number
    totalOutOfZone?: IntFilter<"MonthlyReport"> | number
    generatedAt?: DateTimeFilter<"MonthlyReport"> | Date | string
  }

  export type RentalUpsertWithWhereUniqueWithoutVehicleInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutVehicleInput, RentalUncheckedUpdateWithoutVehicleInput>
    create: XOR<RentalCreateWithoutVehicleInput, RentalUncheckedCreateWithoutVehicleInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutVehicleInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutVehicleInput, RentalUncheckedUpdateWithoutVehicleInput>
  }

  export type RentalUpdateManyWithWhereWithoutVehicleInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleAlertUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleAlertWhereUniqueInput
    update: XOR<VehicleAlertUpdateWithoutVehicleInput, VehicleAlertUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleAlertCreateWithoutVehicleInput, VehicleAlertUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleAlertUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleAlertWhereUniqueInput
    data: XOR<VehicleAlertUpdateWithoutVehicleInput, VehicleAlertUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleAlertUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleAlertScalarWhereInput
    data: XOR<VehicleAlertUpdateManyMutationInput, VehicleAlertUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    update: XOR<VehicleDeviceAssignmentUpdateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleDeviceAssignmentCreateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    data: XOR<VehicleDeviceAssignmentUpdateWithoutVehicleInput, VehicleDeviceAssignmentUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleDeviceAssignmentScalarWhereInput
    data: XOR<VehicleDeviceAssignmentUpdateManyMutationInput, VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentScalarWhereInput = {
    AND?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
    OR?: VehicleDeviceAssignmentScalarWhereInput[]
    NOT?: VehicleDeviceAssignmentScalarWhereInput | VehicleDeviceAssignmentScalarWhereInput[]
    assignmentId?: IntFilter<"VehicleDeviceAssignment"> | number
    vehicleId?: IntFilter<"VehicleDeviceAssignment"> | number
    deviceId?: IntFilter<"VehicleDeviceAssignment"> | number
    assignedAt?: DateTimeFilter<"VehicleDeviceAssignment"> | Date | string
    removedAt?: DateTimeNullableFilter<"VehicleDeviceAssignment"> | Date | string | null
    isActive?: BoolFilter<"VehicleDeviceAssignment"> | boolean
  }

  export type VehicleGeofenceLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    update: XOR<VehicleGeofenceLogUpdateWithoutVehicleInput, VehicleGeofenceLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleGeofenceLogCreateWithoutVehicleInput, VehicleGeofenceLogUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleGeofenceLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleGeofenceLogWhereUniqueInput
    data: XOR<VehicleGeofenceLogUpdateWithoutVehicleInput, VehicleGeofenceLogUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleGeofenceLogUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleGeofenceLogScalarWhereInput
    data: XOR<VehicleGeofenceLogUpdateManyMutationInput, VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDeviceAssignmentCreateWithoutDeviceInput = {
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
    vehicle: VehicleCreateNestedOneWithoutDeviceAssignmentsInput
  }

  export type VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput = {
    assignmentId?: number
    vehicleId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentCreateOrConnectWithoutDeviceInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    create: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput>
  }

  export type VehicleDeviceAssignmentCreateManyDeviceInputEnvelope = {
    data: VehicleDeviceAssignmentCreateManyDeviceInput | VehicleDeviceAssignmentCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type VehicleDeviceAssignmentUpsertWithWhereUniqueWithoutDeviceInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    update: XOR<VehicleDeviceAssignmentUpdateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedUpdateWithoutDeviceInput>
    create: XOR<VehicleDeviceAssignmentCreateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedCreateWithoutDeviceInput>
  }

  export type VehicleDeviceAssignmentUpdateWithWhereUniqueWithoutDeviceInput = {
    where: VehicleDeviceAssignmentWhereUniqueInput
    data: XOR<VehicleDeviceAssignmentUpdateWithoutDeviceInput, VehicleDeviceAssignmentUncheckedUpdateWithoutDeviceInput>
  }

  export type VehicleDeviceAssignmentUpdateManyWithWhereWithoutDeviceInput = {
    where: VehicleDeviceAssignmentScalarWhereInput
    data: XOR<VehicleDeviceAssignmentUpdateManyMutationInput, VehicleDeviceAssignmentUncheckedUpdateManyWithoutDeviceInput>
  }

  export type IotDeviceCreateWithoutAssignmentsInput = {
    serialNumber: string
    mqttTopic: string
    simNumber?: string | null
    firmwareVersion?: string | null
    lastOnlineAt?: Date | string | null
    status?: $Enums.DeviceStatus
    createdAt?: Date | string
  }

  export type IotDeviceUncheckedCreateWithoutAssignmentsInput = {
    deviceId?: number
    serialNumber: string
    mqttTopic: string
    simNumber?: string | null
    firmwareVersion?: string | null
    lastOnlineAt?: Date | string | null
    status?: $Enums.DeviceStatus
    createdAt?: Date | string
  }

  export type IotDeviceCreateOrConnectWithoutAssignmentsInput = {
    where: IotDeviceWhereUniqueInput
    create: XOR<IotDeviceCreateWithoutAssignmentsInput, IotDeviceUncheckedCreateWithoutAssignmentsInput>
  }

  export type VehicleCreateWithoutDeviceAssignmentsInput = {
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportCreateNestedManyWithoutVehicleInput
    rentals?: RentalCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDeviceAssignmentsInput = {
    vehicleId?: number
    plateNumber: string
    vehicleName: string
    vehicleType: string
    brand?: string | null
    model?: string | null
    color?: string | null
    yearManufactured?: number | null
    status?: $Enums.VehicleStatus
    totalKm?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    gpsLogs?: GpsLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    monthlyReports?: MonthlyReportUncheckedCreateNestedManyWithoutVehicleInput
    rentals?: RentalUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: VehicleAlertUncheckedCreateNestedManyWithoutVehicleInput
    geofenceLogs?: VehicleGeofenceLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDeviceAssignmentsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDeviceAssignmentsInput, VehicleUncheckedCreateWithoutDeviceAssignmentsInput>
  }

  export type IotDeviceUpsertWithoutAssignmentsInput = {
    update: XOR<IotDeviceUpdateWithoutAssignmentsInput, IotDeviceUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<IotDeviceCreateWithoutAssignmentsInput, IotDeviceUncheckedCreateWithoutAssignmentsInput>
    where?: IotDeviceWhereInput
  }

  export type IotDeviceUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: IotDeviceWhereInput
    data: XOR<IotDeviceUpdateWithoutAssignmentsInput, IotDeviceUncheckedUpdateWithoutAssignmentsInput>
  }

  export type IotDeviceUpdateWithoutAssignmentsInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotDeviceUncheckedUpdateWithoutAssignmentsInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    mqttTopic?: StringFieldUpdateOperationsInput | string
    simNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    lastOnlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUpsertWithoutDeviceAssignmentsInput = {
    update: XOR<VehicleUpdateWithoutDeviceAssignmentsInput, VehicleUncheckedUpdateWithoutDeviceAssignmentsInput>
    create: XOR<VehicleCreateWithoutDeviceAssignmentsInput, VehicleUncheckedCreateWithoutDeviceAssignmentsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDeviceAssignmentsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDeviceAssignmentsInput, VehicleUncheckedUpdateWithoutDeviceAssignmentsInput>
  }

  export type VehicleUpdateWithoutDeviceAssignmentsInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDeviceAssignmentsInput = {
    vehicleId?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleName?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    yearManufactured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    monthlyReports?: MonthlyReportUncheckedUpdateManyWithoutVehicleNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutVehicleNestedInput
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserCreateManyRoleInput = {
    userId?: number
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofences?: GeofenceUncheckedUpdateManyWithoutCreatorNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutCreatorNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeofenceCreateManyCreatorInput = {
    geofenceId?: number
    geofenceName: string
    geofenceType: $Enums.GeofenceType
    centerLat?: Decimal | DecimalJsLike | number | string | null
    centerLon?: Decimal | DecimalJsLike | number | string | null
    radiusMeter?: Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaintenanceLogCreateManyCreatorInput = {
    maintenanceId?: number
    vehicleId: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type RentalCreateManyStaffInput = {
    rentalId?: number
    vehicleId: number
    customerId: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
  }

  export type GeofenceUpdateWithoutCreatorInput = {
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofenceLogs?: VehicleGeofenceLogUpdateManyWithoutGeofenceNestedInput
  }

  export type GeofenceUncheckedUpdateWithoutCreatorInput = {
    geofenceId?: IntFieldUpdateOperationsInput | number
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofenceLogs?: VehicleGeofenceLogUncheckedUpdateManyWithoutGeofenceNestedInput
  }

  export type GeofenceUncheckedUpdateManyWithoutCreatorInput = {
    geofenceId?: IntFieldUpdateOperationsInput | number
    geofenceName?: StringFieldUpdateOperationsInput | string
    geofenceType?: EnumGeofenceTypeFieldUpdateOperationsInput | $Enums.GeofenceType
    centerLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    centerLon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    radiusMeter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    polygonData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUpdateWithoutCreatorInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateWithoutCreatorInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutCreatorInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUpdateWithoutStaffInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUpdateManyWithoutRentalNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRentalsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRentalsNestedInput
    alerts?: VehicleAlertUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutStaffInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutRentalNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutStaffInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
  }

  export type VehicleGeofenceLogCreateManyGeofenceInput = {
    geofenceLogId?: number
    vehicleId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type VehicleGeofenceLogUpdateWithoutGeofenceInput = {
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutGeofenceLogsNestedInput
  }

  export type VehicleGeofenceLogUncheckedUpdateWithoutGeofenceInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleGeofenceLogUncheckedUpdateManyWithoutGeofenceInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyCustomerInput = {
    rentalId?: number
    vehicleId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
  }

  export type RentalUpdateWithoutCustomerInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUpdateManyWithoutRentalNestedInput
    staff?: UserUpdateOneRequiredWithoutRentalsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutRentalsNestedInput
    alerts?: VehicleAlertUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutCustomerInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutRentalNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutCustomerInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
  }

  export type GpsLogCreateManyRentalInput = {
    gpsLogId?: number
    vehicleId: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type VehicleAlertCreateManyRentalInput = {
    alertId?: number
    vehicleId: number
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type GpsLogUpdateWithoutRentalInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutGpsLogsNestedInput
  }

  export type GpsLogUncheckedUpdateWithoutRentalInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogUncheckedUpdateManyWithoutRentalInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VehicleAlertUpdateWithoutRentalInput = {
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type VehicleAlertUncheckedUpdateWithoutRentalInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleAlertUncheckedUpdateManyWithoutRentalInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GpsLogCreateManyVehicleInput = {
    gpsLogId?: number
    rentalId?: number | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    speedKmh?: Decimal | DecimalJsLike | number | string
    gpsStatus?: $Enums.GpsStatus
    recordedAt?: Date | string
    distanceFromHome?: Decimal | DecimalJsLike | number | string | null
    homeLatitude?: Decimal | DecimalJsLike | number | string | null
    homeLongitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type MaintenanceLogCreateManyVehicleInput = {
    maintenanceId?: number
    maintenanceType: string
    description?: string | null
    maintenanceDate: Date | string
    currentKm?: Decimal | DecimalJsLike | number | string
    cost?: Decimal | DecimalJsLike | number | string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type MonthlyReportCreateManyVehicleInput = {
    reportId?: number
    reportMonth: Date | string
    totalKm?: Decimal | DecimalJsLike | number | string
    totalAlerts?: number
    totalImpacts?: number
    totalOutOfZone?: number
    generatedAt?: Date | string
  }

  export type RentalCreateManyVehicleInput = {
    rentalId?: number
    customerId: number
    rentedBy: number
    startTime: Date | string
    endTime?: Date | string | null
    startKm?: Decimal | DecimalJsLike | number | string
    endKm?: Decimal | DecimalJsLike | number | string | null
    rentalStatus?: $Enums.RentalStatus
    createdAt?: Date | string
    rentalFee?: number
  }

  export type VehicleAlertCreateManyVehicleInput = {
    alertId?: number
    rentalId?: number | null
    alertType: $Enums.AlertType
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    alertMessage?: string | null
    isAcknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type VehicleDeviceAssignmentCreateManyVehicleInput = {
    assignmentId?: number
    deviceId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleGeofenceLogCreateManyVehicleInput = {
    geofenceLogId?: number
    geofenceId: number
    eventType: $Enums.GeofenceEvent
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type GpsLogUpdateWithoutVehicleInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rental?: RentalUpdateOneWithoutGpsLogsNestedInput
  }

  export type GpsLogUncheckedUpdateWithoutVehicleInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type GpsLogUncheckedUpdateManyWithoutVehicleInput = {
    gpsLogId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    speedKmh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gpsStatus?: EnumGpsStatusFieldUpdateOperationsInput | $Enums.GpsStatus
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceFromHome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLatitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLongitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MaintenanceLogUpdateWithoutVehicleInput = {
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateWithoutVehicleInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportUpdateWithoutVehicleInput = {
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportUncheckedUpdateWithoutVehicleInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyReportUncheckedUpdateManyWithoutVehicleInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    reportMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAlerts?: IntFieldUpdateOperationsInput | number
    totalImpacts?: IntFieldUpdateOperationsInput | number
    totalOutOfZone?: IntFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUpdateWithoutVehicleInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUpdateManyWithoutRentalNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRentalsNestedInput
    staff?: UserUpdateOneRequiredWithoutRentalsNestedInput
    alerts?: VehicleAlertUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutVehicleInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
    gpsLogs?: GpsLogUncheckedUpdateManyWithoutRentalNestedInput
    alerts?: VehicleAlertUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutVehicleInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    rentedBy?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    endKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rentalStatus?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalFee?: FloatFieldUpdateOperationsInput | number
  }

  export type VehicleAlertUpdateWithoutVehicleInput = {
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rental?: RentalUpdateOneWithoutAlertsNestedInput
  }

  export type VehicleAlertUncheckedUpdateWithoutVehicleInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleAlertUncheckedUpdateManyWithoutVehicleInput = {
    alertId?: IntFieldUpdateOperationsInput | number
    rentalId?: NullableIntFieldUpdateOperationsInput | number | null
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    alertMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isAcknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleDeviceAssignmentUpdateWithoutVehicleInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: IotDeviceUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type VehicleDeviceAssignmentUncheckedUpdateWithoutVehicleInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleDeviceAssignmentUncheckedUpdateManyWithoutVehicleInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleGeofenceLogUpdateWithoutVehicleInput = {
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    geofence?: GeofenceUpdateOneRequiredWithoutGeofenceLogsNestedInput
  }

  export type VehicleGeofenceLogUncheckedUpdateWithoutVehicleInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    geofenceId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleGeofenceLogUncheckedUpdateManyWithoutVehicleInput = {
    geofenceLogId?: IntFieldUpdateOperationsInput | number
    geofenceId?: IntFieldUpdateOperationsInput | number
    eventType?: EnumGeofenceEventFieldUpdateOperationsInput | $Enums.GeofenceEvent
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDeviceAssignmentCreateManyDeviceInput = {
    assignmentId?: number
    vehicleId: number
    assignedAt?: Date | string
    removedAt?: Date | string | null
    isActive?: boolean
  }

  export type VehicleDeviceAssignmentUpdateWithoutDeviceInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vehicle?: VehicleUpdateOneRequiredWithoutDeviceAssignmentsNestedInput
  }

  export type VehicleDeviceAssignmentUncheckedUpdateWithoutDeviceInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleDeviceAssignmentUncheckedUpdateManyWithoutDeviceInput = {
    assignmentId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
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