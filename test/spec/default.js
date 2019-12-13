import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import httpErrors from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof httpErrors, 'function')
  },
  async 'calls package without error'() {
    await httpErrors()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await httpErrors({
      text,
    })
    ok(res, text)
  },
}

export default T