const spread = <ARGS extends any[], R> (fn: (...args: ARGS) => R) => (args: ARGS) => fn(...args)

export default spread
