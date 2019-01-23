export const INCR = 'INCR'

export function increment(value) {
    return { type: INCR, value }
}
