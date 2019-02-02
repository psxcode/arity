import { describe, it } from 'mocha'
import { expect } from 'chai'
import spread from '../src/spread'

describe('[ spread ]', () => {
  it('should work', () => {
    const spy = (a: number, b: string, c: boolean) => {
      void a
      void b
      void c

      return 42
    }
    const f = spread(spy)
    f([1, 'a', true])
  })
})
