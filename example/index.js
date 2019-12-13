import httpErrors from '../src'

(async () => {
  const res = await httpErrors({
    text: 'example',
  })
  console.log(res)
})()