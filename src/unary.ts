const unary = <A, R> (fn: (arg: A, ...args: any[]) => R) =>
  (arg: A): R => fn(arg)

export default unary
