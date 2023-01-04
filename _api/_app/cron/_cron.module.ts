import cron from 'cron'
import { serverAdminPassword } from '@data'
import { stringUtils } from 'utils'

// const refreshRedisAdminPassword = new cron.CronJob(
//     '*/1 * * * *',
//     async () => {
//         try {
//             await serverAdminPassword.set(stringUtils.generateRandom({ length: 10, chars: 'aA#!' }))
//         } catch (e) {
//             winstonAdapter.error({ context: 'redis', message: JSON.stringify(e) })
//         }
//     },
//     null,
//     true)

// export const initCron = () => Promise.all([
//     (async () => {
//         refreshRedisAdminPassword.start()
//         return refreshRedisAdminPassword
//     })()
// ])
//     .then(([refreshRedisAdminPassword]) => ({
//         refreshRedisAdminPassword
//     }))