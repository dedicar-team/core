export * from './_bcrypt/_bcrypt.module'

import { BcryptAdapter } from './_bcrypt/_bcrypt.module'
export const bcryptAdapter = new BcryptAdapter({ saltRange: { min: 10, max: 99 } })