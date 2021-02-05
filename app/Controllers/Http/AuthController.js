'use strict'

class AuthController {
    async login({response, request, view}){
        return view.render('auth/login')
    }
    async register({response, request, view}){
        return view.render('auth/register')
    }
    async forgotpassword({response, request, view}){
        return view.render('auth/forgotpassword')
    }
}

module.exports = AuthController
