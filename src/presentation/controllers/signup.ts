import { MissingParamError } from "../errors/missing-pagram-error"
import { badRequest } from "../helpers/http-helper"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SignupController {
    handle(httpRequest: HttpRequest): HttpResponse {
        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
            
        }
    }
}