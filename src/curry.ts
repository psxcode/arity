function curry <A, B, C, D, E, F, G, H, R> (fn: (p0: A, p1: B, p2: C, p3: D, p4: E, p5: F, p6: G, p7: H) => R): (p0: A) => (p1: B) => (p2: C) => (p3: D) => (p4: E) => (p5: F) => (p6: G) => (p7: G) => R
function curry <A, B, C, D, E, F, G, R> (fn: (p0: A, p1: B, p2: C, p3: D, p4: E, p5: F, p6: G) => R): (p0: A) => (p1: B) => (p2: C) => (p3: D) => (p4: E) => (p5: F) => (p6: G) => R
function curry <A, B, C, D, E, F, R> (fn: (p0: A, p1: B, p2: C, p3: D, p4: E, p5: F) => R): (p0: A) => (p1: B) => (p2: C) => (p3: D) => (p4: E) => (p5: F) => R
function curry <A, B, C, D, E, R> (fn: (p0: A, p1: B, p2: C, p3: D, p4: E) => R): (p0: A) => (p1: B) => (p2: C) => (p3: D) => (p4: E) => R
function curry <A, B, C, D, R> (fn: (p0: A, p1: B, p2: C, p3: D) => R): (p0: A) => (p1: B) => (p2: C) => (p3: D) => R
function curry <A, B, C, R> (fn: (p0: A, p1: B, p2: C) => R): (p0: A) => (p1: B) => (p2: C) => R
function curry <A, B, R> (fn: (p0: A, p1: B) => R): (p0: A) => (p1: B) => R
function curry <A, R> (fn: (p0: A) => R): (p0: A) => R
function curry (fn: any) {
  const args: any[] = []
  return function curried (arg: any) {
    args.push(arg)
    return args.length < fn.length ? curried : fn(...args)
  }
}

export default curry
