import _ from 'lodash'
import { get } from 'lodash/fp'
import datas from '../user.json'
import { findOne } from '../../../grpc/client'

export default async (id) =>{
   
   const user =  _.find(datas, { id: id  })
   
   const role = await findOne(id)
   
   return {...user, roles:[ get('message.desc', role) ]}

  }