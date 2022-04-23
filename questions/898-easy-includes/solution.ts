import type { Equal } from "@type-challenges/utils"

export type Includes<T extends readonly any[], U> = T extends [
  infer P,
  ...infer R
]
  ? Equal<P, U> extends true
    ? true
    : Includes<R, U>
  : false
