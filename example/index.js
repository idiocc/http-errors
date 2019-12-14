import { aqt } from 'rqt'
import httpErrors from '../src'
import Goa from '@goa/koa'

const goa = new Goa()

goa.use(() => {
  throw httpErrors(401, 'Please login to view this page.')
})
goa.listen(async function() {
  const url = `http://localhost:${this.address().port}`
  const res = await aqt(url)
  console.log(res)
  this.close()
})