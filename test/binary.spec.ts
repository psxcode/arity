import { describe, it } from 'mocha'
import { createSpy, getSpyCalls } from 'spyfn'
import { expect } from 'chai'
import binary from '../src/binary'

describe('[ binary ]', () => {
  it('should work', () => {
    const spy = createSpy(() => {})
    const un = binary(spy);
    (un as any)('a', 'b', 'c')

    expect(getSpyCalls(spy)).deep.eq([
      ['a', 'b'],
    ])
  })
})
