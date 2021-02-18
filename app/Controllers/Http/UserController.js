'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
    async profile ({auth, request, response}) {
    try{
        const user = await User.query().where('id', '=', request.params.id).fetch()
      
        
        console.log(user.toJSON())
        return {
            user: user.toJSON(), 
            // following: (following === undefined || following.length == 0) ? false : true,
            // userProfile: userProfile.data.user[0]
        }

    } catch(error){
        console.log(error)
    }
    

    }
    async follow ({auth, request, response}) {
        try{
            // const user = await User.query().where('id', '=', request.params.id).fetch()
            
            const followedUser = await Database.table('followers').insert({
                user_id: auth.user.id,
                follow_id: request.params.id
            })
            
            console.log(followedUser)
            return 'saved successfully'
    
        } catch(error){
            console.log(error)
        }
        
    
        }

        async unfollow ({auth, request, response}) {
            try{
                // const user = await User.query().where('id', '=', request.params.id).fetch()
                
                const followedUser = await Database.table('followers').where({
                    user_id: auth.user.id,
                    follow_id: request.params.id
                }).delete()
                
                console.log(followedUser)
                return 'deleted successfully'
        
            } catch(error){
                console.log(error)
            }
            
        
            }

}
module.exports = UserController
