export * from "./_array/_array.module"
export * from './_exception/_exception.module'
export * from "./_object/_object.module"
export * from "./_string/_string.module"

import { ArrayUtils } from './_array/_array.module'
import { ExceptionUtils } from './_exception/_exception.module'
import { ObjectUtils } from './_object/_object.module'
import { StringUtils } from './_string/_string.module'

export const arrayUtils = new ArrayUtils()
export const exceptionUtils = new ExceptionUtils()
export const objectUtils = new ObjectUtils()
export const stringUtils = new StringUtils()