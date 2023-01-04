import "reflect-metadata";
import initServer from '@server'
// import { initCron } from '@app'

import dotenv from 'dotenv'
dotenv.config()

// TODO: ADD ACTIVE ATTRIBUTE TO KEY ENTITIES, MAKE WAY TO LOG THIS CHANGING ACTION BY ADMIN INTERFACE
// TODO: ADD ACCEPTED ATTRIBUTE IN CONTRACT PRISMA SCHEMA
// await Promise.all([
//   initServer(),
//   initCron()
// ]).catch(e => console.log(e))
initServer().catch(res => console.log(res))