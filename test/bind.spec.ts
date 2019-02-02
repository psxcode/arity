import { expect } from 'chai'
import bind from '../src/bind'

const id = (value: number) => value
const add = (a: number, b: number) => a + b
const sum = (a: number, b: number, c: number) => a + b + c

describe('[ bind ]', () => {
  it('should work as a constant', () => {
    const binded = bind(10)(id)
    expect(binded()).eq(10)
  })

  it('should work', () => {
    const binded = bind(10)(add)
    expect(binded(10)).eq(20)
  })

  it('should work', () => {
    const binded = bind(10)(sum)
    expect(binded(10, 20)).eq(40)
  })
})
