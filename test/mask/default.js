import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import httpErrors from '../../src'

// export default
makeTestSuite('test/result/default', {
  async getResults() {
    const res = await httpErrors({
      text: this.input,
    })
    return res
  },
  context: Context,
})