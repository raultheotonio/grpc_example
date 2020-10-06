import grpc from 'grpc'
import fileLoader from '../proto'
import { promisifyAll } from 'grpc-promise'

const client = new fileLoader.fileLoader.RoleService('localhost:50051', grpc.credentials.createInsecure())

promisifyAll(client)

const findOne = async (id) => await client
  .findOne()
  .sendMessage({ idUser: id })

export { findOne }