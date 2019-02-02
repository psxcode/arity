import { describe, it } from 'mocha'
import { expect } from 'chai'
import { createSpy, getSpyCalls } from 'spyfn'
import unary from '../src/unary'

describe('[ unary ]', () => {
  it('should work', () => {
    const spy = createSpy(() => {})
    const un = unary(spy);
    (un as any)('a', 'b', 'c')

    expect(getSpyCalls(spy)).deep.eq([
      ['a'],
    ])
  })
})
