import Koa  from 'koa'
import mount from 'koa-mount'
import route  from './route'

const app = new Koa()

app.use(mount('/', route) )


app.listen(3000)
console.log('Client start')