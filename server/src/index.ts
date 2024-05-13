import express from 'express'
import config from './config'
import Loaders from './loaders'
import Logger from './loaders/logger'

const startServer = async () => {
    try {
        const app = express()
        await Loaders({ expressApp: app })
        app.listen(config.port, () => {
            Logger.info(`🛡️ Server listening on port: ${config.port} 🛡️`)
        }).on('error', (err) => {
            Logger.error(err)
            process.exit(1)
        })
    } catch (error) {
        Logger.error(error)
        process.exit(1)
    }
}

startServer()
