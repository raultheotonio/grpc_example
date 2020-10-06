import grpc from 'grpc'
import { loadSync } from '@grpc/proto-loader'

const file_proto = loadSync(
  `${__dirname}/roleProto.proto`,
  {
    keepCase: true,
    defaults: true,
    oneofs: true
  })

const fileLoader = grpc.loadPackageDefinition(file_proto).roleMessage

export default fileLoader