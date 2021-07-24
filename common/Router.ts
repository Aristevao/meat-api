import * as restify from 'restify'


export abstract class Router {
    abstract applyRoutes(application: restify.Server)

    // ---- ROUTES ----
    // applyRoutes.get('/hello', (req, resp, next) => {
    //     resp.json({ message: 'hello' })
    //     return next()
    // })
}