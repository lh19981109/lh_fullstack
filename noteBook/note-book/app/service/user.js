'use strict'
const Service =require('egg').Service
class UserService extends Service{
    async user(){
        return {
            title:'贵姓',
            content: '免贵'
        }
    }
}
module.exports=UserService