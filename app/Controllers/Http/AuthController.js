'use strict'

const { validate } = use('Validator')
const Hash = use('Hash')
const User = use('App/Models/User')

class AuthController {
    async login({response, request, view}){
        return view.render('auth/login')
    }
    async loginUser({response, request, view, auth, session}){
        // first step is to capture the data from the form

        const postData = request.post()

        //then we want to find the user in the database by their email 

        const user = await User.query().where('email', postData.email).first()
        if(user){
        //then we want to verify the password
        const passwordVerified = await Hash.verify(postData.password, user.password)
        
            if(passwordVerified) {
                await auth.login(user)
                session.flash({notification: 'Welcome to Toku'})
                return response.redirect('/')
            } else {
                //password incorrect
                session
                .withErrors([
                    {field: 'password', message: `Password incorrect`}           
                ])
                .flashExcept(['password'])
            return response.redirect('back')
            }
        } else {
            //cant find a user with that email 
            session
                .withErrors([
                    {field: 'email', message: `can't find a user with that email`}           
                ])
                .flashExcept(['password'])
            return response.redirect('back')
        }
    }
    async register({response, request, view}){
        return view.render('auth/register')
    }
    async forgotpassword({response, request, view}){
        return view.render('auth/forgotpassword')
    }
    async logout({response, request, view, auth}){
        try{
            await auth.logout()
        return response.redirect('/')
        } catch(error){
            console.log(error)
            return 'Error could not logout'
        }
        
    }


  async storeUser ({ request, session, response, auth}) {
   

    const validation = await validate(request.all(), {
        email: 'required|email|unique:users,email',
        password: 'required|min:6|max:40',
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
        } else {
            try {
                let newUser = await User.create({
                    email: request.input('email'), 
                    password: request.input('password'), 
        
                })
            } catch(error){
                // show errors
                console.log('error')
                session
        .withErrors([
            {field: 'database', message: 'problem with our database, try later'}           
        ])
        .flashExcept(['password'])
            return response.redirect('back')
            }
            session.flash({notification: 'Welcome to Toku'})
            return response.redirect('/')
        }
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
