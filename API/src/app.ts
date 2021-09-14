import 'dotenv/config'
import 'express-async-errors'
import Express, { NextFunction, Request, Response } from "express";
import * as Sentry from '@sentry/node'
import cors from 'cors'
import helmet from 'helmet'
import { router } from "./router/router";
import sentryConfig from './config/sentry'
import Youch from 'youch';

class App {
    public server
    constructor() {
        this.server = Express()

        Sentry.init(sentryConfig)

        this.middleware()
        this.router()
        this.exceptionHandle()
    }

    middleware() {
        this.server.use(Sentry.Handlers.requestHandler())
        this.server.use(Express.json())
        this.server.use(cors({
            origin: process.env.URL_FRONT
        }))
        this.server.use(helmet())
    }

    router() {
        this.server.use(router)
        this.server.use(Sentry.Handlers.errorHandler())
        this.server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if (err instanceof Error) return res.status(400).json(err.message)
            return res.status(500).json({err: 'internal server error'})
        })
    }

    exceptionHandle() {
        this.server.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
            if (process.env.NODE_ENV === 'development')  {
                const errors = await new Youch(err, req).toJSON()
                return res.status(500).json(errors)
            }

            return res.status(500).json({ erro: 'internal server error' })
        })
    }
}

export default new App().server