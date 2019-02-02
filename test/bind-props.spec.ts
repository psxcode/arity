import { expect } from 'chai'
import bindProps from '../src/bind-props'

const addNamed = <S0 extends string, S1 extends string>(a: S0, b: S1) =>
  (p: { [k in S0 | S1]: number }) => p[a] + p[b]

describe('[ bindProps ]', () => {
  it('should work', () => {
    const binded = bindProps({ val0: 5 })(addNamed('val0', 'val1'))
    expect(binded({ val1: 10 })).eq(15)
  })
})
