import grpc from 'grpc'
import fileLoader from './proto'
import { findOne } from '../domain/role'

const boot = () =>{
    const server = new grpc.Server()

    server.addService(fileLoader.fileLoader.RoleService.service, { findOne })
    server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('Iniciado!')
}

boot()