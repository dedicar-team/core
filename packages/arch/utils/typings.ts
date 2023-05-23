export type Constructor<T extends abstract new (...args: any) => any> = ConstructorParameters<T>['0']
export type ReturnPromise<T extends (...args: any) => any> = Awaited<ReturnType<T>>
export type RequestData = { body: unknown, return?: unknown }
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export function createEnum<T extends string>(arr: readonly T[]): {[K in T]: K} {
    return arr.reduce((acc, val) => {
      acc[val] = val;
      return acc;
    }, {} as {[K in T]: K});
  }