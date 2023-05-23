export const BANK_ACCOUNT = ['NONE','CHECKING', 'SAVING', 'SALARY'] as const
export type BANK_ACCOUNT = typeof BANK_ACCOUNT[number] 