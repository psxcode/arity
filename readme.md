# Arity

[![Greenkeeper badge](https://badges.greenkeeper.io/psxcode/arity.svg)](https://greenkeeper.io/)

Functional helpers, with Typescript type propagation

### Install
```
npm install @psxcode/arity
```

### `nullary`
```ts
import { nullary } from '@psxcode/arity'

const f: (p0: number, p1: string) => boolean

typeof nullary(f)  // () => boolean
```
### `unary`
```ts
import { unary } from '@psxcode/arity'

const f: (p0: number, p1: string) => boolean

typeof unary(f)  // (p0: number) => boolean
```
### `binary`
```ts
import { binary } from '@psxcode/arity'

const f: (p0: number, p1: string, p2: number) => boolean

typeof binary(f)  // (p0: number, p1: string) => boolean
```
### `ternary`
```ts
import { ternary } from '@psxcode/arity'

const f: (p0: number, p1: string, p2: number, p3: string) => boolean

typeof ternary(f)  // (p0: number, p1: string, p2: number) => boolean
```
### `voidify`
```ts
import { voidify } from '@psxcode/arity'

const f: (p0: number, p1: string) => boolean

typeof voidify(f)  // (p0: number, p1: string) => void
```

### `bind`
```ts
import { bind } from '@psxcode/arity'

const f: (p0: number, p1: string, p2: boolean) => boolean

typeof bind(10)(f)  // (p0: string, p1: boolean) => boolean

typeof bind(10, 'str')(f)  // (p1: boolean) => boolean

typeof bind(10, 'str', true)(f)  // () => boolean
```
### `bindCtx`
```ts
import { bindCtx } from '@psxcode/arity'

const ctx: { [k: string]: any }
const f: (this: typeof ctx, p0: number) => boolean

typeof bindCtx(ctx)(f)  // (p0: number) => boolean
```
### `bindProps`
```ts
import { bindProps } from '@psxcode/arity'

const props: {
  a: number,
  b: string
}
const f: (p: typeof props) => boolean

typeof bindProps({ a: 10 })(f)  // (p: { b: string }) => boolean
```

### `curry`
```ts
import { curry } from '@psxcode/arity'

const f: (a: number, b: string) => boolean

typeof curry(f)  // (a: number) => (b: string) => boolean
```
### `gather`
```ts
import { gather } from '@psxcode/arity'

const f: (p: [number, string, boolean]) => boolean

typeof gather(f)  // (p0: number, p1: string, p2: boolean) => boolean
```
### `spread`
```ts
import { spread } from '@psxcode/arity'

const f: (a: number, b: string, c: boolean) => boolean

typeof spread(f)  // (args: [number, string, boolean]) => boolean
```

### `branch`
```ts
import { branch } from '@psxcode/arity'

const f0: (a: number) => string
const f1: (a: number) => number
const pred = (a: number) => true

typeof branch(pred, f0)  // (a: number) => string | undefined

typeof branch(pred, f0, f1)  // (a: number) => string | number
```

### `and`
```ts
import { and } from '@psxcode/arity'

const f0: (a: number) => boolean
const f1: (a: number) => boolean

typeof and(f0, f1)  // (a: number) => boolean
```
### `or`
```ts
import { or } from '@psxcode/arity'

const f0: (a: number) => boolean
const f1: (a: number) => boolean

typeof or(f0, f1)  // (a: number) => boolean
```

### `noop`
```ts
import { noop } from '@psxcode/arity'

typeof noop  // () => void
```
### `identity`
```ts
import { identity } from '@psxcode/arity'

typeof identity  // <T> (a: T) => T
```
### `identityAsync`
```ts
import { identityAsync } from '@psxcode/arity'

typeof identityAsync  // <T> (a: T) => Promise<T>
```
### `constant`
```ts
import { constant } from '@psxcode/arity'

typeof constant  // <T> (a: T) => () => T
```
### `constantAsync`
```ts
import { constantAsync } from '@psxcode/arity'

typeof constantAsync  // <T> (a: T) => () => Promise<T>
```
