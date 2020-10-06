import _ from 'lodash'
import datas from '../../role.json'

export default (call, callback) => callback(null,{
    message: _.find(datas, { idUser: call.request.idUser}) 
})