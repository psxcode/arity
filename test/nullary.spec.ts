import { describe, it } from 'mocha'
import { expect } from 'chai'
import { createSpy, getSpyCalls } from 'spyfn'
import nullary from '../src/nullary'

describe('[ nullary ]', () => {
  it('should work', () => {
    const spy = createSpy(() => {})
    const un = nullary(spy);
    (un as any)('a', 'b', 'c')

    expect(getSpyCalls(spy)).deep.eq([
      [],
    ])
  })
})
