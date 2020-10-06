import Router from 'koa-router'
import findUser from './find-user'

export default new Router()
  .get('/:id', async (ctx, next) =>{
    ctx.body = await findUser(ctx.params.id)
  })