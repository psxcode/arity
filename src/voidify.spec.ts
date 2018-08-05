import { expect } from 'chai'
import voidify from './voidify'

const id = (arg: number) => arg

describe('[ voidify ]', () => {
  it('should work', () => {
    const voided = voidify(id)
    expect(voided(42)).eq(undefined)
  })
})
