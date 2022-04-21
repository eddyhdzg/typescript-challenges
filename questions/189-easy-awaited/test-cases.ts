import type { Equal, Expect } from "@type-challenges/utils"

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer K>
  ? K extends Promise<unknown>
    ? MyAwaited<K>
    : K
  : undefined

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
]

// @ts-expect-error
type error = MyAwaited<number>
