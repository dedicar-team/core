import type { WebSocket } from 'ws'
import { TypedEmitter } from 'tiny-typed-emitter'
import { redisClient, mongoose, prismaMongoose, trpcMongoose } from '@data'
import { WebSocketServer } from 'ws';

export const prisma = new WebSocketServer({ noServer: true });
export const trpc = new WebSocketServer({ noServer: true });
export const mongo = new WebSocketServer({ noServer: true });
export const redis = new WebSocketServer({ noServer: true });

// TODO: ADD THIS TO CORE PACKAGE
type TWebSocketEventFunction<T> = (data: T, ws?: WebSocket) => void

interface IWebSocketEvent {
    'log/prisma': TWebSocketEventFunction<Awaited<ReturnType<typeof prismaMongoose['findOne']>>>
    'log/trpc': TWebSocketEventFunction<Awaited<ReturnType<typeof trpcMongoose['findOne']>>>
}

class WebSocketEvent extends TypedEmitter<IWebSocketEvent> {
    constructor() {
        super()
    }
}

export const webSocketEvent = new WebSocketEvent()

//TODO: CHANGE STRUCTURE TO MIDDLEWARE
prisma.on('connection', (ws) => {
    webSocketEvent.on('log/prisma', (data, webSocket = ws) => {
        webSocket.send(JSON.stringify(data))
    })
})

trpc.on('connection', (ws) => {
    webSocketEvent.on('log/trpc', (data, webSocket = ws) => {
        webSocket.send(JSON.stringify(data))
    })
})

mongo.on('connection', (ws) => {
    mongoose.connection.on('open', () => {
        ws.send(JSON.stringify({
            emoji: '🔗',
            context: 'mongo',
            message: `connected successfully`,
            date: Date.now()
        }));
    });
    mongoose.connection.on('connectionReady', () => {
        ws.send(JSON.stringify({
            emoji: '✔️',
            context: 'mongo',
            message: `available to receive commands`,
            date: Date.now()
        }));
    });
    mongoose.connection.on('close', () => {
        ws.send(JSON.stringify({
            emoji: '🔒',
            context: 'mongo',
            message: `connection closed`,
            date: Date.now()
        }));
    });
    mongoose.connection.on('timeout', () => {
        ws.send(JSON.stringify({
            emoji: '⌛',
            context: 'mongo',
            message: `connection timeout`,
            date: Date.now()
        }));
    });
    mongoose.connection.on('error', (error) => {
        ws.send(JSON.stringify({
            context: 'mongo',
            message: `could not establish a connection: ${error}`,
            date: Date.now()
        }));
    });
})

// TODO: ADD TIME TO SEND
redis.on('connection', (ws) => {
    redisClient.on('connect', () => {
        ws.send(JSON.stringify({
            emoji: '🔗',
            context: 'redis',
            message: `connected successfully`,
            date: Date.now()
        }));
    });
    redisClient.on('ready', () => {
        ws.send(JSON.stringify({
            emoji: '✔️',
            context: 'redis',
            message: `available to receive commands`,
            date: Date.now()
        }));
    });
    redisClient.on('close', () => {
        ws.send(JSON.stringify({
            emoji: '🔒',
            context: 'redis',
            message: `connection closed`,
            date: Date.now()
        }));
    });
    redisClient.on('reconnecting', () => {
        ws.send(JSON.stringify({
            emoji: '♾️',
            context: 'redis',
            message: `trying to reconnect`,
            date: Date.now()
        }));
    });
    redisClient.on('error', (error) => {
        ws.send(JSON.stringify({
            context: 'redis',
            message: `could not establish a connection: ${error}`,
            date: Date.now()
        }));
    });
})