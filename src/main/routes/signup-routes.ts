import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSignupController } from '../config/factories/singup'

export default (router: Router): void => {
    router.post('/signup', adaptRoute(makeSignupController()))
}