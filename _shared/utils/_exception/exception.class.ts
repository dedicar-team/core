// import { TRPCError } from '@trpc/server';
// import { Log } from '../utils.module';

import { IExceptionUtils } from './exception.interface'

export class ExceptionUtils implements IExceptionUtils { }

// type TError = 'internal' | 'database' | 'credential' | 'logged' | 'auth' | 'not_logged';

// export class Exception {
//     private log: Log = new Log()
//     private readonly ERROR_TO_TRPC: Record<TError, { code: TRPCError['code'], message: string }> = {
//         credential: { code: 'BAD_REQUEST', message: 'invalid email or password' },
//         logged: { code: 'FORBIDDEN', message: 'user already logged' },
//         not_logged: { code: 'FORBIDDEN', message: 'user not logged' },
//         auth: { code: 'UNAUTHORIZED', message: 'permission invalid for your role' },
//         internal: { code: 'INTERNAL_SERVER_ERROR', message: 'code error' },
//         database: { code: 'INTERNAL_SERVER_ERROR', message: 'database error' }
//     }
//     // 'cannot logout an inexistent session.'

//     constructor({ log = new Log() }: { log?: Log } = {}) {
//         this.log = log
//     }

//     TRPC({
//         type,
//         cause,
//     }: {
//         type: TError;
//         cause?: any;
//     }): TRPCError {
//         this.log.error({ context: 'TRPC', message: `${{ code: { ...this.ERROR_TO_TRPC[type], cause } }}` })
//         return new TRPCError({
//             ...this.ERROR_TO_TRPC[type],
//         });
//     }
// }

