function branch<R0, R1> (pred: () => boolean, fn0: () => R0, fn1: () => R1): () => R0 | R1
function branch<T, R0, R1> (pred: (arg: T) => boolean, fn0: (p: T) => R0, fn1: (p: T) => R1): (arg: T) => R0 | R1
function branch<R> (pred: () => boolean, fn: () => R): () => R | undefined
function branch<T, R> (pred: (arg: T) => boolean, fn: (p: T) => R): (arg: T) => R | undefined

function branch (pred: any, ...fns: any[]) {
  return (arg: any) => (pred(arg) ? fns[0](arg) : fns[1] ? fns[1](arg) : void 0)
}

export default branch
