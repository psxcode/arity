import * as sinon from 'sinon'
import binary from '../src/binary'

describe('[ binary ]', () => {
  it('should work', () => {
    const spy = sinon.spy()
    const un = binary(spy);
    (un as any)('a', 'b', 'c')
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWithExactly(spy, 'a', 'b')
  })
})
