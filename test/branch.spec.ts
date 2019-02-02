import { describe, it } from 'mocha'
import { expect } from 'chai'
import branch from '../src/branch'

describe('[ branch ]', () => {
  it('should work', async () => {
    const br = branch(
      (x: number) => x === 1,
      (x: number) => x,
      (x: number) => x * 2
    )
    expect(br(1)).eq(1)
    expect(br(2)).eq(4)
  })

  it('should work', async () => {
    let res = true
    const br = branch(
      () => res,
      () => 1,
      () => 4
    )
    expect(br()).eq(1)
    res = false
    expect(br()).eq(4)
  })

  it('should work', async () => {
    const br = branch(
      (x: number) => x === 1,
      (x: number) => x
    )
    expect(br(1)).eq(1)
    expect(br(2)).eq(undefined)
  })

  it('should work', async () => {
    let res = true
    const br = branch(
      () => res,
      () => 2
    )
    expect(br()).eq(2)
    res = false
    expect(br()).eq(undefined)
  })
})
