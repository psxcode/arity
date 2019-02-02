import * as sinon from 'sinon'
import nullary from '../src/nullary'

describe('[ nullary ]', () => {
  it('should work', () => {
    const spy = sinon.spy()
    const un = nullary(spy);
    (un as any)('a', 'b', 'c')
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWithExactly(spy)
  })
})
