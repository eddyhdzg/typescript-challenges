export type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key
}
