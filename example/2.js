import { aqt } from 'rqt'
import { readFile } from 'fs'
import createError from '../src'
import Goa from '@goa/koa'
import { join } from 'path'

const goa = new Goa()

goa.use(async (ctx) => {
  await new Promise((r, j) => {
    readFile(join('example', ctx.path), (err) => {
      let httpError
      if (err.code == 'ENOENT') {
        httpError = createError(404, err, { expose: false })
      } else {
        httpError = createError(500, err)
      }
      j(httpError)
    })
  })
})
goa.listen(async function() {
  // 404
  console.log('Request missing file')
  let url = `http://localhost:${this.address().port}/missing.txt`
  let res = await aqt(url)
  console.log(res)
  // 500
  console.log('\nRequest a dir')
  url = `http://localhost:${this.address().port}/dir`
  res = await aqt(url)
  console.log(res)
  this.close()
})