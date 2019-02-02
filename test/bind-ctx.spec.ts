import { expect } from 'chai'
import bindCtx from '../src/bind-ctx'

function getFromCtx (this: { val0: number }) {
  return this.val0
}

describe('[ bindCtx ]', () => {
  it('should work as a constant', () => {
    const ctx = {
      val0: 0
    }
    const binded = bindCtx(ctx)(getFromCtx)
    expect(binded() === 0).eq(true)
  })
})
