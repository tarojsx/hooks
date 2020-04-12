/**
 * 等待 Promise
 * @param ms 单位: 毫秒
 */
export const sleep = (ms = 0) => new Promise<void>(resolve => setTimeout(resolve, ms))
