const bindProps = <P0 extends {}> (p0: P0) =>
  <A0 extends P0, R> (fn: (props: A0) => R) =>
    (p1: {[k in Exclude<keyof A0, keyof P0>]: A0[k]}) =>
      fn(({ ...p0, ...p1 }) as A0)

export default bindProps
