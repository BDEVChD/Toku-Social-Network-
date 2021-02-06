'use strict'

const { validate } = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')

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


  async storeUser ({ request, session, response, auth}) {
   

    const validation = await validate(request.all(), {
        email: 'required|email|unique:users,email',
        password: 'required',
        confirm_password: 'required'
      })

  
 
//check if passwords match
    if(request.input('password') == request.input('confirm_password')){
        //check if it passes validation
    if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashExcept(['password'])
    
          return response.redirect('back')
        return `error theres a problem with email error`
        } else {
            try {
                let newUser = await User.create({
                    email: request.input('email'), 
                    password: request.input('password'), 
        
                })
            } catch(error){
                console.log('error')
                return 'problems with database'
            }
            
        }

        return 'Validation passed'
      } else {
        session
        .withErrors([
            {field: 'password', message: 'need to confirm password'},
            {field: 'confirm_password', message: 'need to confirm password'}            
        ])
        .flashExcept(['password'])

      return response.redirect('back')
          return `passwords don't match`
        }




    }

}





module.exports = AuthController
