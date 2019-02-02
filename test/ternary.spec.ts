import { describe, it } from 'mocha'
import { expect } from 'chai'
import { createSpy, getSpyCalls } from 'spyfn'
import ternary from '../src/ternary'

describe('[ ternary ]', () => {
  it('should work', () => {
    const spy = createSpy(() => {})
    const un = ternary(spy);
    (un as any)('a', 'b', 'c', 'd')

    expect(getSpyCalls(spy)).deep.eq([
      ['a', 'b', 'c'],
    ])
  })
})
