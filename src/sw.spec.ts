import { expect } from 'chai'
import sw from './sw'

describe('[ sw ]', () => {
  it('should work', () => {
    const br = sw(x => x === 1, x => x, x => x * 2)
    expect(br(1)).eq(1)
    expect(br(2)).eq(4)
  })

  it('should work', () => {
    const br = sw(x => x === 1, x => x)
    expect(br(1)).eq(1)
    expect(br(2)).eq(undefined)
  })

  it('should work', () => {
    const br = sw()
    expect(br(1)).eq(undefined)
  })

  it('should work', () => {
    const br = sw(x => x === 1)
    expect(br(2)).eq(undefined)
  })

  it('should work', () => {
    const br = sw(x => x === 1, x => x, x => x === 2, x => x * 2, () => 5)
    expect(br(1)).eq(1)
    expect(br(2)).eq(4)
    expect(br()).eq(5)
  })
})
