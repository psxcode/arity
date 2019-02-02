import { describe, it } from 'mocha'
import { expect } from 'chai'
import identity from '../src/identity'

describe('[ identity ]', () => {
  it('should return same value', () => {
    expect(identity(42)).eq(42)
  })
})
