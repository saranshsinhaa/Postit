import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import config from '../config'
import routes from '../api'
import { Request, Response, NextFunction } from 'express'
import Logger from './logger'

export default ({ app }: { app: express.Application }): Express.Application => {
    app.get('/healthcheck', (req, res) => {
        const healthCheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now(),
        }
        try {
            return res.json(healthCheck)
        } catch (e) {
            return res.status(503).send()
        }
    })

    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy')
    app.use(helmet()) // Middleware that helps secure app by setting headers
    app.use(cors()) //Enable Cross Origin Resource Sharing to all origins by default

    app.use(express.json({ limit: '2mb' })) // Middleware that transforms the raw string of req.body into json
    app.use(config.api.prefix, routes()) // Load API routes

    app.use((err, req: Request, res: Response, next: NextFunction) => {
        Logger.error(err)
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || '🔌 Unknown Server Error Occurred 🔌',
            display: err.display || 'Null',
        })
    })
    return app
}
