const voidify = <ARGS extends any[], R> (fn: (...args: ARGS) => R) =>
  (...args: ARGS): void => {
    fn(...args)
  }

export default voidify
