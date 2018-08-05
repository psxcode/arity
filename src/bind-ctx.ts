function bindCtx <T> (ctx: T): <ARGS extends any[], R> (fn: (this: T, ...args: ARGS) => R) => (...args: ARGS) => R
function bindCtx (ctx: any) {
  return (fn: any) => (...args: any[]) => fn.apply(ctx, args)
}

export default bindCtx
