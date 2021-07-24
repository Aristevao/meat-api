import * as restify from 'restify'
import { Router } from "../common/router";
import { User } from "./UsersModel";

class UsersRouter extends Router {
    applyRoutes(application: restify.Server) {

        application.get('/users', (req, resp, next) => {
            User.find().then(users => {
                resp.json(users)
                return next()
            })
        })

        application.get('/users/:id', (req, resp, next) => {
            User.findById(req.params.id).then(user => {
                if(user) {
                    resp.json(user)
                    return next()
                }
                
                resp.send(404)
                return next()
            })
        })

        application.post('/users', (req, resp, next) => {
            const user = new User(req.body)
            user.save().then(user => {
                user.password = undefined
                resp.json(user)
                return next()
            })
        })
    }
}

export const usersRouter = new UsersRouter()