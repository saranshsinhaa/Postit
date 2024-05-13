import { NextFunction, Request, Response, Router } from 'express'
import os from 'os'

const healthCheckRoute = Router()
const timeElapsed = Date.now()
const today = new Date(timeElapsed)

const formatTime = (seconds) => {
    function pad(s) {
        return (s < 10 ? '0' : '') + s
    }
    const hours = Math.floor(seconds / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    const secs = Math.floor(seconds % 60)

    return `${pad(hours)} : ${pad(minutes)} : ${pad(secs)}`
}

healthCheckRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        const healthCheckData = {
            message: '🛠️ Book My Event Backend Working 🛠️',
            timestamp: today.toUTCString(),
            architecture: os.arch(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            platform: os.platform(),
            osType: os.type(),
            osRelease: os.release(),
            osVersion: os.version(),
            hostname: os.hostname(),
            userInfo: os.userInfo(),
            serverUptime: formatTime(process.uptime()),
            osUptime: formatTime(os.uptime()),
            reqIP: req.ip,
        }
        res.status(200).json({ status: true, message: healthCheckData })
        next()
    } catch (e) {
        res.status(503).json({
            success: false,
            message: '🚫 API Health Check Failed 🚫',
        })
    }
})

export default healthCheckRoute
