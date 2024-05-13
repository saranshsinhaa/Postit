import { Router } from 'express'
import healthCheckRoute from './healthcheck'
import mainRouter from './main/routes'

export default (): Router => {
    const app = Router()
    //TODO: add routes here...
    app.use('/health', healthCheckRoute)
    app.use('/', mainRouter)

    return app
}
