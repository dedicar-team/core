import cors from 'cors'
import morgan from 'morgan'
import { Router } from 'express'
import { expressSession } from './session'

import dotenv from 'dotenv'
dotenv.config()

export const expressMiddlewares = Router()
    .use(cors({ origin: process.env.NODE_ENV == 'development' ? ['http://172.20.16.1:5173'] : ['*'], credentials: true, optionsSuccessStatus: 200 }))
    .use(expressSession)
    .use(morgan('🌐 [server] :method :url :status :res[content-length] - :response-time ms | [:date[iso]]', {
        skip: (req, res) => req.url !== '/trpc-playground'
    }))