export * from './middleware'
export * from './session'

import { expressMiddlewares } from './middleware'

import express from 'express'

export default express().use(expressMiddlewares)
