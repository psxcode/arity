import { describe, it } from 'mocha'
import { expect } from 'chai'
import constantAsync from '../src/constant-async'

describe('[ constantAsync ]', () => {
  it('should return same value', async () => {
    expect(await constantAsync(42)()).eq(42)
  })
})
