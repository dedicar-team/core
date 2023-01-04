import type { TTrpcContext } from "@server";
import type { SessionOptions } from "express-session"
import type { ADMINISTRATIVE_LEVEL } from '@data';

import dotenv from 'dotenv'
dotenv.config()

import connectRedis from 'connect-redis'
import session from 'express-session'
import { redisClient } from '@data'

declare module 'express-session' {
    export interface SessionData {
        personUuid: string;
        role: ADMINISTRATIVE_LEVEL | undefined;
    }
}

export const RedisStore = connectRedis(session)

export const mySessionOptions: SessionOptions | undefined = {
    store: new RedisStore({ client: redisClient as any }),
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
    }
}

export const expressSession = session(mySessionOptions)
export const createSession = (ctx: TTrpcContext, { personUuid, role }: { personUuid: string, role?: ADMINISTRATIVE_LEVEL | undefined; }) => {
    ctx.req.session.personUuid = personUuid
    ctx.req.session.role = role
}

