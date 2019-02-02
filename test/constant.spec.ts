import { expect } from 'chai'
import constant from '../src/constant'

describe('[ constant ]', () => {
  it('should return same value', () => {
    expect(constant(42)()).eq(42)
  })
})
