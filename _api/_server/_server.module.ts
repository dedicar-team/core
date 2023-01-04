export * from './express/_express.module'
export * from './trpc/_trpc.module'
export * from './ws/_web_sockets.module'

import { expressHandler } from 'trpc-playground/handlers/express'
import expressServer, { RedisStore } from './express/_express.module'
import { trpcRouter } from './trpc/_trpc.module'
import { parse } from 'url';
import cookie from 'cookie'
import { trpcExpressMiddlewareAdapter } from './trpc/_trpc.module'
import { mongo, prisma, redis, trpc } from './ws/_web_sockets.module'

const initServer = async () => {
    expressServer.use('/trpc', trpcExpressMiddlewareAdapter)
    expressServer.use('/trpc-playground', await expressHandler({
        trpcApiEndpoint: '/trpc',
        playgroundEndpoint: '/trpc-playground',
        router: trpcRouter
    }))
    expressServer.on('error', (error) => {
        console.log(error)
    })
    expressServer.listen(process.env.PORT, () => {
        console.log({ emoji: '✔️', context: 'server', message: `server has started on port ${process.env.PORT}.` })
    })
        // TODO: IF NOT WORK CHANGE TO SOCKET.IO
        .on('upgrade', (req, socket, head) => {
            const { pathname } = parse(req.url!);
            if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'staging') {
                const cookies = cookie.parse(req.headers.cookie || '');
                if (!req.headers.cookie) socket.destroy()
                RedisStore.get(cookies['connection.sid'], (err, session) => {
                    if (err) socket.destroy()
                    if (!session?.personUuid && session?.role != 'DELETE') socket.destroy()
                })
            }
            switch (pathname) {
                case '/log/prisma':
                    prisma.handleUpgrade(req, socket, head, (ws) => {
                        prisma.emit('connection', ws, req);
                    });
                    break;
                case '/log/trpc':
                    trpc.handleUpgrade(req, socket, head, (ws) => {
                        trpc.emit('connection', ws, req);
                    });
                    break;
                case '/log/mongo':
                    mongo.handleUpgrade(req, socket, head, (ws) => {
                        mongo.emit('connection', ws, req);
                    });
                    break;
                case '/log/redis':
                    redis.handleUpgrade(req, socket, head, (ws) => {
                        redis.emit('connection', ws, req);
                    });
                    break;
                default:
                    socket.destroy()
                    break;
            }
        })
    return expressServer
}

export default initServer
