const toString = Object.prototype.toString

export const is = (val: unknown, type: string) => toString.call(val) === `[object ${type}]`

export const isFunction = (val: unknown) => is(val, 'Function')
