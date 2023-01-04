import { PasswordModel } from '@data'

export interface IPasswordService {
    compare: (whereFind: Partial<PasswordModel>, passwordToCompare: string) => Promise<boolean>
    save: (data: PasswordModel) => Promise<any>
    update: (whereFind: Partial<PasswordModel>, data: Partial<PasswordModel>) => Promise<any>
}