'use strict'

class ApiController {
    async initialApp ({auth}) {
        return {
        userInfo: auth.user, 
        latestPost:'', 
        }
    }
}

module.exports = ApiController
