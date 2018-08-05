const nullary = <R> (fn: (...args: any[]) => R) => (): R => fn()

export default nullary
