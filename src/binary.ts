const binary = <A, B, R> (fn: (arg1: A, arg2: B, ...args: any[]) => R) =>
  (arg1: A, arg2: B): R => fn(arg1, arg2)

export default binary
