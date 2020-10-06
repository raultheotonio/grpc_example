import koa from 'koa'
import userRouter  from './domain/user/controller'
import mount  from 'koa-mount'


export default new koa()
    .use(mount('/v1/user', userRouter.routes()))
