function bind<T0> (p0: T0): <REST extends any[], R>(fn: (p0: T0, ...rest: REST) => R) => (...rest: REST) => R
function bind<T0, T1> (p0: T0, p1: T1): <REST extends any[], R>(fn: (p0: T0, p1: T1, ...rest: REST) => R) => (...rest: REST) => R
function bind<T0, T1, T2> (p0: T0, p1: T1, p2: T2): <REST extends any[], R>(fn: (p0: T0, p1: T1, p2: T2, ...rest: REST) => R) => (...rest: REST) => R
function bind<T0, T1, T2, T3> (p0: T0, p1: T1, p2: T2, p3: T3): <REST extends any[], R>(fn: (p0: T0, p1: T1, p2: T2, p3: T3, ...rest: REST) => R) => (...rest: REST) => R
function bind (...args0: any[]) {
  return (fn: any) => (...args1: any[]) => fn(...args0, ...args1)
}

export default bind
